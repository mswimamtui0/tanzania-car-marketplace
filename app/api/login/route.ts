import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const body = await req.json();

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (!user) {
    return Response.json(
      { error: "User not found" },
      { status: 404 }
    );
  }

  if (user.password !== body.password) {
    return Response.json(
      { error: "Wrong password" },
      { status: 401 }
    );
  }

  return Response.json({
    id: user.id,
    role: user.role,
    name: user.name,
  });
}