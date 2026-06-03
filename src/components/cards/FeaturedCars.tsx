import { prisma } from "@/lib/prisma";

export default async function FeaturedCars() {
  const cars = await prisma.car.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 8,
  });

  return (
    <section className="max-w-7xl mx-auto py-10">
      <h2 className="text-3xl font-bold mb-6">
        Featured Vehicles
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {cars.map((car) => (
          <div
            key={car.id}
            className="bg-white rounded-xl shadow-lg p-4"
          >
            <h3 className="font-bold text-lg">
              {car.title}
            </h3>

            <p>{car.brand}</p>

            <p className="text-green-600 font-bold">
              TZS {car.price.toLocaleString()}
            </p>

            <p>{car.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
}