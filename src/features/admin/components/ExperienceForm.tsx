"use client";

import React, { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { EXPERIENCE_TYPES } from "@/domains/shared/value-objects";
import type { ExperienceActionResult } from "@/features/admin/schemas/experience.schema";
import type { getDictionary } from "@/features/i18n/get-dictionary";

export interface ExperienceFormValues {
  slug?: string;
  type: string;
  title_ar: string;
  title_en: string;
  short_description_ar: string;
  short_description_en: string;
  full_description_ar: string;
  full_description_en: string;
  price: number | null;
  currency: string;
  city_slug: string | null;
  status: "published" | "draft";
}

interface ExperienceFormProps {
  mode: "create" | "edit";
  initialValues?: ExperienceFormValues;
  existingCoverUrl?: string | null;
  submitAction: (formData: FormData) => Promise<ExperienceActionResult>;
  cancelHref?: string;
  locale?: string;
  dict?: Awaited<ReturnType<typeof getDictionary>>["admin"]["dashboard"]["experienceForm"];
}

export default function ExperienceForm({
  mode,
  initialValues,
  existingCoverUrl,
  submitAction,
  cancelHref = "/admin/dashboard/experiences",
  locale = "en",
  dict,
}: ExperienceFormProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});

  const isCreate = mode === "create";
  const isAr = locale === "ar";

  const labels = dict?.labels;
  const placeholders = dict?.placeholders;
  const buttons = dict?.buttons;
  const statusOpts = dict?.statusOptions;

  const labelSlug = labels?.slug || (isAr ? "المعرف الفريد (Slug)" : "Slug (URL identifier)");
  const labelType = labels?.type || (isAr ? "نوع التجربة" : "Experience Type");
  const labelTitleAr = labels?.titleAr || "العنوان (بالعربية)";
  const labelTitleEn = labels?.titleEn || "Title (English)";
  const labelShortAr = labels?.shortDescAr || "وصف مختصر (عربي)";
  const labelShortEn = labels?.shortDescEn || "Short Description (EN)";
  const labelFullAr = labels?.fullDescAr || "وصف كامل (عربي)";
  const labelFullEn = labels?.fullDescEn || "Full Description (EN)";
  const labelCover = isCreate
    ? labels?.coverImage || (isAr ? "صورة الغلاف *" : "Cover Image *")
    : labels?.coverImageOptional ||
      (isAr
        ? "صورة الغلاف (اختياري — اتركه فارغاً للاحتفاظ بالصورة الحالية)"
        : "Cover Image (optional — leave empty to keep current)");
  const labelPrice = labels?.price || (isAr ? "السعر" : "Price");
  const labelCurrency = labels?.currency || (isAr ? "العملة" : "Currency");
  const labelCitySlug = labels?.citySlug || (isAr ? "معرف المدينة (اختياري)" : "City Slug (optional)");
  const labelStatus = labels?.status || (isAr ? "الحالة" : "Status");

  const phSlug = placeholders?.slug || "e.g. canton-fair-2026";
  const phTitleAr = placeholders?.titleAr || "عنوان التجربة";
  const phTitleEn = placeholders?.titleEn || "Experience title";
  const phShortAr = placeholders?.shortDescAr || "ملخص قصير للتجربة...";
  const phShortEn = placeholders?.shortDescEn || "Short summary of the experience...";
  const phFullAr = placeholders?.fullDescAr || "التفاصيل الشاملة للتجربة وجدول الأعمال...";
  const phFullEn = placeholders?.fullDescEn || "Comprehensive details and itinerary...";
  const phPrice = placeholders?.price || "2500";
  const phCitySlug = placeholders?.citySlug || "guangzhou";

  const btnSave = isCreate
    ? buttons?.save || (isAr ? "حفظ التجربة" : "Save Experience")
    : buttons?.update || (isAr ? "تحديث التجربة" : "Update Experience");
  const btnSaving = buttons?.saving || (isAr ? "جاري الحفظ..." : "Saving...");
  const btnCancel = buttons?.cancel || (isAr ? "إلغاء" : "Cancel");

  const optPublished = statusOpts?.published || (isAr ? "منشورة (Published)" : "Published");
  const optDraft = statusOpts?.draft || (isAr ? "مسودة (Draft)" : "Draft");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      const result = await submitAction(formData);
      if (result.success) {
        router.push("/admin/dashboard/experiences");
      } else {
        setError(result.error);
        setFieldErrors(result.fieldErrors ?? {});
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
      {error && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-400 text-sm">
          {error}
        </div>
      )}

      {isCreate && (
        <Field label={labelSlug} error={fieldErrors.slug?.[0]}>
          <input
            id="exp-slug"
            name="slug"
            type="text"
            placeholder={phSlug}
            required
            defaultValue={initialValues?.slug}
          />
        </Field>
      )}

      <Field label={labelType} error={fieldErrors.type?.[0]}>
        <select id="exp-type" name="type" required defaultValue={initialValues?.type}>
          {EXPERIENCE_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </Field>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label={labelTitleAr} error={fieldErrors.title_ar?.[0]}>
          <input
            id="exp-title-ar"
            name="title_ar"
            type="text"
            placeholder={phTitleAr}
            required
            dir="rtl"
            defaultValue={initialValues?.title_ar}
          />
        </Field>
        <Field label={labelTitleEn} error={fieldErrors.title_en?.[0]}>
          <input
            id="exp-title-en"
            name="title_en"
            type="text"
            placeholder={phTitleEn}
            required
            defaultValue={initialValues?.title_en}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label={labelShortAr} error={fieldErrors.short_description_ar?.[0]}>
          <textarea
            id="exp-short-ar"
            name="short_description_ar"
            rows={2}
            dir="rtl"
            placeholder={phShortAr}
            defaultValue={initialValues?.short_description_ar}
          />
        </Field>
        <Field label={labelShortEn} error={fieldErrors.short_description_en?.[0]}>
          <textarea
            id="exp-short-en"
            name="short_description_en"
            rows={2}
            placeholder={phShortEn}
            defaultValue={initialValues?.short_description_en}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label={labelFullAr} error={fieldErrors.full_description_ar?.[0]}>
          <textarea
            id="exp-desc-ar"
            name="full_description_ar"
            rows={4}
            dir="rtl"
            placeholder={phFullAr}
            defaultValue={initialValues?.full_description_ar}
          />
        </Field>
        <Field label={labelFullEn} error={fieldErrors.full_description_en?.[0]}>
          <textarea
            id="exp-desc-en"
            name="full_description_en"
            rows={4}
            placeholder={phFullEn}
            defaultValue={initialValues?.full_description_en}
          />
        </Field>
      </div>

      <Field label={labelCover} error={fieldErrors.cover_image?.[0]}>
        {existingCoverUrl && (
          <div className="mb-3 relative w-full max-w-xs h-32 rounded-xl overflow-hidden border border-white/[0.08]">
            <img src={existingCoverUrl} alt="" className="object-cover w-full h-full" />
          </div>
        )}
        <input
          id="exp-cover"
          name="cover_image"
          type="file"
          accept="image/*"
          required={isCreate}
          className="file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-amber-500/10 file:text-amber-400 file:hover:bg-amber-500/20"
        />
      </Field>

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <Field label={labelPrice} error={fieldErrors.price?.[0]}>
            <input
              id="exp-price"
              name="price"
              type="number"
              step="0.01"
              min="0"
              placeholder={phPrice}
              defaultValue={initialValues?.price ?? undefined}
            />
          </Field>
        </div>
        <Field label={labelCurrency} error={fieldErrors.currency?.[0]}>
          <input
            id="exp-currency"
            name="currency"
            type="text"
            maxLength={3}
            defaultValue={initialValues?.currency ?? "USD"}
          />
        </Field>
      </div>

      <Field label={labelCitySlug} error={fieldErrors.city_slug?.[0]}>
        <input
          id="exp-city"
          name="city_slug"
          type="text"
          placeholder={phCitySlug}
          defaultValue={initialValues?.city_slug ?? undefined}
        />
      </Field>

      <Field label={labelStatus} error={fieldErrors.status?.[0]}>
        <select id="exp-status" name="status" defaultValue={initialValues?.status ?? "published"}>
          <option value="published">{optPublished}</option>
          <option value="draft">{optDraft}</option>
        </select>
      </Field>

      <div className="flex items-center gap-3 pt-2">
        <button
          type="submit"
          disabled={isPending}
          id="save-experience-btn"
          className="bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-black font-semibold px-6 py-2.5 rounded-xl transition-all text-sm cursor-pointer"
        >
          {isPending ? btnSaving : btnSave}
        </button>
        <Link href={cancelHref} className="text-gray-400 hover:text-white text-sm transition-colors">
          {btnCancel}
        </Link>
      </div>
    </form>
  );
}

function Field({
  label,
  children,
  error,
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
}) {
  return (
    <div className="space-y-1.5">
      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">
        {label}
      </label>
      <div className="[&_input]:w-full [&_input]:bg-white/[0.04] [&_input]:border [&_input]:border-white/[0.08] [&_input]:rounded-xl [&_input]:px-3.5 [&_input]:py-2.5 [&_input]:text-white [&_input]:text-sm [&_input]:outline-none [&_input]:focus:border-amber-500/50 [&_textarea]:w-full [&_textarea]:bg-white/[0.04] [&_textarea]:border [&_textarea]:border-white/[0.08] [&_textarea]:rounded-xl [&_textarea]:px-3.5 [&_textarea]:py-2.5 [&_textarea]:text-white [&_textarea]:text-sm [&_textarea]:outline-none [&_textarea]:focus:border-amber-500/50 [&_textarea]:resize-none [&_select]:w-full [&_select]:bg-white/[0.04] [&_select]:border [&_select]:border-white/[0.08] [&_select]:rounded-xl [&_select]:px-3.5 [&_select]:py-2.5 [&_select]:text-white [&_select]:text-sm [&_select]:outline-none">
        {children}
      </div>
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}
