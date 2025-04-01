"use client";
import Image from 'next/image';

type ProductCardProps = {
    id: string;
    title: string;
    description: string;
    price: number;
    imageUrl: string;
    onAddToCart: (id: string) => void;
};

export default function ProductCard({ id, title, description, price, imageUrl, onAddToCart }: ProductCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl group">
            <div className="relative h-56 overflow-hidden">
                <Image 
                    src={imageUrl} 
                    alt={title} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute top-0 right-0 bg-[#FF6B35] text-white px-2 py-1 m-2 text-xs font-bold uppercase rounded">
                    New
                </div>
            </div>
            
            <div className="p-5">
                <h2 className="text-xl font-bold mb-2 text-[#1A535C] group-hover:text-[#2EC4B6] transition-colors duration-300">
                    {title}
                </h2>
                
                <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                    {description}
                </p>
                
                <div className="flex justify-between items-center mb-4">
                    <p className="text-lg font-bold text-[#1A535C]">
                        ₹{price.toFixed(2)}
                    </p>
                    <div className="text-sm bg-[#F7F9FB] text-[#2EC4B6] px-2 py-1 rounded">
                        In Stock
                    </div>
                </div>
                
                <button 
                    onClick={() => onAddToCart(id)} 
                    className="w-full bg-[#2EC4B6] hover:bg-[#1A535C] text-white py-2 rounded-md transition-colors duration-300 flex items-center justify-center gap-2"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                    Add to Cart
                </button>
            </div>
        </div>
    );
}