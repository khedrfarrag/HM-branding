import { Locale, MediaType } from "@/domains/shared/value-objects";
import { Media } from "@/domains/media/entities";
import { IMediaRepository } from "@/domains/media/repository";

export class LocalFsMediaRepository implements IMediaRepository {
  async getMediaItems(locale: Locale, type?: MediaType): Promise<Media[]> {
    const isAr = locale === "ar";
    const mediaItems: Media[] = [
      {
        slug: "import-secrets-podcast",
        status: "published",
        publishedAt: "2026-07-08T00:00:00Z",
        updatedAt: "2026-07-08T00:00:00Z",
        seo: {
          title: isAr ? "أسرار الاستيراد من الصين - بودكاست" : "Sourcing Secrets from China - Podcast",
          description: isAr ? "حلقة بودكاست مميزة مع حسام مبروك عن أسرار السفر والتجارة" : "Podcast episode detailing import secrets with Hussam Mabrouk",
          canonicalPath: `/${locale}/media/podcasts/import-secrets-podcast`
        },
        mediaType: "podcasts",
        title: isAr ? "أسرار التفاوض مع المصانع الصينية" : "Secrets of Negotiating with Chinese Factories",
        description: isAr 
          ? "كيف تحصل على أفضل سعر وجودة من الموردين الصينيين." 
          : "How to extract the best terms and pricing from Chinese suppliers.",
        thumbnailUrl: "/images/media/podcast-thumb.jpg",
        audioUrl: "https://hussam-mabrouk.com/audio/podcast-1.mp3",
        durationSeconds: 1800,
        episodeNumber: 12
      },
      {
        slug: "canton-fair-video-tour",
        status: "published",
        publishedAt: "2026-07-08T00:00:00Z",
        updatedAt: "2026-07-08T00:00:00Z",
        seo: {
          title: isAr ? "جولة تغطية معرض كانتون بالفيديو" : "Canton Fair Video Tour Coverage",
          description: isAr ? "تغطية ميدانية مرئية لأقسام معرض كانتون الدولي" : "Visual on-site coverage of the Canton Fair trade sectors",
          canonicalPath: `/${locale}/media/videos/canton-fair-video-tour`
        },
        mediaType: "videos",
        title: isAr ? "جولة ميدانية في معرض كانتون" : "On-Site Tour of Canton Fair",
        description: isAr 
          ? "تغطية مباشرة من قلب المعرض واستعراض المنتجات المبتكرة." 
          : "Live video walk-through showing innovative sourcing opportunities.",
        thumbnailUrl: "/images/media/video-thumb.jpg",
        embedUrl: "https://www.youtube.com/embed/example"
      }
    ];

    if (type) {
      return mediaItems.filter(m => m.mediaType === type);
    }
    return mediaItems;
  }

  async getMediaBySlug(locale: Locale, type: MediaType, slug: string): Promise<Media | null> {
    const items = await this.getMediaItems(locale, type);
    return items.find(m => m.slug === slug) || null;
  }

  async getAllSlugs(locale: Locale): Promise<{ type: MediaType; slug: string }[]> {
    const items = await this.getMediaItems(locale);
    return items.map(m => ({ type: m.mediaType, slug: m.slug }));
  }
}
