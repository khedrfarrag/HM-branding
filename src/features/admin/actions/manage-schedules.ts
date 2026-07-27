"use server";

import { supabaseAdmin } from "@/repositories/supabase/client";
import { revalidatePath } from "next/cache";
import { ScheduleManageSchema } from "@/features/admin/schemas/schedule.schema";
import type { ScheduleActionResult } from "@/features/admin/schemas/schedule.schema";

export type { ScheduleActionResult };

// ─── Create Schedule Action ───────────────────────────────────────────────────
export async function createScheduleAction(rawData: unknown): Promise<ScheduleActionResult> {
  const parsed = ScheduleManageSchema.safeParse(rawData);
  if (!parsed.success) {
    return {
      success: false,
      error: "Validation failed. Check fields and try again.",
      fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  const d = parsed.data;
  const { data, error } = await supabaseAdmin
    .from("experience_schedules")
    .insert({
      experience_slug:     d.experienceSlug,
      start_date:          d.startDate,
      end_date:            d.endDate,
      enrollment_deadline: d.enrollmentDeadline,
      capacity:            d.capacity,
      seats_remaining:     d.capacity, // starts full
      price:               d.price,
      currency:            d.currency,
    })
    .select("id, experience_slug, start_date, end_date, enrollment_deadline, capacity, seats_remaining, price, currency")
    .single();

  if (error || !data) {
    console.error("[Schedules] Insert failed:", error);
    return { success: false, error: "Failed to create schedule. Please try again." };
  }

  revalidatePath("/admin/dashboard/schedules");
  return { success: true, id: data.id, data };
}

// ─── Delete Schedule Action ───────────────────────────────────────────────────
export async function deleteScheduleAction(id: string): Promise<ScheduleActionResult> {
  // Check for confirmed bookings on this schedule before deletion
  const { count } = await supabaseAdmin
    .from("bookings")
    .select("id", { count: "exact", head: true })
    .eq("schedule_id", id)
    .in("status", ["pending", "confirmed"]);

  if (count && count > 0) {
    return {
      success: false,
      errorCode: "ACTIVE_BOOKINGS_EXIST",
      error: `Cannot delete: ${count} active booking(s) are tied to this schedule.`,
    };
  }

  const { error } = await supabaseAdmin
    .from("experience_schedules")
    .delete()
    .eq("id", id);

  if (error) {
    return { success: false, error: "Failed to delete schedule." };
  }

  revalidatePath("/admin/dashboard/schedules");
  return { success: true, id };
}

