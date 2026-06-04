"use client";

import { useState } from "react";

export default function LoginPage() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleLogin = async () => {
const res = await fetch("/api/login", {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify({
email,
password,
}),
});


const data = await res.json();

if (!res.ok) {
  alert(data.error);
  return;
}

if (data.role === "ADMIN") {
  window.location.href = "/admin";
} else if (data.role === "DEALER") {
  window.location.href = "/dealer";
} else {
  window.location.href = "/dashboard";
}


};

return ( <div className="min-h-screen flex items-center justify-center bg-gray-100"> <div className="bg-white p-10 rounded-xl shadow-xl w-full max-w-md">


    <h1 className="text-3xl font-bold mb-6">
      Login
    </h1>

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

    <button
      onClick={handleLogin}
      className="bg-blue-600 text-white p-3 rounded-lg w-full"
    >
      Login
    </button>

  </div>
</div>


);
}
