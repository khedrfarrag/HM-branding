"use server";

import { supabaseAdmin, supabasePublic } from "@/repositories/supabase/client";
import { unstable_noStore as noStore } from "next/cache";

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
 * Uses noStore() to guarantee fresh real-time database queries on Netlify without static caching.
 */
export async function getConsultationSlotsAction(): Promise<ConsultationDayGroup[]> {
  noStore();
  try {
    const hasAdminKey = Boolean(
      process.env.SUPABASE_SERVICE_ROLE_KEY ||
      process.env.SUPABASE_SECRET_KEY ||
      process.env.SUPABASE_SERVICE_KEY
    );

    const client = hasAdminKey ? supabaseAdmin : supabasePublic;

    // Use current UTC date string as today's baseline
    const now = new Date();
    const today = now.toISOString().split("T")[0];

    // Fetch 180 days out to guarantee future created dates are always captured
    const untilDate = new Date(now.getTime() + 180 * 24 * 60 * 60 * 1000);
    const until = untilDate.toISOString().split("T")[0];

    let { data, error } = await client
      .from("consultation_slots")
      .select("*")
      .eq("is_active", true)
      .gte("slot_date", today)
      .lte("slot_date", until)
      .order("slot_date", { ascending: true })
      .order("slot_time", { ascending: true });

    // Fallback to public client if admin query returned no rows
    if ((error || !data || data.length === 0) && client !== supabasePublic) {
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
      if (error) console.error("[getConsultationSlotsAction] Supabase Query Error:", error.message);
      return [];
    }

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
  } catch (err) {
    console.error("[getConsultationSlotsAction] Server Action Exception:", err);
    return [];
  }
}

/**
 * Admin: get all slots for management dashboard.
 */
export async function getAdminConsultationSlotsAction(): Promise<ConsultationSlot[]> {
  noStore();
  try {
    const hasAdminKey = Boolean(
      process.env.SUPABASE_SERVICE_ROLE_KEY ||
      process.env.SUPABASE_SECRET_KEY ||
      process.env.SUPABASE_SERVICE_KEY
    );

    const client = hasAdminKey ? supabaseAdmin : supabasePublic;

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
  } catch (err) {
    console.error("[getAdminConsultationSlotsAction] Server Action Exception:", err);
    return [];
  }
}
