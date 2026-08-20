# Research: Calculator Entry Fix & Rich Copy Summary — Data Model

**Feature**: `020-calculator-entry-fix-rich-copy`
**Date**: 2026-08-20

---

## New Type: SummaryHandle

Shared imperative handle interface exposed by each calculator via `useImperativeHandle`.

```typescript
// src/features/tools/types.ts — APPEND

export interface SummaryHandle {
  getSummaryText(locale: Locale): string;
}
```

**Purpose**: Provides a uniform contract for `ToolsHubLayout` to call `getSummaryText()` on whichever calculator is currently active, without needing to know each calculator internal state shape.

---

## Existing Types — No Changes Required

The 5 existing input/result type interfaces (`CbmInputs`, `CbmResult`, `VolumetricInputs`, `VolumetricResult`, `LandedCostInputs`, `LandedCostResult`, `ProfitMarginInputs`, `ProfitMarginResult`) remain unchanged.

The `FreightEstimator` component uses local component state (not typed inputs/results in types.ts); its `getSummaryText()` reads local state directly.

---

## Summary Text Schema (per calculator)

| Field | Source | Format |
|---|---|---|
| Tool name | Tab label (ar/en) | Plain string |
| Date/Time | `new Date()` | `yyyy-MM-dd HH:mm` locale-formatted |
| URL | `window.location.href` or static | Plain string |
| Input lines | Each visible input field | `Label: Value Unit` |
| Result lines | Each computed output field | `Label: Value Unit` |
| Status | Profitability label (Profit Margin only) | Emoji + label |
| Separator | Unicode dash line | `━━━━━━━━━━━━━━━━━━━━━━━━━━` |

---

## Footer Fix — No New Types

The fix is a one-line change to `key` prop strategy in `Footer.tsx`.
Current (buggy): `key={item.href}` — causes duplicate keys when multiple links share the same href.
Fixed: `key={item.label}` — unique within each column since label text differs per link.
