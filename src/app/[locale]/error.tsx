"use client";

import React, { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App Router Error Boundary caught error:", error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center p-6 text-center">
      <div className="max-w-md w-full bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
        <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
          !
        </div>
        <h2 className="text-xl font-bold mb-2 text-white">حدث خطأ أثناء تحميل هذه الصفحة</h2>
        <p className="text-gray-400 text-sm mb-6">
          {error?.message || "يرجى إعادة المحاولة أو العودة للصفحة الرئيسية."}
        </p>
        <button
          onClick={() => reset()}
          className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold transition-all duration-200"
        >
          إعادة المحاولة
        </button>
      </div>
    </div>
  );
}
