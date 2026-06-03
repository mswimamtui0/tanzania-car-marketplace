import { prisma } from "@/lib/prisma";

export default async function BrandsPage() {
  const cars = await prisma.car.findMany();

  const brands = [...new Set(cars.map((c) => c.brand))];

  return (
    <div className="max-w-5xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">
        Brands
      </h1>

      {brands.map((brand) => (
        <div
          key={brand}
          className="border p-4 mb-3 rounded"
        >
          {brand}
        </div>
      ))}

    </div>
  );
}