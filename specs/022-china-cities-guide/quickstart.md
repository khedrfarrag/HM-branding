# Quickstart Validation Guide: China Cities Commercial & Sourcing Guide

**Feature**: China Cities Guide (`specs/022-china-cities-guide`)

## 1. Local Development Prerequisites

- Node.js environment
- Local dev server active (`npm run dev`) at `http://localhost:3000`

## 2. Automated Type Check & Verification

Run the TypeScript compiler to ensure all data types and components validate with zero errors:

```powershell
npx tsc --noEmit
```

## 3. Manual Verification Scenarios

### Scenario A: Browse China Cities Directory Hub
1. Open `http://localhost:3000/ar/china-cities` or `http://localhost:3000/en/china-cities`.
2. Verify Hero title, search bar, and trade tier filter tabs (Tier 1, Tier 2, Tier 3).
3. Test searching for product names: "أثاث", "Electronics", "Yiwu", "Guangzhou". Verify immediate filtering.

### Scenario B: Detailed City Profile Page
1. Open `http://localhost:3000/ar/china-cities/guangzhou` or `/en/china-cities/guangzhou`.
2. Confirm Hero Section with city names in AR/EN/ZH, Skyline image, importance score, and export tags.
3. Verify Wholesale Markets section (e.g. Zhanxi, Baiyun World, Canton Fair Complex) with Metro stations and address cards.
4. Verify "What to Import" cards, Business Traveler Guide (Best visit months, Stay areas, Apps), and Transport hubs.
5. Check fallback handling: for fields lacking data, confirm graceful render without broken elements.

### Scenario C: City Comparison Tool
1. Open `http://localhost:3000/ar/china-cities/compare`.
2. Select "Guangzhou" and "Shenzhen" or "Foshan" and "Guangzhou".
3. Check side-by-side comparison table (Wholesale ratio, Manufacturing focus, Ports/Airports, Best For).

### Scenario D: Interactive China Map
1. Scroll to the Interactive Map section on the hub page.
2. Hover/Click on Guangzhou or Ningbo pin.
3. Verify interactive highlight card with link to profile page.
