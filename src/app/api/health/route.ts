import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/repositories/supabase/client";

export const dynamic = "force-dynamic";

/**
 * T022 — Health check endpoint
 * GET /api/health
 *
 * Returns: { status, timestamp, db }
 * Used by monitoring and deployment pipelines.
 */
export async function GET() {
  const start = Date.now();

  // Probe DB connection
  let dbStatus: "ok" | "error" = "error";
  let dbLatencyMs = 0;

  try {
    const { error } = await supabaseAdmin
      .from("experience_schedules")
      .select("id", { count: "exact", head: true });

    dbLatencyMs = Date.now() - start;
    dbStatus = error ? "error" : "ok";
  } catch {
    dbLatencyMs = Date.now() - start;
  }

  const healthy = dbStatus === "ok";

  return NextResponse.json(
    {
      status: healthy ? "ok" : "degraded",
      timestamp: new Date().toISOString(),
      db: {
        status: dbStatus,
        latencyMs: dbLatencyMs,
      },
      version: process.env.npm_package_version ?? "unknown",
    },
    { status: healthy ? 200 : 503 }
  );
}
