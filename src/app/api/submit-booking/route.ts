import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { PublicBookingSchema } from "@/features/booking/schemas/booking.schema";
import type { BookingTargetType } from "@/domains/booking/repository";
import { ResendEmailGateway } from "@/integrations/email/resend";

function getCleanEnv(...keys: string[]): string | undefined {
  for (const key of keys) {
    const val = process.env[key];
    if (val && val.trim() !== "" && val !== "placeholder-key") {
      return val.trim();
    }
  }
  return undefined;
}

// ─── Validate Supabase env at request time ──────────────────────────────────
function getSupabaseClient() {
  const url = getCleanEnv("NEXT_PUBLIC_SUPABASE_URL", "SUPABASE_URL");

  // Prefer Service Role / Secret Key, fall back to Anon / Publishable Key
  const key =
    getCleanEnv(
      "SUPABASE_SERVICE_ROLE_KEY",
      "SUPABASE_SECRET_KEY",
      "SUPABASE_SERVICE_KEY"
    ) ||
    getCleanEnv(
      "NEXT_PUBLIC_SUPABASE_ANON_KEY",
      "SUPABASE_ANON_KEY",
      "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY",
      "SUPABASE_PUBLISHABLE_KEY"
    );

  if (!url || !key) {
    return null;
  }

  return createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

// ─── POST /api/submit-booking ────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Step 1: Validate
    const parsed = PublicBookingSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: "بيانات الطلب غير مكتملة. يرجى المراجعة.",
          fieldErrors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, phone, country, targetType, scheduleId, notes, locale } = parsed.data;
    const isAr = locale === "ar";

    // Step 2: Check Supabase config
    const supabase = getSupabaseClient();
    if (!supabase) {
      console.error("[Booking API] Supabase client not configured — missing env vars.");
      return NextResponse.json(
        {
          success: false,
          error: isAr
            ? "عذراً، حدث خطأ في إعداد الخادم. يرجى التواصل معنا مباشرة."
            : "Sorry, a server configuration error occurred. Please contact us directly.",
        },
        { status: 503 }
      );
    }

    // Step 3: Upsert client
    const { data: clientData, error: clientError } = await supabase
      .from("clients")
      .upsert({ name, email, phone, country }, { onConflict: "email" })
      .select("id")
      .single();

    if (clientError || !clientData) {
      console.error("[Booking API] Client upsert failed:", clientError);
      return NextResponse.json(
        { success: false, error: isAr ? "حدث خطأ أثناء حفظ بياناتك." : "Failed to save client data." },
        { status: 500 }
      );
    }

    // Step 4: Handle consultation slot
    let combinedNotes = notes ?? "";

    if (targetType === "consultation" && scheduleId) {
      const { data: slot } = await supabase
        .from("consultation_slots")
        .select("id, is_active, slot_date, slot_time")
        .eq("id", scheduleId)
        .single();

      if (!slot || slot.is_active === false) {
        return NextResponse.json(
          {
            success: false,
            error: isAr
              ? "عذراً، هذا الموعد غير متاح حالياً."
              : "Sorry, this consultation slot is currently unavailable.",
          },
          { status: 409 }
        );
      }

      if (slot.slot_date && slot.slot_time) {
        const slotMsg = `[موعد الاستشارة: ${slot.slot_date} - ${slot.slot_time}]`;
        combinedNotes = combinedNotes ? `${slotMsg}\n${combinedNotes}` : slotMsg;
      }
    } else if (targetType !== "consultation" && scheduleId) {
      // Experience seat reservation
      const { data: reserved, error: rpcError } = await supabase.rpc("reserve_seat", {
        p_schedule_id: scheduleId,
      });
      if (rpcError) {
        console.error("[Booking API] reserve_seat RPC error:", rpcError);
      } else if (!reserved) {
        return NextResponse.json(
          {
            success: false,
            error: isAr
              ? "عذراً، لا توجد مقاعد متاحة في هذه الجلسة."
              : "Sorry, no seats are available for this session.",
          },
          { status: 409 }
        );
      }
    }

    // Step 5: Create booking — consultation slots go to notes, not schedule_id (FK only for experience_schedules)
    const dbScheduleId = targetType === "consultation" ? null : (scheduleId ?? null);

    const { data: booking, error: bookingError } = await supabase
      .from("bookings")
      .insert({
        client_id: clientData.id,
        schedule_id: dbScheduleId,
        target_type: targetType as BookingTargetType,
        status: "pending",
        notes: combinedNotes || null,
      })
      .select("id")
      .single();

    if (bookingError || !booking) {
      console.error("[Booking API] Booking insert failed:", bookingError?.message);
      return NextResponse.json(
        { success: false, error: isAr ? "حدث خطأ في تسجيل الحجز." : "Failed to create booking." },
        { status: 500 }
      );
    }

    // Step 6: Audit log (best-effort)
    await supabase.from("booking_audit_logs").insert({
      booking_id: booking.id,
      action: "BOOKING_CREATED",
      details: `Client ${email} submitted a ${targetType} request.`,
      performed_by: "system",
    });

    // Step 7: Send confirmation email (best-effort — never blocks booking)
    try {
      const emailGateway = new ResendEmailGateway();
      const shortCode = booking.id.slice(0, 8).toUpperCase();
      await emailGateway.sendEmail({
        to: email,
        subject: isAr
          ? `تأكيد استلام طلب الحجز — ${shortCode}`
          : `Booking Request Received — ${shortCode}`,
        html: buildConfirmationEmail({ name, bookingId: booking.id, targetType, isAr }),
      });
    } catch (emailErr) {
      console.error("[Booking API] Email failed:", emailErr);
      await supabase.from("booking_audit_logs").insert({
        booking_id: booking.id,
        action: "EMAIL_FAILED",
        details: String(emailErr),
        performed_by: "system",
      });
    }

    return NextResponse.json({
      success: true,
      bookingId: booking.id,
      confirmationCode: booking.id.slice(0, 8).toUpperCase(),
    });
  } catch (err) {
    console.error("[Booking API] Unexpected error:", err);
    return NextResponse.json(
      { success: false, error: "حدث خطأ غير متوقع. يرجى التواصل معنا مباشرة." },
      { status: 500 }
    );
  }
}

// ─── Email Template ───────────────────────────────────────────────────────────
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
    return `<div dir="rtl" style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#0B0D11;color:#fff;padding:32px;border-radius:12px;">
      <h1 style="color:#C7A15C;">حسام مبروك</h1>
      <h2>تأكيد استلام طلب الحجز</h2>
      <p>عزيزي <strong>${name}</strong>،</p>
      <p>تم استلام طلبك بنجاح. سيتواصل معك فريقنا قريباً للتأكيد.</p>
      <div style="background:#1a1d24;border-radius:8px;padding:16px;margin:24px 0;">
        <p style="margin:0;color:#999;">رمز الحجز</p>
        <h2 style="margin:4px 0;color:#C7A15C;font-family:monospace;">${shortCode}</h2>
        <p style="margin:0;color:#999;font-size:12px;">المعرف الكامل: ${bookingId}</p>
      </div>
      <p style="color:#999;font-size:14px;">نوع الطلب: ${targetType}</p>
      <hr style="border-color:#333;margin:24px 0;"/>
      <p style="color:#666;font-size:12px;">هذا بريد تلقائي، لا تقم بالرد عليه مباشرة.</p>
    </div>`;
  }
  return `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#0B0D11;color:#fff;padding:32px;border-radius:12px;">
    <h1 style="color:#C7A15C;">Hussam Mabrouk</h1>
    <h2>Booking Request Received</h2>
    <p>Dear <strong>${name}</strong>،</p>
    <p>Your request has been received successfully. Our team will contact you shortly.</p>
    <div style="background:#1a1d24;border-radius:8px;padding:16px;margin:24px 0;">
      <p style="margin:0;color:#999;">Booking Code</p>
      <h2 style="margin:4px 0;color:#C7A15C;font-family:monospace;">${shortCode}</h2>
      <p style="margin:0;color:#999;font-size:12px;">Full ID: ${bookingId}</p>
    </div>
    <p style="color:#999;font-size:14px;">Request type: ${targetType}</p>
    <hr style="border-color:#333;margin:24px 0;"/>
    <p style="color:#666;font-size:12px;">This is an automated email, please do not reply directly.</p>
  </div>`;
}
