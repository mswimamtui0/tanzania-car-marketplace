"use client";

import { useState } from "react";

export default function SellPage() {
  const [form, setForm] = useState({
    title: "",
    brand: "",
    price: "",
    location: "",
    year: "",
    mileage: "",
    image: "",
  });

  async function submit(e: React.FormEvent) {
    e.preventDefault();

    await fetch("/api/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    alert("Car added successfully");
  }

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">
        Sell Your Car
      </h1>

      <form onSubmit={submit} className="space-y-4">

        <input
          placeholder="Title"
          className="border p-3 w-full"
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
        />

        <input
          placeholder="Brand"
          className="border p-3 w-full"
          onChange={(e) =>
            setForm({ ...form, brand: e.target.value })
          }
        />

        <input
          placeholder="Price"
          className="border p-3 w-full"
          onChange={(e) =>
            setForm({ ...form, price: e.target.value })
          }
        />

        <input
          placeholder="Location"
          className="border p-3 w-full"
          onChange={(e) =>
            setForm({ ...form, location: e.target.value })
          }
        />

        <input
          placeholder="Year"
          className="border p-3 w-full"
          onChange={(e) =>
            setForm({ ...form, year: e.target.value })
          }
        />

        <input
          placeholder="Mileage"
          className="border p-3 w-full"
          onChange={(e) =>
            setForm({ ...form, mileage: e.target.value })
          }
        />

        <input
          placeholder="/images/CAR.jpg"
          className="border p-3 w-full"
          onChange={(e) =>
            setForm({ ...form, image: e.target.value })
          }
        />

        <button
          className="bg-blue-600 text-white px-6 py-3 rounded"
        >
          Add Car
        </button>

      </form>
    </div>
  );
}