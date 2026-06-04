import { prisma } from "@/lib/prisma";

export default async function DealerPage() {

  const dealerId = 2;

  const totalCars = await prisma.car.count({
    where: {
      ownerId: dealerId,
    },
  });

  return (
    <div>

      <h1 className="text-4xl font-bold mb-8">
        Dealer Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">
            Total Cars
          </h3>

          <p className="text-4xl font-bold text-green-600 mt-2">
            {totalCars}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">
            Active Listings
          </h3>

          <p className="text-4xl font-bold text-blue-600 mt-2">
            {totalCars}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">
            Views
          </h3>

          <p className="text-4xl font-bold text-orange-500 mt-2">
            0
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">
            Sold Cars
          </h3>

          <p className="text-4xl font-bold text-purple-600 mt-2">
            0
          </p>
        </div>

      </div>

      <div className="mt-8 bg-white rounded-xl shadow p-6">

        <h2 className="text-2xl font-bold mb-4">
          Quick Actions
        </h2>

        <div className="flex gap-4 flex-wrap">

          <a
            href="/admin/add-car"
            className="bg-green-600 text-white px-5 py-3 rounded-lg"
          >
            Add New Car
          </a>

          <a
            href="/dealer/cars"
            className="bg-blue-600 text-white px-5 py-3 rounded-lg"
          >
            Manage Cars
          </a>

        </div>

      </div>

    </div>
  );
}