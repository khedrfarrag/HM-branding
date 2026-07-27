import { createClient } from "@supabase/supabase-js";

// Flexible environment resolution to support both legacy keys and new Supabase Server Build API keys
const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  process.env.SUPABASE_URL ||
  "https://placeholder.supabase.co";

const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  process.env.SUPABASE_ANON_KEY ||
  process.env.SUPABASE_PUBLISHABLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  "placeholder-key";

const supabaseServiceKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.SUPABASE_SECRET_KEY ||
  process.env.SUPABASE_SERVICE_KEY ||
  "placeholder-key";

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
