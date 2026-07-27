import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import { getDictionary, type Locale } from "@/features/i18n";
import { SupabaseExperienceRepository } from "@/repositories/supabase/experiences";
import { updateExperienceAction } from "@/features/admin/actions/manage-experiences";
import ExperienceForm from "@/features/admin/components/ExperienceForm";

export const metadata: Metadata = {
  title: "Edit Experience — HM Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

const experienceRepo = new SupabaseExperienceRepository();

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditExperiencePage({ params }: PageProps) {
  const { id } = await params;
  const experience = await experienceRepo.adminGetById(id);

  if (!experience) {
    notFound();
  }

  const cookieStore = await cookies();
  const locale = (cookieStore.get("admin_lang")?.value || "en") as Locale;
  const dict = await getDictionary(locale);
  const formDict = dict.admin.dashboard.experienceForm;
  const isAr = locale === "ar";

  async function submitUpdate(formData: FormData) {
    "use server";
    return updateExperienceAction(id, formData);
  }

  return (
    <div className="max-w-3xl space-y-6" id="edit-experience-page">
      <div>
        <h1 className="text-2xl font-bold text-white">
          {formDict?.editTitle || (isAr ? "تعديل التجربة" : "Edit Experience")}
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          {isAr ? "المعرف الفريد (Slug): " : "Slug: "}
          <span className="font-mono text-amber-400">{experience.slug}</span>
        </p>
      </div>

      <ExperienceForm
        mode="edit"
        existingCoverUrl={experience.cover_image}
        initialValues={{
          type: experience.type,
          title_ar: experience.title_ar,
          title_en: experience.title_en,
          short_description_ar: experience.short_description_ar ?? "",
          short_description_en: experience.short_description_en ?? "",
          full_description_ar: experience.full_description_ar ?? "",
          full_description_en: experience.full_description_en ?? "",
          price: experience.price,
          currency: experience.currency,
          city_slug: experience.city_slug,
          status: experience.status as "published" | "draft",
        }}
        submitAction={submitUpdate}
        locale={locale}
        dict={formDict}
      />
    </div>
  );
}
