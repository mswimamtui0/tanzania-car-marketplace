import { prisma } from "@/lib/prisma";

export default async function CarPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const car = await prisma.car.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <div>
      <h1>{car.title}</h1>
      <p>{car.brand}</p>
      <p>TZS {car.price.toLocaleString()}</p>
      <p>{car.location}</p>
    </div>
  );
}