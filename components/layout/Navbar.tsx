import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-transparent p-4 z-1">
      <ul className="flex space-x-6 text-black">
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
    </nav>
  );
}