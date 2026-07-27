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
    title: isAr ? "سياسة الخصوصية — حسام مبروك" : "Privacy Policy — Hussam Mabrouk",
    description: isAr
      ? "سياسة الخصوصية الخاصة بموقع حسام مبروك وكيفية حماية بياناتك الشخصية."
      : "Privacy policy for Hussam Mabrouk's website and how we protect your personal data.",
  };
}

export default async function PrivacyPage({ params }: PageProps) {
  const { locale } = await params;
  const isAr = locale === "ar";

  return (
    <main className="min-h-screen bg-black text-white py-16 px-6" dir={isAr ? "rtl" : "ltr"}>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {isAr ? "سياسة الخصوصية" : "Privacy Policy"}
        </h1>
        <p className="text-silver text-sm mb-8 font-mono">
          {isAr ? "آخر تحديث: يوليو 2026" : "Last updated: July 2026"}
        </p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              {isAr ? "المعلومات التي نجمعها" : "Information We Collect"}
            </h2>
            <p>
              {isAr
                ? "نقوم بجمع المعلومات التي تقدمها مباشرةً عند حجز استشارة أو التواصل معنا، مثل الاسم وعنوان البريد الإلكتروني ورقم الهاتف واحتياجات عملك."
                : "We collect information you provide directly when booking a consultation or contacting us, such as your name, email address, phone number, and business needs."}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              {isAr ? "كيف نستخدم معلوماتك" : "How We Use Your Information"}
            </h2>
            <p>
              {isAr
                ? "نستخدم معلوماتك لتقديم الخدمات الاستشارية، والتواصل معك بشأن مواعيدك، وإرسال معلومات ذات صلة بخدماتنا في التجارة الدولية والاستيراد."
                : "We use your information to provide consulting services, communicate with you about your appointments, and send relevant information about our international trade and import services."}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              {isAr ? "حماية البيانات" : "Data Protection"}
            </h2>
            <p>
              {isAr
                ? "نحن نأخذ أمان بياناتك الشخصية على محمل الجد. يتم تخزين معلوماتك على خوادم آمنة ومشفرة، ولا نشاركها مع أطراف ثالثة دون موافقتك."
                : "We take the security of your personal data seriously. Your information is stored on secure, encrypted servers and is not shared with third parties without your consent."}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              {isAr ? "حقوقك" : "Your Rights"}
            </h2>
            <p>
              {isAr
                ? "يحق لك في أي وقت طلب الوصول إلى بياناتك الشخصية أو تصحيحها أو حذفها. يمكنك التواصل معنا عبر صفحة الاتصال."
                : "You have the right at any time to request access to, correction of, or deletion of your personal data. You can contact us via the contact page."}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              {isAr ? "تواصل معنا" : "Contact Us"}
            </h2>
            <p>
              {isAr
                ? "لأي استفسارات تتعلق بسياسة الخصوصية، يرجى التواصل معنا عبر صفحة الاتصال أو مباشرةً عبر البريد الإلكتروني."
                : "For any questions regarding this privacy policy, please contact us via the contact page or directly by email."}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
