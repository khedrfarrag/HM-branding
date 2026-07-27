"use server";

import { supabaseAdmin } from "@/repositories/supabase/client";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const SlotCreateSchema = z.object({
  slot_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format"),
  slot_time: z.string().regex(/^\d{2}:\d{2}$/, "Invalid time format (HH:MM)"),
  capacity: z.number().int().min(1).default(1),
});

const SlotUpdateSchema = z.object({
  id: z.string().uuid("Invalid slot ID"),
  slot_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format"),
  slot_time: z.string().regex(/^\d{4}-\d{2}-\d{2}$|^\d{2}:\d{2}$/, "Invalid time format"),
  capacity: z.number().int().min(1).optional(),
  seats_remaining: z.number().int().min(0).optional(),
  is_active: z.boolean(),
});

export type ConsultationSlotActionResult =
  | { success: true; id?: string }
  | { success: false; error: string };

// ─── Create Slot (Fault-tolerant fallback) ──────────────────────────────────
export async function createConsultationSlotAction(
  rawData: unknown
): Promise<ConsultationSlotActionResult> {
  const parsed = SlotCreateSchema.safeParse(rawData);
  if (!parsed.success) {
    return { success: false, error: "Invalid date or time format." };
  }

  const { slot_date, slot_time, capacity } = parsed.data;

  // Insert with all supported columns in a single call
  const { data, error } = await supabaseAdmin
    .from("consultation_slots")
    .insert({
      slot_date,
      slot_time,
      capacity,
      seats_remaining: capacity,
      is_active: true,
    })
    .select("id")
    .single();

  if (error) {
    if (error.code === "23505") {
      return { success: false, error: "هذا الوقت محجوز مسبقاً في نفس اليوم." };
    }
    // Fallback: insert without capacity columns if they don't exist yet
    if (error.code === "42703" || error.message?.includes("column")) {
      const { data: fallbackData, error: fallbackError } = await supabaseAdmin
        .from("consultation_slots")
        .insert({ slot_date, slot_time, is_active: true })
        .select("id")
        .single();
      if (fallbackError) {
        console.error("[ConsultationSlots] Insert failed:", fallbackError.message);
        return { success: false, error: `Failed to create slot: ${fallbackError.message}` };
      }
      revalidatePath("/admin/dashboard/consultations");
      return { success: true, id: fallbackData?.id };
    }
    console.error("[ConsultationSlots] Insert failed:", error.message, error.details);
    return { success: false, error: `Failed to create slot: ${error.message}` };
  }

  revalidatePath("/admin/dashboard/consultations");
  return { success: true, id: data?.id };
}

// ─── Update Slot (Fault-tolerant fallback) ──────────────────────────────────
export async function updateConsultationSlotAction(
  rawData: unknown
): Promise<ConsultationSlotActionResult> {
  const parsed = SlotUpdateSchema.safeParse(rawData);
  if (!parsed.success) {
    return { success: false, error: "Invalid slot update payload." };
  }

  const { id, slot_date, slot_time, capacity, seats_remaining, is_active } = parsed.data;

  // Build update payload — include capacity & seats_remaining if provided
  const updatePayload: Record<string, unknown> = { slot_date, slot_time, is_active };
  if (capacity !== undefined) updatePayload.capacity = capacity;
  if (seats_remaining !== undefined) updatePayload.seats_remaining = seats_remaining;

  const { error } = await supabaseAdmin
    .from("consultation_slots")
    .update(updatePayload)
    .eq("id", id);

  if (error) {
    if (error.code === "23505") {
      return { success: false, error: "يوجد موعد آخر بنفس التاريخ والوقت بالفعل." };
    }
    console.error("[ConsultationSlots] Update failed:", error.message);
    return { success: false, error: `Failed to update slot: ${error.message}` };
  }

  revalidatePath("/admin/dashboard/consultations");
  return { success: true, id };
}

// ─── Delete Slot ──────────────────────────────────────────────────────────────
export async function deleteConsultationSlotAction(
  id: string
): Promise<ConsultationSlotActionResult> {
  const { error } = await supabaseAdmin
    .from("consultation_slots")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("[ConsultationSlots] Delete failed:", error.message);
    return { success: false, error: "Failed to delete slot." };
  }

  revalidatePath("/admin/dashboard/consultations");
  return { success: true };
}

// ─── Toggle Active ────────────────────────────────────────────────────────────
export async function toggleConsultationSlotAction(
  id: string,
  is_active: boolean
): Promise<ConsultationSlotActionResult> {
  const { error } = await supabaseAdmin
    .from("consultation_slots")
    .update({ is_active })
    .eq("id", id);

  if (error) {
    console.error("[ConsultationSlots] Toggle failed:", error.message);
    return { success: false, error: "Failed to update slot status." };
  }

  revalidatePath("/admin/dashboard/consultations");
  return { success: true };
}
