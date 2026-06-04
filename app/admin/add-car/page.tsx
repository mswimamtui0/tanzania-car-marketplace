"use client";

import { useState } from "react";

export default function AddCarPage() {
  const [form, setForm] = useState({
    title: "",
    brand: "",
    price: "",
    location: "",
    year: "",
    mileage: "",
    image: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("/api/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...form,
ownerId: 2,
        price: Number(form.price),
        year: Number(form.year),
        mileage: Number(form.mileage),

      }),
    });

    alert("Car added successfully!");
  };

  return (
    <div className="max-w-xl mx-auto p-8">

      <h1 className="text-3xl font-bold mb-6">
        Add New Car
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input name="title" onChange={handleChange} placeholder="Title" className="border p-2 w-full" />
        <input name="brand" onChange={handleChange} placeholder="Brand" className="border p-2 w-full" />
        <input name="price" onChange={handleChange} placeholder="Price" className="border p-2 w-full" />
        <input name="location" onChange={handleChange} placeholder="Location" className="border p-2 w-full" />
        <input name="year" onChange={handleChange} placeholder="Year" className="border p-2 w-full" />
        <input name="mileage" onChange={handleChange} placeholder="Mileage" className="border p-2 w-full" />
        <input name="image" onChange={handleChange} placeholder="Image URL (/images/car.jpg)" className="border p-2 w-full" />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Car
        </button>

      </form>

    </div>
  );
}