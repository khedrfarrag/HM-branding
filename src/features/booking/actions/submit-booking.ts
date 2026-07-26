"use server";

import { supabaseAdmin } from "@/repositories/supabase/client";
import { ResendEmailGateway } from "@/integrations/email/resend";
import type { BookingTargetType } from "@/domains/booking/repository";

import { PublicBookingSchema } from "../schemas/booking.schema";

// ─── Response Type ─────────────────────────────────────────────────────────
export type BookingActionResult =
  | { success: true; bookingId: string; confirmationCode: string }
  | { success: false; error: string; fieldErrors?: Record<string, string[]> };

// ─── Server Action (T009) ──────────────────────────────────────────────────
/**
 * submitBookingAction — processes public booking submissions.
 *
 * Flow:
 * 1. Validate input (Zod)
 * 2. Upsert client record
 * 3. Reserve seat (atomic DB transaction via RPC) if scheduleId provided
 * 4. Create booking record (status = "pending")
 * 5. Write initial audit log entry
 * 6. Send confirmation email via Resend
 * 7. Return bookingId + confirmationCode
 */
export async function submitBookingAction(
  rawData: unknown
): Promise<BookingActionResult> {
  // ── Step 1: Validate ──────────────────────────────────────────────────────
  const parsed = PublicBookingSchema.safeParse(rawData);
  if (!parsed.success) {
    return {
      success: false,
      error: "بيانات الطلب غير مكتملة. يرجى المراجعة.",
      fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  const { name, email, phone, country, targetType, scheduleId, notes, locale } =
    parsed.data;
  const isAr = locale === "ar";

  try {
    // ── Step 2: Upsert client ───────────────────────────────────────────────
    const { data: clientData, error: clientError } = await supabaseAdmin
      .from("clients")
      .upsert({ name, email, phone, country }, { onConflict: "email" })
      .select("id")
      .single();

    if (clientError || !clientData) {
      console.error("[Booking] Client upsert failed:", clientError);
      return { success: false, error: "حدث خطأ أثناء حفظ بياناتك. يرجى المحاولة مجدداً." };
    }

    // ── Step 3: Reserve seat (if experience with schedule) ─────────────────
    if (scheduleId) {
      const { data: reserved, error: rpcError } = await supabaseAdmin.rpc(
        "reserve_seat",
        { p_schedule_id: scheduleId }
      );

      if (rpcError) {
        console.error("[Booking] reserve_seat RPC error:", rpcError);
        return { success: false, error: "حدث خطأ في التحقق من التوفر. يرجى المحاولة لاحقاً." };
      }

      if (!reserved) {
        return {
          success: false,
          error: isAr
            ? "عذراً، لا توجد مقاعد متاحة في هذه الجلسة."
            : "Sorry, no seats are available for this session.",
        };
      }
    }

    // ── Step 4: Create booking record ───────────────────────────────────────
    const { data: booking, error: bookingError } = await supabaseAdmin
      .from("bookings")
      .insert({
        client_id: clientData.id,
        schedule_id: scheduleId ?? null,
        target_type: targetType as BookingTargetType,
        status: "pending",
        notes: notes ?? null,
      })
      .select("id")
      .single();

    if (bookingError || !booking) {
      // If booking insert fails after seat was reserved, release the seat
      if (scheduleId) {
        await supabaseAdmin.rpc("release_seat", { p_schedule_id: scheduleId });
      }
      console.error("[Booking] Booking insert failed:", bookingError);
      return { success: false, error: "حدث خطأ في تسجيل الحجز. يرجى التواصل معنا مباشرة." };
    }

    // ── Step 5: Write audit log ─────────────────────────────────────────────
    await supabaseAdmin.from("booking_audit_logs").insert({
      booking_id: booking.id,
      action: "BOOKING_CREATED",
      details: `Client ${email} submitted a ${targetType} request.`,
      performed_by: "system",
    });

    // ── Step 6: Send confirmation email ────────────────────────────────────
    const emailGateway = new ResendEmailGateway();
    try {
      await emailGateway.sendEmail({
        to: email,
        subject: isAr
          ? `تأكيد استلام طلب الحجز — ${booking.id}`
          : `Booking Request Received — ${booking.id}`,
        html: buildConfirmationEmail({ name, bookingId: booking.id, targetType, isAr }),
      });
    } catch (emailErr) {
      // Email failure does NOT abort the booking — it is logged and admin is notified
      console.error("[Booking] Email confirmation failed, booking flagged:", emailErr);
      await supabaseAdmin.from("booking_audit_logs").insert({
        booking_id: booking.id,
        action: "EMAIL_FAILED",
        details: String(emailErr),
        performed_by: "system",
      });
    }

    return {
      success: true,
      bookingId: booking.id,
      confirmationCode: booking.id.slice(0, 8).toUpperCase(),
    };
  } catch (err) {
    console.error("[Booking] Unexpected error:", err);
    return { success: false, error: "حدث خطأ غير متوقع. يرجى التواصل معنا مباشرة." };
  }
}

// ─── Email Template ──────────────────────────────────────────────────────────
function buildConfirmationEmail({
  name,
  bookingId,
  targetType,
  isAr,
}: {
  name: string;
  bookingId: string;
  targetType: string;
  isAr: boolean;
}): string {
  const shortCode = bookingId.slice(0, 8).toUpperCase();
  if (isAr) {
    return `
      <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0B0D11; color: #fff; padding: 32px; border-radius: 12px;">
        <h1 style="color: #C7A15C; margin-bottom: 8px;">حسام مبروك</h1>
        <h2 style="color: #fff;">تأكيد استلام طلب الحجز</h2>
        <p>عزيزي <strong>${name}</strong>،</p>
        <p>تم استلام طلبك بنجاح. سيتواصل معك فريقنا قريباً للتأكيد.</p>
        <div style="background: #1a1d24; border-radius: 8px; padding: 16px; margin: 24px 0;">
          <p style="margin: 0; color: #999;">رمز الحجز</p>
          <h2 style="margin: 4px 0; color: #C7A15C; font-family: monospace;">${shortCode}</h2>
          <p style="margin: 0; color: #999; font-size: 12px;">المعرف الكامل: ${bookingId}</p>
        </div>
        <p style="color: #999; font-size: 14px;">نوع الطلب: ${targetType}</p>
        <hr style="border-color: #333; margin: 24px 0;" />
        <p style="color: #666; font-size: 12px;">هذا بريد تلقائي، لا تقم بالرد عليه مباشرة.</p>
      </div>`;
  }
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0B0D11; color: #fff; padding: 32px; border-radius: 12px;">
      <h1 style="color: #C7A15C; margin-bottom: 8px;">Hussam Mabrouk</h1>
      <h2 style="color: #fff;">Booking Request Received</h2>
      <p>Dear <strong>${name}</strong>,</p>
      <p>Your request has been received successfully. Our team will contact you shortly to confirm.</p>
      <div style="background: #1a1d24; border-radius: 8px; padding: 16px; margin: 24px 0;">
        <p style="margin: 0; color: #999;">Booking Code</p>
        <h2 style="margin: 4px 0; color: #C7A15C; font-family: monospace;">${shortCode}</h2>
        <p style="margin: 0; color: #999; font-size: 12px;">Full ID: ${bookingId}</p>
      </div>
      <p style="color: #999; font-size: 14px;">Request type: ${targetType}</p>
      <hr style="border-color: #333; margin: 24px 0;" />
      <p style="color: #666; font-size: 12px;">This is an automated email, please do not reply directly.</p>
    </div>`;
}
