import React from "react";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import DashboardShell from "@/features/admin/components/DashboardShell";
import { cookies } from "next/headers";
import { getDictionary, type Locale } from "@/features/i18n";

/**
 * Admin layout — server-side auth guard.
 * Uses getUser() (secure) instead of getSession() (can be spoofed).
 */
export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const cookieStore = await cookies();
  const locale = (cookieStore.get("admin_lang")?.value || "en") as Locale;
  const dict = await getDictionary(locale);

  return (
    <div className="min-h-screen bg-[#07090C] text-white">
      <DashboardShell adminEmail={user!.email ?? ""} locale={locale} dict={dict.admin}>
        {children}
      </DashboardShell>
    </div>
  );
}
