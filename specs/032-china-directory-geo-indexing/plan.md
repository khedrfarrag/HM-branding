# Implementation Plan: China Business Directory Granular GEO Indexing & AI Authority Expansion

**Feature Directory**: `specs/032-china-directory-geo-indexing` | **Date**: 2026-10-08 | **Spec**: [spec.md](spec.md)

---

## Technical Context & Stack

- **Framework**: Next.js 15.5 App Router (TypeScript)
- **Data Source Files**: `src/features/china-cities/data/cities/*.ts` (35+ cities: Beijing, Guangzhou, Yiwu, Shenzhen, Foshan, Ningbo, etc.)
- **SEO & Schema**: `src/lib/schema/`, `src/app/sitemap.ts`, `src/app/robots.ts`
- **LLM Knowledge Endpoint**: `src/app/llms-full.txt/route.ts`, `src/app/llms.txt/route.ts`
- **AI RAG Integration**: `src/lib/ai/prompts.ts`, `src/lib/ai/knowledge.ts`, `src/lib/ai/rag.ts`

---

## Constitution & Engineering Compliance

- **TypeScript Strictness**: Zero errors with `npx tsc --noEmit`.
- **Data Integrity**: Complete bilingual & Chinese name parity (`name.ar`, `name.en`, `name.zh`).
- **Entity Attribution**: Every JSON-LD schema must explicitly link to `Person: حسام مبروك` (`https://hussam-mabrouk.com/#person`).
- **Search Performance**: Fast SSR/SSG dynamic route rendering with sub-100ms client search.

---

## Phases & Execution Strategy

### Phase 0: Research & Schema Standards (`research.md`)
- Define Schema.org mapping for `Hotel`, `Restaurant`, `WholesaleStore`, `LocalBusiness`, `Airport`, `SeaPort`.
- Map entity attribution properties (`author`, `reviewedBy`, `curatedBy`).

### Phase 1: Data Models & API Contracts (`data-model.md`, `contracts/`, `quickstart.md`)
- Specify interface contracts for `CityEntitySchema`, `LLMCorpusFeed`, and `DirectorySitemap`.
- Provide end-to-end verification quickstart guide.

### Phase 2: Implementation Tasks (`tasks.md`)
- Task T001 to T020 covering dynamic routing, schema builders, LLM text corpus generator, sitemap updater, and verification.
