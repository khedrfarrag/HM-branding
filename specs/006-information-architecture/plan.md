# Implementation Plan: Complete Platform Information Architecture (Domain-Driven)

**Branch**: `006-information-architecture` | **Date**: 2026-07-08 | **Spec**: [spec.md](file:///g:/hossam%20mabrouk/specs/006-information-architecture/spec.md)

**Input**: Expanded Bounded Context and Domain Feature specification from `specs/006-information-architecture/spec.md`

## Summary

This feature establishes an expanded Domain-Driven, Content-Driven architectural scaffolding for hossammabrouk.com. We decouple the routing/UI layer from the raw storage mechanism by introducing Repository interfaces, value objects, and business domains. All dynamic routing is content-driven, eliminating dozens of manual static pages. We also isolate integrations (e.g. Search, CRM, Payments) behind abstractions.

## Technical Context

**Language/Version**: TypeScript 5.7, Next.js 15.1.0, React 19

**Primary Dependencies**: Tailwind CSS v4, Framer Motion, Lucide React, Zod, React Hook Form

**New Dependencies**:
- `fuse.js` (Fuzzy Search implementation of the Search Provider interface)
- `gray-matter` (Frontmatter parsing in the filesystem repository implementation)
- `@next/mdx` or `next-mdx-remote` (MDX file parsing)

**Storage**: Local MDX + JSON files under `/content/`, managed by repository implementations implementing `src/domains/*/repository.ts` interfaces.

**Testing**: npm run lint, npm run type-check

**Target Platform**: Netlify hosting, Web browser client

**Project Type**: Domain-Driven Content Platform

**Performance Goals**: LCP < 2.5s, CLS < 0.1, INP < 200ms

**Constraints**: Adherence to the project's Constitution. Pure domain logic layer (no runtime Next.js routing or filesystem calls in `src/domains`).

## Bounded Contexts & Folder Structure

```text
src/
├── app/
│   ├── [locale]/
│   │   ├── (marketing)/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── about/
│   │   │   │   └── [...slug]/page.tsx      # Bio, timeline, achievements, certificates, gallery
│   │   │   ├── services/
│   │   │   │   └── [slug]/page.tsx        # Sourcing, QC, consulting
│   │   │   ├── success-stories/
│   │   │   │   └── [slug]/page.tsx        # Success story detail
│   │   │   ├── tools/
│   │   │   │   └── [slug]/page.tsx        # Interactive tools
│   │   │   ├── downloads/
│   │   │   │   └── [slug]/page.tsx        # Downloads
│   │   │   └── contact/page.tsx
│   │   ├── (knowledge)/
│   │   │   ├── layout.tsx
│   │   │   └── knowledge/
│   │   │       ├── page.tsx
│   │   │       ├── glossary/
│   │   │       │   └── [term]/page.tsx
│   │   │       ├── faq/
│   │   │       │   └── [category]/page.tsx
│   │   │       └── [category]/
│   │   │           ├── page.tsx
│   │   │           └── [slug]/page.tsx    # Dynamic articles (topics, categories, series, tags)
│   │   ├── (experiences)/
│   │   │   ├── layout.tsx
│   │   │   └── experiences/
│   │   │       ├── page.tsx
│   │   │       └── [type]/
│   │   │           ├── page.tsx
│   │   │           └── [slug]/page.tsx    # Trips, tours, VIP, Canton Fair, mentorship
│   │   ├── (china)/
│   │   │   ├── layout.tsx
│   │   │   └── china/
│   │   │       ├── page.tsx
│   │   │       └── [subdomain]/           # Cities, markets, factories, hotels, translators, ports
│   │   │           └── [slug]/page.tsx
│   │   ├── (trade-intel)/
│   │   │   ├── layout.tsx
│   │   │   └── trade-intelligence/
│   │   │       ├── page.tsx
│   │   │       └── [type]/                # Shipping, customs, currency, factory news, exhibitions
│   │   │           └── [slug]/page.tsx
│   │   ├── (media)/
│   │   │   ├── layout.tsx
│   │   │   └── media/
│   │   │       ├── page.tsx
│   │   │       └── [type]/                # Videos, podcasts, press, gallery
│   │   │           └── [slug]/page.tsx
│   │   └── (booking)/
│   │       ├── layout.tsx
│   │       └── booking/                   # Consultation, Experience, Corporate, Event booking
│   │           ├── page.tsx
│   │           └── [type]/
│   │               └── [slug]/page.tsx
├── domains/                         # Business Domain Layer (Interface definitions only)
│   ├── shared/
│   │   ├── value-objects.ts
│   │   └── repository.ts
│   ├── author/
│   │   ├── entities.ts
│   │   └── repository.ts
│   ├── experiences/
│   │   ├── entities.ts
│   │   └── repository.ts
│   ├── knowledge/
│   │   ├── entities.ts
│   │   └── repository.ts
│   ├── trade-intel/
│   │   ├── entities.ts
│   │   └── repository.ts
│   ├── media/
│   │   ├── entities.ts
│   │   └── repository.ts
│   ├── services/
│   │   ├── entities.ts
│   │   └── repository.ts
│   ├── china/
│   │   ├── entities.ts
│   │   └── repository.ts
│   └── booking/
│       ├── entities.ts
│       └── repository.ts
├── repositories/                    # Infrastructure Layer (Concrete repository implementations)
│   ├── local-fs/
│   └── cms/                         # Headless CMS Repository placeholder
├── integrations/                    # Gateways & Integrations Layer (CRM, Payments, Analytics, Calendar, Storage, Email, Search, AI)
│   ├── search/
│   │   ├── provider.ts
│   │   └── fuse-provider.ts
│   ├── crm/
│   ├── payments/
│   ├── analytics/
│   ├── calendar/
│   ├── storage/
│   ├── email/
│   └── ai/
├── components/
│   ├── shared/
│   └── feature/
└── lib/
    ├── utils.ts
    └── schema/                      # Structured Schema.org builders
```

**Structure Decision**: Refactored to Domain-Driven Design (DDD). We separate core domains inside `src/domains`, repository implementations in `src/repositories`, integrations in `src/integrations`, and routing page resolvers in `src/app`.
