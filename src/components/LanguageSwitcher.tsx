"use client";

import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  activeLocale: string;
}

export default function LanguageSwitcher({ activeLocale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLocaleChange = (newLocale: "ar" | "en") => {
    if (!pathname) return;

    const segments = pathname.split("/");
    // Replaces the first path segment (index 1) with the target locale prefix
    segments[1] = newLocale;
    const newPath = segments.join("/");

    // Persist locale selection cookie so middleware defaults to it on subsequent visits
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;

    router.push(newPath);
  };

  return (
    <div className="flex items-center gap-1 rounded-full border border-glass bg-glass p-0.5 backdrop-blur-[24px]">
      <button
        onClick={() => handleLocaleChange("ar")}
        className={cn(
          "inline-flex h-[30px] items-center justify-center rounded-full px-3.5 text-[11px] font-medium transition-all duration-300",
          activeLocale === "ar"
            ? "bg-gradient-to-b from-gold-soft to-gold text-black font-semibold"
            : "text-silver hover:text-white"
        )}
      >
        عربي
      </button>
      <button
        onClick={() => handleLocaleChange("en")}
        className={cn(
          "inline-flex h-[30px] items-center justify-center rounded-full px-3.5 text-[11px] font-medium transition-all duration-300",
          activeLocale === "en"
            ? "bg-gradient-to-b from-gold-soft to-gold text-black font-semibold"
            : "text-silver hover:text-white"
        )}
      >
        EN
      </button>
    </div>
  );
}
