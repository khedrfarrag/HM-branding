# Configuration Schemas & Token Mappings

---

## 1. Custom CSS Theme Tokens
The following tokens MUST be declared in the theme registry (`globals.css`) to align layouts with the premium branding design:

| Token Name | CSS Custom Property | Hex Color | Purpose |
|------------|---------------------|-----------|---------|
| `--black` | `var(--black)` | `#08090B` | Core page background |
| `--gold` | `var(--gold)` | `#C7A15C` | Brand accent color |
| `--gold-soft` | `var(--gold-soft)` | `#E8D2A0` | Light accent gradients |
| `--white` | `var(--white)` | `#F7F6F2` | Primary text color |
| `--graphite-900` | `var(--graphite-900)` | `#111318` | Section backgrounds |
| `--graphite-800` | `var(--graphite-800)` | `#181B20` | Cards background |
| `--graphite-700` | `var(--graphite-700)` | `#20242C` | Borders / dividers |
| `--cyan` | `var(--cyan)` | `#7FE3DC` | Highlights / badge dot |
| `--orange` | `var(--orange)` | `#E7A67E` | Secondary accent |
| `--blue-deep` | `var(--blue-deep)` | `#16223F` | Panels background |
| `--blue-mid` | `var(--blue-mid)` | `#223257` | Accent gradients |

---

## 2. Layout Sizing & Spacing Mappings
The page layout MUST follow an 8px spacing grid defined by these Tailwind variable extensions:

* `--spacing-1`: `4px`
* `--spacing-2`: `8px`
* `--spacing-3`: `12px`
* `--spacing-4`: `16px`
* `--spacing-5`: `24px`
* `--spacing-6`: `32px`
* `--spacing-7`: `48px`
* `--spacing-8`: `64px`
* `--spacing-9`: `96px`
* `--spacing-10`: `128px`

---

## 3. Font Families mapping
Three typography weights are defined:

- **Display font**: `'Bricolage Grotesque'`, mapped to CSS `--font-display`.
- **Body font**: `'Inter'`, mapped to CSS `--font-body`.
- **Code/Mono font**: `'JetBrains Mono'`, mapped to CSS `--font-mono`.
