"use client"

import { createClient } from "@/lib/supabase/client"
import { useState } from "react"

export function GoogleSignInButton() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSignIn = async () => {
    try {
      setIsLoading(true)
      setError(null)

      const supabase = createClient()

      // Make sure we're using the correct callback URL
      const callbackUrl = `${window.location.origin}/auth/callback`
      console.log("Using callback URL:", callbackUrl)

      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: callbackUrl,
          queryParams: {
            // Force consent screen to appear every time
            prompt: "consent",
            // Request offline access (for refresh token)
            access_type: "offline",
          },
        },
      })

      if (error) {
        console.error("OAuth sign-in error:", error.message)
        setError(error.message)
      }
    } catch (error: any) {
      console.error("Unexpected error:", error)
      setError(error?.message || "An unexpected error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full">
      <button
        onClick={handleSignIn}
        disabled={isLoading}
        className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-900 disabled:opacity-50"
      >
        {isLoading ? "Signing in..." : "Sign in with Google"}
      </button>

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  )
}
