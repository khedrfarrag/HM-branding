# Tasks: Free Merchant & Trade Calculators Suite (أدوات مجانية للتاجر)

**Input**: Design documents from `/specs/019-free-merchant-tools/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, quickstart.md

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3, US4)

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic types/utility structure for merchant tools

- [x] T001 Create feature directory structure in `src/features/tools/`
- [x] T002 [P] Create TypeScript types interface definitions in `src/features/tools/types.ts`
- [x] T003 [P] Add dictionary translations for merchant tools in `src/dictionaries/ar.json` and `src/dictionaries/en.json`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core mathematical formulas and LocalStorage hook that MUST be complete before UI components

- [x] T004 Create pure mathematical calculation functions in `src/features/tools/utils/calculators.ts`
- [x] T005 [P] Create LocalStorage persistence hook in `src/features/tools/hooks/useCalculatorStorage.ts`
- [x] T006 Create public feature API exports in `src/features/tools/index.ts`

**Checkpoint**: Foundation ready — math utilities and hooks ready for user story UI components.

---

## Phase 3: User Story 1 - Instant CBM & Volumetric Weight Calculation (Priority: P1) 🎯 MVP

**Goal**: Enable merchants to instantly calculate package CBM volume, carton quantity, container utilization (20ft/40ft/40HQ), and volumetric air/courier/sea chargeable weight.

**Independent Test**: Enter 60×40×40 cm, 20 cartons, 15 kg/carton in CBM tool and verify instant output of 0.768 m³ CBM, 300 kg gross weight, and volumetric chargeable weight without any login prompt.

- [x] T007 [P] [US1] Build CBM Volume & Container Fill Calculator component in `src/features/tools/components/CbmCalculator.tsx`
- [x] T008 [P] [US1] Build Volumetric Weight & Chargeable Weight Calculator component in `src/features/tools/components/VolumetricCalculator.tsx`
- [x] T009 [US1] Connect CBM and Volumetric calculators to LocalStorage hook in `src/features/tools/components/CbmCalculator.tsx` and `src/features/tools/components/VolumetricCalculator.tsx`

**Checkpoint**: User Story 1 (CBM & Volumetric Weight) is fully functional and independently testable.

---

## Phase 4: User Story 2 - Total Import & Landed Cost Breakdown (Priority: P1)

**Goal**: Provide merchants with an itemized Landed Cost Calculator (Product FOB + Inland Freight + International Freight + Customs Duty + VAT + Inspection/Clearance Fees = Landed Cost Per Unit).

**Independent Test**: Enter 1,000 units @ $10 FOB, $2,000 freight, 10% customs, 14% VAT, and verify exact landed cost per unit ($15.54) and itemized cost breakdown without requiring an account.

- [x] T010 [P] [US2] Build Landed Cost Calculator component with itemized breakdown visualization in `src/features/tools/components/LandedCostCalculator.tsx`
- [x] T011 [US2] Connect Landed Cost Calculator to calculation engine and LocalStorage hook in `src/features/tools/components/LandedCostCalculator.tsx`

**Checkpoint**: User Stories 1 AND 2 are fully functional and testable independently.

---

## Phase 5: User Story 3 - Profit Margin & Freight Cost Estimator (Priority: P2)

**Goal**: Allow merchants to calculate Net Profit, Net Margin %, ROI %, Break-Even Selling Price, and estimate sea vs air freight shipping costs.

**Independent Test**: Enter landed cost $12, retail price $35, platform fee 15%, ad cost $3, and verify Net Profit ($14.75), Net Margin % (42.1%), and ROI % (122.9%) display with healthy profit status badge.

- [x] T012 [P] [US3] Build Profit Margin & ROI Calculator component in `src/features/tools/components/ProfitMarginCalculator.tsx`
- [x] T013 [P] [US3] Build Freight Shipping Estimator component in `src/features/tools/components/FreightEstimator.tsx`
- [x] T014 [US3] Connect Profit Margin Calculator and Freight Estimator to `src/features/tools/utils/calculators.ts`

**Checkpoint**: User Stories 1, 2, and 3 are complete and functional.

---

## Phase 6: User Story 4 - Seamless Guest Access & Contextual Educational CTAs (Priority: P2)

**Goal**: Assemble all 5 calculators into a high-tech tabbed layout with 100% zero-barrier guest access, copy summary action, reset button, and contextual consultation CTAs.

**Independent Test**: Open `/ar/tools` in incognito mode, switch between all 5 calculators, click "Copy Summary", and verify no login gates or popups block usage.

- [x] T015 [US4] Build main tabbed layout component with copy/reset actions and contextual CTAs in `src/features/tools/components/ToolsHubLayout.tsx`
- [x] T016 [US4] Create dedicated tools route with SEO metadata and Schema.org JSON-LD web app markup in `src/app/[locale]/(marketing)/tools/page.tsx`
- [x] T017 [US4] Update navigation configuration in `src/config/navigation.ts` to include "أدوات التاجر" / "Tools" link

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Final verification, TypeScript compliance, and visual polish

- [x] T018 [P] [US5] Build MerchantToolsTeaser section in `src/features/home/components/MerchantToolsTeaser.tsx` and integrate into HomePage.tsx
- [x] T019 Run full TypeScript compilation check (`npx tsc --noEmit`) — **0 errors ✅**
- [x] T020 All tasks complete — feature 019 delivered

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — start immediately.
- **Foundational (Phase 2)**: Depends on Setup (Phase 1) completion — BLOCKS all user stories.
- **User Stories (Phase 3+)**: All depend on Foundational (Phase 2) completion.
- **Polish (Phase 7)**: Depends on all user stories being complete.

### Parallel Opportunities

- T002 (types.ts) and T003 (dictionaries) can run in parallel.
- T007 (CbmCalculator) and T008 (VolumetricCalculator) can run in parallel.
- T010 (LandedCostCalculator), T012 (ProfitMarginCalculator), and T013 (FreightEstimator) can run in parallel.

---

## Implementation Strategy

### MVP First (User Story 1 Only)
1. Complete Setup (Phase 1)
2. Complete Foundational (Phase 2)
3. Complete User Story 1 (Phase 3)
4. Validate CBM & Volumetric Calculators independently

### Full Incremental Delivery
1. Add User Story 2 (Landed Cost Calculator)
2. Add User Story 3 (Profit Margin & Freight Estimator)
3. Add User Story 4 (Tools Hub Layout, Route & SEO Schema)
4. Run full verification (`quickstart.md` & `npx tsc --noEmit`)
