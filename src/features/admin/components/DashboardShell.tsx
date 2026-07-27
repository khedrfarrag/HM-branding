"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import type { getDictionary } from "@/features/i18n/get-dictionary";
import { adminSignOutAction } from "@/features/admin/actions/auth";
import ToastContainer, { type ToastMessage } from "@/features/admin/components/ToastContainer";

interface NavItem {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const NAV_ITEMS: NavItem[] = [
  {
    href: "/admin/dashboard",
    label: "Overview",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    href: "/admin/dashboard/bookings",
    label: "Bookings",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    href: "/admin/dashboard/schedules",
    label: "Schedules",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: "/admin/dashboard/experiences",
    label: "Experiences",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: "/admin/dashboard/consultations",
    label: "Consultations",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

interface DashboardShellProps {
  children: React.ReactNode;
  adminEmail: string;
  locale?: string;
  dict?: Awaited<ReturnType<typeof getDictionary>>["admin"];
}

export default function DashboardShell({ children, adminEmail, locale = "en", dict }: DashboardShellProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const handleDismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  async function handleSignOut() {
    // Call server action — it clears all HttpOnly cookies server-side
    await adminSignOutAction();
    // Hard redirect: forces full page reload to flush client-side auth state & React cache
    window.location.href = "/admin/login";
  }

  function handleLocaleChange(newLocale: "ar" | "en") {
    document.cookie = `admin_lang=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    router.refresh();
  }

  const getNavItemLabel = (href: string, fallback: string) => {
    if (href === "/admin/dashboard") return dict?.sidebar?.overview || fallback;
    if (href === "/admin/dashboard/bookings") return dict?.sidebar?.bookings || fallback;
    if (href === "/admin/dashboard/schedules") return dict?.sidebar?.schedules || fallback;
    if (href === "/admin/dashboard/experiences") return dict?.sidebar?.experiences || fallback;
    if (href === "/admin/dashboard/consultations") return locale === "ar" ? "الاستشارات" : "Consultations";
    return fallback;
  };

  const Sidebar = () => (
    <aside className="flex flex-col h-full w-64 border-r border-white/[0.07] bg-[#0B0D11] px-4 py-6">
      {/* Logo */}
      <div className="mb-8 px-2">
        <span className="text-gold font-bold text-lg tracking-wider">
          {dict?.sidebar?.title || "HM"}
        </span>
        <span className="text-gray-500 text-xs block mt-0.5">
          {dict?.sidebar?.subtitle || "Admin Dashboard"}
        </span>
      </div>

      {/* Nav */}
      <nav className="flex-1 space-y-1" aria-label="Admin navigation">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/admin/dashboard" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-150",
                isActive
                  ? "bg-gold/10 text-gold border border-gold/20"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              )}
              aria-current={isActive ? "page" : undefined}
            >
              {item.icon}
              {getNavItemLabel(item.href, item.label)}
            </Link>
          );
        })}
      </nav>

      {/* Language Switcher & User + Sign out */}
      <div className="border-t border-white/[0.07] pt-4 mt-4 space-y-4">
        {/* Language Switcher inside Admin Sidebar */}
        <div className="flex items-center justify-between px-2 text-xs text-gray-500">
          <span>{locale === "ar" ? "اللغة:" : "Language:"}</span>
          <div className="flex gap-2">
            <button
              onClick={() => handleLocaleChange("ar")}
              className={cn(
                "px-2 py-1 rounded transition-all",
                locale === "ar" ? "bg-gold text-black font-semibold" : "text-gray-400 hover:text-white"
              )}
            >
              عربي
            </button>
            <button
              onClick={() => handleLocaleChange("en")}
              className={cn(
                "px-2 py-1 rounded transition-all",
                locale === "en" ? "bg-gold text-black font-semibold" : "text-gray-400 hover:text-white"
              )}
            >
              EN
            </button>
          </div>
        </div>

        <div className="border-t border-white/[0.05] pt-3">
          <div className="px-2 mb-3">
            <p className="text-xs text-gray-600 truncate">{adminEmail}</p>
          </div>
          <button
            onClick={handleSignOut}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-400 hover:text-red-400 hover:bg-red-500/5 transition-colors"
            id="admin-signout-btn"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            {dict?.sidebar?.signout || "Sign Out"}
          </button>
        </div>
      </div>
    </aside>
  );

  return (
    <div className="flex min-h-screen font-sans" dir={locale === "ar" ? "rtl" : "ltr"}>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex">
        <Sidebar />
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setSidebarOpen(false)} />
          <div className="absolute inset-y-0 left-0 z-50 flex">
            <Sidebar />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile Header */}
        <header className="md:hidden flex items-center justify-between border-b border-white/[0.07] px-4 py-3 bg-[#0B0D11]">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 text-gray-400 hover:text-white"
            aria-label="Open sidebar"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <span className="text-gold font-bold">{dict?.sidebar?.title || "HM Admin"}</span>
          <div className="w-10" />
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6" id="admin-main-content">
          {children}
        </main>
      </div>
      <ToastContainer toasts={toasts} onDismiss={handleDismissToast} locale={locale} />
    </div>
  );
}
