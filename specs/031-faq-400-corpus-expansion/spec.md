# Feature Specification: FAQ Knowledge Base Expansion to 400 Items (100 per Category)

**Feature Directory**: `specs/031-faq-400-corpus-expansion`  
**Created Date**: 2026-10-06  
**Status**: DRAFT  

## Executive Summary

Expand the official **Hussam Mabrouk FAQ & Trade Knowledge Base** from 200 items to **400 items** (100 items per category). Each item adheres to the established editorial standard: natural Arabic & English search queries, 80–140 word practical advisory answers, standardized credibility attribution lines, and internal contextual CTA links. This expansion significantly boosts Search Engine Optimization (SEO), Generative Engine Optimization (GEO for LLM crawlers like Gemini/ChatGPT), and provides deep advisory value for Middle Eastern importers.

---

## User Stories & Scenarios

### User Story 1 - Prospective Importers & Advisory Clients (Priority: P1)
As a business owner or prospective importer, I want to access 100 comprehensive questions under "👤 من هو حسام مبروك؟", so that I can understand his 15+ years of hands-on experience, deal protection strategies, factory auditing methods, and consulting scope.

### User Story 2 - Trade Learning & Supply Chain Optimization (Priority: P1)
As a merchant, I want 100 dedicated QA items under "📚 المعرفة والمحتوى", so that I can learn Landed Cost calculations, ROI analysis, crisis management, quality standards (ISO/CE/SASO), and case studies of common trade pitfalls.

### User Story 3 - China Sourcing, Customs & Trade Laws (Priority: P1)
As an active importer in GCC or Egypt, I want 100 practical QA items under "🇨🇳 الصين والتجارة والتوريد", so that I can master SABER (KSA), ACI (Egypt), PRC NNN agreements, GSXT factory license verification, Incoterms 2020, and trade fair strategies (Canton/Yiwu Fair).

### User Story 4 - Platform Tools & Digital Guidance (Priority: P2)
As a site visitor, I want 100 QA items under "🌐 الموقع والهوية الرقمية", so that I can understand how to use the Landed Cost Calculator, Freight Estimator, China City Directory, AI Sourcing Assistant, and book 1-on-1 consultations.

---

## Functional Requirements

- **FR-001**: The knowledge base MUST contain exactly 400 distinct FAQ items distributed equally across 4 categories (100 items each):
  1. `bio`: Who is Hussam Mabrouk? (100 items)
  2. `content`: Knowledge and Content (100 items)
  3. `china`: China, Trade, and Sourcing (100 items)
  4. `digital`: Website and Digital Identity (100 items)
- **FR-002**: Every FAQ item MUST include a unique sequential `id` (1–100 per file or 1–400 global), category key, bilingual questions (`questionAr`, `questionEn`), bilingual answers (`answerAr`, `answerEn`), credibility line (`credibilityLineAr`), and contextual internal CTA link (`internalLink`).
- **FR-003**: The UI components (`FAQExplorer.tsx`, `faqs.ts`, `faq/page.tsx`) MUST reflect the new counts: "الكل (400 سؤال)" and "100" for each category tab.
- **FR-004**: The AI Knowledge Engine (`prompts.ts`, `knowledge.ts`, `rag.ts`) MUST ingest all 400 questions to deliver zero-hallucination responses.
- **FR-005**: The LLM discovery endpoints (`/llms-full.txt`) MUST output all 400 questions for AI search indexing.

---

## Success Criteria

1. **Coverage**: 100% of the 400 items authored, type-checked with TypeScript, and rendered in the UI.
2. **Search Performance**: Instant real-time search filtering across all 400 items within < 100ms.
3. **AI Accuracy**: 100% precision in RAG intent matching for all newly covered trade topics.
