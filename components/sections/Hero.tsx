"use client";

import Button from '@/components/ui/Button';
import FadeIn from '@/components/animations/FadeIn';
import { useRouter } from 'next/navigation';
import logoImage from '../layout/log.png'; // Correct path if image is in layout folder

export default function Hero() {
  const router = useRouter();

  const handleExploreClick = () => {
    router.push('/about');
  };

  return (
    <section 
      className="relative flex items-center justify-center h-screen bg-cover bg-center" 
      style={{ backgroundImage: `url(${logoImage.src})` }}
    >
      {/* Darker overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/70"></div>
      
      <FadeIn>
        <div className="relative z-10 text-center p-8 max-w-3xl backdrop-blur-sm bg-black/20 rounded-lg">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Welcome to <span className="text-[#FFBC42]">Ragas Modas</span>
          </h1>
          <p className="text-2xl mb-8 text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.7)]">
            Where Fabric Meets Creativity
          </p>
          <Button 
            text="Explore More" 
            onClick={handleExploreClick} 
            variant="primary" 
          />
        </div>
      </FadeIn>
    </section>
  );
}