# Data Model & Interfaces: Expanded Platform Information Architecture

**Feature**: 006-information-architecture
**Date**: 2026-07-08
**Phase**: 1 — Design & Contracts

---

## 1. Entities & Repositories

All interfaces are updated to cover the new subdomains and expanded attributes:

### 1.1 Booking Domain (src/domains/booking)
```typescript
export interface BookingRecord {
  bookingId: string;
  clientId: string;
  targetType: "consultation" | "experience" | "corporate" | "event";
  targetId: string; // Slug or schedule id
  status: "pending" | "confirmed" | "canceled" | "refunded";
  paymentReceiptId: string | null;
  createdAt: string;
}

export interface IBookingRepository {
  saveBooking(booking: BookingRecord): Promise<void>;
  getBookingById(id: string): Promise<BookingRecord | null>;
  getBookingsByClient(clientId: string): Promise<BookingRecord[]>;
}
```

### 1.2 Trade Intelligence Domain (src/domains/trade-intel)
```typescript
export interface ShippingNews { slug: string; title: string; content: string; rateUpdates: string[]; publishDate: string; }
export interface CustomsUpdate { slug: string; title: string; content: string; region: string; tariffCode: string; }
export interface CurrencyRate { code: string; rate: number; monitoredAt: string; }
export interface ChinaMarketUpdate { slug: string; title: string; content: string; marketSlug: string; }
export interface TradeRegulation { slug: string; title: string; content: string; regulatoryBody: string; }
export interface FactoryNews { slug: string; title: string; content: string; factorySlug: string; }
export interface GlobalTradeNews { slug: string; title: string; content: string; }
export interface ChinaExhibition { slug: string; name: string; dateRange: string; location: string; }
export interface SupplyChainAlert { slug: string; title: string; severity: "low" | "medium" | "high" | "critical"; content: string; active: boolean; }

export interface ITradeIntelRepository {
  getShippingNews(locale: Locale): Promise<ShippingNews[]>;
  getCustomsUpdates(locale: Locale): Promise<CustomsUpdate[]>;
  getCurrencyRates(): Promise<CurrencyRate[]>;
  getMarketUpdates(locale: Locale): Promise<ChinaMarketUpdate[]>;
  getTradeRegulations(locale: Locale): Promise<TradeRegulation[]>;
  getFactoryNews(locale: Locale): Promise<FactoryNews[]>;
  getGlobalTradeNews(locale: Locale): Promise<GlobalTradeNews[]>;
  getExhibitions(locale: Locale): Promise<ChinaExhibition[]>;
  getSupplyChainAlerts(locale: Locale): Promise<SupplyChainAlert[]>;
}
```

### 1.3 Media Domain (src/domains/media)
```typescript
export interface Video { slug: string; title: string; description: string; embedUrl: string; duration: string; }
export interface Podcast { slug: string; title: string; audioUrl: string; duration: string; episodeNumber: number; }
export interface Interview { slug: string; title: string; transcript: string; platformName: string; }
export interface Gallery { slug: string; title: string; images: string[]; eventDate: string; }
export interface PressRelease { slug: string; title: string; body: string; releaseDate: string; }

export interface IMediaRepository {
  getVideos(locale: Locale): Promise<Video[]>;
  getPodcasts(locale: Locale): Promise<Podcast[]>;
  getInterviews(locale: Locale): Promise<Interview[]>;
  getGalleries(locale: Locale): Promise<Gallery[]>;
  getPressReleases(locale: Locale): Promise<PressRelease[]>;
}
```

### 1.4 Author Domain (src/domains/author)
```typescript
export interface AuthorProfile {
  id: string;
  name: string;
  bio: string;
  achievements: Achievement[];
  certificates: Certificate[];
  timeline: TimelineEvent[];
  gallery: string[];
}

export interface Achievement { title: string; year: number; details: string; }
export interface Certificate { name: string; issuer: string; issueDate: string; verifyUrl: string | null; }
export interface TimelineEvent { date: string; title: string; description: string; }

export interface IAuthorRepository {
  getProfile(locale: Locale): Promise<AuthorProfile | null>;
  getAchievements(locale: Locale): Promise<Achievement[]>;
  getCertificates(locale: Locale): Promise<Certificate[]>;
  getTimelineEvents(locale: Locale): Promise<TimelineEvent[]>;
}
```

### 1.5 Experience Domain (src/domains/experiences)
```typescript
export type ExperienceType = 
  | "business-trips" 
  | "factory-tours" 
  | "vip-experiences" 
  | "private-mentorship" 
  | "china-business-experience" 
  | "corporate-programs" 
  | "canton-fair-programs";

export interface Experience {
  slug: string;
  type: ExperienceType;
  title: string;
  shortDescription: string;
  fullDescription: string;
}

export interface IExperienceRepository {
  getExperiences(locale: Locale, type?: ExperienceType): Promise<Experience[]>;
  getExperienceBySlug(locale: Locale, type: ExperienceType, slug: string): Promise<Experience | null>;
}
```

### 1.6 China Domain (src/domains/china)
```typescript
export interface ChinaCity { slug: string; name: string; }
export interface Market { slug: string; name: string; citySlug: string; }
export interface Factory { slug: string; name: string; citySlug: string; }
export interface Hotel { slug: string; name: string; citySlug: string; starRating: number; }
export interface Restaurant { slug: string; name: string; citySlug: string; cuisineType: string; }
export interface Translator { slug: string; name: string; citySlug: string; languages: string[]; }
export interface ShippingCompany { slug: string; name: string; portSlugs: string[]; }
export interface Port { slug: string; name: string; citySlug: string; }

export interface IChinaRepository {
  getCities(locale: Locale): Promise<ChinaCity[]>;
  getCityBySlug(locale: Locale, slug: string): Promise<ChinaCity | null>;
  getMarkets(locale: Locale, citySlug?: string): Promise<Market[]>;
  getMarketBySlug(locale: Locale, slug: string): Promise<Market | null>;
  getFactories(locale: Locale, category?: string): Promise<Factory[]>;
  getHotels(citySlug: string): Promise<Hotel[]>;
  getRestaurants(citySlug: string): Promise<Restaurant[]>;
  getTranslators(citySlug: string): Promise<Translator[]>;
  getShippingCompanies(): Promise<ShippingCompany[]>;
  getPorts(): Promise<Port[]>;
}
```

### 1.7 Knowledge Domain (src/domains/knowledge)
```typescript
export interface Article {
  slug: string;
  title: string;
  content: string;
  category: string;
  topic: string;
  series: string | null;
  tags: string[];
  relatedContentSlugs: string[];
}

export interface IKnowledgeRepository {
  getArticles(locale: Locale, options?: { category?: string; topic?: string; series?: string; tag?: string }): Promise<Article[]>;
  getArticleBySlug(locale: Locale, category: string, slug: string): Promise<Article | null>;
}
```
