import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from "@/domains/shared/value-objects";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Exclude public assets, internal next files, and api requests
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/static") ||
    pathname.includes(".") // matches file extensions like favicon.ico, sitemap.xml, images, etc.
  ) {
    return NextResponse.next();
  }

  // 2. Admin route protection — check for Supabase auth session cookie
  if (pathname.startsWith("/admin")) {
    const hasSession = request.cookies.getAll().some(
      (cookie) => cookie.name.startsWith("sb-") && cookie.name.endsWith("-auth-token")
    );

    if (hasSession) {
      // If already logged in, redirect any access to root admin or login page to dashboard
      if (pathname === "/admin" || pathname === "/admin/" || pathname === "/admin/login") {
        return NextResponse.redirect(new URL("/admin/dashboard", request.url));
      }
      return NextResponse.next();
    } else {
      // If NOT logged in, allow ONLY the login page, redirect everything else to login
      if (pathname === "/admin/login") {
        return NextResponse.next();
      }
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  // 3. Check if the path already starts with a supported locale
  const pathnameHasLocale = SUPPORTED_LOCALES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // 4. Redirect to default locale (Arabic)
  request.nextUrl.pathname = `/${DEFAULT_LOCALE}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, static, etc.) and assets
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)"
  ]
};
