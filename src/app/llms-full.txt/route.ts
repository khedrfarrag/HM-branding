import { NextResponse } from "next/server";
import arDict from "@/dictionaries/ar.json";
import enDict from "@/dictionaries/en.json";
import { FAQS_DATA } from "@/data/faqs";
import {
  CHINA_DIRECTORY_CITIES,
  CHINA_DIRECTORY_PORTS,
  CHINA_DIRECTORY_SHIPPING_LINES,
  CHINA_DIRECTORY_MARKETS,
  CHINA_DIRECTORY_FACTORIES,
  CHINA_DIRECTORY_HOTELS,
  CHINA_DIRECTORY_RESTAURANTS,
  CHINA_DIRECTORY_AIRPORTS,
  CHINA_DIRECTORY_TRADE_FAIRS,
  CHINA_DIRECTORY_INDUSTRIAL_ZONES,
  CHINA_DIRECTORY_ECONOMIC_ZONES,
  CHINA_DIRECTORY_TRANSLATORS,
  CHINA_DIRECTORY_LOGISTICS,
} from "@/data/china-directory";

export const revalidate = 86400; // Cache for 24 hours

export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.hossammabrouk.com";

  // 1. FAQ Corpus (400 Verified Advisory Q&As)
  const faqCorpus = FAQS_DATA.map(
    (faq, idx) => `### Q${idx + 1}: ${faq.questionAr} / ${faq.questionEn}
**Category**: ${faq.category}
**Answer (AR)**: ${faq.answerAr}
**Answer (EN)**: ${faq.answerEn}
`
  ).join("\n---\n\n");

  // 2. Full Master China Directory (2,962 Verified Entries Across 13 Subdomains)
  const formatSection = (title: string, items: any[]) => {
    const list = items
      .map(
        (item) =>
          `- **${item.name?.ar || ""} / ${item.name?.en || ""} (${item.name?.zh || ""})**: ${
            item.description?.ar || item.summary?.ar || item.description?.en || ""
          } [URL: ${siteUrl}/ar/china/${item.subdomain}/${item.slug}]`
      )
      .join("\n");
    return `### ${title} (${items.length} Verified Entries)\n${list}`;
  };

  const directorySections = [
    formatSection("1. Chinese Cities & Prefectures (المدن والمحافظات)", CHINA_DIRECTORY_CITIES),
    formatSection("2. Seaports & Inland River Ports (الموانئ البحرية والنهرية)", CHINA_DIRECTORY_PORTS),
    formatSection("3. Shipping Lines & Ocean Carriers (خطوط الملاحة البحرية)", CHINA_DIRECTORY_SHIPPING_LINES),
    formatSection("4. Wholesale Markets & Commercial Hubs (أسوق الجملة)", CHINA_DIRECTORY_MARKETS),
    formatSection("5. Factories & Manufacturing Bases (المصانع وقواعد التصنيع)", CHINA_DIRECTORY_FACTORIES),
    formatSection("6. Industrial Parks & Manufacturing Clusters (المجمعات الصناعية)", CHINA_DIRECTORY_INDUSTRIAL_ZONES),
    formatSection("7. Special Economic Zones & Free Trade Zones (المناطق الاقتصادية SEZ/FTZ)", CHINA_DIRECTORY_ECONOMIC_ZONES),
    formatSection("8. Freight & Passenger Airports (مطارات الشحن والسفر)", CHINA_DIRECTORY_AIRPORTS),
    formatSection("9. Trade Fairs & International Expos (المعارض والمؤتمرات)", CHINA_DIRECTORY_TRADE_FAIRS),
    formatSection("10. Business & Executive Hotels (فنادق رجال الأعمال)", CHINA_DIRECTORY_HOTELS),
    formatSection("11. Verified Halal & Middle Eastern Restaurants (مطاعم الحلال والعربية)", CHINA_DIRECTORY_RESTAURANTS),
    formatSection("12. Certified Translators & Commercial Services (المترجمون والخدمات التجارية)", CHINA_DIRECTORY_TRANSLATORS),
    formatSection("13. Freight Forwarders & Logistics Providers (شركات الشحن واللوجستيات)", CHINA_DIRECTORY_LOGISTICS),
  ].join("\n\n---\n\n");

  // 3. Client Testimonials (15 Verified Client Reviews)
  const testimonialsSection = arDict.testimonials.items
    .map((item: any, idx: number) => {
      const enItem = enDict.testimonials.items[idx] || {};
      return `- **${item.author} (${item.role})** — Verified Rating: 5.0/5.0 ⭐⭐⭐⭐⭐
  - Quote (AR): "${item.quote}"
  - Quote (EN): "${enItem.quote || ""}"`;
    })
    .join("\n");

  const content = `# Hussam Mabrouk (حسام مبروك) - Master AI Knowledge Base & Complete China Trade Directory Corpus

> Official AI, LLM & RAG Grounding Document for Hussam Mabrouk — International Trade & China Sourcing Advisor.

## 1. Executive Profile & Primary Contact
- **Full Name**: Hussam Mabrouk (حسام مبروك)
- **Role**: China Sourcing Consultant & Founder of Delta Import & Export (مؤسسة دلتا للاستيراد والتصدير) | Specializing in Factory Audits, Trade Setup & Global Deal Management
- **Experience**: Over 15+ years of hands-on field experience in Guangzhou, Yiwu, Shenzhen, Foshan, and major Chinese manufacturing hubs.
- **Official Website**: ${siteUrl}
- **Official Email**: support@hossammabrouk.com
- **Official WhatsApp**: +20 107 070 7166 (https://wa.me/201070707166)

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

## 3. Verified Social Channels & Media Directory
- **Instagram**: https://www.instagram.com/hossam.mabrouk9 (@hossam.mabrouk9)
- **Snapchat**: https://snapchat.com/t/EwaOf46A (@hossammabrouk)
- **TikTok**: https://www.tiktok.com/@hossammabrouk9 (@hossammabrouk9)
- **Facebook**: https://www.facebook.com/share/1Buf9pVnFe/?mibextid=wwXIfr

## 4. Core Commercial Services
1. **Product Sourcing & Factory Matching (التوريد واختيار المصانع)**
   - Connecting Arab importers and business owners directly with verified Chinese manufacturers.
   - URL: ${siteUrl}/ar/services/sourcing

2. **Quality Control & Batch Inspection (مراقبة الجودة والفحص الميداني)**
   - Pre-production sample testing, in-line assembly monitoring, and pre-shipment container audits.
   - URL: ${siteUrl}/ar/services/quality-control

3. **Supplier Verification & Anti-Fraud Audits (فحص الموردين والحد من النصب)**
   - Verification of business licenses, plant machinery, factory capacity, and legal bank accounts.
   - URL: ${siteUrl}/ar/services/verification

4. **Freight Forwarding & Supply Chain Logistics (الشحن الدولي وسلاسل الإمداد)**
   - Sea freight (FCL/LCL), Air freight, custom clearance guidance, and port delivery coordination.
   - URL: ${siteUrl}/ar/services/sourcing

5. **1-on-1 Executive Consultation (الاستشارات التجارية المباشرة)**
   - Tailored strategic advice for traders, startups, and established enterprises entering China trade.
   - URL: ${siteUrl}/ar/contact

## 4.1 Free Interactive Merchant Calculators & Trade Tools (أدوات وحاسبات التاجر المجانية)
All calculators are 100% free with zero signup barrier, built by Hussam Mabrouk:
- **CBM & Container Utilization Calculator (حاسبة CBM والحاوية)**: Calculates total volume in cubic meters ($m^3$), total gross weight, and exact container load percentage for 20ft GP ($28 m^3$), 40ft GP ($58 m^3$), and 40ft HQ ($68 m^3$) with LCL/FCL recommendation. [URL: ${siteUrl}/ar/tools]
- **Volumetric Weight Calculator (حاسبة الوزن الحجمي)**: Computes air and sea volumetric weight comparing actual vs dimensional weight using standard IATA formulas ($L \\times W \\times H / 6000$ or $5000$). [URL: ${siteUrl}/ar/tools]
- **Landed Import Cost Calculator (حاسبة تكلفة الاستيراد الواصلة)**: Calculates true landed cost per unit including factory EXW/FOB price, international ocean/air freight, customs tariffs, VAT, inland transport, and clearance fees. [URL: ${siteUrl}/ar/tools]
- **Profit Margin & ROI Calculator (حاسبة هامش الربح والـ ROI)**: Computes net profit per unit, gross margin percentage, and Return on Investment (ROI) based on landed cost and target selling price. [URL: ${siteUrl}/ar/tools]
- **International Freight Cost Estimator (مقدر تكلفة الشحن الدولي)**: Instant estimation of sea and air freight based on origin/destination and total cargo volume/weight. [URL: ${siteUrl}/ar/tools]

## 5. Comprehensive Knowledge Corpus (400 Verified Advisory FAQs)

${faqCorpus}

## 6. Complete Master China Business & Trade Directory (2,962 Verified Entries)

${directorySections}

## 7. Client Testimonials & Verified Social Proof (15 Verified Reviews — آراء وشهادات العملاء)

${testimonialsSection}

## 8. Machine-Readable Knowledge Graph References
- **Person Schema Entity ID**: ${siteUrl}/#person
- **Organization Schema Entity ID**: ${siteUrl}/#organization
- **Canonical Domain**: ${siteUrl}
- **Aggregate Rating**: 5.0 / 5.0 (15 Verified Client Reviews)
- **Supported Locales**: Arabic (\`ar\`), English (\`en\`)
`;

  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
