"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        
        {/* Left side: Text */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Welcome to <span className="text-blue-600">MyStore</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Discover the best products at unbeatable prices. 
            Shop with ease and enjoy a smooth experience.
          </p>
          <Link
            href="/products"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Explore Products
          </Link>
        </div>

        {/* Right side: Image */}
        <div className="flex justify-center">
          <img
            src="https://via.placeholder.com/400x300.png?text=Welcome+Image"
            alt="Welcome illustration"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
