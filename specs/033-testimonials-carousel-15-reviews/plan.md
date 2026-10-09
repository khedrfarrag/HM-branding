# Implementation Plan: 15 Testimonials Interactive Carousel & Social Proof Indexing

**Branch**: `feature/033-testimonials-carousel-15-reviews`  
**Spec**: [spec.md](file:///d:/HM-branding/HM-branding/specs/033-testimonials-carousel-15-reviews/spec.md)  
**Status**: Planned  

## Technical Context & Architecture Choices

- **UI Framework**: React / Next.js Client Component (`"use client"`) using Framer Motion for smooth slide transitions, drag gestures, and autoplay timer.
- **Data Source**: `src/dictionaries/ar.json` & `src/dictionaries/en.json` (i18n dictionary schema under `testimonials.items`).
- **SEO & Structured Data**: `src/lib/schema/` / Next.js JSON-LD script tag injecting `AggregateRating` and `Review[]` schema.
- **AI Knowledge File**: `src/app/llms-full.txt/route.ts` incorporating section `## 8. Client Testimonials & Social Proof (آراء وشهادات العملاء)`.

## Constitution Check

- ✅ **No Breaking Changes**: Extends existing `testimonials` schema seamlessly.
- ✅ **Aesthetics & Performance**: Dark mode glassmorphism UI matching graphite-900/50 palette with gold/cyan subtle accents. Zero layout shift.
- ✅ **TypeScript Strictness**: Validated against `npx tsc --noEmit`.

## Implementation Phases

### Phase 0: Research & Content Engineering
- Finalize 15 verified, professional client testimonials covering all 6 core business verticals.
- Verify touch/drag accessibility and autoplay lifecycle handling in React.

### Phase 1: Design & Component Contracts
- Create `data-model.md` defining `TestimonialItem` contract.
- Create `TestimonialsCarousel.tsx` client component.
- Integrate into `HomePage.tsx`.
- Update `llms-full.txt/route.ts` and Schema.org generators.

### Phase 2: Implementation & Verification
- Verify build and TypeScript compilation with `npx tsc --noEmit`.
- Verify responsive viewports (Desktop 3-cards, Tablet 2-cards, Mobile 1-card).
