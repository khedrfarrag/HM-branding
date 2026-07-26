import { Locale, MediaType } from "@/domains/shared/value-objects";
import { Media } from "./entities";

export interface IMediaRepository {
  getMediaItems(locale: Locale, type?: MediaType): Promise<Media[]>;
  getMediaBySlug(locale: Locale, type: MediaType, slug: string): Promise<Media | null>;
  getAllSlugs(locale: Locale): Promise<{ type: MediaType; slug: string }[]>;
}
