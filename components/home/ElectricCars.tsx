import { prisma } from "@/lib/prisma";

export default async function ElectricCars() {
  const cars = await prisma.car.findMany({
    take: 6,
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <section className="max-w-7xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold mb-8">
        Electric Cars
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div
            key={car.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <img
              src={car.image}
              alt={car.title}
              className="h-56 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="font-bold text-xl">
                {car.title}
              </h3>

              <p>{car.location}</p>

              <p className="text-green-600 font-bold text-xl">
                TZS {car.price.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}