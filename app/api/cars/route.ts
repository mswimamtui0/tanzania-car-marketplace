import { prisma } from "@/lib/prisma";

export async function GET() {
  const cars = await prisma.car.findMany({
    orderBy: { createdAt: "desc" },
  });

  return Response.json(cars);
}

export async function POST(req: Request) {
  const body = await req.json();

  const car = await prisma.car.create({
    data: body,
  });

  return Response.json(car);
}