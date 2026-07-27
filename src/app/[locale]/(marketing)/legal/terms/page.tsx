import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return [{ locale: "ar" }, { locale: "en" }];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr ? "شروط الاستخدام — حسام مبروك" : "Terms of Service — Hussam Mabrouk",
    description: isAr
      ? "شروط وأحكام استخدام موقع وخدمات حسام مبروك للاستيراد والتجارة الدولية."
      : "Terms and conditions for using Hussam Mabrouk's website and international trade consulting services.",
  };
}

export default async function TermsPage({ params }: PageProps) {
  const { locale } = await params;
  const isAr = locale === "ar";

  return (
    <main className="min-h-screen bg-black text-white py-16 px-6" dir={isAr ? "rtl" : "ltr"}>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {isAr ? "شروط الاستخدام" : "Terms of Service"}
        </h1>
        <p className="text-silver text-sm mb-8 font-mono">
          {isAr ? "آخر تحديث: يوليو 2026" : "Last updated: July 2026"}
        </p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              {isAr ? "قبول الشروط" : "Acceptance of Terms"}
            </h2>
            <p>
              {isAr
                ? "باستخدامك لموقع حسام مبروك وخدماته، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي من هذه الشروط، يرجى عدم استخدام الموقع أو الخدمات."
                : "By using Hussam Mabrouk's website and services, you agree to be bound by these terms and conditions. If you disagree with any part of these terms, please do not use the website or services."}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              {isAr ? "الخدمات المقدمة" : "Services Provided"}
            </h2>
            <p>
              {isAr
                ? "يقدم حسام مبروك خدمات استشارية متخصصة في التجارة الدولية والاستيراد من الصين، وتشمل جلسات الاستشارة الخاصة، وبرامج الخبرات الميدانية، وخدمات التحقق من الموردين."
                : "Hussam Mabrouk provides specialized consulting services in international trade and importing from China, including private consultation sessions, field experience programs, and supplier verification services."}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              {isAr ? "الحجوزات والمدفوعات" : "Bookings and Payments"}
            </h2>
            <p>
              {isAr
                ? "تتم الحجوزات عبر المنصة الإلكترونية. يحق لنا تأكيد أو رفض أي حجز. في حالة إلغاء الموعد من قِبلنا، يتم استرداد المبلغ المدفوع كاملاً."
                : "Bookings are made through the online platform. We reserve the right to confirm or decline any booking. If we cancel an appointment, a full refund will be issued."}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              {isAr ? "حدود المسؤولية" : "Limitation of Liability"}
            </h2>
            <p>
              {isAr
                ? "المعلومات والنصائح المقدمة هي للأغراض الاستشارية فقط. لا يتحمل حسام مبروك أي مسؤولية عن القرارات التجارية المبنية على هذه الاستشارات."
                : "The information and advice provided are for consulting purposes only. Hussam Mabrouk assumes no liability for business decisions made based on these consultations."}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              {isAr ? "الملكية الفكرية" : "Intellectual Property"}
            </h2>
            <p>
              {isAr
                ? "جميع المحتويات المنشورة على الموقع، بما في ذلك النصوص والصور والفيديوهات، هي ملك حصري لحسام مبروك ولا يجوز إعادة نشرها أو استخدامها بدون إذن مسبق."
                : "All content published on the website, including texts, images, and videos, is the exclusive property of Hussam Mabrouk and may not be republished or used without prior permission."}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
