# Phase 0 Research: China Business & Import/Export Directory Architecture

## 1. Objective
Establish technical design decisions to ingest, normalize, index, search, and render 2,700+ commercial records across 13 core categories in Next.js 15 (App Router) without performance degradation, bloated client bundles, or fabricated data.

## 2. Quantitative Targets & Source Feasibility

| Category | Minimum Target | Authoritative Ground Sources | Ingestion Strategy |
| :--- | :--- | :--- | :--- |
| **Cities** | 300+ | National Bureau of Statistics China (NBS), Ministry of Civil Affairs (MCA), Provincial Administrative Divisions | Partitioned by 34 Provincial divisions (Direct-controlled Municipalities, Prefectures, Major County-level industrial cities) |
| **Hotels** | 500+ | China Tourism & Hotel Association, Verified Business Hotel Groups (Jin Jiang, Huazhu, BTG Homeinns, Shangri-La, Marriott Business), Fair complex adjoining hotels | Clustered around Canton Fair, Yiwu Trade City, Shenzhen Futian, Shanghai NECC, Ningbo Port |
| **Seaports** | 100+ | Ministry of Transport of PRC, China Port Association, UN/LOCODE Database | Major coastal hubs (Bohai Rim, Yangtze River Delta, Pearl River Delta, Southeast Coast, Southwest Coast) |
| **River Ports** | 50+ | Yangtze River Waterway Bureau, Pearl River Waterway Administration | Inland trade ports along Yangtze, Pearl, Huai, and Grand Canal |
| **Shipping Lines** | 50+ | Alphaliner Top 100, Ministry of Transport international carrier registries | Global carriers (COSCO, Maersk, CMA CGM, Evergreen, MSC, ONE, Hapag-Lloyd, OOCL, Yang Ming, ZIM, PIL, SITC, Sinotrans, etc.) with verified China port calls & Arab routes |
| **Wholesale Markets** | 300+ | China General Chamber of Commerce, Yiwu China Commodity City, Shunde Louvre, Guangzhou Baima, Huaqiangbei | Categorized by industry: Textiles, Electronics, Furniture, Machinery, Toys, Hardware, Auto Parts, Lighting |
| **Factories / Suppliers** | 500+ | State Administration for Market Regulation (SAMR) enterprise records, Verified Export Manufacturers | Key manufacturing hubs (Guangdong, Zhejiang, Jiangsu, Shandong, Fujian, Hebei) |
| **Interpreters & Services** | 200+ | Translators Association of China (TAC) accredited agencies, Commercial sourcing firms, Factory audit translators | Specialized language pairs: Arabic-Chinese, English-Chinese, French-Chinese with city coverage |
| **Logistics Companies** | 300+ | China Federation of Logistics & Purchasing (CFLP), CIFA, NVOCC registered forwarders | Sea freight, Air cargo, Customs brokers, Bonded warehousing, Pre-shipment inspection |
| **Industrial Zones** | 200+ | Ministry of Commerce (MOFCOM) National Economic & Technological Development Zones (ETDZ), National High-Tech Zones | Structured by leading industries and provincial location |
| **Economic / FTZ Zones** | 100+ | China Pilot Free Trade Zones (Shanghai, Guangdong, Zhejiang, Jiangsu, Hainan, etc.), Comprehensive Bonded Zones | Bonded manufacturing, export processing, tax incentive profiles |
| **Airports** | 100+ | Civil Aviation Administration of China (CAAC), IATA/ICAO registries | Cargo throughput capacity, international freight terminals |
| **Trade Fairs / Expos** | 100+ | China Council for the Promotion of International Trade (CCPIT), UFI approved expos | Canton Fair, Yiwu Fair, CIFF, CMEF, Bauma, CPhI, Automechanika |

## 3. Storage & Memory Architecture: Partitioned Batch Strategy

### Anti-Pattern Avoided:
- Creating a single massive 30MB JSON file loaded on every route causes high memory overhead, slow serverless cold starts, and potential build failures.
- Hardcoding records inside React component files makes pagination and filtering impossible.

### Selected Architecture:
- Store normalized datasets partitioned by category and batch in `src/data/china-directory/[category]/batch-[xxx].json`.
- Compile unified indexed lookup maps in `src/lib/china-directory/index-registry.ts`:
  - Rapid O(1) slug resolution.
  - Relational indexes (`citySlug -> { ports, markets, factories, hotels, logistics }`).
  - Pre-computed counts per category, verification tier, and province for the Coverage Dashboard.
- Server-side search & filtering backed by memory-efficient index scanning and `fuse.js` for full-text Arabic, English, and Chinese queries.

## 4. Verification & Attribution Integrity

### Tiers:
1. `source-verified`: Ground facts confirmed against official government registries, port authorities, carrier schedules, or business associations. Badge: "تم التحقق من المعلومات عبر مصادر موثوقة / رسمية".
2. `field-verified`: Reviewed through physical on-site or field agent verification in China.
3. `field-audited`: Strictly reserved for records inspected and audited directly by Commercial Consultant Hossam Mabrouk. Displays badge: `✓ موثّق ومدقّق ميدانيًا بواسطة المستشار التجاري حسام مبروك`.
4. Non-field-audited records MUST NEVER display the consultant field audit badge.
