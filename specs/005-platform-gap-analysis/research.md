# Research Notes: Platform Gap Analysis & Audit

## Decision 1: Headless CMS and Content Engine
* **Decision**: Local MDX files loaded via `contentlayer` or `next-mdx-remote` for Phase 1/2, with a transition strategy to a headless CMS (e.g. Sanity) in Phase 3/4.
* **Rationale**: Sourcing directories, blog posts, glossary terms, and guides require high indexing speed, version control, and absolute performance. Storing content as Markdown/MDX in the git repository keeps loading times minimal, avoids database overhead, and supports seamless Arabic/English translation tracking directly in version control. As content volume scales (>1000 items), Sanity can be integrated as a visual editing interface.
* **Alternatives Considered**: 
  * *Relational Database (PostgreSQL)*: Rejected for initial blog/glossary content as it introduces database queries, connection pooling constraints, and slower load speeds compared to static page generation (SSG).

## Decision 2: Directory Search & Filtering Solution
* **Decision**: Client-side fuzzy search using `FlexSearch` for Phase 2/3 directory lists, with query state synchronized in URLSearchParams.
* **Rationale**: FlexSearch provides extremely fast client-side searching and operates well in-memory for directories under 5000 items. Binding filter selections to URL parameters ensures users can bookmark searches and share filtered directories (e.g., specific factories or products).
* **Alternatives Considered**:
  * *Algolia Search*: Rejected for the initial phase due to cost overhead and setup complexity, though it remains a viable alternative if the directory expands beyond 10,000 entities.

## Decision 3: Multi-Language Routing and Hreflang Configuration
* **Decision**: Keep Next.js middleware-based subrouting (`/[locale]/...`) but implement a customized HTML head component that outputs hreflang link alternates for both languages.
* **Rationale**: Multi-language indexing requires explicit signals to search engines. Without explicit hreflang headers, Google and other engines cannot easily map the relationship between `hossammabrouk.com/ar` and `hossammabrouk.com/en`, leading to search cannibalization.
* **Alternatives Considered**:
  * *Client-side dynamic translation (switching dictionary states on button click without path change)*: Rejected because search engine bots only index the default language, preventing indexation of translated versions.

## Decision 4: Schema.org JSON-LD Aggregation
* **Decision**: Standardized server-side helper function to build dynamic JSON-LD data objects for `Person`, `Organization`, `Article`, and `BreadcrumbList`.
* **Rationale**: Standardizing schema.org configurations as dynamic TypeScript objects validated by schemas ensures invalid structured data is caught at build time, preventing SEO/GEO crawler errors.
* **Alternatives Considered**:
  * *Static JSON-LD script files*: Rejected as they cannot handle dynamic content titles, categories, dates, and dynamic author bios.
