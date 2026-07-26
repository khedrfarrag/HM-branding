import { BaseContent } from "@/types/content";
import { MediaType } from "@/domains/shared/value-objects";

export interface Media extends BaseContent {
  mediaType: MediaType;
  title: string;
  description: string;
  thumbnailUrl: string | null;
  embedUrl?: string;
  audioUrl?: string;
  durationSeconds?: number;
  episodeNumber?: number;
  imageUrls?: string[];
  publicationName?: string;
  externalUrl?: string | null;
}
