# Contract: Navigation Configuration

**Feature**: 006-information-architecture  
**File**: `src/config/navigation.ts`  
**Related**: [architecture.md](../architecture.md) · [spec.md](../spec.md) Appendix A

---

## UX Rationale (Ratified 2026-07-09)

This contract reflects a **5-item primary header** optimized for Arabic B2B importers visiting a personal-brand consulting site.

### Why not the original 7-item contract?

| Original item | Decision | Reason |
|---------------|----------|--------|
| Home | Removed from header | Logo returns home — duplicate nav item wastes space |
| Success Stories | Footer only | Social proof; users discover via Services/Experiences pages |
| Contact | CTA button only | "احجز مكالمة" is the conversion action — not a nav label |

### Why not the previous 6-item implementation?

| Previous item | Decision | Reason |
|---------------|----------|--------|
| About Hussam (first) | Footer column | Cold traffic seeks solutions first, bio second |
| Media Room (top-level) | Under About footer column | Authority content, not a primary commercial path |
| China | **Added to header** | Core differentiator — was missing entirely |

### Primary header rule

**Exactly 5 items**, ordered by user intent funnel:

1. Learn → 2. Experience → 3. Buy service → 4. China reference → 5. Stay updated

Each item MUST have a valid hub `href` (index page). `children` are used in footer and future mega-menu — not yet rendered in Header v1.

---

## Primary Navigation Contract

```typescript
// Order is fixed. Length MUST remain exactly 5 in v1.
export const primaryNav: NavItem[] = [
  {
    labelAr: "المعرفة",
    labelEn: "Knowledge",
    href: "/knowledge",
    children: [
      { labelAr: "المقالات", labelEn: "Articles", href: "/knowledge" },
      { labelAr: "قاموس المصطلحات", labelEn: "Glossary", href: "/knowledge/glossary" },
      { labelAr: "الأسئلة الشائعة", labelEn: "FAQ", href: "/knowledge/faq" },
      { labelAr: "التحميلات", labelEn: "Downloads", href: "/downloads" },
    ],
  },
  {
    labelAr: "الخبرات",
    labelEn: "Experiences",
    href: "/experiences",
    children: [
      { labelAr: "رحلات الأعمال", labelEn: "Business Trips", href: "/experiences/business-trips" },
      { labelAr: "جولات المصانع", labelEn: "Factory Tours", href: "/experiences/factory-tours" },
      { labelAr: "برنامج كانتون", labelEn: "Canton Fair", href: "/experiences/canton-fair-programs" },
      { labelAr: "برامج الشركات", labelEn: "Corporate Programs", href: "/experiences/corporate-programs" },
      { labelAr: "VIP", labelEn: "VIP Experiences", href: "/experiences/vip-experiences" },
      { labelAr: "الإرشاد الخاص", labelEn: "Private Mentorship", href: "/experiences/private-mentorship" },
    ],
  },
  {
    labelAr: "الخدمات",
    labelEn: "Services",
    href: "/services",
    children: [
      { labelAr: "مصادر المنتجات", labelEn: "Product Sourcing", href: "/services/sourcing" },
      { labelAr: "فحص الجودة", labelEn: "Quality Control", href: "/services/quality-control" },
      { labelAr: "التحقق من الموردين", labelEn: "Supplier Verification", href: "/services/verification" },
    ],
  },
  {
    labelAr: "دليل الصين",
    labelEn: "China Guide",
    href: "/china",
    children: [
      { labelAr: "المدن", labelEn: "Cities", href: "/china/cities" },
      { labelAr: "الأسواق", labelEn: "Markets", href: "/china/markets" },
      { labelAr: "المصانع", labelEn: "Factories", href: "/china/factories" },
      { labelAr: "الموانئ", labelEn: "Ports", href: "/china/ports" },
    ],
  },
  {
    labelAr: "ذكاء التجارة",
    labelEn: "Trade Intel",
    href: "/trade-intelligence",
    children: [
      { labelAr: "أخبار الشحن", labelEn: "Shipping News", href: "/trade-intelligence/shipping-news" },
      { labelAr: "تحديثات الجمارك", labelEn: "Customs Updates", href: "/trade-intelligence/customs-updates" },
      { labelAr: "أسعار العملات", labelEn: "Currency Rates", href: "/trade-intelligence/currency-rates" },
      { labelAr: "تنبيهات سلسلة التوريد", labelEn: "Supply Chain Alerts", href: "/trade-intelligence/supply-chain-alerts" },
    ],
  },
];
```

**Rules**:
- Array length MUST remain exactly **5** in v1.
- `href` values are path segments **without** locale prefix.
- `getNavigationConfig(locale)` prepends `/${locale}` to all hrefs.
- Header CTA (not counted in the 5): `{ labelAr: "احجز مكالمة", labelEn: "Book a Call", href: "/booking/consultation/general" }`

---

## Footer Navigation Contract

Exactly **5 columns** — holds secondary discovery paths absent from the header:

```typescript
export const footerNav: FooterColumn[] = [
  {
    labelAr: "عن حسام",
    labelEn: "About",
    links: [
      { labelAr: "السيرة الذاتية", labelEn: "Biography", href: "/about/bio" },
      { labelAr: "الإنجازات", labelEn: "Achievements", href: "/about/achievements" },
      { labelAr: "الشهادات", labelEn: "Certificates", href: "/about/certificates" },
      { labelAr: "المسيرة المهنية", labelEn: "Timeline", href: "/about/timeline" },
      { labelAr: "الوسائط", labelEn: "Media", href: "/media" },
    ],
  },
  {
    labelAr: "المعرفة",
    labelEn: "Knowledge",
    links: [/* mirrors Knowledge children */],
  },
  {
    labelAr: "الخبرات",
    labelEn: "Experiences",
    links: [/* mirrors Experiences children */],
  },
  {
    labelAr: "الخدمات",
    labelEn: "Services",
    links: [
      /* mirrors Services children */
      { labelAr: "قصص النجاح", labelEn: "Success Stories", href: "/success-stories" },
      { labelAr: "تواصل معنا", labelEn: "Contact", href: "/contact" },
    ],
  },
  {
    labelAr: "الصين والتجارة",
    labelEn: "China & Trade",
    links: [
      /* mirrors China + Trade Intel hub links */
    ],
  },
];
```

**Rules**:
- Exactly 5 columns.
- Success Stories and Contact live in the Services footer column — not the header.
- Media lives under About — not a primary nav item.

---

## Implementation Status

| Item | Status |
|------|--------|
| `src/config/navigation.ts` | ✅ Aligned to this contract (2026-07-09) |
| `src/components/Header.tsx` | ✅ Logo → home, CTA → booking, 5 header links |
| `src/components/Footer.tsx` | ✅ 5-column footer per contract |
| Header mega-menu (`children`) | Not yet implemented — v2 task |
| Hub index pages (`/knowledge`, `/experiences`, etc.) | Pending — routes must exist before launch |
