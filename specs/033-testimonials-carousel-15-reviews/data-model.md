# Data Model: 15 Testimonials Feature

## Entity: `TestimonialItem`

```typescript
export interface TestimonialItem {
  id: string;            // Stable unique ID e.g., 't1', 't2' ... 't15'
  quote: string;         // Detailed testimonial content
  author: string;        // Full client name
  role: string;          // Job title and company / location
  rating: number;        // 1 to 5 stars (default: 5)
  category: string;      // 'sourcing' | 'inspection' | 'logistics' | 'verification' | 'expos' | 'consultation'
}
```

## Dictionary Integration (`ar.json` & `en.json`)

```json
"testimonials": {
  "eyebrow": "آراء العملاء",
  "title": "شهادات نعتز بها من شركاء النجاح.",
  "items": [
    {
      "quote": "...",
      "author": "...",
      "role": "...",
      "rating": 5
    }
    // ... 15 items total
  ]
}
```
