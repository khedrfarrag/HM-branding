# Data Model: Platform Gap Analysis & Audit

The following schemas represent the foundational data models required for Hussam Mabrouk's knowledge platform:

## 1. Person (Hossam Mabrouk Profile)
* **Description**: Represents the main brand profile. Emitted as a JSON-LD structured data object.
* **Fields**:
  * `id`: `String` (Unique identifier)
  * `name`: `String` ("Hussam Mabrouk" / "حسام مبروك")
  * `jobTitle`: `String` ("International Trade & Sourcing Expert")
  * `knowsAbout`: `List<String>` (e.g. Sourcing, Import/Export, China Trade)
  * `sameAs`: `List<String>` (Social media URLs and corporate registries)
  * `alumniOf`: `List<String>` (Academic credentials)
  * `memberOf`: `List<String>` (Affiliated organizations)

## 2. Article (Blog Posts & Sourcing Guides)
* **Description**: Model representing articles and guides in the Knowledge Center.
* **Fields**:
  * `slug`: `String` (Unique URL pathname slug)
  * `title`: `String` (Article title)
  * `description`: `String` (SEO meta description)
  * `content`: `Markdown` (Body text)
  * `author`: `Person` (Author bio association)
  * `category`: `String` (Topic grouping, e.g. Sourcing, Shipping)
  * `tags`: `List<String>` (Detail keywords)
  * `publishedAt`: `DateTime` (Publication date)
  * `updatedAt`: `DateTime` (Last edit date)
  * `locale`: `Enum<"ar", "en">` (Active translation language)

## 3. GlossaryTerm (Trade Jargon Definitions)
* **Description**: Represents a key trade term or concept.
* **Fields**:
  * `slug`: `String` (URL slug)
  * `term`: `String` (e.g. FOB, CIF, Letter of Credit)
  * `definition`: `String` (Definition text)
  * `locale`: `Enum<"ar", "en">`
  * `category`: `String` (e.g. Incoterms, Logistics, Finance)

## 4. Factory & Supplier Listing
* **Description**: Directory records for verified factories and trading companies.
* **Fields**:
  * `id`: `String` (Unique company ID)
  * `name`: `String` (Company name)
  * `origin`: `String` (Province, Country - e.g. Zhejiang, China)
  * `category`: `String` (Product capabilities, e.g. Plastics, Electronics)
  * `auditScore`: `Float` (Meridian & Co. verification rating)
  * `verified`: `Boolean` (Verification indicator)
  * `description`: `String` (Company bio)
  * `tags`: `List<String>` (Materials, processes)
