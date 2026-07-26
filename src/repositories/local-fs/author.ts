import { Locale } from "@/domains/shared/value-objects";
import { AuthorProfile, Achievement, Certificate, TimelineEvent } from "@/domains/author/entities";
import { IAuthorRepository } from "@/domains/author/repository";

export class LocalFsAuthorRepository implements IAuthorRepository {
  async getProfile(locale: Locale): Promise<AuthorProfile | null> {
    const isAr = locale === "ar";
    return {
      slug: "hossam-mabrouk",
      status: "published",
      publishedAt: "2026-07-08T00:00:00Z",
      updatedAt: "2026-07-08T00:00:00Z",
      seo: {
        title: isAr ? "حسام مبروك - الملف الشخصي" : "Hussam Mabrouk - Professional Profile",
        description: isAr ? "الصفحة الشخصية لحسام مبروك خبير ومستشار الاستيراد من الصين" : "Professional profile of Hussam Mabrouk, China Import consultant",
        canonicalPath: `/${locale}/about/bio`
      },
      name: isAr ? "حسام مبروك" : "Hussam Mabrouk",
      nameEn: "Hussam Mabrouk",
      title: isAr ? "مؤسس شركة دلتا للاستيراد والتصدير" : "Founder of Delta Import & Export",
      bio: isAr 
        ? "مستشار استيراد وتأمين سلاسل إمداد مقيم في الصين منذ أكثر من عقد، ساعد مئات الشركات العربية في شحن بضائعها وتجنب النصب."
        : "Sourcing consultant and supply chain security specialist based in China for over a decade.",
      avatarUrl: "/images/hossam.jpg"
    };
  }

  async getAchievements(locale: Locale): Promise<Achievement[]> {
    const isAr = locale === "ar";
    return [
      {
        title: isAr ? "تأمين أكثر من 500 حاوية تجارية" : "Secured Over 500 Commercial Containers",
        year: 2025,
        details: isAr ? "تأمين سلاسل التوريد وفحص جودة الشحنات لشركات عبر الشرق الأوسط." : "Quality checking and logistics security for Middle East clients."
      }
    ];
  }

  async getCertificates(locale: Locale): Promise<Certificate[]> {
    const isAr = locale === "ar";
    return [
      {
        name: isAr ? "خبير فحص الجودة المعتمد" : "Certified Quality Inspection Expert",
        issuer: "China Quality Certification Centre (CQC)",
        issueDate: "2023-05",
        verifyUrl: null,
        badgeUrl: null
      }
    ];
  }

  async getTimelineEvents(locale: Locale): Promise<TimelineEvent[]> {
    const isAr = locale === "ar";
    return [
      {
        date: "2015",
        title: isAr ? "الانتقال إلى الصين" : "Relocating to China",
        description: isAr ? "تأسيس أول مكتب تمثيلي لمصادر المنتجات وفحص الجودة." : "Establishing the first sourcing representative office in Guangzhou."
      },
      {
        date: "2018",
        title: isAr ? "تأسيس شركة دلتا" : "Founding Delta Import & Export",
        description: isAr ? "إطلاق شركة رسمية لتأمين الشحنات وإدارة سلاسل التوريد." : "Launching a certified corporate supply chain and shipping gateway."
      }
    ];
  }
}
