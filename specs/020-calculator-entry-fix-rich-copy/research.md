# Research: Calculator Entry Fix & Rich Copy Summary

**Feature**: `020-calculator-entry-fix-rich-copy`
**Date**: 2026-08-20

---

## Issue 1: Duplicate React Key — Root Cause Analysis

### Decision
Fix the duplicate-key bug by changing the React `key` prop on Footer link list items from `item.href` to a composite key using the column label and link label.

### Root Cause
In `src/config/navigation.ts`, the "Free Tools" footer column defines **5 links that all share the same `href: "/tools"`** (lines 141-146). After locale prefixing, they all become `/ar/tools` or `/en/tools`. The Footer component uses `key={item.href}` (Footer.tsx line 56), producing 5 identical React keys within the same `<ul>` — triggering the `Encountered two children with the same key` warning.

### Rationale
Two fix strategies were evaluated:

| Strategy | Approach | Verdict |
|---|---|---|
| **A — Unique hrefs per tool** | Add hash anchors: `/tools#cbm`, `/tools#volumetric`, etc. | Possible but changes routing behavior; requires adding scroll anchors to each tab — scope creep |
| **B — Composite key in Footer** | Use `key={`${column.label}-${item.label}`}` in Footer.tsx | ✅ Minimal change, no routing impact, deterministic |

**Chosen**: Strategy B — change `key={item.href}` to `key={item.label}` in Footer.tsx. Since link labels are unique within each column, this is the safest single-line fix.

### Alternatives Considered
- Using index as key: Rejected — React docs caution against index keys for dynamic lists.
- Deduplicating navigation hrefs: Valid long-term, but out of scope for this bug fix.

---

## Issue 2: Rich Copy Summary — Architecture Decision

### Decision
Implement a `ref`-based summary provider contract. Each calculator component accepts a `summaryRef` prop (via `React.useImperativeHandle`) and exposes a `getSummaryText(locale: Locale): string` method. `ToolsHubLayout` holds refs to the 5 calculators and calls the active tab's `getSummaryText()` on copy button click.

### Rationale
Three architecture patterns were evaluated:

| Pattern | Approach | Verdict |
|---|---|---|
| **A — Ref + useImperativeHandle** | Parent holds refs; child exposes method | ✅ Clean, no prop-drilling, no context overhead |
| **B — Lifted state to parent** | All calculator state moved to ToolsHubLayout | Complex: 5 distinct state shapes, breaks encapsulation |
| **C — Zustand/Context store** | Global store for all calculator states | Overkill for this scope; adds dependency |

**Chosen**: Pattern A — `forwardRef` + `useImperativeHandle` on each calculator. This is the React-idiomatic way to expose imperative actions from child to parent without breaking encapsulation.

### Summary Text Format
Each calculator produces a plain-text block structured as:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━
📦 [Tool Name Ar/En]
حاسبات حسام مبروك | hossammabrouk.com/[locale]/tools
[Date] [Time]
━━━━━━━━━━━━━━━━━━━━━━━━━━

📥 المدخلات / Inputs:
• [Label]: [Value] [Unit]
• [Label]: [Value] [Unit]

📊 النتائج / Results:
• [Label]: [Value] [Unit]
• [Label]: [Value] [Unit]

[Status emoji + label if applicable]
━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Clipboard Fallback
- Primary: `navigator.clipboard.writeText()` (modern async API, requires HTTPS)
- Fallback: `document.execCommand('copy')` via a hidden textarea element
- Both paths wrapped in try/catch; on failure, no unhandled promise rejection

### Empty-State Handling
The `getSummaryText()` of each calculator checks if all numeric inputs equal zero or default values. If the user has not changed any inputs from defaults, the text is still generated (defaults are legitimate values). A "no data" state is triggered only when the primary result field (e.g., totalCbm) is exactly 0.

---

## Constitution Check Resolved
- No new packages required — uses existing React patterns (`forwardRef`, `useImperativeHandle`)
- Plain string output, no HTML/markdown — pastes cleanly into WhatsApp/SMS
- All changes confined to `src/features/tools/` and `src/components/Footer.tsx`
- Strict TypeScript: `SummaryHandle` interface typed explicitly, no `any`
