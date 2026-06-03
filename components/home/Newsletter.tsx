export default function Newsletter() {
  return (
    <section className="bg-blue-700 text-white py-20">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-4">
          Subscribe To Car Alerts
        </h2>

        <p className="mb-8">
          Get latest cars directly in your email.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <input
            placeholder="Your Email"
            className="px-4 py-3 rounded text-black w-80"
          />

          <button className="bg-green-600 px-6 py-3 rounded">
            Subscribe
          </button>
        </div>

      </div>
    </section>
  );
}