"use client";

export default function DeleteCarButton({
  id,
}: {
  id: number;
}) {
  async function handleDelete() {
    const confirmed = confirm(
      "Delete this car?"
    );

    if (!confirmed) return;

    const res = await fetch(`/api/cars/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      location.reload();
    } else {
      alert("Failed to delete car");
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