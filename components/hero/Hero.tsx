export default function Hero() {
  return (
    <section
      className="relative h-[85vh] flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/images/CAR.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 text-center max-w-4xl px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Tanzania Car Marketplace
        </h1>

        <p className="text-xl md:text-2xl mb-8">
          Buy, Sell and Inspect Vehicles Across Tanzania
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="/cars"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-bold"
          >
            Browse Cars
          </a>

          <a
            href="/sell"
            className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl font-bold"
          >
            Sell Your Car
          </a>
        </div>
      </div>
    </section>
  );
}