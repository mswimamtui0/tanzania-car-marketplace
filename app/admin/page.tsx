import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function AdminPage() {
  const totalCars = await prisma.car.count();

  const totalDealers = await prisma.user.count({
    where: {
      role: "DEALER",
    },
  });

  const totalUsers = await prisma.user.count();

  const totalBuyers = await prisma.user.count({
    where: {
      role: "BUYER",
    },
  });

  const recentCars = await prisma.car.findMany({
    take: 5,
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>

      {/* Statistics */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-gray-500">Cars</h3>
          <p className="text-4xl font-bold text-blue-600">
            {totalCars}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-gray-500">Dealers</h3>
          <p className="text-4xl font-bold text-green-600">
            {totalDealers}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-gray-500">Users</h3>
          <p className="text-4xl font-bold text-purple-600">
            {totalUsers}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-gray-500">Buyers</h3>
          <p className="text-4xl font-bold text-orange-600">
            {totalBuyers}
          </p>
        </div>

      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow p-6 mb-8">

        <h2 className="text-2xl font-bold mb-4">
          Quick Actions
        </h2>

        <div className="flex gap-4 flex-wrap">

          <Link
            href="/admin/add-car"
            className="bg-blue-600 text-white px-5 py-3 rounded-lg"
          >
            + Add Car
          </Link>

          <Link
            href="/admin/dealers"
            className="bg-green-600 text-white px-5 py-3 rounded-lg"
          >
            Dealers
          </Link>

          <Link
            href="/admin/users"
            className="bg-purple-600 text-white px-5 py-3 rounded-lg"
          >
            Users
          </Link>

        </div>

      </div>

      {/* Recent Cars */}
      <div className="bg-white rounded-xl shadow p-6">

        <h2 className="text-2xl font-bold mb-4">
          Recent Cars
        </h2>

        <table className="w-full">

          <thead>
            <tr className="border-b">
              <th className="text-left p-3">Title</th>
              <th className="text-left p-3">Brand</th>
              <th className="text-left p-3">Price</th>
              <th className="text-left p-3">Location</th>
            </tr>
          </thead>

          <tbody>
            {recentCars.map((car) => (
              <tr
                key={car.id}
                className="border-b"
              >
                <td className="p-3">
                  {car.title}
                </td>

                <td className="p-3">
                  {car.brand}
                </td>

                <td className="p-3">
                  TZS {car.price.toLocaleString()}
                </td>

                <td className="p-3">
                  {car.location}
                </td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}