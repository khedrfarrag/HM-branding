import { Metadata } from "next";
import HubIndexPage from "@/components/HubIndexPage";
import { LocalFsMediaRepository } from "@/repositories/local-fs/media";
import type { MediaType, Locale } from "@/domains/shared/value-objects";

interface PageProps {
  params: Promise<{ locale: string }>;
}

const mediaRepo = new LocalFsMediaRepository();

const TYPE_LABELS: Record<MediaType, { ar: string; en: string }> = {
  videos: { ar: "الفيديوهات", en: "Videos" },
  podcasts: { ar: "البودكاست", en: "Podcasts" },
  interviews: { ar: "المقابلات", en: "Interviews" },
  gallery: { ar: "المعرض", en: "Gallery" },
  press: { ar: "الصحافة", en: "Press" },
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr ? "الوسائط — حسام مبروك" : "Media — Hussam Mabrouk",
    description: isAr ? "فيديوهات، بودكاست، ومقابلات حسام مبروك" : "Videos, podcasts, and interviews with Hussam Mabrouk",
    alternates: { canonical: `https://hussam-mabrouk.com/${locale}/media` },
  };
}

export default async function MediaHubPage({ params }: PageProps) {
  const { locale } = await params;
  const activeLocale = locale as Locale;
  const isAr = activeLocale === "ar";
  const items = await mediaRepo.getMediaItems(activeLocale);

  const typeCards = (Object.keys(TYPE_LABELS) as MediaType[]).map((type) => ({
    title: isAr ? TYPE_LABELS[type].ar : TYPE_LABELS[type].en,
    href: `/${activeLocale}/media/${type}`,
    badge: isAr ? "قسم" : "Section",
  }));

  const recentCards = items.map((item) => ({
    title: item.title,
    description: item.description,
    href: `/${activeLocale}/media/${item.mediaType}/${item.slug}`,
    badge: isAr ? TYPE_LABELS[item.mediaType].ar : TYPE_LABELS[item.mediaType].en,
  }));

  return (
    <HubIndexPage
      locale={activeLocale}
      title={isAr ? "الوسائط" : "Media"}
      description={
        isAr
          ? "فيديوهات ميدانية، بودكاست، ومقابلات صحفية عن الاستيراد من الصين."
          : "Field videos, podcasts, and press interviews on importing from China."
      }
      hubPath={`/${activeLocale}/media`}
      cards={typeCards}
      sections={
        recentCards.length > 0
          ? [{ title: isAr ? "آخر المحتوى" : "Latest Media", cards: recentCards }]
          : undefined
      }
    />
  );
}
