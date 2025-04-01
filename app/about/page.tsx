import Card from '@/components/ui/Card';
import FadeIn from '@/components/animations/FadeIn';

export default function AboutPage() {
  return (
    <div className="p-8 bg-[#F7F9FB]">
      <FadeIn>
        <h1 className="text-4xl font-bold mb-6 text-[#1A535C] border-b-2 border-[#FF6B35] pb-2 inline-block">About Ragas Modas</h1>
        <p className="text-lg text-[#333333] mb-8 max-w-3xl">
          At Ragas Modas, we are dedicated to transforming fabric into art. Our mission is to provide high-quality printing services that meet the diverse needs of our clients. With a focus on precision and creativity, we strive to deliver exceptional results that exceed expectations.
        </p>
        
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#2EC4B6] mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#1A535C]">Our Services</h2>
          <Card title="What We Offer" content={[
            "✔ Custom Fabric Printing",
            "✔ Eco-Friendly Inks",
            "✔ Fast Turnaround Times",
            "✔ Bulk Order Discounts"
          ]} />
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#FF6B35]">
          <h2 className="text-2xl font-semibold mb-4 text-[#1A535C]">Why Choose Us?</h2>
          <p className="text-lg text-[#333333]">
            We pride ourselves on our commitment to quality and customer satisfaction. Our team of experts is here to guide you through every step of the process, ensuring that your vision comes to life.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}