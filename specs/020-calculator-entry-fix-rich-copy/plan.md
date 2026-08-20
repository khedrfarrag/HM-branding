# Implementation Plan: Calculator Entry Fix & Rich Copy Summary

**Branch**: `020-calculator-entry-fix-rich-copy` | **Date**: 2026-08-20 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `specs/020-calculator-entry-fix-rich-copy/spec.md`

---

## Summary

Fix two issues in the Free Merchant Tools hub (`/[locale]/tools`):

1. **Duplicate React key bug**: The Footer component uses `key={item.href}` on footer link list items. The "Free Tools" footer column contains 5 links all pointing to `/tools`, producing 5 identical React keys (`/ar/tools`) and triggering a React duplicate-key console warning. Fix: change `key={item.href}` → `key={item.label}` in Footer.tsx.

2. **Shallow copy summary**: The "Copy Calculation Summary" button only copies the tool name and URL. Fix: implement a `forwardRef` + `useImperativeHandle` contract (`SummaryHandle`) on all 5 calculator components so `ToolsHubLayout` can call `getSummaryText(locale)` on the active tab and write the full rich plain-text summary to the clipboard.

---

## Technical Context

- **Language/Version**: TypeScript 5.x / Next.js 15 App Router / React 19
- **Primary Dependencies**: React (`forwardRef`, `useImperativeHandle`), Lucide React icons — no new packages
- **Storage**: Client-side LocalStorage (existing `useCalculatorStorage` hook) — no changes
- **Testing**: Manual browser verification per `quickstart.md`
- **Target Platform**: Web (all modern browsers, HTTPS)
- **Project Type**: Next.js web application — feature-first architecture
- **Performance Goals**: Copy action < 300ms; zero async network calls
- **Constraints**: Plain-text output only; clipboard API with execCommand fallback

---

## Constitution Check

| Principle | Status |
|---|---|
| Feature-first architecture (`src/features/tools/`) | ✅ All changes within feature folder |
| Server Components by default | ✅ No new Server Components needed |
| Client Components for interactive tools | ✅ All calculators already `"use client"` |
| Tailwind CSS v4 tokens only | ✅ No new styles introduced |
| Zero `any` TypeScript types | ✅ `SummaryHandle` interface fully typed; existing `any` in calculator props not touched by this change |
| No new packages | ✅ Uses native React `forwardRef` / `useImperativeHandle` only |
| 100% WCAG 2.2 AA | ✅ No layout changes |

---

## Proposed Changes

### Layer 0: Bug Fix — Footer Duplicate Key

#### [MODIFY] `src/components/Footer.tsx`
- **Line 56**: Change `key={item.href}` → `key={item.label}`
- This is a one-line fix. Labels within each column are unique.

---

### Layer 1: Shared Type Contract

#### [MODIFY] `src/features/tools/types.ts`
- Append `SummaryHandle` interface:
  ```typescript
  import type { Locale } from "@/domains/shared/value-objects";
  
  export interface SummaryHandle {
    getSummaryText(locale: Locale): string;
  }
  ```

---

### Layer 2: Calculator Components — Add forwardRef + getSummaryText

Each of the 5 calculator components gains:
- `React.forwardRef<SummaryHandle, Props>` wrapper
- `useImperativeHandle(ref, () => ({ getSummaryText }))` call
- `getSummaryText(locale)` function that reads current `inputs` + `results` from local state and formats them as a plain-text block

#### [MODIFY] `src/features/tools/components/CbmCalculator.tsx`
**Summary text includes**:
- Inputs: Length, Width, Height (with unit), Quantity (cartons), Weight/Box (with unit), Unit System
- Results: Total CBM (m³ + ft³), Gross Weight (kg + lbs), Suggested Container, Container fill % for 20ft/40ft/40HQ

#### [MODIFY] `src/features/tools/components/VolumetricCalculator.tsx`
**Summary text includes**:
- Inputs: Length, Width, Height (with unit), Quantity, Actual Weight (with unit), Freight Mode
- Results: Actual Weight (kg), Volumetric Weight (kg), Chargeable Weight (kg), Billing Basis, Volume Ratio

#### [MODIFY] `src/features/tools/components/LandedCostCalculator.tsx`
**Summary text includes**:
- Inputs: Unit FOB Price, Order Quantity, China Inland Freight, Intl Freight, Customs Duty %, VAT %, Other Fees, Currency
- Results: Landed Cost Per Unit, Total Investment, Product FOB Total (+ share %), Customs+VAT total (+ share %), Freight+Logistics total (+ share %)

#### [MODIFY] `src/features/tools/components/ProfitMarginCalculator.tsx`
**Summary text includes**:
- Inputs: Target Retail Price, Unit Landed Cost, Platform Fee %, Marketing Cost/Unit, Currency
- Results: Net Profit/Unit, Net Margin %, ROI %, Break-even Price, Profitability Status (with emoji)

#### [MODIFY] `src/features/tools/components/FreightEstimator.tsx`
**Summary text includes**:
- Inputs: Destination Region (label), Shipping Mode (Sea FCL / Sea LCL / Air)
- Results: Estimated Rate Range, Rate Note, Disclaimer note about indicative rates

---

### Layer 3: Hub Layout — Wire Refs and Rich Clipboard Write

#### [MODIFY] `src/features/tools/components/ToolsHubLayout.tsx`
- Add 5 `useRef<SummaryHandle>(null)` refs (one per calculator)
- Pass each ref to its calculator component
- Replace `handleCopySummary` implementation:
  - Get the active tab's ref
  - Call `ref.current?.getSummaryText(locale)`
  - Try `navigator.clipboard.writeText(text)` → on failure, fallback to `execCommand('copy')` via hidden textarea
  - Set `copied = true` for 2500ms as before

---

## Project Structure

### Documentation (this feature)

```text
specs/020-calculator-entry-fix-rich-copy/
├── spec.md           ✅ Created
├── plan.md           ✅ This file
├── research.md       ✅ Created
├── data-model.md     ✅ Created
├── quickstart.md     ✅ Created
└── tasks.md          ⬜ Next (/speckit-tasks)
```

### Source Code (modified files)

```text
src/
├── components/
│   └── Footer.tsx                           [MODIFY] key prop fix
└── features/tools/
    ├── types.ts                             [MODIFY] +SummaryHandle
    └── components/
        ├── CbmCalculator.tsx                [MODIFY] forwardRef + getSummaryText
        ├── VolumetricCalculator.tsx         [MODIFY] forwardRef + getSummaryText
        ├── LandedCostCalculator.tsx         [MODIFY] forwardRef + getSummaryText
        ├── ProfitMarginCalculator.tsx       [MODIFY] forwardRef + getSummaryText
        ├── FreightEstimator.tsx             [MODIFY] forwardRef + getSummaryText
        └── ToolsHubLayout.tsx              [MODIFY] refs + rich copy handler
```

---

## Verification Plan

### Automated
- `npx tsc --noEmit` — must pass with 0 errors (especially forwardRef typing)

### Manual
Execute all 6 scenarios in [quickstart.md](quickstart.md):
1. No console errors on `/ar/tools` or `/en/tools`
2. CBM copy contains all numerical results
3. Landed Cost copy contains all cost breakdown items
4. Profit Margin copy contains status label + all percentages
5. Empty/default state copy is non-empty
6. Freight Estimator copy contains rate range
