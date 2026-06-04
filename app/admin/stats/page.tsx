import { prisma } from "@/lib/prisma";

export default async function StatsPage() {
  const cars = await prisma.car.count();

  const users = await prisma.user.count();

  const dealers = await prisma.user.count({
    where: {
      role: "DEALER",
    },
  });

  return (
    <div className="grid md:grid-cols-3 gap-6 p-8">

      <div className="bg-white shadow rounded p-6">
        <h2>Total Cars</h2>
        <p className="text-4xl font-bold">
          {cars}
        </p>
      </div>

      <div className="bg-white shadow rounded p-6">
        <h2>Total Users</h2>
        <p className="text-4xl font-bold">
          {users}
        </p>
      </div>

      <div className="bg-white shadow rounded p-6">
        <h2>Total Dealers</h2>
        <p className="text-4xl font-bold">
          {dealers}
        </p>
      </div>

    </div>
  );
}