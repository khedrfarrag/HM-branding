# Quickstart Validation Guide: China Cities Comprehensive Encyclopedia Expansion

**Feature**: `023-china-cities-expansion`  
**Status**: Ready for Implementation  

---

## 1. Prerequisites & Environment Check

Verify Node.js and TypeScript environment:
```powershell
node -v
npm run type-check
```

---

## 2. Directory Validation

Confirm modular directory layout exists:
```powershell
Test-Path src/features/china-cities/data/cities
```

Expected modules:
- `src/features/china-cities/data/cities/shenzhen.ts` (Pilot)
- `src/features/china-cities/data/cities/index.ts` (Registry aggregator)

---

## 3. Data Integrity & Schema Tests

Run automated schema and coverage verification:
```powershell
node -e "
const { CHINA_CITIES_DATA } = require('./src/features/china-cities/data/cities');
console.log('Total Cities Registered:', CHINA_CITIES_DATA.length);

const sz = CHINA_CITIES_DATA.find(c => c.slug === 'shenzhen');
if (!sz) throw new Error('Shenzhen missing!');

console.log('Shenzhen Wholesale Markets:', sz.wholesaleMarkets?.length ?? 0);
console.log('Shenzhen Districts:', sz.districts?.length ?? 0);
console.log('Shenzhen Industrial Zones:', sz.industrialZones?.length ?? 0);
console.log('Shenzhen Trade Fairs:', sz.tradeFairs?.length ?? 0);
console.log('Shenzhen Hotels:', sz.businessTravelGuide?.recommendedHotels?.length ?? 0);
console.log('Shenzhen Halal Restaurants:', sz.businessTravelGuide?.recommendedRestaurants?.length ?? 0);
"
```

---

## 4. End-to-End Page Verification

1. Start development server:
   ```powershell
   npm run dev
   ```
2. Navigate to:
   - Arabic: `http://localhost:3000/ar/china-cities/shenzhen`
   - English: `http://localhost:3000/en/china-cities/shenzhen`
3. Verify that:
   - All wholesale markets appear with Chinese names, English, and Arabic.
   - All districts (Futian, Luohu, Nanshan, Bao'an, Longhua, etc.) are rendered.
   - Trade fairs, hotels, and halal restaurants render with zero errors.
   - Layout is fluid, responsive, and has zero console warnings.
