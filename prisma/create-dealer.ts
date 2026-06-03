import { PrismaClient, Role } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const dealer = await prisma.user.create({
    data: {
      name: "Dar Auto Yard",
      email: "dealer@tanzaniacar.com",
      password: "dealer123",
      role: Role.DEALER,
      companyName: "Dar Auto Yard",
      phone: "0712345678",
      verified: true,
    },
  });

  console.log(dealer);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());