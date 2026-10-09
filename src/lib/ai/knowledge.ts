import { ChatIntent } from "./intent";

/**
 * Ultimate Sourcing Knowledge Engine.
 * Delivers comprehensive, zero-hallucination expert trade responses matching exact intents,
 * countries, and materials (e.g. Saudi customs, SABER, aluminum, Egypt ACI, machinery, factory audits, Hussam bio).
 */
export function getKnowledgeResponse(intent: ChatIntent, isAr: boolean): string {
  switch (intent) {
    case "HUSSAM_BIO":
      return isAr
        ? `أهلاً بك! **حسام مبروك | مستشار التجارة الدولية والاستيراد والتوريد من الصين** — متخصص في فحص المصانع، تأسيس التجارة وإدارة الصفقات الدولية:

**👤 من هو المستشار حسام مبروك؟**
- **خبرة أكثر من 15 عاماً ميدانية** في الأسواق والمصانع الصينية (قوانغتشو، شنجن، إيوو، فوشان).
- **مؤسس ورئيس تنفيذي** لمجموعة HM Branding لتطوير التجارة الدولية والاستيراد والتصنيع.
- **مستشار متخصص** لمئات التجار والمستوردين في مصر، السعودية، الإمارات، والخليج العربي في تأسيس خطوط الإنتاج، التفاوض، وفحص المصانع المباشرة (GSXT Audit).
- **خبير في حماية الصفقات** عبر اتفاقيات NNN، التحقق من رخص الشركات الصينية، وضبط جودة الشحنات قبل التصدير.

📞 **تواصل مباشر وحجز جلسة استشارية مع المستشار حسام مبروك:**
👉 [احجز جلسة استشارية خاصة](https://hussam-mabrouk.com/ar#book) | 💬 [تواصل عبر الواتساب](https://wa.me/201070707166)`
        : `Welcome! **Hussam Mabrouk | International Trade & China Sourcing Advisor** — Specializing in Factory Audits, Trade Setup & Global Deal Management:

**👤 About Hussam Mabrouk:**
- **15+ Years On-Site Experience** across Chinese industrial hubs (Guangzhou, Shenzhen, Yiwu, Foshan).
- **Founder & CEO** of HM Branding for International Sourcing & Corporate Advisory.
- **Trusted Trade Advisor** for hundreds of business owners across KSA, Egypt, UAE & GCC in production line setup, price negotiations, and factory audits.
- **Expert in Deal Protection** via PRC NNN agreements, GSXT business license audits, and pre-shipment quality control.

📞 **Direct Advisory Contact:**
👉 [Book Consultation](https://hussam-mabrouk.com/en#book) | 💬 [WhatsApp Direct](https://wa.me/201070707166)`;

    case "SAUDI_CUSTOMS_DOCS":
      return isAr
        ? `أهلاً بك! لاستيراد شحنة **ألومنيوم أو معادن أو أي سلع ومواد بناء وتصنيع** إلى المملكة العربية السعودية وتخليصها جمركياً بسلام، تتطلب منظومة الجمارك السعودية وهيئة المواصفات والمقاييس المستندات التالية:

**📋 المستندات والاشتراطات الأساسية للتخليص الجمركي في السعودية:**
1. **السجل التجاري والبطاقة الاستيرادية:** سجل تجاري ساري يتضمن نشاط الاستيراد أو التجارة/التصنيع المناسب لقطاع شحنتك.
2. **شهادة المطابقة عبر منصة سابر (SABER Platform):** التسجيل على منصة "سابر" وإصدار شهادة المطابقة للمنتج (PCoC) وشهادة الإرسالية (SCoC) بالتنسيق مع المصنع الصيني عبر مختبر معتمد.
3. **الفاتورة التجارية المفسرة (Commercial Invoice):** فاتورة أصلية تتضمن تفاصيل الأسعار والكميات والمواصفات والـ HS Code، ومختومة بختم الشركة الصينية (Company Chop).
4. **بوليصة الشحن البحرية أو الجوية (Bill of Lading / AWB):** موضح بها اسم المستورد والسجل التجاري والوزن القائم والإجمالي ونوع الحاوية.
5. **شهادة المنشأ الرسمية (Certificate of Origin):** تظهر بوضوح عبارة **"صنع في الصين - Made in China"** بشكل غير قابل للإزالة على الكراتين والمنتج.
6. **قائمة التعبئة والتغليف (Packing List):** تبيّن تفاصيل الأوزان، عدد الأطبال أو الحزم، وأبعاد الشحنة.

📞 **تواصل استشاري مباشر والتنسيق:**
👉 [احجز جلسة استشارية خاصة مع المستشار حسام مبروك](https://hussam-mabrouk.com/ar#book) | 💬 [تواصل فورياً عبر الواتساب](https://wa.me/201070707166)`
        : `Welcome! To clear an **aluminum, metal, or manufactured goods shipment** through Saudi Arabian Customs (ZATCA / SABER), you need the following mandatory documents:

**📋 Mandatory Saudi Customs & SABER Import Documentation:**
1. **Commercial Registration (CR):** Valid Saudi business CR covering import/manufacturing activity.
2. **SABER Platform Conformity Certificates:** Product Conformity Certificate (PCoC) and Shipment Conformity Certificate (SCoC) issued via SABER.
3. **Commercial Invoice:** Detailed invoice stamped with the Chinese supplier's registered Company Chop and HS Codes.
4. **Bill of Lading / Air Waybill:** Original ocean B/L or AWB detailing consignee CR, gross weight, and container specs.
5. **Certificate of Origin:** Authenticated COO bearing indelible **"Made in China"** markings on packaging and units.
6. **Detailed Packing List:** Specifying pallet count, net/gross weight, and packaging specs.

📞 **Direct Strategy & Customs Review:**
👉 [Book Consultation](https://hussam-mabrouk.com/en#book) | 💬 [WhatsApp Us](https://wa.me/201070707166)`;

    case "EGYPT_CUSTOMS_DOCS":
      return isAr
        ? `أهلاً بك! للتخليص الجمركي على الشحنات القادمة من الصين إلى **جمهورية مصر العربية** عبر منظومة التسجيل المسبق للشحنات (ACI):

**📋 المستندات والخطوات اللازمة للتخليص الجمركي في مصر:**
1. **استخراج رقم ACID من منصة نافذة:** التسجيل على منصة "نافذة" (Nafeza) واستخراج الرقم التعريفي مبدئياً للشحنة (ACID) قبل الشحن بـ 48 ساعة على الأقل.
2. **رفع المستندات عبر شبكة CargoX:** إلزام المصنع الصيني بالتسجيل على CargoX ورفع الفاتورة والبوليصة وشهادة المنشأ ورقم ACID مدون بدقة على كافة الأوراق.
3. **السجل الاستيرادي والبطاقة الضريبية:** سجل استيرادي ساري ومتوافق مع الفئة الجمركية للمنتج.
4. **شهادة المنشأ والفاتورة الموثقة:** موضح بها **"صنع في الصين"** بشكل دائم.

👉 [احجز استشارة تخليص جمركي ومنظومة نافذة](https://hussam-mabrouk.com/ar#book) | 💬 [تواصل عبر الواتساب](https://wa.me/201070707166)`
        : `Welcome! For customs clearance into **Egypt** under the Advanced Cargo Information (ACI) System:

**📋 Mandatory Egyptian ACI & Customs Documentation:**
1. **ACID Number Issuance:** Issue the shipment ACID number on the Nafeza platform at least 48 hours prior to vessel loading.
2. **CargoX Document Upload:** Mandate the Chinese supplier to upload verified shipping docs bearing the exact ACID number via CargoX.
3. **Import License & Tax Card:** Valid Egyptian import registration corresponding to the product HS Code.
4. **Authenticated Commercial Invoice & COO:** Clearly marked with indelible "Made in China".

👉 [Book ACI Customs Consultation](https://hussam-mabrouk.com/en#book) | 💬 [WhatsApp Us](https://wa.me/201070707166)`;

    case "MACHINERY_SUPPLIER_QUESTIONS":
      return isAr
        ? `أهلاً بك! لشراء وتوريد **خط إنتاج عصير / أغذية أو آلات صناعية** ناجحة من الصين، إليك **الأسئلة الـ 5 الجوهرية** التي يجب طرحها وفحصها مع المورد الصيني:

**📋 قائمة أسئلة فحص مورد خطوط الإنتاج والآلات:**
1. **نوع التعبئة والسعة الإنتاجية:** ما هي السعة الفعلية باللتر/ساعة؟ وهل التعبئة في عبوات زجاجية، PET، أم عبوات كرتونية معقمة Aseptic Tetra Pack؟
2. **درجة الفولاذ المقاوم للصدأ (Stainless Steel Grade):** التأكد من أن جميع الأجزاء والأنبوبات الملامسة للعصير مصنوعة من الفولاذ الغذائي المعالج **SS316L** أو **SS304** لعدم تفاعلها مع الأحماض.
3. **وحدة التبسترة والتعقيم الحراري (UHT / Pasteurizer):** هل يشتمل الخط على نظام تعقيم عالي الحرارة (UHT) مدمج للحفاظ على مدة الصلاحية بدون مواد حافظة؟
4. **نظام التحكم الآلي PLC واللوحات (Control System):** ما هي ماركة نظام التحكم (مثل Siemens أو Delta) وهل شاشة اللمس تدعم اللغة الإنجليزية؟
5. **التشغيل التجريبي (Dry Run) والتركيب:** هل التزم المورد بتشغيل الخط حياً في المصنع قبل الفك، وتوفير مهندسين لترتيب وتدريب عمالتك في مصنعك؟

📞 **للتنسيق ومراجعة عروض أسعار ومواصفات الموردين مع المستشار حسام مبروك:**
👉 [احجز جلسة استشارية خاصة](https://hussam-mabrouk.com/ar#book) | 💬 [تواصل فورياً عبر الواتساب](https://wa.me/201070707166)`
        : `Welcome! When sourcing a **juice/food production line or industrial machinery** from China, here are the **5 core technical questions** to ask the supplier:

**📋 5-Point Machinery Supplier Technical Checklist:**
1. **Packaging Type & Hourly Output:** What is the actual volume capacity (liters/hr) and container format (PET, Glass, or Aseptic Tetra Pack)?
2. **Stainless Steel Grade:** Ensure all food-contact liquid pipes and mixing vats are certified **SS316L** or **SS304** food grade.
3. **UHT Pasteurization Unit:** Does the line include an integrated Ultra-High Temperature (UHT) sterilizer to extend shelf life naturally?
4. **PLC & Touchscreen Controls:** What is the PLC component brand (e.g. Siemens/Delta) and does it support English GUI?
5. **Pre-shipment Dry Run & Installation:** Does the supplier mandate on-site factory load testing and provide engineers for local installation?

📞 **Direct Strategy & Specification Review:**
👉 [Book Consultation](https://hussam-mabrouk.com/en#book) | 💬 [WhatsApp Us](https://wa.me/201070707166)`;

    case "MACHINERY_PRODUCTION_LINE":
      return isAr
        ? `أهلاً بك! شراء واستيراد **خطوط الإنتاج والآلات الصناعية** من الصين يتطلب منهجية استشارية دقيقة لحماية استثمارك:

**📋 الخطوات العمليّة الأربع لتوريد خطوط الإنتاج:**
1. **صياغة المواصفات الفنية:** تحديد طاقة الإنتاج بالساعة، الجهد الكهربائي، والمواصفات الهندسية بدقة.
2. **التحقق من المصنع المصنّع:** مراجعة رخصة العمل (GSXT) والتحقق من أن المصنع هو المصنّع الأصلي للآلة وليس مجرد تاجر.
3. **اتفاقية NNN المعتمدة:** حماية حقوقك الصناعية وتصاميمك قانونياً قبل تقديم أي دفعة مالية.
4. **التشغيل التجريبي الحي (Dry Run):** اختبار خط الإنتاج حياً في المصنع بحضور فني متأكد من سلامة الكنترول والدوائر الهيدروليكية والكهربائية قبل الشحن.

📞 **تواصل استشاري مباشر:**
تفضل بحجز استشارة مباشرة مع المستشار **حسام مبروك** لبحث تفاصيل مشروعك وخطة توريد الآلات:
👉 [احجز جلسة استشارية](https://hussam-mabrouk.com/ar#book) | 💬 [تواصل فورياً عبر الواتساب](https://wa.me/201070707166)`
        : `Welcome! Sourcing **production lines and industrial machinery** from China requires strict advisory engineering to safeguard your investment:

**📋 4-Step Machinery Sourcing Protocol:**
1. **Technical Specifications:** Define output capacity/hr, electrical voltage, and tolerance standards.
2. **Manufacturer Audit:** Verify Chinese GSXT legal business license to confirm direct OEM factory status.
3. **PRC NNN Agreement:** Enforce legally binding non-use, non-disclosure, and non-circumvention tooling protection.
4. **On-site Dry Run Testing:** Verify full operational load, PLC logic, and safety systems before dispatch.

📞 **Direct Advisory Booking:**
Book a direct strategy consultation with **Hussam Mabrouk**:
👉 [Book Consultation](https://hussam-mabrouk.com/en#book) | 💬 [WhatsApp Inquiry](https://wa.me/201070707166)`;

    case "FACTORY_VERIFICATION":
      return isAr
        ? `أهلاً بك! **التحقق من مصداقية المصنع الصيني** هو الخطوة الأهم لتجنب الاحتيال وتراجع الجودة:

**🔍 محاور الفحص الأساسية:**
1. طلب واستخراج رخصة العمل الموحدة (Unified Credit Code) والتحقق منها عبر بوابة GSXT الرسمية.
2. مطابقة الحساب البنكي الرسمي مع اسم الشركة الصيني القانوني بدقة.
3. تكليف شركة فحص جودة معتمدة لزيارة مقر المصنع والتأكد من خطوط الإنتاج الفعلية.

👉 [احجز استشارة فحص وتدقيق مصانع](https://hussam-mabrouk.com/ar#book) | 💬 [تواصل عبر الواتساب](https://wa.me/201070707166)`
        : `Welcome! **Verifying Chinese factory legitimacy** is critical to avoid scams and quality fade:

**🔍 Key Audit Pillars:**
1. Inspect the official Unified Social Credit Code via the Chinese GSXT database.
2. Confirm the corporate beneficiary bank account matches the exact registered Chinese entity name.
3. Commission an independent on-site factory audit before wiring any deposit.

👉 [Book Factory Audit Consultation](https://hussam-mabrouk.com/en#book) | 💬 [WhatsApp Us](https://wa.me/201070707166)`;

    case "CUSTOMS_SHIPPING":
      return isAr
        ? `أهلاً بك! تفاصيل **الشحن الدولي والتخليص الجمركي** من الصين تتطلب اختيار المصطلحات المناسبة:

**⚓ نقاط حاسمة في الشحن:**
- **FOB vs CIF:** ننصح دائماً بالشراء بنظام FOB لتتحكم في اختيار شركة الشحن ونولون الحاوية.
- **التسجيل المسبق:** استيفاء متطلبات منصة ACI/نافذة (مصر) أو SABER/سابر (السعودية) قبل الشحن بـ 48 ساعة.
- **تجميع الشحنات:** تجميع الطلبيات في حاوية متكاملة لتقليل التكاليف.

👉 [احجز استشارة استيراد وشحن](https://hussam-mabrouk.com/ar#book) | 💬 [تواصل عبر الواتساب](https://wa.me/201070707166)`
        : `Welcome! **Shipping & Customs Clearance** operations require clear Incoterms control:

**⚓ Essential Shipping Rules:**
- **FOB vs CIF:** Purchasing FOB gives you full control over freight forwarders and destination port charges.
- **Pre-loading Compliance:** Ensure ACI (Egypt) or SABER (Saudi Arabia) certificates are pre-issued.
- **Container Consolidation:** Combine multiple supplier orders into a single dedicated container.

👉 [Book Shipping Advisory Call](https://hussam-mabrouk.com/en#book) | 💬 [WhatsApp Us](https://wa.me/201070707166)`;

    case "CONSULTATION_BOOKING":
      return isAr
        ? `أهلاً بك! يسعدنا التواصل معك وحجز **جلسة استشارية خاصة مع المستشار حسام مبروك** لمناقشة تفاصيل مشروعك واستيرادك من الصين:

📅 **للحجز المباشر عبر الموقع:** [اضغط هنا لحجز جلسة استشارية](https://hussam-mabrouk.com/ar#book)
💬 **للتواصل السريع عبر الواتساب:** [تواصل معنا مباشرة على +201070707166](https://wa.me/201070707166)`
        : `Welcome! We look forward to guiding your China import operations:

📅 **Direct Booking:** [Book Advisory Session](https://hussam-mabrouk.com/en#book)
💬 **WhatsApp Direct:** [Chat on WhatsApp +201070707166](https://wa.me/201070707166)`;

    case "GREETING":
      return isAr
        ? "أهلاً بحضرتك! الحمد لله بخير وبأفضل حال. 🌹\n\nأنا **مساعد حسام مبروك الذكي** لاستشارات الاستيراد والتوريد والتصنيع في الصين.\n\nكيف يمكنني مساعدتك اليوم في مشروعك أو تجارب استيرادك؟"
        : "Hello! I am doing great, thank you! 😊\n\nI am **Hossam Mabrouk's AI Assistant** for China sourcing, trade, and manufacturing.\n\nHow can I help you with your import business or trade inquiries today?";

    default:
      return isAr
        ? `أهلاً بك! بصفتي مساعد حسام مبروك الذكي في الاستيراد والتوريد من الصين، يمكنني مساعدتك في الإجابة عن خطوات فحص المصانع، شراء خطوط الإنتاج والآلات، مصطلحات الشحن (FOB, CIF), وضبط الجودة.\n\nتفضل بحجز استشارة مباشرة لمناقشة مشروعك: [احجز استشارة مع حسام مبروك](https://hussam-mabrouk.com/ar#book) أو تواصل معنا عبر الواتساب: [تواصل عبر الواتساب](https://wa.me/201070707166).`
        : `Welcome! As Hussam Mabrouk's AI Sourcing Assistant, I can guide you through factory verification, machinery sourcing, trade terms (FOB, CIF), and quality control.\n\nBook a consultation: [Book Call](https://hussam-mabrouk.com/en#book) or [WhatsApp Us](https://wa.me/201070707166).`;
  }
}
