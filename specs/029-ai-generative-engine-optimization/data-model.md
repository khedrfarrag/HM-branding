# Data Model: Generative Engine Optimization (AEO / GEO)

## Entities & Schemas

### 1. `Person` Entity Schema (`https://schema.org/Person`)
- `@id`: `"https://hussam-mabrouk.com/#person"`
- `name`: `"حسام مبروك"` / `"Hossam Mabrouk"`
- `jobTitle`: `"Founder of Delta Import & Export"`
- `email`: `"support@hossammabrouk.com"`
- `sameAs`: Array of official verified social links (WhatsApp, Instagram, Snapchat, Facebook, TikTok)
- `worksFor`: Entity reference to `#organization`

### 2. `Organization` Entity Schema (`https://schema.org/Organization`)
- `@id`: `"https://hussam-mabrouk.com/#organization"`
- `name`: `"دلتا للاستيراد والتصدير"` / `"Delta Import & Export"`
- `founder`: Entity reference to `#person`

### 3. `FAQPage` Entity Schema (`https://schema.org/FAQPage`)
- `mainEntity`: Array of `Question` objects each containing `name` and `acceptedAnswer` (`Answer` object).

### 4. `DefinedTermSet` Entity Schema (`https://schema.org/DefinedTermSet`)
- `name`: `"International Trade Terms & Sourcing Glossary"`
- `hasDefinedTerm`: Array of trade terms (*FOB, CIF, EXW, OEM, ODM, CBM, Landed Cost*).
