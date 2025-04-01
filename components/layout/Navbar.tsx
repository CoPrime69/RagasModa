import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-transparent p-4 z-10 relative">
      {/* Mobile menu button */}
      <div className="flex items-center justify-between md:hidden">
        <span className="text-black text-xl font-bold">Logo</span>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-black focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Desktop navigation */}
      <ul className="hidden md:flex space-x-6 text-black">
        <li>
          <Link href="/" className="hover:text-white transition duration-300">Home</Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-white transition duration-300">About</Link>
        </li>
        <li>
          <Link href="/services" className="hover:text-white transition duration-300">Services</Link>
        </li>
        {/* <li>
          <Link href="/products" className="hover:text-white transition duration-300">Products</Link>
        </li>
        <li>
          <Link href="/gallery" className="hover:text-white transition duration-300">Gallery</Link>
        </li> */}
        <li>
          <Link href="/testimonials" className="hover:text-white transition duration-300">Testimonials</Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-white transition duration-300">Contact</Link>
        </li>
        <li>
          <Link href="/blog" className="hover:text-white transition duration-300">Blog</Link>
        </li>
      </ul>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col space-y-4 mt-4 bg-gray-100 p-4 rounded-md absolute left-0 right-0 shadow-md">
          <li>
            <Link href="/" className="block hover:text-gray-700 transition duration-300">Home</Link>
          </li>
          <li>
            <Link href="/about" className="block hover:text-gray-700 transition duration-300">About</Link>
          </li>
          <li>
            <Link href="/services" className="block hover:text-gray-700 transition duration-300">Services</Link>
          </li>
          <li>
            <Link href="/testimonials" className="block hover:text-gray-700 transition duration-300">Testimonials</Link>
          </li>
          <li>
            <Link href="/contact" className="block hover:text-gray-700 transition duration-300">Contact</Link>
          </li>
          <li>
            <Link href="/blog" className="block hover:text-gray-700 transition duration-300">Blog</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}