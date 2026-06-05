export default function BuyerDashboard() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-6">
        Buyer Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="font-bold text-xl">
            Favorite Cars
          </h2>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="font-bold text-xl">
            Saved Searches
          </h2>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="font-bold text-xl">
            My Requests
          </h2>
        </div>

      </div>
    </div>
  );
}