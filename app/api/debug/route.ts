import { prisma } from "@/lib/prisma";

export async function GET() {
  const count = await prisma.car.count();

  return Response.json({
    count,
    databaseUrl: process.env.DATABASE_URL,
  });
}