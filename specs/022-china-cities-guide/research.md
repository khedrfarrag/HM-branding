# Technical Research: China Cities Commercial & Sourcing Guide

**Feature**: China Cities Guide (`specs/022-china-cities-guide`)

## 1. Feature Architecture & Location

- **Decision**: Implement as a feature-first module in `src/features/china-cities/` with routing handled in `src/app/[locale]/(marketing)/china-cities/`.
- **Rationale**: Complies strictly with Constitution Section 24 (Feature-First Architecture). Isolates datasets, components, search utilities, map components, and schemas inside a reusable feature module.
- **Alternatives Considered**:
  - Placing everything directly in `src/app/`: Rejected because it scatters business logic and UI across routing folders.
  - Adding logic to `src/features/industries/`: Rejected because China Cities has unique data models (Markets, Districts, Logistics, Business Travel, Interactive Maps, Side-by-side comparison).

## 2. Dynamic Routing & Locale Strategy

- **Decision**: Leverage Next.js 15 App Router dynamic routes with localized paths:
  - Main Hub: `/[locale]/china-cities/`
  - City Profile: `/[locale]/china-cities/[slug]/`
  - Comparison Tool: `/[locale]/china-cities/compare/`
- **Rationale**: Supports `/ar/china-cities/guangzhou` and `/en/china-cities/guangzhou` with full i18n dictionary integration and `generateStaticParams()` for SSG/ISR caching.
- **Alternatives Considered**:
  - Query parameter routing (`/china-cities?city=guangzhou`): Rejected due to poor SEO performance and indexing penalties.

## 3. Data Model & Dataset Management

- **Decision**: Store structured city data in typed TypeScript data files in `src/features/china-cities/data/` (e.g. `cities.ts`, `markets.ts`, `industries.ts`) with clear Zod validation schemas.
- **Rationale**: Guarantees type safety, instantaneous search lookups, zero DB network latency, easy version control, and extensible scaffolding for thousands of future cities. Missing or unverified fields will default to omit or explicit fallback copy ("Information coming soon").
- **Alternatives Considered**:
  - Supabase/External DB query on every request: Rejected because static commercial guides benefit significantly from static pre-rendering and build-time indexation.

## 4. Search & Multi-field Filtering Engine

- **Decision**: Custom client-side weighted search and filtering utility handling Arabic, English, and Chinese names, product categories, wholesale market names, and trade tiers.
- **Rationale**: Immediate response time (<50ms) for 50+ cities, full support for cross-language matching (e.g. typing "أثاث" or "Furniture" or "Foshan" or "Guangzhou" yields exact targeted results).
- **Alternatives Considered**:
  - Heavy external search API: Unnecessary overhead for present dataset size (<1000 items).

## 5. Interactive China Map Implementation

- **Decision**: Bespoke SVG vector map component (`ChinaInteractiveMap.tsx`) with province highlights, trade tier markers (Pearl River Delta / Greater Bay Area, Yangtze River Delta, Coastal Belts), responsive touch support, and modal quick-view cards.
- **Rationale**: Complies with Constitution Section 5 (Motion Principles - hardware accelerated, accessible, zero heavy external map JS bloat).

## 6. SEO & Schema.org Structured Data

- **Decision**: Native `generateMetadata` for dynamic titles, meta descriptions, canonical URLs, hreflang tags, and inline JSON-LD (`Place`, `BreadcrumbList`, `LocalBusiness` schemas).
- **Rationale**: Guarantees maximum visibility on Google and AI Search engines (GEO) per Constitution Sections 33-37.
