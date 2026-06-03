export default function SearchBar() {
  return (
    <div className="max-w-6xl mx-auto -mt-12 relative z-20">

      <div className="bg-white shadow-2xl rounded-xl p-6">

        <div className="grid md:grid-cols-4 gap-4">

          <input
            type="text"
            placeholder="Car Brand"
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Location"
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Price Range"
            className="border p-3 rounded-lg"
          />

          <button className="bg-blue-600 text-white rounded-lg">
            Search
          </button>

        </div>

      </div>

    </div>
  );
}