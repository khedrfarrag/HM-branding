"use server";

import { supabaseAdmin, supabasePublic } from "@/repositories/supabase/client";

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
 * Fetches available active consultation slots grouped by date for the user portal.
 * Uses supabaseAdmin on the server to reliably bypass RLS restriction for anonymous visitors on Netlify,
 * with automatic fallback to supabasePublic if service key is unconfigured.
 */
export async function getConsultationSlotsAction(): Promise<ConsultationDayGroup[]> {
  const client = process.env.SUPABASE_SERVICE_ROLE_KEY ? supabaseAdmin : supabasePublic;

  // Calculate today's date in YYYY-MM-DD (server local/UTC)
  const today = new Date().toISOString().split("T")[0];
  // Extend range to 90 days ahead to ensure future created slots are always retrieved
  const untilDate = new Date();
  untilDate.setDate(untilDate.getDate() + 90);
  const until = untilDate.toISOString().split("T")[0];

  console.log(`[getConsultationSlotsAction] Fetching active slots between ${today} and ${until}`);

  let { data, error } = await client
    .from("consultation_slots")
    .select("*")
    .eq("is_active", true)
    .gte("slot_date", today)
    .lte("slot_date", until)
    .order("slot_date", { ascending: true })
    .order("slot_time", { ascending: true });

  // Fallback to public client if admin client query failed
  if ((error || !data || data.length === 0) && client !== supabasePublic) {
    console.warn("[getConsultationSlotsAction] Admin query returned 0 rows, trying public client fallback...");
    const fallbackRes = await supabasePublic
      .from("consultation_slots")
      .select("*")
      .eq("is_active", true)
      .gte("slot_date", today)
      .lte("slot_date", until)
      .order("slot_date", { ascending: true })
      .order("slot_time", { ascending: true });

    if (fallbackRes.data && fallbackRes.data.length > 0) {
      data = fallbackRes.data;
      error = fallbackRes.error;
    }
  }

  if (error || !data) {
    if (error) console.error("[getConsultationSlotsAction] Error fetching slots:", error.message);
    return [];
  }

  // Filter out any slot with 0 seats remaining if desired, or let UI handle full slots
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
  const client = process.env.SUPABASE_SERVICE_ROLE_KEY ? supabaseAdmin : supabasePublic;

  const { data, error } = await client
    .from("consultation_slots")
    .select("*")
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
