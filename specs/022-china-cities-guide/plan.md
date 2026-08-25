# Implementation Plan: China Cities Commercial & Sourcing Guide

**Branch**: `022-china-cities-guide` | **Date**: 2026-08-25 | **Spec**: [spec.md](file:///g:/hossam%20mabrouk/specs/022-china-cities-guide/spec.md)

**Input**: Feature specification from `/specs/022-china-cities-guide/spec.md`

## Summary

Build a world-class, comprehensive **China Cities Commercial & Sourcing Guide (دليل مدن الصين التجاري الشامل)** for importers, business travelers, wholesalers, and manufacturers. The guide will feature dynamic bilingual routing (`/ar/china-cities/` & `/en/china-cities/`), an interactive search & tier filtering directory, deep city profile pages (covering markets, streets, manufacturing zones, logistics, and business travel tips), an interactive SVG China map, and a side-by-side city comparison tool. Data will be modular, reliable, and strictly verified with fallback indicators for missing details.

## Technical Context

**Language/Version**: TypeScript 5 (Strict Mode), React 19, Next.js 15 App Router

**Primary Dependencies**: Tailwind CSS v4, Framer Motion, Lucide React, clsx, tailwind-merge

**Storage**: Static JSON/TS dataset with dynamic SSR/SSG pre-rendering (`src/features/china-cities/data/`)

**Testing**: `npx tsc --noEmit` and custom dataset integrity validation

**Target Platform**: Desktop & Mobile Web (Responsive Mobile-First)

**Project Type**: Next.js 15 Web Application (Marketing & Knowledge Directory)

**Performance Goals**: Sub-2.5s LCP, sub-50ms search filter response, zero layout shift (CLS < 0.1)

**Constraints**: WCAG 2.2 AA accessibility, SEO/GEO JSON-LD Schema.org compliance, zero hallucinated data

**Scale/Scope**: 50+ prioritized Chinese commercial cities (Guangzhou, Shenzhen, Yiwu, Foshan, Dongguan, etc.), 200+ wholesale markets, 100+ industrial zones

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Section 1 - Brand Identity & Philosophy**: PASS. Premium visual hierarchy, dark slate & gold accent design, authoritative import/export trade positioning.
- **Section 24 - Feature-First Architecture**: PASS. All code contained in `src/features/china-cities/` and routed at `src/app/[locale]/(marketing)/china-cities/`.
- **Section 26 & 31 - Styling & Image Rules**: PASS. Tailwind CSS v4 design tokens, WebP optimized image assets, explicit height/width parameters.
- **Section 33-37 - SEO, GEO & Schema.org**: PASS. Localized dynamic metadata, single H1 hierarchy, JSON-LD Place/LocalBusiness/Breadcrumb markup.

## Project Structure

### Documentation (this feature)

```text
specs/022-china-cities-guide/
├── spec.md              # Feature Specification
├── plan.md              # Implementation Plan (this file)
├── research.md          # Technical Research & Decisions
├── data-model.md        # Data Schemas & Models
├── quickstart.md        # Runnable Validation Guide
├── contracts/
│   └── ui-contracts.md  # Route & Component Contracts
└── checklists/
    └── requirements.md  # Quality Checklist
```

### Source Code (repository root)

```text
src/
├── app/
│   └── [locale]/
│       └── (marketing)/
│           └── china-cities/
│               ├── page.tsx                  # Main Hub Directory
│               ├── compare/
│               │   └── page.tsx              # Side-by-side Comparison Page
│               └── [slug]/
│                   └── page.tsx              # Dynamic City Profile Page
└── features/
    └── china-cities/
        ├── components/
        │   ├── ChinaCitiesHubClient.tsx      # Interactive Directory & Search
        │   ├── CityProfileClient.tsx         # Detailed City Profile Layout
        │   ├── CityComparisonClient.tsx      # Comparison Matrix UI
        │   ├── ChinaInteractiveMap.tsx       # SVG China Map Component
        │   ├── CityCard.tsx                  # Reusable City Card
        │   ├── MarketCard.tsx                # Wholesale Market Card
        │   └── SourcingProductCard.tsx       # Product Card ("What to import")
        ├── data/
        │   ├── cities.ts                     # Primary Cities Dataset
        │   ├── markets.ts                    # Wholesale Markets Dataset
        │   └── industries.ts                 # Industry/Product Mapping
        ├── types/
        │   └── index.ts                      # TypeScript Interfaces
        └── utils/
            ├── citySearch.ts                 # Search & Filter Engine
            └── schemaGenerator.ts            # SEO & Schema.org JSON-LD Helper
```

**Structure Decision**: Feature-first module structure placed inside `src/features/china-cities/` with Next.js App Router endpoints in `src/app/[locale]/(marketing)/china-cities/`.

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None | N/A | N/A |
