import { prisma } from "@/lib/prisma";

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const dealer = await prisma.user.update({
    where: {
      id: Number(id),
    },
    data: {
      verified: true,
    },
  });

  return Response.json(dealer);
}