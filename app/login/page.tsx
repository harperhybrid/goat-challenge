"use client"

import { useSearchParams } from "next/navigation"
import { GoogleSignInButton } from "@/components/auth/google-sign-in-button"

export default function LoginPage() {
  const searchParams = useSearchParams()
  const error = searchParams.get("error")
  const message = searchParams.get("message")
  const from = searchParams.get("from")
  const reason = searchParams.get("reason")

  return (
    <div className="container mx-auto max-w-md py-12">
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
            <p className="font-medium">Authentication Error: {error}</p>
            {message && <p className="text-sm mt-1">{message}</p>}
            {from && <p className="text-xs mt-1">Source: {from}</p>}
            {reason && <p className="text-xs mt-1">Reason: {reason}</p>}

            {error === "no_session_cookie" && (
              <div className="mt-2 text-sm">
                <p>The session cookie wasn't set properly. This could be due to:</p>
                <ul className="list-disc pl-5 mt-1">
                  <li>Browser cookie settings</li>
                  <li>Third-party cookie blocking</li>
                  <li>Incorrect Supabase configuration</li>
                </ul>
              </div>
            )}
          </div>
        )}

        <div className="space-y-4">
          <GoogleSignInButton />

          <div className="text-sm text-gray-500 mt-4">
            <p>Having trouble signing in?</p>
            <ul className="list-disc pl-5 mt-1">
              <li>Make sure cookies are enabled in your browser</li>
              <li>Try using an incognito/private window</li>
              <li>Clear your browser cache and cookies</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
