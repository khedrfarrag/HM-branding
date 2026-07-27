"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface ToastMessage {
  id: string;
  type: "success" | "error" | "info";
  msg: string;
}

interface ToastContainerProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
  locale?: string;
}

export default function ToastContainer({ toasts, onDismiss, locale = "en" }: ToastContainerProps) {
  if (toasts.length === 0) return null;

  const isRtl = locale === "ar";

  return (
    <div
      aria-live="polite"
      className={cn(
        "fixed bottom-5 z-50 flex flex-col gap-2 max-w-sm w-full px-4 pointer-events-none transition-all duration-300",
        isRtl ? "left-5 items-start" : "right-5 items-end"
      )}
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          role="alert"
          className={cn(
            "pointer-events-auto flex items-center justify-between gap-3 w-full rounded-xl border px-4 py-3 text-sm shadow-xl backdrop-blur-md transition-all duration-200 animate-in fade-in slide-in-from-bottom-2",
            toast.type === "success"
              ? "border-emerald-500/30 bg-[#0B0D11]/90 text-emerald-400"
              : toast.type === "error"
              ? "border-red-500/40 bg-[#0B0D11]/95 text-red-400"
              : "border-gold/30 bg-[#0B0D11]/90 text-gold"
          )}
        >
          <div className="flex items-center gap-2.5 min-w-0">
            {toast.type === "success" ? (
              <svg className="h-5 w-5 shrink-0 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : toast.type === "error" ? (
              <svg className="h-5 w-5 shrink-0 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ) : (
              <svg className="h-5 w-5 shrink-0 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
            <span className="truncate text-xs sm:text-sm font-medium leading-tight">{toast.msg}</span>
          </div>

          <button
            onClick={() => onDismiss(toast.id)}
            className="shrink-0 p-1 text-gray-400 hover:text-white transition-colors"
            aria-label="Dismiss toast"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
}
