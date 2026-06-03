"use client";

import { useState } from "react";

export default function SearchCars() {
  const [brand, setBrand] = useState("");

  const search = () => {
    window.location.href =
      `/search?brand=${brand}`;
  };

  return (
    <div className="max-w-4xl mx-auto py-10 flex gap-3">
      <input
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
        placeholder="Toyota..."
        className="border p-3 rounded w-full"
      />

      <button
        onClick={search}
        className="bg-blue-600 text-white px-6 rounded"
      >
        Search
      </button>
    </div>
  );
}