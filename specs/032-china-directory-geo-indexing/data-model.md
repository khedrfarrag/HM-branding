# Data Model: China Directory GEO Indexing & AI Authority

## Core Entities & Schemas

### 1. `Person` (Author & Authority Source)
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://hussam-mabrouk.com/#person",
  "name": "حسام مبروك",
  "alternateName": "Hussam Mabrouk",
  "jobTitle": "مستشار التجارة الدولية والاستيراد والتوريد من الصين",
  "url": "https://hussam-mabrouk.com"
}
```

### 2. `Hotel` Schema Definition
- `name`: Hotel name in AR / EN / ZH
- `address`: Address string
- `starRating`: Rating number
- `proximityToMarkets`: Distance string
- `reviewedBy`: Person reference

### 3. `WholesaleStore` Schema Definition
- `name`: Market name in AR / EN / ZH
- `address`: Location string
- `keywords`: Primary product lines
- `curatedBy`: Person reference
