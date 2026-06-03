import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function CarsPage() {
  const cars = await prisma.car.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="min-h-screen bg-gray-100">

      <div className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold">
            Available Cars
          </h1>

          <p className="text-gray-300 mt-2">
            Find your dream car today
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">

        <div className="grid md:grid-cols-3 gap-6">

          {cars.map((car) => (
            <Link
              key={car.id}
              href={`/cars/${car.id}`}
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">

                <img
                  src={car.image}
                  alt={car.title}
                  className="w-full h-56 object-cover"
                />

                <div className="p-5">

                  <h2 className="text-2xl font-bold">
                    {car.title}
                  </h2>

                  <p className="text-gray-500">
                    {car.brand}
                  </p>

                  <p className="text-green-600 text-2xl font-bold mt-3">
                    TZS {car.price.toLocaleString()}
                  </p>

                  <div className="mt-4 space-y-1 text-gray-600">
                    <p>📍 {car.location}</p>
                    <p>📅 {car.year}</p>
                    <p>🚗 {car.mileage.toLocaleString()} km</p>
                  </div>

                </div>

              </div>
            </Link>
          ))}

        </div>

      </div>

    </div>
  );
}