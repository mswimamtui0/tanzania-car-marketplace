"use client";

import Link from "next/link";
import { Car, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <div className="flex items-center gap-2">
          <Car className="text-blue-600" size={32} />

          <h1 className="text-2xl font-bold text-blue-600">
            Tanzania Cars
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-medium">
          <Link href="/">Home</Link>
          <Link href="/cars">Cars</Link>
          <Link href="/search">Search</Link>
          <Link href="/dealers">Dealers</Link>
          <Link href="/inspection">Inspection</Link>
          <Link href="/register">Sell a Car</Link>
          <Link href="/login">Login</Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="flex flex-col p-4 gap-4">

            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>

            <Link href="/cars" onClick={() => setOpen(false)}>
              Cars
            </Link>

            <Link href="/search" onClick={() => setOpen(false)}>
              Search
            </Link>

            <Link href="/dealers" onClick={() => setOpen(false)}>
              Dealers
            </Link>

            <Link href="/inspection" onClick={() => setOpen(false)}>
              Inspection
            </Link>

            <Link href="/register" onClick={() => setOpen(false)}>
              Sell a Car
            </Link>

            <Link href="/login" onClick={() => setOpen(false)}>
              Login
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}