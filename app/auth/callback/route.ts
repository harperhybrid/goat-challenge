// app/auth/callback/route.ts
import { createRouteHandlerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import type { Database } from "@/lib/supabase/database.types"

export const dynamic = "force-dynamic"

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get("code")
  
  if (!code) {
    console.error("No code provided in callback")
    return NextResponse.redirect(new URL("/login?error=no_code", requestUrl.origin))
  }

  try {
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient<Database>({
      cookies: () => cookieStore,
    })
    
    // Exchange the code for a session
    const { data, error } = await supabase.auth.exchangeCodeForSession(code)
    
    if (error) {
      console.error("Auth callback error:", error.message)
      return NextResponse.redirect(new URL(`/login?error=${error.message}`, requestUrl.origin))
    }
    
    console.log("Auth successful, session established:", !!data.session)
    
    // Explicitly refresh the session to ensure it's stored properly
    await supabase.auth.getSession()
    
    // Redirect to dashboard after successful login
    return NextResponse.redirect(new URL("/dashboard", requestUrl.origin))
  } catch (error) {
    console.error("Unexpected error in auth callback:", error)
    return NextResponse.redirect(new URL("/login?error=unexpected", requestUrl.origin))
  }
}