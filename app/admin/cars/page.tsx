import { prisma } from "@/lib/prisma";
import DeleteCarButton from "@/components/admin/DeleteCarButton";

export default async function CarsPage() {
  const cars = await prisma.car.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Cars Management
      </h1>

      <table className="w-full bg-white shadow rounded">

        <thead>
          <tr>
            <th className="p-3">Title</th>
            <th className="p-3">Brand</th>
            <th className="p-3">Price</th>
            <th className="p-3">Location</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>

        <tbody>
          {cars.map((car) => (
            <tr key={car.id} className="border-t">

              <td className="p-3">
                {car.title}
              </td>

              <td className="p-3">
                {car.brand}
              </td>

              <td className="p-3">
                {car.price.toLocaleString()}
              </td>

              <td className="p-3">
                {car.location}
              </td>

              <td className="p-3">
                <DeleteCarButton id={car.id} />
              </td>

            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}