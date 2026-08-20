# Quickstart: Validating Calculator Entry Fix & Rich Copy Summary

**Feature**: `020-calculator-entry-fix-rich-copy`
**Date**: 2026-08-20

---

## Prerequisites

- `npm run dev` running on `http://localhost:3000`
- Chrome or Firefox with DevTools open
- A WhatsApp chat or plain text editor open for paste verification

---

## Scenario 1: Verify No Duplicate-Key Console Error

1. Open Chrome DevTools > Console tab
2. Navigate to `http://localhost:3000/ar/tools`
3. **Expected**: Console shows **zero** React warnings about `Encountered two children with the same key`
4. Navigate back to `http://localhost:3000/ar` then forward to `/ar/tools` again
5. **Expected**: Still zero key warnings on re-navigation
6. Repeat for `/en/tools`
7. **Pass criteria**: No red or yellow duplicate-key entries in console on any load

---

## Scenario 2: CBM Calculator Rich Copy

1. Go to `/ar/tools`, select "حاسبة CBM والحاوية" tab
2. Enter: Length=60, Width=40, Height=40, Quantity=20, Weight/Box=15, Unit=Metric
3. Click "نسخ ملخص الحسابات" button — button should briefly show ✓ check icon
4. Open a plain text editor and paste (Ctrl+V)
5. **Expected pasted content includes**:
   - Header line: `حاسبة الحجم CBM`
   - Inputs: `الطول: 60 cm`, `العرض: 40 cm`, `الارتفاع: 40 cm`, `الكراتين: 20`, `وزن الكرتونة: 15 kg`
   - Results: `الحجم الإجمالي: 0.768 م³`, `الوزن القائم: 300 kg`, `نسبة 20ft: X%`, `نسبة 40ft HQ: X%`
   - Website URL + date/time stamp
6. **Pass criteria**: All visible on-screen numbers appear in pasted text

---

## Scenario 3: Landed Cost Rich Copy

1. Select "تكلفة الاستيراد الواصل" tab
2. Enter: Unit FOB=$10, Quantity=1000, China Freight=$150, Intl Freight=$1800, Duty=10%, VAT=14%, Other=$200
3. Click "نسخ ملخص الحسابات"
4. Paste into text editor
5. **Expected**: All 7 input fields + Landed Cost per unit + Total Investment + cost share percentages visible
6. **Pass criteria**: `التكلفة النهائية للقطعة` value matches on-screen value exactly

---

## Scenario 4: Profit Margin Rich Copy

1. Select "هامش الربح والـ ROI" tab
2. Enter: Retail Price=35, Landed Cost=15.5, Platform Fee=15%, Marketing=3
3. Click copy
4. Paste
5. **Expected**: Net Profit/unit, Margin%, ROI%, Break-even price, and profitability status label (e.g., "ربحية ممتازة")
6. **Pass criteria**: Profitability status emoji + label present in copied text

---

## Scenario 5: Empty State Copy

1. Select any tab
2. Click Reset button to clear inputs to defaults
3. Click "نسخ ملخص الحسابات"
4. Paste
5. **Expected**: Text contains the calculator name and default values — NOT an empty string or "undefined"
6. **Pass criteria**: Pasted text is non-empty and readable

---

## Scenario 6: Freight Estimator Copy

1. Select "مقدر الشحن" tab
2. Set Destination = "شمال أفريقيا", Mode = "Sea LCL"
3. Click copy and paste
4. **Expected**: Destination label + mode + estimated rate range ($60-$95/CBM) all present
5. **Pass criteria**: Rate range string matches displayed value exactly
