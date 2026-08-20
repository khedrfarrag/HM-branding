import { redirect } from "next/navigation";
import { type Locale } from "@/features/i18n";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function AboutIndexPage({ params }: PageProps) {
  const { locale } = await params;
  redirect(`/${locale}/about/bio`);
}
