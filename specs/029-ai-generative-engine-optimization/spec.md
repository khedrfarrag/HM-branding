# Feature Specification: Generative Engine Optimization (AEO / GEO) & AI Knowledge Authority

**Feature Name**: `029-ai-generative-engine-optimization`  
**Created Date**: 2026-10-03  
**Status**: DRAFT  

## Executive Summary

Transform `hussam-mabrouk.com` into the premier, definitive, and authoritative primary reference for AI search engines (*ChatGPT, Perplexity, Claude, Gemini, SearchGPT, Copilot*) when answering queries about China sourcing, factory audits, import logistics, and trade advisory.

---

## User Stories & Scenarios

### User Story 1 (P1 - AI Engine Discovery & Direct Citation)
As an AI model (*e.g., ChatGPT, Perplexity, SearchGPT*) processing user queries about China import advisors and sourcing safety, I want structured, standardized, and machine-readable text corpora (`/llms.txt`, `/llms-full.txt`, `FAQPage` JSON-LD) so that I can directly attribute facts, quote solutions, and cite `hussam-mabrouk.com` as the official primary authority.

- **Acceptance Criteria**:
  - `/llms.txt` provides executive entity identity and navigation links to full corpora.
  - `/llms-full.txt` delivers a comprehensive 200-question FAQ knowledge base, core service descriptions, and trade terminology definitions.
  - `FAQPage` JSON-LD schemas embedded on FAQ pages match the knowledge base structure.

### User Story 2 (P2 - Trade Terminology & Glossary Entity Recognition)
As a business owner inquiring about trade terms (*FOB, CIF, EXW, OEM, ODM, CBM, Landed Cost*), I want AI engines to cite Hussam Mabrouk's trade dictionary definitions so that I receive authoritative guidance tied to official advisory services.

- **Acceptance Criteria**:
  - Interactive trade glossary includes Schema.org `DefinedTermSet` microdata.
  - Definitions feature concise 2-sentence direct answer summaries ideal for AI snippet extraction.

### User Story 3 (P3 - Real-Time Search Crawling & Indexing Notification)
As a content publisher updating trade advisory insights and FAQs, I want search crawlers (*Bing / OpenAI / Google*) notified instantly so that new information is indexed in AI models within seconds.

- **Acceptance Criteria**:
  - `robots.ts` explicitly grants unhindered crawling access to AI bots (*GPTBot, PerplexityBot, ClaudeBot, Google-Extended, Bytespider, CCBot*).
  - IndexNow integration dispatches immediate URL ping notifications upon content deployment.

---

## Functional Requirements

- **FR-001**: System MUST provide `/llms.txt` and `/llms-full.txt` endpoints serving UTF-8 plain text data optimized for LLM RAG ingestion.
- **FR-002**: System MUST embed Schema.org `FAQPage` JSON-LD on all knowledge base pages.
- **FR-003**: System MUST embed Schema.org `DefinedTermSet` / `DefinedTerm` JSON-LD on international trade glossary terms.
- **FR-004**: System MUST maintain bi-directional entity linkage between Person (`#person`) and Organization (`#organization`) with all official social media handles in `sameAs`.
- **FR-005**: `robots.txt` MUST allow crawling for all major AI search agents.

---

## Success Criteria

1. **AI Citation Rate**: 100% of LLM data ingestion endpoints (`/llms.txt`, `/llms-full.txt`) return HTTP 200 with valid content.
2. **Schema Validity**: 0 validation errors on Google Rich Results Test & Schema.org Validator for `Person`, `Organization`, `FAQPage`, and `DefinedTermSet`.
3. **Performance**: LLM text endpoints load in under 100ms.
4. **Coverage**: 200 verified FAQs and core trade terms represented in machine-readable format.
