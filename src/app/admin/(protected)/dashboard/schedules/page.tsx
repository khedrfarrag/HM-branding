import React, { Suspense } from "react";
import type { Metadata } from "next";
import { supabaseAdmin } from "@/repositories/supabase/client";
import { SupabaseExperienceRepository } from "@/repositories/supabase/experiences";
import ScheduleManager from "@/features/admin/components/ScheduleManager";
import { cookies } from "next/headers";
import { getDictionary, type Locale } from "@/features/i18n";

export const metadata: Metadata = {
  title: "Schedules — HM Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

const experienceRepo = new SupabaseExperienceRepository();

async function getAllSchedules() {
  const { data } = await supabaseAdmin
    .from("experience_schedules")
    .select("*")
    .order("start_date", { ascending: true });
  return data ?? [];
}

export default async function SchedulesPage() {
  const schedules = await getAllSchedules();
  const experiences = await experienceRepo.adminGetAll();

  const experienceOptions = experiences.map((exp) => ({
    slug: exp.slug,
    title_ar: exp.title_ar,
    title_en: exp.title_en,
  }));

  const cookieStore = await cookies();
  const locale = (cookieStore.get("admin_lang")?.value || "en") as Locale;
  const dict = await getDictionary(locale);
  const t = dict.admin.dashboard.schedules;

  return (
    <div className="space-y-6 max-w-5xl" id="admin-schedules-page">
      <div>
        <h1 className="text-2xl font-bold text-white">{t.title}</h1>
        <p className="text-gray-400 text-sm mt-1">{t.subtitle}</p>
      </div>

      <Suspense
        fallback={
          <div className="text-gray-500 text-sm py-8">
            {locale === "ar" ? "جاري تحميل المواعيد..." : "Loading schedules..."}
          </div>
        }
      >
        <ScheduleManager
          initialSchedules={schedules}
          experienceOptions={experienceOptions}
          locale={locale}
          dict={t}
        />
      </Suspense>
    </div>
  );
}
