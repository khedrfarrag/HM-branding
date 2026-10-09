# Interface Contracts: AEO / GEO Engine Endpoints

## 1. `GET /llms.txt`
- **Content-Type**: `text/plain; charset=utf-8`
- **Output**: UTF-8 plain text summary of Hussam Mabrouk identity, primary services, and link to `/llms-full.txt`.

## 2. `GET /llms-full.txt`
- **Content-Type**: `text/plain; charset=utf-8`
- **Output**: Full corpus text containing executive biography, core services, trade glossary, and complete 200 FAQ questions & answers in AR/EN.

## 3. `GET /robots.txt`
- **Content-Type**: `text/plain; charset=utf-8`
- **Output**: Robot rules allowing AI crawlers (*GPTBot, PerplexityBot, ClaudeBot, Google-Extended*) and linking `sitemap.xml`.
