import { redirect } from "next/navigation"

export default async function DashboardPage() {
  // In development, we'll show a mock dashboard
  const isDevelopment = process.env.NODE_ENV === "development"
  
  if (isDevelopment) {
    return (
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6">Development Dashboard</h1>
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6">
          <p className="font-bold">Development Mode</p>
          <p>This is a mock dashboard for development. Authentication is bypassed.</p>
        </div>

        <div className="bg-card rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Your Profile</h2>
          <div className="space-y-2">
            <p>
              <span className="font-medium">Email:</span> dev@example.com
            </p>
            <p>
              <span className="font-medium">Name:</span> Development User
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
  
  // For production, we'll use the original code with authentication
  try {
    const { createServerComponentClient } = await import("@supabase/auth-helpers-nextjs")
    const { cookies } = await import("next/headers")
    
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
  } catch (error) {
    console.error("Error in dashboard:", error)
    return (
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6">Error Loading Dashboard</h1>
        <p>There was an error loading your dashboard. Please try again later.</p>
      </div>
    )
  }
}