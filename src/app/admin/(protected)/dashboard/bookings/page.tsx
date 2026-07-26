import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { supabaseAdmin } from "@/repositories/supabase/client";
import type { BookingStatus, BookingTargetType } from "@/domains/booking/repository";
import { cookies } from "next/headers";
import { getDictionary, type Locale } from "@/features/i18n";

export const metadata: Metadata = {
  title: "Bookings — HM Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

interface PageProps {
  searchParams?: Promise<{ status?: BookingStatus; type?: BookingTargetType; page?: string }>;
}

interface BookingRow {
  id: string;
  target_type: string;
  status: string;
  created_at: string;
  clients: {
    name: string;
    email: string;
  } | null;
}

const STATUS_OPTIONS: (BookingStatus | "all")[] = ["all", "pending", "confirmed", "cancelled", "refunded"];
const TYPE_OPTIONS: (BookingTargetType | "all")[] = ["all", "consultation", "experience", "corporate", "event"];

const STATUS_STYLES: Record<BookingStatus, string> = {
  pending:   "bg-yellow-500/10 border-yellow-500/30 text-yellow-400",
  confirmed: "bg-green-500/10 border-green-500/30 text-green-400",
  cancelled: "bg-red-500/10 border-red-500/30 text-red-400",
  refunded:  "bg-gray-500/10 border-gray-500/30 text-gray-400",
};

const PAGE_SIZE = 20;

export default async function BookingsPage({ searchParams }: PageProps) {
  const sp = searchParams ? await searchParams : {};
  const status  = sp.status as BookingStatus | "all" | undefined;
  const type    = sp.type as BookingTargetType | "all" | undefined;
  const page    = parseInt(sp.page ?? "1", 10);
  const offset  = (page - 1) * PAGE_SIZE;

  let query = supabaseAdmin
    .from("bookings")
    .select("id, target_type, status, created_at, clients(name, email)", { count: "exact" })
    .order("created_at", { ascending: false })
    .range(offset, offset + PAGE_SIZE - 1);

  if (status && status !== "all") {
    query = query.eq("status", status as BookingStatus);
  }
  if (type && type !== "all") {
    query = query.eq("target_type", type as BookingTargetType);
  }

  const { data, count } = await query;
  const bookings = (data as unknown as BookingRow[]) ?? [];
  const total = count ?? 0;
  const totalPages = Math.ceil(total / PAGE_SIZE);

  const cookieStore = await cookies();
  const locale = (cookieStore.get("admin_lang")?.value || "en") as Locale;
  const dict = await getDictionary(locale);
  const t = dict.admin.dashboard.bookings;

  const getStatusLabel = (val: string) => {
    if (val === "all") return t.filterAll;
    if (val === "pending") return t.filterPending;
    if (val === "confirmed") return t.filterConfirmed;
    if (val === "cancelled") return t.filterCancelled;
    if (val === "refunded") return t.filterRefunded;
    return val;
  };

  const getTypeLabel = (val: string) => {
    if (val === "all") return locale === "ar" ? "كل الأنواع" : "All Types";
    if (val === "consultation") return dict.admin.dashboard.schedules.types.consultation;
    if (val === "experience") return dict.admin.dashboard.schedules.types.experience;
    if (val === "corporate") return dict.admin.dashboard.schedules.types.corporate;
    if (val === "event") return dict.admin.dashboard.schedules.types.event;
    if (val === "جولة الصين الاستكشافية") return dict.admin.dashboard.schedules.types.experience;
    return dict.admin.dashboard.schedules.types.unknown || "Unknown";
  };

  function buildUrl(params: Record<string, string | undefined>) {
    const nextSearchParams = new URLSearchParams();
    if (status) nextSearchParams.set("status", status);
    if (type)   nextSearchParams.set("type", type);
    nextSearchParams.set("page", String(page));
    Object.entries(params).forEach(([k, v]) => {
      if (v) nextSearchParams.set(k, v);
      else nextSearchParams.delete(k);
    });
    return `/admin/dashboard/bookings?${nextSearchParams}`;
  }

  return (
    <div className="space-y-6" id="admin-bookings-page">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">{t.title}</h1>
        <p className="text-gray-400 text-sm mt-1">
          {total.toLocaleString(locale === "ar" ? "ar-EG" : "en-US")}{" "}
          {total === 1 ? t.subtitle : (t.subtitles || t.subtitle)}
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4">
        {/* Status filter */}
        <div className="flex flex-col gap-1.5">
          <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
            {dict.admin.dashboard.bookingDetails.labels.status}
          </span>
          <div className="flex flex-wrap gap-1 rounded-lg border border-white/[0.07] bg-white/[0.02] p-1">
            {STATUS_OPTIONS.map((val) => {
              const isActive = (status ?? "all") === val;
              return (
                <Link
                  key={val}
                  href={buildUrl({ status: val === "all" ? undefined : val, page: "1" })}
                  className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                    isActive
                      ? "bg-[#C7A15C]/20 text-[#C7A15C]"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {getStatusLabel(val)}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Type filter */}
        <div className="flex flex-col gap-1.5">
          <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
            {locale === "ar" ? "النوع" : "Category"}
          </span>
          <div className="flex flex-wrap gap-1 rounded-lg border border-white/[0.07] bg-white/[0.02] p-1">
            {TYPE_OPTIONS.map((val) => {
              const isActive = (type ?? "all") === val;
              return (
                <Link
                  key={val}
                  href={buildUrl({ type: val === "all" ? undefined : val, page: "1" })}
                  className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                    isActive
                      ? "bg-[#C7A15C]/20 text-[#C7A15C]"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {getTypeLabel(val)}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/[0.07]">
                <th className="px-4 py-3 text-left text-gray-400 font-medium">{t.headers.code}</th>
                <th className="px-4 py-3 text-left text-gray-400 font-medium">{t.headers.client}</th>
                <th className="px-4 py-3 text-left text-gray-400 font-medium">{t.headers.type}</th>
                <th className="px-4 py-3 text-left text-gray-400 font-medium">{t.headers.status}</th>
                <th className="px-4 py-3 text-left text-gray-400 font-medium">{t.headers.date}</th>
                <th className="px-4 py-3 text-left text-gray-400 font-medium">{t.headers.actions}</th>
              </tr>
            </thead>
            <tbody>
              {bookings.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-4 py-12 text-center text-gray-600">
                    {t.noBookings}
                  </td>
                </tr>
              ) : (
                bookings.map((b) => (
                  <tr
                    key={b.id}
                    className="border-b border-white/[0.05] hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="px-4 py-3 font-mono text-[#C7A15C] text-xs">
                      {b.id.slice(0, 8).toUpperCase()}
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-white text-sm">{b.clients?.name ?? "—"}</span>
                      <span className="block text-gray-500 text-xs">{b.clients?.email}</span>
                    </td>
                    <td className="px-4 py-3 text-gray-300 capitalize text-sm">
                      {getTypeLabel(b.target_type)}
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
                    <td className="px-4 py-3">
                      <Link
                        href={`/admin/dashboard/bookings/${b.id}`}
                        className="text-xs text-[#C7A15C] hover:underline"
                        id={`booking-action-${b.id.slice(0, 8)}`}
                      >
                        {t.viewBtn}
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between pt-2">
          <p className="text-gray-500 text-sm">
            {locale === "ar"
              ? `صفحة ${page.toLocaleString("ar-EG")} من ${totalPages.toLocaleString("ar-EG")}`
              : `Page ${page} of ${totalPages}`}
          </p>
          <div className="flex gap-2">
            {page > 1 && (
              <Link
                href={buildUrl({ page: String(page - 1) })}
                className="rounded-lg border border-white/10 px-3 py-1.5 text-sm text-gray-300 hover:text-white hover:border-white/20 transition-colors"
              >
                {locale === "ar" ? "← السابق" : "← Prev"}
              </Link>
            )}
            {page < totalPages && (
              <Link
                href={buildUrl({ page: String(page + 1) })}
                className="rounded-lg border border-white/10 px-3 py-1.5 text-sm text-gray-300 hover:text-white hover:border-white/20 transition-colors"
              >
                {locale === "ar" ? "التالي →" : "Next →"}
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
