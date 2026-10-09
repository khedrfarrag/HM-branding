# Implementation Plan: Redesign Service Detail Page UI & UX

**Branch**: `028-service-detail-page-redesign` | **Date**: 2026-09-30 | **Spec**: [spec.md](specs/028-service-detail-page-redesign/spec.md)

**Input**: Feature specification from `specs/028-service-detail-page-redesign/spec.md`

## Summary

Elevate and modernize the service detail pages (`/[locale]/services/[slug]`) by converting the current flat MVP layout into a luxury glassmorphic presentation. The page features ambient glowing background accents, gradient title typography, an interactive connected vertical timeline for process steps, social proof case study cards, and high-converting consultation booking & WhatsApp call-to-action blocks.

**Status**: ✅ All phases complete — implementation delivered in `page.tsx`.

## Technical Context

| Dimension | Value |
|-----------|-------|
| Language/Version | TypeScript 5.7 / React 19 / Next.js 15.1 App Router |
| Primary Dependencies | Tailwind CSS v4, Lucide React icons, Framer Motion |
| Storage | `LocalFsServiceRepository` in `src/repositories/local-fs/services.ts` |
| Testing | Type checking via `npm run type-check` |
| Target Platform | Web Browsers — Responsive: Mobile, Tablet, Desktop |
| Performance Goals | LCP < 1.5s, CLS < 0.05, sub-second interactive render |
| Constraints | Full RTL/LTR bi-directional i18n (`ar` / `en`) preserved |
| Scope | 1 page component at `src/app/[locale]/(marketing)/services/[slug]/page.tsx` |

## Constitution Check

*GATE: Checked before Phase 0 research. Re-checked after Phase 1 design.*

| Principle | Status | Notes |
|-----------|--------|-------|
| Component & Design Integrity | ✅ PASS | Standard Tailwind v4 utilities, Lucide icons, existing repository architecture |
| Accessibility & i18n | ✅ PASS | Semantic HTML5 `<article>/<header>/<section>`, RTL/LTR layout flipping |
| Server Component Rules | ✅ PASS | Page is a Server Component; all data fetched server-side |
| No `any` / strict TypeScript | ✅ PASS | `locale as Locale` cast only — justified by Next.js dynamic params type |
| No unauthorized packages | ✅ PASS | Lucide React + Tailwind only; Framer Motion in allowed stack |
| Performance Governance | ✅ PASS | Pure RSC with zero client JS overhead |
| Schema.org Governance | ✅ PASS | Service + Person + Breadcrumb JSON-LD injected via `<JsonLd>` |
| SEO Governance | ✅ PASS | `generateMetadata` with per-service `title`, `description`, `canonical` |

## Project Structure

### Documentation (this feature)

```text
specs/028-service-detail-page-redesign/
├── plan.md                    ← This file
├── spec.md                    ← Feature specification
├── research.md                ← Phase 0 output ✅
├── data-model.md              ← Phase 1 output ✅
├── quickstart.md              ← Phase 1 output ✅
├── contracts/
│   └── service-detail-ui.md  ← Phase 1 output ✅
├── checklists/
│   └── requirements.md        ← Generated checklist ✅
└── tasks.md                   ← All tasks marked [X] ✅
```

### Source Code (repository root)

```text
src/
├── app/[locale]/(marketing)/services/[slug]/
│   └── page.tsx         ← Service detail page (IMPLEMENTED ✅)
├── repositories/local-fs/
│   └── services.ts      ← Service & SuccessStory data repository
└── domains/services/
    └── entities.ts      ← Service & SuccessStory entity types
```

## Phase 0: Research — ✅ Complete

**Output**: `research.md`

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Glassmorphism strategy | `backdrop-blur-xl` + absolute blur circles | Premium feel without WebGL overhead |
| Timeline stepper | Vertical dashed border line with absolute step nodes | Responsive, lightweight, RTL-aware |
| Social proof data | Filter `successStories` by `serviceSlug === service.slug` | Uses existing LocalFs repository |
| Conversion CTA | Dual buttons: Book Consultation + WhatsApp | Maximises conversion surface area |

## Phase 1: Design & Contracts — ✅ Complete

**Outputs**: `data-model.md`, `contracts/service-detail-ui.md`, `quickstart.md`

### UI Sections Delivered

1. **Ambient Glow Decorators** — Two absolute blur circles (`bg-amber-500/10 blur-[120px]`)
2. **Glassmorphic Hero Article** — `backdrop-blur-xl bg-zinc-950/70 border border-amber-500/20`
3. **Verified Badge + Gradient H1** — Pulsing `<Sparkles>` + `bg-gradient-to-r from-white to-amber-200`
4. **Full Description Block** — `<ShieldCheck>` icon + body text in contained card
5. **Connected Timeline** — Dashed border line with glowing numbered nodes, RTL-aware, hover animations
6. **Social Proof Card** — Conditionally rendered; shows `clientName`, `testimonialQuote`, `result` badge
7. **Conversion CTA Section** — Gradient "Book Consultation" + WhatsApp Inquiry buttons

## Phase 2: Tasks — ✅ Complete

**Output**: `tasks.md` — All 12 tasks (T001–T012) marked `[X]`

- T001–T002: Setup verification
- T003: Type definitions
- T004–T006: US1 Glassmorphic Hero
- T007–T008: US2 Connected Timeline
- T009–T010: US3 Social Proof & CTAs
- T011–T012: Polish & i18n validation

## Complexity Tracking

*No constitution violations. No unresolved NEEDS CLARIFICATION items.*

## Open Items / Future Enhancements (YAGNI-deferred)

- Framer Motion scroll-reveal entrance animations on timeline steps (adds client bundle)
- Multiple linked success stories per service page (current data model has 1:1 linkage)
- Service page image/video hero media (`coverImage` field exists but no assets yet)
