import React, { Suspense } from "react";
import { Metadata } from "next";
import { Locale, BookingTargetType } from "@/domains/shared/value-objects";
import JsonLd from "@/components/JsonLd";
import { buildPersonSchema } from "@/lib/schema/person";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { supabasePublic } from "@/repositories/supabase/client";
import BookingFormWrapper from "@/features/booking/components/BookingFormWrapper";

interface PageProps {
  params: Promise<{
    locale: string;
    type: string;
    slug: string;
  }>;
  searchParams?: Promise<{ scheduleId?: string }>;
}

const BOOKING_TYPES: BookingTargetType[] = ["consultation", "experience", "corporate", "event"];

export async function generateStaticParams() {
  const locales: Locale[] = ["ar", "en"];
  const paramsList: { locale: Locale; type: string; slug: string }[] = [];

  for (const locale of locales) {
    for (const type of BOOKING_TYPES) {
      paramsList.push({ locale, type, slug: `book-${type}` });
    }
  }

  return paramsList;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, type } = await params;
  const isAr = locale === "ar";
  const bookingType = type as BookingTargetType;

  const titles: Record<BookingTargetType, string> = {
    consultation: isAr ? "احجز استشارة خاصة مع حسام مبروك" : "Book a Private Consultation with Hussam Mabrouk",
    experience:   isAr ? "سجل في أحد برامج الخبرة الميدانية" : "Register for a Field Experience Program",
    corporate:    isAr ? "احجز برنامج مؤسسي للشركات" : "Book Corporate Sourcing Program",
    event:        isAr ? "سجل في الفعاليات القادمة" : "Register for Upcoming Events"
  };

  return {
    title: titles[bookingType] ?? (isAr ? "الحجز والتسجيل" : "Booking & Registration"),
    description: isAr
      ? "احجز موعدك الآن مع حسام مبروك وابدأ رحلة الاستيراد الاحترافية."
      : "Book your appointment with Hussam Mabrouk and start your professional sourcing journey.",
    alternates: { canonical: `https://hussam-mabrouk.com/${locale}/booking/${type}` }
  };
}

/** Fetch available sessions from Supabase for experience type */
async function getSchedules(slug: string) {
  const { data } = await supabasePublic
    .from("experience_schedules")
    .select("id, start_date, end_date, seats_remaining, price, currency")
    .eq("experience_slug", slug)
    .gt("seats_remaining", 0)
    .gt("enrollment_deadline", new Date().toISOString().split("T")[0])
    .order("start_date", { ascending: true });

  return data ?? [];
}

export default async function BookingPage({ params, searchParams }: PageProps) {
  const { locale, type, slug } = await params;
  const sp = searchParams ? await searchParams : {};
  const isAr = locale === "ar";
  const bookingType = type as BookingTargetType;

  const personSchema = buildPersonSchema(locale as Locale);
  const breadcrumb = buildBreadcrumbSchema([
    { name: isAr ? "الرئيسية" : "Home", item: `/${locale}` },
    { name: isAr ? "الحجز والتسجيل" : "Booking", item: `/${locale}/booking` },
    { name: type.replace(/-/g, " "), item: `/${locale}/booking/${type}` }
  ]);

  const bookingLabels: Record<BookingTargetType, string> = {
    consultation: isAr ? "استشارة خاصة مع حسام مبروك" : "Private Consultation",
    experience:   isAr ? "برنامج خبرة ميدانية في الصين" : "China Field Experience Program",
    corporate:    isAr ? "برنامج مؤسسي للشركات" : "Corporate Sourcing Program",
    event:        isAr ? "الفعاليات والأحداث" : "Events & Upcoming Sessions"
  };

  // Fetch sessions only for experience type
  const schedules = bookingType === "experience" ? await getSchedules(slug) : [];
  const preselectedScheduleId = sp.scheduleId ?? (schedules.length === 1 ? schedules[0].id : undefined);

  return (
    <main className="min-h-screen bg-[#0B0D11]" id="booking-page">
      <JsonLd schema={personSchema} />
      <JsonLd schema={breadcrumb} />

      <div className="container mx-auto px-4 py-16 max-w-2xl">
        {/* Header */}
        <header className="text-center mb-12" dir={isAr ? "rtl" : "ltr"}>
          <span className="inline-block text-gold uppercase tracking-[0.2em] text-xs font-semibold mb-4">
            {isAr ? "الحجز والتسجيل" : "Booking & Registration"}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            {bookingLabels[bookingType]}
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            {isAr
              ? "أكمل النموذج أدناه وسنتواصل معك خلال 24 ساعة."
              : "Complete the form below and we will contact you within 24 hours."}
          </p>
        </header>

        {/* Session Selector — shown for experience type with multiple slots */}
        {bookingType === "experience" && schedules.length > 1 && (
          <div className="mb-8 rounded-xl border border-gold/20 bg-gold/5 p-5" dir={isAr ? "rtl" : "ltr"}>
            <h2 className="text-sm font-semibold text-gold mb-3 uppercase tracking-wider">
              {isAr ? "الجلسات المتاحة" : "Available Sessions"}
            </h2>
            <div className="space-y-2">
              {schedules.map((s) => (
                <a
                  key={s.id}
                  href={`?scheduleId=${s.id}`}
                  className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm hover:border-gold/40 transition-colors"
                >
                  <span className="text-white">
                    {new Date(s.start_date).toLocaleDateString(locale === "ar" ? "ar-SA" : "en-US", {
                      year: "numeric", month: "long", day: "numeric"
                    })}
                    {" — "}
                    {new Date(s.end_date).toLocaleDateString(locale === "ar" ? "ar-SA" : "en-US", {
                      year: "numeric", month: "long", day: "numeric"
                    })}
                  </span>
                  <span className="text-gold font-semibold">
                    {s.seats_remaining} {isAr ? "مقعد متاح" : "seats left"}
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Booking Form */}
        <div className="rounded-2xl border border-white/10 bg-white/3 p-6 md:p-8 backdrop-blur-sm">
          <Suspense fallback={<div className="text-gray-500 text-center py-8">Loading...</div>}>
            <BookingFormWrapper
              locale={locale as Locale}
              targetType={bookingType}
              scheduleId={preselectedScheduleId}
            />
          </Suspense>
        </div>

        {/* Trust badges */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-gray-500" dir={isAr ? "rtl" : "ltr"}>
          <span>🔒 {isAr ? "بياناتك محمية بالكامل" : "Your data is fully protected"}</span>
          <span>⚡ {isAr ? "رد خلال 24 ساعة" : "Response within 24 hours"}</span>
          <span>✅ {isAr ? "بدون التزام مسبق" : "No prior commitment required"}</span>
        </div>
      </div>
    </main>
  );
}
