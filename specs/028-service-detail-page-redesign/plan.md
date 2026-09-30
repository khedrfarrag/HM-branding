# Implementation Plan: Redesign Service Detail Page UI & UX

**Branch**: `028-service-detail-page-redesign` | **Date**: 2026-09-30 | **Spec**: [spec.md](file:///d:/HM-branding/HM-branding/specs/028-service-detail-page-redesign/spec.md)

**Input**: Feature specification from `/specs/028-service-detail-page-redesign/spec.md`

## Summary

Elevate and modernize the service detail pages (`/[locale]/services/[slug]`) by converting the current flat MVP layout into a luxury glassmorphic presentation. The page will feature ambient glowing background accents, gradient title typography, an interactive connected vertical timeline for process steps, social proof case study cards, and high-converting consultation booking & WhatsApp call-to-action blocks.

## Technical Context

**Language/Version**: TypeScript 5.7 / React 19 / Next.js 15.1 App Router

**Primary Dependencies**: Tailwind CSS v4, Lucide React icons, Framer Motion

**Storage**: Local FS Repository (`LocalFsServiceRepository` in `src/repositories/local-fs/services.ts`)

**Testing**: React Testing Library / Type checking (`npm run type-check`)

**Target Platform**: Web Browsers (Responsive across Mobile, Tablet, Desktop)

**Project Type**: Web application (Next.js App Router marketing route)

**Performance Goals**: Sub-second interactive render, zero cumulative layout shift (CLS < 0.05), LCP < 1.5s

**Constraints**: Preserves full RTL/LTR bi-directional localization support (`ar` / `en`)

**Scale/Scope**: 1 page component (`/[locale]/(marketing)/services/[slug]/page.tsx`) with reusable sub-components/sections

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Component & Design Integrity**: Uses standard Tailwind utility classes, Lucide React icons, and existing domain repository architecture. (PASS)
- **Accessibility & i18n**: Fully supports semantic HTML5 article/header tags and RTL layout flipping. (PASS)

## Project Structure

### Documentation (this feature)

```text
specs/028-service-detail-page-redesign/
├── plan.md              # This file (/speckit-plan command output)
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output
└── tasks.md             # Phase 2 output (/speckit-tasks command)
```

### Source Code (repository root)

```text
src/
├── app/[locale]/(marketing)/services/[slug]/
│   └── page.tsx         # Service detail page implementation
├── repositories/local-fs/
│   └── services.ts      # Service & SuccessStory data repository
└── domains/services/
    └── entities.ts      # Service & SuccessStory entities
```

**Structure Decision**: Standard Next.js App Router feature structure inside `src/app/[locale]/(marketing)/services/[slug]/page.tsx`.

## Complexity Tracking

*No constitution violations present.*
