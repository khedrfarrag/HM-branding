# Tasks: Design System & Typography Excellence

**Input**: Design documents from `/specs/003-design-system-typography/`

**Prerequisites**: plan.md ✅ | spec.md ✅ | research.md ✅ | data-model.md ✅

**Tests**: `npx tsc --noEmit` + `npm run build`

---

## Phase 1: Font Loader (Blocking)

**Purpose**: Replace Cairo with Beiruti in the locale layout. This must complete before any CSS work begins.

- [x] T001 Replace `Cairo` font import with `Beiruti` (variable font, subsets: arabic + latin, weights: 300 400 500 600 700, variable: `--font-arabic`). Remove `--font-cairo` variable. File: `src/app/[locale]/layout.tsx`

**Checkpoint**: Beiruti font loads in browser DevTools when visiting `/ar`.

---

## Phase 2: Design Token System (Blocking)

**Purpose**: Establish the complete CSS token layer — fonts, type scale, spacing, weights, line-heights.

- [x] T002 Add full spacing token scale (`--sp-1` → `--sp-12`, from 4px to 200px) to `@theme` block. File: `src/app/globals.css`
- [x] T003 [P] Add fluid type scale tokens (`--fs-display` → `--fs-micro`) using `clamp()` to `@theme` block. File: `src/app/globals.css`
- [x] T004 [P] Add font weight tokens (`--fw-light` → `--fw-bold`) and line height tokens (`--lh-tight` → `--lh-loose`) to `@theme` block. File: `src/app/globals.css`
- [x] T005 Replace `--font-cairo` token with `--font-arabic` (Beiruti) in `@theme` block. File: `src/app/globals.css`

**Checkpoint**: All tokens visible in DevTools CSS variables panel.

---

## Phase 3: Locale-Aware Base Styles (Blocking)

**Purpose**: Wire direction-specific typography rules to the token system using `[dir]` selectors.

- [x] T006 Replace generic `body` rule with direction-aware rules: `[dir="rtl"] body` uses `--font-arabic`, `--lh-loose` (1.75). `[dir="ltr"] body` uses `--font-body`, `--lh-relaxed` (1.6). File: `src/app/globals.css`
- [x] T007 Replace generic `h1, h2, h3, h4` rule with direction-aware rules: RTL uses `--font-arabic` and `letter-spacing: 0`. LTR uses `--font-display` and negative letter-spacing from tokens. File: `src/app/globals.css`
- [x] T008 [P] Add `font-size` rules for each heading level using `--fs-*` tokens. H1 → `--fs-h1`, H2 → `--fs-h2`, H3 → `--fs-h3`. File: `src/app/globals.css`

**Checkpoint**: Inspect any `<h2>` in `/ar` → computed `font-family` shows `Beiruti`, `letter-spacing` is `0`.

---

## Phase 4: User Story 1 MVP — Arabic Hierarchy Validation ✅

**Goal**: Hero H1 in Arabic renders Beiruti at display size with correct line-height and zero letter-spacing.

**Independent Test**: Open `/ar`. Inspect hero `<h1>` → font-family = `Beiruti`, font-size ≥ 64px on 1440px screen, line-height ≈ 0.95.

### Implementation

- [x] T009 Apply `--fs-display` + `--fw-bold` + `--lh-tight` to the hero `<h1>` element directly via Tailwind utility classes. File: `src/app/[locale]/page.tsx`
- [x] T010 [P] Apply `--fs-h2` + `--fw-semibold` + `--lh-snug` to all section `<h2>` elements. File: `src/app/[locale]/page.tsx`
- [x] T011 [P] Apply `--fw-light` + `--lh-loose` to all Arabic `<p>` body paragraphs. File: `src/app/[locale]/page.tsx`

**Checkpoint**: User Story 1 AC1 + AC2 pass — 3 distinct hierarchy levels visible without reading content.

---

## Phase 5: User Story 2 — English Consistency

**Goal**: English version uses Bricolage + Inter with matching hierarchy ratios and negative letter-spacing on headings.

- [x] T012 Add letter-spacing tokens for LTR headings: `--ls-tight` (-0.03em for H1), `--ls-snug` (-0.025em for H2). File: `src/app/globals.css`
- [x] T013 [P] Confirm Bricolage Grotesque headings and Inter body render correctly on `/en` — no visible regression from Phase 3 changes. File: `src/app/[locale]/page.tsx` (visual inspection only)

**Checkpoint**: Toggle `/ar` → `/en` — both feel equally premium with matching hierarchy depth.

---

## Phase 6: User Story 3 — Spacing Rhythm

**Goal**: All section padding and inter-element gaps use spacing tokens, never ad-hoc values.

- [x] T014 Audit and replace ad-hoc `py-24`, `mt-6`, `gap-6` utilities in page sections with Tailwind classes mapped to spacing tokens. Target: all 9 page sections. File: `src/app/[locale]/page.tsx`
- [x] T015 [P] Apply spacing token alignment to Header padding. File: `src/components/Header.tsx`

**Checkpoint**: Section-to-section gap ≥ 96px on desktop (≈ `--sp-9`). Heading-to-description gap ≈ 24px (≈ `--sp-5`).

---

## Phase 7: Polish & Build Verification

- [x] T016 Run TypeScript check: `npx tsc --noEmit` — must complete with zero errors.
- [x] T017 Run production build: `npm run build` — must show `✓ Compiled successfully`.
- [x] T018 [P] Visual review: load `/ar` and `/en`, confirm quickstart.md checklist items all pass.

---

## Dependencies

```
Phase 1 (T001) → Phase 2 (T002–T005) → Phase 3 (T006–T008) → Phase 4 (T009–T011)
                                                               → Phase 5 (T012–T013)
                                                               → Phase 6 (T014–T015)
                                                                              → Phase 7 (T016–T018)
```

### Parallel Opportunities
- T003, T004 can run in parallel with T002
- T010, T011 can run in parallel with T009
- T013 can run in parallel with T012
- T015 can run in parallel with T014
- T018 can run in parallel with T016 + T017

---

## MVP Scope (Minimum Viable Delivery)

1. Complete Phase 1 (T001) → Beiruti loads
2. Complete Phase 2 (T002–T005) → tokens defined
3. Complete Phase 3 (T006–T008) → direction-aware rules active
4. Complete Phase 4 (T009–T011) → Arabic hierarchy visually confirmed
5. **STOP and BUILD**: `npm run build` must pass
6. Continue Phase 5–7 for full delivery
