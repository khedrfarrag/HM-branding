# Research: Expand Industry Sectors to 30

**Feature**: `021-expand-industry-sectors` | **Date**: 2026-08-25

---

## Research Summary

No NEEDS CLARIFICATION items existed in the Technical Context. Research focused on validating the 30 sector selections against real market data and identifying best practices for rendering large card grids with Framer Motion.

---

## R1: Sector Selection Validation — Market Data Sources

### Decision
All 30 sectors are validated against real international trade data. No speculative or invented sectors.

### Rationale
Each sector was cross-referenced against at least 2 of the following sources:
1. **Canton Fair (Phases 1–3)** — 55 exhibition sections covering 13 major product categories
2. **China → MENA trade data (2025–2026)** — Top import categories for Egypt ($18.8B), Saudi Arabia ($39.7B), and UAE ($105B)
3. **WTO/UNCTAD global merchandise trade statistics** — HS code commodity groups
4. **Industry-standard import/export business sector classifications**

### Source Mapping

| # | Sector | Canton Fair | China→MENA | Global Trade |
|---|---|---|---|---|
| 01 | Electronics & Components | Phase 1 ✅ | #1 export to SA/UAE ✅ | Top 3 global ✅ |
| 02 | Industrial Machinery | Phase 1 ✅ | Top 3 to SA/Egypt ✅ | Top 5 global ✅ |
| 03 | Construction Materials | Phase 1 ✅ | Vision 2030 driver ✅ | — |
| 04 | Automotive Parts | Phase 1 ✅ | Fast-growing segment ✅ | Top 10 global ✅ |
| 05 | Electrical Equipment | Phase 1 ✅ | Infrastructure imports ✅ | — |
| 06 | Hardware & Tools | Phase 1 ✅ | — | Steady B2B ✅ |
| 07 | Iron & Steel | Phase 1 ✅ | Egypt #3 import ✅ | Top 10 global ✅ |
| 08 | Plastics & Rubber | Phase 1 ✅ | — | High-volume mfg ✅ |
| 09 | Solar & Renewables | — | "New Export Trio" ✅ | Growth sector ✅ |
| 10 | EV Batteries & NEVs | — | GCC EV surge ✅ | "New Export Trio" ✅ |
| 11 | Chemicals | Phase 1 ✅ | Major trade ✅ | — |
| 12 | Lighting & LED | Phase 1 ✅ | MENA demand ✅ | — |
| 13 | Agricultural Commodities | Phase 3 ✅ | Food security ✅ | Top 5 global ✅ |
| 14 | Processed Food | Phase 3 ✅ | MENA staple ✅ | — |
| 15 | Cold-Chain & Perishables | — | Logistics niche ✅ | Supply chain ✅ |
| 16 | Spices & Tea | Phase 3 ✅ | Traditional trade ✅ | — |
| 17 | Textiles & Fabrics | Phase 3 ✅ | — | Top 5 global ✅ |
| 18 | Apparel & Garments | Phase 3 ✅ | — | Top 5 global ✅ |
| 19 | Footwear & Leather | Phase 3 ✅ | — | Major mfg sector ✅ |
| 20 | Home Textiles | Phase 3 ✅ | MENA demand ✅ | — |
| 21 | Furniture & Interior | Phase 2 ✅ | GCC demand ✅ | — |
| 22 | Household Appliances | Phase 1 ✅ | Consumer import ✅ | — |
| 23 | Gifts & Décor | Phase 2 ✅ | — | Consumer goods ✅ |
| 24 | Kitchenware & Ceramics | Phase 2 ✅ | — | Consumer staple ✅ |
| 25 | Beauty & Personal Care | — | Fast-growing MENA ✅ | Growth sector ✅ |
| 26 | Medical Devices | Phase 3 ✅ | Post-pandemic growth ✅ | — |
| 27 | Packaging & Printing | — | B2B essential ✅ | Supply chain ✅ |
| 28 | Sports & Recreation | Phase 3 ✅ | MENA lifestyle ✅ | — |
| 29 | Office Supplies | Phase 3 ✅ | — | Steady B2B ✅ |
| 30 | Pet Products | Phase 3 ✅ | Emerging sector ✅ | Fast-growth ✅ |

### Alternatives Considered
- **Including Energy/Oil/Gas**: Rejected — Hussam's business is sourcing/procurement, not commodity trading
- **Including Real Estate**: Rejected — not a product import/export sector
- **Including Telecom Infrastructure**: Merged into Electronics (#01) as components, not a standalone sector
- **Including Toys & Games**: Considered, but replaced with Pet Products (#30) which is a faster-growing emerging category

---

## R2: Framer Motion StaggerReveal with 30+ Items

### Decision
Use the existing `StaggerReveal` / `StaggerItem` pattern with `viewport={{ once: true }}` to ensure cards below the fold only animate when scrolled into view.

### Rationale
- Framer Motion's `staggerChildren` already handles any list length efficiently
- With `viewport: { once: true }`, items only animate on first visibility — no re-render loops
- The existing implementation already uses this pattern

### Alternatives Considered
- **Virtualized list (react-virtuoso)**: Overkill — 30 cards is well within browser render capacity; adding a new package violates §9
- **CSS-only animation**: Less smooth than Framer Motion spring/ease-out curves; would break consistency with rest of site
- **Pagination**: Breaks the visual "catalog" browsing experience; rejected

---

## R3: Image Generation Strategy

### Decision
Generate 25 new sector images using AI image generation with a consistent prompt template to match the existing 5 images' visual style (dark-toned, cinematic, professional product/industry photography).

### Rationale
- The existing 5 images (`electronics.png`, `agriculture.png`, `textiles.png`, `construction.png`, `automotive.png`) have a consistent dark, professional style
- AI generation allows rapid creation of 25 cohesive images
- Each image will be saved as PNG and optimized to under 500KB

### Alternatives Considered
- **Stock photography**: Inconsistent style between images; licensing costs
- **No images (text-only cards)**: Violates premium brand requirement (§1)
- **Shared images with different overlays**: Looks repetitive; violates uniqueness requirement (FR-004)

---

## R4: Category Filter UX Pattern

### Decision
Implement horizontal pill-style filter tabs above the grid. Default to "All Sectors". Client-side filtering with Framer Motion `layout` animation for smooth grid reflow.

### Rationale
- With 30 cards, optional filtering helps users find their sector quickly
- Horizontal pill tabs are a standard, recognizable UX pattern
- Client-side filtering (no API call) keeps the interaction instant
- `AnimatePresence` + `layout` gives smooth card enter/exit transitions

### Alternatives Considered
- **Dropdown filter**: Less discoverable than visible tabs; requires extra click
- **Search box**: Overkill for 30 items; pill tabs are more visual
- **Vertical sidebar filter**: Takes horizontal space; doesn't fit the full-width section layout
