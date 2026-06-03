import { BadgeCheck } from "lucide-react";

export default function TopBrands() {
  const brands = [
    "Toyota",
    "Nissan",
    "BMW",
    "Mercedes",
    "Subaru",
    "Mazda",
    "Lexus",
    "Suzuki",
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-10 text-center">
          Top Brands
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {brands.map((brand) => (
            <div
              key={brand}
              className="bg-white rounded-xl shadow p-6 text-center"
            >
              <BadgeCheck
                size={40}
                className="mx-auto text-green-600 mb-3"
              />

              <h3 className="font-bold">
                {brand}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}