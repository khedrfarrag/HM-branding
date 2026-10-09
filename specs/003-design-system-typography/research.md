# Research: Design System & Typography Excellence

## Decision 1: Arabic Typeface Selection

- **Choice**: **Beiruti** (by Boutros Fonts, available on Google Fonts)
- **Rationale**:
  - Variable font with seamless weight axis from Thin → Black — one font file covers all hierarchy levels
  - Geometric Arabic letterforms with a fluid, calligraphic-inspired rhythm — projects luxury and authority
  - Includes a built-in Latin companion script, ensuring Arabic brand names mixed with Latin (e.g., "Rotterdam", "ISO 9001") render harmoniously in the same font
  - Proven in premium and institutional Arabic branding contexts
  - Outperforms Cairo for this project because Beiruti has higher visual contrast between thin display use and bold body use — more dramatic, more premium
- **Alternatives Considered**:
  - *Cairo*: Too common, less personality. Good for dashboards, not luxury personal brands.
  - *Tajawal*: Clean but lacks the editorial flair needed for display headings.
  - *Noto Sans Arabic*: Best for neutral/universal use, but too "system-like" for luxury.
  - *IBM Plex Arabic*: Excellent for tech/SaaS; too cold and corporate for a personal brand.
- **Usage Split**:
  - **H1 / Hero Display**: `Beiruti` weight 700 (Bold) — commanding presence
  - **H2 / Section Headings**: `Beiruti` weight 600 (SemiBold)
  - **H3 / Sub-headings**: `Beiruti` weight 500 (Medium)
  - **Body / Descriptions**: `Beiruti` weight 300 (Light) — elegant contrast against headings
  - **Eyebrow labels**: `JetBrains Mono` — maintained for both locales (mono consistency)

---

## Decision 2: Type Scale — Fluid Responsive Sizing

- **Choice**: Use `clamp()` for all heading sizes, scaling fluidly between mobile and desktop.
- **Rationale**: Avoids abrupt font-size jumps at breakpoints. One definition handles all screen sizes.

| Level | CSS Value | Desktop Approx | Mobile Approx |
|:---|:---|:---|:---|
| Display / H1 | `clamp(3rem, 7vw, 6rem)` | ~96px | ~48px |
| H2 Section | `clamp(2rem, 4vw, 3.2rem)` | ~51px | ~32px |
| H3 Sub | `clamp(1.4rem, 2.2vw, 1.9rem)` | ~30px | ~22px |
| Body Large | `clamp(1.05rem, 1.4vw, 1.25rem)` | ~20px | ~17px |
| Body | `1rem` | 16px | 16px |
| Small / Caption | `0.875rem` | 14px | 14px |
| Eyebrow | `0.72rem` | 11.5px | 11.5px |

---

## Decision 3: Spacing System — 8px Base Scale

- **Choice**: Build all spacing from a single 8px base unit with named tokens.
- **Rationale**: 8px grid is the industry standard for digital product design. Consistent spacing eliminates visual noise and creates the "breathing room" premium feeling.

| Token | Value | Primary Use |
|:---|:---|:---|
| `--space-1` | 4px | Icon gaps, micro padding |
| `--space-2` | 8px | Internal badge/label padding |
| `--space-3` | 12px | Between inline elements |
| `--space-4` | 16px | Compact content gap |
| `--space-5` | 24px | Heading → description gap |
| `--space-6` | 32px | Card internal padding |
| `--space-7` | 48px | Between sub-sections within a section |
| `--space-8` | 64px | Component to component gap |
| `--space-9` | 96px | Section padding top/bottom (mobile) |
| `--space-10` | 128px | Section padding top/bottom (desktop) |
| `--space-11` | 160px | XL section transitions |
| `--space-12` | 200px | Hero-size vertical spacing |

---

## Decision 4: Line Heights & Letter Spacing

- **Choice**: Separate line-height settings per text level and locale.

| Level | Line Height | Letter Spacing (Arabic) | Letter Spacing (Latin) |
|:---|:---|:---|:---|
| Display | 0.95 | 0em | -0.03em |
| H2 Heading | 1.05 | 0em | -0.025em |
| H3 Sub | 1.2 | 0em | -0.02em |
| Body Large | 1.65 | 0.01em | 0em |
| Body | 1.7 | 0.01em | 0em |
| Eyebrow | 1.0 | 0.08em | 0.18em |

---

## Decision 5: Font Weight Discipline

- **Arabic (Beiruti)**: 300 (body), 600 (heading), 700 (display) — 3 weights
- **English Display (Bricolage Grotesque)**: 300, 600, 700 — 3 weights  
- **English Body (Inter)**: 300, 400, 500 — 3 weights
- **Mono (JetBrains Mono)**: 400, 500 — 2 weights

> Rule: Never use a font weight that doesn't exist in the loaded subset. Declare only loaded weights in next/font.
