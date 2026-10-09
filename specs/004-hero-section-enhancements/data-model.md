# Data Model: Hero Section Enhancements

Since this feature is purely a front-end visual and interaction enhancement, it does not require a database schema. However, we define the structure of the translation dictionary config schemas and the social media icon parameters.

## 1. Localized Phrase List Schema

The localized phrase cycles are defined in the JSON dictionary files under `hero.phrases`:

```json
{
  "hero": {
    "badge": "...",
    "title": "...",
    "subtitle": "...",
    "phrases": [
      "Phrase 1",
      "Phrase 2",
      "Phrase 3"
    ]
  }
}
```

### Validation Rules
- **Length**: Array must contain exactly 3 strings (Option A).
- **Translations**: Must have identical indexes and corresponding translations in both `ar.json` and `en.json`.

---

## 2. Social Badge Config Schema

The floating socials list is defined in component configuration properties to represent the active communication channels:

| Channel | Label (AR) | Label (EN) | Hover Brand Accent | Icon | Target URL / Deep Link |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **LinkedIn** | "لينكد إن" | "LinkedIn" | `bg-[#0A66C2]` | `Linkedin` | `https://www.linkedin.com/in/hussam-mabrouk/` (or placeholder) |
| **WhatsApp** | "واتساب" | "WhatsApp" | `bg-[#25D366]` | `MessageCircle` | `https://wa.me/201204009000` |
| **Email** | "البريد الإلكتروني" | "Email" | `bg-gold-soft` | `Mail` | `mailto:mabrouk@meridian-co.com` |
| **X (Twitter)** | "تويتر" | "X / Twitter" | `bg-[#0F1419]` | `Twitter` | `https://x.com/hussam-mabrouk` (or placeholder) |
