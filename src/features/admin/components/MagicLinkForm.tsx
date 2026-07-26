"use client";

import { useState, useTransition } from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import type { getDictionary } from "@/features/i18n/get-dictionary";

type State = "idle" | "loading" | "error";

export default function MagicLinkForm({ dict }: { dict?: Awaited<ReturnType<typeof getDictionary>>["admin"]["login"] }) {
  const supabase = createClient();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [state, setState] = useState<State>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [isPending, startTransition] = useTransition();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");

    startTransition(async () => {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setErrorMsg(
          error.message === "Invalid login credentials"
            ? (dict?.error || "Invalid email or password. Please try again.")
            : error.message
        );
        setState("error");
      } else {
        router.push("/admin/dashboard");
        router.refresh();
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" id="admin-login-form">
      {/* Email */}
      <div>
        <label htmlFor="admin-email" className="block text-sm text-gray-300 mb-1.5">
          {dict?.emailLabel || "Email Address"}
        </label>
        <input
          id="admin-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
          placeholder="admin@hussammabrouk.com"
          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-gold/60 transition-colors"
          aria-describedby={state === "error" ? "login-error" : undefined}
        />
      </div>

      {/* Password */}
      <div>
        <label htmlFor="admin-password" className="block text-sm text-gray-300 mb-1.5">
          {dict?.passwordLabel || "Password"}
        </label>
        <div className="relative">
          <input
            id="admin-password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
            placeholder={dict?.passwordLabel ? "" : "Enter your password"}
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 pr-11 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-gold/60 transition-colors"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200 transition-colors"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
              </svg>
            ) : (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Error */}
      {state === "error" && (
        <p id="login-error" role="alert" className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-red-400 text-sm">
          {errorMsg || (dict?.error || "Login failed. Please check your credentials and try again.")}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isPending || state === "loading" || !email || !password}
        className="w-full rounded-lg bg-linear-to-b from-gold/80 to-[#A07C3A] py-3 text-sm font-semibold text-black transition-all hover:-translate-y-px disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0"
        id="admin-signin-submit"
      >
        {state === "loading" ? (dict?.loadingBtn || "Signing in...") : (dict?.submitBtn || "Sign In")}
      </button>
    </form>
  );
}
