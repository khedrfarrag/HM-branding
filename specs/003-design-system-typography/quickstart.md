# Quickstart: Typography Validation Guide

This guide describes how to visually validate the design system implementation.

---

## 1. Start the Dev Server

```bash
npm run dev
```

Open `http://localhost:3000/ar` and `http://localhost:3000/en`.

---

## 2. Validation Checklist

### Typography Hierarchy

Open Arabic page (`/ar`) and verify:

| What to check | How to check | Pass condition |
|:---|:---|:---|
| Hero title renders Beiruti | Browser DevTools → inspect H1 → computed `font-family` | Shows `Beiruti` |
| Body text is Light weight | Inspect any `<p>` → computed `font-weight` | Shows `300` |
| H1 is visually ≥ 3× body size | Ruler/zoom check | Hero title ≥ 64px on 1440px screen |
| Arabic line-height is generous | Inspect `<p>` → computed `line-height` | ≥ 1.7 |
| No broken glyphs | Read sample Arabic text visually | All characters connected correctly |

Open English page (`/en`) and verify:

| What to check | Pass condition |
|:---|:---|
| Headings use Bricolage Grotesque | DevTools confirms `Bricolage Grotesque` on H1/H2 |
| Body uses Inter | DevTools confirms `Inter` on `<p>` |
| Negative letter-spacing on headings | Computed `letter-spacing` is negative on H1 |

---

## 3. Spacing Verification

On both locales:

- Section padding top/bottom ≥ 96px on desktop
- Gap between heading and first description ≈ 24px
- Gap between sections ≥ 80px

Use DevTools box model or a ruler overlay tool.

---

## 4. Build Check

```bash
npm run build
```

Must complete with 0 errors, 0 TypeScript warnings, and both `/ar` and `/en` listed as generated routes.
