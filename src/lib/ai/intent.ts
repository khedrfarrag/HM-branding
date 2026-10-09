export type ChatIntent =
  | "GREETING"
  | "HUSSAM_BIO"
  | "SAUDI_CUSTOMS_DOCS"
  | "EGYPT_CUSTOMS_DOCS"
  | "MACHINERY_SUPPLIER_QUESTIONS"
  | "MACHINERY_PRODUCTION_LINE"
  | "FACTORY_VERIFICATION"
  | "CUSTOMS_SHIPPING"
  | "CONSULTATION_BOOKING"
  | "GENERAL_TRADE";

/**
 * Categorize incoming user query into distinct trade, country & conversational intents.
 */
export function detectIntent(query: string): ChatIntent {
  const q = query.trim().toLowerCase();

  // 1. Casual Greetings & Small Talk
  const greetingRegex =
    /^(ازيك|عامل ايه|ازيك عامل اي|ازيك عامل ايه|ازيكوا|اخبارك|السلام عليكم|سلام عليكم|مرحبا|اهلا|أهلا|مرحبتين|صباح الخير|مساء الخير|hi|hello|hey|how are you)/i;
  if (greetingRegex.test(q) || q === "ازيك عامل اي") {
    return "GREETING";
  }

  // 2. Hossam Mabrouk Persona & Bio Queries (Who is Hussam?)
  const bioKeywords = [
    "من هو حسام",
    "مين حسام",
    "من هو حسام مبروك",
    "مين حسام مبروك",
    "خبرة حسام",
    "نبذة عن حسام",
    "من انت",
    "من أنت",
    "تعريف بحسام",
    "who is hussam",
    "about hussam",
  ];
  if (bioKeywords.some((k) => q.includes(k))) {
    return "HUSSAM_BIO";
  }

  // 3. Saudi Arabia Customs, SABER & Country-Specific Import Documents
  const saudiKeywords = [
    "السعودية",
    "السعوديه",
    "سابر",
    "saber",
    "المملكة",
    "الجمارك السعودية",
    "جمارك السعودية",
    "جمارك السعوديه",
    "ألومنيوم",
    "المونيوم",
    "الومنيوم",
    "شحنة المونيوم",
    "شحنة الومنيوم",
    "شحنة ألومنيوم",
    "الاوراق الطلوبه مني ف السعوديه",
    "أوراق الجمارك في السعودية",
    "مواصفات سعودية",
    "saso",
  ];
  if (saudiKeywords.some((k) => q.includes(k))) {
    return "SAUDI_CUSTOMS_DOCS";
  }

  // 4. Egypt Customs, Nafeza & ACI System
  const egyptKeywords = [
    "مصر",
    "نافذة",
    "nafeza",
    "aci",
    "acid",
    "cargox",
    "جمارك مصر",
    "الجمارك المصرية",
    "التسجيل المسبق",
    "سجل استيرادي",
  ];
  if (egyptKeywords.some((k) => q.includes(k))) {
    return "EGYPT_CUSTOMS_DOCS";
  }

  // 5. Supplier Technical Questions Checklist (e.g. Asking machinery / juice / food production suppliers)
  const supplierQuestionKeywords = [
    "اسال المورد",
    "أسأل المورد",
    "اسأل المورد",
    "اسأل المصنع",
    "اسال المصنع",
    "سؤال المورد",
    "أسئلة المورد",
    "المورد علي اي",
    "المورد على ايه",
    "المورد على اي",
    "استفسار المورد",
    "مصنع يعمل عصير",
    "مصنع عصير",
    "خط عصير",
    "مصنع اغذية",
    "مصنع أغذية",
  ];
  if (supplierQuestionKeywords.some((k) => q.includes(k))) {
    return "MACHINERY_SUPPLIER_QUESTIONS";
  }

  // 6. General Production Lines, Industrial Machinery & Equipment Sourcing
  const machineryKeywords = [
    "خط انتاج",
    "خط إنتاج",
    "خطوط انتاج",
    "خطوط إنتاج",
    "الة",
    "آلة",
    "آلات",
    "الات",
    "معدات",
    "ماكينة",
    "ماكينات",
    "مصنع آلات",
    "معدات ثقيلة",
    "قوالب",
    "قالب",
    "مولدات",
    "تشغيل تجريبي",
    "شراء خط",
  ];
  if (machineryKeywords.some((k) => q.includes(k))) {
    return "MACHINERY_PRODUCTION_LINE";
  }

  // 7. Factory Verification & Business Registration Audit
  const verificationKeywords = [
    "تحقق من مصنع",
    "مصداقية مصنع",
    "رخصة العمل",
    "سجل تجاري صيني",
    "gsxt",
    "فحص مصنع",
    "تدقيق مصنع",
    "رخصة شركة",
    "مصنع وهمي",
  ];
  if (verificationKeywords.some((k) => q.includes(k))) {
    return "FACTORY_VERIFICATION";
  }

  // 8. General Customs Clearance, Shipping Terms & Freight Operations
  const shippingKeywords = [
    "شحن",
    "نولون",
    "حاوية",
    "حاويات",
    "ميناء",
    "موانئ",
    "fob",
    "cif",
    "تخليص جمركي",
    "تخليص",
    "أوراق الجمارك",
    "الاوراق الطلوبه",
    "الاوراق المطلوبة",
  ];
  if (shippingKeywords.some((k) => q.includes(k))) {
    return "CUSTOMS_SHIPPING";
  }

  // 9. Direct Consultation Booking & WhatsApp Inquiry
  const bookingKeywords = [
    "حجز استشارة",
    "احجز استشارة",
    "استشارة خاصة",
    "حجز مكالمة",
    "تواصل واتساب",
    "تواصل مباشر",
    "رقم الواتس",
    "كيف احجز",
  ];
  if (bookingKeywords.some((k) => q.includes(k))) {
    return "CONSULTATION_BOOKING";
  }

  return "GENERAL_TRADE";
}
