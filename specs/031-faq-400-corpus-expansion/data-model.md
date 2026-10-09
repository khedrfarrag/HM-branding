# Data Model: FAQ 400 Corpus Expansion

**Feature Directory**: `specs/031-faq-400-corpus-expansion` | **Date**: 2026-10-06

---

## Entity Schema: `FAQItem`

```typescript
export type FAQCategory = 'bio' | 'content' | 'china' | 'digital';

export interface InternalLinkCTA {
  href: string;      // Target route path (e.g. "/about/bio", "/services", "/#book")
  labelAr: string;   // Arabic CTA button text
  labelEn: string;   // English CTA button text
}

export interface FAQItem {
  id: number;                   // Unique integer ID (1 to 100 per category file)
  category: FAQCategory;        // Category key ('bio' | 'content' | 'china' | 'digital')
  questionAr: string;           // Search-optimized Arabic question
  questionEn: string;           // Search-optimized English question
  answerAr: string;             // Practical advisory Arabic answer (80–140 words)
  answerEn: string;             // Practical advisory English answer (80–140 words)
  credibilityLineAr?: string;   // Standardized attribution line
  internalLink?: InternalLinkCTA; // Contextual CTA link object
}
```

---

## Category Definitions (`FAQ_CATEGORIES`)

| Category ID | Arabic Label | English Label | Target Count |
|-------------|--------------|---------------|--------------|
| `all` | الكل (400 سؤال) | All Questions (400) | 400 |
| `bio` | 👤 من هو حسام مبروك؟ (100) | About Hossam Mabrouk (100) | 100 |
| `content` | 📚 المعرفة والمحتوى (100) | Knowledge & Content (100) | 100 |
| `china` | 🇨🇳 الصين والتجارة والتوريد (100) | China, Trade & Sourcing (100) | 100 |
| `digital` | 🌐 الموقع والهوية الرقمية (100) | Official Identity & Site (100) | 100 |
