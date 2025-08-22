
"use client";

import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              MyStore
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-blue-600">
              Products
            </Link>
            {
            session ?
              <Link
                href="/dashboard/add-product"
                className="block text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Add Products
              </Link>
              :
              ''
          }
            {session ? (
              <>
                <span className="text-gray-700">
                  Hi, {session.user?.name?.split(" ")[0]}
                </span>
                <button
                  onClick={() => signOut()}
                  className="text-red-600 hover:underline"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link href="/login" className="hover:text-blue-600">
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-3 space-y-2">
          <Link
            href="/"
            className="block text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/products"
            className="block text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>
          {
            session ?
              <Link
                href="/dashboard/add-product"
                className="block text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Add Products
              </Link>
              :
              ''
          }
          {session ? (
            <>
              <span className="text-gray-700">
                Hi, {session.user?.name?.split(" ")[0]}
              </span>
              <button
                onClick={() => signOut()}
                className="text-red-600 hover:underline"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="block text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
