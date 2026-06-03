import { ShieldCheck, BadgeCheck, Users } from "lucide-react";

export default function TrustSection() {
  return (
    <section className="bg-gray-100 py-20">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <ShieldCheck
              size={50}
              className="mx-auto text-green-600"
            />
            <h3 className="font-bold text-xl mt-4">
              Verified Sellers
            </h3>
            <p className="text-gray-600 mt-2">
              All dealers and agents are verified.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <BadgeCheck
              size={50}
              className="mx-auto text-blue-600"
            />
            <h3 className="font-bold text-xl mt-4">
              Vehicle Inspection
            </h3>
            <p className="text-gray-600 mt-2">
              Independent inspection available.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <Users
              size={50}
              className="mx-auto text-purple-600"
            />
            <h3 className="font-bold text-xl mt-4">
              Trusted Community
            </h3>
            <p className="text-gray-600 mt-2">
              Thousands of buyers and sellers.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}