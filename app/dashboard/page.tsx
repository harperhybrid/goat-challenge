import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"

export default async function DashboardPage() {
  const supabase = await createClient()

  // Get the session (not just the user)
  const {
    data: { session },
  } = await supabase.auth.getSession()

  // Log for debugging (remove in production)
  console.log("Session check:", session ? "Session exists" : "No session")

  // Redirect if no session
  if (!session) {
    // Add a query parameter to help with debugging
    redirect("/login?reason=no_session")
  }

  // Now we know we have a session, get the user
  const {
    data: { user },
  } = await supabase.auth.getUser()

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
