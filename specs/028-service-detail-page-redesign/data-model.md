# Phase 1 Data Model: Service Detail Page Redesign

## Core Data Entities

### Service Entity
- **slug**: `string` (e.g. `"sourcing"`, `"quality-control"`, `"verification"`)
- **title**: `string` (Localized title)
- **shortDescription**: `string` (Summary quote)
- **fullDescription**: `string` (Detailed service scope)
- **processSteps**: `Array<{ step: number; title: string; description: string }>` (Ordered workflow stages)
- **coverImage**: `string` (Optional hero graphic)
- **seo**: `{ title: string; description: string; canonicalPath: string }`

### SuccessStory Entity (Social Proof Linkage)
- **slug**: `string`
- **clientName**: `string`
- **industry**: `string`
- **challenge**: `string`
- **solution**: `string`
- **result**: `string` (Quantitative metric)
- **testimonialQuote**: `string`
- **serviceSlug**: `string` (Foreign key linkage to Service Entity)
