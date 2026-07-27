import { createClient } from "@supabase/supabase-js";

function getCleanEnv(...keys: string[]): string | undefined {
  for (const key of keys) {
    const val = process.env[key];
    if (val && val.trim() !== "" && val !== "placeholder-key") {
      return val.trim();
    }
  }
  return undefined;
}

// Flexible environment resolution to support legacy keys, publishable keys, and standard keys
const supabaseUrl =
  getCleanEnv("NEXT_PUBLIC_SUPABASE_URL", "SUPABASE_URL") ||
  "https://placeholder.supabase.co";

const supabaseAnonKey =
  getCleanEnv(
    "NEXT_PUBLIC_SUPABASE_ANON_KEY",
    "SUPABASE_ANON_KEY",
    "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY",
    "SUPABASE_PUBLISHABLE_KEY"
  ) || "placeholder-key";

const supabaseServiceKey =
  getCleanEnv(
    "SUPABASE_SERVICE_ROLE_KEY",
    "SUPABASE_SECRET_KEY",
    "SUPABASE_SERVICE_KEY"
  ) || "placeholder-key";

/**
 * Public browser client — uses anon/publishable key.
 * Safe to use in Client Components.
 */
export const supabasePublic = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Server-side admin client — uses service role / secret key to bypass RLS safely on the server.
 * MUST only be used in Server Components, Server Actions, or Route Handlers.
 */
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});
