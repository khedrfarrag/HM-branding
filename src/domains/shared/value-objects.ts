/**
 * Shared Value Objects — Domain Layer
 *
 * Pure TypeScript types shared across all business domains.
 * No framework imports (Next.js, React, Node.js) are permitted in this file.
 */

// ---------------------------------------------------------------------------
// Locale
// ---------------------------------------------------------------------------

/** Supported UI locales. */
export type Locale = "ar" | "en";

export const SUPPORTED_LOCALES: Locale[] = ["ar", "en"];
export const DEFAULT_LOCALE: Locale = "ar";

// ---------------------------------------------------------------------------
// Content Status
// ---------------------------------------------------------------------------

/** Lifecycle status for any piece of managed content. */
export type ContentStatus = "draft" | "published" | "archived";

// ---------------------------------------------------------------------------
// SEO Value Objects
// ---------------------------------------------------------------------------

/** SEO metadata attached to every content entity. */
export interface SEOData {
  /** Page <title> tag content. */
  title: string;
  /** Meta description (≤160 chars recommended). */
  description: string;
  /** Canonical URL — absolute path, e.g. "/ar/knowledge/sourcing/basics". */
  canonicalPath: string;
  /** Open Graph image URL. */
  ogImage?: string;
  /** hreflang alternate map  { ar: "/ar/...", en: "/en/..." } */
  alternates?: Partial<Record<Locale, string>>;
}

// ---------------------------------------------------------------------------
// GEO / Schema.org helpers
// ---------------------------------------------------------------------------

/** WGS-84 geographic coordinates for Place schema. */
export interface GeoCoordinates {
  latitude: number;
  longitude: number;
}

/** Minimal Schema.org address for Organization / Place entities. */
export interface PostalAddress {
  streetAddress?: string;
  addressLocality: string;
  addressCountry: string;
}

// ---------------------------------------------------------------------------
// Pagination
// ---------------------------------------------------------------------------

export interface PaginationOptions {
  page: number;
  pageSize: number;
}

export interface PaginatedResult<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// ---------------------------------------------------------------------------
// Alert Severity (Trade Intelligence)
// ---------------------------------------------------------------------------

export type AlertSeverity = "low" | "medium" | "high" | "critical";

// ---------------------------------------------------------------------------
// Booking Target
// ---------------------------------------------------------------------------

export type BookingTargetType =
  | "consultation"
  | "experience"
  | "corporate"
  | "event";

export type BookingStatus =
  | "pending"
  | "confirmed"
  | "canceled"
  | "refunded";

// ---------------------------------------------------------------------------
// Experience Types
// ---------------------------------------------------------------------------

export type ExperienceType =
  | "business-trips"
  | "factory-tours"
  | "vip-experiences"
  | "private-mentorship"
  | "china-business-experience"
  | "corporate-programs"
  | "canton-fair-programs";

export const EXPERIENCE_TYPES: ExperienceType[] = [
  "business-trips",
  "factory-tours",
  "vip-experiences",
  "private-mentorship",
  "china-business-experience",
  "corporate-programs",
  "canton-fair-programs",
];

// ---------------------------------------------------------------------------
// Experience Composite Value Objects
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
  availableSeats: number | null;
  spotsRemaining?: number | null;
  spotsTotal?: number | null;
  enrollmentDeadline?: string | null;
  price?: number | null;
  currency?: string | null;
}

export interface ExperienceTestimonial {
  clientName: string;
  clientTitle: string;
  quote: string;
}

// ---------------------------------------------------------------------------
// Media Types
// ---------------------------------------------------------------------------

export type MediaType =
  | "videos"
  | "podcasts"
  | "interviews"
  | "gallery"
  | "press";

// ---------------------------------------------------------------------------
// Trade Intelligence Feed Types
// ---------------------------------------------------------------------------

export type TradeIntelType =
  | "shipping-news"
  | "customs-updates"
  | "currency-rates"
  | "market-updates"
  | "trade-regulations"
  | "factory-news"
  | "global-trade-news"
  | "china-exhibitions"
  | "supply-chain-alerts";

// ---------------------------------------------------------------------------
// China Subdomain Types
// ---------------------------------------------------------------------------

export type ChinaSubdomain =
  | "cities"
  | "markets"
  | "factories"
  | "hotels"
  | "restaurants"
  | "translators"
  | "shipping-companies"
  | "ports";
