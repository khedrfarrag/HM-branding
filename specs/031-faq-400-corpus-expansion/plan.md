# Implementation Plan: FAQ Knowledge Base Expansion to 400 Items (100 per Category)

**Feature Directory**: `specs/031-faq-400-corpus-expansion` | **Date**: 2026-10-08 | **Spec**: [spec.md](specs/031-faq-400-corpus-expansion/spec.md)

---

## Technical Context & Stack

- **Framework**: Next.js 15.5 App Router (TypeScript)
- **Data Source Files**:
  - `src/data/faqs/bio.ts` (100 items — ✅ Complete: IDs 1–100)
  - `src/data/faqs/content.ts` (Target: 100 items — ⏳ Current: 50 items [IDs 101–150], Pending: 50 items [IDs 151–200])
  - `src/data/faqs/china.ts` (Target: 100 items — ⏳ Current: 50 items [IDs 201–250], Pending: 50 items [IDs 251–300])
  - `src/data/faqs/digital.ts` (Target: 100 items — ⏳ Current: 50 items [IDs 301–350], Pending: 50 items [IDs 351–400])
  - `src/data/faqs.ts` (Aggregator & Category tab definitions)
- **UI Explorer Component**: `src/components/FAQExplorer.tsx`
- **AI Integration**: `src/lib/ai/prompts.ts`, `src/lib/ai/knowledge.ts`, `src/lib/ai/rag.ts`
- **SEO & Schema**: `src/lib/schema/faq.ts`, `src/app/[locale]/(knowledge)/knowledge/faq/page.tsx`, `src/app/llms-full.txt/route.ts`

---

## Constitution & Engineering Compliance

- **TypeScript Strictness**: Zero errors with `npx tsc --noEmit`.
- **Data Integrity**: Consistent `FAQItem` interface (`id`, `category`, `questionAr`, `questionEn`, `answerAr`, `answerEn`, `credibilityLineAr`, `internalLink`).
- **Editorial Quality**: High-authority tone representing Hossam Mabrouk's 15+ years of cross-border trade and China sourcing advisory.
- **Search Performance**: Client-side filtering across all 400 items under 100ms.

---

## Current Status & Progress Tracking

| Category File | Status | IDs Range | Count | Remaining Work |
|---|---|---|---|---|
| `src/data/faqs/bio.ts` | ✅ Done | 1–100 | 100 | None |
| `src/data/faqs/content.ts` | ⏳ Partial | 101–150 | 50 | Author 50 items (IDs 151–200) |
| `src/data/faqs/china.ts` | ⏳ Partial | 201–250 | 50 | Author 50 items (IDs 251–300) |
| `src/data/faqs/digital.ts` | ⏳ Partial | 301–350 | 50 | Author 50 items (IDs 351–400) |
| **Total** | **62.5%** | **1–400** | **250 / 400** | **150 items to author** |

---

## Detailed Execution Phases for Completion

### Phase 1: Expansion of "المعرفة والمحتوى" (`src/data/faqs/content.ts`)
* **Target IDs**: 151–200 (50 items)
* **Topic Coverage**:
  - **Batch 1 (151–165)**: Advanced Landed Cost modeling, hidden logistics charges, currency hedging (USD/CNY/SAR), and ROI forecasting.
  - **Batch 2 (166–180)**: Supply chain risk mitigation, crisis management (Red Sea rerouting, port congestion, Chinese New Year buffers).
  - **Batch 3 (181–195)**: International quality certifications (ISO 9001, CE, SASO/GSO, RoHS) and third-party inspection (PSI/DUPRO) workflows.
  - **Batch 4 (196–200)**: Real-world case studies in cross-border negotiation, dispute avoidance, and margin protection.

### Phase 2: Expansion of "الصين والتجارة والتوريد" (`src/data/faqs/china.ts`)
* **Target IDs**: 251–300 (50 items)
* **Topic Coverage**:
  - **Batch 1 (251–265)**: Regional customs compliance: Saudi SABER & FASAH systems, Egyptian ACI & ACID registration, UAE customs declarations.
  - **Batch 2 (266–280)**: Incoterms 2020 deep dive (FOB vs CIF vs DDP/DAP liability transfers, container demurrage and detention rules).
  - **Batch 3 (281–295)**: China legal protection: PRC NNN (Non-disclosure, Non-use, Non-circumvention) agreements and GSXT official business license verification.
  - **Batch 4 (296–300)**: China trade fairs & hubs: Canton Fair (Guangzhou), Yiwu International Trade City, and specialized manufacturing clusters (Foshan, Ningbo, Shenzhen).

### Phase 3: Expansion of "الموقع والهوية الرقمية" (`src/data/faqs/digital.ts`)
* **Target IDs**: 351–400 (50 items)
* **Topic Coverage**:
  - **Batch 1 (351–365)**: Interactive merchant calculators guide: Landed Cost Calculator inputs, Freight Estimator volume/CBM formulas, and currency conversion logic.
  - **Batch 2 (366–380)**: China Industrial Directory navigation: Filtering by city clusters, finding verified factories, and vetting wholesale markets.
  - **Batch 3 (381–395)**: Private 1-on-1 advisory booking: Consultation tiers, pre-session data requirements, and NDA confidentiality protocols.
  - **Batch 4 (396–400)**: AI Sourcing Assistant capabilities, prompt engineering for trade inquiries, and continuous platform knowledge updates.

### Phase 4: Integration, Verification & Polish
- **Type Safety**: Execute `npx tsc --noEmit` to guarantee zero compilation errors across all 400 FAQ objects.
- **Data Completeness**: Validate that `FAQS_DATA.length === 400` with 100 items per category.
- **RAG & Discovery**: Verify that `/llms-full.txt` and AI system prompts accurately include all 400 questions.
- **UI Performance**: Confirm instant search filter response on `/knowledge/faq` across mobile and desktop.
