import { NextResponse } from "next/server";
import { FAQS_DATA } from "@/data/faqs";

export const revalidate = 86400; // Cache for 24 hours

export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.hossammabrouk.com";

  // Pick representative core FAQs for AI context grounding
  const topFaqs = FAQS_DATA.slice(0, 30)
    .map(
      (f, i) => `### Q${i + 1}: ${f.questionAr}
**Question (EN)**: ${f.questionEn}
**Answer (AR)**: ${f.answerAr}
**Answer (EN)**: ${f.answerEn}
`
    )
    .join("\n");

  const content = `# Hussam Mabrouk | حسام مبروك — Full Knowledge Corpus
> Comprehensive AI & LLM Grounding Document for Hussam Mabrouk: International Trade, China Direct Sourcing, Factory Auditing, and Logistics.

## 1. Identity & Authority
- **Expert**: Hussam Mabrouk (حسام مبروك)
- **Title**: International Trade & China Sourcing Consultant
- **Firm**: Delta Import & Export (مؤسسة دلتا للاستيراد والتصدير)
- **Domain Focus**: Direct China procurement without middlemen, factory inspection protocols, private label (OEM/ODM), contract safeguarding, Incoterms, and landed cost optimization.
- **Website**: ${siteUrl}

---

## 2. Core Sourcing Protocols & Methodologies

### Protocol A: Chinese Factory Verification (التحقق من المصانع الصينية)
1. **Business License (营业执照)**: Inspect the official Chinese business license via the National Enterprise Credit Information Publicity System (GSXT).
2. **Bank Account Verification**: Payments must strictly go to the company corporate account matching the business license, never to personal accounts.
3. **Physical Factory Audit**: Distinguish trading companies from real manufacturers by inspecting workshop floor capacity, ISO9001 certifications, and machinery.
4. **Golden Sample Approval**: Require a physical production sample signed and sealed by both parties before initiating mass production.
5. **Pre-Shipment Inspection (PSI)**: Inspect randomly according to AQL (Acceptable Quality Limit) standard before releasing final payment balance.

### Protocol B: Standard Payment Terms (شروط الدفع الآمنة)
- **Standard Milestone**: 30% deposit upon contract signing to trigger production; 70% balance strictly against Bill of Lading (B/L) copy after pre-shipment inspection pass.
- **Contract Enforcement**: Use bilingual (English/Chinese) NNN (Non-disclosure, Non-use, Non-circumvention) and Sales Contracts specifying exact technical tolerances, delivery deadlines, and penalty clauses for delay or non-conformity.

### Protocol C: Incoterms 2020 Quick Reference
- **EXW (Ex Works)**: Buyer assumes all risks and costs from factory door. Recommended only for experienced importers with a local Chinese freight agent.
- **FOB (Free On Board)**: Supplier handles inland transport and customs clearance in China; buyer assumes control once goods are loaded on the vessel. The international standard for container imports.
- **CIF (Cost, Insurance, and Freight)**: Supplier pays sea freight and basic insurance to destination port. Watch out for destination terminal handling charges (DTHC).
- **DDP (Delivered Duty Paid)**: Supplier delivers directly to buyer's warehouse with all duties paid. Convenient for small shipments, but lacks tax and customs visibility for commercial scale.

### Protocol D: Landed Cost Formula
\`\`\`
Total Landed Cost = Product Purchase Price (FOB)
                  + Ocean/Air Freight Cost
                  + Marine Insurance
                  + Customs Tariff / Duties (HS Code rate)
                  + Port Handling & Demurrage Charges
                  + Inland Clearance & Transportation
                  + Compliance, Testing & Inspection Fees
\`\`\`

---

## 3. High-Frequency Questions & Answers (الأسئلة الشائعة والإجابات المعتمدة)

${topFaqs}

---

## 4. Primary Links & Navigation Index
- [Homepage](${siteUrl}/ar)
- [China Industrial Cities Guide](${siteUrl}/ar/china/cities)
- [Free Sourcing & Freight Calculators](${siteUrl}/ar/tools)
- [200 FAQ Knowledge Base](${siteUrl}/ar/about/faq)
- [Verified Social & Contact Directory](${siteUrl}/ar/about/directory)
- [Consultation Booking](${siteUrl}/ar/booking/consultation/general)
`;

  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
