# Implementation Plan: Services Content Pages & Contact Form Redesign

**Feature**: 017-services-content-pages-redesign
**Branch**: main
**Status**: Ready for Task Generation

---

## Overview

Redesign and enrich all services-related content pages — services hub, service detail articles, success stories, and contact page — with a luxury dark aesthetic, expressive imagery, interactive process timelines, and a brand-aligned contact form. All pages will use feature-first components following the project constitution.

---

## Constitution Check

| Principle | Status |
|-----------|--------|
| Feature-first architecture (`src/features/`) | ✅ Compliant |
| Server Components by default | ✅ Compliant |
| Client Components only for interactive forms | ✅ Compliant |
| Tailwind CSS v4 design tokens only | ✅ Compliant |
| Framer Motion for animations | ✅ Compliant |
| Next.js `Image` component for images | ✅ Compliant |
| Zod validation on form inputs | ✅ Compliant |
| Schema.org JSON-LD on all pages | ✅ Compliant |
| i18n (ar/en) support | ✅ Compliant |
| No `any` TypeScript types | ✅ Compliant |

---

## Technical Context

- **Framework**: Next.js 15.x App Router, React 19
- **Styling**: Tailwind CSS v4 + design tokens from `globals.css`
- **Animation**: Framer Motion (`RevealSection`, `StaggerReveal`)
- **Form**: React Hook Form + Zod
- **Data**: `LocalFsServiceRepository` (static data, ISR compatible)
- **Contact submission**: Server Action → Supabase `contact_submissions` table
- **Images**: AI-generated PNGs in `public/images/services/` and `public/images/contact/`

---

## Proposed Changes

---

### Layer 1: Domain & Data Layer

#### [MODIFY] `src/domains/services/entities.ts`
- Add `deliverables: string[]` field to `Service` interface

#### [MODIFY] `src/repositories/local-fs/services.ts`
- Add `deliverables` array to all 3 existing services
- Add 4th service: `customs-logistics`
- Update `coverImage` paths to new hero image filenames

---

### Layer 2: Image Assets

#### [NEW] `public/images/services/sourcing-hero.png`
#### [NEW] `public/images/services/quality-control-hero.png`
#### [NEW] `public/images/services/verification-hero.png`
#### [NEW] `public/images/services/customs-hero.png`
#### [NEW] `public/images/contact/contact-visual.png`

---

### Layer 3: Services Feature Components

#### [NEW] `src/features/services/components/ServiceCard.tsx`
- Props: `title`, `shortDescription`, `href`, `coverImage`, `index`
- Dark glass card with background image, hover scale + gold border

#### [NEW] `src/features/services/components/ServiceProcessTimeline.tsx`
- Props: `steps: ProcessStep[]`, `locale: Locale`
- Vertical animated timeline with Framer Motion scroll reveal

#### [NEW] `src/features/services/components/ServicesHubPage.tsx`
- Props: `locale`, `services: Service[]`
- Luxury dark hero + 2×2 service card grid + CTA strip

#### [NEW] `src/features/services/components/ServiceDetailPage.tsx`
- Props: `locale`, `service: Service`
- Full article layout: hero banner → summary → process timeline → deliverables → CTA

---

### Layer 4: Success Stories Feature Components

#### [NEW] `src/features/success-stories/components/SuccessStoryCard.tsx`
- Props: `story: SuccessStory`, `locale: Locale`
- Luxury card with industry badge, metrics, quote snippet

#### [NEW] `src/features/success-stories/components/SuccessStoriesHubPage.tsx`
- Props: `locale`, `stories: SuccessStory[]`
- Dark hero + responsive story cards grid

#### [NEW] `src/features/success-stories/components/SuccessStoryDetailPage.tsx`
- Props: `locale`, `story: SuccessStory`, `relatedService: Service | null`
- 3-column breakdown + full quote + related service link

---

### Layer 5: Contact Feature Components & API

#### [NEW] `src/features/contact/schemas/contact.schema.ts`
- Zod schema: `ContactFormSchema`

#### [NEW] `src/features/contact/components/ContactForm.tsx`
- Client Component (`"use client"`)
- React Hook Form + Zod + luxury dark glass inputs
- Submits to `/api/contact` REST endpoint

#### [NEW] `src/features/contact/components/ContactPageLayout.tsx`
- Server Component split-panel shell
- Left: brand visual (`contact-visual.png`) + contact info
- Right: `ContactForm` client component

#### [NEW] `src/app/api/contact/route.ts`
- POST handler with Zod validation
- Inserts to Supabase `contact_submissions` table
- Returns `{ success: true }` or `{ error: string }`

---

### Layer 6: Page Routes (Routing Shell Updates)

#### [MODIFY] `src/app/[locale]/(marketing)/services/page.tsx`
- Replace `HubIndexPage` with new `ServicesHubPage` feature component

#### [MODIFY] `src/app/[locale]/(marketing)/services/[slug]/page.tsx`
- Replace raw article render with `ServiceDetailPage` feature component

#### [NEW] `src/app/[locale]/(marketing)/success-stories/[slug]/page.tsx`
- New detail route with `generateStaticParams` + `SuccessStoryDetailPage`

#### [MODIFY] `src/app/[locale]/(marketing)/success-stories/page.tsx`
- Replace `HubIndexPage` with `SuccessStoriesHubPage` feature component

#### [MODIFY] `src/app/[locale]/(marketing)/contact/page.tsx`
- Replace plain layout with `ContactPageLayout` + `ContactForm`

---

### Layer 7: Database Migration

#### [NEW] `supabase/migrations/20260728000000_contact_submissions.sql`
- Create `contact_submissions` table with RLS policy (insert only, no auth required)

---

## Verification Plan

### Automated
- `npm run build` — must complete with 0 errors across all 140+ pages

### Manual
- All 6 quickstart scenarios in [`quickstart.md`](quickstart.md) pass
- Responsive check on 375px viewport for all pages
- Schema.org validation for Service and BreadcrumbList JSON-LD
