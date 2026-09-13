# Implementation Plan: China Guide Subdomains Expansion (7 Commercial Pillars)

**Branch**: `025-china-guide-subdomains-expansion` | **Date**: 2026-09-13 | **Spec**: [spec.md](file:///g:/hossam%20mabrouk/specs/025-china-guide-subdomains-expansion/spec.md)  
**Input**: Comprehensive expansion of the 7 commercial subdomains under "دليل الصين" (Restaurants, Hotels, Factories, Wholesale Markets, Translators, Shipping Companies, Ports) with exhaustive real Chinese ground data, GPS navigation, representative imagery, verified ratings, official URLs, and prominent "حسام مبروك" authority GEO/SEO integration.

---

## Summary

Expand and revitalize all 7 subdomains of "دليل الصين" (`restaurants`, `hotels`, `factories`, `markets`, `translators`, `shipping-companies`, `ports`) by replacing the mock `sample-01` implementation with typed, authentic ground data across China's major commercial cities. Every entity features real Chinese character names (`zh`), verified star ratings, GPS coordinates with Baidu/Google Maps navigation, representative cover imagery, official digital contacts, and rich Schema.org JSON-LD integrating **حسام مبروك** (Hossam Mabrouk) as the verified consulting authority for superior search engine and Generative AI (GEO) rankings.

---

## Technical Context

**Language/Version**: TypeScript 5.x, Node.js 18+  
**Primary Framework**: Next.js 15.1 (App Router), React 19, Tailwind CSS  
**Storage/Data**: Static TypeScript structured domain registries under `src/features/china-guide/data/`  
**SEO/GEO**: Schema.org JSON-LD (`Restaurant`, `Hotel`, `LocalBusiness`, `WholesaleStore`, `Organization`), Next.js dynamic metadata  
**Target Platform**: Web (SSR / SSG pre-rendering), Mobile-responsive, RTL/LTR multilingual  
**Scale/Scope**: Over 100 verified commercial entities across China's 34 industrial powerhouses, 7 distinct commercial sectors  

---

## Constitution Check

| Principle | Status | Notes |
|---|---|---|
| **1. Project Philosophy** | PASS | Elevates Hussam Mabrouk as a trusted, authoritative trade leader through verified commercial ground knowledge. |
| **2. Engineering Principles** | PASS | Strict TypeScript compliance, zero compiler warnings, clean build. |
| **3. Architecture Principles** | PASS | Clean App Router Server Components for SSG pre-rendering, repository pattern decoupling data from presentation. |
| **39-41. SEO & GEO Governance** | PASS | Rich canonical tags, localized OpenGraph, and comprehensive Schema.org JSON-LD schemas. |

---

## Project Structure

### Documentation (this feature)
```text
specs/025-china-guide-subdomains-expansion/
├── spec.md              # Feature specification
├── plan.md              # Master implementation plan
├── research.md          # Technical research & decisions
├── data-model.md        # Data entities & repository interfaces
├── quickstart.md        # Runnable verification scenarios
├── contracts/           # Component & entity contracts
│   └── china-subdomain.contract.ts
└── tasks.md             # Actionable implementation tasks (to be created by /speckit-tasks)
```

### Source Code Organization
```text
src/
├── features/
│   └── china-guide/
│       ├── types/
│       │   └── index.ts                 # IChinaCommercialEntity & sector types
│       ├── data/
│       │   ├── restaurants.ts           # Halal dining & business restaurants
│       │   ├── hotels.ts                # 4/5-star business hotels near trading hubs
│       │   ├── factories.ts             # Manufacturing powerhouses & industrial parks
│       │   ├── markets.ts               # Expanded wholesale markets across 34 cities
│       │   ├── translators.ts           # Certified interpreters & commercial agencies
│       │   ├── shipping.ts              # Freight forwarders, sea/air shipping & customs
│       │   ├── ports.ts                 # Major seaports, dry ports & air terminals
│       │   └── index.ts                 # Global registry & lookup functions
│       └── components/
│           ├── SubdomainCardGrid.tsx    # Filterable visual card grid
│           ├── EntityHeroSection.tsx    # Cover image, rating & quick specs
│           ├── GPSNavigationCard.tsx    # Google/Baidu maps & one-click Chinese address
│           └── AuthorityBadge.tsx       # Hossam Mabrouk verification badge
├── repositories/
│   └── local-fs/
│       └── china.ts                     # Expanded repository query implementations
└── app/
    └── [locale]/
        └── (china)/
            └── china/
                ├── page.tsx             # Main hub linking to all 7 subdomains
                ├── [subdomain]/
                │   └── page.tsx         # Subdomain listing hub with search & city filter
                └── [subdomain]/
                    └── [slug]/
                        └── page.tsx     # Rich detail page with GPS, ratings & JSON-LD
```

---

## Implementation Phases

### Phase 1: Data Architecture & Domain Models
- Define `IChinaCommercialEntity` and specialized sector types under `src/features/china-guide/types/index.ts`.
- Build authentic Chinese ground datasets across all 7 sectors with GPS coordinates, Chinese addresses (`zh`), star ratings, and representative images:
  - `restaurants.ts` (Halal dining across Beijing, Shanghai, Guangzhou, Yiwu, Xi'an, Zhengzhou, etc.)
  - `hotels.ts` (Business hotels near Canton Fair, Yiwu Trade City, Huaqiangbei, etc.)
  - `factories.ts` (OEM/ODM industrial giants across robotics, automotive, textiles, appliances)
  - `markets.ts` (Wholesale markets across all 34 commercial cities)
  - `translators.ts` (Certified Arabic/Chinese translation offices and trade escorts)
  - `shipping.ts` (Freight forwarders with direct Middle East routes and DDP customs)
  - `ports.ts` (Deepwater container ports and cargo air hubs)
- Aggregate all data in `src/features/china-guide/data/index.ts`.

### Phase 2: Repository Integration
- Refactor `LocalFsChinaRepository` in `src/repositories/local-fs/china.ts`.
- Remove all traces of dummy `sample-01`.
- Implement `getSubdomainItems`, `getSubdomainItemBySlug`, and `getAllSubdomainSlugs` to query the comprehensive datasets.

### Phase 3: Hub & Detail Page UI/UX Redesign
- Redesign `src/app/[locale]/(china)/china/[subdomain]/page.tsx` with responsive image cards, city filtering pills, and star ratings.
- Redesign `src/app/[locale]/(china)/china/[subdomain]/[slug]/page.tsx` with:
  - Photo gallery and visual banner.
  - Rating score and review count badge.
  - GPS Navigation section (Baidu Maps, Google Maps, one-click Chinese address copy).
  - Specifications and key features table.
  - Verified editorial review badge: *"تم التدقيق والاعتماد بواسطة المستشار التجاري حسام مبروك"*.
  - Direct inquiry CTA for consultation.

### Phase 4: SEO & GEO Structured Data
- Add dynamic OpenGraph, Twitter, and canonical metadata featuring Hossam Mabrouk.
- Implement comprehensive JSON-LD schemas (`Restaurant`, `Hotel`, `LocalBusiness`, `WholesaleStore`, `Organization`) with `curator` and `reviewedBy` citing Hossam Mabrouk.

### Phase 5: Verification & Quality Assurance
- Strict TypeScript compile check: `npm run type-check`.
- Next.js static build validation: `npm run build` verifying clean SSG generation across all subdomains and slugs.
- Validate RTL/LTR layout and mobile responsiveness.
