import { prisma } from "@/lib/prisma";

export default async function FeaturedCars() {
  const cars = await prisma.car.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <section className="max-w-7xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold mb-10 text-center">
        Featured Cars
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {cars.map((car) => (
          <div
            key={car.id}
            className="shadow-xl rounded-xl overflow-hidden"
          >
            <img
              src={car.image}
              alt={car.title}
              className="w-full h-60 object-cover"
            />

            <div className="p-5">
              <h3 className="font-bold text-xl">
                {car.title}
              </h3>

              <p className="text-gray-500">
                {car.location}
              </p>

              <p className="text-blue-600 font-bold text-2xl">
                TZS {car.price.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}