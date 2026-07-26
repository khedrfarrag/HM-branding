# Contract: JSON-LD Schema Factories

**Feature**: 006-information-architecture
**Directory**: src/lib/schema/

Each schema factory is a pure function. It maps domain entities (defined in `src/domains/*/entities.ts`) to structured Schema.org JSON-LD elements.

---

## person.ts
```typescript
import { AuthorProfile } from "@/domains/author/entities";
export function buildPersonSchema(profile: AuthorProfile): PersonSchema;
```
Returns the canonical Person schema for Hussam Mabrouk.
The `@id` is always `https://hussam-mabrouk.com/#person`.

---

## organization.ts
```typescript
export function buildOrganizationSchema(): OrganizationSchema;
```
Returns the canonical Organization schema for Delta Import & Export.
The `@id` is always `https://hussam-mabrouk.com/#organization`.

---

## article.ts
```typescript
import { Article } from "@/domains/knowledge/entities";
export function buildArticleSchema(article: Article, locale: Locale, canonicalUrl: string): ArticleSchema;
```
Returns Article schema. `author` references Person `@id`. `inLanguage` is set from locale.

---

## course.ts
```typescript
import { Experience } from "@/domains/experiences/entities";
export function buildCourseSchema(experience: Experience, locale: Locale, canonicalUrl: string): CourseSchema;
```
Maps premium Experience packages to Course schemas, using Hussam Mabrouk as the primary instructor.

---

## place.ts
```typescript
import { ChinaCity, Market } from "@/domains/china/entities";
export function buildPlaceSchema(entity: ChinaCity | Market, locale: Locale, canonicalUrl: string): PlaceSchema;
```
Maps geo-specific nodes to Place schemas.
