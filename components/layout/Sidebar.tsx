import { useState } from 'react';
import Link from 'next/link';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
      <button onClick={toggleSidebar} className="p-4 md:hidden">
        {isOpen ? 'Close' : 'Open'} Menu
      </button>
      <nav className="flex flex-col p-4">
        <Link href="/" className="py-2 hover:bg-gray-700 rounded">Home</Link>
        <Link href="/about" className="py-2 hover:bg-gray-700 rounded">About</Link>
        <Link href="/services" className="py-2 hover:bg-gray-700 rounded">Services</Link>
        <Link href="/products" className="py-2 hover:bg-gray-700 rounded">Products</Link>
        <Link href="/gallery" className="py-2 hover:bg-gray-700 rounded">Gallery</Link>
        <Link href="/testimonials" className="py-2 hover:bg-gray-700 rounded">Testimonials</Link>
        <Link href="/blog" className="py-2 hover:bg-gray-700 rounded">Blog</Link>
        <Link href="/contact" className="py-2 hover:bg-gray-700 rounded">Contact</Link>
      </nav>
    </div>
  );
}