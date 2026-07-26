import { Locale } from "@/domains/shared/value-objects";
import { Service, SuccessStory } from "./entities";

export interface IServiceRepository {
  getServices(locale: Locale): Promise<Service[]>;
  getServiceBySlug(locale: Locale, slug: string): Promise<Service | null>;
  getSuccessStories(locale: Locale): Promise<SuccessStory[]>;
  getSuccessStoryBySlug(locale: Locale, slug: string): Promise<SuccessStory | null>;
}
