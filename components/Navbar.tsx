import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4">

      <div className="max-w-7xl mx-auto flex gap-6">

        <Link href="/">
          Home
        </Link>

        <Link href="/search">
          Search
        </Link>

        <Link href="/admin">
          Admin
        </Link>

        <Link href="/admin/add-car">
          Add Car
        </Link>

      </div>

    </nav>
  );
}