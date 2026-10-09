# Research: FAQ Knowledge Base Expansion to 400 Items

**Feature Directory**: `specs/031-faq-400-corpus-expansion` | **Date**: 2026-10-06

---

## Technical Decisions & Rationale

| Decision | Choice | Rationale | Alternatives Considered |
|----------|--------|-----------|------------------------|
| **File Structure** | Maintain `src/data/faqs/{bio,content,china,digital}.ts` | Modular architecture allows clean separation of 100 questions per domain without mega-file pollution | Single 400-item JSON (harder to maintain) |
| **RAG & AI Ingestion** | Dynamic Export & RAG Match Density Gate (`matchRatio >= 0.50`) | Guarantees all 400 items are indexed by AI System Prompt and RAG engine without performance degradation | Static prompt hardcoding |
| **UI Pagination & Search** | Client-side `useMemo` with 20 items/page in `FAQExplorer.tsx` | Provides instant sub-100ms filtering and pagination across all 400 items | Server-side pagination (causes unnecessary latency) |
| **SEO Schema** | `buildFAQPageSchema` in `src/lib/schema/faq.ts` | Exposes rich Schema.org FAQPage JSON-LD metadata for Google SERPs | Plain text without JSON-LD |

---

## Sub-Topic Allocation (50 New Items per File)

1. **`bio.ts` (Items 51–100)**: On-site China experience, NNN deal protection, GSXT factory audits, executive advisory vs brokerage, trade crisis management.
2. **`content.ts` (Items 51–100)**: Landed Cost calculations, supply chain risk, real-world case studies, factory negotiation culture, quality standards (ISO/CE/SASO).
3. **`china.ts` (Items 51–100)**: SABER (KSA), ACI (Egypt), Incoterms 2020 (FOB/CIF/DDP), Canton/Yiwu trade fairs, China industrial clusters.
4. **`digital.ts` (Items 51–100)**: Landed Cost Calculator guide, China City Directory navigation, 1-on-1 consultation booking, AI Sourcing Assistant, data privacy.
