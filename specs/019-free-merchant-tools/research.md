# Research & Technical Decisions: Free Merchant Tools Suite

**Feature**: 019-free-merchant-tools
**Date**: 2026-08-13

---

## 1. Domain Mathematics & Calculations

### 1.1 CBM & Container Usability Formula
- **Unit Inputs**: Length ($L$), Width ($W$), Height ($H$) in centimeters ($cm$) or inches ($in$), and Quantity ($Q$).
- **Volume Calculation**:
  $$\text{Volume per box (m³)} = \frac{L_{cm} \times W_{cm} \times H_{cm}}{1,000,000}$$
  $$\text{Total CBM (m³)} = \text{Volume per box} \times Q$$
- **Imperial Conversion**: $1 \text{ in} = 2.54 \text{ cm}$. $1 \text{ m³} = 35.3147 \text{ ft³}$.
- **Container Usable Capacities** (accounting for real-world packing gaps):
  - 20ft Container (20GP): Usable capacity = $28.0 \text{ m³}$ (Max payload = 21,700 kg)
  - 40ft Container (40GP): Usable capacity = $58.0 \text{ m³}$ (Max payload = 26,500 kg)
  - 40ft High Cube (40HQ): Usable capacity = $68.0 \text{ m³}$ (Max payload = 26,500 kg)
- **Container Utilization Percentage**:
  $$\text{Utilization \%} = \min\left(100, \left(\frac{\text{Total CBM}}{\text{Usable Capacity}}\right) \times 100\right)$$

### 1.2 Volumetric Weight Formulas
- **Courier / Express (DHL, FedEx, UPS)**:
  $$\text{Volumetric Weight (kg)} = \frac{L_{cm} \times W_{cm} \times H_{cm}}{5000} \times Q$$
- **Standard Air Freight**:
  $$\text{Volumetric Weight (kg)} = \frac{L_{cm} \times W_{cm} \times H_{cm}}{6000} \times Q$$
- **Sea Freight LCL**:
  $$\text{Volumetric Weight (kg)} = \text{Total CBM} \times 1,000$$
- **Chargeable Weight**:
  $$\text{Chargeable Weight} = \max(\text{Actual Gross Weight}, \text{Volumetric Weight})$$

### 1.3 Total Import Landed Cost Formula
- **Itemized Inputs**: Unit FOB Price ($P$), Order Quantity ($Q$), China Inland Logistics ($L_{cn}$), International Freight ($F$), Customs Duty Rate ($D\%$), Import VAT Rate ($V\%$), Inspection & Clearance Fees ($C_{clear}$).
- **Calculations**:
  $$\text{Total Product FOB Cost} = P \times Q$$
  $$\text{Customs Duty Amount} = P \times Q \times \frac{D}{100}$$
  $$\text{VAT Amount} = (P \times Q + \text{Customs Duty Amount}) \times \frac{V}{100}$$
  $$\text{Total Import Cost} = (P \times Q) + L_{cn} + F + \text{Customs Duty Amount} + \text{VAT Amount} + C_{clear}$$
  $$\text{Landed Cost Per Unit} = \frac{\text{Total Import Cost}}{Q}$$

### 1.4 Profit Margin & ROI Formulas
- **Inputs**: Landed Cost Per Unit ($C_{landed}$), Target Retail Selling Price ($S$), Selling Platform Fee Rate ($F_{platform}\%$), Marketing/Ad Cost Per Unit ($M_{ad}$).
- **Calculations**:
  $$\text{Platform Fee Amount} = S \times \frac{F_{platform}}{100}$$
  $$\text{Net Profit Per Unit} = S - C_{landed} - \text{Platform Fee Amount} - M_{ad}$$
  $$\text{Net Profit Margin \%} = \left(\frac{\text{Net Profit}}{S}\right) \times 100$$
  $$\text{Return on Investment (ROI) \%} = \left(\frac{\text{Net Profit}}{C_{landed}}\right) \times 100$$
  $$\text{Break-Even Selling Price} = \frac{C_{landed} + M_{ad}}{1 - \frac{F_{platform}}{100}}$$

---

## 2. Technical Architecture Decisions

- **Architecture**: Feature-first module `src/features/tools/` following project Constitution.
- **Client/Server Split**:
  - `src/app/[locale]/(marketing)/tools/page.tsx` (Server Component - SEO Metadata, Schema.org JSON-LD).
  - `src/features/tools/components/ToolsHubLayout.tsx` (Client Component - Interactive tabbed tool suite, dynamic calculations, local storage, copy summary).
- **State Management**: Zero global state libraries. Local React state (`useState`, `useReducer`) synchronized with browser `localStorage` via a lightweight `useCalculatorStorage` hook.
- **SEO & Schema.org**: Embed `WebApplication` JSON-LD schema for each tool to maximize organic Google search rich snippets.

---

## 3. Rationale & Alternatives Considered

| Decision | Rationale | Alternatives Evaluated |
|---|---|---|
| Client-side calculation | Instant 0ms latency, works offline, zero server cost | Server action endpoints (rejected due to network latency) |
| Feature-first `src/features/tools` | Complies with project constitution, isolated modules | Global `components/` (violates constitution rule 24) |
| LocalStorage persistence | Auto-restores merchant data on page refresh without account | Server database storage (violates zero-signup requirement) |
