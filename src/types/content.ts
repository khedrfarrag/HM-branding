/**
 * Content Types — Global TypeScript declarations
 *
 * Shared content-oriented types consumed by repositories, pages, and components.
 * These extend the domain value objects with presentation-layer metadata.
 */

import type {
  SEOData,
  ContentStatus,
  AlertSeverity,
  ExperienceType,
  MediaType,
  TradeIntelType,
  ChinaSubdomain,
  BookingTargetType,
  BookingStatus,
  GeoCoordinates,
} from "@/domains/shared/value-objects";

// Re-export for convenience
export type {
  SEOData,
  ContentStatus,
  AlertSeverity,
  ExperienceType,
  MediaType,
  TradeIntelType,
  ChinaSubdomain,
  BookingTargetType,
  BookingStatus,
  GeoCoordinates,
};

// ---------------------------------------------------------------------------
// Base Content Node — every piece of managed content extends this
// ---------------------------------------------------------------------------

export interface BaseContent {
  slug: string;
  status: ContentStatus;
  publishedAt: string | null; // ISO-8601
  updatedAt: string | null;
  seo: SEOData;
}

// ---------------------------------------------------------------------------
// Localised string helper
// ---------------------------------------------------------------------------

/** A string that can differ per locale (ar / en). */
export type LocalisedString = {
  ar: string;
  en?: string;
};

// ---------------------------------------------------------------------------
// Author domain content types
// ---------------------------------------------------------------------------

export interface AuthorProfileContent extends BaseContent {
  name: string;
  nameEn: string;
  title: string;
  bio: string;
  avatarUrl: string;
}

export interface AchievementContent {
  title: string;
  year: number;
  details: string;
}

export interface CertificateContent {
  name: string;
  issuer: string;
  issueDate: string;
  verifyUrl: string | null;
  badgeUrl: string | null;
}

export interface TimelineEventContent {
  date: string;
  title: string;
  description: string;
  iconType?: string;
}

// ---------------------------------------------------------------------------
// Knowledge domain content types
// ---------------------------------------------------------------------------

export interface ArticleContent extends BaseContent {
  title: string;
  excerpt: string;
  body: string; // MDX source string
  category: string;
  topic: string;
  series: string | null;
  tags: string[];
  readingTimeMinutes: number;
  relatedSlugs: string[];
  coverImage: string | null;
}

export interface GlossaryTermContent extends BaseContent {
  term: string;
  termEn: string;
  definition: string;
  relatedTermSlugs: string[];
}

export interface FAQItemContent {
  question: string;
  answer: string;
  category: string;
}

// ---------------------------------------------------------------------------
// Experiences domain content types
// ---------------------------------------------------------------------------

export interface ItineraryDay {
  day: number;
  title: string;
  activities: string[];
}

export interface ExperienceDate {
  id?: string;
  startDate: string;
  endDate: string;
  enrollmentDeadline: string;
  spotsTotal: number;
  spotsRemaining: number;
}

export interface ExperienceTestimonial {
  clientName: string;
  clientTitle: string;
  quote: string;
  rating: number; // 1–5
}

export interface ExperienceContent extends BaseContent {
  type: ExperienceType;
  title: string;
  shortDescription: string;
  fullDescription: string;
  coverImage: string | null;
  price: number | null;
  currency: string;
  itinerary: ItineraryDay[];
  dates: ExperienceDate[];
  testimonials: ExperienceTestimonial[];
  citySlug: string | null;
}

// ---------------------------------------------------------------------------
// Trade Intelligence domain content types
// ---------------------------------------------------------------------------

export interface TradeIntelContent extends BaseContent {
  feedType: TradeIntelType;
  title: string;
  body: string;
  severity?: AlertSeverity;
  active?: boolean;
  region?: string;
  sourceUrl?: string | null;
}

// ---------------------------------------------------------------------------
// Media domain content types
// ---------------------------------------------------------------------------

export interface MediaContent extends BaseContent {
  mediaType: MediaType;
  title: string;
  description: string;
  thumbnailUrl: string | null;
  // Video / Podcast specific
  embedUrl?: string;
  audioUrl?: string;
  durationSeconds?: number;
  episodeNumber?: number;
  // Gallery specific
  imageUrls?: string[];
  // Press specific
  publicationName?: string;
  externalUrl?: string | null;
}

// ---------------------------------------------------------------------------
// Services domain content types
// ---------------------------------------------------------------------------

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface ServiceContent extends BaseContent {
  title: string;
  shortDescription: string;
  fullDescription: string;
  coverImage: string | null;
  processSteps: ProcessStep[];
  successStorySlugs: string[];
}

export interface SuccessStoryContent extends BaseContent {
  clientName: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  testimonialQuote: string;
  serviceSlug: string;
}

// ---------------------------------------------------------------------------
// China domain content types
// ---------------------------------------------------------------------------

export interface ChinaCityContent extends BaseContent {
  name: string;
  nameEn: string;
  region: string;
  coordinates: GeoCoordinates;
  description: string;
  bestVisitMonths: string[];
}

export interface ChinaMarketContent extends BaseContent {
  name: string;
  nameEn: string;
  citySlug: string;
  coordinates: GeoCoordinates | null;
  description: string;
  specialties: string[];
}

export interface ChinaSubdomainContent extends BaseContent {
  subdomain: ChinaSubdomain;
  name: string;
  citySlug: string;
  description: string;
  coordinates: GeoCoordinates | null;
  contactInfo?: string | null;
  websiteUrl?: string | null;
}

// ---------------------------------------------------------------------------
// Booking domain content types
// ---------------------------------------------------------------------------

export interface BookingRecord {
  bookingId: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  targetType: BookingTargetType;
  targetSlug: string;
  status: BookingStatus;
  paymentReceiptId: string | null;
  notes: string;
  createdAt: string;
}
