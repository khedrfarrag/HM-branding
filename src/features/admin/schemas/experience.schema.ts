import { z } from "zod";
import { EXPERIENCE_TYPES, type ExperienceType } from "@/domains/shared/value-objects";

const experienceTypeEnum = z.enum(
  EXPERIENCE_TYPES as [ExperienceType, ...ExperienceType[]]
);

// ─── ExperienceManageSchema ───────────────────────────────────────────────────
export const ExperienceManageSchema = z.object({
  slug: z
    .string()
    .min(3, "Slug must be at least 3 characters")
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be lowercase letters, numbers, and hyphens only"),
  type: experienceTypeEnum,
  title_ar: z.string().min(2, "Arabic title is required"),
  title_en: z.string().min(2, "English title is required"),
  short_description_ar: z.string().optional().default(""),
  short_description_en: z.string().optional().default(""),
  full_description_ar: z.string().optional().default(""),
  full_description_en: z.string().optional().default(""),
  cover_image: z.string().optional().default(""),
  price: z.coerce.number().min(0, "Price must be zero or positive").optional().nullable(),
  currency: z.string().length(3, "Currency must be a 3-letter ISO code").default("USD"),
  city_slug: z.string().optional().nullable(),
  status: z.enum(["published", "draft"]).default("published"),
});

export const ExperienceUpdateSchema = ExperienceManageSchema.omit({ slug: true });

export type ExperienceManageInput = z.infer<typeof ExperienceManageSchema>;
export type ExperienceUpdateInput = z.infer<typeof ExperienceUpdateSchema>;

export type ExperienceActionResult =
  | { success: true; id: string }
  | { success: false; error: string; fieldErrors?: Record<string, string[]> };
