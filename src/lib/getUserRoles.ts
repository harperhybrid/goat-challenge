import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import type { Database } from "@/lib/supabase/database.types"

export async function getUserRoles() {
  const cookieStore = cookies()
  const supabase = createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    },
  )

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return { user: null, roles: [] }
  }

  // Assuming you have a roles table or some way to get user roles
  // Adjust this query based on your database schema
  const { data: roles } = await supabase.from("user_roles").select("role").eq("user_id", user.id)

  return {
    user,
    roles: roles?.map((r) => r.role) || [],
  }
}
