# Feature Specification: China Business & Import/Export Directory

**Feature Directory**: `specs/026-china-business-directory`
**Created**: 2026-09-13
**Status**: Draft / In Planning
**Input**: Master Implementation Prompt — China Business & Import/Export Directory (Comprehensive Large-Scale Upgrade)

---

## 1. Executive Summary & Product Definition

Transform the existing China Guide module into a large-scale, authoritative, source-backed **China Business & Import/Export Directory (دليل الصين التجاري الشامل للاستيراد والتصدير)**. 

The directory serves as a high-density, verified commercial intelligence platform for Arab and international importers, sourcing agents, manufacturers, and business travelers. It connects geographic regions with industrial capabilities, shipping routes, wholesale markets, verified factories, business accommodations, and trade services.

### Core Quantitative Targets (Minimum Initial Coverage)
- **Cities**: 300+ (all administrative levels: Municipalities, Prefecture-level, and major County-level industrial cities across 34 provincial divisions)
- **Hotels**: 500+ (business and commercial accommodations near markets, ports, and industrial zones)
- **Seaports**: 100+ (coastal container, bulk, and deepwater terminals with UN/LOCODE)
- **River Ports**: 50+ (Yangtze, Pearl River, and inland waterway trade gateways)
- **Shipping Lines**: 50+ (ocean container carriers with route profiles, Chinese port calls, and Arab/global service lanes)
- **Wholesale & Specialized Markets**: 300+ (categorized by trade specialties and cities)
- **Factories / Manufacturers / Suppliers**: 500+ (verified manufacturing clusters, OEM/ODM centers)
- **Interpreters / Translation Services**: 200+ (commercial negotiation, factory audit guides)
- **Logistics Companies / Freight Forwarders**: 300+ (sea/air freight, customs brokers, warehousing, inspection)
- **Industrial Zones & Development Parks**: 200+ (national high-tech zones, economic development areas)
- **Economic / Free Trade Zones (FTZ / SEZ)**: 100+ (comprehensive bonded zones, pilot FTZs)
- **Airports**: 100+ (commercial and air cargo logistics hubs with IATA/ICAO)
- **Trade Fairs / Exhibitions**: 100+ (Canton Fair, industry expos, recurring dates, and venues)

---

## 2. User Scenarios & Prioritized Journeys

### User Story 1 - Multi-Tier Industrial City Sourcing Hub (Priority: P1)
**Journey**: An Arab importer seeking furniture, sanitary ware, and electronics navigates to the China Directory to identify specialized industrial clusters.
- The user filters by industry (e.g., Furniture) or searches "Foshan" / "Shunde".
- The city page acts as a comprehensive business intelligence hub displaying:
  - Administrative classification and economic overview.
  - Famous manufacturing sectors and product clusters.
  - Linked wholesale markets (e.g., Louvre, Lecong).
  - Nearby ports (Nansha, Foshan Port) and major shipping lines calling there.
  - Verified local business hotels and halal dining options.
  - Local interpreters and logistics forwarders.
  - Verified sources and verification badges.
**Acceptance Scenarios**:
1. **Given** a user navigates to `/china/cities/foshan`, **When** the page loads, **Then** all linked markets, ports, zones, and hotels appear with operational status, source citations, and coordinates.
2. **Given** a user searches for an industrial specialty (e.g., "أجهزة منزلية" or "home appliances"), **When** query is submitted, **Then** matching cities, clusters, and factories are returned with zero latency.

---

### User Story 2 - Ocean Carrier & Port Logistics Routing (Priority: P1)
**Journey**: A supply chain manager needs to determine which shipping lines provide direct or transshipment container services from Ningbo-Zhoushan Port to Jebel Ali, Jeddah, or Alexandria.
- The user accesses the Ports section (`/china/ports/ningbo-zhoushan`) or the Shipping Lines section (`/china/shipping-lines/cosco-shipping`).
- The user views:
  - Port UN/LOCODE (`CNNGB`), terminals, container handling capabilities, and linked industrial hinterlands.
  - Dedicated carrier profiles showing global headquarters, China branch offices, routes to Arab ports, direct vs transshipment services, and tracking portals.
**Acceptance Scenarios**:
1. **Given** a user visits a Shipping Line page, **When** inspecting service routes, **Then** the page details specific Chinese port origins, destination regional ports, container equipment types, and verified office contacts.
2. **Given** a user inspects a Port page, **When** reviewing logistics, **Then** active shipping lines and customs clearance providers serving that port are dynamically listed.

---

### User Story 3 - Trusted Verification & Source Attribution Audit (Priority: P1)
**Journey**: An investor evaluates high-value machinery suppliers and wants to verify which records have been field-inspected vs verified via official online databases.
- The user inspects the verification badge on each profile.
- If the record has been audited on the ground by Consultant Hossam Mabrouk, it displays the distinguished badge:
  `✓ موثّق ومدقّق ميدانيًا بواسطة المستشار التجاري حسام مبروك` with audit date and consultant notes.
- If verified via official government or port authority sources, it displays:
  `تم التحقق من المعلومات عبر مصادر موثوقة / رسمية` with the source agency, URL, and verification timestamp.
- No false claims of field audits exist on un-audited records.
**Acceptance Scenarios**:
1. **Given** any entity in the directory, **When** rendered, **Then** it presents exact source metadata (source name, URL, verification tier, and date).
2. **Given** an entity that has not undergone physical ground inspection, **When** viewed, **Then** it NEVER displays the field-audit badge of Hossam Mabrouk.

---

### User Story 4 - Live Coverage & Integrity Dashboard (Priority: P2)
**Journey**: A compliance auditor or platform administrator visits the directory coverage audit dashboard (`/china/coverage`) to verify dataset integrity against the master prompt targets.
- The dashboard calculates live metrics from the active repository:
  - Total count per category vs minimum prompt target.
  - Breakdown by verification tier (`Source Verified`, `Officially Verified`, `Field Audited`).
  - Source coverage percentage and image coverage percentage.
  - Zero duplicate detection.
**Acceptance Scenarios**:
1. **Given** the coverage dashboard is loaded, **When** calculations execute, **Then** counts are derived directly from the real repository layer without hardcoded mock numbers.

---

## 3. Functional Requirements

### Data Architecture & Ingestion
- **FR-001**: Normalized category datasets MUST be partitioned into structured, typed data files (`src/data/china-directory/`) with batch processing to prevent monolithic memory bloat.
- **FR-002**: An indexing engine (`src/lib/china-directory/`) MUST construct bidirectional relationship tables (`City <-> Port <-> ShippingLine <-> Market <-> Factory <-> Hotel <-> Logistics`).
- **FR-003**: Data ingestion MUST execute strict validation for required fields, coordinates, URLs, and entity types.
- **FR-004**: Deduplication engine MUST detect and merge records sharing identical UN/LOCODE, business registration identifiers, or normalized multilingual names.

### Verification & Brand Attribution
- **FR-005**: Every entity MUST enforce a strict `verificationStatus` enum: `not-verified`, `source-verified`, `officially-verified`, `field-verified`, `field-audited`.
- **FR-006**: The gold badge `تم التوثيق والتدقيق الميداني بواسطة المستشار التجاري حسام مبروك` MUST strictly be reserved for entities with `fieldAudited: true`.
- **FR-007**: Every factual entity MUST retain at least one verifiable source citation (`sourceName`, `sourceUrl`, `sourceType`, `verifiedAt`).

### Discovery, Search & Navigation
- **FR-008**: Multi-dimensional search MUST support Arabic, English, Chinese Hanzi, and Pinyin queries using Fuse.js.
- **FR-009**: Subdomain listings MUST provide server-side filtering by province, city, product category, and verification status with responsive pagination.
- **FR-010**: Clean dynamic routing MUST support canonical paths: `/china`, `/china/coverage`, `/china/[subdomain]`, and `/china/[subdomain]/[slug]`.

---

## 4. Key Entities & Domain Graph

```text
[Province]
   └── [City / Locality] (300+)
         ├── [Seaports & River Ports] (150+) ──> [Shipping Lines] (50+) ──> [Routes]
         ├── [Wholesale Markets] (300+) ──> [Product Categories]
         ├── [Factories & Suppliers] (500+) ──> [Industrial Zones] (200+)
         ├── [Business Hotels] (500+)
         ├── [Interpreters & Services] (200+)
         ├── [Logistics & Forwarders] (300+)
         ├── [Airports & Cargo Hubs] (100+)
         ├── [Economic & Free Trade Zones] (100+)
         └── [Trade Fairs & Expos] (100+)
```

---

## 5. Success Criteria & Quality Verification

- **SC-001 (Volume & Completeness)**: Dataset reaches or exceeds all 13 category targets (totaling >2,700 validated records) without fabricated entities or placeholder text.
- **SC-002 (Verification Integrity)**: 100% of records feature structured source tracking, with zero unauthorized field-audit badge displays.
- **SC-003 (Performance & Build)**: `npm run type-check` and `npm run build` succeed with 0 compiler errors or type warnings.
- **SC-004 (SEO & GEO discoverability)**: Every entity page renders dynamic OpenGraph metadata, structured JSON-LD (Place / Organization / Event), and bilingual breadcrumbs.
