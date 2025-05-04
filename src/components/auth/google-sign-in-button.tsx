/*
 * File: src/components/auth/google-sign-in-button.tsx
 */
"use client";

import { createBrowserClient } from "@supabase/ssr";
import { useState } from "react";

// Singleton pattern to reuse Supabase client
let supabaseClient: ReturnType<typeof createBrowserClient> | null = null;

function getSupabaseClient() {
  if (!supabaseClient) {
    supabaseClient = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
  }
  return supabaseClient;
}

export function GoogleSignInButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async () => {
    try {
      setIsLoading(true);
      const supabase = getSupabaseClient();

      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) console.error("OAuth sign-in error:", error.message);
    } catch (error) {
      console.error("Unexpected error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleSignIn}
      disabled={isLoading}
      className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-900 disabled:opacity-50"
    >
      {isLoading ? "Signing in..." : "Sign in with Google"}
    </button>
  );
}