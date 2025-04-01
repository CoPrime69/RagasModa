import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#1A535C] to-[#2EC4B6] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 border-b-2 border-[#FFBC42] pb-2 inline-block">About Us</h3>
            <p className="mb-4">
              Ragas Modas is your premier destination for fabric printing and customization services. We transform your ideas into reality.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 border-b-2 border-[#FFBC42] pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-[#FFBC42] transition duration-300">About Us</Link></li>
              <li><Link href="/services" className="hover:text-[#FFBC42] transition duration-300">Services</Link></li>
              <li><Link href="/products" className="hover:text-[#FFBC42] transition duration-300">Products</Link></li>
              <li><Link href="/gallery" className="hover:text-[#FFBC42] transition duration-300">Gallery</Link></li>
              <li><Link href="/blog" className="hover:text-[#FFBC42] transition duration-300">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 border-b-2 border-[#FFBC42] pb-2 inline-block">Contact</h3>
            <p className="mb-2">PL NO 1 AMBIKA NAGAR, B/H HARINAGAR</p>
            <p className="mb-2">UDHNA SURAT-GUJARAT INDIA</p>
            <p className="mb-2">+91 8866416150</p>
            <p className="mb-2">info.ragasmoda@gmail.com</p>
          </div>
        </div>
        
        <div className="border-t border-[#F7F9FB]/20 pt-6 text-center">
          <p>© 2025 Ragas Modas. All rights reserved. | Transforming fabric into art!</p>
        </div>
      </div>
    </footer>
  );
}