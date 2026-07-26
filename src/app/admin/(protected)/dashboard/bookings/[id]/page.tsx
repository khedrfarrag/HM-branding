import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { supabaseAdmin } from "@/repositories/supabase/client";
import BookingStatusEditor from "@/features/admin/components/BookingStatusEditor";
import { cookies } from "next/headers";
import { getDictionary, type Locale } from "@/features/i18n";
import type { BookingStatus } from "@/domains/booking/repository";

export const metadata: Metadata = {
  title: "Review Booking — HM Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

interface BookingDetail {
  id: string;
  target_type: string;
  target_slug: string;
  status: string;
  notes: string;
  payment_receipt_id: string | null;
  created_at: string;
  clients: {
    name: string;
    email: string;
    phone: string;
  } | null;
}

interface AuditLog {
  id: string;
  action: string;
  details: string;
  performed_by: string;
  created_at: string;
}

async function getBooking(id: string): Promise<BookingDetail | null> {
  const { data } = await supabaseAdmin
    .from("bookings")
    .select("id, target_type, target_slug, status, notes, payment_receipt_id, created_at, clients(name, email, phone)")
    .eq("id", id)
    .single();
  return data as unknown as BookingDetail;
}

async function getAuditLogs(bookingId: string): Promise<AuditLog[]> {
  const { data } = await supabaseAdmin
    .from("booking_audit_logs")
    .select("id, action, details, performed_by, created_at")
    .eq("booking_id", bookingId)
    .order("created_at", { ascending: false });
  return (data as AuditLog[]) ?? [];
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function BookingDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const booking = await getBooking(id);

  if (!booking) {
    notFound();
  }

  const auditLogs = await getAuditLogs(id);

  const cookieStore = await cookies();
  const locale = (cookieStore.get("admin_lang")?.value || "en") as Locale;
  const dict = await getDictionary(locale);
  const t = dict.admin.dashboard.bookingDetails;

  return (
    <div className="space-y-6 max-w-5xl" id="admin-booking-details-page">
      {/* Back button */}
      <div>
        <Link
          href="/admin/dashboard/bookings"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
        >
          <span>←</span> {t.backBtn}
        </Link>
      </div>

      {/* Title */}
      <div>
        <h1 className="text-2xl font-bold text-white">{t.title}</h1>
        <p className="font-mono text-gray-500 text-xs mt-1">{booking.id}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side: Booking & Client Info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-6 space-y-4">
            <h2 className="text-lg font-semibold text-white border-b border-white/[0.07] pb-3">
              {t.detailsCard}
            </h2>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500">{t.labels.name}</p>
                <p className="text-white font-medium mt-0.5">{booking.clients?.name ?? "—"}</p>
              </div>
              <div>
                <p className="text-gray-500">{t.labels.email}</p>
                <p className="text-white font-medium mt-0.5">{booking.clients?.email ?? "—"}</p>
              </div>
              <div>
                <p className="text-gray-500">{t.labels.phone}</p>
                <p className="text-white font-medium mt-0.5">{booking.clients?.phone ?? "—"}</p>
              </div>
              <div>
                <p className="text-gray-500">{t.labels.type}</p>
                <p className="text-white font-medium capitalize mt-0.5">{booking.target_type}</p>
              </div>
              <div>
                <p className="text-gray-500">{t.labels.createdAt}</p>
                <p className="text-white mt-0.5">
                  {new Date(booking.created_at).toLocaleString(locale === "ar" ? "ar-EG" : "en-US", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })}
                </p>
              </div>
              {booking.payment_receipt_id && (
                <div>
                  <p className="text-gray-500">{t.labels.code}</p>
                  <p className="text-white font-mono mt-0.5">{booking.payment_receipt_id}</p>
                </div>
              )}
            </div>
          </div>

          {/* Audit Logs */}
          <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-6">
            <h2 className="text-lg font-semibold text-white border-b border-white/[0.07] pb-3 mb-4">
              {t.auditCard}
            </h2>
            {auditLogs.length === 0 ? (
              <p className="text-gray-600 text-sm">No activity recorded yet.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="text-gray-500 border-b border-white/[0.07] pb-2">
                      <th className="py-2">{t.auditHeaders.event}</th>
                      <th className="py-2">{t.auditHeaders.performedBy}</th>
                      <th className="py-2">{t.auditHeaders.timestamp}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.05]">
                    {auditLogs.map((log) => (
                      <tr key={log.id} className="text-gray-300">
                        <td className="py-2.5 pr-2 font-medium">{log.details}</td>
                        <td className="py-2.5 capitalize">{log.performed_by}</td>
                        <td className="py-2.5 text-gray-500">
                          {new Date(log.created_at).toLocaleString(locale === "ar" ? "ar-EG" : "en-US", {
                            dateStyle: "short",
                            timeStyle: "short",
                          })}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Status Editor */}
        <div className="space-y-6">
          <BookingStatusEditor
            bookingId={booking.id}
            currentStatus={booking.status as BookingStatus}
            currentNotes={booking.notes}
            dict={dict.admin.dashboard.bookingDetails}
          />
        </div>
      </div>
    </div>
  );
}
