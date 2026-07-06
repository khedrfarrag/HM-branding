# Next.js 15 Backend & Routing System Rules

* **Filename**: `file:///g:/hossam%20mabrouk/.ai/architecture/backend-routing.md`
* **Purpose**: Govern Next.js 15 routing, Server Component data fetching, and state isolation boundaries.
* **Responsibility**: Ensuring correct use of React Server Components (RSC) and secure server action APIs.
* **Dependencies**: [Constitution](file:///g:/hossam%20mabrouk/.specify/memory/constitution.md) (Server Component Rules)
* **Update Frequency**: Medium
* **AI Agents**: Planner, Backend Developer
* **Priority**: HIGH

---

## 1. Next.js 15 App Router Directory Conventions
* **Rule**: All routing directories MUST use kebab-case. Layouts, pages, loading templates, and error boundaries MUST align with the App Router specifications.
* **Requirements**:
  * Pages MUST be Server Components by default.
  * Loading templates (`loading.tsx`) MUST be implemented for all public routes to prevent loading flashes.

## 2. Server vs. Client Component Boundaries
* **Rule**: Client Component markers (`"use client"`) MUST only be placed at leaf nodes.
* **Requirements**:
  * Client Component imports MUST NOT be placed inside the global or root layouts unless they are context providers.

## 3. Data Fetching Patterns
* **Rule**: All data fetching operations MUST be executed inside Server Components or Next.js route handlers.
* **Requirements**:
  * Use Next.js cached fetches for dynamic pages.
  * Database queries MUST run through centralized utility adapters.

## 4. Server Actions & Security Sanitization
* **Rule**: All Server Actions MUST validate input parameters using Zod schemas before processing.
* **Requirements**:
  * Actions MUST catch and handle errors gracefully, returning standardized response objects.

## 5. Third-Party Adapter Patterns
* **Rule**: External APIs and drivers (e.g., MongoDB, Nodemailer) MUST be instantiated in a decoupled utility layer inside `src/lib/`.
