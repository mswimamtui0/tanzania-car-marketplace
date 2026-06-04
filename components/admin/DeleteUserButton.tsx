"use client";

export default function DeleteUserButton({
  id,
}: {
  id: number;
}) {
  async function handleDelete() {
    if (!confirm("Delete this user?")) {
      return;
    }

    const res = await fetch(
      `/api/users/${id}`,
      {
        method: "DELETE",
      }
    );

    if (res.ok) {
      location.reload();
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="bg-red-600 text-white px-3 py-1 rounded"
    >
      Delete
    </button>
  );
}