import type { NextRequest } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - fonts (fonts folder)
     * - assets (assets folder)
     * - favicon.ico (favicon file)
     * - robots.txt (robots.txt file)
     * - README.md (README file)
     */
    "/((?!api|_next/static|_next/image|fonts|assets|favicon.ico|robots.txt|README.md).*)",
  ],
};
