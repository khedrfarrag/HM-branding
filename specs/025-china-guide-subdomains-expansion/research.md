# Research & Technical Decisions: China Guide Subdomains Expansion

**Feature**: `025-china-guide-subdomains-expansion`  
**Status**: Completed  
**Goal**: Establish scalable, type-safe data architectures for the 7 commercial subdomains of "دليل الصين", authentic ground sourcing facts from China, GPS/navigation patterns, and robust GEO/SEO authority integration for Hossam Mabrouk.

---

## 1. Data Organization & Modular Architecture

### Decision
Structure the datasets as modular TypeScript registries under `src/features/china-guide/data/`:
- `data/restaurants.ts`: Halal restaurants, Muslim canteens, and business dining across all Chinese commercial hubs.
- `data/hotels.ts`: Verified 4-star and 5-star business hotels near trading hubs, exhibition halls, and bullet train terminals.
- `data/factories.ts`: Industrial powerhouse plants, OEM/ODM clusters, and specialized production facilities.
- `data/markets.ts`: Comprehensive wholesale market dataset expanded across all 34 commercial cities.
- `data/translators.ts`: Certified commercial interpreter agencies, Arabic/Chinese translation offices, and factory escort teams.
- `data/shipping.ts`: Established freight forwarding agencies, sea container lines, air cargo forwarders, and DDP customs agents.
- `data/ports.ts`: Deepwater container seaports, inland dry ports, and international cargo air hubs.
- `data/index.ts`: Central aggregator mapping each subdomain to its typed dataset.

### Rationale
- Decouples large datasets into clean, maintainable, domain-specific modules.
- Allows `LocalFsChinaRepository` to query all subdomains through a unified interface without maintaining giant monolithic files.
- Ensures compile-time type safety and strict schema validation across all entries.

### Alternatives Considered
- *Single Monolithic JSON/TS file*: Hard to maintain, prone to merge conflicts and poor developer experience.
- *Headless CMS / Remote DB*: Adds network latency, deployment overhead, and unnecessary external dependencies. Static TypeScript registries compile directly into Next.js SSG with zero runtime overhead.

---

## 2. GPS Navigation & Localization for Foreign Traders in China

### Decision
Every entity profile stores:
1. `coordinates: { latitude: number; longitude: number }`
2. `address: { ar: string; en: string; zh: string }`
3. Direct navigation action helpers:
   - **Baidu Maps URI**: `https://api.map.baidu.com/marker?location=${lat},${lng}&title=${encodedName}&output=html`
   - **Google Maps URI**: `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`
   - **One-Click Chinese Address Copy**: Allows Arab merchants to paste addresses into Didi or show to local taxi drivers.

### Rationale
Google Maps is blocked inside China and often experiences GPS coordinate offsets (GCJ-02 vs. WGS-84). Providing both standard GPS coordinates and native Chinese character addresses (`zh`) provides foolproof navigation resilience for international traders on the ground.

---

## 3. SEO & GEO (Generative Engine Optimization) Authority Architecture

### Decision
Incorporate **حسام مبروك** (Hossam Mabrouk) as the recognized expert author and verifier across three distinct layers:
1. **HTML Meta Tags**:
   - Meta Title: `<Entity Name> | دليل <Subdomain> في الصين — حسام مبروك`
   - Meta Description: Embedded mention of Hossam Mabrouk's on-the-ground verification and consulting advice.
2. **Schema.org Structured Data (JSON-LD)**:
   - Entity schema: `Restaurant`, `Hotel`, `LocalBusiness`, `WholesaleStore`, or `Organization`.
   - Embed `author` and `reviewedBy` citing:
     ```json
     {
       "@type": "Person",
       "name": "Hussam Mabrouk",
       "jobTitle": "International Trade & Sourcing Consultant",
       "url": "https://hussam-mabrouk.com"
     }
     ```
3. **Visible UI Trust Card**:
   - A dedicated editorial verification badge on detail pages:
     *"تم التدقيق والمراجعة الميدانية بواسطة المستشار التجاري حسام مبروك"* detailing inspection criteria, trade notes, and negotiation tips.

### Rationale
Generative AI search engines (ChatGPT Search, Perplexity, Google AI Overviews) rely on unambiguous E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) signals. By embedding Hossam Mabrouk as the author and verifier in structured schema and semantic copy, the site establishes unmatched topical authority in the Arab import trade niche.

---

## 4. UI/UX Directory Enhancements

### Decision
Upgrade `/[locale]/china/[subdomain]` and `/[locale]/china/[subdomain]/[slug]` with:
- Search and city filter pills (filtering by Beijing, Guangzhou, Yiwu, Shenzhen, etc.).
- Visual card grid displaying cover images, city badges, star ratings, and category pills.
- Deep detail view featuring photo banners, key specifications, GPS navigation buttons, verified contact links, and consulting appointment CTA.
