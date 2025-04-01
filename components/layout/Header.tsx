import Navbar from './Navbar';
import Link from 'next/link';
import Image from 'next/image';
import logoImage from './log.png'; // Adjust path as needed

export default function Header() {
  return (
    <header className="relative bg-gradient-to-r from-[#1A535C] to-[#2EC4B6] shadow-lg">
      {/* GST Number in top right */}
      <div className="absolute top-1 right-4 text-xs md:text-sm text-white bg-[#1A535C]/50 px-2 py-1 rounded">
        GST IN: 24DRDPK8425A1Z5
      </div>
      
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center">
            <div className="relative w-24 h-24 mr-3">
              <Image 
                src={logoImage}
                alt="Ragas Modas Logo" 
                fill
                style={{objectFit: 'contain'}}
                priority
              />
            </div>
            <span className="text-2xl font-bold text-white">Ragas Modas</span>
          </div>
        </Link>
        <Navbar />
      </div>
    </header>
  );
}