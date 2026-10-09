# Phase 1 Data Model: Comprehensive FAQ Knowledge Base (200 Items)

## 1. Overview
This document specifies the data model for the 200 FAQ items knowledge base, encompassing category categorization, editorial attribution, question-answer pairs, and contextual internal CTA links.

---

## 2. Entities & Interfaces

### 2.1 Category Type Definition
```typescript
export type FAQCategoryKey = 'bio' | 'content' | 'china' | 'digital';

export interface FAQCategoryMetadata {
  id: 'all' | FAQCategoryKey;
  labelAr: string;
  labelEn: string;
  count: number;
}
```

### 2.2 FAQ Item Contract
```typescript
export interface FAQItem {
  /** Unique sequential identifier from 1 to 200 */
  id: number;

  /** Category classification */
  category: FAQCategoryKey;

  /** Natural search query in Arabic (User query format) */
  questionAr: string;

  /** English translation of the question */
  questionEn: string;

  /** Structured advisory response in Modern Standard Arabic (80–140 words) */
  answerAr: string;

  /** English translation or executive summary of the response */
  answerEn: string;

  /** Approved advisory credibility line attribution */
  credibilityLineAr?: string;

  /** Contextual internal link CTA directing users to deeper resources */
  internalLink?: {
    href: string;
    labelAr: string;
    labelEn: string;
  };
}
```

---

## 3. Categories & Item Allocations

| Category Key | Arabic Title | English Title | Item Range | Count | Primary Focus |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `bio` | من هو حسام مبروك؟ | Who is Hossam Mabrouk? | 1–50 | 50 | Advisory background, consulting scope, risk philosophy, personal branding separation. |
| `content` | المعرفة والمحتوى | Knowledge and Content | 51–100 | 50 | Landed cost, pricing, business formation, common import mistakes, educational tools. |
| `china` | الصين والتجارة والتوريد | China, Trade, and Sourcing | 101–150 | 50 | Factories vs. traders, Alibaba, Canton Fair, quality control, Incoterms, shipping. |
| `digital` | الموقع والهوية الرقمية | Website and Digital Identity | 151–200 | 50 | Site purpose, editorial independence, consultation booking, disclaimer transparency. |

---

## 4. Validation Rules

- **Word Count**: `answerAr` MUST contain between 80 and 140 words.
- **Sequential IDs**: `id` MUST be strictly unique and sequential from 1 to 200.
- **Disclaimers**: When `category` is `content` or `china` and involves tax, legal, or customs requirements, `answerAr` MUST include language instructing the user to verify with licensed customs brokers or government authorities.
- **No Direct Execution / Sales**: Content MUST NOT claim direct product inventory or guaranteed investment returns.
- **Link Integrity**: `internalLink.href` MUST resolve to a valid internal route (e.g., `/about/bio`, `/services`, `/china-directory`, `/trade-intelligence`, `/tools/landed-cost-calculator`, `/contact`).
