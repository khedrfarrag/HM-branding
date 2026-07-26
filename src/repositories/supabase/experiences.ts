import { Locale, ExperienceType } from "@/domains/shared/value-objects";
import { Experience } from "@/domains/experiences/entities";
import { IExperienceRepository } from "@/domains/experiences/repository";
import { supabasePublic, supabaseAdmin } from "@/repositories/supabase/client";

export interface SupabaseExperienceRow {
  id: string;
  slug: string;
  type: string;
  title_ar: string;
  title_en: string;
  short_description_ar: string | null;
  short_description_en: string | null;
  full_description_ar: string | null;
  full_description_en: string | null;
  cover_image: string | null;
  cover_image_id: string | null;
  price: number | null;
  currency: string;
  itinerary: unknown;
  city_slug: string | null;
  status: string;
  published_at: string;
  updated_at: string;
}

interface ScheduleRow {
  experience_slug: string;
  id: string;
  start_date: string;
  end_date: string;
  enrollment_deadline: string;
  seats_remaining: number;
  capacity: number;
  price: number;
  currency: string;
}

const SCHEDULE_SELECT =
  "experience_slug, id, start_date, end_date, enrollment_deadline, seats_remaining, capacity, price, currency";

function todayIsoDate(): string {
  return new Date().toISOString().split("T")[0];
}

function mapScheduleRowToDate(row: ScheduleRow): Experience["dates"][number] {
  return {
    id: row.id,
    startDate: row.start_date,
    endDate: row.end_date,
    enrollmentDeadline: row.enrollment_deadline,
    availableSeats: row.capacity,
    spotsRemaining: row.seats_remaining,
    price: row.price,
    currency: row.currency,
  };
}

function mergeSchedulesIntoExperiences(
  experiences: Experience[],
  schedules: ScheduleRow[]
): void {
  for (const exp of experiences) {
    const matching = schedules.filter((s) => s.experience_slug === exp.slug);
    if (matching.length === 0) continue;

    exp.dates = matching.map(mapScheduleRowToDate);
    exp.price = matching[0].price;
    exp.currency = matching[0].currency;
  }
}

async function fetchFutureSchedulesForSlugs(
  slugs: string[]
): Promise<ScheduleRow[]> {
  if (slugs.length === 0) return [];

  const { data: liveSchedules } = await supabasePublic
    .from("experience_schedules")
    .select(SCHEDULE_SELECT)
    .in("experience_slug", slugs)
    .gt("end_date", todayIsoDate())
    .order("start_date", { ascending: true });

  return (liveSchedules as ScheduleRow[] | null) ?? [];
}

function rowToExperience(row: SupabaseExperienceRow, locale: Locale): Experience {
  const isAr = locale === "ar";
  return {
    slug: row.slug,
    status: row.status as "published" | "draft",
    publishedAt: row.published_at,
    updatedAt: row.updated_at,
    seo: {
      title: isAr ? row.title_ar : row.title_en,
      description: isAr
        ? (row.short_description_ar ?? "")
        : (row.short_description_en ?? ""),
      canonicalPath: `/${locale}/experiences/${row.type}/${row.slug}`,
      alternates: {},
    },
    type: row.type as ExperienceType,
    title: isAr ? row.title_ar : row.title_en,
    shortDescription: isAr
      ? (row.short_description_ar ?? "")
      : (row.short_description_en ?? ""),
    fullDescription: isAr
      ? (row.full_description_ar ?? "")
      : (row.full_description_en ?? ""),
    coverImage: row.cover_image,
    coverImageId: row.cover_image_id,
    price: row.price,
    currency: row.currency,
    itinerary: Array.isArray(row.itinerary) ? (row.itinerary as Experience["itinerary"]) : [],
    dates: [],
    testimonials: [],
    citySlug: row.city_slug,
  };
}

export class SupabaseExperienceRepository implements IExperienceRepository {
  async getExperiences(locale: Locale, type?: ExperienceType): Promise<Experience[]> {
    let query = supabasePublic
      .from("experiences")
      .select("*")
      .eq("status", "published")
      .order("published_at", { ascending: false });

    if (type) {
      query = query.eq("type", type);
    }

    const { data, error } = await query;

    if (error || !data || data.length === 0) {
      return [];
    }

    const experiences = (data as SupabaseExperienceRow[]).map((row) =>
      rowToExperience(row, locale)
    );

    try {
      const slugs = experiences.map((e) => e.slug);
      const liveSchedules = await fetchFutureSchedulesForSlugs(slugs);
      if (liveSchedules.length > 0) {
        mergeSchedulesIntoExperiences(experiences, liveSchedules);
      }
    } catch {
      // Supabase unavailable — keep empty dates silently
    }

    return experiences;
  }

  async getExperienceBySlug(
    locale: Locale,
    type: ExperienceType,
    slug: string
  ): Promise<Experience | null> {
    const { data, error } = await supabasePublic
      .from("experiences")
      .select("*")
      .eq("slug", slug)
      .eq("type", type)
      .eq("status", "published")
      .single();

    if (error || !data) return null;

    const experience = rowToExperience(data as SupabaseExperienceRow, locale);

    try {
      const liveSchedules = await fetchFutureSchedulesForSlugs([slug]);
      if (liveSchedules.length > 0) {
        mergeSchedulesIntoExperiences([experience], liveSchedules);
      }
    } catch {
      // Supabase unavailable — keep empty dates silently
    }

    return experience;
  }

  async getAllSlugs(_locale: Locale): Promise<{ type: ExperienceType; slug: string }[]> {
    const { data, error } = await supabasePublic
      .from("experiences")
      .select("type, slug")
      .eq("status", "published");

    if (error || !data) return [];

    return (data as { type: string; slug: string }[]).map((row) => ({
      type: row.type as ExperienceType,
      slug: row.slug,
    }));
  }

  // ─── Admin mutations (server-side only, uses service role key) ───────────

  async adminCreate(input: Record<string, unknown>): Promise<{ id: string }> {
    const { data, error } = await supabaseAdmin
      .from("experiences")
      .insert([input])
      .select("id")
      .single();

    if (error || !data) {
      throw new Error(error?.message ?? "Failed to create experience");
    }

    return { id: (data as { id: string }).id };
  }

  async adminDelete(id: string): Promise<{ coverImageId: string | null }> {
    const { data } = await supabaseAdmin
      .from("experiences")
      .select("cover_image_id")
      .eq("id", id)
      .single();

    const { error } = await supabaseAdmin.from("experiences").delete().eq("id", id);
    if (error) throw new Error(error.message);

    return { coverImageId: data?.cover_image_id || null };
  }

  async adminGetAll(): Promise<SupabaseExperienceRow[]> {
    const { data, error } = await supabaseAdmin
      .from("experiences")
      .select("*")
      .order("published_at", { ascending: false });

    if (error || !data) return [];
    return data as SupabaseExperienceRow[];
  }

  async adminGetById(id: string): Promise<SupabaseExperienceRow | null> {
    const { data, error } = await supabaseAdmin
      .from("experiences")
      .select("*")
      .eq("id", id)
      .single();

    if (error || !data) return null;
    return data as SupabaseExperienceRow;
  }

  async adminUpdate(id: string, input: Record<string, unknown>): Promise<void> {
    const { error } = await supabaseAdmin
      .from("experiences")
      .update({ ...input, updated_at: new Date().toISOString() })
      .eq("id", id);

    if (error) throw new Error(error.message);
  }
}
