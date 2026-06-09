"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/images/logo1.png"
            alt="Voltaria Logo"
            width={120}
            height={64}
            priority
            className="h-19 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          <Link
            href="/"
            className={
              pathname === "/"
                ? "text-red-600 font-bold tracking-wider transition-colors"
                : "text-gray-600 hover:text-red-600 transition-colors"
            }
          >
            HOME
          </Link>
          <Link
            href="/about"
            className={
              pathname === "/about"
                ? "text-red-600 font-bold tracking-wider transition-colors"
                : "text-gray-600 hover:text-red-600 transition-colors"
            }
          >
            About Us
          </Link>
          <Link
            href="/products"
            className={
              pathname === "/products"
                ? "text-red-600 font-bold tracking-wider transition-colors"
                : "text-gray-600 hover:text-red-600 transition-colors"
            }
          >
            Products
          </Link>
          <Link
            href="/contact"
            className={
              pathname === "/contact"
                ? "text-red-600 font-bold tracking-wider transition-colors"
                : "text-gray-600 hover:text-red-600 transition-colors"
            }
          >
            Contact Us
          </Link>
        </nav>

        {/* Login Button */}
        <div className="hidden md:block">
          <Link
            href="/login"
            className="px-8 py-2.5 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 active:scale-95 transition-all shadow-md hover:shadow-lg inline-block"
          >
            Login
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="md:hidden p-2 rounded-md text-gray-600 hover:text-red-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-600"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden border-t border-gray-100 bg-white`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-4 py-4 pb-6">
          <Link
            href="/"
            className={`block rounded-md px-3 py-2 text-base ${
              pathname === "/"
                ? "font-bold text-red-600 hover:bg-gray-50"
                : "font-medium text-gray-600 hover:text-red-600 hover:bg-gray-50"
            }`}
            onClick={() => setIsOpen(false)}
          >
            HOME
          </Link>
          <Link
            href="/about"
            className={`block rounded-md px-3 py-2 text-base ${
              pathname === "/about"
                ? "font-bold text-red-600 hover:bg-gray-50"
                : "font-medium text-gray-600 hover:text-red-600 hover:bg-gray-50"
            }`}
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/products"
            className={`block rounded-md px-3 py-2 text-base ${
              pathname === "/products"
                ? "font-bold text-red-600 hover:bg-gray-50"
                : "font-medium text-gray-600 hover:text-red-600 hover:bg-gray-50"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>
          <Link
            href="/contact"
            className={`block rounded-md px-3 py-2 text-base ${
              pathname === "/contact"
                ? "font-bold text-red-600 hover:bg-gray-50"
                : "font-medium text-gray-600 hover:text-red-600 hover:bg-gray-50"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
          <div className="pt-4 border-t border-gray-100">
            <Link
              href="/login"
              className="block w-full text-center px-4 py-2.5 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
