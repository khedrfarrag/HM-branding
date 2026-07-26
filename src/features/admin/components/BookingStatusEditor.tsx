"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { updateBookingStatusAction } from "@/features/admin/actions/update-booking-status";
import type { BookingStatus } from "@/domains/booking/repository";
import { cn } from "@/lib/utils";
import type { getDictionary } from "@/features/i18n/get-dictionary";

interface BookingStatusEditorProps {
  bookingId: string;
  currentStatus: BookingStatus;
  currentNotes: string;
  dict?: Awaited<ReturnType<typeof getDictionary>>["admin"]["dashboard"]["bookingDetails"];
}

const STATUS_TRANSITIONS: Record<BookingStatus, BookingStatus[]> = {
  pending:   ["confirmed", "cancelled"],
  confirmed: ["cancelled", "refunded"],
  cancelled: ["pending"],
  refunded:  [],
};

const STATUS_LABELS: Record<BookingStatus, string> = {
  pending:   "Pending Review",
  confirmed: "Confirmed",
  cancelled: "Cancelled",
  refunded:  "Refunded",
};

const STATUS_BUTTON_STYLES: Record<BookingStatus, string> = {
  confirmed: "bg-green-500/10 border-green-500/40 text-green-300 hover:bg-green-500/20",
  cancelled: "bg-red-500/10 border-red-500/40 text-red-300 hover:bg-red-500/20",
  refunded:  "bg-gray-500/10 border-gray-500/40 text-gray-300 hover:bg-gray-500/20",
  pending:   "bg-yellow-500/10 border-yellow-500/40 text-yellow-300 hover:bg-yellow-500/20",
};

export default function BookingStatusEditor({
  bookingId,
  currentStatus,
  currentNotes,
  dict,
}: BookingStatusEditorProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [notes, setNotes] = useState(currentNotes);
  const [receiptId, setReceiptId] = useState("");
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; msg: string } | null>(null);

  const availableTransitions = STATUS_TRANSITIONS[currentStatus];

  // Fallbacks in case dictionary is not loaded
  const labelActions = dict?.statusCard || "Actions";
  const labelNotes = dict?.labels?.notes || "Notes";
  const placeholderNotes = dict?.notesPlaceholder || "Add internal notes about this booking...";
  const btnSaveNotes = dict?.saveNotesBtn || "Save Notes";
  const labelReceipt = dict?.labels?.receiptId || "Payment Receipt ID";
  const placeholderReceipt = "e.g. INV-2026-001";
  const descReceipt = dict?.labels?.receiptOptional || "Optional — record offline payment reference";
  const msgNoTransitions = dict?.noTransitions || "No further transitions available.";
  const textUpdating = dict?.saving || "Updating...";

  function getStatusLabel(status: BookingStatus) {
    return dict?.statusOptions?.[status] || STATUS_LABELS[status];
  }

  function handleTransition(newStatus: BookingStatus) {
    setFeedback(null);
    startTransition(async () => {
      const result = await updateBookingStatusAction({
        bookingId,
        status: newStatus,
        notes: notes || undefined,
        paymentReceiptId: receiptId || undefined,
        performedBy: "admin",
      });

      if (result.success) {
        setFeedback({ type: "success", msg: `${dict?.statusUpdated || "Status updated to"} "${getStatusLabel(newStatus)}"` });
        router.refresh();
      } else {
        setFeedback({ type: "error", msg: result.error });
      }
    });
  }

  async function handleSaveNotes() {
    setFeedback(null);
    startTransition(async () => {
      // Direct update notes endpoint in local-fs or supabase
      // Wait, let's see if we have an action for updating notes or just reuse status change payload
      const result = await updateBookingStatusAction({
        bookingId,
        status: currentStatus,
        notes: notes,
        performedBy: "admin",
      });

      if (result.success) {
        setFeedback({ type: "success", msg: dict?.notesSaved || "Notes saved successfully." });
        router.refresh();
      } else {
        setFeedback({ type: "error", msg: result.error });
      }
    });
  }

  return (
    <div className="space-y-4">
      {/* Status Actions */}
      <div className="rounded-xl border border-white/[0.07] bg-white/2 p-5">
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">{labelActions}</h2>

        {availableTransitions.length === 0 ? (
          <p className="text-gray-600 text-sm">{msgNoTransitions}</p>
        ) : (
          <div className="space-y-2">
            {availableTransitions.map((nextStatus) => (
              <button
                key={nextStatus}
                onClick={() => handleTransition(nextStatus)}
                disabled={isPending}
                className={cn(
                  "w-full rounded-lg border px-4 py-2.5 text-sm font-medium transition-all",
                  "disabled:opacity-50 disabled:cursor-not-allowed",
                  STATUS_BUTTON_STYLES[nextStatus]
                )}
                id={`booking-transition-${nextStatus}`}
              >
                {isPending ? textUpdating : `→ ${dict?.markAs || "Mark as"} ${getStatusLabel(nextStatus)}`}
              </button>
            ))}
          </div>
        )}

        {/* Feedback */}
        {feedback && (
          <div
            role="alert"
            className={cn(
              "mt-4 rounded-lg border px-4 py-3 text-sm",
              feedback.type === "success"
                ? "border-green-500/30 bg-green-500/10 text-green-400"
                : "border-red-500/30 bg-red-500/10 text-red-400"
            )}
          >
            {feedback.msg}
          </div>
        )}
      </div>

      {/* Payment Receipt */}
      {currentStatus === "pending" && (
        <div className="rounded-xl border border-white/[0.07] bg-white/2 p-5">
          <label htmlFor="payment-receipt" className="block text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
            {labelReceipt}
          </label>
          <input
            id="payment-receipt"
            type="text"
            value={receiptId}
            onChange={(e) => setReceiptId(e.target.value)}
            placeholder={placeholderReceipt}
            className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gold/40 transition-colors"
          />
          <p className="mt-1.5 text-xs text-gray-600">{descReceipt}</p>
        </div>
      )}

      {/* Admin Notes */}
      <div className="rounded-xl border border-white/[0.07] bg-white/2 p-5">
        <label htmlFor="admin-notes" className="block text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 font-medium">
          {labelNotes}
        </label>
        <textarea
          id="admin-notes"
          rows={5}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder={placeholderNotes}
          className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gold/40 transition-colors resize-none mb-3"
        />
        <button
          onClick={handleSaveNotes}
          disabled={isPending}
          className="w-full rounded-lg border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 py-2 text-xs font-semibold text-white transition-all disabled:opacity-50"
        >
          {isPending ? textUpdating : btnSaveNotes}
        </button>
      </div>
    </div>
  );
}
