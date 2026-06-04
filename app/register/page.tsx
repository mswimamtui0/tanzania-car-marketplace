"use client";

import { useState } from "react";

export default function RegisterPage() {
const [role, setRole] = useState("BUYER");

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const [companyName, setCompanyName] = useState("");
const [yardName, setYardName] = useState("");
const [phone, setPhone] = useState("");
const [address, setAddress] = useState("");

const handleRegister = async () => {
const res = await fetch("/api/register", {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify({
name,
email,
password,
role,
companyName,
yardName,
phone,
address,
}),
});

if (res.ok) {
  alert("Registration successful!");
} else {
  const data = await res.json();
  alert(data.error || "Registration failed!");
}


};

return ( <div className="min-h-screen flex items-center justify-center bg-gray-100"> <div className="bg-white p-10 rounded-xl shadow-xl w-full max-w-lg">


    <h1 className="text-3xl font-bold mb-6">
      Create Account
    </h1>

    <input
      type="text"
      placeholder="Full Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="border p-3 rounded-lg w-full mb-4"
    />

    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="border p-3 rounded-lg w-full mb-4"
    />

    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="border p-3 rounded-lg w-full mb-4"
    />

    <select
      className="border p-3 rounded-lg w-full mb-4"
      value={role}
      onChange={(e) => setRole(e.target.value)}
    >
      <option value="BUYER">Buyer</option>
      <option value="DEALER">Dealer</option>
    </select>

    {role === "DEALER" && (
      <>
        <input
          type="text"
          placeholder="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className="border p-3 rounded-lg w-full mb-4"
        />

        <input
          type="text"
          placeholder="Yard Name"
          value={yardName}
          onChange={(e) => setYardName(e.target.value)}
          className="border p-3 rounded-lg w-full mb-4"
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border p-3 rounded-lg w-full mb-4"
        />

        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="border p-3 rounded-lg w-full mb-4"
        />
      </>
    )}

    <button
      onClick={handleRegister}
      className="bg-green-600 text-white p-3 rounded-lg w-full"
    >
      Register
    </button>

  </div>
</div>


);
}
