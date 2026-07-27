import { NextResponse } from "next/server";
import { supabaseAdmin, supabasePublic } from "@/repositories/supabase/client";

export const dynamic = "force-dynamic";
export const revalidate = 0;

interface QueryErrorDetails {
  message?: string;
  code?: string;
  details?: string;
  hint?: string;
}

export async function GET() {
  const envCheck = {
    isNetlify: Boolean(process.env.NETLIFY || process.env.NETLIFY_LOCAL),
    nodeEnv: process.env.NODE_ENV,
    supabaseUrl: {
      exists: Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL),
      valuePreview: (process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || "").substring(0, 25) + "...",
    },
    anonKey: {
      exists: Boolean(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY),
      startsWith: (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || "").substring(0, 10),
      isJwtFormat: (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || "").startsWith("eyJ"),
    },
    serviceKey: {
      exists: Boolean(
        process.env.SUPABASE_SERVICE_ROLE_KEY ||
        process.env.SUPABASE_SECRET_KEY ||
        process.env.SUPABASE_SERVICE_KEY
      ),
      foundKeyName: process.env.SUPABASE_SERVICE_ROLE_KEY
        ? "SUPABASE_SERVICE_ROLE_KEY"
        : process.env.SUPABASE_SECRET_KEY
        ? "SUPABASE_SECRET_KEY"
        : process.env.SUPABASE_SERVICE_KEY
        ? "SUPABASE_SERVICE_KEY"
        : "NONE",
      startsWith: (
        process.env.SUPABASE_SERVICE_ROLE_KEY ||
        process.env.SUPABASE_SECRET_KEY ||
        process.env.SUPABASE_SERVICE_KEY ||
        ""
      ).substring(0, 10),
      isJwtFormat: (
        process.env.SUPABASE_SERVICE_ROLE_KEY ||
        process.env.SUPABASE_SECRET_KEY ||
        process.env.SUPABASE_SERVICE_KEY ||
        ""
      ).startsWith("eyJ"),
    },
  };

  // Test 1: Public Client Query on consultation_slots
  const publicQueryStatus: { success: boolean; rowCount: number; error: QueryErrorDetails | string | null } = {
    success: false,
    rowCount: 0,
    error: null,
  };

  try {
    const res = await supabasePublic
      .from("consultation_slots")
      .select("id, slot_date, slot_time, is_active, seats_remaining")
      .limit(10);

    if (res.error) {
      publicQueryStatus.error = {
        message: res.error.message,
        code: res.error.code,
        details: res.error.details,
        hint: res.error.hint,
      };
    } else {
      publicQueryStatus.success = true;
      publicQueryStatus.rowCount = res.data ? res.data.length : 0;
    }
  } catch (err: unknown) {
    publicQueryStatus.error = err instanceof Error ? err.message : String(err);
  }

  // Test 2: Admin Client Query on consultation_slots
  const adminQueryStatus: { success: boolean; rowCount: number; error: QueryErrorDetails | string | null } = {
    success: false,
    rowCount: 0,
    error: null,
  };

  try {
    const res = await supabaseAdmin
      .from("consultation_slots")
      .select("id, slot_date, slot_time, is_active, seats_remaining")
      .limit(10);

    if (res.error) {
      adminQueryStatus.error = {
        message: res.error.message,
        code: res.error.code,
        details: res.error.details,
        hint: res.error.hint,
      };
    } else {
      adminQueryStatus.success = true;
      adminQueryStatus.rowCount = res.data ? res.data.length : 0;
    }
  } catch (err: unknown) {
    adminQueryStatus.error = err instanceof Error ? err.message : String(err);
  }

  // Test 3: Active Slots Query Filter check
  const activeSlotsCheck: { rowCount: number; sampleDates: string[]; error: string | null } = {
    rowCount: 0,
    sampleDates: [],
    error: null,
  };

  try {
    const today = new Date().toISOString().split("T")[0];
    const client = envCheck.serviceKey.exists ? supabaseAdmin : supabasePublic;

    const res = await client
      .from("consultation_slots")
      .select("slot_date, slot_time")
      .eq("is_active", true)
      .gte("slot_date", today)
      .limit(10);

    if (res.error) {
      activeSlotsCheck.error = res.error.message;
    } else if (res.data) {
      activeSlotsCheck.rowCount = res.data.length;
      activeSlotsCheck.sampleDates = res.data.map((d) => `${d.slot_date} ${d.slot_time}`);
    }
  } catch (err: unknown) {
    activeSlotsCheck.error = err instanceof Error ? err.message : String(err);
  }

  return NextResponse.json(
    {
      timestamp: new Date().toISOString(),
      environment: envCheck,
      databaseTests: {
        publicAnonClient: publicQueryStatus,
        adminServiceRoleClient: adminQueryStatus,
        activeSlotsFilter: activeSlotsCheck,
      },
    },
    { status: 200 }
  );
}
