import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/admin/login");
  }
  
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Bienvenue, {session.user?.name}</h1>
      <p>Dashboard privé ici.</p>
    </div>
  );
}
