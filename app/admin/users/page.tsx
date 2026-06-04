import DeleteUserButton from "@/components/admin/DeleteUserButton";
import { prisma } from "@/lib/prisma";

export default async function UsersPage() {
  const users = await prisma.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-6">
        Users Management
      </h1>

      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Role</th>
            <th className="border p-2">Verified</th>
            <th className="border p-2">Created</th>
            
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border p-2">{user.id}</td>
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">{user.role}</td>
              <td className="border p-2">
                {user.verified ? "✅" : "❌"}
              </td>
              <td className="border p-2">
                {user.createdAt.toLocaleDateString()}
              </td>
              <td className="border p-2">
  <DeleteUserButton id={user.id} />
</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}