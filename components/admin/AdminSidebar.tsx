import Link from "next/link";

export default function AdminSidebar() {
  return (
    <div className="w-64 bg-black text-white min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-8">
        Admin Panel
      </h2>

      <div className="space-y-4">
        <Link href="/admin">Dashboard</Link><br />
        <Link href="/admin/cars">Cars</Link><br />
        <Link href="/admin/dealers">Dealers</Link><br />
        <Link href="/admin/users">Users</Link><br />
        <Link href="/admin/yards">Yards</Link><br />
        <Link href="/admin/reports">Reports</Link>
      </div>
    </div>
  );
}