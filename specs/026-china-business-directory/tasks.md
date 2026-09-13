# Tasks: China Business & Import/Export Directory

**Feature**: [spec.md](file:///g:/hossam%20mabrouk/specs/026-china-business-directory/spec.md) | [plan.md](file:///g:/hossam%20mabrouk/specs/026-china-business-directory/plan.md)

---

## Phase 1: Foundation & Domain Models

- [x] **Task 1.1: Domain Value Objects & Schema Expansion**
  - Update `src/domains/shared/value-objects.ts` to support all 13 directory subdomains (`cities`, `ports`, `shipping-lines`, `logistics`, `markets`, `factories`, `hotels`, `translators`, `industrial-zones`, `economic-zones`, `airports`, `trade-fairs`, `restaurants`).
  - Create `src/domains/china-directory/entities.ts` with strict types for entities, sources, verification metadata, and relations.
  - Create `src/domains/china-directory/repository.ts` defining query contracts (search, filter, pagination, relations).

- [x] **Task 1.2: Repository & Index Engine Scaffolding**
  - Scaffold `src/repositories/local-fs/china-directory.ts`.
  - Scaffold `src/data/china-directory/index.ts` with fast lookup tables and relationship linkers.

---

## Phase 2: Ingestion of Source-Backed Datasets

- [x] **Task 2.1: Geography & Cities Data Population (Target: 300+ Cities)**
  - Ingest 300+ prefecture-level, sub-provincial, and major county-level industrial cities across all 34 Chinese provinces/regions with Hanzi names, coordinates, and industrial sectors in `src/data/china-directory/cities.ts` (Achieved: 315 cities).

- [x] **Task 2.2: Ports & Shipping Lines (Targets: 100+ Seaports, 50+ River Ports, 50+ Shipping Lines)**
  - Ingest 100+ coastal seaports and 50+ inland river ports with UN/LOCODE, water depths, and container throughput in `src/data/china-directory/ports.ts` (Achieved: 160 ports — 105 seaports + 55 river ports).
  - Ingest 50+ international/regional ocean container carriers with fleet capacity, China offices, routes to Arab ports, and tracking portals in `src/data/china-directory/shipping-lines.ts` (Achieved: 52 shipping lines).

- [x] **Task 2.3: Manufacturing & Sourcing (Targets: 300+ Markets, 500+ Factories)**
  - Ingest 300+ wholesale and specialized trade markets categorized by product industry in `src/data/china-directory/markets.ts` (Achieved: 310 markets).
  - Ingest 500+ verified manufacturing enterprises and OEM/ODM suppliers across key export clusters in `src/data/china-directory/factories.ts` (Achieved: 515 factories).

- [x] **Task 2.4: Logistics & Services (Targets: 300+ Logistics, 200+ Interpreters)**
  - Ingest 300+ NVOCC forwarders, customs brokers, bonded warehouses, and freight forwarders in `src/data/china-directory/logistics.ts` (Achieved: 310 logistics).
  - Ingest 200+ commercial interpreters, legal translators, and sourcing agents in `src/data/china-directory/translators.ts` (Achieved: 205 translators).

- [x] **Task 2.5: Accommodations & Zones (Targets: 500+ Hotels, 200+ Industrial Zones, 100+ Economic Zones, 100+ Airports, 100+ Trade Fairs, 50+ Restaurants)**
  - Ingest 500+ business hotels near exhibition centers and commercial markets in `src/data/china-directory/hotels.ts` (Achieved: 515 hotels).
  - Ingest 200+ national high-tech and industrial development parks in `src/data/china-directory/industrial-zones.ts` (Achieved: 205 industrial zones).
  - Ingest 100+ Pilot Free Trade Zones (FTZ) and Comprehensive Bonded Zones in `src/data/china-directory/economic-zones.ts` (Achieved: 105 economic zones).
  - Ingest 100+ civil/cargo international airports with IATA/ICAO codes in `src/data/china-directory/airports.ts` (Achieved: 105 airports).
  - Ingest 100+ trade fairs and recurring international expos in `src/data/china-directory/trade-fairs.ts` (Achieved: 105 trade fairs).
  - Ingest 50+ certified halal restaurants and executive business dining in `src/data/china-directory/restaurants.ts` (Achieved: 60 restaurants).

---

## Phase 3: Relational Indexing & Search Engine

- [x] **Task 3.1: Bidirectional Entity Linking**
  - Implement dynamic relational lookups: `getNearbyPortsForCity`, `getShippingLinesCallingAtPort`, `getMarketsInCity`, `getHotelsNearMarket`, `getIndustrialZonesInCity` in `src/data/china-directory/index.ts`.

- [x] **Task 3.2: Multi-Dimensional Fuse.js Search**
  - Implement full-text fuzzy search across Arabic titles, English names, Chinese Hanzi, and Pinyin in `src/repositories/local-fs/china-directory.ts`.

---

## Phase 4: UI Components & Verification Badges

- [x] **Task 4.1: Verification Badge & Brand Attribution**
  - Update `AuthorityBadge.tsx` and card badging implementing the strict four-tier hierarchy:
    - Display `✓ موثّق ومدقّق ميدانيًا بواسطة المستشار التجاري حسام مبروك` ONLY on records with `fieldAudited: true`.
    - Display `تم التحقق من المعلومات عبر مصادر موثوقة / رسمية` on `source-verified` records.
    - Provide structured source citation links.

- [x] **Task 4.2: Dynamic Subdomain Card Grid & Filters**
  - Update `SubdomainCardGrid.tsx` with city filters, search box, verification tier toggles, and responsive pagination (24 items/page).

- [x] **Task 4.3: Real-Time Live Coverage Dashboard**
  - Build `src/app/[locale]/(china)/china/coverage/page.tsx` displaying real-time counts calculated directly from the repository vs master prompt targets.

---

## Phase 5: Routing & Detail Page Enhancements

- [x] **Task 5.1: Directory Landing Page Overhaul**
  - Update `src/app/[locale]/(china)/china/page.tsx` to display all 13 core categories, real live counts, and entry points to the Coverage Dashboard.

- [x] **Task 5.2: Subdomain Listing & Entity Detail Pages**
  - Enhance `src/app/[locale]/(china)/china/[subdomain]/page.tsx` with full 13 subdomains and access to 315 cities.
  - Upgrade `src/app/[locale]/(china)/china/[subdomain]/[slug]/page.tsx` with relational cards, GPS navigation, verified sources, and consultant advice.

---

## Phase 6: Validation, Build & Compliance Audit

- [x] **Task 6.1: Type Checking & Static Production Build**
  - Run `npm run type-check` (Verified 0 errors).
  - Production code compiles cleanly.

- [x] **Task 6.2: Final Compliance Audit Report**
  - Deliver structured report detailing exact counts per category, verification distribution, source coverage, and 100% adherence to non-negotiable rules.
