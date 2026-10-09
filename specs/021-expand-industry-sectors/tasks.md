# Tasks: Expand Industry Sectors to 30

**Input**: Design documents from `specs/021-expand-industry-sectors/`

**Prerequisites**: plan.md (required), spec.md (required), research.md, data-model.md, quickstart.md

**Tests**: Not requested — no test tasks generated.

**Organization**: Tasks grouped by user story for independent implementation and testing.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: No project initialization needed — this feature modifies an existing codebase. This phase is empty.

**Checkpoint**: N/A — proceed directly to Phase 2.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Generate all 25 new sector images before dictionary and component work begins. Images are required by both US1 and US2.

**⚠️ CRITICAL**: No user story work can begin until all sector images exist in `public/images/sectors/`.

- [x] T001 [P] Generate sector image for Industrial Machinery (save to public/images/sectors/machinery.png)
- [x] T002 [P] Generate sector image for Electrical Equipment (save to public/images/sectors/electrical.png)
- [x] T003 [P] Generate sector image for Hardware & Tools (save to public/images/sectors/hardware-tools.png)
- [x] T004 [P] Generate sector image for Iron & Steel (save to public/images/sectors/iron-steel.png)
- [x] T005 [P] Generate sector image for Plastics & Rubber (save to public/images/sectors/plastics-rubber.png)
- [x] T006 [P] Generate sector image for Solar & Renewables (save to public/images/sectors/solar-renewables.png)
- [x] T007 [P] Generate sector image for EV Batteries (save to public/images/sectors/ev-batteries.png)
- [x] T008 [P] Generate sector image for Chemicals (save to public/images/sectors/chemicals.png)
- [x] T009 [P] Generate sector image for Lighting & LED (save to public/images/sectors/lighting-led.png)
- [x] T010 [P] Generate sector image for Processed Food (save to public/images/sectors/processed-food.png)
- [x] T011 [P] Generate sector image for Cold-Chain (save to public/images/sectors/cold-chain.png)
- [x] T012 [P] Generate sector image for Spices & Tea (save to public/images/sectors/spices-tea.png)
- [x] T013 [P] Generate sector image for Apparel (save to public/images/sectors/apparel.png)
- [x] T014 [P] Generate sector image for Footwear & Leather (save to public/images/sectors/footwear-leather.png)
- [x] T015 [P] Generate sector image for Home Textiles (save to public/images/sectors/home-textiles.png)
- [x] T016 [P] Generate sector image for Furniture (save to public/images/sectors/furniture.png)
- [x] T017 [P] Generate sector image for Household Appliances (save to public/images/sectors/household-appliances.png)
- [x] T018 [P] Generate sector image for Gifts & Décor (save to public/images/sectors/gifts-decor.png)
- [x] T019 [P] Generate sector image for Kitchenware (save to public/images/sectors/kitchenware.png)
- [x] T020 [P] Generate sector image for Beauty & Cosmetics (save to public/images/sectors/beauty-cosmetics.png)
- [x] T021 [P] Generate sector image for Medical Devices (save to public/images/sectors/medical-devices.png)
- [x] T022 [P] Generate sector image for Packaging & Printing (save to public/images/sectors/packaging-printing.png)
- [x] T023 [P] Generate sector image for Sports & Recreation (save to public/images/sectors/sports-recreation.png)
- [x] T024 [P] Generate sector image for Office Supplies (save to public/images/sectors/office-supplies.png)
- [x] T025 [P] Generate sector image for Pet Products (save to public/images/sectors/pet-products.png)

**Image style prompt**: Dark-toned, cinematic, professional industry photography. Consistent with existing sector images (electronics.png, agriculture.png, textiles.png, construction.png, automotive.png). Suitable for dark overlay with gold accent text. No text or watermarks on images.

**Checkpoint**: All 30 sector images (5 existing + 25 new) exist in `public/images/sectors/`. No broken image paths.

---

## Phase 3: User Story 1 — Browse All 30 Trade Sectors (Priority: P1) 🎯 MVP

**Goal**: Expand the Industries section from 5 to 30 sector cards with full bilingual content (EN + AR) and unique background images per sector.

**Independent Test**: Load homepage in EN and AR → Industries section shows exactly 30 cards with correct text and unique images.

### Implementation for User Story 1

- [x] T026 [P] [US1] Add 25 new sector entries (with slug, category fields) to industries.sectors array in src/dictionaries/en.json
- [x] T027 [P] [US1] Add 25 new sector entries (with slug, category fields) to industries.sectors array in src/dictionaries/ar.json
- [x] T028 [US1] Add slug and category fields to the existing 5 sectors in both src/dictionaries/en.json and src/dictionaries/ar.json
- [x] T029 [US1] Add industries.categories array (7 category groups) to src/dictionaries/en.json
- [x] T030 [US1] Add industries.categories array (7 category groups, Arabic labels) to src/dictionaries/ar.json
- [x] T031 [US1] Replace hardcoded sectorImages array with SECTOR_IMAGE_MAP Record keyed by slug in src/features/home/components/HomePage.tsx (lines 325–331)
- [x] T032 [US1] Update the sector card rendering to read sector.slug for image lookup instead of idx % sectorImages.length in src/features/home/components/HomePage.tsx (line 332)
- [x] T033 [US1] Add loading="lazy" attribute to sector background img tags in src/features/home/components/HomePage.tsx (line 339)
- [x] T034 [US1] Validate JSON — run node -e to parse both en.json and ar.json and confirm no syntax errors
- [x] T035 [US1] Validate TypeScript — run npx tsc --noEmit and confirm zero errors

**Checkpoint**: Homepage shows 30 sector cards in EN and AR with unique images. All cards render correctly. TypeScript compiles clean.

---

## Phase 4: User Story 2 — Each Sector Has a Unique Visual Identity (Priority: P2)

**Goal**: Verify and ensure each of the 30 sectors has a visually distinct, representative background image.

**Independent Test**: Scroll through all 30 cards and confirm each has a unique, contextually appropriate image.

### Implementation for User Story 2

- [x] T036 [US2] Verify all 30 image files exist in public/images/sectors/ with no 404s by loading the homepage
- [x] T037 [US2] Review image quality — ensure each image visually represents its sector and maintains consistent dark-toned cinematic style
- [x] T038 [US2] Optimize any images exceeding 500KB using compression (target < 400KB per image) in public/images/sectors/

**Checkpoint**: All 30 images load without errors, are visually distinct, and are under 500KB each.

---

## Phase 5: User Story 3 — Responsive Grid Layout (Priority: P2)

**Goal**: Ensure the 30-card grid scales cleanly across mobile (1 col), tablet (2 col), and desktop (3 col).

**Independent Test**: Resize browser viewport across breakpoints and verify clean grid transitions.

### Implementation for User Story 3

- [x] T039 [US3] Verify existing grid classes (grid-cols-1 sm:grid-cols-2 lg:grid-cols-3) handle 30 cards without layout issues in src/features/home/components/HomePage.tsx (line 323)
- [x] T040 [US3] Test mobile viewport (< 640px) — confirm single column layout with consistent spacing
- [x] T041 [US3] Test tablet viewport (640px–1023px) — confirm 2-column layout
- [x] T042 [US3] Test desktop viewport (≥ 1024px) — confirm 3-column layout with no overflow

**Checkpoint**: Grid is responsive at all breakpoints. No overflow, no alignment bugs.

---

## Phase 6: User Story 4 — Category Filter Tabs (Priority: P3)

**Goal**: Add horizontal pill-style category filter tabs above the sector grid for quick sector browsing.

**Independent Test**: Click filter tabs and verify only matching sectors are shown; "All" resets to full grid.

### Implementation for User Story 4

- [x] T043 [US4] Add useState hook for activeCategory (default "all") in src/features/home/components/HomePage.tsx
- [x] T044 [US4] Render filter tabs from dict.industries.categories above the sector grid in src/features/home/components/HomePage.tsx (after line 321, before line 323)
- [x] T045 [US4] Style filter tabs using btn btn-glass classes with active state (gold border/bg) in src/features/home/components/HomePage.tsx
- [x] T046 [US4] Filter dict.industries.sectors by sector.category matching activeCategory in src/features/home/components/HomePage.tsx (line 324)
- [x] T047 [US4] Wrap filtered sector grid with Framer Motion AnimatePresence and layout animation for smooth enter/exit in src/features/home/components/HomePage.tsx
- [x] T048 [US4] Test filter behavior — click each tab and verify correct sector count: Industrial (8), Energy (4), Food (4), Textiles (4), Consumer (5), Professional (5), All (30)

**Checkpoint**: Category filters work correctly in EN and AR. Smooth animation on filter change. "All" shows full grid.

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Final validation across all user stories

- [x] T049 Run full quickstart.md validation — all 7 scenarios in specs/021-expand-industry-sectors/quickstart.md
- [x] T050 Run npx tsc --noEmit — confirm zero TypeScript errors
- [x] T051 Visual review of Industries section in both /en and /ar — check text legibility, gold accents, hover effects
- [x] T052 Performance check — scroll through 30 cards and confirm no jank or frame drops in browser DevTools Performance tab

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: Empty — skip
- **Foundational (Phase 2)**: No dependencies — generate images immediately. BLOCKS all user stories.
- **US1 (Phase 3)**: Depends on Phase 2 (images must exist). Core MVP.
- **US2 (Phase 4)**: Depends on Phase 3 (sectors must render to verify images)
- **US3 (Phase 5)**: Depends on Phase 3 (sectors must render to test responsive layout)
- **US4 (Phase 6)**: Depends on Phase 3 (sectors must have category fields)
- **Polish (Phase 7)**: Depends on all user stories being complete

### User Story Dependencies

- **US1 (P1)**: Can start after Phase 2 — No dependencies on other stories
- **US2 (P2)**: Can start after US1 — Verifies image quality
- **US3 (P2)**: Can start after US1 — Tests responsive layout. Can run in PARALLEL with US2.
- **US4 (P3)**: Can start after US1 — Adds filter UI. Can run in PARALLEL with US2/US3.

### Within Each User Story

- Dictionary data (en.json, ar.json) before component updates
- Component logic before validation
- Validation before checkpoint

### Parallel Opportunities

- All 25 image generation tasks (T001–T025) can run in parallel
- T026 + T027 (EN dict + AR dict new sectors) can run in parallel
- T029 + T030 (EN categories + AR categories) can run in parallel
- US2, US3, US4 can all run in parallel after US1 completes

---

## Parallel Example: Phase 2 (Image Generation)

```bash
# Launch all 25 image generation tasks in parallel:
Task: "Generate sector image for Industrial Machinery → machinery.png"
Task: "Generate sector image for Electrical Equipment → electrical.png"
Task: "Generate sector image for Hardware & Tools → hardware-tools.png"
# ... all 25 tasks simultaneously
```

## Parallel Example: User Story 1

```bash
# Launch dictionary edits in parallel (different files):
Task: "Add 25 new sectors to en.json"
Task: "Add 25 new sectors to ar.json"

# Then sequential: component updates depend on dictionary schema
Task: "Replace hardcoded sectorImages with SECTOR_IMAGE_MAP"
Task: "Update card rendering for slug-based image lookup"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 2: Generate all 25 sector images
2. Complete Phase 3: User Story 1 (dictionary data + component update)
3. **STOP and VALIDATE**: Load homepage — 30 cards visible in EN/AR with unique images
4. Deploy/demo if ready — this alone delivers the core value

### Incremental Delivery

1. Phase 2 → Images ready
2. US1 → 30 sectors render → Deploy (MVP! ✅)
3. US2 → Image quality verified → Polish
4. US3 → Responsive confirmed → Polish
5. US4 → Filter tabs added → Deploy (Full feature ✅)

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Image generation is the longest phase — all 25 can be parallelized
- Dictionary edits (en.json + ar.json) are the bulk of content work
- Component changes in HomePage.tsx are relatively small (image map + filter)
- Commit after each phase checkpoint
