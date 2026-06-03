"use client";

import { useState } from "react";

export default function SearchPage() {
  const [brand, setBrand] = useState("");
  const [cars, setCars] = useState<any[]>([]);

  async function searchCars() {
    const res = await fetch(
      `/api/search?brand=${brand}`
    );

    const data = await res.json();

    setCars(data);
  }

  return (
    <div className="max-w-5xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">
        Search Cars
      </h1>

      <div className="flex gap-4 mb-8">

        <input
          value={brand}
          onChange={(e) =>
            setBrand(e.target.value)
          }
          placeholder="Toyota"
          className="border p-3 rounded flex-1"
        />

        <button
          onClick={searchCars}
          className="bg-blue-600 text-white px-6 rounded"
        >
          Search
        </button>

      </div>

      <div className="space-y-4">

        {cars.map((car) => (
          <div
            key={car.id}
            className="border p-4 rounded"
          >
            <h2 className="font-bold">
              {car.title}
            </h2>

            <p>
              TZS {car.price.toLocaleString()}
            </p>

            <p>{car.location}</p>
          </div>
        ))}

      </div>

    </div>
  );
}