# Implementation Plan: China Business & Import/Export Directory

**Branch**: `026-china-business-directory` | **Date**: 2026-09-13 | **Spec**: [spec.md](file:///g:/hossam%20mabrouk/specs/026-china-business-directory/spec.md)

**Input**: User mandate for a comprehensive, production-grade, source-backed China Business & Import/Export Directory meeting minimum quantitative thresholds across 13 categories (2,700+ entities) with strict verification integrity.

---

## 1. Executive Summary

We are upgrading the China Guide module into a high-capacity, source-verified **China Business & Import/Export Directory**. The system addresses the complete commercial journey: discovering industrial manufacturing cities, locating specialized wholesale markets and factories, planning container shipping routes via verified carriers and ports, booking business accommodations, and contracting interpreters and logistics providers.

### Key Architectural Pillars:
1. **Partitioned Ingestion Engine**: Structured JSON/TS dataset batches under `src/data/china-directory/` to ensure high performance and maintainable bundle sizes.
2. **Unified Relational Index Registry**: Memory-optimized O(1) index tables linking Cities, Ports, Shipping Lines, Markets, Factories, Hotels, and Zones.
3. **Rigorous Verification & Attribution**: Clear separation between `Source Verified` ("تم التحقق عبر مصادر موثوقة") and `Field Audited` ("تم التوثيق والتدقيق الميداني بواسطة المستشار التجاري حسام مبروك"), with absolute zero fabrication of field audits.
4. **Live Coverage Dashboard**: Real-time calculated audit page (`/china/coverage` and `/china`) reporting active counts vs master prompt targets.
5. **Multi-dimensional Search & Server Pagination**: Arabic, English, Hanzi, and Pinyin fuzzy queries with zero client latency.

---

## 2. Technical Context

- **Framework**: Next.js 15.1.0 (App Router), React 19, TypeScript 5.7.2
- **Styling**: Tailwind CSS v4, Lucide React icons
- **Search Engine**: `fuse.js` (fuzzy multi-key token matching)
- **Data Architecture**: Partitioned batch datasets in `src/data/china-directory/`, abstracted via `src/repositories/local-fs/china-directory.ts` implementing domain interface `IChinaDirectoryRepository`
- **Verification Integrity**: Strict metadata flags with audit trail (`sources`, `verificationStatus`, `fieldAudited`, `verifiedAt`)
- **Performance Budget**: Static Generation (SSG) / ISR for entity hubs, client bundle payload < 60KB per route

---

## 3. Constitution Check

- [x] **Strict TypeScript**: Full strict mode with explicit interfaces and zero `any` or loose casts.
- [x] **App Router Boundaries**: Data access isolated in server components and repository adapters; client components restricted to interactive filters and search bars.
- [x] **No Mock/Fake Records**: All 2,700+ target entities correspond to genuine, verified Chinese cities, ports, container carriers, wholesale markets, industrial facilities, and licensed businesses with valid coordinates and source URLs.
- [x] **Brand Integrity**: The name and badge of "المستشار التجاري حسام مبروك" are applied strictly to verified/audited items, protecting trust and authority.
- [x] **WCAG 2.2 AA & SEO**: Dynamic schema.org JSON-LD (Place, Organization, Event), canonical URLs, semantic headings, and keyboard navigation.

---

## 4. Target Coverage & Dataset Ingestion Strategy

| Category | Minimum Target | Source Authority | Data File Location |
| :--- | :--- | :--- | :--- |
| **Cities** | 300+ | NBS China, MCA | `src/data/china-directory/cities/` |
| **Hotels** | 500+ | CTHA, Business Hotel Chains | `src/data/china-directory/hotels/` |
| **Seaports** | 100+ | MOT China, UN/LOCODE | `src/data/china-directory/ports/seaports.json` |
| **River Ports** | 50+ | Yangtze/Pearl River Waterway Bureau | `src/data/china-directory/ports/river-ports.json` |
| **Shipping Lines** | 50+ | Alphaliner, Carrier Registries | `src/data/china-directory/shipping-lines/` |
| **Wholesale Markets** | 300+ | China Chamber of Commerce | `src/data/china-directory/markets/` |
| **Factories & Suppliers** | 500+ | SAMR Enterprise Data, Export Clusters | `src/data/china-directory/factories/` |
| **Interpreters & Services** | 200+ | TAC, Verified Commercial Agencies | `src/data/china-directory/translators/` |
| **Logistics & Forwarders** | 300+ | CFLP, CIFA NVOCC | `src/data/china-directory/logistics/` |
| **Industrial Zones** | 200+ | MOFCOM National Development Zones | `src/data/china-directory/industrial-zones/` |
| **Economic / FTZ Zones** | 100+ | State Council Pilot FTZ Portals | `src/data/china-directory/economic-zones/` |
| **Airports** | 100+ | CAAC, IATA/ICAO | `src/data/china-directory/airports/` |
| **Trade Fairs / Expos** | 100+ | CCPIT, UFI | `src/data/china-directory/trade-fairs/` |

---

## 5. Execution Phases

### Phase 1: Project Audit & Foundation Setup
- Validate existing `china-cities` and `china` routes to ensure full backward compatibility.
- Register expanded subdomains in `ChinaSubdomain` (`shipping-lines`, `logistics`, `industrial-zones`, `economic-zones`, `airports`, `trade-fairs`).

### Phase 2: Domain Modeling & Contracts
- Create `src/domains/china-directory/entities.ts` and `src/domains/china-directory/repository.ts`.
- Define unified types for source citations, verification tiers, coordinates, and entity relationships.

### Phase 3: Ingestion & Data Population
- Build modular, source-backed datasets by category and batches in `src/data/china-directory/`.
- Verify coordinates, phone numbers/websites (or explicit `Not publicly available`), and source URLs.
- Build relationship mapping engine in `src/lib/china-directory/index-registry.ts`.

### Phase 4: Verification & Attribution Badging
- Implement `ChinaVerificationBadge.tsx` displaying the exact tier:
  - `field-audited`: Gold badge "تم التوثيق والتدقيق الميداني بواسطة المستشار التجاري حسام مبروك".
  - `source-verified`: Emerald badge "تم التحقق من المعلومات عبر مصادر موثوقة / رسمية".
  - `not-verified`: Neutral review status.

### Phase 5: Routing & UI Components
- Upgrade `/china` hub landing page with all 13 categories.
- Create `/china/coverage` real-time live database audit dashboard.
- Update `/china/[subdomain]` with interactive category filters, province filters, Fuse.js search, and server pagination.
- Enhance `/china/[subdomain]/[slug]` with rich relational cards (linked ports, shipping lines, markets, hotels, and sourcing notes).

### Phase 6: QA, Build & Compliance Verification
- Execute `npm run type-check` and `npm run build`.
- Generate mandatory Final Compliance Audit Report comparing live counts against prompt targets.
