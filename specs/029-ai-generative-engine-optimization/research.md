# Research: Generative Engine Optimization (AEO / GEO)

**Feature**: `029-ai-generative-engine-optimization`  
**Date**: 2026-10-03  

## Decisions & Technical Architecture

### 1. LLM Ingestion Standard (`llms.txt` & `llms-full.txt`)
- **Decision**: Provide `/llms.txt` for high-level entity routing and `/llms-full.txt` for complete RAG corpus text ingestion.
- **Rationale**: OpenAI, Anthropic, and Perplexity consume `llms.txt` files to navigate site facts. `llms-full.txt` aggregates 200 FAQs and core trade terminology into one single text stream.
- **Alternatives Evaluated**: Static `.txt` files vs Dynamic Route Handlers. Dynamic handlers chosen to ensure any updates to `FAQS_DATA` automatically reflect in real time.

### 2. Microdata & Schema.org Strategy
- **Decision**: Combine `Person`, `Organization`, `FAQPage`, and `DefinedTermSet` JSON-LD schemas.
- **Rationale**: `FAQPage` triggers instant direct answers in SearchGPT / Perplexity. `DefinedTermSet` registers trade definitions (FOB, CIF, OEM, ODM).
- **Entity Linking**: `@id: "https://hussam-mabrouk.com/#person"` links all social channels via `sameAs`.

### 3. Real-Time Indexing (IndexNow & AI Bot Access)
- **Decision**: Maintain explicit `allow: "/"` permissions for AI bots in `robots.ts` and set up IndexNow API hooks.
- **Rationale**: Prevents AI crawlers from being blocked by default rate-limiting or anti-bot rules.
