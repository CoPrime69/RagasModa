"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Close menu when clicking outside
  useEffect(() => {
    if (!isMenuOpen) return;
    
    // Define the event type for the click handler
    const handleClickOutside = (e: MouseEvent): void => {
      if (!(e.target as HTMLElement).closest('nav')) {
      setIsMenuOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Close menu when route changes
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-transparent p-4 z-50 relative">
      {/* Logo and Mobile menu button */}
      <div className="flex items-center justify-between">
        
        {/* Desktop navigation */}
        <ul className="hidden md:flex space-x-6 text-black">
          <li>
            <Link href="/" className="hover:text-gray-600 transition duration-300">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-600 transition duration-300">About</Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-gray-600 transition duration-300">Services</Link>
          </li>
          <li>
            <Link href="/testimonials" className="hover:text-gray-600 transition duration-300">Testimonials</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-600 transition duration-300">Contact</Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-gray-600 transition duration-300">Blog</Link>
          </li>
        </ul>
        
        {/* Mobile menu button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsMenuOpen(!isMenuOpen);
          }}
          className="text-black focus:outline-none md:hidden"
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

      {/* Mobile navigation overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-transparent bg-opacity-50 z-40" onClick={() => setIsMenuOpen(false)}>
          <div 
            className="bg-white w-64 px-8 h-full absolute right-0 shadow-lg transform transition-transform duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <span className="font-bold">Menu</span>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="text-black focus:outline-none"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col p-4">
              <li className="py-2 border-b border-gray-100">
                <Link href="/" className="block hover:text-gray-700 transition duration-300" onClick={handleNavClick}>Home</Link>
              </li>
              <li className="py-2 border-b border-gray-100">
                <Link href="/about" className="block hover:text-gray-700 transition duration-300" onClick={handleNavClick}>About</Link>
              </li>
              <li className="py-2 border-b border-gray-100">
                <Link href="/services" className="block hover:text-gray-700 transition duration-300" onClick={handleNavClick}>Services</Link>
              </li>
              <li className="py-2 border-b border-gray-100">
                <Link href="/testimonials" className="block hover:text-gray-700 transition duration-300" onClick={handleNavClick}>Testimonials</Link>
              </li>
              <li className="py-2 border-b border-gray-100">
                <Link href="/contact" className="block hover:text-gray-700 transition duration-300" onClick={handleNavClick}>Contact</Link>
              </li>
              <li className="py-2">
                <Link href="/blog" className="block hover:text-gray-700 transition duration-300" onClick={handleNavClick}>Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}