<!--
SYNC IMPACT REPORT
Version change: 0.1.0 -> 1.0.0 (Ratified)
List of modified principles:
- Template replaced with concrete project-specific constitution for Hussam Mabrouk's Personal Branding Website.
Added sections:
- Project Philosophy
- Engineering Principles
- Architecture Principles
- Design Principles
- Motion Principles
- Scalability Principles
- Maintainability Principles
- Readability Principles
- Dependency Policy
- Package Selection Policy
- Folder Organization Rules
- Naming Convention
- Coding Convention
- TypeScript Rules
- React Rules
- Next.js Rules
- Server Component Rules
- Client Component Rules
- Composition Rules
- SOLID Principles
- DRY
- KISS
- YAGNI
- Feature-first Architecture
- Shared Layer Rules
- Design System Governance
- Animation Governance
- Accessibility (WCAG 2.2 AA)
- Performance Governance
- Core Web Vitals Budget
- Image Rules
- Font Rules
- SEO Governance
- GEO Governance
- Schema.org Governance
- Structured Data Rules
- Metadata Rules
- Security Rules
- Testing Philosophy
- Review Process
- Definition of Done
- Technical Debt Policy
- Refactoring Rules
- AI Coding Rules
- AI Review Rules
- Forbidden Practices
Templates requiring updates:
- .specify/templates/plan-template.md (✅ updated)
- .specify/templates/spec-template.md (✅ updated)
- .specify/templates/tasks-template.md (✅ updated)
Follow-up TODOs: None
-->

# Hussam Mabrouk Personal Branding Website Constitution

## 1. Project Philosophy
* **Purpose**: Define the core identity, message, and experiential standards of the Hussam Mabrouk Personal Branding Website.
* **Requirements**:
  * The site MUST establish Hussam Mabrouk as a global import/export industry leader, presenting a premium, trustworthy, and authoritative image.
  * The user interface MUST feature custom, fluid, interactive elements (Framer Motion + React Three Fiber) that project innovation and high-end quality.
  * Every public page MUST load instantly and display perfect visual clarity across desktop, tablet, and mobile screens.
* **Forbidden Practices**:
  * Do NOT use default template designs, low-quality stock media, or uncurated layouts.
  * Do NOT prioritize animation novelty over informational accessibility or usability.
* **Reasoning**: A premium brand requires a digital presence that matches international business excellence, where attention to detail is paramount.
* **Exceptions**: None.
* **Trade-offs**: The development of bespoke interactive states and custom 3D details increases initial production time but is non-negotiable for personal branding differentiation.

## 2. Engineering Principles
* **Purpose**: Establish standard development expectations to ensure code correctness and build repeatability.
* **Requirements**:
  * All code MUST run in strict TypeScript mode with zero compiler warnings or errors.
  * The codebase MUST compile cleanly on every commit, and deployment checks MUST fail if there are any linting or type errors.
  * Build tools and dependency managers (uv, npm) MUST be locked to exact versions.
* **Forbidden Practices**:
  * Do NOT ignore linting rules or use `ts-ignore` to bypass typescript diagnostics.
  * Do NOT commit unchecked console logs or testing overrides to the production branch.
* **Reasoning**: Clean build environments prevent regression bugs and ensure developer productivity.
* **Exceptions**: Third-party library overrides MAY use type casting as a last resort if documented.
* **Trade-offs**: Strict build pipeline requirements increase local testing cycles but minimize production regressions.

## 3. Architecture Principles
* **Purpose**: Define how components are structured, decoupled, and assembled within the Next.js framework.
* **Requirements**:
  * The project MUST strictly implement Next.js App Router conventions with distinct boundaries between Client and Server Components.
  * Data fetching MUST be centralized within Server Components or API Routes.
  * Third-party integrations (e.g., mailers, database drivers) MUST be wrapped in custom utility adapters.
* **Forbidden Practices**:
  * Do NOT allow direct database client or external API client imports in Client Components.
  * Do NOT allow global state management tools to govern layouts that can be static.
* **Reasoning**: Separating concerns guarantees clean deployment states, optimal performance, and testing simplicity.
* **Exceptions**: Basic telemetry scripts MAY be loaded globally.
* **Trade-offs**: Decoupled systems require more files and boilerplate but guarantee system longevity.

## 4. Design Principles
* **Purpose**: Ensure the website maintains a premium, world-class aesthetic and premium visual styling.
* **Requirements**:
  * All styles MUST be implemented via Tailwind CSS v4 using semantic design variables.
  * Interactive elements MUST utilize shadcn/ui or Radix UI primitives to ensure high-fidelity interactions and keyboard usability.
  * Color palettes MUST consist of dark-mode-centric premium colors (deep slate, gold accents, and clean borders).
* **Forbidden Practices**:
  * Do NOT use inline styles, raw hexadecimal colors, or custom CSS values outside the Tailwind configuration.
  * Do NOT use raw browser alert elements, input fields, or non-semantic layouts.
* **Reasoning**: Consistently designed elements communicate quality, trust, and premium brand value.
* **Exceptions**: Complex inline WebGL canvases MAY use dynamic inline sizing calculation.
* **Trade-offs**: Using headless primitives requires custom styling wrappers, increasing front-end implementation effort.

## 5. Motion Principles
* **Purpose**: Enforce cinematic, fluid, and optimized motion behaviors.
* **Requirements**:
  * All page-level animations MUST utilize Framer Motion or React Three Fiber (R3F) for hardware-accelerated rendering.
  * Animation duration SHOULD stay between 200ms and 600ms, using ease-out or spring curves.
  * Layout transitions MUST utilize Framer Motion's `layoutId` where appropriate to maintain spatial continuity.
* **Forbidden Practices**:
  * Do NOT use jarring animations, linear easing, or loops that cause CPU spikes.
  * Do NOT run 3D animations without checking for WebGL support or frame rate drops.
* **Reasoning**: Smooth animations establish premium aesthetic value, while bad performance ruins user experience.
* **Exceptions**: Users with `prefers-reduced-motion` settings MUST receive simplified or static variants.
* **Trade-offs**: Motion setup requires rigorous performance tuning across mobile and desktop devices.

## 6. Scalability Principles
* **Purpose**: Support future website growth, such as adding content sections, media types, or internationalization.
* **Requirements**:
  * Dynamic routes MUST use Next.js file-system routing conventions to make adding sub-pages seamless.
  * All component states MUST be local or route-based; global states MUST be modular.
  * Configuration values MUST be injected via environment variables validated at boot time.
* **Forbidden Practices**:
  * Do NOT hardcode API paths, credentials, or service URLs within the application logic.
  * Do NOT create static pages that require code changes to update basic textual copy.
* **Reasoning**: Separating configuration and content from presentation prevents refactoring bottlenecks.
* **Exceptions**: None.
* **Trade-offs**: Strict environment validation adds build validation, but prevents deployment configuration errors.

## 7. Maintainability Principles
* **Purpose**: Keep the codebase clean, understandable, and easily updatable over time.
* **Requirements**:
  * Every major UI feature folder MUST contain a local README file detailing its architecture.
  * Code complexity metrics SHOULD be kept low; deeply nested functions MUST be broken down.
  * External dependencies MUST be reviewed periodically to minimize dependency creep.
* **Forbidden Practices**:
  * Do NOT write complex spaghetti functions that combine data parsing, database connection, and layout logic.
  * Do NOT leave obsolete files or dead code in the repository.
* **Reasoning**: Well-structured code reduces the onboarding time for new developers and prevents technical debt.
* **Exceptions**: Prototype components MAY live temporarily in a `components/debug` directory.
* **Trade-offs**: Rigorous modularity creates a larger file tree, but protects code cleanliness.

## 8. Readability Principles
* **Purpose**: Ensure code is instantly readable by all developers and AI coding agents.
* **Requirements**:
  * Code formatting MUST strictly comply with Prettier and ESLint rules.
  * Variables, functions, and files MUST be named explicitly after their intent (e.g., `getImportRequests` instead of `reqs`).
  * Non-obvious logic (e.g., custom math or animation curves) MUST have detailed comments explaining "why" instead of "what".
* **Forbidden Practices**:
  * Do NOT use obscure abbreviations, single-letter variables, or undocumented regex patterns.
  * Do NOT write functions that exceed 100 lines of executable code.
* **Reasoning**: Readable code is the primary defense against developer errors and logic misalignments.
* **Exceptions**: Single-letter variables are allowed inside mathematical formulas or simple array loops.
* **Trade-offs**: Longer names increase text length, but eliminate naming ambiguity.

## 9. Dependency Policy
* **Purpose**: Govern the introduction of third-party libraries.
* **Requirements**:
  * Added packages MUST have an active maintenance status, solid security records, and a bundle footprint under 50KB.
  * Sub-dependencies MUST be audited using standard scanning tools (`npm audit`).
  * Any library that implements styling MUST be compatible with Tailwind CSS v4 variables.
* **Forbidden Practices**:
  * Do NOT install multi-purpose libraries (e.g., lodash) when simple helper functions or ES6 features suffice.
  * Do NOT install undocumented packages or libraries with dead project history.
* **Reasoning**: Keeping dependencies clean protects the security footprint, bundle size, and build stability of the website.
* **Exceptions**: Crucial rendering frameworks (R3F, Drei) are exempt from the 50KB bundle limit.
* **Trade-offs**: Strict dependency checks require custom utility development for simple tasks.

## 10. Package Selection Policy
* **Purpose**: Regulate the exact packages permitted in the project.
* **Requirements**:
  * Allowed packages MUST belong to the specified stack: Next.js 15, React 19, Tailwind CSS v4, Framer Motion, shadcn/ui, Radix UI, React Hook Form, Zod, React Three Fiber, Drei, Lucide React, clsx, tailwind-merge, class-variance-authority.
  * Any package outside this list MUST undergo architect approval.
  * Packages MUST support native ESM.
* **Forbidden Practices**:
  * Do NOT install styling utility packages that compete with Tailwind CSS v4.
  * Do NOT install deprecated state management or UI libraries.
* **Reasoning**: Stack consistency ensures that developer knowledge is universally applicable across the repository.
* **Exceptions**: None.
* **Trade-offs**: Restricting package usage forces developers to implement bespoke solutions occasionally.

## 11. Folder Organization Rules
* **Purpose**: Enforce a strict file-system organization pattern.
* **Requirements**:
  * The structure MUST follow the standard `src/` hierarchy:
    * `src/app/`: Next.js App Router pages, layouts, and API routes.
    * `src/components/`: Reusable, generic UI components (e.g., buttons, input fields, modals).
    * `src/features/`: Feature-first modules (e.g., `src/features/contact-form`, `src/features/brand-slider`).
    * `src/lib/`: Custom adapters and clients (e.g., database connection, logger, mailer client).
    * `src/types/`: Shared TypeScript declarations.
* **Forbidden Practices**:
  * Do NOT place feature-specific components inside the generic `src/components/` folder.
  * Do NOT create deep nested directories under `src/lib/`.
* **Reasoning**: Standard layout makes search, optimization, and modular refactoring predictable.
* **Exceptions**: None.
* **Trade-offs**: Separating components into features forces upfront architectural decisions.

## 12. Naming Convention
* **Purpose**: Standardize names for files, folders, variables, and components.
* **Requirements**:
  * React Components MUST use PascalCase (e.g., `BrandSlider.tsx`).
  * Helper functions, variables, and API handlers MUST use camelCase (e.g., `fetchUserData`).
  * Folders and non-component files MUST use kebab-case (e.g., `contact-form/`).
  * TypeScript interfaces and types MUST use PascalCase, prefixed with 'I' or 'T' only if representing a distinct contract layer.
* **Forbidden Practices**:
  * Do NOT mix naming patterns within the same directory.
  * Do NOT name files with generic tokens like `index.tsx` unless required by Next.js app routing.
* **Reasoning**: Naming uniformity eliminates developer cognitive load and makes global searching reliable.
* **Exceptions**: Next.js routing patterns (e.g., `[id]`, `layout.tsx`, `page.tsx`).
* **Trade-offs**: Strict renaming cycles are required when migrating older code structures.

## 13. Coding Convention
* **Purpose**: Define best coding styles and structural standards.
* **Requirements**:
  * Functions MUST be declared using explicit `function` syntax for main components and arrow syntax for secondary hooks or internal helpers.
  * Early returns MUST be used to handle errors, edge cases, and empty states.
  * Boolean expressions SHOULD be descriptive (e.g., `const isValidUser = hasSignedUp && hasConfirmedEmail`).
* **Forbidden Practices**:
  * Do NOT use nested ternary expressions; use early returns or if-else statements instead.
  * Do NOT write functions that mutate their parameters directly.
* **Reasoning**: Functional purity and structured control flow reduce unexpected run-time behaviors.
* **Exceptions**: None.
* **Trade-offs**: Writing descriptive variables can make code longer, but improves clarity.

## 14. TypeScript Rules
* **Purpose**: Ensure type safety and restrict loose compiler behaviors.
* **Requirements**:
  * The TypeScript config MUST set `strict: true`, `noImplicitAny: true`, and `noUnusedLocals: true`.
  * Every function parameter and return value MUST have explicit types.
  * API response schemas MUST be validated via Zod before casting to TypeScript types.
* **Forbidden Practices**:
  * Do NOT use the `any` type under any circumstances. Use `unknown` with a type guard if the type is dynamic.
  * Do NOT use type assertions (`as Type`) when type safety can be proven through structural validation.
* **Reasoning**: Loose types undermine the safety benefits of compiling with TypeScript.
* **Exceptions**: Type casting is allowed when wrapping third-party libraries that lack complete typing.
* **Trade-offs**: Comprehensive type declarations require more code block lines.

## 15. React Rules
* **Purpose**: Enforce optimal React 19 patterns.
* **Requirements**:
  * Components MUST be modular, single-responsibility units.
  * Side effects MUST be handled using appropriate hooks, keeping dependencies explicit.
  * Custom hooks MUST be used to extract component-specific data or layout state logic.
* **Forbidden Practices**:
  * Do NOT trigger state updates in component render cycles.
  * Do NOT use indices as keys for lists unless the collection is strictly static.
* **Reasoning**: Optimal state usage guarantees fast UI updates and prevents rendering loops.
* **Exceptions**: None.
* **Trade-offs**: Extracting hooks requires creating separate files, but keeps layout code clean.

## 16. Next.js Rules
* **Purpose**: Establish standard patterns for Next.js 15 features.
* **Requirements**:
  * Page metadata MUST be declared statically or dynamically using the `generateMetadata` function on page roots.
  * Routing MUST utilize Next.js `Link` components or the `useRouter` hook for client-side navigation.
  * Dynamic routes MUST leverage incremental static regeneration (ISR) or static page generation (SSG) where possible.
* **Forbidden Practices**:
  * Do NOT use HTML anchor tags `<a>` for internal routing.
  * Do NOT perform page redirects via hard refreshes unless clearing storage states.
* **Reasoning**: Next.js features must be utilized properly to leverage optimizations like page pre-fetching.
* **Exceptions**: External links MUST use traditional anchor tags with secure relations (`rel="noopener noreferrer"`).
* **Trade-offs**: Configuring dynamic metadata adds parameters, but is essential for SEO.

## 17. Server Component Rules
* **Purpose**: Govern the usage of React Server Components (RSC) to maximize server-side rendering advantages.
* **Requirements**:
  * Pages and layouts MUST be Server Components by default.
  * Database queries and secure API calls MUST be executed inside Server Components.
  * Server Components MUST pass primitive data or plain objects to Client Components.
* **Forbidden Practices**:
  * Do NOT import client hooks (`useState`, `useEffect`, `usePathname`) in Server Components.
  * Do NOT pass non-serializable objects (like class instances) across the server-client boundary.
* **Reasoning**: Proper RSC usage decreases javascript payload size on clients.
* **Exceptions**: None.
* **Trade-offs**: Restricting data passing requires restructuring complex data trees into plain JSON objects.

## 18. Client Component Rules
* **Purpose**: Control the scope and implementation of Client Components.
* **Requirements**:
  * Components MUST be marked with the `"use client"` directive only when they require user interaction (e.g., clicks, forms) or browser APIs.
  * Client Components SHOULD be pushed down the component tree to minimize the interactive bundle size.
  * Interactive components MUST implement proper loading and error boundaries.
* **Forbidden Practices**:
  * Do NOT mark a root layout or main page file with `"use client"` unless absolutely necessary.
  * Do NOT execute server secrets or secure operations inside Client Components.
* **Reasoning**: Minimizing client bundles optimizes page speed and SEO indexability.
* **Exceptions**: None.
* **Trade-offs**: Moving interactivity down the tree requires more modular file design.

## 19. Composition Rules
* **Purpose**: Guide the creation of flexible and highly reusable layouts.
* **Requirements**:
  * Complex layouts MUST use the `children` prop pattern to compose layouts dynamically.
  * Parent components SHOULD avoid styling child components directly; style variants MUST be passed as Tailwind configuration classes.
  * Modular layout elements (e.g., sidebars, navigation bars) MUST be swappable.
* **Forbidden Practices**:
  * Do NOT build deeply nested, hardcoded components that cannot accept structural variations.
  * Do NOT create monolithic components that handle both layout composition and core data mutation.
* **Reasoning**: Composed structures allow changing layout trees without editing individual components.
* **Exceptions**: Highly specific, isolated branding sections.
* **Trade-offs**: Composition patterns require designing components in a decoupled manner.

## 20. SOLID Principles
* **Purpose**: Apply object-oriented and functional SOLID design principles to React.
* **Requirements**:
  * **Single Responsibility**: Each component, utility, or hook MUST perform one task.
  * **Open/Closed**: Components SHOULD be open for extension (via props or slots) but closed for modification.
  * **Liskov Substitution**: Replaced components MUST support the original prop contract without breaking parent components.
  * **Interface Segregation**: Prop interfaces MUST only define properties the component actually consumes.
  * **Dependency Inversion**: Component logic MUST depend on abstract utilities rather than direct system dependencies.
* **Forbidden Practices**:
  * Do NOT group unrelated features or layouts into a single file.
  * Do NOT write components that require rewriting internal layout switches for every new parameter.
* **Reasoning**: SOLID ensures that adding features does not introduce regressions in existing codebase modules.
* **Exceptions**: None.
* **Trade-offs**: Rigid adherence to SOLID requires extensive interface design and file separation.

## 21. DRY (Don't Repeat Yourself)
* **Purpose**: Eliminate logic duplication across the codebase.
* **Requirements**:
  * Business rules, utility math, and API clients MUST be written in one place and exported globally.
  * Repeated UI patterns MUST be refactored into shared utility components.
  * Code duplication detection tools SHOULD be run during pull request cycles.
* **Forbidden Practices**:
  * Do NOT duplicate identical validation schemas or API endpoints across different components.
  * Do NOT copy-paste styling blocks; refactor to Tailwind variables or shared utilities instead.
* **Reasoning**: Keeping logic centralized simplifies updates, audits, and fixes.
* **Exceptions**: Mild styling duplication is permitted if wrapping it in a component adds unnecessary complexity.
* **Trade-offs**: Aggressive DRY-ing can lead to over-abstracted code that is hard to read.

## 22. KISS (Keep It Simple, Stupid)
* **Purpose**: Promote straightforward, clean, and plain solution structures.
* **Requirements**:
  * The simplest working solution MUST be prioritized over clever, nested, or overly optimized implementations.
  * Code structures MUST read sequentially, avoiding unnecessarily complex abstractions.
  * Loops, data structures, and conditional blocks MUST prioritize clarity.
* **Forbidden Practices**:
  * Do NOT implement custom state management when simple state or url query params suffice.
  * Do NOT write nested, complex helper code when standard javascript libraries or built-ins exist.
* **Reasoning**: Simple code is easier to debug, test, and maintain by both engineers and AI agents.
* **Exceptions**: Low-level physics or rendering math inside Three.js modules.
* **Trade-offs**: Plain solutions might require writing more explicit code blocks rather than short, clever tricks.

## 23. YAGNI (You Aren't Gonna Need It)
* **Purpose**: Prevent code bloating from unimplemented speculative features.
* **Requirements**:
  * Features, components, and libraries MUST only be added if there is an active specification request.
  * Extraneous utility helper functions MUST be deleted unless they have active call paths.
  * Design patterns MUST plan for current requirements, not speculative future capabilities.
* **Forbidden Practices**:
  * Do NOT write placeholder API routes, mock components, or unused utility parameters for "future use".
  * Do NOT install packages under the assumption they will be needed later.
* **Reasoning**: Speculative code adds to build size and increases maintenance overhead.
* **Exceptions**: None.
* **Trade-offs**: Developers must refactor components when new requirements arrive rather than relying on early scaffolding.

## 24. Feature-First Architecture
* **Purpose**: Structure code around business features rather than technical layers.
* **Requirements**:
  * Features MUST be isolated inside `src/features/[feature-name]/`.
  * Each feature folder MUST export its public API (components, hooks, types) via an `index.ts` file.
  * Cross-feature imports MUST only import from the public API of another feature.
* **Forbidden Practices**:
  * Do NOT import internal or private files directly from another feature's subfolders.
  * Do NOT create global files that handle specific feature business rules.
* **Reasoning**: Feature isolation makes features easy to refactor, replace, or completely delete.
* **Exceptions**: Generic UI building blocks in `src/components/`.
* **Trade-offs**: Feature-first structures create deep folder paths, but keep modules isolated.

## 25. Shared Layer Rules
* **Purpose**: Regulate dependencies in the shared folder layer.
* **Requirements**:
  * Files in `src/lib/`, `src/components/`, or `src/types/` MUST NOT import from `src/features/`.
  * Shared UI components MUST be stateless and only manage layout or presentation.
  * Shared utilities MUST be pure functions with predictable inputs and outputs.
* **Forbidden Practices**:
  * Do NOT import specific feature components inside shared headers, sidebars, or layout components.
  * Do NOT add business logic rules inside the generic `src/lib/` wrappers.
* **Reasoning**: A clean dependency chain prevents circular import loops and module load issues.
* **Exceptions**: Global context providers (e.g., theme providers).
* **Trade-offs**: Shared utilities must have generalized interfaces to work with different feature requirements.

## 26. Design System Governance
* **Purpose**: Maintain design and styling integrity.
* **Requirements**:
  * All spacing, typography, and colors MUST utilize Tailwind v4 utility classes.
  * Components MUST align to the grid system (e.g., standard container padding, consistent gap settings).
  * Design tokens MUST be documented in the repository's configuration files.
* **Forbidden Practices**:
  * Do NOT bypass the design system with custom, ad-hoc inline styles.
  * Do NOT introduce custom font sizes or colors without registering them in the global configuration.
* **Reasoning**: Design system compliance keeps the site's branding consistent.
* **Exceptions**: Special one-off marketing designs approved by the architect.
* **Trade-offs**: Strictly mapping sizes can slow down layout adjustments.

## 27. Animation Governance
* **Purpose**: Control performance overhead caused by web animations.
* **Requirements**:
  * CSS transitions SHOULD be preferred for simple hover states.
  * Framer Motion or R3F MUST be reserved for complex transitions and scroll animations.
  * Animations MUST run at 60 FPS or higher on average mobile devices.
* **Forbidden Practices**:
  * Do NOT run animations that mutate properties causing browser layout recalculation (e.g., `width`, `height`, `top`). Use `transform` instead.
  * Do NOT load animations that run constantly on background tabs.
* **Reasoning**: Heavy, unoptimized animations degrade mobile performance.
* **Exceptions**: None.
* **Trade-offs**: Optimizing animations requires profiling and testing across devices.

## 28. Accessibility (WCAG 2.2 AA)
* **Purpose**: Ensure the site is accessible to users with disabilities.
* **Requirements**:
  * All public pages MUST meet WCAG 2.2 AA standards.
  * Every image MUST have descriptive `alt` text unless strictly decorative.
  * Interactive elements MUST have clear focus indicators and support complete keyboard navigation.
* **Forbidden Practices**:
  * Do NOT use color as the only way to convey information or interactive status.
  * Do NOT disable user zoom scaling on mobile viewports.
* **Reasoning**: Inclusive web design ensures access for all users, including those using assistive technologies.
* **Exceptions**: Experimental 3D environments (R3F) MAY fallback to accessible 2D alternatives.
* **Trade-offs**: Implementing full accessibility controls requires careful planning and testing.

## 29. Performance Governance
* **Purpose**: Maintain rapid page load speeds.
* **Requirements**:
  * Production bundles MUST be optimized using code splitting, dynamic imports, and asset compression.
  * Next.js static optimizations MUST be applied to all pages that do not require dynamic user data.
  * Database queries MUST be indexed and cached where possible.
* **Forbidden Practices**:
  * Do NOT import large libraries globally; use dynamic imports on page layouts instead.
  * Do NOT render unoptimized assets or uncompressed data formats.
* **Reasoning**: Fast loading speeds improve user retention and SEO ranking.
* **Exceptions**: None.
* **Trade-offs**: Optimization requires managing assets and caching configurations.

## 30. Core Web Vitals Budget
* **Purpose**: Enforce strict performance budgets.
* **Requirements**:
  * Largest Contentful Paint (LCP) MUST be under 2.5 seconds.
  * Cumulative Layout Shift (CLS) MUST be under 0.1.
  * Interaction to Next Paint (INP) MUST be under 200 milliseconds.
* **Forbidden Practices**:
  * Do NOT load non-critical resources before the page's main content has rendered.
  * Do NOT cause layout shifts by omitting dimensions on images or media containers.
* **Reasoning**: Meeting Core Web Vitals guarantees a smooth user experience.
* **Exceptions**: Heavy 3D rendering pages MAY have a higher initial LCP budget.
* **Trade-offs**: Restricting bundle sizes limits the volume of libraries loaded on page load.

## 31. Image Rules
* **Purpose**: Standardize image usage and compression.
* **Requirements**:
  * Images MUST use the Next.js `Image` component.
  * Images MUST have exact width and height dimensions or use the `fill` prop with explicit parent sizing.
  * Output formats MUST support modern formats like WebP or AVIF.
* **Forbidden Practices**:
  * Do NOT use raw, unoptimized `<img>` tags for static assets.
  * Do NOT commit high-resolution raw images (e.g., PNGs/JPEGs over 500KB) directly to the repository.
* **Reasoning**: Optimized images prevent layout shifts and keep pages loading quickly.
* **Exceptions**: SVGs used as icons can be inline or loaded via image elements.
* **Trade-offs**: Image optimization requires setting up responsive breakpoints.

## 32. Font Rules
* **Purpose**: Optimize loading patterns for custom typography.
* **Requirements**:
  * Web fonts MUST be loaded locally using `next/font` to eliminate layout shifts.
  * Font formats MUST use WOFF2 for modern compression.
  * Fonts MUST include standard fallback values (e.g., `sans-serif`) to prevent blank text rendering.
* **Forbidden Practices**:
  * Do NOT load external fonts via `@import` in global CSS or CDN links in document headers.
  * Do NOT load unnecessary font weights or character sets.
* **Reasoning**: Local, self-hosted fonts prevent layout shifts and eliminate external network dependency.
* **Exceptions**: None.
* **Trade-offs**: Downloading local font files increases the repository size slightly.

## 33. SEO Governance
* **Purpose**: Ensure search engine indexing and search discoverability.
* **Requirements**:
  * Every page MUST include a unique, descriptive meta title and description.
  * The page heading structure MUST include a single, semantic `<h1>` element.
  * Semantic HTML5 tags (e.g., `<header>`, `<main>`, `<footer>`, `<article>`) MUST be used throughout the layout.
* **Forbidden Practices**:
  * Do NOT use placeholder text or generic titles (like "Home").
  * Do NOT create pages with broken or misaligned heading structures.
* **Reasoning**: Correct SEO structure helps the site rank higher on search engines.
* **Exceptions**: None.
* **Trade-offs**: Building comprehensive SEO metadata increases development configuration work.

## 34. GEO Governance
* **Purpose**: Handle regional routing, translations, and compliance.
* **Requirements**:
  * The site MUST implement SEO hreflang tags to support regional versions.
  * Asset loading SHOULD leverage CDN edge nodes to ensure quick rendering globally.
  * Cookie notices and data capture forms MUST comply with local privacy regulations (e.g., GDPR).
* **Forbidden Practices**:
  * Do NOT hardcode localized strings within template files; use dynamic dictionaries instead.
  * Do NOT block users based on regional IP addresses unless required by compliance.
* **Reasoning**: Global import/export companies require compliant, fast access across international markets.
* **Exceptions**: None.
* **Trade-offs**: Implementing multi-region compliance adds routing and cookie setup tasks.

## 35. Schema.org Governance
* **Purpose**: Enhance search results with structured metadata.
* **Requirements**:
  * Pages MUST embed Schema.org structured data using JSON-LD.
  * Main pages MUST include schema markup for the `Person` and `Organization` entities.
  * Article and service pages MUST include `Article` or `Service` schema markup.
* **Forbidden Practices**:
  * Do NOT write custom, invalid JSON-LD formats that fail schema validator checks.
  * Do NOT duplicate structured data schemas on the same page.
* **Reasoning**: Structured schemas enable search engines to display rich snippets, improving click-through rates.
* **Exceptions**: None.
* **Trade-offs**: Structuring and maintaining JSON-LD scripts requires regular verification.

## 36. Structured Data Rules
* **Purpose**: Ensure structured schemas are valid.
* **Requirements**:
  * Structured data MUST be dynamically populated from page props.
  * JSON-LD scripts MUST be loaded via the Next.js `script` component or standard tags inside headers.
  * Schema data MUST match the visible page text exactly.
* **Forbidden Practices**:
  * Do NOT include outdated, mismatched, or deceptive information in structured schemas.
  * Do NOT load schema scripts outside the document head.
* **Reasoning**: Clean schema scripts prevent search ranking penalties.
* **Exceptions**: None.
* **Trade-offs**: Dynamic schema creation adds parsing code to layout files.

## 37. Metadata Rules
* **Purpose**: Govern metadata configurations.
* **Requirements**:
  * Layout files MUST define default metadata object settings.
  * OpenGraph (OG) and Twitter card metadata MUST be present on all public routes.
  * Metadata objects MUST include icons, manifests, and viewport settings.
* **Forbidden Practices**:
  * Do NOT deploy routes with missing metadata profiles.
  * Do NOT use low-resolution OG images.
* **Reasoning**: High-quality metadata ensures consistent branding when pages are shared on social media.
* **Exceptions**: Internal admin portals do not require public metadata profiles.
* **Trade-offs**: Managing dynamic metadata variables adds complexity to route layouts.

## 38. Security Rules
* **Purpose**: Protect the application from common web vulnerabilities.
* **Requirements**:
  * All input fields MUST be validated and sanitized using Zod on both client and server sides.
  * API routes MUST implement rate limiting to prevent brute-force attacks.
  * Secure cookies containing JWTs MUST use `HttpOnly`, `Secure`, and `SameSite=Strict` flags.
* **Forbidden Practices**:
  * Do NOT store API keys, tokens, or credentials in git-tracked code files.
  * Do NOT trust client-side validation alone; always validate inputs on the server.
* **Reasoning**: Web applications must be secured to protect user data and prevent exploitation.
* **Exceptions**: None.
* **Trade-offs**: Implementing rate limiting and cookie management adds backend configuration work.

## 39. Testing Philosophy
* **Purpose**: Validate codebase reliability and performance.
* **Requirements**:
  * Business logic helper utilities MUST have unit tests.
  * Critical user flows (like contact forms and dashboard logins) MUST have integration tests.
  * Test suites MUST run automatically in CI/CD pipelines.
* **Forbidden Practices**:
  * Do NOT write superficial tests that only check if a component renders.
  * Do NOT skip testing critical features due to development deadlines.
* **Reasoning**: Robust test coverage ensures stable releases and prevents regression bugs.
* **Exceptions**: Experimental layouts and interactive 3D components MAY skip full integration testing.
* **Trade-offs**: Writing tests increases development time but reduces long-term maintenance costs.

## 40. Review Process
* **Purpose**: Maintain code quality during development.
* **Requirements**:
  * Every pull request MUST be reviewed by at least one engineer.
  * Code changes MUST pass automated CI builds and test suites before merge.
  * Reviews MUST verify compliance with this Constitution.
* **Forbidden Practices**:
  * Do NOT merge code directly into the main branch without review.
  * Do NOT approve pull requests that contain failing builds or tests.
* **Reasoning**: Collaborative code reviews prevent code style divergence and catch potential bugs early.
* **Exceptions**: Critical hotfixes can be merged directly if approved by the architect.
* **Trade-offs**: The review process can slow down immediate deployment but keeps the codebase stable.

## 41. Definition of Done
* **Purpose**: Define when a task is officially complete.
* **Requirements**:
  * A task is DONE when it compiles with zero errors, passes all tests, and matches the design layout.
  * Code changes MUST be merged into the main branch, and the build must run successfully.
  * The implementation MUST meet all accessibility and performance budgets.
* **Forbidden Practices**:
  * Do NOT mark a task as complete if it has not been tested or reviewed.
  * Do NOT deploy features that cause performance metric drops.
* **Reasoning**: A clear Definition of Done prevents incomplete features from entering production.
* **Exceptions**: None.
* **Trade-offs**: Restricting releases to this definition requires thorough planning and validation.

## 42. Technical Debt Policy
* **Purpose**: Control codebase complexity and technical debt.
* **Requirements**:
  * Code shortcuts MUST be documented using `TODO: (architect-approved-issue)` comments.
  * Technical debt tickets MUST be scheduled and resolved in regular development cycles.
  * Outdated dependencies MUST be updated to keep the system secure and maintainable.
* **Forbidden Practices**:
  * Do NOT ignore long-standing bugs or code issues.
  * Do NOT introduce custom hacks that complicate core framework features.
* **Reasoning**: Managing technical debt keeps the codebase clean and prevents system instability.
* **Exceptions**: None.
* **Trade-offs**: Allocating time for debt resolution reduces the speed of new feature development.

## 43. Refactoring Rules
* **Purpose**: Define when and how code should be refactored.
* **Requirements**:
  * Refactoring MUST only be done to improve code design, readability, or performance without changing behavior.
  * Test suites MUST pass successfully before and after refactoring.
  * Refactoring steps MUST be isolated in dedicated commits or branches.
* **Forbidden Practices**:
  * Do NOT combine refactoring and new feature development in the same branch.
  * Do NOT refactor working systems without verified test coverage.
* **Reasoning**: Refactoring should improve code maintainability without introducing regression bugs.
* **Exceptions**: None.
* **Trade-offs**: Refactoring takes time and focus away from building new features.

## 44. AI Coding Rules
* **Purpose**: Ensure AI agents follow the repository guidelines.
* **Requirements**:
  * AI agents MUST read this Constitution before editing files or running commands.
  * Agents MUST generate code that aligns with the established directory and naming styles.
  * AI-generated changes MUST be verified by running the project test suites.
* **Forbidden Practices**:
  * Do NOT allow AI agents to import unauthorized third-party libraries.
  * Do NOT accept AI code changes without reviewing them for security and performance impact.
* **Reasoning**: AI agents must adhere to the project standards to prevent code style drift and regressions.
* **Exceptions**: None.
* **Trade-offs**: AI code generation may require adjustments to match the project's exact formatting guidelines.

## 45. AI Review Rules
* **Purpose**: Validate AI actions and review processes.
* **Requirements**:
  * AI-generated pull requests MUST undergo the standard peer review process.
  * AI agents MUST explain their code design decisions in pull request summaries.
  * Automated checks MUST run on all AI-submitted code.
* **Forbidden Practices**:
  * Do NOT merge AI-generated code directly into production branches without verification.
  * Do NOT bypass security checks for AI-written modules.
* **Reasoning**: Automated and peer review validation ensures that AI-generated code is safe and stable.
* **Exceptions**: None.
* **Trade-offs**: Verifying AI code requires developers to allocate time for review and analysis.

---

## 46. Forbidden Practices
* **Purpose**: List non-negotiable restrictions for the project.
* **Requirements**:
  * The practices listed below MUST NOT be used:
    * Do NOT bypass TypeScript strict compiling checks.
    * Do NOT store credentials, keys, or API tokens in git-tracked code files.
    * Do NOT use default alert, confirmation, or form UI styles.
    * Do NOT use direct database client imports inside Client Components.
    * Do NOT import specific feature components inside shared layout layers.
    * Do NOT use unoptimized image files or dynamic font import CDN paths.
    * Do NOT merge unreviewed or untested code into the main branch.
* **Forbidden Practices**: Violating any of these forbidden practices is a direct violation of this Constitution.
* **Reasoning**: Restricting these behaviors maintains security, performance, and code quality.
* **Exceptions**: None.
* **Trade-offs**: These strict limits ensure repository health, though they require developers to spend more time on validation.

**Version**: 1.0.0 | **Ratified**: 2026-07-04 | **Last Amended**: 2026-07-04
