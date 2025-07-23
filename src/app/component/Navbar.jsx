'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [overlayOpen, setOverlayOpen] = useState(false);

  return (
    <header className="text-white fixed top-0 left-0 pt-2 z-50 px-0  sm:px-10 w-full bg-transparent">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center relative z-30">
        {/* Logo */}
        <div className="w-20 sm:w-40">
          <img src="/images/logo.svg" alt="Logo" className="sm:w-[40px] md:w-[80px]  h-auto" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4 ">
          <div className="flex items-center bg-[#6C54A0] rounded-lg px-4 py-3 gap-4 text-sm font-medium">
            <Link href="/" className="hover:underline font-bold">Home</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/career" className="hover:underline">Career</Link>
            <Link href="/case-studie" className="hover:underline">Case Studies</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>

          {/* Grid Icon Button */}
          <button
            className="p-2 bg-gradient-to-r from-[#4E3682] to-[#A890CD] rounded-md hover:bg-white/20"
            onClick={() => setOverlayOpen(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 32 33">
              <rect x="18.752" y="1.53703" width="12.1045" height="12.1045" rx="2" stroke="white" strokeWidth="2" />
              <path
                d="M7.19631 13.1918C10.2905 13.1918 12.7989 10.6835 12.7989 7.58929C12.7989 4.49507 10.2905 1.98672 7.19631 1.98672C4.1021 1.98672 1.59375 4.49507 1.59375 7.58929C1.59375 10.6835 4.1021 13.1918 7.19631 13.1918Z"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect x="1.14453" y="19.035" width="12.1045" height="12.1045" rx="2" stroke="white" strokeWidth="2" />
              <rect x="18.752" y="19.035" width="12.1045" height="12.1045" rx="2" stroke="white" strokeWidth="2" />
            </svg>
          </button>
        </nav>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(prev => !prev)}
            className="p-2"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out px-4 ${
          menuOpen ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 space-y-2 text-sm font-medium">
          {['Home', 'About', 'Career', 'Case Studies', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(' ', '-')}`}
              onClick={() => setMenuOpen(false)}
              className="block text-white hover:underline"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay Menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center items-center transition-all duration-500 ease-in-out transform ${
          overlayOpen ? 'opacity-100 scale-100 visible bg-[#0e061e]/90 backdrop-blur-sm' : 'opacity-0 scale-90 invisible'
        }`}
      >
        <button
          onClick={() => setOverlayOpen(false)}
          className="absolute top-6 right-6 text-white text-4xl font-bold hover:text-purple-400 transition"
        >
          &times;
        </button>

        <div className="space-y-6 text-white text-2xl font-semibold text-center">
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Case Studies', path: '/case-studies' },
            { name: 'Career', path: '/career' },
            { name: 'Contact', path: '/contact' },
            { name: 'Blog', path: '/blog' }
          ].map(({ name, path }) => (
            <Link
              key={name}
              href={path}
              onClick={() => setOverlayOpen(false)}
              className="block hover:text-purple-400 transition-transform duration-300 transform hover:scale-110"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
