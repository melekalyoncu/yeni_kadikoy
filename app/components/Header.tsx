'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">KS</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-800">KADIKÖY SPOR KULÜBÜ</h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition">
              HOME
            </Link>
            <Link href="/hakkimizda" className="text-gray-700 hover:text-blue-600 font-medium transition">
              HAKKIMIZDA
            </Link>
            <Link href="/kulup" className="text-gray-700 hover:text-blue-600 font-medium transition">
              KULÜP
            </Link>
            <Link href="/iletisim" className="text-gray-700 hover:text-blue-600 font-medium transition">
              İLETİŞİM
            </Link>
            <Link 
              href="/kayit" 
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 font-medium transition"
            >
              KAYIT OL
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
              HOME
            </Link>
            <Link href="/hakkimizda" className="text-gray-700 hover:text-blue-600 font-medium">
              HAKKIMIZDA
            </Link>
            <Link href="/kulup" className="text-gray-700 hover:text-blue-600 font-medium">
              KULÜP
            </Link>
            <Link href="/iletisim" className="text-gray-700 hover:text-blue-600 font-medium">
              İLETİŞİM
            </Link>
            <Link 
              href="/kayit" 
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 font-medium text-center"
            >
              KAYIT OL
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

