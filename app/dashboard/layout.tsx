import type React from "react"
import { createServerClient } from "@/lib/supabase"
import { redirect } from "next/navigation"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createServerClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    // Redirect to login if user is not authenticated
    redirect("/login")
  }

  return (
    <div className="dashboard-layout">
      {/* Your dashboard layout */}
      {children}
    </div>
  )
}
