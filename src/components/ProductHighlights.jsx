"use client";

import { ShoppingCart, Star, Truck } from "lucide-react"; // using lucide icons

export default function ProductHighlights() {
  const highlights = [
    {
      icon: <ShoppingCart className="w-10 h-10 text-blue-600" />,
      title: "Wide Selection",
      description: "Browse a variety of top-quality products tailored to your needs.",
    },
    {
      icon: <Star className="w-10 h-10 text-yellow-500" />,
      title: "Top Rated",
      description: "Our customers love us! Rated highly for reliability and service.",
    },
    {
      icon: <Truck className="w-10 h-10 text-green-600" />,
      title: "Fast Delivery",
      description: "Get your products quickly with our efficient delivery system.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Why Shop With Us?
        </h2>

        {/* Grid of highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
