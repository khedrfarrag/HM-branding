# Tasks: Expanded Domain-Driven Information Architecture Scaffold

**Input**: Design documents from `/specs/006-information-architecture/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/

**Organization**: Tasks are grouped by user story/phase to enable independent implementation and testing.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Includes exact file paths in descriptions.

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project directory initialization and shared type definitions.

- [x] T001 Create dynamic subdomain, repository, integrations, and config folders under `src/`
- [x] T002 [P] Install dependencies: fuse.js, gray-matter, and configure MDX support in `package.json`
- [x] T003 [P] Create shared value objects and base interfaces in `src/domains/shared/value-objects.ts`
- [x] T004 [P] Declare domain TypeScript interfaces in `src/types/content.ts`
- [x] T005 [P] Create navigation data structure in `src/config/navigation.ts`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core repository interfaces, middleware, and schema builders.

- [x] T006 Create repository interfaces for all domains in `src/domains/shared/repository.ts`
- [x] T007 [P] Implement locale redirection and path parsing in `src/middleware.ts`
- [x] T008 [P] Implement base Person and Organization schema builders in `src/lib/schema/person.ts` and `src/lib/schema/organization.ts`
- [x] T009 [P] Implement breadcrumb schema factory in `src/lib/schema/breadcrumb.ts`
- [x] T010 [P] Implement generic structured data script injector in `src/components/JsonLd.tsx`

**Checkpoint**: Foundation ready - domain logic interfaces and layout shell complete. ✅


---

## Phase 3: User Story 1 - Sourcing & Experiences (Priority: P1) 🎯 MVP

**Goal**: Enable dynamic loading and rendering of import sourcing articles (topics, categories, series, tags) and experiences (trips, tours, Canton Fair, corporate).

**Independent Test**: Simulate routing to a knowledge category, an article, and an experience detail page, validating correct metadata and layout composition.

### Implementation for User Story 1

- [x] T011 [P] [US1] Define Article and Experience entities in `src/domains/knowledge/entities.ts` and `src/domains/experiences/entities.ts`
- [x] T012 [P] [US1] Define repository contracts `IKnowledgeRepository` and `IExperienceRepository` in `src/domains/knowledge/repository.ts` and `src/domains/experiences/repository.ts`
- [x] T013 [US1] Implement Local File System Knowledge and Experience repositories in `src/repositories/local-fs/knowledge.ts` and `src/repositories/local-fs/experiences.ts`
- [x] T014 [P] [US1] Create dynamic experiences catch-all path in `src/app/[locale]/(experiences)/experiences/[type]/[slug]/page.tsx`
- [x] T015 [P] [US1] Create dynamic knowledge article path in `src/app/[locale]/(knowledge)/knowledge/[category]/[slug]/page.tsx`
- [x] T016 [US1] Implement dynamic breadcrumb mapping in `src/components/Breadcrumb.tsx`
- [x] T017 [US1] Build sitemap index resolver in `src/app/sitemap.ts`

**Checkpoint**: User Story 1 complete. Sourcing articles and experiential pages resolve dynamically with breadcrumbs and sitemaps. ✅

---

## Phase 4: User Story 2 - Author Expansion & Media (Priority: P2)

**Goal**: Enable dynamic profiles of Hussam Mabrouk (bio, certificates, timeline, gallery) and rich media appearances (videos, podcasts, gallery, press).

**Independent Test**: Resolve `/[locale]/about/[...slug]` and media detail pages, verifying authority schemas.

### Implementation for User Story 2

- [x] T018 [P] [US2] Define Author and Media entities in `src/domains/author/entities.ts` and `src/domains/media/entities.ts`
- [x] T019 [P] [US2] Define repository contracts `IAuthorRepository` and `IMediaRepository` in `src/domains/author/repository.ts` and `src/domains/media/repository.ts`
- [x] T020 [US2] Implement Local File System Author and Media repositories in `src/repositories/local-fs/author.ts` and `src/repositories/local-fs/media.ts`
- [x] T021 [P] [US2] Create dynamic about catch-all routing path in `src/app/[locale]/(marketing)/about/[...slug]/page.tsx`
- [x] T022 [P] [US2] Create dynamic media routing path in `src/app/[locale]/(media)/media/[type]/[slug]/page.tsx`
- [x] T023 [US2] Implement dynamic service page routing path in `src/app/[locale]/(marketing)/services/[slug]/page.tsx`

**Checkpoint**: User Story 2 complete. Bio, timeline, achievements, certificates, media player links, and service modules load dynamically. ✅


---

## Phase 5: User Story 3 - Trade Intel, China Subdomains & Booking (Priority: P3)

**Goal**: Support trade intelligence feeds, China subdomains (cities, markets, factories, hotels, restaurants, translators, shipping, ports), and booking registration engines.

**Independent Test**: Load trade updates, regional listings, and simulated booking pages, verifying SEO/GEO metadata and gateway integration hooks.

### Implementation for User Story 3

- [x] T024 [P] [US3] Define China, Trade Intel, and Booking entities in `src/domains/china/entities.ts`, `src/domains/trade-intel/entities.ts` and `src/domains/booking/entities.ts`
- [x] T025 [P] [US3] Define repository contracts `IChinaRepository`, `ITradeIntelRepository` and `IBookingRepository` in `src/domains/china/repository.ts`, `src/domains/trade-intel/repository.ts` and `src/domains/booking/repository.ts`
- [x] T026 [US3] Implement Local File System China, Trade Intel, and Booking repositories in `src/repositories/local-fs/china.ts`, `src/repositories/local-fs/trade-intel.ts` and `src/repositories/local-fs/booking.ts`
- [x] T027 [P] [US3] Create dynamic trade intelligence route in `src/app/[locale]/(trade-intel)/trade-intelligence/[type]/[slug]/page.tsx`
- [x] T028 [P] [US3] Create dynamic China subdomain routes in `src/app/[locale]/(china)/china/[subdomain]/[slug]/page.tsx`
- [x] T029 [P] [US3] Create dynamic booking checkout routes in `src/app/[locale]/(booking)/booking/[type]/[slug]/page.tsx`

**Checkpoint**: All user stories functional. Platform route coverage complete. ✅

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Global search implementation, metadata audits, build checks, and validations.

- [x] T030 Define search models and `ISearchProvider` in `src/integrations/search/provider.ts`
- [x] T031 Implement build-time search index compiler in `src/lib/search-index.ts`
- [x] T032 Implement in-memory `FuseSearchProvider` in `src/integrations/search/fuse-provider.ts`
- [x] T033 [P] Implement search endpoint in `src/app/api/search/route.ts`
- [x] T034 [P] Declare provider interfaces for CRM, Payments, Analytics, Calendar, Storage, and Email in `src/integrations/`
- [x] T035 Refactor primary header in `src/components/Header.tsx` to read dynamic navigation
- [x] T036 Create global Footer component in `src/components/Footer.tsx`
- [x] T037 Create dynamic layout wrappers in Route Groups
- [x] T038 Run quickstart.md validation scenario checks
- [x] T039 Perform final build check and clean up lints ✅ Build passes — 85 static pages, 0 errors (2026-07-12)

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies.
- **Foundational (Phase 2)**: Depends on Setup. Blocks all user stories.
- **User Stories (Phases 3, 4, 5)**: Depend on Foundational completion. Can run sequentially or in parallel.
- **Polish (Phase 6)**: Depends on all user story completions.

### Parallel Opportunities

- Setup tasks T002, T003, T004, T005 can run in parallel.
- Foundational tasks T007, T008, T009, T010 can run in parallel.
- User story domain mapping and repository declarations (T011, T012, T018, T019, T024, T025) can run in parallel.
- All dynamic page segment file creation tasks can run in parallel.
- Search and Header refactoring tasks can run in parallel.

---

## Notes

- [P] tasks = different files, zero dependencies.
- [Story] label links tasks to functional increments.
- Commits should be made after each task is verified.
- The `quickstart.md` guide serves as the test specification.
