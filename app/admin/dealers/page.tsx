import VerifyDealerButton from "@/components/admin/VerifyDealerButton";
import { prisma } from "@/lib/prisma";
const dealers = await prisma.user.findMany({
  where: {
    role: "DEALER",
  },
  include: {
    cars: true,
  },
});

export default async function DealersPage() {
  const dealers = await prisma.user.findMany({
    where: {
      role: "DEALER",
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Dealer Management
      </h1>

      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Company</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">Verified</th>
          </tr>
        </thead>

        <tbody>
          {dealers.map((dealer) => (
            <tr key={dealer.id}>
              <td className="border p-2">
                {dealer.name}
              </td>

              <td className="border p-2">
                {dealer.companyName}
              </td>

              <td className="border p-2">
                {dealer.phone}
              </td>

              <td className="border p-2">
                {dealer.verified ? "✅" : "❌"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}