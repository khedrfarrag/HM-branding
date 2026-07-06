# Data Model: Typography & Spacing Design Tokens

This document defines the canonical token schema that governs all typographic and spacing decisions.

---

## 1. Font Family Tokens

| Token Name | Arabic Locale | English Locale |
|:---|:---|:---|
| `--font-display` | `Beiruti` | `Bricolage Grotesque` |
| `--font-body` | `Beiruti` | `Inter` |
| `--font-mono` | `JetBrains Mono` | `JetBrains Mono` |
| `--font-arabic` | `Beiruti` | — |

---

## 2. Type Scale Tokens (Fluid)

| Token | `clamp()` value | Rendering Context |
|:---|:---|:---|
| `--fs-display` | `clamp(3rem, 7vw, 6rem)` | Hero H1 |
| `--fs-h1` | `clamp(2.4rem, 4.6vw, 4rem)` | Page-level H1 |
| `--fs-h2` | `clamp(1.8rem, 3.2vw, 2.8rem)` | Section headings |
| `--fs-h3` | `clamp(1.3rem, 2vw, 1.75rem)` | Sub-section titles |
| `--fs-body-lg` | `clamp(1.05rem, 1.4vw, 1.2rem)` | Lead paragraphs |
| `--fs-body` | `1rem` | Standard body copy |
| `--fs-small` | `0.875rem` | Secondary descriptions |
| `--fs-micro` | `0.72rem` | Eyebrow labels, captions |

---

## 3. Font Weight Tokens

| Token | Value | Usage |
|:---|:---|:---|
| `--fw-light` | 300 | Body copy, descriptions |
| `--fw-regular` | 400 | Standard body (EN only) |
| `--fw-medium` | 500 | Nav links, sub-labels |
| `--fw-semibold` | 600 | Section headings, H2–H3 |
| `--fw-bold` | 700 | Hero titles, H1 display |

---

## 4. Line Height Tokens

| Token | Value | Usage |
|:---|:---|:---|
| `--lh-tight` | 0.95 | Display/hero titles |
| `--lh-snug` | 1.1 | H2 headings |
| `--lh-normal` | 1.3 | H3 sub-headings |
| `--lh-relaxed` | 1.6 | Body large/lead |
| `--lh-loose` | 1.75 | Arabic body copy |

---

## 5. Spacing Tokens

| Token | Value | Context |
|:---|:---|:---|
| `--sp-1` | 4px | Icon gaps, micro |
| `--sp-2` | 8px | Badge padding |
| `--sp-3` | 12px | Inline gaps |
| `--sp-4` | 16px | Compact gaps |
| `--sp-5` | 24px | Heading → body gap |
| `--sp-6` | 32px | Card inner padding |
| `--sp-7` | 48px | Sub-section spacing |
| `--sp-8` | 64px | Component gaps |
| `--sp-9` | 96px | Section padding (mobile) |
| `--sp-10` | 128px | Section padding (desktop) |
| `--sp-11` | 160px | XL section transitions |
| `--sp-12` | 200px | Hero vertical |
