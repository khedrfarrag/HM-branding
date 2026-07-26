import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const locales = ["ar", "en"];
const defaultLocale = "ar";

function getLocale(request: NextRequest): string {
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  if (cookieLocale && locales.includes(cookieLocale)) return cookieLocale;
  return defaultLocale;
}

export const updateSession = async (request: NextRequest) => {
  // 1. Start with a passthrough response so Supabase can set cookies
  let supabaseResponse = NextResponse.next({ request });

  // 2. Initialize Supabase SSR Client (MUST be before any logic)
  const supabase = createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) =>
          request.cookies.set(name, value)
        );
        supabaseResponse = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) =>
          supabaseResponse.cookies.set(name, value, options)
        );
      },
    },
  });

  // 3. Validate user securely — also auto-refreshes the session token
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { pathname } = request.nextUrl;

  // Helper: copy Supabase session cookies onto any new redirect response
  function withCookies(redirectResponse: NextResponse): NextResponse {
    supabaseResponse.cookies.getAll().forEach((cookie) => {
      redirectResponse.cookies.set(cookie);
    });
    return redirectResponse;
  }

  // ─── Auth Gate: /admin/* routes (locale-free, always at /admin/…) ──────────
  // Admin routes live at /admin/... NOT under /[locale]/admin/...
  // So we match them directly without stripping a locale prefix.
  if (pathname.startsWith("/admin")) {
    const isLoginPage = pathname === "/admin/login";

    // Case A: Not authenticated + trying to access a protected admin page
    if (!user && !isLoginPage) {
      request.nextUrl.pathname = "/admin/login";
      return withCookies(NextResponse.redirect(request.nextUrl));
    }

    // Case B: Already authenticated + trying to visit the login page again
    if (user && isLoginPage) {
      request.nextUrl.pathname = "/admin/dashboard";
      return withCookies(NextResponse.redirect(request.nextUrl));
    }

    // Admin path is fine — pass through (no locale redirect for admin)
    return supabaseResponse;
  }

  // ─── Locale Routing: all non-admin, non-api public routes ──────────────────
  const pathnameHasLocale = locales.some(
    (locale) =>
      pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathnameHasLocale) {
    const locale = getLocale(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return withCookies(NextResponse.redirect(request.nextUrl));
  }

  return supabaseResponse;
};
