import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { LocalFsMediaRepository } from "@/repositories/local-fs/media";
import { Locale, MediaType } from "@/domains/shared/value-objects";
import JsonLd from "@/components/JsonLd";
import { buildPersonSchema } from "@/lib/schema/person";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";

interface PageProps {
  params: Promise<{
    locale: string;
    type: string;
    slug: string;
  }>;
}

const mediaRepository = new LocalFsMediaRepository();

export async function generateStaticParams() {
  const paramsList: { locale: Locale; type: MediaType; slug: string }[] = [];
  const locales: Locale[] = ["ar", "en"];

  for (const locale of locales) {
    try {
      const slugs = await mediaRepository.getAllSlugs(locale);
      for (const item of slugs) {
        paramsList.push({
          locale,
          type: item.type,
          slug: item.slug
        });
      }
    } catch {
      paramsList.push({
        locale,
        type: "videos",
        slug: "canton-fair-video-tour"
      });
    }
  }

  return paramsList;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, type, slug } = await params;
  const media = await mediaRepository.getMediaBySlug(locale as Locale, type as MediaType, slug);
  if (!media) return {};

  return {
    title: media.seo.title,
    description: media.seo.description,
    alternates: {
      canonical: `https://hussam-mabrouk.com${media.seo.canonicalPath}`
    }
  };
}

export default async function MediaDetailPage({ params }: PageProps) {
  const { locale, type, slug } = await params;
  const mediaType = type as MediaType;
  const activeLocale = locale as Locale;
  const media = await mediaRepository.getMediaBySlug(activeLocale, mediaType, slug);

  if (!media) {
    notFound();
  }

  const isAr = activeLocale === "ar";
  const personSchema = buildPersonSchema(activeLocale);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: isAr ? "الرئيسية" : "Home", item: `/${activeLocale}` },
    { name: isAr ? "الوسائط الإعلامية" : "Media Room", item: `/${activeLocale}/media` },
    { name: media.title, item: media.seo.canonicalPath }
  ]);

  const videoObjectSchema = media.mediaType === "videos" && media.embedUrl ? {
    "@context": "https://schema.org" as const,
    "@type": "VideoObject" as const,
    "name": media.title,
    "description": media.description,
    "thumbnailUrl": media.thumbnailUrl || "",
    "uploadDate": media.publishedAt,
    "embedUrl": media.embedUrl
  } : null;

  return (
    <main className="container mx-auto px-4 py-8" id="media-detail">
      <JsonLd schema={personSchema} />
      <JsonLd schema={breadcrumbSchema} />
      {videoObjectSchema && <JsonLd schema={videoObjectSchema} />}

      <article className="max-w-3xl mx-auto bg-black/40 backdrop-blur-md border border-amber-500/20 rounded-xl p-6 md:p-8">
        <header className="mb-6 pb-6 border-b border-gray-800">
          <span className="text-amber-500 font-semibold uppercase tracking-wider text-sm">
            {media.mediaType}
          </span>
          <h1 className="text-3xl font-bold text-white mt-2 mb-4">{media.title}</h1>
          <p className="text-gray-300 text-lg leading-relaxed">{media.description}</p>
        </header>

        {media.mediaType === "videos" && media.embedUrl && (
          <div className="aspect-video w-full mb-6 rounded-lg overflow-hidden border border-gray-800">
            <iframe
              src={media.embedUrl}
              title={media.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>
        )}

        {media.mediaType === "podcasts" && media.audioUrl && (
          <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-6">
            <div className="text-amber-400 font-semibold mb-3">
              {isAr ? `الحلقة رقم ${media.episodeNumber}` : `Episode ${media.episodeNumber}`}
            </div>
            <audio controls src={media.audioUrl} className="w-full">
              {isAr ? "متصفحك لا يدعم مشغل الصوت." : "Your browser does not support the audio element."}
            </audio>
          </div>
        )}

        {media.mediaType === "interviews" && media.embedUrl && (
          <div className="prose prose-invert max-w-none text-gray-200">
            <p>{media.description}</p>
          </div>
        )}
      </article>
    </main>
  );
}
