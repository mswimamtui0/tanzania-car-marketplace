import { prisma } from "@/lib/prisma";

export async function GET() {
  const cars = await prisma.car.findMany();

  const brands = [...new Set(cars.map(car => car.brand))];

  return Response.json({
    totalBrands: brands.length,
  });
}