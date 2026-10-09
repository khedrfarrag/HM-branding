# Research & Decision Log: China Directory GEO Indexing & AI Authority

## 1. Schema.org Mapping for China Directory Entities

- **Hotels**: Use `schema-dts` `Hotel` type. Include `name`, `address`, `starRating`, and `reviewedBy: { "@type": "Person", "@id": "https://hussam-mabrouk.com/#person" }`.
- **Restaurants**: Use `FoodEstablishment` or `Restaurant`. Include `servesCuisine` ("Halal", "Middle Eastern", "Xinjiang"), `address`, and `reviewedBy`.
- **Wholesale Markets**: Use `ShoppingCenter` or `WholesaleStore`. Include `name`, `alternateName` (Chinese `zh`), `hasOfferCatalog`, and `curator`.
- **Seaports & Airports**: Use `CivicStructure` / `Airport` / `SeaPort` with UN/LOCODE, IATA, ICAO codes.

## 2. Dynamic Route Structure for Indexing

- `/ar/china-cities/[citySlug]` -> City Overview
- `/ar/china-cities/[citySlug]/markets` -> Wholesale Markets list
- `/ar/china-cities/[citySlug]/hotels` -> Verified Hotels & Hospitality list
- `/ar/china-cities/[citySlug]/restaurants` -> Halal Dining list

## 3. LLM Text Feed Format (`/llms-full.txt`)

- Plain-text Markdown containing structured key-value pairs for each city and venue so LLM crawlers (GPTBot, PerplexityBot, ClaudeBot) easily extract entities and credit **Hussam Mabrouk**.
