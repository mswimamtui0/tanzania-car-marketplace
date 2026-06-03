import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const brand = searchParams.get("brand") || undefined;
  const location = searchParams.get("location") || undefined;

  const cars = await prisma.car.findMany({
    where: {
      ...(brand && { brand }),
      ...(location && { location }),
    },
  });

  return Response.json(cars);
}