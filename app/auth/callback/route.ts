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
    const response = NextResponse.redirect(new URL("/dashboard", requestUrl.origin))

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name) {
            return cookies().get(name)?.value
          },
          set(name, value, options) {
            response.cookies.set({ name, value, ...options })
          },
          remove(name, options) {
            response.cookies.delete(name)
          },
        },
      },
    )

    const { error } = await supabase.auth.exchangeCodeForSession(code)

    if (error) {
      console.error("Error exchanging code for session:", error.message)
      return NextResponse.redirect(
        new URL(`/login?error=exchange_error&message=${encodeURIComponent(error.message)}`, requestUrl.origin),
      )
    }

    const {
      data: { session },
    } = await supabase.auth.getSession()

    if (!session) {
      console.error("Session not created after code exchange")
      return NextResponse.redirect(new URL("/login?error=no_session_after_exchange", requestUrl.origin))
    }

    const allCookies = response.cookies.getAll()
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
