// app/dashboard/page.tsx

import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import { redirect } from "next/navigation";

import StudentDashboard from "@/components/StudentDashboard";
import TeacherDashboard from "@/components/TeacherDashboard";
import AdminDashboard from "@/components/AdminDashboard";
import { getUserRoles } from "@/lib/getUserRoles";

export default async function DashboardPage() {
  const cookieStore = cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: () => cookieStore,
    }
  );

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
