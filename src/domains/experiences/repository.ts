import { Locale, ExperienceType } from "@/domains/shared/value-objects";
import { Experience } from "./entities";

export interface IExperienceRepository {
  getExperiences(locale: Locale, type?: ExperienceType): Promise<Experience[]>;
  getExperienceBySlug(locale: Locale, type: ExperienceType, slug: string): Promise<Experience | null>;
  getAllSlugs(locale: Locale): Promise<{ type: ExperienceType; slug: string }[]>;
}
