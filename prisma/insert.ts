import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.car.createMany({
    data: [
      {
        title: "Toyota Harrier",
        brand: "Toyota",
        price: 20000000,
        location: "Dar es Salaam",
        year: 2021,
        mileage: 2000,
        image: "/images/CAR.jpg",
      },
      {
        title: "Toyota Land Cruiser",
        brand: "Toyota",
        price: 95000000,
        location: "Arusha",
        year: 2020,
        mileage: 40000,
        image: "/images/CAR.jpg",
      },
      {
        title: "Nissan X-Trail",
        brand: "Nissan",
        price: 28000000,
        location: "Mwanza",
        year: 2019,
        mileage: 65000,
        image: "/images/CAR.jpg",
      },
    ],
  });

  console.log("Cars inserted successfully");
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });