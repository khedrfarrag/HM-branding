import { getDictionary, type Locale } from "@/features/i18n";
import { HomePage } from "@/features/home";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return <HomePage locale={locale} dict={dict} />;
}
