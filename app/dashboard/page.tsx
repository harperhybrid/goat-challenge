// app/dashboard/page.tsx
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import type { Database } from "@/lib/types";
import { getUserRoles } from "@/lib/getUserRoles";

import StudentDashboard from "@/components/StudentDashboard";
import TeacherDashboard from "@/components/TeacherDashboard";
import AdminDashboard from "@/components/AdminDashboard";

export default async function DashboardPage() {
  const isDevelopment = process.env.NODE_ENV === "development";

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
            <p><span className="font-medium">Email:</span> dev@example.com</p>
            <p><span className="font-medium">Name:</span> Development User</p>
          </div>
        </div>

        <div className="mt-8 bg-card rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Your GOAT Challenge</h2>
          <p className="text-muted-foreground">You haven't enrolled in any challenges yet.</p>
          <button className="mt-4 bg-primary text-primary-foreground px-4 py-2 rounded">
            Enroll in a Challenge
          </button>
        </div>
      </div>
    );
  }

  const supabase = createServerComponentClient<Database>({
    cookies,
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const roles = await getUserRoles(user.id);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Welcome to Your Dashboard</h1>

      {roles.includes("admin") && <AdminDashboard />}
      {roles.includes("teacher") && <TeacherDashboard />}
      {roles.includes("student") && <StudentDashboard />}
    </div>
  );
}
