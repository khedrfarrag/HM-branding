import { Metadata } from "next";
import { notFound } from "next/navigation";
import HubIndexPage from "@/components/HubIndexPage";
import { SupabaseExperienceRepository } from "@/repositories/supabase/experiences";
import { EXPERIENCE_TYPES, type ExperienceType, type Locale } from "@/domains/shared/value-objects";

interface PageProps {
  params: Promise<{ locale: string; type: string }>;
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

export async function generateStaticParams() {
  const locales: Locale[] = ["ar", "en"];
  return locales.flatMap((locale) =>
    EXPERIENCE_TYPES.map((type) => ({ locale, type }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, type } = await params;
  const expType = type as ExperienceType;
  if (!EXPERIENCE_TYPES.includes(expType)) return {};
  const isAr = locale === "ar";
  const label = isAr ? TYPE_LABELS[expType].ar : TYPE_LABELS[expType].en;
  return {
    title: `${label} — ${isAr ? "حسام مبروك" : "Hussam Mabrouk"}`,
    alternates: { canonical: `https://hussam-mabrouk.com/${locale}/experiences/${type}` },
  };
}

export default async function ExperienceTypeHubPage({ params }: PageProps) {
  const { locale, type } = await params;
  const expType = type as ExperienceType;
  if (!EXPERIENCE_TYPES.includes(expType)) notFound();

  const activeLocale = locale as Locale;
  const isAr = activeLocale === "ar";
  const label = isAr ? TYPE_LABELS[expType].ar : TYPE_LABELS[expType].en;
  const experiences = await experienceRepo.getExperiences(activeLocale, expType);

  return (
    <HubIndexPage
      locale={activeLocale}
      title={label}
      description={
        isAr
          ? `استكشف برامج ${label} المتاحة مع حسام مبروك في الصين.`
          : `Explore available ${label} programs with Hussam Mabrouk in China.`
      }
      hubPath={`/${activeLocale}/experiences/${type}`}
      cards={experiences.map((exp) => ({
        title: exp.title,
        description: exp.shortDescription,
        href: `/${activeLocale}/experiences/${exp.type}/${exp.slug}`,
      }))}
    />
  );
}
