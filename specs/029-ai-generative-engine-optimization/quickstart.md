# Quickstart: Validating AEO / GEO AI Knowledge Engine

## Verification Scenarios

### 1. Test LLM Endpoints
```sh
# Verify /llms.txt
curl -i http://localhost:3000/llms.txt

# Verify /llms-full.txt
curl -i http://localhost:3000/llms-full.txt
```
**Expected**: Returns HTTP 200 OK with `Content-Type: text/plain; charset=utf-8` and full text corpus.

### 2. Validate Structured Data (JSON-LD)
- Navigate to `http://localhost:3000/ar/about/directory` and inspect `<script type="application/ld+json">`.
- Verify `@type: "Person"` and `@type: "Organization"` with linked `@id` values.
- Verify `FAQPage` schema on `http://localhost:3000/ar/knowledge/faq`.

### 3. Verify TypeScript Compilation
```sh
npx tsc --noEmit
```
**Expected**: Clean compilation with 0 errors.
