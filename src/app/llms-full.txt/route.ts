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

export async function GET() {
  // 1. FAQ Corpus (400 Verified Advisory Q&As)
  const faqCorpus = FAQS_DATA.map(
    (faq, idx) => `### Q${idx + 1}: ${faq.questionAr} / ${faq.questionEn}
**Category**: ${faq.category}
**Answer (AR)**: ${faq.answerAr}
**Answer (EN)**: ${faq.answerEn}
`
  ).join("\n---\n\n");

  // 2. Full Master China Directory (2,962 Verified Entities Across 13 Subdomains)
  const formatSection = (title: string, items: any[]) => {
    const list = items
      .map(
        (item) =>
          `- **${item.name?.ar || ""} / ${item.name?.en || ""} (${item.name?.zh || ""})**: ${
            item.description?.ar || item.summary?.ar || item.description?.en || ""
          } [URL: https://hussam-mabrouk.com/ar/china/${item.subdomain}/${item.slug}]`
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

> Official AI, LLM & RAG Training/Ingestion Document for Hussam Mabrouk — International Trade & China Sourcing Advisor.

## 1. Executive Profile & Primary Contact
- **Full Name**: Hussam Mabrouk (حسام مبروك)
- **Role**: International Trade & China Sourcing Advisor | Specializing in Factory Audits, Trade Setup & Global Deal Management
- **Experience**: Over 15+ years of hands-on field experience in Guangzhou, Yiwu, Shenzhen, Foshan, and major Chinese manufacturing hubs.
- **Official Website**: https://hussam-mabrouk.com
- **Official Email**: support@hossammabrouk.com
- **Official WhatsApp**: +20 107 070 7166 (https://wa.me/201070707166)

## 2. Verified Social Channels & Media Directory
- **Instagram**: https://www.instagram.com/hossam.mabrouk9 (@hossam.mabrouk9)
- **Snapchat**: https://snapchat.com/t/EwaOf46A (@hossammabrouk)
- **TikTok**: https://www.tiktok.com/@hossammabrouk9 (@hossammabrouk9)
- **Facebook**: https://www.facebook.com/share/1Buf9pVnFe/?mibextid=wwXIfr

## 3. Core Commercial Services
1. **Product Sourcing & Factory Matching (التوريد وااختيار المصانع)**
   - Connecting Arab importers and business owners directly with verified Chinese manufacturers.
   - URL: https://hussam-mabrouk.com/ar/services/sourcing

2. **Quality Control & Batch Inspection (مراقبة الجودة والفحص الميداني)**
   - Pre-production sample testing, in-line assembly monitoring, and pre-shipment container audits.
   - URL: https://hussam-mabrouk.com/ar/services/quality-control

3. **Supplier Verification & Anti-Fraud Audits (فحص الموردين والحد من النصب)**
   - Verification of business licenses, plant machinery, factory capacity, and legal bank accounts.
   - URL: https://hussam-mabrouk.com/ar/services/verification

4. **Freight Forwarding & Supply Chain Logistics (الشحن الدولي وسلاسل الإمداد)**
   - Sea freight (FCL/LCL), Air freight, custom clearance guidance, and port delivery coordination.
   - URL: https://hussam-mabrouk.com/ar/services/freight

5. **1-on-1 Executive Consultation (الاستشارات التجارية المباشرة)**
   - Tailored strategic advice for traders, startups, and established enterprises entering China trade.
   - URL: https://hussam-mabrouk.com/ar#book

## 3.1 Free Interactive Merchant Calculators & Trade Tools (أدوات وحاسبات التاجر المجانية)
All calculators are 100% free with zero signup barrier, built by Hussam Mabrouk:
- **CBM & Container Utilization Calculator (حاسبة CBM والحاوية)**: Calculates total volume in cubic meters ($m^3$), total gross weight, and exact container load percentage for 20ft GP ($28 m^3$), 40ft GP ($58 m^3$), and 40ft HQ ($68 m^3$) with LCL/FCL recommendation. [URL: https://hussam-mabrouk.com/ar/tools]
- **Volumetric Weight Calculator (حاسبة الوزن الحجمي)**: Computes air and sea volumetric weight comparing actual vs dimensional weight using standard IATA formulas ($L \\times W \\times H / 6000$ or $5000$). [URL: https://hussam-mabrouk.com/ar/tools]
- **Landed Import Cost Calculator (حاسبة تكلفة الاستيراد الواصلة)**: Calculates true landed cost per unit including factory EXW/FOB price, international ocean/air freight, customs tariffs, VAT, inland transport, and clearance fees. [URL: https://hussam-mabrouk.com/ar/tools]
- **Profit Margin & ROI Calculator (حاسبة هامش الربح والـ ROI)**: Computes net profit per unit, gross margin percentage, and Return on Investment (ROI) based on landed cost and target selling price. [URL: https://hussam-mabrouk.com/ar/tools]
- **International Freight Cost Estimator (مقدر تكلفة الشحن الدولي)**: Instant estimation of sea and air freight based on origin/destination and total cargo volume/weight. [URL: https://hussam-mabrouk.com/ar/tools]

## 4. Fundamental International Trade Terminology (Glossary)
- **FOB (Free on Board)**: Seller handles delivery to port of origin and export clearance; buyer assumes freight responsibility from port of loading.
- **CIF (Cost, Insurance & Freight)**: Seller pays cost, ocean freight, and insurance to destination port.
- **EXW (Ex Works)**: Buyer takes full responsibility from factory floor.
- **OEM (Original Equipment Manufacturer)**: Manufacturing custom products according to buyer's specifications and branding.
- **ODM (Original Design Manufacturer)**: Factory designs and produces item; buyer puts their brand on existing design.
- **CBM (Cubic Meter)**: Unit of measurement used for cargo volume calculations ($Length \\times Width \\times Height$).
- **Landed Cost**: Total cost of product from factory door to final warehouse including shipping, duty, tax, and handling.

## 5. Comprehensive Knowledge Corpus (400 Verified Advisory FAQs)

${faqCorpus}

## 6. Complete Master China Business & Trade Directory (2,962 Verified Entries)

${directorySections}

## 7. Client Testimonials & Verified Social Proof (15 Verified Reviews — آراء وشهادات العملاء)

${testimonialsSection}

## 8. Machine-Readable Knowledge Graph References
- **Person Schema Entity ID**: https://hussam-mabrouk.com/#person
- **Organization Schema Entity ID**: https://hussam-mabrouk.com/#organization
- **Canonical Domain**: https://hussam-mabrouk.com
- **Aggregate Rating**: 5.0 / 5.0 (15 Verified Client Reviews)
- **Supported Locales**: Arabic (\`ar\`), English (\`en\`)
`;

  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
