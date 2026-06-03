import {
  Car,
  Truck,
  Bus,
  Bike,
  Zap,
  Crown,
  Caravan,
  Pickaxe,
} from "lucide-react";

export default function BodyTypes() {
  const types = [
    { name: "SUV", icon: Car },
    { name: "Sedan", icon: Crown },
    { name: "Pickup", icon: Pickaxe },
    { name: "Truck", icon: Truck },
    { name: "Van", icon: Caravan },
    { name: "Bus", icon: Bus },
    { name: "Bike", icon: Bike },
    { name: "Electric", icon: Zap },
  ];

  return (
    <section className="max-w-7xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold mb-10 text-center">
        Browse By Body Type
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {types.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.name}
              className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-2xl transition"
            >
              <Icon size={50} className="mx-auto mb-4 text-blue-600" />

              <h3 className="font-bold text-lg">
                {item.name}
              </h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}