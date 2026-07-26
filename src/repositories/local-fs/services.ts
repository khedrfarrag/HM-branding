import { Locale } from "@/domains/shared/value-objects";
import { Service, SuccessStory } from "@/domains/services/entities";
import { IServiceRepository } from "@/domains/services/repository";

export class LocalFsServiceRepository implements IServiceRepository {
  async getServices(locale: Locale): Promise<Service[]> {
    const isAr = locale === "ar";
    return [
      {
        slug: "sourcing",
        status: "published",
        publishedAt: "2026-07-08T00:00:00Z",
        updatedAt: "2026-07-08T00:00:00Z",
        seo: {
          title: isAr ? "خدمة البحث عن المصانع وتأمين المنتجات في الصين" : "China Product Sourcing and Supplier Matching Services",
          description: isAr ? "نبحث لك عن أفضل المصانع الصينية، ونتفاوض على الأسعار ونضمن مطابقة الشروط" : "Professional product sourcing services in China",
          canonicalPath: `/${locale}/services/sourcing`
        },
        title: isAr ? "البحث عن المنتجات والمصادر" : "Product Sourcing",
        shortDescription: isAr 
          ? "نصلك بأفضل المصانع المعتمدة في الصين ونفاوض للحصول على أفضل الصفقات." 
          : "We connect you to verified factories and negotiate competitive pricing.",
        fullDescription: isAr 
          ? "دراسة كاملة لمتطلبات منتجك وتصفية الموردين للتأكد من القدرة التصنيعية الفعالة."
          : "Full technical specification matching and factory capability assessments.",
        coverImage: "/images/services/sourcing.jpg",
        processSteps: [
          { step: 1, title: isAr ? "تحديد المواصفات" : "Spec Definition", description: isAr ? "جمع المعلومات التقنية المطلوبة للمنتج." : "Gathering structural specifications of products." },
          { step: 2, title: isAr ? "التواصل والتصفية" : "Filtering Factories", description: isAr ? "فرز المصانع وتصفيتها بناءً على القدرة والأسعار." : "Identifying capable suppliers and auditing prices." }
        ],
        successStorySlugs: ["construction-materials-import"]
      },
      {
        slug: "quality-control",
        status: "published",
        publishedAt: "2026-07-08T00:00:00Z",
        updatedAt: "2026-07-08T00:00:00Z",
        seo: {
          title: isAr ? "فحص الجودة والتحقق من المنتجات في الصين" : "Quality Control and Inspections in China",
          description: isAr ? "خدمات فحص الجودة في الصين لضمان مطابقة الشحنة للمواصفات والاتفاقات" : "Professional quality control and factory auditing services in China",
          canonicalPath: `/${locale}/services/quality-control`
        },
        title: isAr ? "فحص الجودة والتحقق" : "Quality Control & Inspection",
        shortDescription: isAr 
          ? "نضمن لك مطابقة البضائع للمواصفات القياسية المطلوبة قبل خروجها من المصنع." 
          : "We guarantee products match quality standards before leaving the factory.",
        fullDescription: isAr 
          ? "فحص عينات عشوائية أو كاملة من البضائع ومراقبة عملية التعبئة والشحن للتأكد من السلامة التامة."
          : "Random or full batch inspections, container loading monitoring, and quality reports.",
        coverImage: "/images/services/quality-control.jpg",
        processSteps: [
          { step: 1, title: isAr ? "فحص ما قبل الإنتاج" : "Pre-production Check", description: isAr ? "التحقق من المواد الخام والآليات المستخدمة." : "Verification of raw materials and machinery." },
          { step: 2, title: isAr ? "فحص أثناء الإنتاج وبعده" : "In-process & Final Auditing", description: isAr ? "مراقبة التصنيع وفحص البضائع المعبأة." : "Monitoring production runs and final batch sampling." }
        ],
        successStorySlugs: []
      },
      {
        slug: "verification",
        status: "published",
        publishedAt: "2026-07-08T00:00:00Z",
        updatedAt: "2026-07-08T00:00:00Z",
        seo: {
          title: isAr ? "التحقق من الشركات والمصانع الصينية" : "Supplier Verification & Audit in China",
          description: isAr ? "التحقق من تراخيص المصانع الصينية وقدراتها القانونية والإنتاجية" : "Verify licenses, compliance, and legal status of Chinese factories",
          canonicalPath: `/${locale}/services/verification`
        },
        title: isAr ? "التحقق من الموردين والمصانع" : "Supplier Verification",
        shortDescription: isAr 
          ? "ندقق قانونية المصنع وتراخيصه وقدراته الإنتاجية الفعالة لنحميك من الاحتيال." 
          : "We audit factory licenses, legal status, and capacities to prevent fraud.",
        fullDescription: isAr 
          ? "زيارة ميدانية للمصانع والتحقق من السجلات التجارية والشهادات البيئية والمعايير القانونية."
          : "On-site verification visits, background checks on business registrations, and legal status checks.",
        coverImage: "/images/services/verification.jpg",
        processSteps: [
          { step: 1, title: isAr ? "تدقيق المستندات" : "Document Audit", description: isAr ? "التحقق من التراخيص والشهادات التجارية." : "Verifying government business registration & licenses." },
          { step: 2, title: isAr ? "زيارة ميدانية" : "On-site Verification", description: isAr ? "معاينة مقر العمل والتحقق من الوجود الفعلي." : "Inspecting actual business premises and operation." }
        ],
        successStorySlugs: []
      }
    ];
  }

  async getServiceBySlug(locale: Locale, slug: string): Promise<Service | null> {
    const services = await this.getServices(locale);
    return services.find(s => s.slug === slug) || null;
  }

  async getSuccessStories(locale: Locale): Promise<SuccessStory[]> {
    const isAr = locale === "ar";
    return [
      {
        slug: "construction-materials-import",
        status: "published",
        publishedAt: "2026-07-08T00:00:00Z",
        updatedAt: "2026-07-08T00:00:00Z",
        seo: {
          title: isAr ? "قصة نجاح: استيراد مواد بناء لمشروع عقاري" : "Success Story: Importing Building Materials for Real Estate Project",
          description: isAr ? "كيف وفرنا 30% من تكاليف مواد التشطيب من الصين لمطور عقاري" : "Case study saving 30% on finishing materials from China",
          canonicalPath: `/${locale}/success-stories/construction-materials-import`
        },
        clientName: isAr ? "شركة الإعمار للتطوير العقاري" : "Al-Emaar Real Estate",
        industry: isAr ? "العقارات والإنشاءات" : "Real Estate & Construction",
        challenge: isAr ? "صعوبة مطابقة مواصفات الجودة مع فروقات الأسعار العالية." : "Struggling with quality matching and price negotiations.",
        solution: isAr ? "فحص المصانع وتطبيق معايير مراقبة صارمة قبل الشحن." : "Full factory inspections and auditing before container sealing.",
        result: isAr ? "توفير 30% من الميزانية الإجمالية واستلام شحنة سليمة بنسبة 100%." : "Saved 30% budget with 100% compliant shipments.",
        testimonialQuote: isAr ? "خدمة حسام مبروك وفرت علينا خسائر فادحة كانت متوقعة." : "Hussam's services saved us from severe unexpected losses.",
        serviceSlug: "sourcing"
      }
    ];
  }

  async getSuccessStoryBySlug(locale: Locale, slug: string): Promise<SuccessStory | null> {
    const stories = await this.getSuccessStories(locale);
    return stories.find(s => s.slug === slug) || null;
  }
}
