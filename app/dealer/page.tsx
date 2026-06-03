import Link from "next/link";

export default function DealerPage() {
  return (
    <div className="min-h-screen bg-gray-100">

      <div className="bg-blue-900 text-white p-6">
        <h1 className="text-4xl font-bold">
          Dealer Dashboard
        </h1>

        <p>
          Manage your vehicles and customers
        </p>
      </div>

      <div className="max-w-6xl mx-auto p-8">

        <div className="grid md:grid-cols-3 gap-6">

          <Link
            href="/admin/add-car"
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg"
          >
            <h2 className="text-2xl font-bold">
              Add Car
            </h2>

            <p className="mt-2 text-gray-500">
              Add new vehicle
            </p>
          </Link>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-bold">
              Inventory
            </h2>

            <p className="mt-2 text-gray-500">
              Manage your cars
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-bold">
              Messages
            </h2>

            <p className="mt-2 text-gray-500">
              Customer inquiries
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}