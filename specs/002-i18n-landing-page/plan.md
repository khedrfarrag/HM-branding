# Implementation Plan: Multilingual Landing Page (i18n)

**Branch**: `002-i18n-landing-page` | **Date**: 2026-07-04 | **Spec**: [spec.md](file:///g:/hossam%20mabrouk/specs/002-i18n-landing-page/spec.md)

**Input**: Feature specification from `/specs/002-i18n-landing-page/spec.md`

---

## Summary

Configure Next.js 15 internationalization by setting up dynamic URL locale segments (`/[locale]`), Edge middleware for automated redirection, and static translation dictionaries. We will dynamically load specialized Google fonts (`Cairo` for Arabic, `Bricolage Grotesque` and `Inter` for English) using `next/font/google` depending on the active locale. The layout direction (`dir="rtl"` vs `dir="ltr"`) will adjust dynamically.

---

## Technical Context

**Language/Version**: TypeScript 5.x, Node.js 20+, React 19, Next.js 15 App Router

**Primary Dependencies**: `next/font/google`, `@tailwindcss/postcss`, `@react-three/fiber`, `@react-three/drei`, `three`

**Storage**: Local JSON static files under `src/dictionaries/`

**Testing**: Lint checks, TypeScript strict check (`npx tsc --noEmit`), and build compiler (`npm run build`)

**Target Platform**: Vercel Serverless Node.js Environment

**Project Type**: Web Application

**Performance Goals**: Under 20ms Edge Middleware redirection latency, 60fps animations, LCP < 2.5s, CLS < 0.1, INP < 200ms

**Constraints**: Compliant `hreflang` metadata headers, zero client-side translation parsing bundle, direction-aware layout styling

---

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle / Rule | Requirement | Validation Status |
|:---|:---|:---|
| **Rule 2: Engineering** | Strict TypeScript and zero compiler errors. | ✅ Passed. Checked during build testing. |
| **Rule 3: Architecture** | Next.js App Router layout separation. | ✅ Passed. Server Components manage dictionary loading. |
| **Rule 28: Accessibility** | Keyboard navigation and WCAG 2.2 AA. | ✅ Passed. Switchers use semantic links/buttons. |
| **Rule 32: Fonts** | Local font loading using next/font. | ✅ Passed. Fonts loaded via Vercel next/font/google wrappers. |
| **Rule 34: GEO Governance** | Alternative hreflang tags, dynamic dictionaries. | ✅ Passed. Configured dynamically inside route metadata. |

---

## Project Structure

### Documentation (this feature)

```text
specs/002-i18n-landing-page/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
└── checklists/
    └── requirements.md  # Specification quality checklist
```

### Source Code

```text
src/
├── app/
│   ├── [locale]/        # Locale-specific root layout and page
│   │   ├── layout.tsx   # Localized layout injector
│   │   └── page.tsx     # Translated page content renderer
│   ├── api/
│   │   └── health/
│   │       └── route.ts
│   └── globals.css
├── components/
│   ├── CursorGlow.tsx
│   ├── Header.tsx
│   └── LanguageSwitcher.tsx # [NEW] Language switcher component
├── dictionaries/        # [NEW] Locale JSON dictionary files
│   ├── ar.json
│   └── en.json
├── features/            # Feature modules
│   └── i18n/            # [NEW] i18n logic module
│       ├── get-dictionary.ts
│       └── index.ts
├── lib/
│   └── utils.ts
└── middleware.ts        # [NEW] Next.js edge router middleware
```

**Structure Decision**: Using Feature-First structure for translation handlers (`src/features/i18n/`) and dynamic subpaths routing (`src/app/[locale]/`).

---

## Proposed Changes

### [i18n Logic Feature]

#### [NEW] [get-dictionary.ts](file:///g:/hossam%20mabrouk/src/features/i18n/get-dictionary.ts)
Implement server-side dynamic imports of language dictionaries to keep raw JSON files outside client bundles.

#### [NEW] [index.ts](file:///g:/hossam%20mabrouk/src/features/i18n/index.ts)
Export the dictionary functions.

#### [NEW] [ar.json](file:///g:/hossam%20mabrouk/src/dictionaries/ar.json)
Create complete translations for all sections of Hussam Mabrouk's branding website.

#### [NEW] [en.json](file:///g:/hossam%20mabrouk/src/dictionaries/en.json)
Create English translations matching the layout copy of the demo.

---

### [Routing & Core Components]

#### [NEW] [middleware.ts](file:///g:/hossam%20mabrouk/middleware.ts)
Intercept visits to root `/` and redirect to active browser language subpath or default `/ar`.

#### [NEW] [LanguageSwitcher.tsx](file:///g:/hossam%20mabrouk/src/components/LanguageSwitcher.tsx)
Build a premium translation trigger component placed in the Header navigation bar.

#### [MODIFY] [layout.tsx](file:///g:/hossam%20mabrouk/src/app/%5Blocale%5D/layout.tsx)
Move `src/app/layout.tsx` to `src/app/[locale]/layout.tsx`. Inject fonts based on parameter (`Cairo` for Arabic, `Bricolage` for English), and set proper `lang` and `dir` on HTML.

#### [MODIFY] [page.tsx](file:///g:/hossam%20mabrouk/src/app/%5Blocale%5D/page.tsx)
Move `src/app/page.tsx` to `src/app/[locale]/page.tsx`. Resolve dictionary server-side and render home screen details.

#### [MODIFY] [Header.tsx](file:///g:/hossam%20mabrouk/src/components/Header.tsx)
Incorporate language selector and read navigation text dynamically from dictionary.

---

## Verification Plan

### Automated Tests
- TypeScript check: `npx tsc --noEmit`
- Production check: `npm run build`

### Manual Verification
- Execute verification scenarios defined in [quickstart.md](file:///g:/hossam%20mabrouk/specs/002-i18n-landing-page/quickstart.md).
