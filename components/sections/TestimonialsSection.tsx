"use client";

import TestimonialCard from '../ui/TestimonialCard';
import FadeIn from '../animations/FadeIn';

const testimonials = [
  {
    id: 1,
    name: 'Aarav Patel',
    feedback: 'Ragas Modas delivered exceptional quality fabrics that perfectly matched our requirements. Their attention to detail is impressive!',
    image: '/images/testimonials/testimonial-1.jpg'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    feedback: 'We\'ve been working with Ragas Modas for our clothing line and are consistently impressed with their service and product quality.',
    image: '/images/testimonials/testimonial-2.jpg'
  },
  {
    id: 3,
    name: 'Raj Malhotra',
    feedback: 'The eco-friendly ink options provided by Ragas Modas have helped our brand meet sustainability goals without compromising on quality.',
    image: '/images/testimonials/testimonial-3.jpg'
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#1A535C] to-[#2EC4B6]">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center text-white mb-12 relative">
            <span className="inline-block relative">
              What Our Clients Say
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#FFBC42]"></span>
            </span>
          </h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <FadeIn key={testimonial.id} duration={0.5 + testimonial.id * 0.2}>
              <TestimonialCard 
                name={testimonial.name}
                feedback={testimonial.feedback}
                image={testimonial.image}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}