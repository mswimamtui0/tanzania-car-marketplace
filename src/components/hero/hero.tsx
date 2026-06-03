export default function Hero() {
  return (
    <section
      className="h-[80vh] flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('/images/CAR.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black/60 p-10 rounded-xl text-center">
        <h1 className="text-6xl font-bold mb-4">
          Find Your Dream Car
        </h1>

        <p className="text-xl">
          Buy & Sell Verified Cars Across Tanzania and 
        </p>
      </div>
    </section>
  );
}