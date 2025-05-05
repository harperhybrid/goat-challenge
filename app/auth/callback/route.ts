import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get("code")

  if (!code) {
    console.error("No code in callback URL")
    return NextResponse.redirect(new URL("/login?error=no_code", requestUrl.origin))
  }

  try {
    // Create a response early so we can modify its cookies
    const response = NextResponse.redirect(new URL("/dashboard", requestUrl.origin))

    // Create a cookie handler that sets cookies on the response
    const cookieStore = cookies()
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name) {
            return cookieStore.get(name)?.value
          },
          set(name, value, options) {
            // Set cookie in both the cookieStore and the response
            try {
              cookieStore.set({ name, value, ...options })
            } catch (error) {
              console.log("Error setting cookie in cookieStore:", error)
            }
            response.cookies.set({ name, value, ...options })
          },
          remove(name, options) {
            // Remove cookie from both the cookieStore and the response
            try {
              cookieStore.set({ name, value: "", ...options })
            } catch (error) {
              console.log("Error removing cookie from cookieStore:", error)
            }
            response.cookies.delete(name)
          },
        },
      },
    )

    // Exchange the code for a session
    const { error } = await supabase.auth.exchangeCodeForSession(code)

    if (error) {
      console.error("Error exchanging code for session:", error.message)
      return NextResponse.redirect(
        new URL(`/login?error=exchange_error&message=${encodeURIComponent(error.message)}`, requestUrl.origin),
      )
    }

    // Verify the session was created
    const {
      data: { session },
    } = await supabase.auth.getSession()

    if (!session) {
      console.error("Session not created after code exchange")
      return NextResponse.redirect(new URL("/login?error=no_session_after_exchange", requestUrl.origin))
    }

    // Log all cookies for debugging
    const allCookies = response.cookies.getAll()
    console.log(
      "Cookies in response:",
      allCookies.map((c) => c.name),
    )

    // Check if the session cookie was set
    const hasSessionCookie = allCookies.some(
      (cookie) => cookie.name.startsWith("sb-") && !cookie.name.includes("code-verifier"),
    )

    if (!hasSessionCookie) {
      console.error("Session cookie not set in response")
      return NextResponse.redirect(new URL("/login?error=no_session_cookie", requestUrl.origin))
    }

    console.log("Auth callback successful, redirecting to dashboard")
    console.log("User ID:", session.user.id)

    return response
  } catch (error) {
    console.error("Unexpected error in auth callback:", error)
    return NextResponse.redirect(new URL("/login?error=unexpected", requestUrl.origin))
  }
}
