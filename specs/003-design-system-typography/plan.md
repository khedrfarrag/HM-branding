# Implementation Plan: Design System & Typography Excellence

**Branch**: `003-design-system-typography` | **Date**: 2026-07-04 | **Spec**: [spec.md](file:///g:/hossam%20mabrouk/specs/003-design-system-typography/spec.md)

**Input**: Feature specification from `/specs/003-design-system-typography/spec.md`

---

## Summary

Replace Cairo with **Beiruti** as the primary Arabic typeface — a premium variable font by Boutros Fonts available on Google Fonts with a geometric, fluid style and a built-in Latin companion. Implement a complete 8-token spacing scale and a 7-level fluid type scale as CSS custom properties in `globals.css`. Apply these tokens consistently across the `[locale]/layout.tsx` font loader, all global CSS rules, and every component in the landing page.

---

## Technical Context

**Language/Version**: TypeScript 5.x, React 19, Next.js 15 App Router

**Primary Dependencies**: `next/font/google` (Beiruti, Bricolage_Grotesque, Inter, JetBrains_Mono)

**Storage**: No storage — pure CSS custom properties in `globals.css`

**Testing**: TypeScript check (`npx tsc --noEmit`), build (`npm run build`), visual inspection

**Target Platform**: Vercel Edge + Node.js serverless

**Performance Goals**: Font bundle ≤ 150KB total, zero layout shifts from font loading

**Constraints**:
- All fonts loaded via `next/font/google` — no `@import` in CSS (Constitution Rule 32)
- No inline styles or ad-hoc utility values — all spacing through token system (Constitution Rule 26)
- Arabic letter-spacing must be 0 or slightly positive — never negative

---

## Constitution Check

| Principle | Requirement | Status |
|:---|:---|:---|
| Rule 2: Engineering | Zero TypeScript/ESLint errors | ✅ Enforced via build |
| Rule 26: Design System | All values from registered tokens | ✅ All defined in @theme |
| Rule 27: Animation | No layout-recalculating transitions | ✅ Only font/color changes |
| Rule 29: Performance | Code splitting, dynamic imports | ✅ next/font handles subset loading |
| Rule 30: Core Web Vitals | CLS < 0.1 (no font layout shift) | ✅ next/font provides size-adjust |
| Rule 32: Font Rules | Local loading via next/font only | ✅ No CDN @import |

---

## Project Structure

### Documentation (this feature)

```text
specs/003-design-system-typography/
├── plan.md          # This file
├── research.md      # Font selection rationale
├── data-model.md    # Token schema
└── quickstart.md    # Validation guide
```

### Source Code (affected files)

```text
src/
├── app/
│   ├── globals.css              # [MODIFY] Full token system: fonts, type scale, spacing, line heights
│   └── [locale]/
│       └── layout.tsx           # [MODIFY] Replace Cairo with Beiruti font loader
└── components/
    └── Header.tsx               # [MODIFY] Apply spacing tokens to header padding
```

---

## Proposed Changes

### Phase 1: Font Loader — `[locale]/layout.tsx`

#### [MODIFY] [layout.tsx](file:///g:/hossam%20mabrouk/src/app/%5Blocale%5D/layout.tsx)

Replace `Cairo` import with `Beiruti`. Load weights `300, 400, 500, 600, 700` with Arabic and Latin subsets.

```ts
// BEFORE
import { Cairo, Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
const cairo = Cairo({ subsets: ["arabic", "latin"], variable: "--font-cairo", ... });

// AFTER
import { Beiruti, Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
const beiruti = Beiruti({ subsets: ["arabic", "latin"], variable: "--font-arabic", ... });
```

---

### Phase 2: Design Token System — `globals.css`

#### [MODIFY] [globals.css](file:///g:/hossam%20mabrouk/src/app/globals.css)

Comprehensive replacement of the `@theme` block to add:

1. **Font family tokens** — `--font-arabic` (Beiruti), `--font-display`, `--font-body`, `--font-mono`
2. **Type scale tokens** — `--fs-display` through `--fs-micro` using `clamp()`
3. **Font weight tokens** — `--fw-light` through `--fw-bold`
4. **Line height tokens** — `--lh-tight` through `--lh-loose`
5. **Spacing tokens** — `--sp-1` (4px) through `--sp-12` (200px)

Update base `body`, `h1–h4` rules to use tokens. Add locale-aware typography utilities:
- `[dir="rtl"] body` → `font-family: var(--font-arabic)`, `line-height: var(--lh-loose)`
- `[dir="ltr"] body` → `font-family: var(--font-body)`, `line-height: var(--lh-relaxed)`
- `[dir="rtl"] h1, [dir="rtl"] h2 ...` → `font-family: var(--font-arabic); letter-spacing: 0`
- `[dir="ltr"] h1, [dir="ltr"] h2 ...` → `font-family: var(--font-display); letter-spacing: var(--ls-tight)`

---

### Phase 3: Component Token Application — `Header.tsx`

#### [MODIFY] [Header.tsx](file:///g:/hossam%20mabrouk/src/components/Header.tsx)

Align header padding with spacing tokens instead of ad-hoc values.

---

## Verification Plan

### Automated Tests
- `npx tsc --noEmit` — must pass with zero errors
- `npm run build` — must show `✓ Compiled successfully`

### Manual Verification
Follow all steps in [quickstart.md](file:///g:/hossam%20mabrouk/specs/003-design-system-typography/quickstart.md):
- Confirm `Beiruti` renders on all Arabic headings and body text in DevTools
- Confirm visual hierarchy: Display ≥ 3× body size on 1440px viewport
- Confirm generous line-height ≥ 1.7 on Arabic body text
- Confirm zero broken glyphs or overlapping characters
- Confirm English locale still uses Bricolage Grotesque + Inter correctly
