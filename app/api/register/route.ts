import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("REGISTER DATA:", body);

    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: body.password,
        phone: body.phone,
        role: body.role,
      },
    });

    return Response.json(user);
  } catch (error) {
    console.error("REGISTER ERROR:", error);

    return Response.json(
      {
        success: false,
        error: String(error),
      },
      {
        status: 500,
      }
    );
  }
}