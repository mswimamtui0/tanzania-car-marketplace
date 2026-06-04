import Link from "next/link";
import { Car, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <div className="flex items-center gap-2">
          <Car className="text-blue-600" size={32} />

          <h1 className="text-2xl font-bold text-blue-600">
            Tanzania Cars
          </h1>
        </div>

        <div className="hidden md:flex gap-8 font-medium">

          <Link href="/">Home</Link>

          <Link href="/cars">
            Cars
          </Link>

          <Link href="/search">
            Search
          </Link>

          <Link href="/dealers">
            Dealers
          </Link>

          <Link href="/inspection">
            Inspection
          </Link>

          <Link href="/register">
            Sell a Car
          </Link>

          <Link href="/login">
            Login
          </Link>

        </div>

        <Menu className="md:hidden" />
      </div>
    </nav>
  );
}