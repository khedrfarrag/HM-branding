# Contract: Domain Repositories

**Feature**: 006-information-architecture
**File**: src/domains/*/repository.ts

This contract defines the repository interfaces for the expanded personal branding platform, supporting data resolution across multiple persistent providers (local files, headless CMS, databases, or remote APIs).

---

## 1. IAuthorRepository
```typescript
export interface IAuthorRepository {
  getProfile(locale: Locale): Promise<AuthorProfile | null>;
  getAchievements(locale: Locale): Promise<Achievement[]>;
  getCertificates(locale: Locale): Promise<Certificate[]>;
  getTimelineEvents(locale: Locale): Promise<TimelineEvent[]>;
}
```

## 2. IExperienceRepository
```typescript
export interface IExperienceRepository {
  getExperiences(locale: Locale, type?: ExperienceType): Promise<Experience[]>;
  getExperienceBySlug(locale: Locale, type: ExperienceType, slug: string): Promise<Experience | null>;
}
```

## 3. IKnowledgeRepository
```typescript
export interface IKnowledgeRepository {
  getArticles(locale: Locale, options?: { category?: string; topic?: string; series?: string; tag?: string }): Promise<Article[]>;
  getArticleBySlug(locale: Locale, category: string, slug: string): Promise<Article | null>;
  getGlossaryTerms(locale: Locale): Promise<GlossaryTerm[]>;
  getGlossaryTermBySlug(locale: Locale, slug: string): Promise<GlossaryTerm | null>;
  getFAQs(locale: Locale, category?: string): Promise<FAQItem[]>;
}
```

## 4. ITradeIntelRepository
```typescript
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

## 5. IMediaRepository
```typescript
export interface IMediaRepository {
  getVideos(locale: Locale): Promise<Video[]>;
  getPodcasts(locale: Locale): Promise<Podcast[]>;
  getInterviews(locale: Locale): Promise<Interview[]>;
  getGalleries(locale: Locale): Promise<Gallery[]>;
  getPressReleases(locale: Locale): Promise<PressRelease[]>;
}
```

## 6. IChinaRepository
```typescript
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

## 7. IBookingRepository
```typescript
export interface IBookingRepository {
  saveBooking(booking: BookingRecord): Promise<void>;
  getBookingById(id: string): Promise<BookingRecord | null>;
  getBookingsByClient(clientId: string): Promise<BookingRecord[]>;
}
```
