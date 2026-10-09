import { NextResponse } from "next/server";

export async function GET() {
  const content = `# Hussam Mabrouk (حسام مبروك) | International Trade & China Sourcing Advisor

> Hussam Mabrouk is a leading International Trade & China Sourcing Advisor, specializing in Factory Audits, Trade Setup & Global Deal Management. This website provides executive consulting, supplier verification, quality control, and China business directories for Middle Eastern and global importers.

## Full AI Knowledge Corpus & 400 FAQs
- **Full LLM Knowledge File**: https://hussam-mabrouk.com/llms-full.txt

## Core Entities & Identity
- **Name**: Hussam Mabrouk (حسام مبروك)
- **Role**: International Trade & China Sourcing Advisor | Specializing in Factory Audits, Trade Setup & Global Deal Management
- **Official Website**: https://hussam-mabrouk.com
- **Official Contact**: +20 107 070 7166 (WhatsApp)
- **Official Email**: support@hossammabrouk.com

## Primary Services
1. **Product Sourcing & Factory Matching**: Connecting importers with verified Chinese manufacturers and negotiating competitive pricing.
   - URL: https://hussam-mabrouk.com/ar/services/sourcing
2. **Quality Control & Batch Inspection**: On-site factory auditing, pre-shipment inspections, and container loading monitoring.
   - URL: https://hussam-mabrouk.com/ar/services/quality-control
3. **Supplier Verification & Fraud Prevention**: Auditing legal registrations, business licenses, and production capacities of Chinese suppliers.
   - URL: https://hussam-mabrouk.com/ar/services/verification

## China Business Directory & Guides
- **China Industrial Cities Guide**: Comprehensive intelligence on Guangzhou, Yiwu, Shenzhen, Foshan, Ningbo, and major trade hubs.
  - URL: https://hussam-mabrouk.com/ar/china-cities
- **Trade Glossary & Knowledge Base**: Importing terminology, customs clearance guides, and logistics workflows.
  - URL: https://hussam-mabrouk.com/ar/knowledge

## Direct Booking & Advisory
- Executive Consultation Booking: https://hussam-mabrouk.com/ar/contact
`;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
