"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale } from "@/domains/shared/value-objects";

interface BreadcrumbProps {
  locale: Locale;
  customLinks?: { label: string; href: string }[];
}

export default function Breadcrumb({ locale, customLinks }: BreadcrumbProps) {
  const pathname = usePathname();
  const isAr = locale === "ar";

  // Build items from path segments if custom links are not provided
  let items = customLinks;

  if (!items) {
    const segments = pathname.split("/").filter(Boolean);
    // Remove the locale segment
    const pathSegments = segments.slice(1);
    
    let accumulatedPath = `/${locale}`;
    items = [
      { label: isAr ? "الرئيسية" : "Home", href: accumulatedPath }
    ];

    pathSegments.forEach((segment) => {
      accumulatedPath += `/${segment}`;
      // Humanize segment name
      const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");
      items!.push({ label, href: accumulatedPath });
    });
  }

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-6" aria-label="Breadcrumb">
      {items.map((item, index) => {
        const isLast = index === items!.length - 1;
        return (
          <React.Fragment key={index}>
            {index > 0 && <span className="mx-1">/</span>}
            {isLast ? (
              <span className="text-amber-500 font-semibold">{item.label}</span>
            ) : (
              <Link href={item.href} className="hover:text-white transition-colors">
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
