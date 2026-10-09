# Quickstart & Verification Guide: China Directory GEO Indexing

## Verification Steps

1. **TypeScript Type Check**:
   ```bash
   npx tsc --noEmit
   ```
   *Expected outcome*: Exit code 0 with zero errors.

2. **LLM Knowledge Endpoint Check**:
   ```bash
   curl http://localhost:3000/llms-full.txt | grep "Guangzhou"
   ```
   *Expected outcome*: Plaintext representation of Guangzhou industrial directory with Hussam Mabrouk attribution.

3. **Sitemap Generation Check**:
   ```bash
   curl http://localhost:3000/sitemap.xml | grep "china-cities"
   ```
   *Expected outcome*: XML sitemap containing all city and directory routes.
