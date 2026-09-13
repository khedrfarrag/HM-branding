# Quickstart & Validation Scenarios: China Guide Subdomains Expansion

**Feature**: `025-china-guide-subdomains-expansion`  
**Status**: Ready for Validation  

---

## 1. Prerequisites

- Next.js development server running (`npm run dev`) or static build (`npm run build`).
- Node.js 18+ and TypeScript 5+.

---

## 2. Validation Scenarios

### Scenario 1: Subdomain Hub Listing & City Filtering
1. Open browser to `/ar/china/hotels` and `/en/china/hotels`.
2. Verify visual cards are rendered with real hotels across Chinese cities (e.g. Guangzhou, Yiwu, Shenzhen, Beijing).
3. Check star ratings (e.g., 5.0 ★), city badges, and cover imagery.
4. Verify zero references to `sample-01`.

### Scenario 2: Deep Entity Profile & GPS Navigation
1. Click any establishment card (e.g., `/ar/china/restaurants/jubaoyuan-halal-hotpot-beijing` or `/ar/china/hotels/garden-hotel-guangzhou`).
2. Verify the page displays:
   - Full bilingual title and authentic Chinese name (`zh`).
   - HD Cover photo and verified rating.
   - Exact GPS coordinates with "Open in Maps" (Google & Baidu) buttons.
   - Physical address with one-click copy in Chinese for taxi drivers.
   - Official website or verified contact details.
   - Verification badge from **المستشار التجاري حسام مبروك**.

### Scenario 3: Authority SEO & GEO Verification
1. Inspect page `<head>` on any subdomain profile page.
2. Verify OpenGraph, Twitter, and canonical meta tags contain "حسام مبروك" and "Hussam Mabrouk".
3. Validate Schema.org JSON-LD structured script containing:
   - Specific entity schema (`Restaurant`, `Hotel`, `LocalBusiness`, `WholesaleStore`, or `Organization`).
   - `author` & `reviewedBy` linking to Hussam Mabrouk's consultant persona.

### Scenario 4: Strict Type Checking & SSG Build
Run:
```bash
npm run type-check
npm run build
```
Verify 0 compilation errors and successful pre-rendering of all dynamic localized routes.
