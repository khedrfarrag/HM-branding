import { Metadata } from "next";
import HubIndexPage from "@/components/HubIndexPage";
import { SupabaseExperienceRepository } from "@/repositories/supabase/experiences";
import { EXPERIENCE_TYPES, type ExperienceType, type Locale } from "@/domains/shared/value-objects";

interface PageProps {
  params: Promise<{ locale: string }>;
}

const experienceRepo = new SupabaseExperienceRepository();

const TYPE_LABELS: Record<ExperienceType, { ar: string; en: string }> = {
  "business-trips": { ar: "رحلات الأعمال", en: "Business Trips" },
  "factory-tours": { ar: "جولات المصانع", en: "Factory Tours" },
  "vip-experiences": { ar: "تجارب VIP", en: "VIP Experiences" },
  "private-mentorship": { ar: "الإرشاد الخاص", en: "Private Mentorship" },
  "china-business-experience": { ar: "تجربة الأعمال في الصين", en: "China Business Experience" },
  "corporate-programs": { ar: "برامج الشركات", en: "Corporate Programs" },
  "canton-fair-programs": { ar: "برامج معرض كانتون", en: "Canton Fair Programs" },
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr ? "الخبرات الميدانية — حسام مبروك" : "Field Experiences — Hussam Mabrouk",
    description: isAr
      ? "رحلات كانتون، جولات مصانع، وبرامج VIP في الصين"
      : "Canton Fair trips, factory tours, and VIP programs in China",
    alternates: { canonical: `https://hussam-mabrouk.com/${locale}/experiences` },
  };
}

export default async function ExperiencesHubPage({ params }: PageProps) {
  const { locale } = await params;
  const activeLocale = locale as Locale;
  const isAr = activeLocale === "ar";
  const experiences = await experienceRepo.getExperiences(activeLocale);

  const typeCards = EXPERIENCE_TYPES.map((type) => ({
    title: isAr ? TYPE_LABELS[type].ar : TYPE_LABELS[type].en,
    href: `/${activeLocale}/experiences/${type}`,
    badge: isAr ? "فئة" : "Category",
  }));

  const experienceCards = experiences.map((exp) => ({
    title: exp.title,
    description: exp.shortDescription,
    href: `/${activeLocale}/experiences/${exp.type}/${exp.slug}`,
    badge: isAr ? TYPE_LABELS[exp.type].ar : TYPE_LABELS[exp.type].en,
  }));

  return (
    <HubIndexPage
      locale={activeLocale}
      title={isAr ? "الخبرات الميدانية" : "Field Experiences"}
      description={
        isAr
          ? "برامج ميدانية عملية في الصين — من معرض كانتون إلى جولات المصانع والإرشاد الخاص."
          : "Hands-on programs in China — from Canton Fair to factory tours and private mentorship."
      }
      hubPath={`/${activeLocale}/experiences`}
      cards={typeCards}
      sections={
        experienceCards.length > 0
          ? [{ title: isAr ? "البرامج المتاحة" : "Available Programs", cards: experienceCards }]
          : undefined
      }
    />
  );
}
