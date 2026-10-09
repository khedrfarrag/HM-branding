# Quickstart & Validation Guide: Free Merchant Tools Suite

**Feature**: 019-free-merchant-tools
**Date**: 2026-08-13

---

## 1. Prerequisites

- Node.js 18+ & npm
- Local development server running (`npm run dev`)

---

## 2. Validation Scenarios

### Scenario 1: Unrestricted Guest Access & CBM Calculation
1. Open browser in Incognito mode to `http://localhost:3000/ar/tools`.
2. Confirm the page loads instantly with zero login modal or email prompt.
3. In the CBM Calculator, enter:
   - Length: `50` cm, Width: `40` cm, Height: `30` cm
   - Quantity: `50` cartons, Weight: `12` kg/carton
4. **Expected Result**:
   - Total CBM displays `3.00 m³` (105.94 ft³).
   - Total Gross Weight displays `600 kg`.
   - 20ft Container Fill Rate displays `10.7%` (suggests LCL freight).
   - Data updates under 50ms without page reload.

### Scenario 2: Landed Cost & Profit Margin Calculation
1. Switch to the **Landed Cost & Profit Margin** tab.
2. Enter values:
   - Unit FOB Price: `$10.00`
   - Order Quantity: `1,000` units
   - International Freight: `$2,000`
   - Customs Tariff: `10%`
   - VAT: `14%`
   - Target Retail Price: `$35.00`
   - Platform Fee: `15%`
3. **Expected Result**:
   - Customs Duty: `$1,000.00`
   - Total Landed Cost: `$15,540.00` ($15.54 per unit).
   - Net Profit Per Unit: `$14.21`
   - Net Margin: `40.6%`, ROI: `91.4%`.
   - Status badge shows "ربحية ممتازة" (Healthy Profitability).

### Scenario 3: Copy Calculation Summary to Clipboard
1. Click **"نسخ ملخص الحسابات"** (Copy Summary).
2. Paste clipboard into any text editor.
3. **Expected Result**: Clipboard contains a clean, human-readable Arabic text breakdown ready to share on WhatsApp or email.

### Scenario 4: LocalStorage Re-entry Persistence
1. Close the browser tab or refresh `http://localhost:3000/ar/tools`.
2. Re-open the page.
3. **Expected Result**: Inputs previously entered in Scenario 1 & 2 are automatically restored from LocalStorage.

---

## 3. Automated Verification Command

```bash
npm run build
```
Build MUST complete with 0 errors across all static and dynamic pages.
