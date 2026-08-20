import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Locale } from "@/domains/shared/value-objects";
import JsonLd from "@/components/JsonLd";
import FAQExplorer from "@/components/FAQExplorer";
import { FAQS_DATA } from "@/data/faqs";
import { buildPersonSchema } from "@/lib/schema/person";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import {
  CheckCircle2,
  Globe,
  Linkedin,
  Youtube,
  Instagram,
  Facebook,
  MessageCircle,
  Mail,
} from "lucide-react";

interface PageProps {
  params: Promise<{
    locale: string;
    slug: string[];
  }>;
}

export async function generateStaticParams() {
  const locales: Locale[] = ["ar", "en"];
  const subPages = ["bio", "achievements", "timeline", "directory", "faq"];
  const paramsList: { locale: Locale; slug: string[] }[] = [];

  for (const locale of locales) {
    for (const page of subPages) {
      paramsList.push({
        locale,
        slug: [page],
      });
    }
  }

  return paramsList;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const subPage = slug?.[0] ?? "bio";
  const isAr = locale === "ar";

  let title = isAr ? "عن حسام مبروك | السيرة الذاتية المعتمدة" : "About Hossam Mabrouk | Official Profile";
  let description = isAr
    ? "الصفحة الرسمية المعتمدة لحسام مبروك: متخصص التجارة الدولية، التوريد والتصنيع من الصين، وسلاسل الإمداد وتطبيقات الذكاء الاصطناعي للأعمال."
    : "Official profile of Hossam Mabrouk: International Trade, Sourcing & Manufacturing Specialist focused on China.";

  if (subPage === "achievements") {
    title = isAr ? "إنجازات حسام مبروك في الصين والخدمات" : "Hossam Mabrouk Sourcing Achievements";
    description = isAr ? "قائمة الإنجازات المهنية ومشاريع الاستيراد المؤمّنة" : "List of professional sourcing milestones and corporate success";
  } else if (subPage === "timeline") {
    title = isAr ? "مسيرة حسام مبروك المهنية" : "Professional Career Timeline";
    description = isAr ? "الرحلة من البدايات 2017 إلى قيادة الاستيراد والتخليص اللوجستي" : "Sourcing journey from 2017 to Present";
  } else if (subPage === "directory") {
    title = isAr ? "الحسابات القنوات المعتمدة لحسام مبروك" : "Verified Official Channels | Hossam Mabrouk";
    description = isAr ? "دليل الحسابات الرسمية الموثقة لحسام مبروك لحماية العلامة التجارية." : "Official verified social accounts directory for Hossam Mabrouk.";
  } else if (subPage === "faq") {
    title = isAr
      ? "الأسئلة الشائعة عن حسام مبروك — 50 سؤالاً وإجابة في التجارة والتوريد والتصنيع"
      : "Hossam Mabrouk FAQ — 50 Questions on China Trade, Sourcing & Manufacturing";
    description = isAr
      ? "إجابات موثقة ومثبتة على الأسئلة الشائعة حول حسام مبروك وتخصصاته في التجارة الدولية، التوريد من الصين، التصنيع، الاستيراد والتصدير، الشحن، وتطبيقات الذكاء الاصطناعي في الأعمال."
      : "Verified answers to 50 frequently asked questions about Hossam Mabrouk, his expertise in China sourcing, factory manufacturing, international trade, logistics, and AI for business.";
  }

  return {
    title,
    description,
    keywords: subPage === "faq"
      ? isAr
        ? ["حسام مبروك", "التجارة الدولية", "التوريد من الصين", "التصنيع", "الاستيراد", "الشحن", "سلاسل الإمداد", "ريادة الأعمال", "الذكاء الاصطناعي للأعمال"]
        : ["Hossam Mabrouk", "China sourcing", "international trade", "manufacturing", "import export", "supply chain", "freight", "OEM ODM", "business AI"]
      : undefined,
    alternates: {
      canonical: `https://hussam-mabrouk.com/${locale}/about/${subPage}`,
      languages: {
        "ar": `https://hussam-mabrouk.com/ar/about/${subPage}`,
        "en": `https://hussam-mabrouk.com/en/about/${subPage}`,
      },
    },
    openGraph: subPage === "faq"
      ? {
          title,
          description,
          url: `https://hussam-mabrouk.com/${locale}/about/faq`,
          type: "website" as const,
        }
      : undefined,
  };
}

export default async function AboutCatchAllPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const subPage = slug?.[0] ?? "bio";
  const activeLocale = locale as Locale;
  const isAr = activeLocale === "ar";

  if (!["bio", "achievements", "timeline", "directory", "faq"].includes(subPage)) {
    notFound();
  }

  const personSchema = buildPersonSchema(activeLocale);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: isAr ? "الرئيسية" : "Home", item: `/${activeLocale}` },
    { name: isAr ? "عن حسام مبروك" : "About Hossam", item: `/${activeLocale}/about/bio` },
    { name: subPage.toUpperCase(), item: `/${activeLocale}/about/${subPage}` },
  ]);

  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/hussam-mabrouk/", handle: "@hussam-mabrouk", icon: Linkedin },
    { name: "WhatsApp", url: "https://wa.me/201204009000", handle: "+20 120 400 9000", icon: MessageCircle },
    { name: "Email", url: "mailto:mabrouk@meridian-co.com", handle: "mabrouk@meridian-co.com", icon: Mail },
    { name: "YouTube", url: "https://youtube.com/@hossammabrouk", handle: "@hossammabrouk", icon: Youtube },
    { name: "Instagram", url: "https://instagram.com/hossammabrouk", handle: "@hossammabrouk", icon: Instagram },
    { name: "Facebook", url: "https://facebook.com/hossammabrouk", handle: "hossammabrouk", icon: Facebook },
  ];

  const expertiseCards = isAr
    ? [
        { title: "التجارة الدولية", desc: "فهم الأسواق العالمية، قوانين التجارة، والصفقات الدولية العابرة للحدود." },
        { title: "الاستيراد والتصدير", desc: "مراحل الاستيراد والتصدير من اختيار الصنف حتى وصول الشحنات للموانئ." },
        { title: "التوريد من الصين", desc: "خبرة ميدانية وتنفيذية مباشرة في أسواق ومراكز التوريد الكبرى في الصين." },
        { title: "التصنيع المباشر", desc: "التعامل المباشر مع المصانع الصينية وضبط الخطوط الإنتاجية والتكاليف." },
        { title: "تطوير المنتجات", desc: "تحويل الأفكار التجارية إلى منتجات حقيقية قابلة للمنافسة والبيع." },
        { title: "OEM & ODM", desc: "التصنيع لحساب الغير والتصنيع بالتصميم الأصلي للماركات والشركات." },
        { title: "مراقبة الجودة", desc: "فحص العينات، المعاينة قبل الشحن، وتقليل نسبة العيوب والمخاطر." },
        { title: "سلاسل الإمداد واللوجستيات", desc: "تخطيط الشحن البحري والجوي وإدارة مخاطر الإمداد والحلول اللوجستية." },
        { title: "ريادة الأعمال", desc: "مساعدة الشركات الناشئة والتجار على بناء أعمال ومشاريع تجارية مستدامة." },
        { title: "الذكاء الاصطناعي للأعمال", desc: "دمج أدوات الذكاء الاصطناعي لرفع كفاءة التجارة والتوريد والتفاوض." },
      ]
    : [
        { title: "International Trade", desc: "Global market navigation, trade compliance, and cross-border deals." },
        { title: "Import & Export", desc: "Full lifecycle execution from item selection to port delivery." },
        { title: "China Sourcing", desc: "Direct hands-on sourcing across China's primary industrial hubs." },
        { title: "Manufacturing", desc: "Direct factory negotiation, assembly line oversight, and cost efficiency." },
        { title: "Product Development", desc: "Translating commercial ideas into market-ready physical products." },
        { title: "OEM & ODM", desc: "Contract manufacturing and custom product engineering for brands." },
        { title: "Quality Control", desc: "Sample testing, pre-shipment inspections, and risk mitigation." },
        { title: "Supply Chain & Freight", desc: "Ocean & air freight optimization, route planning, and logistics." },
        { title: "Entrepreneurship", desc: "Guiding traders and startups to build scalable commercial models." },
        { title: "AI for Business", desc: "Integrating artificial intelligence into trade, negotiation, and operations." },
      ];



  const timelineItems = [
    {
      year: "2017",
      titleAr: "البداية",
      titleEn: "The Beginning",
      descAr: "الخطوة الأولى في عالم التجارة الدولية وبناء الأساس المعرفي والعملي.",
      descEn: "First steps into international trade and building foundational practical knowledge.",
    },
    {
      year: "2018",
      titleAr: "التوسع في التجارة والتوريد",
      titleEn: "Expanding Trade & Sourcing",
      descAr: "توسيع نطاق التعاملات التجارية وبناء شبكة أولية من الموردين والشركاء.",
      descEn: "Scaling commercial operations and establishing an initial network of suppliers and partners.",
    },
    {
      year: "2019",
      titleAr: "العمل مع الأسواق والمصانع في الصين",
      titleEn: "Working with China's Markets & Factories",
      descAr: "التعامل الميداني المباشر مع المصانع الصينية والأسواق الكبرى وبناء علاقات موثوقة.",
      descEn: "Direct hands-on field execution across China's industrial hubs and major trade centers.",
    },
    {
      year: "2024",
      titleAr: "تطوير الخبرة في الاستيراد والشحن وسلاسل الإمداد",
      titleEn: "Mastering Import, Freight & Supply Chains",
      descAr: "إتقان عمليات الاستيراد والتصدير والشحن الدولي وإدارة سلاسل الإمداد بكفاءة.",
      descEn: "Deep expertise in import/export operations, international freight, and supply chain management.",
    },
    {
      year: "2025",
      titleAr: "مشاركة المعرفة وصناعة المحتوى",
      titleEn: "Knowledge Sharing & Content Creation",
      descAr: "إطلاق المحتوى التعليمي لتبسيط التجارة مع الصين ونقل الخبرة لرواد الأعمال والمهتمين.",
      descEn: "Launching educational content to simplify China trade and transfer expertise to entrepreneurs.",
    },
    {
      year: "2026 — Present",
      titleAr: "المرحلة الحالية",
      titleEn: "Present Stage",
      descAr: "دمج الخبرة الميدانية مع تطبيقات الذكاء الاصطناعي وتوسيع التأثير على نطاق أوسع.",
      descEn: "Integrating field experience with AI tools and expanding impact across broader markets.",
    },
  ];

  return (
    <main className="relative min-h-screen bg-[#08090B] text-white pt-[110px] pb-sp-12">
      <JsonLd schema={personSchema} />
      <JsonLd schema={breadcrumbSchema} />
      {subPage === "faq" && (
        <JsonLd
          schema={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": FAQS_DATA.filter((f) => f.category === "bio").slice(0, 10).map((f) => ({
              "@type": "Question",
              "name": isAr ? f.questionAr : f.questionEn,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": isAr ? f.answerAr : f.answerEn,
              },
            })),
          } as Record<string, unknown>}
        />
      )}
      {/* Verified Banner */}
      <section className="mx-auto max-w-[1280px] px-sp-4 sm:px-sp-6 mb-sp-6">
        <div className="rounded-2xl border border-gold/30 bg-gradient-to-r from-black via-graphite-900 to-black p-sp-4 sm:p-sp-5 backdrop-blur-xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-sp-4">
          <div className="flex items-center gap-sp-3 text-start">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-gold border border-gold/40 shrink-0">
              <CheckCircle2 className="h-6 w-6" />
            </span>
            <div>
              <span className="font-mono text-xs font-semibold uppercase text-gold tracking-wider block">
                {isAr ? "الصفحة الرسمية المعتمدة لحسام مبروك" : "Official Verified Profile — Hossam Mabrouk"}
              </span>
              <p className="text-xs sm:text-sm text-silver font-light mt-0.5">
                {isAr
                  ? "المرجع الموحد الكامل لخلفيته المهنية، إنجازاته، مسيرته العملية، وحساباته الرسمية."
                  : "Unified official reference for biography, achievements, timeline, directory, and FAQ."}
              </p>
            </div>
          </div>
          <Link
            href={`/${locale}#book`}
            className="shrink-0 inline-flex h-[40px] items-center justify-center rounded-full bg-gold px-sp-6 text-xs font-bold text-black hover:bg-gold-soft transition-colors"
          >
            {isAr ? "احجز استشارة مباشرة" : "Book Consultation"}
          </Link>
        </div>
      </section>

      {/* Main Tabbed Container Card */}
      <section className="mx-auto max-w-[1280px] px-sp-4 sm:px-sp-6 mb-sp-12">
        <div className="rounded-3xl border border-gold/30 bg-gradient-to-b from-[#0F1117] via-graphite-900 to-black p-6 sm:p-10 shadow-2xl backdrop-blur-xl">

          {/* Navigation Tabs Bar — 5 Standalone Tabs */}
          <div className="flex border-b border-white/10 pb-4 mb-8 overflow-x-auto gap-6 sm:gap-8 justify-start text-start">
            <Link
              href={`/${locale}/about/bio`}
              className={`pb-3 px-1 font-display text-sm sm:text-base transition-all shrink-0 ${
                subPage === "bio"
                  ? "text-gold font-bold border-b-2 border-gold"
                  : "text-silver-dim hover:text-white"
              }`}
            >
              {isAr ? "السيرة الذاتية" : "Biography"}
            </Link>
            <Link
              href={`/${locale}/about/achievements`}
              className={`pb-3 px-1 font-display text-sm sm:text-base transition-all shrink-0 ${
                subPage === "achievements"
                  ? "text-gold font-bold border-b-2 border-gold"
                  : "text-silver-dim hover:text-white"
              }`}
            >
              {isAr ? "الإنجازات" : "Achievements"}
            </Link>
            <Link
              href={`/${locale}/about/timeline`}
              className={`pb-3 px-1 font-display text-sm sm:text-base transition-all shrink-0 ${
                subPage === "timeline"
                  ? "text-gold font-bold border-b-2 border-gold"
                  : "text-silver-dim hover:text-white"
              }`}
            >
              {isAr ? "مسيرة العمل" : "Timeline"}
            </Link>
            <Link
              href={`/${locale}/about/directory`}
              className={`pb-3 px-1 font-display text-sm sm:text-base transition-all shrink-0 ${
                subPage === "directory"
                  ? "text-gold font-bold border-b-2 border-gold"
                  : "text-silver-dim hover:text-white"
              }`}
            >
              {isAr ? "الحسابات المعتمدة" : "Verified Directory"}
            </Link>
            <Link
              href={`/${locale}/about/faq`}
              className={`pb-3 px-1 font-display text-sm sm:text-base transition-all shrink-0 ${
                subPage === "faq"
                  ? "text-gold font-bold border-b-2 border-gold"
                  : "text-silver-dim hover:text-white"
              }`}
            >
              {isAr ? "الأسئلة الشائعة" : "FAQ"}
            </Link>
          </div>

          {/* TAB 1: BIO */}
          {subPage === "bio" && (
            <div className="flex flex-col items-start text-start gap-sp-6">
              <div>
                <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
                  {isAr ? "حسام مبروك" : "Hossam Mabrouk"}
                </h1>
                {/* <p className="font-mono text-sm font-semibold text-gold mt-2">
                  {isAr
                    ? "مؤسس شركة دلتا للاستيراد والتصدير — خبير التجارة والتوريد والتصنيع من الصين"
                    : "Founder & CEO of Delta Group — China Trade, Sourcing & Manufacturing Specialist"}
                </p> */}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-sp-8 items-center w-full">
                <div className="relative mx-auto w-full max-w-[360px] aspect-square rounded-2xl overflow-hidden border border-glass bg-gradient-to-b from-graphite-800 to-black p-2 shadow-xl">
                  <div className="relative w-full h-full rounded-xl overflow-hidden">
                    <Image
                      src="/images/WhatsApp Image 2026-08-12 at 6.58.46 PM.jpeg"
                      alt="Hossam Mabrouk"
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  </div>
                </div>

                <div className="space-y-sp-4 text-silver text-sm sm:text-base font-light leading-lh-relaxed">
                  <p>
                    {isAr
                      ? "مستشار استيراد وتأمين سلاسل إمداد مقيم في الصين منذ أكثر من عقد، ساعد مئات الشركات العربية في شحن بضائعها وتجنب النصب."
                      : "Sourcing and supply chain advisor with hands-on China experience, guiding hundreds of business ventures in securing imports and preventing fraud."}
                  </p>
                  <p>
                    {isAr
                      ? "بدأت خبرته من التعامل المباشر مع الأسواق والمصانع والموردين في الصين، والتعرف على مراحل التجارة من البحث عن المنتج والمصدر المناسب، مرورًا بالتفاوض والتصنيع ومراقبة الجودة، وصولًا إلى الشحن ووصول المنتجات إلى الأسواق."
                      : "His journey began through direct hands-on execution across China's major industrial hubs, factories, and trade centers."}
                  </p>
                  <p>
                    {isAr
                      ? "ومن خلال هذه التجربة، أصبح تركيزه الأساسي على مساعدة رواد الأعمال وأصحاب الشركات والتجار على فهم طريقة العمل مع السوق الصيني بشكل أفضل، وتقليل المخاطر، واتخاذ قرارات أكثر دقة عند اختيار المنتجات والموردين والمصانع."
                      : "Through this practical experience, his primary focus is guiding entrepreneurs, business owners, and traders to navigate the Chinese market effectively."}
                  </p>
                  <p className="text-white font-normal bg-white/[0.03] p-sp-4 rounded-xl border border-glass">
                    {isAr
                      ? "ويجمع محتواه بين الخبرة الميدانية في التجارة والتوريد والتطورات الحديثة في الذكاء الاصطناعي والتكنولوجيا والأعمال، بهدف مساعدة الجيل الجديد من رواد الأعمال على بناء تجارة أكثر احترافية."
                      : "His work combines field-tested trade experience with modern artificial intelligence and business technology."}
                  </p>
                </div>
              </div>

              {/* Badges Grid */}
              <div className="w-full pt-sp-4 border-t border-white/10">
                <span className="font-mono text-xs font-semibold text-gold uppercase tracking-wider block mb-3">
                  {isAr ? "مجالات الخبرة والتخصص" : "Fields of Expertise"}
                </span>
                <div className="flex flex-wrap gap-sp-2">
                  {expertiseCards.map((item, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-black/60 px-3 py-1 font-mono text-xs text-white"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                      {item.title}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ACHIEVEMENTS */}
          {subPage === "achievements" && (
            <div className="flex flex-col items-start text-start gap-sp-6">
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                  {isAr ? "الإنجازات الميدانية والأرقام" : "Sourcing Achievements & Scale"}
                </h2>
                <p className="text-silver text-sm mt-1">
                  {isAr ? "أرقام ومحطات توثق حجم التداول والوصول العالمي." : "Key milestones documenting global trade volume and verified reach."}
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-sp-4 w-full">
                {[
                  { value: "+7", labelAr: "سنوات خبرة عملية", labelEn: "Years Practical Experience" },
                  { value: "+900", labelAr: "تاجر ورائد أعمال", labelEn: "Traders & Entrepreneurs" },
                  { value: "+400", labelAr: "مصنع ومورد معتمد", labelEn: "Verified Factories & Suppliers" },
                  { value: "+42", labelAr: "دولة وسوق دولي", labelEn: "Countries & Global Markets" },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-gold/30 bg-black/60 p-sp-5 text-center flex flex-col items-center justify-center"
                  >
                    <span className="font-mono text-3xl font-extrabold text-gold">{stat.value}</span>
                    <span className="text-xs text-silver mt-2 font-medium">{isAr ? stat.labelAr : stat.labelEn}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-sp-4 w-full">
                {[
                  {
                    titleAr: "تأمين سلاسل توريد كبرى الشركات",
                    titleEn: "Corporate Supply Chain Security",
                    descAr: "إدارة وتأمين عمليات توريد لمئات المؤسسات والشركات الناشئة بدون عيوب صناعية أو تأخير لوجستي.",
                    descEn: "Managing sourcing operations for hundreds of companies with zero quality control failures.",
                  },
                  {
                    titleAr: "بناء دليل المصانع الصينية المعتمدة",
                    titleEn: "China Verified Factory Network",
                    descAr: "إنشاء شبكة فحص وتدقيق ميداني مباشرة تغطي العواصم الصناعية الكبرى مثل قوانغتشو، إيو، وشينزين.",
                    descEn: "Establishing direct factory audit coverage across Guangzhou, Yiwu, and Shenzhen.",
                  },
                ].map((ach, idx) => (
                  <div key={idx} className="rounded-xl border border-glass bg-white/[0.02] p-sp-5">
                    <h3 className="font-display text-lg font-bold text-gold">{isAr ? ach.titleAr : ach.titleEn}</h3>
                    <p className="text-silver text-sm mt-1">{isAr ? ach.descAr : ach.descEn}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: TIMELINE */}
          {subPage === "timeline" && (
            <div className="flex flex-col items-start text-start gap-sp-6">
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                  {isAr ? "مسيرة العمل (2017 — الحاضر)" : "Professional Career Timeline (2017 — Present)"}
                </h2>
                <p className="text-silver text-sm mt-1">
                  {isAr ? "المراحل الخمس لتطور الخبرة الميدانية والتجارية." : "The 6 stages of practical trade evolution."}
                </p>
              </div>

              <div className="relative border-r-2 md:border-r-0 md:border-l-2 border-gold/30 pr-sp-6 md:pr-0 md:pl-sp-6 mr-sp-3 md:mr-0 md:ml-sp-3 space-y-sp-8 w-full">
                {timelineItems.map((item, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute -right-[31px] md:right-auto md:-left-[31px] top-1 h-4 w-4 rounded-full bg-gold border-4 border-[#0F1117]" />
                    <span className="font-mono text-sm font-bold text-gold">{item.year}</span>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white mt-1">
                      {isAr ? item.titleAr : item.titleEn}
                    </h3>
                    <p className="text-silver text-sm font-light leading-lh-relaxed mt-1">
                      {isAr ? item.descAr : item.descEn}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: DIRECTORY (VERIFIED ACCOUNTS) */}
          {subPage === "directory" && (
            <div className="flex flex-col items-start text-start gap-sp-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full">
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                    {isAr ? "الحسابات والقنوات الرسمية المعتمدة" : "Verified Official Channels Directory"}
                  </h2>
                  <p className="text-silver text-sm mt-1">
                    {isAr
                      ? "دليل الحسابات الموثقة لحسام مبروك لحماية العلامة التجارية ومنع الانتحال."
                      : "Official verified directory to ensure authentic communications."}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 text-xs font-medium text-gold bg-gold/10 px-3.5 py-2 rounded-full border border-gold/30 shrink-0">
                  <CheckCircle2 className="h-4 w-4 text-gold" />
                  {isAr ? "حسابات موثقة رسمياً" : "Officially Verified"}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-sp-4 w-full">
                {socialLinks.map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <a
                      key={idx}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-sp-5 rounded-2xl border border-glass bg-black/60 hover:border-gold/60 hover:bg-gold/10 transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-sp-3">
                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold border border-gold/30 group-hover:bg-gold group-hover:text-black transition-colors">
                          <IconComp className="h-5 w-5" />
                        </span>
                        <div className="text-start">
                          <span className="font-display text-base font-bold text-white block group-hover:text-gold transition-colors">
                            {item.name}
                          </span>
                          <span className="font-mono text-xs text-silver-dim block">
                            {item.handle}
                          </span>
                        </div>
                      </div>
                      <Globe className="h-4 w-4 text-silver-dim group-hover:text-gold transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 5: FAQ — 50 Questions Explorer with Pagination + Search + Categories */}
          {subPage === "faq" && (
            <FAQExplorer locale={locale} />
          )}

        </div>
      </section>

    </main>
  );
}
