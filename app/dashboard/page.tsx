import { createServerClient } from "@/lib/supabase"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default async function DashboardPage() {
  // Log all cookies for debugging
  const cookieStore = cookies()
  const allCookies = cookieStore.getAll()
  console.log(
    "All cookies:",
    allCookies.map((c) => c.name),
  )

  const supabase = await createServerClient()

  // Get the session
  const {
    data: { session },
  } = await supabase.auth.getSession()

  // Log for debugging
  console.log("Session check:", session ? "Session exists" : "No session")

  if (session) {
    console.log("User ID:", session.user.id)
    console.log("User email:", session.user.email)
    console.log("Session expires at:", new Date(session.expires_at! * 1000).toISOString())
  } else {
    console.log("No session found - checking cookies...")

    const supabaseCookies = allCookies.filter((c) => c.name.startsWith("sb-"))
    if (supabaseCookies.length > 0) {
      console.log("Supabase cookies exist but session not recognized")
    } else {
      console.log("No Supabase cookies found")
    }
  }

  // Redirect if no session
  if (!session) {
    // Add a query parameter to help with debugging
    redirect("/login?reason=no_session_in_dashboard")
  }

  // Now we know we have a session, get the user
  const { user } = session

  // Fetch some data for the dashboard
  // Replace "items" with an actual table from your database
  const { data: items, error } = await supabase.from("items").select("*").limit(10)

  if (error) {
    console.error("Error fetching data:", error)
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Welcome, {user?.email}</h2>

        <div className="mb-6 p-4 bg-gray-50 rounded-md">
          <h3 className="text-md font-medium mb-2">Session Information</h3>
          <p className="text-sm">User ID: {user.id}</p>
          <p className="text-sm">Email: {user.email}</p>
          <p className="text-sm">Session expires: {new Date(session.expires_at! * 1000).toLocaleString()}</p>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-medium mb-3">Your Items</h3>

          {items && items.length > 0 ? (
            <ul className="divide-y divide-gray-200">
              {items.map((item) => (
                <li key={item.id} className="py-4">
                  {/* Display your item data here */}
                  {item.name || "Unnamed item"}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No items found.</p>
          )}
        </div>
      </div>
    </div>
  )
}
