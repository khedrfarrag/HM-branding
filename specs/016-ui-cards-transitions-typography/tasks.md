# Tasks: UI Cards Images, Mobile Transitions, Animated Gradient Headers & Arabic Typography

**Input**: Design documents from `/specs/016-ui-cards-transitions-typography/`

**Prerequisites**: plan.md (required), spec.md (required), research.md, data-model.md, contracts/ui-components.md

**Organization**: Tasks are grouped by user story to enable independent implementation and testing.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1, US2, US3, US4)

---

## Phase 1: Setup (Shared Infrastructure & Styling)

**Purpose**: Infrastructure setup for typography and keyframe animations

- [x] T001 Configure Google Font (`Cairo` / `IBM Plex Sans Arabic`) setup in `src/app/[locale]/layout.tsx`
- [x] T002 Add animated gradient CSS keyframes (`animate-gradient-shift`) in `src/app/globals.css`

---

## Phase 2: Foundational (Reusable UI Components)

**Purpose**: Core UI components required across user stories

- [x] T003 [P] Create reusable `SectionHeader` component with animated gold/silver gradient text in `src/components/SectionHeader.tsx`
- [x] T004 [P] Create `HeroTypewriter` component for character-by-character phrase animation in `src/features/home/components/HeroTypewriter.tsx`

---

## Phase 3: User Story 1 - Expressive Card Background Visuals (Priority: P1) 🎯 MVP

**Goal**: Display 9 high-quality thematic background images across Sector (5) and Service (4) cards with dark glassmorphic overlays for high text contrast.

**Independent Test**: Navigate to Sectors and Services sections on `/ar` and `/en`, verifying cards display distinct background imagery with crisp, readable text.

- [x] T005 [P] [US1] Add 5 expressive sector WebP background images to `public/images/sectors/`
- [x] T006 [P] [US1] Add 4 expressive service WebP background images to `public/images/services/`
- [x] T007 [US1] Update `SectorsSection.tsx` to render sector cards with background images and dual dark glass overlay in `src/features/home/components/SectorsSection.tsx`
- [x] T008 [US1] Update `ServicesSection.tsx` to render service cards with background images and dual dark glass overlay in `src/features/home/components/ServicesSection.tsx`

---

## Phase 4: User Story 2 - Smooth Mobile Hero Typing & Transition (Priority: P1)

**Goal**: Restore smooth character-by-character typewriter typing effect for the Hero dynamic headline phrase on mobile and desktop without layout shifts.

**Independent Test**: View Hero section on mobile viewport (e.g. 390px width) and observe phrase typing out letter-by-letter smoothly.

- [x] T009 [US2] Integrate `HeroTypewriter` into `HeroSection.tsx` for smooth character typing transitions in `src/features/home/components/HeroSection.tsx`

---

## Phase 5: User Story 3 - Animated Gradient Headers Across Sections (Priority: P2)

**Goal**: Unify all section titles across the homepage with an animated metallic gold/silver gradient style while keeping content static outside the Hero section.

**Independent Test**: Scroll down homepage sections and confirm all main section titles feature the animated metallic gradient shimmer.

- [x] T010 [US3] Update section titles in `SectorsSection.tsx`, `ServicesSection.tsx`, `ExperiencesSection.tsx`, and `MediaSection.tsx` to use `SectionHeader` with animated gradient in `src/features/home/components/`

---

## Phase 6: User Story 4 - Premium Arabic Typography (Priority: P2)

**Goal**: Upgrade Arabic locale typography to a luxury font (`Cairo` / `IBM Plex Sans Arabic`) and document configuration location.

**Independent Test**: Switch language to Arabic (`/ar`) and verify typography renders with the new Arabic typeface across headers and body copy.

- [x] T011 [US4] Bind Arabic font CSS variable to HTML root element in `src/app/[locale]/layout.tsx` and verify font inheritance for Arabic locale

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Validation and production readiness

- [x] T012 [P] Run Next.js production build (`npm run build`) to ensure 0 errors
- [x] T013 Validate all quickstart scenarios in `specs/016-ui-cards-transitions-typography/quickstart.md`
