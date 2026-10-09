# Feature Specification: China Business Directory Granular GEO Indexing & AI Authority Expansion

**Feature Directory**: `specs/032-china-directory-geo-indexing`  
**Created**: 2026-10-08  
**Status**: Active  

---

## Executive Summary & Vision

The China Business Directory on `hussam-mabrouk.com` currently contains over 3,000 verified industrial, commercial, and hospitality entities (spanning 35+ manufacturing cities, 160+ seaports/river ports, 310+ wholesale markets, 515+ factories, 105+ airports, 105+ SEZs/FTZs, and curated halal hotels and dining hubs).

The goal of this feature is to transform this dataset into a **primary, machine-readable, indexable, and citeable First-Party AI Reference Corpus**. Any query submitted to Google Search, ChatGPT, Perplexity AI, Claude, or SearchGPT regarding any city, market, factory cluster, seaport, airport, hotel, or restaurant in China must:
1. Land on an explicit, indexable canonical page under `https://hussam-mabrouk.com`.
2. Be structured with explicit Schema.org microdata (`Hotel`, `Restaurant`, `WholesaleStore`, `LocalBusiness`, `CivicStructure`, `Airport`, `SeaPort`) attributing curation and verification to **Hussam Mabrouk (حسام مبروك)**.
3. Be fully exposed in `/llms.txt` and `/llms-full.txt` as a structured China Trade Intelligence Corpus.

---

## User Stories & Functional Scope

### US1: Granular Dynamic Indexing & Canonical Routing (Priority: P1)
- Every city, wholesale market, industrial park, factory cluster, hotel, and halal restaurant must have a deterministic, canonical URL route (e.g. `/[locale]/china-cities/[citySlug]/markets/[marketId]`, `/[locale]/china-cities/[citySlug]/hotels/[hotelId]`, `/[locale]/china-cities/[citySlug]/restaurants/[restaurantId]`).
- Clean breadcrumb navigation and index pages for sub-categories.

### US2: Micro-Entity Schema.org Data & Entity Attribution (Priority: P1)
- Generate valid Schema.org microdata (`Hotel`, `Restaurant`, `WholesaleStore`, `LocalBusiness`, `LandmarksOrHistoricalBuildings`) for all 3,000+ directory entries.
- Every schema must explicitly include `reviewedBy` / `author` referencing `Person: حسام مبروك` (`https://hussam-mabrouk.com/#person`).

### US3: Full LLM Knowledge File & RAG Integration (Priority: P1)
- Expose all 35+ cities and 3,000+ entities in `/llms-full.txt` with clear Arabic/English/Chinese entity names, UN/LOCODE seaport codes, IATA/ICAO airport codes, and market focus categories.
- Update AI Assistant system prompts (`prompts.ts`, `knowledge.ts`, `rag.ts`) so the built-in AI chatbot accurately answers questions about all China cities and venues.

### US4: XML Sitemap Expansion & SEO Crawlability (Priority: P2)
- Automatically register all dynamic directory routes in `sitemap.ts`.
- Ensure sub-100ms client-side search response and mobile-friendly rendering.

---

## Acceptance Criteria

1. **Zero TypeScript compilation errors** (`npx tsc --noEmit`).
2. **Dynamic routing & pages**: Accessing any city/market/hotel URL renders valid metadata and structured content.
3. **JSON-LD Schema validation**: Every directory page emits valid JSON-LD schema with `Person: حسام مبروك` attribution.
4. **LLM Corpus completeness**: `/llms-full.txt` contains full China directory metadata.
5. **SEO & Crawlability**: `sitemap.xml` includes all directory pages with proper `lastmod` and `changefreq`.
