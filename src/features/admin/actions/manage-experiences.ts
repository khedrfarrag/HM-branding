"use server";

import { revalidatePath } from "next/cache";
import { SupabaseExperienceRepository } from "@/repositories/supabase/experiences";
import { SupabaseStorageGateway } from "@/integrations/storage/supabase";
import { ExperienceManageSchema, ExperienceUpdateSchema } from "@/features/admin/schemas/experience.schema";
import type { ExperienceActionResult } from "@/features/admin/schemas/experience.schema";

export type { ExperienceActionResult };

const experienceRepo = new SupabaseExperienceRepository();
const storageGateway = new SupabaseStorageGateway();

// ─── Create Experience Action ─────────────────────────────────────────────────
export async function createExperienceAction(formData: FormData): Promise<ExperienceActionResult> {
  const rawData = {
    slug: formData.get("slug"),
    type: formData.get("type"),
    title_ar: formData.get("title_ar"),
    title_en: formData.get("title_en"),
    short_description_ar: formData.get("short_description_ar") || "",
    short_description_en: formData.get("short_description_en") || "",
    full_description_ar: formData.get("full_description_ar") || "",
    full_description_en: formData.get("full_description_en") || "",
    price: formData.get("price") || null,
    currency: formData.get("currency") || "USD",
    city_slug: formData.get("city_slug") || null,
    status: formData.get("status") || "published",
  };

  const parsed = ExperienceManageSchema.safeParse(rawData);
  if (!parsed.success) {
    return {
      success: false,
      error: "Validation failed. Check all fields and try again.",
      fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  const d = parsed.data;

  // Handle Cover Image upload
  const cover_image_file = formData.get("cover_image") as File | null;
  let cover_image_url = "";
  let cover_image_id = "";

  if (cover_image_file && cover_image_file.size > 0) {
    try {
      const buffer = Buffer.from(await cover_image_file.arrayBuffer());
      const uploadResult = await storageGateway.uploadFile(
        buffer,
        cover_image_file.name,
        "covers"
      );
      cover_image_url = uploadResult.url;
      cover_image_id = uploadResult.publicId;
    } catch (uploadErr) {
      console.error("[Experiences] Image upload failed:", uploadErr);
      return {
        success: false,
        error: "Failed to upload cover image. Please check storage bucket policies.",
      };
    }
  }

  try {
    await experienceRepo.adminCreate({
      slug: d.slug,
      type: d.type,
      title_ar: d.title_ar,
      title_en: d.title_en,
      short_description_ar: d.short_description_ar,
      short_description_en: d.short_description_en,
      full_description_ar: d.full_description_ar,
      full_description_en: d.full_description_en,
      cover_image: cover_image_url || null,
      cover_image_id: cover_image_id || null,
      price: d.price ?? null,
      currency: d.currency,
      city_slug: d.city_slug ?? null,
      status: d.status,
    });

    revalidatePath("/admin/dashboard/experiences");
    revalidatePath("/ar/experiences");
    revalidatePath("/en/experiences");

    return { success: true, id: d.slug };
  } catch (err) {
    // If database insertion fails and we uploaded an image, clean up the file
    if (cover_image_id) {
      try {
        await storageGateway.deleteFile(cover_image_id);
      } catch (cleanupErr) {
        console.error("[Experiences] Cleanup of dangling image failed:", cleanupErr);
      }
    }

    const message = err instanceof Error ? err.message : "Unexpected error";
    console.error("[Experiences] Create failed:", message);
    return { success: false, error: `Failed to save experience: ${message}` };
  }
}

// ─── Delete Experience Action ─────────────────────────────────────────────────
export async function deleteExperienceAction(id: string): Promise<ExperienceActionResult> {
  try {
    const { coverImageId } = await experienceRepo.adminDelete(id);

    // Delete Cover Image from Supabase Storage if present
    if (coverImageId) {
      try {
        await storageGateway.deleteFile(coverImageId);
      } catch (storageErr) {
        console.error("[Experiences] Storage deletion failed on experience delete:", storageErr);
      }
    }

    revalidatePath("/admin/dashboard/experiences");
    revalidatePath("/ar/experiences");
    revalidatePath("/en/experiences");

    return { success: true, id };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unexpected error";
    console.error("[Experiences] Delete failed:", message);
    return { success: false, error: "Failed to delete experience. Please try again." };
  }
}

// ─── Update Experience Action ─────────────────────────────────────────────────
export async function updateExperienceAction(
  id: string,
  formData: FormData
): Promise<ExperienceActionResult> {
  const existing = await experienceRepo.adminGetById(id);
  if (!existing) {
    return { success: false, error: "Experience not found." };
  }

  const rawData = {
    type: formData.get("type"),
    title_ar: formData.get("title_ar"),
    title_en: formData.get("title_en"),
    short_description_ar: formData.get("short_description_ar") || "",
    short_description_en: formData.get("short_description_en") || "",
    full_description_ar: formData.get("full_description_ar") || "",
    full_description_en: formData.get("full_description_en") || "",
    price: formData.get("price") || null,
    currency: formData.get("currency") || "USD",
    city_slug: formData.get("city_slug") || null,
    status: formData.get("status") || "published",
  };

  const parsed = ExperienceUpdateSchema.safeParse(rawData);
  if (!parsed.success) {
    return {
      success: false,
      error: "Validation failed. Check all fields and try again.",
      fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  const d = parsed.data;
  const cover_image_file = formData.get("cover_image") as File | null;
  const oldCoverImageId = existing.cover_image_id;

  let cover_image_url = existing.cover_image;
  let cover_image_id = existing.cover_image_id;
  let newUploadId: string | null = null;

  if (cover_image_file && cover_image_file.size > 0) {
    try {
      const buffer = Buffer.from(await cover_image_file.arrayBuffer());
      const uploadResult = await storageGateway.uploadFile(
        buffer,
        cover_image_file.name,
        "covers"
      );
      cover_image_url = uploadResult.url;
      cover_image_id = uploadResult.publicId;
      newUploadId = uploadResult.publicId;
    } catch (uploadErr) {
      console.error("[Experiences] Image upload failed on update:", uploadErr);
      return {
        success: false,
        error: "Failed to upload cover image. Please check storage bucket policies.",
      };
    }
  }

  try {
    await experienceRepo.adminUpdate(id, {
      type: d.type,
      title_ar: d.title_ar,
      title_en: d.title_en,
      short_description_ar: d.short_description_ar,
      short_description_en: d.short_description_en,
      full_description_ar: d.full_description_ar,
      full_description_en: d.full_description_en,
      cover_image: cover_image_url,
      cover_image_id: cover_image_id,
      price: d.price ?? null,
      currency: d.currency,
      city_slug: d.city_slug ?? null,
      status: d.status,
    });

    if (newUploadId && oldCoverImageId && oldCoverImageId !== newUploadId) {
      try {
        await storageGateway.deleteFile(oldCoverImageId);
      } catch (storageErr) {
        console.error("[Experiences] Old cover deletion failed on update:", storageErr);
      }
    }

    revalidatePath("/admin/dashboard/experiences");
    revalidatePath("/ar/experiences");
    revalidatePath("/en/experiences");
    revalidatePath(`/ar/experiences/${existing.type}/${existing.slug}`);
    revalidatePath(`/en/experiences/${existing.type}/${existing.slug}`);

    return { success: true, id };
  } catch (err) {
    if (newUploadId) {
      try {
        await storageGateway.deleteFile(newUploadId);
      } catch (cleanupErr) {
        console.error("[Experiences] Rollback of new upload failed:", cleanupErr);
      }
    }

    const message = err instanceof Error ? err.message : "Unexpected error";
    console.error("[Experiences] Update failed:", message);
    return { success: false, error: `Failed to update experience: ${message}` };
  }
}
