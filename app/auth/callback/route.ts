import { createRouteHandlerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import type { Database } from "@/lib/supabase/database.types"

export const dynamic = "force-dynamic"

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get("code")

  if (code) {
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient<Database>({
      cookies: () => cookieStore,
    })

    // Exchange the code for a session
    const { error } = await supabase.auth.exchangeCodeForSession(code)

    // Log for debugging (remove in production)
    if (error) {
      console.error("Auth callback error:", error)
    } else {
      console.log("Auth callback successful")
    }
  }

  // Redirect to dashboard after successful login
  return NextResponse.redirect(new URL("/dashboard", requestUrl.origin))
}
