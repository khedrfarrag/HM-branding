# Implementation Plan: Comprehensive FAQ Knowledge Base Expansion (200 Items)

**Branch**: `027-faq-knowledge-base-expansion` | **Date**: 2026-09-21 | **Spec**: [spec.md](file:///g:/hossam%20mabrouk/specs/027-faq-knowledge-base-expansion/spec.md)

**Input**: Feature specification from `/specs/027-faq-knowledge-base-expansion/spec.md`

## Summary

Expand the advisory FAQ knowledge base on Hossam Mabrouk's personal website from the current 50-item baseline to 200 comprehensive, professionally authored FAQ items equally distributed (50 items each) across four core pillars:
1. `bio`: Who is Hossam Mabrouk? (من هو حسام مبروك؟)
2. `content`: Knowledge and Content (المعرفة والمحتوى)
3. `china`: China, Trade, and Sourcing (الصين والتجارة والتوريد)
4. `digital`: Website and Digital Identity (الموقع والهوية الرقمية)

Each item adheres strictly to 80–140 words in Modern Standard Arabic, includes approved credibility/advisory attributions, provides contextual internal CTA links, and maintains strict separation between Hossam Mabrouk's personal consulting platform and transactional trading entities (like ElDelta).

---

## Technical Context

**Language/Version**: TypeScript 5.x / ECMAScript 2022 / Next.js 15 App Router  
**Primary Dependencies**: React 19, Lucide React, Tailwind CSS v4, Framer Motion  
**Storage**: Static / In-memory TypeScript typed dataset (`src/data/faqs.ts`)  
**Testing**: Unit validation / Component rendering / Next.js build verification (`npm run build`)  
**Target Platform**: Responsive Web (Desktop, Tablet, Mobile)  
**Project Type**: Next.js 15 Web Application (App Router)  
**Performance Goals**: Instant client-side search filtering (<50ms response), zero layout shifts (CLS < 0.1), sub-second page transition  
**Constraints**: Arabic answers 80–140 words, no guaranteed profit claims, legal/customs verification disclaimers included, field-audit badges forbidden on FAQs  
**Scale/Scope**: 200 FAQ items (4 x 50), 4 category filters, search input, pagination (20/page), JSON-LD `FAQPage` schema markup  

---

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Section 1 (Philosophy)**: Establishes Hossam Mabrouk as an authoritative advisory leader; no uncurated layouts or generic stock content. -> **PASS**
- **Section 2 (Engineering)**: Strict TypeScript mode, zero compiler warnings or errors. -> **PASS**
- **Section 3 (Architecture)**: Next.js App Router boundaries respected; static data in `src/data/` cleanly consumed by Client Components (`FAQExplorer.tsx`). -> **PASS**
- **Section 4 (Design)**: Tailwind CSS v4 variables and theme adherence (gold/slate aesthetic). -> **PASS**
- **Section 28 (Accessibility)**: ARIA attributes on accordions, semantic headings, keyboard navigation. -> **PASS**
- **Section 33 & 35 (SEO & Schema.org)**: Standardized semantic HTML, valid JSON-LD `FAQPage` markup. -> **PASS**
- **Section 46 (Forbidden Practices)**: No raw unoptimized inline styles, no TypeScript `any`, no hardcoded secrets. -> **PASS**

---

## Project Structure

### Documentation (this feature)

```text
specs/027-faq-knowledge-base-expansion/
├── spec.md              # Feature specification
├── plan.md              # This file (/speckit-plan output)
├── research.md          # Phase 0 output (/speckit-plan output)
├── data-model.md        # Phase 1 output (/speckit-plan output)
├── quickstart.md        # Phase 1 output (/speckit-plan output)
├── contracts/           # Phase 1 output (/speckit-plan output)
│   └── faq-contract.ts  # TypeScript contract definition
└── checklists/
    └── requirements.md  # Quality checklist
```

### Source Code (repository root)

```text
src/
├── data/
│   ├── faqs.ts                              # [MODIFY] Complete 200-item dataset & category counters
├── components/
│   ├── FAQExplorer.tsx                      # [MODIFY] Verify pagination, category counts, search debounce
│   └── features/home/
│       └── FAQSection.tsx                   # [VERIFY] Category counters and display compatibility
└── app/
    └── [locale]/
        └── (marketing)/
            └── about/
                └── [...slug]/
                    └── page.tsx             # [VERIFY] FAQPage Schema.org structured data integration
```

**Structure Decision**: In-memory TypeScript data layer in `src/data/faqs.ts` with direct import into Next.js App Router client explorer and server page schema builders.

---

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|:---|:---|:---|
| None | N/A | N/A |
