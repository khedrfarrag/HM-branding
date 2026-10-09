# Implementation Plan: Hossam AI Sourcing Assistant & Personal Brand SEO Optimization

**Feature Directory**: `specs/030-ai-chatbot-assistant` | **Date**: 2026-10-05 | **Spec**: [spec.md](specs/030-ai-chatbot-assistant/spec.md)

---

## Technical Context & Stack

- **Framework**: Next.js 15.5 App Router (TypeScript)
- **AI SDK**: Vercel AI SDK (`ai` package) & Custom Route Handler
- **Personal Brand Title**: `حسام مبروك | مستشار التجارة الدولية والاستيراد والتوريد من الصين`
- **Personal Brand Tagline**: `متخصص في فحص المصانع، تأسيس خطوط الإنتاج، وإدارة الصفقات الدولية.`
- **English Title & Tagline**: `Hussam Mabrouk | International Trade & China Sourcing Advisor` — `Specializing in Factory Audits, Industrial Line Setup & Global Deal Management.`
- **LLM Provider**: Google Gemini 2.5 / 1.5 Flash API with Fallback Knowledge Engine
- **Intent Classification Engine**: Pre-LLM Multi-Country & Multi-Sector Intent Categorizer (`SAUDI_CUSTOMS_DOCS`, `EGYPT_CUSTOMS_DOCS`, `MACHINERY_SUPPLIER_QUESTIONS`, `MACHINERY_PRODUCTION_LINE`, `FACTORY_VERIFICATION`, `CUSTOMS_SHIPPING`, `CONSULTATION_BOOKING`, `HUSSAM_BIO`, `GREETING`)
- **SEO & GEO Files**: `src/components/Footer.tsx`, `src/repositories/local-fs/author.ts`, `src/lib/schema/person.ts`, `src/lib/ai/prompts.ts`, `src/lib/ai/knowledge.ts`, `src/app/llms.txt/route.ts`

---

## Phase 0: Research — ✅ Complete

**Output**: `research.md`

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Brand Tagline | "مستشار التجارة الدولية والاستيراد والتوريد من الصين" | Maximizes keyword search density on Google and LLM crawlers for China Sourcing & Industrial Setup |
| Knowledge Engine | `src/lib/ai/knowledge.ts` | Eliminates generic answers by mapping country, material, and trade intents to comprehensive expert responses |
| Intent Classification | Multi-Country & Multi-Sector Classifier | Recognizes Saudi customs/SABER/aluminum, Egypt ACI, machinery, factory audit, and bio questions instantly |
| UI Placement | Global Floating Glassmorphic Widget & Footer | Accessible on every page without disrupting primary page UX |

---

## Phase 1: Design & Artifacts — ✅ Complete

**Outputs**: `data-model.md`, `contracts/chatbot-contracts.md`, `quickstart.md`

1. **Brand & Tagline SEO Updates**:
   - `Footer.tsx`: Render exact approved headline & subtitle.
   - `author.ts` & `person.ts`: Inject optimized JSON-LD Schema for Person & Author.
   - `prompts.ts` & `knowledge.ts`: Align AI persona prompt and bio answers.
   - `llms.txt`: Expose optimized title to AI crawlers.
2. **`POST /api/chat` Route Handler**: Multi-stage intent & knowledge engine pipeline.
3. **`ChatWidget` Component**: Floating glassmorphic button + expandable chat modal + message list + quick pills.

---

## Phase 2: Tasks — Pending (`/speckit-tasks`)

**Output**: `tasks.md`




