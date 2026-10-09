# Data Model: Translation Dictionaries Schema

This document defines the schema and structure of the translation JSON files required to keep `ar.json` and `en.json` synchronized.

---

## Locale Configuration Model

Each translation dictionary file MUST contain the following object structure:

### 1. Navigation Header (`nav`)
- `logo`: Text label for the brand (e.g., "حسام مبروك" / "Hussam Mabrouk")
- `links`: Array of objects containing:
  - `label`: Display text
  - `href`: Section anchor identifier
- `cta`: Text for the CTA button (e.g., "احجز مكالمة" / "Book a Call")

### 2. Hero Section (`hero`)
- `badge`: Sub-title badge text (e.g., "الرئيس التنفيذي والمؤسس" / "Founder & CEO")
- `title`: Header title text (including HTML wrapping for gradients)
- `subtitle`: Subtitle description text
- `ctaPrimary`: Main button text
- `ctaSecondary`: Secondary button text
- `stats`: Array of metrics:
  - `value`: Number or volume (e.g., "42", "$1.8B")
  - `label`: Metric category (e.g., "دولة مخدومة" / "Countries Served")

### 3. About Section (`about`)
- `eyebrow`: Small header label (e.g., "المؤسس" / "The Founder")
- `title`: Main title text
- `lead`: Introductory paragraph
- `quote`: Blockquote text
- `author`: Quote author and title
- `values`: Array of value card elements:
  - `num`: Sequential index
  - `title`: Value title
  - `desc`: Detailed description
- `timelineTitle`: Title for the timeline sub-section
- `timeline`: Array of historical items:
  - `year`: Numeric year
  - `desc`: Chronological summary

### 4. Global Experience Section (`global`)
- `eyebrow`: Section eyebrow
- `title`: Section title
- `subtitle`: Subtitle text
- `metrics`: Array of dynamic panel stats:
  - `label`: Metric label
  - `value`: Main display metric
  - `sub`: Metric units/detail (e.g., "مسار" / "lanes")
  - `percentage`: Number (used for progress bar width)

### 5. Industries Section (`industries`)
- `eyebrow`: Section eyebrow
- `title`: Section title
- `cta`: Section call-to-action text
- `sectors`: Array of bento grid cards:
  - `idx`: Index prefix
  - `title`: Industry title
  - `desc`: Industry description

### 6. Services Section (`services`)
- `eyebrow`: Section eyebrow
- `title`: Section title
- `hint`: Scroll text hint
- `items`: Array of carousel cards:
  - `num`: Index prefix
  - `title`: Service title
  - `desc`: Service description
  - `tags`: Array of tag names

### 7. Timeline Journey Section (`journey`)
- `eyebrow`: Section eyebrow
- `title`: Section title
- `items`: Array of timeline nodes:
  - `year`: Range or year
  - `title`: Event title
  - `desc`: Detailed summary

### 8. Achievements Section (`achievements`)
- `eyebrow`: Section eyebrow
- `title`: Section title
- `partners`: Array of partner names/strings for the marquee animation.

### 9. Testimonials Section (`testimonials`)
- `eyebrow`: Section eyebrow
- `title`: Section title
- `items`: Array of customer cards:
  - `quote`: Blockquote text
  - `author`: Reviewer name
  - `role`: Reviewer professional title

### 10. Book Consultation Section (`book`)
- `eyebrow`: Section eyebrow
- `title`: Section title
- `desc`: Paragraph details
- `details`: Object containing metadata labels:
  - `duration`: "Duration"
  - `location`: "Location"
  - `timezone`: "Timezone"
- `slots`: Object containing scheduler controls:
  - `label`: Header label
  - `time`: Time selection placeholder
  - `confirm`: Action button text

### 11. Footer Section (`footer`)
- `tagline`: Bold brand tagline text
- `desc`: Short closing bio
- `copy`: Copyright notice string
