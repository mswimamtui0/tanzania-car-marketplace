export default function InspectionPage() {
  return (
    <div className="min-h-screen bg-gray-100">

      <div className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-6xl font-bold">
          Vehicle Inspection
        </h1>

        <p className="text-xl mt-4">
          Buy with confidence. Get a full inspection report.
        </p>
      </div>

      <div className="max-w-5xl mx-auto py-16 px-6">

        <div className="bg-white p-8 rounded-xl shadow-xl">

          <h2 className="text-3xl font-bold mb-6">
            What's Included?
          </h2>

          <ul className="space-y-4 text-lg">
            <li>✅ Engine Inspection</li>
            <li>✅ Transmission Check</li>
            <li>✅ Chassis Inspection</li>
            <li>✅ Accident History Review</li>
            <li>✅ Road Test Report</li>
          </ul>

          <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg font-bold">
            Book Inspection
          </button>

        </div>

      </div>

    </div>
  );
}