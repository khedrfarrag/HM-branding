"use client";

import React from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-black text-white min-h-screen flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white/5 border border-white/10 rounded-2xl p-8 text-center backdrop-blur-md">
          <div className="w-12 h-12 rounded-full bg-red-500/20 border border-red-500/40 text-red-400 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
            !
          </div>
          <h2 className="text-xl font-bold mb-2">حدث خطأ غير متوقع</h2>
          <p className="text-gray-400 text-sm mb-6">
            {error?.message || "تعذر تحميل الصفحة بشكل صحيح."}
          </p>
          <button
            onClick={() => reset()}
            className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold transition-all duration-200"
          >
            إعادة المحاولة
          </button>
        </div>
      </body>
    </html>
  );
}
