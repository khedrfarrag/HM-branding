# Data Model: Hero Section — Personal Brand Repositioning

**Feature**: 018-hero-personal-brand-reposition
**Date**: 2026-08-12

## Dictionary Schema Changes

### hero object (both ar.json and en.json)

No new TypeScript types are required — the existing `HomeDictionary` type is inferred from the dictionary JSON files via `getDictionary`. Adding keys to both JSON files automatically updates the inferred type.

### Modified Keys

| Key | Type | AR Value | EN Value |
|-----|------|----------|---------|
| `hero.badge` | `string` | خبير التجارة والتوريد والتصنيع من الصين | China Trade, Sourcing & Manufacturing Expert |
| `hero.subtitle` | `string` | Already updated | Replace with new EN copy |
| `hero.phrases` | `string[]` | Already updated (3 items) | Replace all 3 with EN equivalents |
| `hero.ctaPrimary` | `string` | استكشف المعرفة | Explore the Knowledge |
| `hero.ctaSecondary` | `string` | احجز استشارة | Book a Consultation |

### New Keys

```json
"trustBar": {
  "labels": [
    { "text": "..." },
    { "text": "..." },
    { "text": "..." },
    { "text": "..." },
    { "text": "..." }
  ]
}
```

**AR trustBar.labels**:
1. خبرة عملية
2. توريد وتصنيع
3. استيراد وتصدير
4. تجارة مع الصين
5. سلاسل الإمداد

**EN trustBar.labels**:
1. Practical Experience
2. Sourcing & Manufacturing
3. Import & Export
4. China Trade
5. Supply Chain

## TrustBar Component Interface

```typescript
// src/features/home/components/TrustBar.tsx

interface TrustBarLabel {
  text: string;
}

interface TrustBarProps {
  labels: TrustBarLabel[];
  locale: string;
}
```

## No new entities, no database schema, no API contracts
This feature is purely a UI copy update + new presentational component.
