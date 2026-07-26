import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { supabaseAdmin } from "@/repositories/supabase/client";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";

interface PageProps {
  params: Promise<{ locale: string; id: string }>;
}

export const dynamic = "force-dynamic"; // confirmation pages must not be cached

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr ? "تأكيد الحجز — حسام مبروك" : "Booking Confirmation — Hussam Mabrouk",
    description: isAr
      ? "تم استلام طلبك بنجاح. سيتواصل معك فريقنا قريباً."
      : "Your request has been received. Our team will contact you shortly.",
  };
}

interface BookingWithClient {
  id: string;
  target_type: string;
  status: string;
  created_at: string;
  clients: {
    name: string;
    email: string;
  };
}

export default async function BookingConfirmationPage({ params }: PageProps) {
  const { locale, id } = await params;
  const isAr = locale === "ar";

  // Fetch booking with client info
  const { data: booking, error } = await supabaseAdmin
    .from("bookings")
    .select("id, target_type, status, created_at, clients(name, email)")
    .eq("id", id)
    .single<BookingWithClient>();

  if (error || !booking) {
    notFound();
  }

  const shortCode = booking.id.slice(0, 8).toUpperCase();
  const createdDate = new Date(booking.created_at).toLocaleDateString(
    isAr ? "ar-SA" : "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  const breadcrumb = buildBreadcrumbSchema([
    { name: isAr ? "الرئيسية" : "Home", item: `/${locale}` },
    { name: isAr ? "الحجز" : "Booking", item: `/${locale}/booking` },
    { name: isAr ? "تأكيد الحجز" : "Confirmation", item: `/${locale}/booking/confirmation/${id}` }
  ]);

  return (
    <main
      className="min-h-screen bg-[#0B0D11] flex items-center justify-center px-4 py-16"
      id="confirmation-page"
      dir={isAr ? "rtl" : "ltr"}
    >
      <JsonLd schema={breadcrumb} />

      <div className="w-full max-w-lg">
        {/* Success Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative flex h-24 w-24 items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-gold/10 animate-ping opacity-30" />
            <div className="relative h-20 w-20 rounded-full bg-linear-to-b from-gold/20 to-gold/5 border border-gold/30 flex items-center justify-center">
              <svg className="h-10 w-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-white/10 bg-white/3 backdrop-blur-sm p-8 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {isAr ? "تم استلام طلبك بنجاح! 🎉" : "Booking Request Received! 🎉"}
          </h1>
          <p className="text-gray-400 mb-8 leading-relaxed">
            {isAr
              ? `شكراً ${booking.clients.name}، سيتواصل معك فريقنا خلال 24 ساعة لتأكيد الحجز وإرشادك للخطوات التالية.`
              : `Thank you ${booking.clients.name}, our team will contact you within 24 hours to confirm your booking and guide you through next steps.`}
          </p>

          {/* Booking Details */}
          <div className="rounded-xl bg-white/5 border border-white/10 p-6 mb-8 text-right space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-500 text-sm">{isAr ? "رمز الحجز" : "Booking Code"}</span>
              <span className="font-mono text-xl font-bold text-gold">{shortCode}</span>
            </div>
            <div className="h-px bg-white/5" />
            <div className="flex items-center justify-between">
              <span className="text-gray-500 text-sm">{isAr ? "الاسم" : "Name"}</span>
              <span className="text-white text-sm font-medium">{booking.clients.name}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500 text-sm">{isAr ? "البريد" : "Email"}</span>
              <span className="text-white text-sm">{booking.clients.email}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500 text-sm">{isAr ? "نوع الطلب" : "Type"}</span>
              <span className="text-white text-sm capitalize">{booking.target_type.replace("_", " ")}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500 text-sm">{isAr ? "تاريخ الطلب" : "Date"}</span>
              <span className="text-white text-sm">{createdDate}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500 text-sm">{isAr ? "الحالة" : "Status"}</span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 px-3 py-1 text-xs text-yellow-400 font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 animate-pulse" />
                {isAr ? "قيد المراجعة" : "Pending Review"}
              </span>
            </div>
          </div>

          {/* Info box */}
          <div className="rounded-lg border border-blue-500/20 bg-blue-500/5 px-4 py-3 text-sm text-blue-300 mb-8">
            {isAr
              ? "📧 تم إرسال بريد إلكتروني تأكيدي إلى عنوانك. تحقق من مجلد البريد غير المرغوب إن لم تجده."
              : "📧 A confirmation email has been sent to your address. Check your spam folder if you don't see it."}
          </div>

          {/* CTA */}
          <Link
            href={`/${locale}`}
            className="inline-block rounded-full bg-linear-to-b from-gold/80 to-[#A07C3A] px-8 py-3 text-sm font-semibold text-black transition-all hover:translate-y-[-2px] hover:shadow-[0_14px_40px_rgba(199,161,92,0.3)]"          >
            {isAr ? "العودة إلى الرئيسية" : "Return to Homepage"}
          </Link>
        </div>

        {/* ID for reference */}
        <p className="text-center text-gray-600 text-xs mt-4">
          {isAr ? "المعرف الكامل:" : "Full ID:"} <code className="text-gray-500">{booking.id}</code>
        </p>
      </div>
    </main>
  );
}
