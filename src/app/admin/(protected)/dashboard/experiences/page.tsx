import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import { getDictionary, type Locale } from "@/features/i18n";
import { SupabaseExperienceRepository } from "@/repositories/supabase/experiences";
import { deleteExperienceAction } from "@/features/admin/actions/manage-experiences";

export const metadata: Metadata = {
  title: "Experiences — HM Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

const experienceRepo = new SupabaseExperienceRepository();

export default async function AdminExperiencesPage() {
  const cookieStore = await cookies();
  const locale = (cookieStore.get("admin_lang")?.value || "en") as Locale;
  const dict = await getDictionary(locale);
  const t = dict.admin.dashboard.experiences;
  const isAr = locale === "ar";

  const allExperiences = await experienceRepo.adminGetAll();

  return (
    <div className="space-y-6 max-w-5xl" id="admin-experiences-page">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">{t.title}</h1>
          <p className="text-gray-400 text-sm mt-1">{t.subtitle}</p>
        </div>
        <Link
          href="/admin/dashboard/experiences/new"
          id="add-experience-btn"
          className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-semibold text-sm px-4 py-2.5 rounded-xl transition-all shadow-lg shadow-amber-500/20"
        >
          + {t.addBtn}
        </Link>
      </div>

      {/* Table */}
      {allExperiences.length === 0 ? (
        <div className="text-center py-20 text-gray-500">{t.noExperiences}</div>
      ) : (
        <div className="overflow-x-auto rounded-2xl border border-white/[0.06] bg-white/[0.02]">
          <table className="w-full text-sm text-left">
            <thead className="border-b border-white/[0.06] text-gray-400 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-5 py-4 w-16"></th>
                <th className="px-5 py-4">{t.headers.title}</th>
                <th className="px-5 py-4">{t.headers.type}</th>
                <th className="px-5 py-4">{t.headers.price}</th>
                <th className="px-5 py-4">{t.headers.status}</th>
                <th className="px-5 py-4">{t.headers.actions}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.04]">
              {allExperiences.map((exp) => (
                <tr key={exp.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-5 py-4">
                    {exp.cover_image ? (
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-white/[0.08] bg-white/[0.02]">
                        <img
                          src={exp.cover_image}
                          alt=""
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-lg border border-dashed border-white/[0.08] flex items-center justify-center text-gray-500 text-xs">
                        No Img
                      </div>
                    )}
                  </td>
                  <td className="px-5 py-4 text-white font-medium">
                    {isAr ? exp.title_ar : exp.title_en}
                  </td>
                  <td className="px-5 py-4 text-gray-300">{exp.type}</td>
                  <td className="px-5 py-4 text-gray-300">
                    {exp.price != null ? `${exp.price} ${exp.currency}` : "—"}
                  </td>
                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${
                        exp.status === "published"
                          ? "bg-emerald-500/10 text-emerald-400"
                          : "bg-gray-500/10 text-gray-400"
                      }`}
                    >
                      {exp.status === "published"
                        ? t.statusOptions.published
                        : t.statusOptions.draft}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <Link
                        href={`/admin/dashboard/experiences/${exp.id}/edit`}
                        className="text-amber-400 hover:text-amber-300 text-xs font-medium transition-colors"
                      >
                        {isAr ? "تعديل" : "Edit"}
                      </Link>
                      <form
                        action={async () => {
                          "use server";
                          await deleteExperienceAction(exp.id);
                        }}
                      >
                        <button
                          type="submit"
                          className="text-red-400 hover:text-red-300 text-xs font-medium transition-colors"
                        >
                          {isAr ? "حذف" : "Delete"}
                        </button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
