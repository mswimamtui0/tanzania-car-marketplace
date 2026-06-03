import {
  Car,
  Users,
  Building2,
  MapPin,
} from "lucide-react";

export default function Stats() {
  return (
    <section className="bg-blue-700 text-white py-20">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 text-center">

        <div>
          <Car size={50} className="mx-auto mb-4" />
          <h3 className="text-4xl font-bold">500+</h3>
          <p>Cars Listed</p>
        </div>

        <div>
          <Users size={50} className="mx-auto mb-4" />
          <h3 className="text-4xl font-bold">1000+</h3>
          <p>Users</p>
        </div>

        <div>
          <Building2 size={50} className="mx-auto mb-4" />
          <h3 className="text-4xl font-bold">50+</h3>
          <p>Dealers</p>
        </div>

        <div>
          <MapPin size={50} className="mx-auto mb-4" />
          <h3 className="text-4xl font-bold">30+</h3>
          <p>Cities</p>
        </div>

      </div>

    </section>
  );
}