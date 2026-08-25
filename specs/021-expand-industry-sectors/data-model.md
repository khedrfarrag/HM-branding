# Data Model: Expand Industry Sectors to 30

**Feature**: `021-expand-industry-sectors` | **Date**: 2026-08-25

---

## Entities

### Sector

A single trade industry displayed as a card in the Industries section on the homepage.

| Field | Type | Required | Description |
|---|---|---|---|
| `idx` | `string` | ✅ | Display label combining number and category name (e.g., `"01 / Electronics & Technology"`) |
| `title` | `string` | ✅ | Descriptive sector title shown on the card (e.g., `"Consumer Electronics & Components"`) |
| `desc` | `string` | ✅ | Short description revealed on hover (1–2 sentences) |
| `slug` | `string` | ✅ | **NEW** — Unique kebab-case identifier mapping to the sector image file (e.g., `"electronics"` → `/images/sectors/electronics.png`) |
| `category` | `string` | ✅ | **NEW** — Category group key for filtering (e.g., `"industrial"`, `"energy"`, `"food"`, `"textiles"`, `"consumer"`, `"professional"`) |

**Constraints**:
- `slug` must be unique across all 30 sectors
- `slug` must correspond to a file in `public/images/sectors/{slug}.png`
- `category` must match one of the keys in `industries.categories`

### CategoryGroup

A filter tab used to group and filter sectors by broad category.

| Field | Type | Required | Description |
|---|---|---|---|
| `key` | `string` | ✅ | Unique identifier (e.g., `"industrial"`, `"all"`) |
| `label` | `string` | ✅ | Display label for the filter tab (e.g., `"Industrial & Manufacturing"`) |

**Constraints**:
- `key: "all"` is a reserved value that shows all sectors (no filtering)
- Each `key` must be unique

---

## Relationships

```text
CategoryGroup (1) ──── has many ────▶ Sector (N)
                       via sector.category === categoryGroup.key
```

- Every Sector belongs to exactly one CategoryGroup (via the `category` field)
- The "all" CategoryGroup is virtual — it matches all sectors regardless of category

---

## Category → Sector Mapping

| Category Key | Category Label (EN) | Sector Numbers |
|---|---|---|
| `industrial` | Industrial & Manufacturing | 01–08 |
| `energy` | Energy & Chemicals | 09–12 |
| `food` | Food & Agriculture | 13–16 |
| `textiles` | Textiles & Fashion | 17–20 |
| `consumer` | Consumer & Lifestyle | 21–25 |
| `professional` | Health, Tech & Professional | 26–30 |

---

## Slug → Image Mapping

| Slug | Image File | Sector # |
|---|---|---|
| `electronics` | `electronics.png` | 01 |
| `machinery` | `machinery.png` | 02 |
| `construction` | `construction.png` | 03 |
| `automotive` | `automotive.png` | 04 |
| `electrical` | `electrical.png` | 05 |
| `hardware-tools` | `hardware-tools.png` | 06 |
| `iron-steel` | `iron-steel.png` | 07 |
| `plastics-rubber` | `plastics-rubber.png` | 08 |
| `solar-renewables` | `solar-renewables.png` | 09 |
| `ev-batteries` | `ev-batteries.png` | 10 |
| `chemicals` | `chemicals.png` | 11 |
| `lighting-led` | `lighting-led.png` | 12 |
| `agriculture` | `agriculture.png` | 13 |
| `processed-food` | `processed-food.png` | 14 |
| `cold-chain` | `cold-chain.png` | 15 |
| `spices-tea` | `spices-tea.png` | 16 |
| `textiles` | `textiles.png` | 17 |
| `apparel` | `apparel.png` | 18 |
| `footwear-leather` | `footwear-leather.png` | 19 |
| `home-textiles` | `home-textiles.png` | 20 |
| `furniture` | `furniture.png` | 21 |
| `household-appliances` | `household-appliances.png` | 22 |
| `gifts-decor` | `gifts-decor.png` | 23 |
| `kitchenware` | `kitchenware.png` | 24 |
| `beauty-cosmetics` | `beauty-cosmetics.png` | 25 |
| `medical-devices` | `medical-devices.png` | 26 |
| `packaging-printing` | `packaging-printing.png` | 27 |
| `sports-recreation` | `sports-recreation.png` | 28 |
| `office-supplies` | `office-supplies.png` | 29 |
| `pet-products` | `pet-products.png` | 30 |

---

## State Transitions

No state transitions — sectors are static content. The only dynamic state is the client-side `activeCategory` filter, which defaults to `"all"` on page load.

```text
Page Load → activeCategory = "all" → Show all 30 sectors
User clicks tab → activeCategory = "{key}" → Filter to matching sectors
User clicks "All" → activeCategory = "all" → Show all 30 sectors
```
