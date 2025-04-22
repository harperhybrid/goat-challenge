import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default async function DashboardPage() {
  const supabase = createServerComponentClient({ cookies })

  // Check if user is authenticated
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    // Redirect to login if not authenticated
    redirect("/login")
  }

  // Get user details
  const { data: user } = await supabase.auth.getUser()

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Welcome to Your Dashboard</h1>

      <div className="bg-card rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Your Profile</h2>
        <div className="space-y-2">
          <p>
            <span className="font-medium">Email:</span> {user?.user?.email}
          </p>
          <p>
            <span className="font-medium">Name:</span> {user?.user?.user_metadata?.full_name || "Not provided"}
          </p>
        </div>
      </div>

      <div className="mt-8 bg-card rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Your GOAT Challenge</h2>
        <p className="text-muted-foreground">You haven't enrolled in any challenges yet.</p>
        <button className="mt-4 bg-primary text-primary-foreground px-4 py-2 rounded">Enroll in a Challenge</button>
      </div>
    </div>
  )
}