import React from "react";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import { getDictionary, type Locale } from "@/features/i18n";
import { supabaseAdmin } from "@/repositories/supabase/client";
import ConsultationSlotManager, { type Slot } from "@/features/admin/components/ConsultationSlotManager";

export const metadata: Metadata = {
  title: "Consultation Slots — HM Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

async function getSlots(): Promise<Slot[]> {
  const today = new Date().toISOString().split("T")[0];
  const { data, error } = await supabaseAdmin
    .from("consultation_slots")
    .select("*")
    .gte("slot_date", today)
    .order("slot_date", { ascending: true })
    .order("slot_time", { ascending: true });

  if (error) {
    console.error("[Consultations Admin] Failed to fetch slots:", error.message);
    return [];
  }
  return (data ?? []).map((row) => ({
    id: row.id,
    slot_date: row.slot_date,
    slot_time: row.slot_time,
    capacity: row.capacity ?? 1,
    seats_remaining: row.seats_remaining ?? 1,
    is_active: row.is_active ?? true,
  }));
}

export default async function ConsultationsPage() {
  const cookieStore = await cookies();
  const locale = (cookieStore.get("admin_lang")?.value || "en") as Locale;
  await getDictionary(locale);
  const isAr = locale === "ar";

  const slots = await getSlots();
  const activeCount = slots.filter((s) => s.is_active).length;
  const totalCapacity = slots.reduce((acc, s) => acc + (s.capacity || 1), 0);
  const totalAvailableSeats = slots.filter((s) => s.is_active).reduce((acc, s) => acc + (s.seats_remaining ?? 1), 0);

  return (
    <div className="space-y-6" id="admin-consultations-page" dir={isAr ? "rtl" : "ltr"}>
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">
          {isAr ? "مواعيد الاستشارات" : "Consultation Slots"}
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          {isAr
            ? "أدر المواعيد المتاحة، السعة الاستيعابية، والتعديلات المباشرة لحجوزات الاستشارات"
            : "Manage available consultation slots, seat capacities, and real-time schedule updates"}
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          {
            label: isAr ? "المواعيد النشطة" : "Active Slots",
            value: activeCount,
            color: "text-green-400",
          },
          {
            label: isAr ? "المقاعد المتاحة للحجز" : "Available Seats",
            value: totalAvailableSeats,
            color: "text-[#C7A15C]",
          },
          {
            label: isAr ? "إجمالي السعة" : "Total Capacity",
            value: totalCapacity,
            color: "text-blue-400",
          },
          {
            label: isAr ? "إجمالي المواعيد" : "Total Slots",
            value: slots.length,
            color: "text-gray-300",
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4"
          >
            <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Slot Manager */}
      <ConsultationSlotManager initialSlots={slots} locale={locale} />
    </div>
  );
}
