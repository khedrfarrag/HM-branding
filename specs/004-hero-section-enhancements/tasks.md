# Tasks: Hero Section Enhancements

**Input**: Design documents from `/specs/004-hero-section-enhancements/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md

**Tests**: N/A (Manual visual verification specified in spec.md)

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2)
- Include exact file paths in descriptions

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and translation setup

- [x] T001 Configure new localized translation phrases (Option A) inside `src/dictionaries/ar.json` and `src/dictionaries/en.json`
- [x] T002 Verify dictionary files compile and Next.js can parse them successfully

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Setup basic motion boundaries and asset paths

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T003 Verify Framer Motion and Lucide React dependency versions and configuration in `package.json`
- [x] T004 Confirm global styles and utility classes in `src/app/globals.css` can support standard dynamic transforms and radial shadows

---

## Phase 3: User Story 1 - Dynamic Catchy Headline Typography (Priority: P1) 🎯 MVP

**Goal**: Localized typing-style text animation cycling through Option A catchy phrases

**Independent Test**: Open `/ar` or `/en` and see the headline typing and transitioning correctly with proper language alignment and no CLS

### Implementation for User Story 1

- [x] T005 [P] [US1] Implement `<TypingHeadline>` Client Component at `src/components/TypingHeadline.tsx` to handle dynamic character rendering, typing/erasing loop, and speed/delay timing.
- [x] T006 [US1] Integrate `<TypingHeadline>` inside `src/app/[locale]/page.tsx` replacing the static title text on the left, ensuring a stable `min-h` container to prevent CLS.
- [x] T007 [US1] Verify typing text animations are fully responsive and respect `prefers-reduced-motion` settings.

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently.

---

## Phase 4: User Story 2 - Premium Interactive Circular Profile with Floating Social Controls (Priority: P1)

**Goal**: Circular portrait photo crop with absolute-positioned floating and interactive social media badges

**Independent Test**: Verify circular image styling and check that floating buttons drift independently, scale on hover, show tooltips, and link to correct URLs

### Implementation for User Story 2

- [x] T008 [P] [US2] Implement `<FloatingSocials>` Client Component at `src/components/FloatingSocials.tsx` displaying the circular Next.js Image component, ambient background glows, and absolute-positioned drifting social media buttons.
- [x] T009 [US2] Integrate `<FloatingSocials>` inside `src/app/[locale]/page.tsx` replacing the old visual portrait card on the right.
- [x] T010 [US2] Verify hover states, brand accents, tooltips, click behavior, and mobile responsiveness of the circular container and floating elements.

**Checkpoint**: At this point, both User Story 1 and User Story 2 should work independently and together.

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Visual fine-tuning and validation

- [x] T011 Code review, TypeScript type checking, and linting verification across modified files
- [x] T012 Run `quickstart.md` validation checklist and document results in `walkthrough.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User Story 1 (P1) and User Story 2 (P1) can proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 -> P2)
- **Polish (Final Phase)**: Depends on all user stories being complete

### Parallel Opportunities

- T005 [US1] and T008 [US2] can be developed in parallel as separate files.

---

## Parallel Example: User Story 1 & 2

```bash
# Developer A builds Typing Headline:
Task: "Implement <TypingHeadline> in src/components/TypingHeadline.tsx"

# Developer B builds Floating Socials:
Task: "Implement <FloatingSocials> in src/components/FloatingSocials.tsx"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1 (Typing Animation)
4. **STOP and VALIDATE**: Verify User Story 1 on local development server
5. Proceed to User Story 2

---

## Notes

- [P] tasks = different files, no dependencies
- Each user story is independently testable
- Commits should be made after each completed task
- Vague or generic tasks have been broken down to avoid conflicts
