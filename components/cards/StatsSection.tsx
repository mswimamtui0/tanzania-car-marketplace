export default function StatsSection() {
  return (
    <section className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-center">

        <div>
          <h3 className="text-5xl font-bold">500+</h3>
          <p>Cars Listed</p>
        </div>

        <div>
          <h3 className="text-5xl font-bold">50+</h3>
          <p>Dealers</p>
        </div>

        <div>
          <h3 className="text-5xl font-bold">1000+</h3>
          <p>Buyers</p>
        </div>

        <div>
          <h3 className="text-5xl font-bold">100%</h3>
          <p>Verified Listings</p>
        </div>

      </div>
    </section>
  );
}