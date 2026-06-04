import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <header className="bg-slate-900 text-white p-5 shadow">
        <h1 className="text-2xl font-bold">
          Tanzania Car Marketplace
        </h1>

        <p className="text-gray-300">
          Admin Control Center
        </p>
      </header>

      <div className="flex">

        {/* Sidebar */}
        <aside className="w-64 bg-white shadow min-h-screen p-6">

          <h2 className="font-bold text-xl mb-6">
            Admin Panel
          </h2>

          <nav className="space-y-4">

            <Link href="/admin" className="block">
              📊 Dashboard
            </Link>

            <Link href="/admin/cars" className="block">
              🚗 Cars
            </Link>

            <Link href="/admin/dealers" className="block">
              🏢 Dealers
            </Link>

            <Link href="/admin/users" className="block">
              👥 Users
            </Link>

            <Link href="/admin/yards" className="block">
              🏬 Yards
            </Link>

            <Link href="/admin/reports" className="block">
              📈 Reports
            </Link>

          </nav>

        </aside>

        {/* Page Content */}
        <main className="flex-1 p-8">
          {children}
        </main>

      </div>

    </div>
  );
}