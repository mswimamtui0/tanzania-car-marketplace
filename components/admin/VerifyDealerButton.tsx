"use client";

export default function VerifyDealerButton({
  id,
}: {
  id: number;
}) {
  async function handleVerify() {
    const res = await fetch(
      `/api/admin/verify/${id}`,
      {
        method: "PATCH",
      }
    );

    if (res.ok) {
      location.reload();
    }
  }

  return (
    <button
      onClick={handleVerify}
      className="bg-green-600 text-white px-3 py-1 rounded"
    >
      Verify
    </button>
  );
}