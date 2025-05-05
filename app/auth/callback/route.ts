import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import type { Database } from "@/lib/supabase/database.types"

export const dynamic = "force-dynamic"

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get("code")

  if (!code) {
    console.error("No code in callback URL")
    return NextResponse.redirect(new URL("/login?error=no_code", requestUrl.origin))
  }

  try {
    const cookieStore = cookies()

    // Create a response to handle cookies
    const response = NextResponse.redirect(new URL("/dashboard", requestUrl.origin))

    const supabase = createServerClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value
          },
          set(name: string, value: string, options: any) {
            cookieStore.set({ name, value, ...options })
            // Also set the cookie in the response
            response.cookies.set({ name, value, ...options })
          },
          remove(name: string, options: any) {
            cookieStore.set({ name, value: "", ...options })
            // Also remove the cookie from the response
            response.cookies.set({ name, value: "", ...options })
          },
        },
      },
    )

    // Exchange the code for a session
    const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(code)

    if (exchangeError) {
      console.error("Code exchange error:", exchangeError)
      return NextResponse.redirect(
        new URL(
          `/login?error=exchange_failed&description=${encodeURIComponent(exchangeError.message)}`,
          requestUrl.origin,
        ),
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

    console.log("Auth callback successful, session established")
    console.log("User ID:", session.user.id)
    console.log("Redirecting to dashboard")

    // Return the response with cookies
    return response
  } catch (error) {
    console.error("Unexpected error in auth callback:", error)
    return NextResponse.redirect(new URL("/login?error=unexpected_callback_error", requestUrl.origin))
  }
}
