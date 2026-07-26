import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Locale, ExperienceType } from "@/domains/shared/value-objects";
import { Experience } from "@/domains/experiences/entities";
import { IExperienceRepository } from "@/domains/experiences/repository";
import { supabasePublic } from "@/repositories/supabase/client";

export class LocalFsExperienceRepository implements IExperienceRepository {
  private baseDir = path.join(process.cwd(), "content/experiences");

  private ensureDir() {
    if (!fs.existsSync(this.baseDir)) {
      fs.mkdirSync(this.baseDir, { recursive: true });
    }
  }

  async getExperiences(locale: Locale, type?: ExperienceType): Promise<Experience[]> {
    this.ensureDir();
    const experiences: Experience[] = [];

    try {
      const files = fs.readdirSync(this.baseDir).filter(f => f.endsWith(".md"));
      for (const file of files) {
        const fullPath = path.join(this.baseDir, file);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        if (data.status === "published" && (!data.locale || data.locale === locale)) {
          experiences.push({
            slug: data.slug || file.replace(/\.md$/, ""),
            status: data.status,
            publishedAt: data.publishedAt || null,
            updatedAt: data.updatedAt || null,
            seo: {
              title: data.seoTitle || data.title,
              description: data.seoDescription || "",
              canonicalPath: `/${locale}/experiences/${data.type}/${data.slug || file.replace(/\.md$/, "")}`,
              ogImage: data.ogImage,
              alternates: data.alternates || {}
            },
            type: data.type as ExperienceType,
            title: data.title || "",
            shortDescription: data.shortDescription || "",
            fullDescription: content || data.fullDescription || "",
            coverImage: data.coverImage || null,
            price: data.price || null,
            currency: data.currency || "USD",
            itinerary: data.itinerary || [],
            dates: data.dates || [],
            testimonials: data.testimonials || [],
            citySlug: data.citySlug || null
          });
        }
      }
    } catch {
      // Fail silently, use mock fallbacks
    }

    if (experiences.length === 0) {
      const isAr = locale === "ar";
      experiences.push({
        slug: "canton-fair-business-experience",
        status: "published",
        publishedAt: "2026-07-08T00:00:00Z",
        updatedAt: "2026-07-08T00:00:00Z",
        seo: {
          title: isAr ? "برنامج معرض كانتون الميداني مع حسام مبروك" : "Canton Fair Business Experience with Hussam Mabrouk",
          description: isAr ? "شارك في الرحلة الميدانية الشاملة لمعرض كانتون وتواصل مع كبار الموردين" : "Join the comprehensive business trip to the Canton Fair with Hussam Mabrouk",
          canonicalPath: `/${locale}/experiences/canton-fair-programs/canton-fair-business-experience`
        },
        type: "canton-fair-programs",
        title: isAr ? "رحلة معرض كانتون الاستكشافية الكبرى" : "Grand Canton Fair Exploration Trip",
        shortDescription: isAr 
          ? "مرافقة ميدانية وتوجيه متكامل في أكبر معرض تجاري في الصين." 
          : "On-site guidance and sourcing mentoring at China's largest trade show.",
        fullDescription: isAr 
          ? "انضم إلينا في تجربة فريدة لتعلم كيفية التفاوض والتعاقد مع المصانع الصينية مباشرة في غوانزو." 
          : "Join us for a unique experience to learn how to negotiate and contract with Chinese factories directly in Guangzhou.",
        coverImage: "/images/experiences/canton-fair.jpg",
        price: 2500,
        currency: "USD",
        itinerary: [
          { day: 1, title: isAr ? "الوصول والترحيب" : "Arrival & Welcome", activities: [isAr ? "اجتماع تحضيري في الفندق" : "Prep meeting at the hotel"] },
          { day: 2, title: isAr ? "جولة المعرض الأولى" : "First Fair Tour", activities: [isAr ? "زيارة قسم الآليات والتصنيع" : "Visiting machinery & manufacturing section"] }
        ],
        dates: [
          { startDate: "2026-10-15", endDate: "2026-10-22", enrollmentDeadline: "2026-09-15", availableSeats: 15, spotsRemaining: 6 }
        ],
        testimonials: [
          { clientName: isAr ? "أحمد الشمري" : "Ahmad Al-Shammari", clientTitle: isAr ? "مستورد مواد بناء" : "Building Materials Importer", quote: isAr ? "الرحلة غيرت طريقتي في العمل بالكامل ووفرت علي آلاف الدولارات." : "This trip completely changed how I do business and saved me thousands of dollars." }
        ],
        citySlug: "guangzhou"
      });
    }

    // T021: Merge live Supabase schedule data into filesystem experiences
    try {
      const slugs = experiences.map((e) => e.slug);
      if (slugs.length > 0) {
        const { data: liveSchedules } = await supabasePublic
          .from("experience_schedules")
          .select("experience_slug, id, start_date, end_date, enrollment_deadline, seats_remaining, capacity, price, currency")
          .in("experience_slug", slugs)
          .gt("end_date", new Date().toISOString().split("T")[0])
          .order("start_date", { ascending: true });

        if (liveSchedules && liveSchedules.length > 0) {
          for (const exp of experiences) {
            const matchingSchedules = liveSchedules.filter(
              (s) => s.experience_slug === exp.slug
            );
            if (matchingSchedules.length > 0) {
              // Replace static dates with live Supabase data
              exp.dates = matchingSchedules.map((s) => ({
                id: s.id,
                startDate: s.start_date,
                endDate: s.end_date,
                enrollmentDeadline: s.enrollment_deadline,
                availableSeats: s.capacity,
                spotsRemaining: s.seats_remaining,
              }));
              // Use live price from first upcoming schedule
              exp.price = matchingSchedules[0].price;
              exp.currency = matchingSchedules[0].currency;
            }
          }
        }
      }
    } catch {
      // Supabase unavailable — fall back to static filesystem dates silently
    }

    if (type) {
      return experiences.filter(e => e.type === type);
    }
    return experiences;
  }

  async getExperienceBySlug(locale: Locale, type: ExperienceType, slug: string): Promise<Experience | null> {
    const experiences = await this.getExperiences(locale, type);
    return experiences.find(e => e.slug === slug) || null;
  }

  async getAllSlugs(locale: Locale): Promise<{ type: ExperienceType; slug: string }[]> {
    const experiences = await this.getExperiences(locale);
    return experiences.map(e => ({ type: e.type, slug: e.slug }));
  }
}
