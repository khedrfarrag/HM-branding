import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { supabaseAdmin } from "@/repositories/supabase/client";
import type { BookingStatus } from "@/domains/booking/repository";
import { cookies } from "next/headers";
import { getDictionary, type Locale } from "@/features/i18n";

export const metadata: Metadata = {
  title: "Dashboard — HM Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

interface RecentBooking {
  id: string;
  target_type: string;
  status: string;
  created_at: string;
  clients: {
    name: string;
    email: string;
  } | null;
}

async function getKPIs() {
  const [totalRes, pendingRes, confirmedRes, cancelledRes] = await Promise.all([
    supabaseAdmin.from("bookings").select("id", { count: "exact", head: true }),
    supabaseAdmin.from("bookings").select("id", { count: "exact", head: true }).eq("status", "pending"),
    supabaseAdmin.from("bookings").select("id", { count: "exact", head: true }).eq("status", "confirmed"),
    supabaseAdmin.from("bookings").select("id", { count: "exact", head: true }).eq("status", "cancelled"),
  ]);

  return {
    total:     totalRes.count ?? 0,
    pending:   pendingRes.count ?? 0,
    confirmed: confirmedRes.count ?? 0,
    cancelled: cancelledRes.count ?? 0,
  };
}

async function getRecentBookings(): Promise<RecentBooking[]> {
  const { data } = await supabaseAdmin
    .from("bookings")
    .select("id, target_type, status, created_at, clients(name, email)")
    .order("created_at", { ascending: false })
    .limit(5);

  // Cast because client relationship returns object or list depending on postgrest version typing
  return (data as unknown as RecentBooking[]) ?? [];
}

const STATUS_STYLES: Record<BookingStatus, string> = {
  pending:   "bg-yellow-500/10 border-yellow-500/30 text-yellow-400",
  confirmed: "bg-green-500/10 border-green-500/30 text-green-400",
  cancelled: "bg-red-500/10 border-red-500/30 text-red-400",
  refunded:  "bg-gray-500/10 border-gray-500/30 text-gray-400",
};

export default async function DashboardPage() {
  const [kpis, recentBookings] = await Promise.all([getKPIs(), getRecentBookings()]);

  const cookieStore = await cookies();
  const locale = (cookieStore.get("admin_lang")?.value || "en") as Locale;
  const dict = await getDictionary(locale);
  const t = dict.admin.dashboard.overview;

  function getStatusLabel(status: string) {
    const opts = dict.admin.dashboard.bookingDetails.statusOptions as Record<string, string>;
    return opts[status] || status;
  }

  return (
    <div className="space-y-8" id="admin-dashboard-overview">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">{t.title}</h1>
        <p className="text-gray-400 text-sm mt-1">{t.subtitle}</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        <KPICard label={t.kpis.totalBookings} value={kpis.total} accent="blue" locale={locale} />
        <KPICard label={t.kpis.pendingReview} value={kpis.pending} accent="yellow" locale={locale} />
        <KPICard label={t.kpis.confirmed} value={kpis.confirmed} accent="green" locale={locale} />
        <KPICard label={t.kpis.cancelled} value={kpis.cancelled} accent="red" locale={locale} />
      </div>

      {/* Recent Bookings */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-white">{t.recentBookings.title}</h2>
          <Link href="/admin/dashboard/bookings" className="text-sm text-[#C7A15C] hover:underline">
            {t.recentBookings.viewAll}
          </Link>
        </div>
        <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.07]">
                  <th className="px-4 py-3 text-left text-gray-400 font-medium">{t.recentBookings.headers.code}</th>
                  <th className="px-4 py-3 text-left text-gray-400 font-medium">{t.recentBookings.headers.client}</th>
                  <th className="px-4 py-3 text-left text-gray-400 font-medium">{t.recentBookings.headers.type}</th>
                  <th className="px-4 py-3 text-left text-gray-400 font-medium">{t.recentBookings.headers.status}</th>
                  <th className="px-4 py-3 text-left text-gray-400 font-medium">{t.recentBookings.headers.date}</th>
                </tr>
              </thead>
              <tbody>
                {recentBookings.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-4 py-8 text-center text-gray-600">
                      {t.recentBookings.noBookings}
                    </td>
                  </tr>
                ) : (
                  recentBookings.map((b) => (
                    <tr
                       key={b.id}
                      className="border-b border-white/[0.05] hover:bg-white/[0.02] transition-colors"
                    >
                      <td className="px-4 py-3">
                        <Link
                          href={`/admin/dashboard/bookings/${b.id}`}
                          className="font-mono text-[#C7A15C] hover:underline text-xs"
                        >
                          {b.id.slice(0, 8).toUpperCase()}
                        </Link>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-white">{b.clients?.name ?? "—"}</span>
                        <span className="block text-gray-500 text-xs">{b.clients?.email}</span>
                      </td>
                      <td className="px-4 py-3 text-gray-300 capitalize">
                        {b.target_type === "consultation" ? (dict.admin.dashboard.schedules.types.consultation) :
                         b.target_type === "experience" ? (dict.admin.dashboard.schedules.types.experience) : b.target_type}
                      </td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium capitalize ${STATUS_STYLES[b.status as BookingStatus]}`}>
                          {getStatusLabel(b.status)}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-400 text-xs">
                        {new Date(b.created_at).toLocaleDateString(locale === "ar" ? "ar-EG" : "en-US", {
                          year: "numeric", month: "short", day: "numeric"
                        })}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function KPICard({
  label, value, accent, locale,
}: { label: string; value: number; accent: "blue" | "yellow" | "green" | "red"; locale: string }) {
  const accentStyles = {
    blue:   "from-blue-500/10  to-transparent border-blue-500/20  text-blue-400",
    yellow: "from-yellow-500/10 to-transparent border-yellow-500/20 text-yellow-400",
    green:  "from-green-500/10 to-transparent border-green-500/20  text-green-400",
    red:    "from-red-500/10   to-transparent border-red-500/20    text-red-400",
  };

  return (
    <div className={`rounded-xl border bg-gradient-to-b p-5 ${accentStyles[accent]}`}>
      <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-2">{label}</p>
      <p className="text-3xl font-bold text-white">{value.toLocaleString(locale === "ar" ? "ar-EG" : "en-US")}</p>
    </div>
  );
}
