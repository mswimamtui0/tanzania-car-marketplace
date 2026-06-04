import Link from "next/link";

export default function DealerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-100">

      {/* Header */}
      <header className="bg-green-700 text-white px-8 py-5 shadow-lg flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">
            Dealer Dashboard
          </h1>
          <p className="text-green-100">
            Manage your inventory and sales
          </p>
        </div>

        <div className="bg-green-600 px-4 py-2 rounded-lg">
          Dealer Account
        </div>
      </header>

      <div className="flex">

        {/* Sidebar */}
        <aside className="w-72 bg-white shadow-xl min-h-screen p-6">

          <h2 className="font-bold text-xl mb-8 border-b pb-4">
            Navigation
          </h2>

          <nav className="space-y-3">

            <Link
              href="/dealer"
              className="block p-3 rounded-lg hover:bg-green-50 hover:text-green-700 font-medium"
            >
              📊 Dashboard
            </Link>

            <Link
              href="/dealer/cars"
              className="block p-3 rounded-lg hover:bg-green-50 hover:text-green-700 font-medium"
            >
              🚗 My Cars
            </Link>

            <Link
              href="/admin/add-car"
              className="block p-3 rounded-lg hover:bg-green-50 hover:text-green-700 font-medium"
            >
              ➕ Add New Car
            </Link>

            <Link
              href="/search"
              className="block p-3 rounded-lg hover:bg-green-50 hover:text-green-700 font-medium"
            >
              🔍 Search Market
            </Link>

            <Link
              href="/"
              className="block p-3 rounded-lg hover:bg-green-50 hover:text-green-700 font-medium"
            >
              🌐 View Website
            </Link>

          </nav>

          <div className="mt-10 bg-green-50 p-4 rounded-xl">
            <h3 className="font-bold text-green-700">
              Dealer Tips
            </h3>

            <p className="text-sm text-gray-600 mt-2">
              Upload quality photos and complete vehicle details
              to attract more buyers.
            </p>
          </div>

        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {children}
        </main>

      </div>

    </div>
  );
}