import { BaseContent } from "@/types/content";
import { ExperienceType, ItineraryDay, ExperienceDate, ExperienceTestimonial } from "@/domains/shared/value-objects";

export interface Experience extends BaseContent {
  type: ExperienceType;
  title: string;
  shortDescription: string;
  fullDescription: string;
  coverImage: string | null;
  coverImageId?: string | null;
  price: number | null;
  currency: string;
  itinerary: ItineraryDay[];
  dates: ExperienceDate[];
  testimonials: ExperienceTestimonial[];
  citySlug: string | null;
}
