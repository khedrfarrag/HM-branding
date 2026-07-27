import { NextResponse } from "next/server";
import { getConsultationSlotsAction } from "@/features/booking/actions/get-consultation-slots";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    const groups = await getConsultationSlotsAction();
    return NextResponse.json(groups, {
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      },
    });
  } catch (err) {
    console.error("[API /api/consultation-slots] Error:", err);
    return NextResponse.json([], { status: 200 });
  }
}
