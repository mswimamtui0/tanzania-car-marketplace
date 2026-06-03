export default function CarCategories() {
  const categories = [
    "SUV",
    "Sedan",
    "Pickup",
    "Truck",
    "Luxury",
    "Electric",
  ];

  return (
    <section className="max-w-7xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">
        Browse Categories
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        {categories.map((category) => (
          <div
            key={category}
            className="bg-white shadow-lg rounded-xl p-6 text-center font-bold hover:shadow-2xl transition"
          >
            {category}
          </div>
        ))}
      </div>
    </section>
  );
}