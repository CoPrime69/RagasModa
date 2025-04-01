"use client";

import { useEffect, useState } from 'react';

export default function AnimatedBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Delay before the banner appears

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="bg-yellow-500 p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold text-white">Welcome to Ragas Modas!</h2>
        <p className="text-white mt-2">Transforming fabric into art with precision and creativity.</p>
        <a href="/about" className="mt-4 inline-block px-4 py-2 bg-white text-yellow-500 rounded hover:bg-gray-200 transition">
          Learn More
        </a>
      </div>
    </div>
  );
}