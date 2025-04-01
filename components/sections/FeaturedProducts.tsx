"use client";
import ProductCard from '@/components/ui/ProductCard';
import FadeIn from '@/components/animations/FadeIn';

const featuredProducts = [
  {
    id: 1,
    title: 'Premium Cotton Fabric',
    description: 'Soft and breathable cotton fabric perfect for all types of clothing.',
    image: '/images/products/cotton-fabric.jpg',
  },
  {
    id: 2,
    title: 'Eco-Friendly Ink',
    description: 'Sustainable ink options that are safe for the environment.',
    image: '/images/products/eco-ink.jpg',
  },
  {
    id: 3,
    title: 'Custom Printed T-Shirts',
    description: 'High-quality t-shirts with custom designs to showcase your style.',
    image: '/images/products/custom-tshirt.jpg',
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center text-[#1A535C] mb-12 relative inline-block">
            Featured Products
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#2EC4B6]"></span>
          </h2>
        </FadeIn>
        
        <div className="flex flex-wrap justify-center gap-8">
          {featuredProducts.map((product, index) => (
            <FadeIn key={product.id} duration={0.3 + (index * 0.2)}>
              <ProductCard 
                key={product.id} 
                id={product.id.toString()}
                title={product.title} 
                description={product.description} 
                imageUrl={product.image}
                price={0}
                onAddToCart={() => {}}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}