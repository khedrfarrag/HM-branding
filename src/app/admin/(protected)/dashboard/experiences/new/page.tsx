import React from "react";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import { getDictionary, type Locale } from "@/features/i18n";
import { createExperienceAction } from "@/features/admin/actions/manage-experiences";
import ExperienceForm from "@/features/admin/components/ExperienceForm";

export const metadata: Metadata = {
  title: "New Experience — HM Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function NewExperiencePage() {
  const cookieStore = await cookies();
  const locale = (cookieStore.get("admin_lang")?.value || "en") as Locale;
  const dict = await getDictionary(locale);
  const formDict = dict.admin.dashboard.experienceForm;
  const isAr = locale === "ar";

  return (
    <div className="max-w-3xl space-y-6" id="new-experience-page">
      <div>
        <h1 className="text-2xl font-bold text-white">
          {formDict?.createTitle || (isAr ? "إضافة تجربة جديدة" : "Add New Experience")}
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          {isAr
            ? "يرجى ملء البيانات أدناه باللغتين العربية والإنجليزية. سيتم رفع صورة الغلاف مباشرة إلى Supabase Storage."
            : "Fill in the details below in Arabic and English. The cover image will be uploaded to Supabase Storage."}
        </p>
      </div>

      <ExperienceForm
        mode="create"
        submitAction={createExperienceAction}
        locale={locale}
        dict={formDict}
      />
    </div>
  );
}
