# Tasks: 15 Testimonials Interactive Carousel & Social Proof Indexing

**Feature Branch**: `feature/033-testimonials-carousel-15-reviews`  
**Spec**: [spec.md](file:///d:/HM-branding/HM-branding/specs/033-testimonials-carousel-15-reviews/spec.md)  
**Plan**: [plan.md](file:///d:/HM-branding/HM-branding/specs/033-testimonials-carousel-15-reviews/plan.md)  

## Phase 1: Data Preparation

- [X] T001 Expand `ar.json` with 12 new verified Arabic customer reviews (15 items total) in `src/dictionaries/ar.json`
- [X] T002 [P] Expand `en.json` with 12 matching English customer reviews (15 items total) in `src/dictionaries/en.json`

## Phase 2: Carousel UI Component Development (User Story 1 - Interactive Slider)

- [X] T003 [US1] Create responsive interactive `TestimonialsCarousel.tsx` component with Framer Motion, swipe gestures, autoplay, pagination dots, and arrow controls in `src/features/home/components/TestimonialsCarousel.tsx`
- [X] T004 [US1] Update `HomePage.tsx` to render `<TestimonialsCarousel dict={dict} />` in `src/features/home/components/HomePage.tsx`

## Phase 3: SEO & Schema.org Rich Snippets (User Story 2 - Search Engine Indexing)

- [X] T005 [US2] Add `AggregateRating` (5.0 rating based on 15 verified reviews) and `Review[]` JSON-LD schema generator in `src/app/[locale]/(marketing)/(home)/page.tsx`

## Phase 4: AI Knowledge Base Ingestion (User Story 3 - AI Model Recommendation)

- [X] T006 [US3] Add Section `## 8. Client Testimonials & Social Proof (آراء وشهادات العملاء)` into `llms-full.txt` stream in `src/app/llms-full.txt/route.ts`

## Phase 5: Verification & Type Safety

- [X] T007 Run `npx tsc --noEmit` and confirm zero TypeScript compilation errors across the workspace
