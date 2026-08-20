# Implementation Plan: Free Merchant & Trade Calculators Suite (أدوات مجانية للتاجر)

**Branch**: `019-free-merchant-tools` | **Date**: 2026-08-13 | **Spec**: [spec.md](file:///g:/hossam%20mabrouk/specs/019-free-merchant-tools/spec.md)

**Input**: Feature specification from `/specs/019-free-merchant-tools/spec.md`

---

## Summary

Build a high-traffic, 100% guest-accessible "Free Merchant Tools" suite featuring 5 interactive calculators: CBM Volume Calculator, Volumetric Weight Calculator, Total Import Landed Cost Calculator, Net Profit Margin & ROI Calculator, and Freight Shipping Estimator. All tools operate client-side with 0ms latency, automatic unit conversions, LocalStorage auto-save, WhatsApp/Email summary export, and SEO Schema.org JSON-LD web app markup.

---

## Technical Context

- **Framework**: Next.js 15.x App Router, React 19
- **Architecture**: Feature-first structure in `src/features/tools/`
- **Styling**: Tailwind CSS v4 design tokens + luxury dark glassmorphism
- **Form & Input Validation**: Zod schemas + React Hook Form
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **SEO**: Dynamic JSON-LD `WebApplication` schema per tool
- **Storage**: Client-side LocalStorage via custom hook `useCalculatorStorage`

---

## Constitution Check

| Principle | Status |
|---|---|
| Feature-first architecture (`src/features/tools/`) | ✅ Compliant |
| Server Components by default | ✅ Compliant (`/tools/page.tsx`) |
| Client Components for interactive tools | ✅ Compliant (`"use client"` on calculator cards) |
| Tailwind CSS v4 tokens only | ✅ Compliant |
| Framer Motion for micro-interactions | ✅ Compliant |
| Zero `any` TypeScript types | ✅ Compliant |
| 100% WCAG 2.2 AA accessibility | ✅ Compliant |

---

## Proposed Changes

### Layer 1: Data Model & Calculation Math

#### [NEW] `src/features/tools/types.ts`
- Interfaces for `CbmInputs`, `VolumetricInputs`, `LandedCostInputs`, `ProfitMarginInputs`, `FreightEstimateInputs`, and their corresponding results.

#### [NEW] `src/features/tools/utils/calculators.ts`
- Pure mathematical functions for CBM, Volumetric Weight, Landed Cost, Profit Margin, and Freight estimates.

#### [NEW] `src/features/tools/hooks/useCalculatorStorage.ts`
- Custom hook for syncing calculator inputs with LocalStorage.

---

### Layer 2: Feature UI Components

#### [NEW] `src/features/tools/components/CbmCalculator.tsx`
- Interactive inputs for dimensions, quantity, weight, unit toggle (cm/in, kg/lbs), container fill visualization.

#### [NEW] `src/features/tools/components/VolumetricCalculator.tsx`
- Interactive inputs for dimensions & weight, freight mode toggles (Express 1:5000 vs Air 1:6000 vs Sea 1:1000).

#### [NEW] `src/features/tools/components/LandedCostCalculator.tsx`
- Itemized cost breakdown (Product, Inland, Freight, Customs, VAT, Other) with per-unit landed cost output.

#### [NEW] `src/features/tools/components/ProfitMarginCalculator.tsx`
- Retail price, landed cost, platform fee, marketing allowance, net profit %, ROI %, break-even status.

#### [NEW] `src/features/tools/components/FreightEstimator.tsx`
- Shipping origin/destination estimator with FCL/LCL range guides.

#### [NEW] `src/features/tools/components/ToolsHubLayout.tsx`
- Main tabbed container component with sleek tab switching, copy-to-clipboard action, reset button, and contextual CTAs.

#### [NEW] `src/features/tools/index.ts`
- Public feature API exports.

---

### Layer 3: Page Routing Shell & SEO

#### [NEW] `src/app/[locale]/(marketing)/tools/page.tsx`
- Server component route with dynamic metadata and Schema.org JSON-LD web app markup.

#### [MODIFY] `src/config/navigation.ts`
- Add "أدوات التاجر" / "Tools" link to navigation config.

---

## Verification Plan

### Automated
- `npx tsc --noEmit` — must pass with 0 errors.
- `npm run build` — must build statically & dynamically with 0 errors.

### Manual
- Execute all 4 scenarios in [`quickstart.md`](quickstart.md).
- Verify incognito access with zero signup prompts.
