# Feature Specification: Calculator Entry Fix & Rich Copy Summary

**Feature Branch**: `020-calculator-entry-fix-rich-copy`

**Created**: 2026-08-20

**Status**: Draft

**Input**: User description: "فيه مشكلة لما بدخل على الحاسبة وكمان لما بعمل نسخ ملخص الحاسبة المفروض يدون ملف فيه كل حاجة معروضة اعرف فيها كل التفاصيل زي ما هي ظاهرة على الموقع"

---

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Fix Duplicate-Key Console Error on Calculator Page (Priority: P1)

As a visitor navigating to the free merchant tools hub (`/ar/tools` or `/en/tools`), I want the page to load without any React console errors, so that the tool works reliably and without unexpected component duplication or omission issues.

**Why this priority**: A React duplicate-key warning (`Encountered two children with the same key "/ar/tools"`) means components may be silently omitted or rendered twice, directly breaking navigation reliability and degrading the user experience for the most important entry point on the site.

**Independent Test**: Can be tested by opening the browser DevTools console, navigating to `/ar/tools`, and verifying zero console errors related to duplicate keys appear in the React tree (including in the Footer component navigation link list).

**Acceptance Scenarios**:

1. **Given** a visitor opens `/ar/tools` in any browser, **When** the page fully loads, **Then** the browser console contains zero React warnings about duplicate child keys.
2. **Given** a user navigates from the home page to the tools page and back, **When** they inspect the console, **Then** no key-collision warnings appear during any route transition.
3. **Given** the Footer renders its column link lists, **When** the tools page URL appears in the link list, **Then** it uses a unique, non-URL-based React key so it does not collide with the Next.js route segment key.

---

### User Story 2 - Rich Calculation Summary Copy (Priority: P1)

As a merchant who has just filled in a calculator (e.g., CBM, Landed Cost, Profit Margin), I want the "Copy Calculation Summary / نسخ ملخص الحسابات" button to copy a comprehensive, human-readable text block containing **all visible calculated values and inputs**, so that I can paste it directly into a WhatsApp message, email, or notes app and share the full result without having to retype any numbers.

**Why this priority**: The current implementation only copies the tool name and a URL link — providing zero calculated values. This makes the copy feature functionally useless for merchants, who need the actual numbers (CBM, weights, costs, margins) to negotiate with suppliers or share with partners.

**Independent Test**: Can be tested by opening the CBM Calculator, entering any dimensions, then clicking "Copy Summary" and pasting into a text editor — the pasted text must contain the exact numerical outputs currently visible on screen (total CBM, total weight, container fill, etc.).

**Acceptance Scenarios**:

1. **Given** a merchant has entered dimensions in the CBM Calculator and results are visible on screen, **When** they click "نسخ ملخص الحسابات", **Then** the clipboard contains a structured text block that includes: tool name, all user inputs with labels and units, all computed result values with labels (e.g. "اجمالي CBM: 0.768 م3"), the website URL, and the current date/time.
2. **Given** a merchant uses the Landed Cost Calculator and sees an itemized cost breakdown, **When** they click "Copy Summary", **Then** the copied text lists every cost line item (product cost, freight, customs, VAT, per-unit landed cost) exactly as displayed in the results panel.
3. **Given** a merchant uses the Profit Margin calculator and the result shows a color-coded profitability status, **When** they copy the summary, **Then** the copied text includes the profitability label alongside all margin and ROI percentages.
4. **Given** the active tab is the Freight Estimator, **When** the summary is copied, **Then** it includes origin, destination, CBM, estimated FCL/LCL cost ranges, and any notes displayed in the results.
5. **Given** a user on mobile taps "Copy Summary", **When** the copy succeeds, **Then** a brief success toast confirms the copy without requiring additional interaction.

---

### Edge Cases

- **Empty / Incomplete Inputs**: If a merchant clicks "Copy Summary" before entering any values, the copied text must gracefully state "لم يتم إدخال بيانات بعد / No data entered yet" rather than copying zeros or empty labels.
- **Partial Inputs**: If only some fields are filled, only the fields with actual user-entered values and their computed results are included in the summary; missing inputs are omitted or marked as a dash.
- **Very Long Numbers**: Numbers must be rounded to 2-3 decimal places in the copied text (consistent with on-screen display).
- **Locale Consistency**: The language of the copied summary must match the active site locale (ar -> Arabic labels; en -> English labels).
- **Navigator.clipboard unavailable**: On older browsers or non-HTTPS contexts, the system must fall back gracefully so the user is never silently left with no copy.

---

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST fix all duplicate React key prop warnings on the /[locale]/tools route, ensuring the Footer and any other components using route-based keys are updated to use unique, non-URL-colliding keys.
- **FR-002**: Each calculator component (CBM, Volumetric, Landed Cost, Profit Margin, Freight Estimator) MUST expose a getSummaryText(locale) function or equivalent interface that returns a complete, human-readable text representation of its current inputs and computed results.
- **FR-003**: The ToolsHubLayout "Copy Summary" button MUST invoke the active tab's getSummaryText() and write the full rich text to the clipboard.
- **FR-004**: The copied summary text MUST include: (a) section header identifying the tool and website, (b) all user-visible input labels and their entered values with units, (c) all computed result labels and their formatted output values with units, (d) a profitability/status label where applicable, (e) the page URL, and (f) the formatted current date and time in locale-appropriate format.
- **FR-005**: The copy success feedback (check icon + message) MUST remain visible for at least 2.5 seconds after a successful clipboard write.
- **FR-006**: The system MUST handle clipboard API unavailability gracefully without throwing unhandled exceptions.
- **FR-007**: System MUST NOT require any user account, login, or network call to generate or copy the summary.
- **FR-008**: The rich summary text MUST be plain text (no HTML/Markdown markup) so it pastes cleanly into WhatsApp, email, and SMS without formatting artifacts.

### Key Entities

- **CalculatorSummary**: A structured plain-text block per calculator containing header, inputs section, results section, status, URL, and timestamp.
- **SummaryProvider**: A shared interface or hook contract that each calculator component implements to expose its current state as a summary string.

---

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Zero React duplicate-key console warnings appear on any page load or route transition to /[locale]/tools across Chrome, Firefox, and Safari.
- **SC-002**: 100% of the 5 calculators produce a non-empty, human-readable summary string when the copy button is clicked after entering at least one input value.
- **SC-003**: The copied text when pasted into WhatsApp or a plain text editor contains all visible numerical results — verified manually in under 30 seconds per calculator.
- **SC-004**: Copy action completes and shows confirmation feedback in under 300 milliseconds on any modern desktop or mobile browser.
- **SC-005**: When inputs are empty, the copied text contains a clear "no data" message rather than a string of zeros or empty labels.

---

## Assumptions

- The duplicate-key bug originates in the Footer component navigation link list where the link href value is used as the React key, causing collision when /ar/tools appears both as an item key and as the current route segment key managed by Next.js.
- Each calculator component already computes and displays results in its own local state; the getSummaryText() mechanism only needs to read and format that existing state — no new computation is required.
- Plain-text clipboard output (no rich HTML) is preferred for maximum paste compatibility across WhatsApp, Telegram, email clients, and notes apps.
- The feature is scoped to the existing 5 calculators in feature 019; no new calculators are added.
- Browser clipboard API (navigator.clipboard) is available in all targeted browsers under HTTPS; a document.execCommand fallback covers edge cases.
