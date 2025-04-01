"use client";

import React from 'react';
import Card from '@/components/ui/Card';
import FadeIn from '@/components/animations/FadeIn';

const services = [
  {
    title: "Digital Printing",
    content: [
      "High-quality digital prints on various fabrics.",
      "Fast turnaround times for urgent orders.",
      "Eco-friendly inks used for vibrant colors."
    ],
    animation: "fade-right"
  },
  {
    title: "Screen Printing",
    content: [
      "Ideal for bulk orders with consistent quality.",
      "Wide range of colors and finishes available.",
      "Durable prints that withstand washing and wear."
    ],
    animation: "fade-up"
  },
  {
    title: "Embroidery Services",
    content: [
      "Custom embroidery for logos and designs.",
      "Perfect for uniforms, promotional items, and gifts.",
      "Available on a variety of fabrics."
    ],
    animation: "fade-up"
  },
  {
    title: "Custom Fabric Design",
    content: [
      "Work with our designers to create unique fabric patterns.",
      "Perfect for fashion designers and businesses.",
      "Samples available before full production."
    ],
    animation: "fade-left"
  }
];

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-[#F7F9FB]">
      <div className="container mx-auto text-center px-4">
        <FadeIn>
          <h2 className="text-4xl font-bold mb-12 text-[#1A535C] relative inline-block">
            Our Services
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#FF6B35]"></span>
          </h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} duration={(index + 1) * 0.2}>
              <Card 
                title={service.title} 
                content={service.content} 
                animation={service.animation}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}