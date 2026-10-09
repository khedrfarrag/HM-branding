# Contracts: FAQ Component & AI Engine Integration

**Feature Directory**: `specs/031-faq-400-corpus-expansion` | **Date**: 2026-10-06

---

## 1. UI Component Contract: `FAQExplorer.tsx`

- **Input Props**: `{ locale: string }`
- **Data Source**: Imports `FAQ_CATEGORIES` and `FAQS_DATA` (400 items total) from `@/data/faqs`
- **Pagination**: 20 items per page (`ITEMS_PER_PAGE = 20`)
- **Category Filter Tabs**: Renders 5 tabs (`all`, `bio`, `content`, `china`, `digital`) with updated `(100)` labels.

---

## 2. AI Engine Contract: `src/lib/ai/prompts.ts` & `knowledge.ts`

- **System Prompt Builder**: Summarizes all 400 FAQ items into compact `[Q#]: Question -> Answer` pairs.
- **RAG Matcher (`rag.ts`)**: Evaluates user queries against all 400 question titles using word-weighted density matching.

---

## 3. SEO JSON-LD Contract: `src/lib/schema/faq.ts`

- **Function**: `buildFAQPageSchema(faqs: FAQItem[], locale: Locale): WithContext<FAQPage>`
- **Output**: Generates Schema.org `FAQPage` JSON-LD array containing all 400 questions.
