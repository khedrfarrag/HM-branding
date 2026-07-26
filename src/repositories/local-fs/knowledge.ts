import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Locale } from "@/domains/shared/value-objects";
import { Article, GlossaryTerm, FAQItem } from "@/domains/knowledge/entities";
import { IKnowledgeRepository } from "@/domains/knowledge/repository";

export class LocalFsKnowledgeRepository implements IKnowledgeRepository {
  private baseDir = path.join(process.cwd(), "content/knowledge");

  private ensureDir() {
    if (!fs.existsSync(this.baseDir)) {
      fs.mkdirSync(this.baseDir, { recursive: true });
    }
  }

  async getArticles(locale: Locale, options?: { category?: string; topic?: string; series?: string; tag?: string }): Promise<Article[]> {
    this.ensureDir();
    const articles: Article[] = [];
    
    try {
      const files = fs.readdirSync(this.baseDir).filter(f => f.endsWith(".md"));
      for (const file of files) {
        const fullPath = path.join(this.baseDir, file);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);
        
        if (data.status === "published" && (!data.locale || data.locale === locale)) {
          articles.push({
            slug: data.slug || file.replace(/\.md$/, ""),
            status: data.status,
            publishedAt: data.publishedAt || null,
            updatedAt: data.updatedAt || null,
            seo: {
              title: data.seoTitle || data.title,
              description: data.seoDescription || "",
              canonicalPath: `/${locale}/knowledge/${data.category || "general"}/${data.slug || file.replace(/\.md$/, "")}`,
              ogImage: data.ogImage,
              alternates: data.alternates || {}
            },
            title: data.title || "",
            excerpt: data.excerpt || "",
            body: content,
            category: data.category || "general",
            topic: data.topic || "general",
            series: data.series || null,
            tags: data.tags || [],
            readingTimeMinutes: data.readingTimeMinutes || 5,
            relatedSlugs: data.relatedSlugs || [],
            coverImage: data.coverImage || null
          });
        }
      }
    } catch {
      // Fallback mock data if file operations fail or dir empty
    }

    // Mock data fallback if empty
    if (articles.length === 0) {
      const isAr = locale === "ar";
      articles.push({
        slug: "how-to-import-from-china",
        status: "published",
        publishedAt: "2026-07-08T00:00:00Z",
        updatedAt: "2026-07-08T00:00:00Z",
        seo: {
          title: isAr ? "دليلك الشامل للاستيراد من الصين" : "Complete Guide to Importing from China",
          description: isAr ? "دليل مفصل عن كيفية الاستيراد من الصين خطوة بخطوة وتجنب المشاكل" : "Detailed step-by-step guide to importing from China",
          canonicalPath: `/${locale}/knowledge/importing/how-to-import-from-china`
        },
        title: isAr ? "كيف تستورد من الصين: الدليل العملي الأول" : "How to Import from China: The Ultimate Guide",
        excerpt: isAr ? "تعلم أساسيات التفاوض، فحص الجودة، والشحن بأمان." : "Learn the basics of negotiation, quality checks, and shipping safely.",
        body: isAr ? "محتوى المقال التفصيلي هنا..." : "Detailed article content goes here...",
        category: "importing",
        topic: "sourcing",
        series: null,
        tags: ["china", "importing", "sourcing"],
        readingTimeMinutes: 6,
        relatedSlugs: [],
        coverImage: "/images/knowledge/importing.jpg"
      });
    }

    // Apply filtering
    return articles.filter(a => {
      if (options?.category && a.category !== options.category) return false;
      if (options?.topic && a.topic !== options.topic) return false;
      if (options?.series && a.series !== options.series) return false;
      if (options?.tag && !a.tags.includes(options.tag)) return false;
      return true;
    });
  }

  async getArticleBySlug(locale: Locale, category: string, slug: string): Promise<Article | null> {
    const articles = await this.getArticles(locale, { category });
    return articles.find(a => a.slug === slug) || null;
  }

  async getGlossaryTerms(locale: Locale): Promise<GlossaryTerm[]> {
    const isAr = locale === "ar";
    return [
      {
        slug: "fob",
        status: "published",
        publishedAt: "2026-07-08T00:00:00Z",
        updatedAt: "2026-07-08T00:00:00Z",
        seo: {
          title: isAr ? "ما هو مصطلح FOB في الشحن؟" : "What is FOB in Shipping?",
          description: isAr ? "تعريف مصطلح التسليم على ظهر السفينة FOB بالتفصيل" : "FOB term definition in shipping",
          canonicalPath: `/${locale}/knowledge/glossary/fob`
        },
        term: "FOB",
        termEn: "Free on Board",
        definition: isAr 
          ? "التسليم على ظهر السفينة: يتحمل البائع تكاليف نقل البضائع حتى ظهر السفينة في ميناء المغادرة المحدد."
          : "Free on Board: The seller pays for transportation of the goods to the port of shipment.",
        relatedTermSlugs: ["cif", "exw"]
      },
      {
        slug: "cif",
        status: "published",
        publishedAt: "2026-07-08T00:00:00Z",
        updatedAt: "2026-07-08T00:00:00Z",
        seo: {
          title: isAr ? "ما هو مصطلح CIF في الشحن؟" : "What is CIF in Shipping?",
          description: isAr ? "تعريف مصطلح التكلفة والتأمين والشحن CIF بالتفصيل" : "CIF term definition in shipping",
          canonicalPath: `/${locale}/knowledge/glossary/cif`
        },
        term: "CIF",
        termEn: "Cost, Insurance and Freight",
        definition: isAr
          ? "التكلفة والتأمين والشحن: يتحمل البائع تكاليف نقل البضائع والتأمين عليها حتى ميناء الوصول المحدد في العقد."
          : "Cost, Insurance and Freight: The seller covers the cost of goods, insurance, and freight charges to the destination port.",
        relatedTermSlugs: ["fob", "exw"]
      },
      {
        slug: "exw",
        status: "published",
        publishedAt: "2026-07-08T00:00:00Z",
        updatedAt: "2026-07-08T00:00:00Z",
        seo: {
          title: isAr ? "ما هو مصطلح EXW التسليم من المصنع؟" : "What is EXW (Ex Works)?",
          description: isAr ? "تعريف مصطلح التسليم من المصنع EXW بالتفصيل" : "EXW term definition - Ex Works explained",
          canonicalPath: `/${locale}/knowledge/glossary/exw`
        },
        term: "EXW",
        termEn: "Ex Works",
        definition: isAr
          ? "التسليم من المصنع: يتسلم المشتري البضائع مباشرة من مستودع البائع ويتحمل جميع تكاليف النقل والتأمين بعد ذلك."
          : "Ex Works: The buyer takes delivery of goods directly from the seller's premises and bears all transport and insurance costs.",
        relatedTermSlugs: ["fob", "cif"]
      }
    ];
  }


  async getGlossaryTermBySlug(locale: Locale, slug: string): Promise<GlossaryTerm | null> {
    const terms = await this.getGlossaryTerms(locale);
    return terms.find(t => t.slug === slug) || null;
  }

  async getFAQs(locale: Locale, category?: string): Promise<FAQItem[]> {
    const isAr = locale === "ar";
    const faqs: FAQItem[] = [
      {
        question: isAr ? "ما هي أقل كمية للطلب (MOQ) عند الاستيراد؟" : "What is the Minimum Order Quantity (MOQ)?",
        answer: isAr 
          ? "أقل كمية للطلب يحددها المصنع لتغطية تكاليف الإنتاج، وتختلف من منتج لآخر ويمكن التفاوض عليها."
          : "The minimum quantity a supplier requires you to purchase. It varies and can be negotiated.",
        category: "sourcing"
      }
    ];
    if (category) {
      return faqs.filter(f => f.category === category);
    }
    return faqs;
  }

  async getAllArticleSlugs(locale: Locale): Promise<{ category: string; slug: string }[]> {
    const articles = await this.getArticles(locale);
    return articles.map(a => ({ category: a.category, slug: a.slug }));
  }
}
