import { prisma } from "@/lib/prisma";
import DeleteCarButton from "@/components/admin/DeleteCarButton";

export default async function AdminPage() {
  const cars = await prisma.car.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const totalCars = cars.length;

  const totalValue = cars.reduce(
    (sum, car) => sum + car.price,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100">

      <div className="bg-slate-900 text-white p-6 shadow-lg">
        <h1 className="text-4xl font-bold">
          Tanzania Car Marketplace
        </h1>

        <p className="text-gray-300 mt-2">
          Admin Dashboard
        </p>
      </div>

      <div className="max-w-7xl mx-auto p-8">

        <div className="grid md:grid-cols-3 gap-6 mb-8">

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-gray-500">
              Total Cars
            </h2>

            <p className="text-4xl font-bold text-blue-600">
              {totalCars}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-gray-500">
              Inventory Value
            </h2>

            <p className="text-2xl font-bold text-green-600">
              TZS {totalValue.toLocaleString()}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-gray-500">
              Latest Update
            </h2>

            <p className="text-xl font-bold text-orange-500">
              Live
            </p>
          </div>

        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">

          <div className="p-6 border-b">
            <h2 className="text-2xl font-bold">
              Vehicle Inventory
            </h2>
          </div>

          <table className="w-full">

            <thead className="bg-slate-800 text-white">

              <tr>
                <th className="p-4 text-left">Title</th>
                <th className="p-4 text-left">Brand</th>
                <th className="p-4 text-left">Price</th>
                <th className="p-4 text-left">Location</th>
                <th className="p-4 text-left">Action</th>
              </tr>

            </thead>

            <tbody>

              {cars.map((car) => (
                <tr
                  key={car.id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="p-4 font-medium">
                    {car.title}
                  </td>

                  <td className="p-4">
                    {car.brand}
                  </td>

                  <td className="p-4 text-green-600 font-bold">
                    TZS {car.price.toLocaleString()}
                  </td>

                  <td className="p-4">
                    {car.location}
                  </td>

                  <td className="p-4">
                    <DeleteCarButton id={car.id} />
                  </td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}