"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [role, setRole] = useState("BUYER");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-10 rounded-xl shadow-xl w-full max-w-lg">

        <h1 className="text-3xl font-bold mb-6">
          Create Account
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          className="border p-3 rounded-lg w-full mb-4"
        />

        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-lg w-full mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg w-full mb-4"
        />

        <select
          className="border p-3 rounded-lg w-full mb-4"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="BUYER">
            Buyer (Mnunuzi)
          </option>

          <option value="DEALER">
            Dealer (Car Yard Manager)
          </option>
        </select>

        {role === "DEALER" && (
          <>
            <input
              type="text"
              placeholder="Company Name"
              className="border p-3 rounded-lg w-full mb-4"
            />

            <input
              type="text"
              placeholder="Yard Name"
              className="border p-3 rounded-lg w-full mb-4"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="border p-3 rounded-lg w-full mb-4"
            />

            <input
              type="text"
              placeholder="Address"
              className="border p-3 rounded-lg w-full mb-4"
            />
          </>
        )}

        <button className="bg-green-600 text-white p-3 rounded-lg w-full">
          Register
        </button>

      </div>

    </div>
  );
}