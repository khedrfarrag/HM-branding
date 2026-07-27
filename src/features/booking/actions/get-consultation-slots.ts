"use server";

import { supabasePublic } from "@/repositories/supabase/client";

export interface ConsultationSlot {
  id: string;
  slot_date: string;       // "YYYY-MM-DD"
  slot_time: string;       // "HH:MM"
  capacity: number;
  seats_remaining: number;
  is_active?: boolean;
}

export interface ConsultationDayGroup {
  date: string;            // "YYYY-MM-DD"
  slots: ConsultationSlot[];
}

/**
 * Fetches available consultation slots grouped by date.
 * Guaranteed compatibility with current database schema.
 */
export async function getConsultationSlotsAction(): Promise<ConsultationDayGroup[]> {
  const today = new Date().toISOString().split("T")[0];
  const until = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];

  const { data, error } = await supabasePublic
    .from("consultation_slots")
    .select("*")
    .eq("is_active", true)
    .gte("slot_date", today)
    .lte("slot_date", until)
    .order("slot_date", { ascending: true })
    .order("slot_time", { ascending: true });

  if (error || !data) {
    if (error) console.error("[getConsultationSlotsAction] Error:", error.message);
    return [];
  }

  // Group by date and supply default capacity if columns missing in DB
  const grouped = new Map<string, ConsultationSlot[]>();
  for (const row of data) {
    const key = row.slot_date;
    if (!grouped.has(key)) grouped.set(key, []);
    grouped.get(key)!.push({
      id: row.id,
      slot_date: row.slot_date,
      slot_time: row.slot_time,
      capacity: row.capacity ?? 1,
      seats_remaining: row.seats_remaining ?? 1,
      is_active: row.is_active ?? true,
    });
  }

  return Array.from(grouped.entries()).map(([date, slots]) => ({ date, slots }));
}

/**
 * Admin: get all slots (including inactive/full) for management.
 */
export async function getAdminConsultationSlotsAction(): Promise<ConsultationSlot[]> {
  const { data, error } = await supabasePublic
    .from("consultation_slots")
    .select("*")
    .gte("slot_date", new Date().toISOString().split("T")[0])
    .order("slot_date", { ascending: true })
    .order("slot_time", { ascending: true });

  if (error || !data) return [];

  return data.map((row) => ({
    id: row.id,
    slot_date: row.slot_date,
    slot_time: row.slot_time,
    capacity: row.capacity ?? 1,
    seats_remaining: row.seats_remaining ?? 1,
    is_active: row.is_active ?? true,
  }));
}
