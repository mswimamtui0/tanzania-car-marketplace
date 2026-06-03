import { prisma } from "@/lib/prisma";

export async function GET() {
  const totalCars = await prisma.car.count();

  return Response.json({
    totalCars,
  });
}