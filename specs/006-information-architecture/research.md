# Research: Domain-Driven, Content-Driven Architecture for Personal Branding

**Feature**: 006-information-architecture
**Date**: 2026-07-08
**Phase**: 0 — Outline & Research

---

## 1. Domain-Driven Design (DDD) in Next.js 15

### Core Concept

Traditionally, Next.js page components load data directly from the filesystem or external APIs. This couples the routing layer to the content storage structure. For a platform scaling from local files to a Headless CMS, this creates a major refactoring bottleneck.

To solve this, we introduce:
1. **Domain Layer (`src/domains`)**: Houses pure business types, entities, and repository interfaces. It has zero dependency on UI frameworks or storage adapters.
2. **Repository Layer (`src/repositories`)**: Implements interfaces defined in the Domain layer to interact with the local filesystem (MDX/JSON files in Phase 1) or a CMS (in Phase 2).
3. **UI/Routing Layer (`src/app`)**: Resolves URLs, handles layouts, and calls Repository methods to render components.

```
+-----------------------------------+
|            UI Layer               |
|      (src/app, src/components)    |
+-----------------+-----------------+
                  | (Uses Interfaces)
                  v
+-----------------+-----------------+
|          Domain Layer             |
|         (src/domains)             |
+-----------------+-----------------+
                  ^
                  | (Implements Interfaces)
+-----------------+-----------------+
|        Repository Layer           |
|       (src/repositories)          |
+-----------------------------------+
```

---

## 2. Dynamic Route Scaffolding vs. Manual Pages

### Decision: Catch-All and Dynamic Routing

Instead of creating dozens of file paths (e.g. `sourcing/page.tsx`, `quality-control/page.tsx`), we create dynamic pages:
- `src/app/[locale]/about/[...slug]/page.tsx`
- `src/app/[locale]/services/[slug]/page.tsx`
- `src/app/[locale]/experiences/[type]/[slug]/page.tsx`

During the build phase, `generateStaticParams()` queries the respective repository to retrieve all available slugs and pre-renders these pages statically (SSG). This reduces boilerplate, ensures route safety, and allows adding new pages by simply saving content files in the filesystem.

---

## 3. Abstract Search Architecture

### Decision: Abstract Search Provider Interface

To protect the client UI from search engine lock-in, we define `ISearchProvider` in the integrations layer.

**Rationale**:
- During Phase 1, `FuseSearchProvider` loads a build-time static index JSON (`public/search-index.json`) and runs client-side.
- In Phase 2, this can be swapped with a server-side search (e.g. `MeiliSearchProvider` or `AlgoliaSearchProvider`) by editing the injection module, keeping the UI search components untouched.

---

## 4. Integrations Layer (src/integrations)

To prepare for future premium features without modifying core domains:
- **CRM Integration**: Defines `ICrmProvider` for lead capturing. Phase 1 uses a local mailer or console logger. Phase 2 hooks up HubSpot or ActiveCampaign.
- **Calendar Integration**: Defines `ICalendarProvider` for mentoring session bookings. Phase 1 uses static calendar links. Phase 2 integrates Calendly or Custom DB bookings.
- **Payments Integration**: Defines `IPaymentGateway` for VIP experience payments. Phase 1 is request-based. Phase 2 integrates Stripe.

---

## 5. Domain Boundary Definitions

### Author Domain (src/domains/author)
- Centered on Hussam Mabrouk as the primary authority.
- Manages bio segments, speaking credentials, and media publications.
- Linked by reference across all other domains.

### Experiences Domain (src/domains/experiences)
- Manages real-field trips, factory tours, VIP excursions, and mentoring itineraries.
- Replaces the traditional "Training Course" term to emphasize high-end, in-person premium programs in China.

### Knowledge Domain (src/domains/knowledge)
- Manages educational articles, FAQ sections, and term glossaries.
- Resolves cross-references between trade definitions (Glossary) and articles.

### Services Domain (src/domains/services)
- Maps Hussam's import/export services.
- Connects service profiles to client Success Stories.

### China Domain (src/domains/china)
- Houses market intelligence, trade cities, and wholesale directories.
