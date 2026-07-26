"use server";

import { supabaseAdmin } from "@/repositories/supabase/client";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const UpdateStatusSchema = z.object({
  bookingId: z.string().uuid(),
  status: z.enum(["pending", "confirmed", "cancelled", "refunded"]),
  notes: z.string().max(2000).optional(),
  paymentReceiptId: z.string().max(200).optional(),
  performedBy: z.string().default("admin"),
});

export type UpdateStatusResult =
  | { success: true }
  | { success: false; error: string };

/**
 * updateBookingStatusAction — transitions a booking's lifecycle state.
 * Writes an audit log entry for every status change.
 */
export async function updateBookingStatusAction(
  rawData: unknown
): Promise<UpdateStatusResult> {
  const parsed = UpdateStatusSchema.safeParse(rawData);
  if (!parsed.success) {
    return { success: false, error: "Invalid input data." };
  }

  const { bookingId, status, notes, paymentReceiptId, performedBy } = parsed.data;

  // Fetch current status for audit log
  const { data: current } = await supabaseAdmin
    .from("bookings")
    .select("status")
    .eq("id", bookingId)
    .single();

  // Update booking
  const updatePayload: Record<string, unknown> = {
    status,
    updated_at: new Date().toISOString(),
  };
  if (notes !== undefined) updatePayload.notes = notes;
  if (paymentReceiptId) updatePayload.payment_receipt_id = paymentReceiptId;

  const { error: updateError } = await supabaseAdmin
    .from("bookings")
    .update(updatePayload)
    .eq("id", bookingId);

  if (updateError) {
    console.error("[Admin] Booking update failed:", updateError);
    return { success: false, error: "Failed to update booking. Please try again." };
  }

  // Write audit log
  await supabaseAdmin.from("booking_audit_logs").insert({
    booking_id: bookingId,
    action: "STATUS_CHANGED",
    details: `Status changed from "${current?.status ?? "unknown"}" to "${status}".${
      paymentReceiptId ? ` Payment receipt: ${paymentReceiptId}.` : ""
    }`,
    performed_by: performedBy,
  });

  // Revalidate the detail page and list
  revalidatePath(`/admin/dashboard/bookings/${bookingId}`);
  revalidatePath("/admin/dashboard/bookings");
  revalidatePath("/admin/dashboard");

  return { success: true };
}
