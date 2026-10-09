# Research & Tech Choices: 15 Testimonials Interactive Carousel

## Decisions & Rationale

1. **Carousel Mechanism (Framer Motion vs Swiper.js)**:
   - **Decision**: Framer Motion with custom drag constraints and slide index state.
   - **Rationale**: Project already imports and uses `framer-motion` heavily across `HomePage.tsx`. Avoiding external Swiper CSS dependencies keeps bundle size small and ensures matching glassmorphism styling.

2. **Schema.org Integration**:
   - **Decision**: Inject `AggregateRating` (ratingValue: 5.0, reviewCount: 15) and `Review[]` array into the homepage JSON-LD.
   - **Rationale**: Enables Google Rich Snippets for customer star ratings directly on search results.

3. **AI Corpus (`/llms-full.txt`) Format**:
   - **Decision**: Add Section `## 8. Client Testimonials & Social Proof (آراء وشهادات العملاء)` listing all 15 reviews with author, role, rating, and quote in both AR and EN.
   - **Rationale**: Ensures AI models (ChatGPT, Perplexity, Claude) ingest direct customer feedback when asked about Hussam Mabrouk's reputation and client satisfaction.
