# Security & Compliance Rules

* **Filename**: `file:///g:/hossam%20mabrouk/.ai/compliance/regional-security.md`
* **Purpose**: Enforce global user protection, token-based authentication logic, and compliance rules.
* **Responsibility**: Protecting administrative endpoints and maintaining international standards compliance.
* **Dependencies**: [Constitution](file:///g:/hossam%20mabrouk/.specify/memory/constitution.md) (Security & GEO Governance)
* **Update Frequency**: High
* **AI Agents**: Security Auditor, Backend Developer
* **Priority**: CRITICAL

---

## 1. Authentication & Cookie Management
* **Rule**: Administrative sessions MUST use JWTs stored in HttpOnly, Secure, SameSite=Strict cookies.
* **Requirements**:
  * Tokens must expire within short limits, requiring rotation endpoints.

## 2. API Route Redirection & Middleware
* **Rule**: Next.js middleware MUST validate admin privileges before serving admin layouts or APIs.
* **Requirements**:
  * Bypassing authentication routes for admin pages is strictly FORBIDDEN.

## 3. GDPR Compliance & Privacy
* **Rule**: The site MUST implement cookie consent controls and geo-location routing for compliance.
* **Requirements**:
  * Logged visitor forms data must be encrypted before database storage.

## 4. Input Sanitization & Rate Limiting
* **Rule**: API endpoints MUST throttle request frequency and validate payloads using strict Zod schemas.
* **Requirements**:
  * Input parameter escaping must run on all dynamic query variables.
