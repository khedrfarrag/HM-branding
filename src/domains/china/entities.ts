import { BaseContent } from "@/types/content";
import { GeoCoordinates, ChinaSubdomain } from "@/domains/shared/value-objects";

export interface ChinaCity extends BaseContent {
  name: string;
  nameEn: string;
  region: string;
  coordinates: GeoCoordinates;
  description: string;
  bestVisitMonths: string[];
  coverImage?: string | null;
}

export interface Market extends BaseContent {
  name: string;
  nameEn: string;
  citySlug: string;
  coordinates: GeoCoordinates | null;
  description: string;
  specialties: string[];
}

export interface ChinaSubdomainEntity extends BaseContent {
  subdomain: ChinaSubdomain;
  name: string;
  citySlug: string;
  description: string;
  coordinates: GeoCoordinates | null;
  contactInfo?: string | null;
  websiteUrl?: string | null;
}
