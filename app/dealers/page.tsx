export default function DealersPage() {
  return (
    <div className="min-h-screen bg-gray-100">

      <div className="bg-purple-600 text-white py-20 text-center">

        <h1 className="text-6xl font-bold">
          Verified Dealers
        </h1>

        <p className="text-xl mt-4">
          Trusted dealerships across Tanzania.
        </p>

      </div>

      <div className="max-w-7xl mx-auto py-16 px-6">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="font-bold text-2xl">
              Dar Auto Center
            </h2>

            <p className="text-gray-500">
              Dar es Salaam
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="font-bold text-2xl">
              Mwanza Motors
            </h2>

            <p className="text-gray-500">
              Mwanza
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="font-bold text-2xl">
              Arusha Cars
            </h2>

            <p className="text-gray-500">
              Arusha
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}