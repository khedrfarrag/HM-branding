# UI & API Contracts: China Cities Commercial & Sourcing Guide

**Feature**: China Cities Guide (`specs/022-china-cities-guide`)

## 1. Route Contracts

| Route Path | Description | Access | Render Strategy |
|------------|-------------|--------|-----------------|
| `/[locale]/china-cities/` | Main directory hub with search, filters, tier lists, & interactive map | Public | SSG / ISR |
| `/[locale]/china-cities/[slug]/` | Dynamic detailed city profile page (Guangzhou, Shenzhen, Yiwu, etc.) | Public | SSG with `generateStaticParams` |
| `/[locale]/china-cities/compare/` | Interactive city comparison matrix tool | Public | SSG / Client interactive |

## 2. Component Interface Contracts

### 2.1 `CityCard.tsx`
```typescript
interface CityCardProps {
  city: ICity;
  locale: 'ar' | 'en';
  variant?: 'compact' | 'detailed' | 'featured';
}
```

### 2.2 `ChinaInteractiveMap.tsx`
```typescript
interface ChinaInteractiveMapProps {
  cities: ICity[];
  selectedCitySlug?: string;
  onSelectCity: (slug: string) => void;
  locale: 'ar' | 'en';
}
```

### 2.3 `CityComparisonMatrix.tsx`
```typescript
interface CityComparisonMatrixProps {
  allCities: ICity[];
  initialSelectedSlugs?: [string, string];
  locale: 'ar' | 'en';
}
```

### 2.4 `WholesaleMarketCard.tsx`
```typescript
interface WholesaleMarketCardProps {
  market: IWholesaleMarket;
  locale: 'ar' | 'en';
}
```

## 3. i18n Dictionary Contract Additions (`ar.json` and `en.json`)

Namespace: `"chinaCities"`

```json
{
  "chinaCities": {
    "title": "دليل مدن الصين التجاري الشامل",
    "subtitle": "اكتشف المدن والأسواق والمناطق الصناعية والموانئ في الصين للمستوردين والتجار",
    "searchPlaceholder": "ابحث عن مدينة، منتج، سوق جملة، أو منطقة صناعية...",
    "allCities": "عرض جميع المدن",
    "tier1": "المدن التجارية الرئيسية (Tier 1)",
    "tier2": "المدن الصناعية المتخصصة (Tier 2)",
    "tier3": "المدن والمناطق الواعدة (Tier 3)",
    "topCommercialCities": "أهم المدن التجارية",
    "manufacturingHubs": "المراكز الصناعية",
    "wholesaleMarkets": "أسواق الجملة الضخمة",
    "industrialZones": "المناطق الصناعية",
    "logisticsHubs": "مراكز الشحن واللوجستيات",
    "compareCities": "مقارنة المدن التجاري",
    "whatToImport": "ماذا تستورد من هذه المدينة؟",
    "businessTravelerGuide": "دليل المسافر التجاري",
    "bestFor": "هذه المدينة مناسبة لـ",
    "nearestPortsAirports": "الموانئ والمطارات القريبة",
    "informationComingSoon": "المعلومات قيد التحديث وسوف تتوفر قريباً",
    "relatedCities": "مدن تجارية ذات صلة",
    "relatedProducts": "منتجات وصناعات مرتبطة"
  }
}
```
