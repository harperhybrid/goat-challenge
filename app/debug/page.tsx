import { createClient } from "@/lib/supabase/server"
import { cookies } from "next/headers"

export default async function DebugPage() {
  const supabase = await createClient()
  const cookieStore = cookies()
  const allCookies = cookieStore.getAll()

  // Get session
  const {
    data: { session },
  } = await supabase.auth.getSession()

  // Get user
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <div className="container mx-auto py-8 max-w-4xl">
      <h1 className="text-2xl font-bold mb-6">Debug Information</h1>

      <div className="grid gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Session Status</h2>
          <div className="p-4 bg-gray-50 rounded-md overflow-auto">
            <p>
              Session exists:{" "}
              <span className={session ? "text-green-600 font-bold" : "text-red-600 font-bold"}>
                {session ? "YES" : "NO"}
              </span>
            </p>
            {session && (
              <>
                <p className="mt-2">Session expires: {new Date(session.expires_at! * 1000).toLocaleString()}</p>
                <p>
                  Access token: <span className="text-xs">{session.access_token.substring(0, 20)}...</span>
                </p>
                <p>
                  Refresh token exists:{" "}
                  <span className={session.refresh_token ? "text-green-600" : "text-red-600"}>
                    {session.refresh_token ? "YES" : "NO"}
                  </span>
                </p>
              </>
            )}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">User Information</h2>
          <div className="p-4 bg-gray-50 rounded-md overflow-auto">
            <p>
              User exists:{" "}
              <span className={user ? "text-green-600 font-bold" : "text-red-600 font-bold"}>
                {user ? "YES" : "NO"}
              </span>
            </p>
            {user && (
              <>
                <p className="mt-2">User ID: {user.id}</p>
                <p>Email: {user.email}</p>
                <p>Created at: {new Date(user.created_at).toLocaleString()}</p>
                <p>Auth providers: {user.app_metadata.providers?.join(", ") || "None"}</p>
              </>
            )}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Cookies</h2>
          <div className="p-4 bg-gray-50 rounded-md overflow-auto">
            <p>Total cookies: {allCookies.length}</p>
            <p>Supabase cookies: {allCookies.filter((c) => c.name.startsWith("sb-")).length}</p>

            <h3 className="text-lg font-medium mt-4 mb-2">All Cookies:</h3>
            <ul className="space-y-2">
              {allCookies.map((cookie) => (
                <li key={cookie.name} className={cookie.name.startsWith("sb-") ? "text-blue-600" : ""}>
                  <strong>{cookie.name}</strong>: {cookie.value.substring(0, 20)}...
                  {cookie.name.startsWith("sb-") && " (Supabase cookie)"}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Environment</h2>
          <div className="p-4 bg-gray-50 rounded-md overflow-auto">
            <p>NEXT_PUBLIC_SUPABASE_URL: {process.env.NEXT_PUBLIC_SUPABASE_URL ? "Set" : "Not set"}</p>
            <p>NEXT_PUBLIC_SUPABASE_ANON_KEY: {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "Set" : "Not set"}</p>
            <p>Node.js version: {process.version}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
