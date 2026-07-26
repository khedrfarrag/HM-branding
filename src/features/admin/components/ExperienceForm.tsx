"use client";

import React, { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { EXPERIENCE_TYPES } from "@/domains/shared/value-objects";
import type { ExperienceActionResult } from "@/features/admin/schemas/experience.schema";

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
}

export default function ExperienceForm({
  mode,
  initialValues,
  existingCoverUrl,
  submitAction,
  cancelHref = "/admin/dashboard/experiences",
}: ExperienceFormProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});

  const isCreate = mode === "create";

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
        <Field label="Slug (URL identifier)" error={fieldErrors.slug?.[0]}>
          <input
            id="exp-slug"
            name="slug"
            type="text"
            placeholder="e.g. canton-fair-2026"
            required
            defaultValue={initialValues?.slug}
          />
        </Field>
      )}

      <Field label="Experience Type" error={fieldErrors.type?.[0]}>
        <select id="exp-type" name="type" required defaultValue={initialValues?.type}>
          {EXPERIENCE_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </Field>

      <div className="grid grid-cols-2 gap-4">
        <Field label="العنوان (بالعربية)" error={fieldErrors.title_ar?.[0]}>
          <input
            id="exp-title-ar"
            name="title_ar"
            type="text"
            placeholder="عنوان التجربة"
            required
            dir="rtl"
            defaultValue={initialValues?.title_ar}
          />
        </Field>
        <Field label="Title (English)" error={fieldErrors.title_en?.[0]}>
          <input
            id="exp-title-en"
            name="title_en"
            type="text"
            placeholder="Experience title"
            required
            defaultValue={initialValues?.title_en}
          />
        </Field>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Field label="وصف مختصر (عربي)" error={fieldErrors.short_description_ar?.[0]}>
          <textarea
            id="exp-short-ar"
            name="short_description_ar"
            rows={2}
            dir="rtl"
            defaultValue={initialValues?.short_description_ar}
          />
        </Field>
        <Field label="Short Description (EN)" error={fieldErrors.short_description_en?.[0]}>
          <textarea
            id="exp-short-en"
            name="short_description_en"
            rows={2}
            defaultValue={initialValues?.short_description_en}
          />
        </Field>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Field label="وصف كامل (عربي)" error={fieldErrors.full_description_ar?.[0]}>
          <textarea
            id="exp-desc-ar"
            name="full_description_ar"
            rows={4}
            dir="rtl"
            defaultValue={initialValues?.full_description_ar}
          />
        </Field>
        <Field label="Full Description (EN)" error={fieldErrors.full_description_en?.[0]}>
          <textarea
            id="exp-desc-en"
            name="full_description_en"
            rows={4}
            defaultValue={initialValues?.full_description_en}
          />
        </Field>
      </div>

      <Field label={isCreate ? "Cover Image *" : "Cover Image (optional — leave empty to keep current)"} error={fieldErrors.cover_image?.[0]}>
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
          <Field label="Price" error={fieldErrors.price?.[0]}>
            <input
              id="exp-price"
              name="price"
              type="number"
              step="0.01"
              min="0"
              placeholder="2500"
              defaultValue={initialValues?.price ?? undefined}
            />
          </Field>
        </div>
        <Field label="Currency" error={fieldErrors.currency?.[0]}>
          <input
            id="exp-currency"
            name="currency"
            type="text"
            maxLength={3}
            defaultValue={initialValues?.currency ?? "USD"}
          />
        </Field>
      </div>

      <Field label="City Slug (optional)" error={fieldErrors.city_slug?.[0]}>
        <input
          id="exp-city"
          name="city_slug"
          type="text"
          placeholder="guangzhou"
          defaultValue={initialValues?.city_slug ?? undefined}
        />
      </Field>

      <Field label="Status" error={fieldErrors.status?.[0]}>
        <select id="exp-status" name="status" defaultValue={initialValues?.status ?? "published"}>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
        </select>
      </Field>

      <div className="flex items-center gap-3 pt-2">
        <button
          type="submit"
          disabled={isPending}
          id="save-experience-btn"
          className="bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-black font-semibold px-6 py-2.5 rounded-xl transition-all text-sm cursor-pointer"
        >
          {isPending ? "Saving..." : isCreate ? "Save Experience" : "Update Experience"}
        </button>
        <Link href={cancelHref} className="text-gray-400 hover:text-white text-sm transition-colors">
          Cancel
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
