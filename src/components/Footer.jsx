"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">MyStore</h2>
          <p className="mt-2 text-gray-400">
            Bringing you quality products with the best service.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-white">
                Products
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-white">
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="flex items-end">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} MyStore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
