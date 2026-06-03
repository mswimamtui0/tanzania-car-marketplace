import { PrismaClient, Role } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.user.create({
    data: {
      name: "System Admin",
      email: "admin@tanzaniacar.com",
      password: "admin123",
      role: Role.ADMIN,
      verified: true,
    },
  });

  console.log(admin);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());