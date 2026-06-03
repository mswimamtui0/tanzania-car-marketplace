import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.car.create({
    data: {
      title: "Toyota Harrier",
      brand: "Toyota",
      price: 20000000,
      location: "Dar es Salaam",
      year: 2021,
      mileage: 2000,
      image: "/images/CAR.jpg",
    },
  });

  console.log("Car inserted");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());