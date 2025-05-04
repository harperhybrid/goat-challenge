// app/dashboard/page.tsx
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs/edge";
import type { Database } from "@/lib/types";
import { getUserRoles } from "@/lib/getUserRoles";

import StudentDashboard from "@/components/StudentDashboard";
import TeacherDashboard from "@/components/TeacherDashboard";
import AdminDashboard from "@/components/AdminDashboard";

export default async function DashboardPage() {
  const cookieStore = cookies(); // ✅ Must be called here
  const supabase = createServerComponentClient<Database>({ cookies: () => cookieStore });

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
