# Implementation Plan: Generative Engine Optimization (AEO / GEO) & AI Knowledge Authority

**Feature Directory**: `specs/029-ai-generative-engine-optimization` | **Date**: 2026-10-03 | **Spec**: [spec.md](specs/029-ai-generative-engine-optimization/spec.md)

---

## Technical Context & Stack

- **Framework**: Next.js 15.5 App Router (TypeScript)
- **AI RAG Endpoints**: `/llms.txt`, `/llms-full.txt` (Text Route Handlers with UTF-8 encoding and aggressive HTTP caching)
- **Structured Data (Schema.org)**: `schema-dts` library (`Person`, `Organization`, `FAQPage`, `DefinedTermSet`, `HowTo`)
- **Search Crawlers & Indexing**: `src/app/robots.ts`, IndexNow API notifications for real-time indexing

---

## Phase 0: Research — ✅ Complete

**Output**: `research.md`

| Decision | Choice | Rationale |
|----------|--------|-----------|
| LLM Corpus Format | Dynamic UTF-8 plain text route handlers (`llms.txt`, `llms-full.txt`) | Standard format adopted by OpenAI, Anthropic, and Perplexity RAG |
| Schema.org Type | `FAQPage` + `DefinedTermSet` | Directly triggers Google Rich Snippets & AI direct answer extraction |
| Entity Identification | Unique `@id` URIs (`#person`, `#organization`) | Prevents entity confusion across social platforms |

---

## Phase 1: Design & Artifacts — ✅ Complete

**Outputs**: `data-model.md`, `contracts/aeo-geo-contracts.md`, `quickstart.md`

1. **`llms-full.txt` RAG Corpus Endpoint** — Complete text stream serving 200 FAQs, 5 core services, trade glossary, and contact channels.
2. **`FAQPage` Schema Engine** — `buildFAQPageSchema` in `src/lib/schema/faq.ts` injected across all FAQ hubs.
3. **Glossary `DefinedTermSet` Schema** — Structured definitions for international trade terms (FOB, CIF, EXW, OEM, ODM, CBM, Landed Cost).
4. **AI Crawlers Permission Matrix** — Explicit unhindered access in `robots.ts` for GPTBot, PerplexityBot, ClaudeBot, etc.

---

## Phase 2: Tasks — ✅ Complete

**Output**: `tasks.md` — 10 execution tasks organized by user story priority.
