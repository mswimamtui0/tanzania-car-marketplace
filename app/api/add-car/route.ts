import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const body = await req.json();

  const car = await prisma.car.create({
    data: {
      title: body.title,
      brand: body.brand,
      price: Number(body.price),
      location: body.location,
      year: Number(body.year),
      mileage: Number(body.mileage),
      image: body.image,
    },
  });

  return Response.json(car);
}