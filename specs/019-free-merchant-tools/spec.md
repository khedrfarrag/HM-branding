# Feature Specification: Free Merchant & Trade Calculators Suite (أدوات مجانية للتاجر)

**Feature Branch**: `019-free-merchant-tools`

**Created**: 2026-08-13

**Status**: Draft

**Input**: User description: "أدوات مجانية للتاجر (حاسبة CBM، حاسبة الشحن، حاسبة هامش الربح، حاسبة تكلفة الاستيراد، حساب الوزن الحجمي) بدون تسجيل في البداية لجلب زيارات متكررة"

---

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Instant CBM & Volumetric Weight Calculation (Priority: P1)

As an importer or e-commerce merchant, I want to instantly calculate package CBM (Cubic Meters) and Volumetric Weight (Weight vs Volume ratio) by entering package dimensions and quantity, so that I can determine my shipping space requirements without creating an account or logging in.

**Why this priority**: CBM and Volumetric Weight are the most frequent daily calculations performed by merchants sourcing goods from China. Eliminating registration friction turns this tool into an instant daily destination.

**Independent Test**: Can be tested by entering package length, width, height (in cm or inches), box count, and actual weight, and verifying that total CBM and chargeable volumetric weight (air vs sea formula) render instantly in under 1 second.

**Acceptance Scenarios**:

1. **Given** a merchant visits the free tools hub, **When** they select the CBM & Volumetric Weight Calculator and input dimensions (e.g., 60×40×40 cm, 20 cartons, 15 kg each), **Then** the system instantly displays total volume in CBM (0.768 m³), total gross weight (300 kg), and air/sea chargeable weight without requesting email or login.
2. **Given** a merchant inputs measurements in imperial units (inches/lbs), **When** they toggle the unit selector to Metric (cm/kg), **Then** the inputs and results dynamically convert without losing data.

---

### User Story 2 - Total Import & Landed Cost Breakdown (Priority: P1)

As an active merchant or investor, I want to calculate the total landed cost per unit (Product Cost + China Domestic Shipping + Customs Duty + Freight + Inspection + Local Clearance), so that I know my true cost before issuing a purchase order.

**Why this priority**: Miscalculating landed cost is the #1 reason new importers lose money. Providing a transparent cost breakdown builds immense trust in Hussam Mabrouk's brand authority.

**Independent Test**: Can be tested by entering unit purchase price, order quantity, estimated customs tax percentage, and total freight cost, then checking if landed cost per item and total investment breakdown are correctly calculated and visualized.

**Acceptance Scenarios**:

1. **Given** an importer planning an order of 1,000 units at $5/unit, **When** they enter product cost, shipping estimate, 10% customs tariff, and 14% VAT/tax, **Then** the tool outputs the exact landed cost per unit and itemized cost pie/bar distribution.
2. **Given** an importer uses the tool, **When** they click "Share / Save Calculation Summary", **Then** the tool generates a clean summary view or copyable breakdown link without requiring account creation.

---

### User Story 3 - Profit Margin & Freight Cost Estimator (Priority: P2)

As a merchant selling on Amazon, Noon, or direct e-commerce, I want to enter target selling price and total landed cost to determine net profit margin, ROI percentage, and break-even sales price across air and sea freight scenarios.

**Why this priority**: Merchant profitability depends on knowing net margins after platform fees, marketing budget, and shipping costs.

**Independent Test**: Can be tested by providing landed cost ($12) and target retail price ($35) with platform fee percentage (15%), verifying net profit dollar amount ($17.75) and net profit margin percentage (50.7%) are computed accurately.

**Acceptance Scenarios**:

1. **Given** a merchant evaluating a prospective product, **When** they input retail price, landed cost, and estimated selling fees, **Then** the tool displays net margin percentage, return on investment (ROI), and a color-coded profitability indicator (Healthy / Tight / Unprofitable).
2. **Given** a merchant comparing air freight vs sea freight, **When** they toggle between freight mode estimates, **Then** the profit margin recalculates dynamically showing the profit differential between fast air and economical sea freight.

---

### User Story 4 - Seamless Guest Access & Contextual Educational CTAs (Priority: P2)

As a site visitor using the free merchant tools, I want complete unrestricted access to all 5 calculators without signup prompts, while having optional context-aware CTAs to consult Hussam Mabrouk or download trade guides if I need expert help.

**Why this priority**: Zero-barrier access maximizes repeat visits and organic traffic word-of-mouth, while strategically placed soft CTAs convert heavy tool users into consultation leads naturally.

**Independent Test**: Can be tested by opening any calculator in incognito mode, running 10 consecutive calculations without encountering any lockouts, popups, or required fields, and verifying soft CTAs appear below results.

**Acceptance Scenarios**:

1. **Given** a first-time visitor on mobile or desktop, **When** they navigate to `/ar/tools` or the home page tools section, **Then** all 5 calculators are 100% interactive immediately without modal overlays or email gates.
2. **Given** a visitor completes a complex landed cost calculation, **When** their result indicates a high-risk or tight margin scenario, **Then** a helpful contextual badge appears offering a link to book a sourcing consultation or read the China Import Guide.

---

### Edge Cases

- **Zero or Negative Numbers**: Input fields must reject negative values and handle zero inputs gracefully without throwing division-by-zero errors in margin/ROI formulas.
- **Extreme Unit Quantities**: Handling large shipment volumes (e.g., 100,000 cartons or 5,000 m³) without layout distortion or floating-point rounding artifacts (rounding strictly to 2 or 3 decimal places).
- **Unusual Box Sizing**: Extremely long/narrow items (e.g., 200 cm × 5 cm × 5 cm) where volumetric weight dominates actual weight by a 10:1 ratio.
- **Offline / Mobile Re-entry**: Calculator inputs persist in browser local storage so refreshing the page does not erase entered dimensions.

---

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST provide a dedicated "Free Merchant Tools" hub (`/tools`) featuring 5 interactive calculators: CBM Calculator, Freight Shipping Calculator, Net Profit Margin Calculator, Total Import Landed Cost Calculator, and Volumetric Weight Calculator.
- **FR-002**: System MUST allow 100% unrestricted guest access to all calculators without requiring registration, email submission, or login.
- **FR-003**: The CBM Calculator MUST compute total cubic volume in m³ and ft³, total gross weight, carton count, and container capacity utilization (20ft, 40ft, 40ft HQ container fill percentages).
- **FR-004**: The Volumetric Weight Calculator MUST calculate chargeable weight using industry-standard ratios for Air Freight (1:6000 / 167 kg per m³) and Express Courier (1:5000 / 200 kg per m³).
- **FR-005**: The Total Import Landed Cost Calculator MUST itemize product unit price, domestic shipping, international freight, customs duty, VAT/taxes, inspection fees, and port handling into a clear per-unit cost.
- **FR-006**: The Net Profit Margin Calculator MUST compute net profit dollar amount, profit margin percentage, ROI percentage, and break-even retail price based on user-entered cost and selling parameters.
- **FR-007**: The Freight Shipping Calculator MUST estimate cost ranges for Ocean Freight (FCL/LCL) and Air Freight based on origin (China ports) and destination region (GCC, North Africa, Europe).
- **FR-008**: System MUST support dynamic Metric (cm/m/kg) and Imperial (in/ft/lbs) unit toggling with instant automatic unit conversions.
- **FR-009**: System MUST auto-save active calculator inputs in browser local storage so user calculations persist across page refreshes.
- **FR-010**: System MUST provide a "Copy Calculation Summary" and "Reset" action for every calculator allowing merchants to share results via WhatsApp or email.
- **FR-011**: System MUST display brand-aligned contextual recommendations below calculation results (e.g., "Need help verifying supplier quotes? Book a consultation").
- **FR-012**: System MUST automatically generate SEO Schema.org `WebApplication` / `SoftwareApplication` JSON-LD markup for each tool to maximize organic Google search visibility.

### Key Entities

- **CalculatorTool**: Represents an individual merchant tool (ID, slug, nameAr, nameEn, description, icon, category).
- **CalculationInputs**: User-provided numerical parameters (dimensions, weights, prices, tariff rates, fees, units).
- **CalculationResults**: Computed outputs (CBM, volumetric weight, landed cost per unit, margin %, ROI, container fill rate).
- **ContainerPreset**: Standard container specifications (20ft GP = 33 m³, 40ft GP = 67 m³, 40ft HQ = 76 m³).

---

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of tools can be used immediately upon page load without any registration or login prompt.
- **SC-002**: Calculation results update in real-time under 50 milliseconds upon modifying any input field.
- **SC-003**: 95% of users can complete a CBM and Landed Cost calculation in under 60 seconds on mobile devices.
- **SC-004**: Repeat visits to the free tools section increase by at least 35% within 60 days of launch due to bookmarking and daily utility.
- **SC-005**: All 5 tools achieve a 100% pass rate on WCAG 2.2 AA accessibility and mobile touch target guidelines.

---

## Assumptions

- Standard volumetric weight ratios: Air Freight = `Dimensions in cm / 6000`, Courier/Express = `Dimensions in cm / 5000`, Sea Freight LCL = 1 m³ = 1,000 kg.
- Container payload volumes: 20ft = ~28-30 m³ usable space, 40ft HQ = ~65-68 m³ usable space (accounting for real-world packing gaps).
- All calculations run client-side in the browser for maximum speed and offline support.
- Initial version does not require server-side database storage of user calculations; local storage and URL query sharing are sufficient for guest users.
