"use server";

import { cookies } from "next/headers";
import { supabaseAdmin } from "@/repositories/supabase/client";

export async function adminSignOutAction(): Promise<{ success: boolean; redirectUrl: string }> {
  try {
    const cookieStore = await cookies();

    // 1. Get the current session token so we can revoke it server-side
    const accessToken = cookieStore.get(
      `sb-${process.env.NEXT_PUBLIC_SUPABASE_URL?.split("//")[1]?.split(".")[0]}-auth-token`
    )?.value;

    // 2. Sign out via supabase admin (revokes the server-side session)
    if (accessToken) {
      try {
        // Parse JWT to get user_id if needed — just call global signout
        await supabaseAdmin.auth.admin.signOut(accessToken);
      } catch {
        // Best-effort — continue even if token is already expired
      }
    }

    // 3. Delete ALL Supabase auth cookies server-side (HttpOnly-safe)
    const allCookies = cookieStore.getAll();
    for (const cookie of allCookies) {
      if (
        cookie.name.startsWith("sb-") ||
        cookie.name === "admin_lang" ||
        cookie.name === "supabase-auth-token"
      ) {
        cookieStore.delete(cookie.name);
      }
    }

    return { success: true, redirectUrl: "/admin/login" };
  } catch {
    // Even on error — delete cookies and redirect
    try {
      const cookieStore = await cookies();
      const allCookies = cookieStore.getAll();
      for (const cookie of allCookies) {
        if (cookie.name.startsWith("sb-") || cookie.name === "admin_lang") {
          cookieStore.delete(cookie.name);
        }
      }
    } catch {
      // ignore
    }
    return { success: false, redirectUrl: "/admin/login" };
  }
}
