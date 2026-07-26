import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "placeholder-key";

/**
 * Public browser client — uses anon key, subject to Row Level Security.
 * Safe to use in Client Components.
 */
export const supabasePublic = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Server-side admin client — uses service role key, bypasses RLS.
 * MUST only be used in Server Components, Server Actions, or Route Handlers.
 * Never expose this client to the browser.
 */
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});
