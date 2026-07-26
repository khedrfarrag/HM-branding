# Quickstart Validation Guide: Domain-Driven Information Architecture

**Feature**: 006-information-architecture
**Phase**: 1 — Design & Contracts

This guide documents the procedures for validating the Domain-Driven, Content-Driven implementation.

---

## Validation Scenario 1: Domain Isolation

**Goal**: Verify that business logic files in `src/domains` do not import routing packages (e.g. `next/navigation`, `next/router`) or filesystem adapters (`fs`, `path`).

**Command**:
```powershell
# Search for forbidden imports in domains directory
Select-String -Path "src/domains/**/*.ts" -Pattern "from 'next/|from \"next/|from 'fs'|from 'path'"
```

**Expected Outcome**: Zero matches. The domain layer must be completely pure.

---

## Validation Scenario 2: Dynamic Route Resolvers

**Goal**: Verify that Next.js App Router dynamic paths (`about/[...slug]/page.tsx`, `experiences/[type]/[slug]/page.tsx`, etc.) load data from repositories and pre-render during build.

**Command**:
```powershell
npm run build
```

**Expected Outcome**: Build logs show all route parameters successfully fetched via `generateStaticParams()` and compiled statically as `● (SSG)` or `○ (Static)`.

---

## Validation Scenario 3: Search Provider Contract Swap

**Goal**: Verify that switching providers is safe and adheres to the `ISearchProvider` interface.

**Check**:
1. Check implementation of `FuseSearchProvider` implements `ISearchProvider`.
2. Verify search component uses `useSearch()` which accepts `ISearchProvider` and has zero references to Fuse.js API internals.

---

## Validation Scenario 4: Repository Substitution (CMS readiness)

**Goal**: Verify that UI pages call Repository interface definitions, making them ready for a CMS transition.

**Check**:
- Verify pages reference `IExperienceRepository` interface instead of importing filesystem helper functions directly.

---

## Validation Scenario 5: Multilingual & Direction Routing

**Goal**: Verify that route rendering flips base layouts according to `dir="rtl"` (Arabic) and `dir="ltr"` (English).

**Manual check**:
- Run `npm run dev`.
- Visit `/ar/about/bio` -> page renders with RTL fonts and grid structures.
- Visit `/en/about/bio` -> page renders with LTR fonts and grid structures.

---

## Validation Scenario 6: JSON-LD Schema Integrity

**Goal**: Verify that schema output from factories validates cleanly.

**Audit**:
- Crawl the compiled pages and validate output using the Google Structured Data Validator.
