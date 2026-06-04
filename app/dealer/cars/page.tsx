import { prisma } from "@/lib/prisma";

export default async function DealerCarsPage() {

  const dealerId = 2;

  const cars = await prisma.car.findMany({
    where: {
      ownerId: dealerId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        My Cars
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {cars.map((car) => (
          <div
            key={car.id}
            className="bg-white rounded-xl shadow overflow-hidden"
          >

            <img
              src={car.image}
              alt={car.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-4">

              <h2 className="font-bold text-xl">
                {car.title}
              </h2>

              <p>{car.location}</p>

              <p className="text-blue-600 font-bold">
                TZS {car.price.toLocaleString()}
              </p>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}