import TestimonialCard from '@/components/ui/TestimonialCard';

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    feedback: "Ragas Modas transformed my ideas into beautiful fabric designs. Highly recommend!",
    image: "/images/testimonials/john.jpg"
  },
  {
    id: 2,
    name: "Jane Smith",
    feedback: "The quality of the prints is outstanding! I will definitely be coming back for more.",
    image: "/images/testimonials/jane.jpg"
  },
  {
    id: 3,
    name: "Alice Johnson",
    feedback: "Amazing service and quick turnaround. My fabric arrived exactly as I envisioned!",
    image: "/images/testimonials/alice.jpg"
  }
];

export default function TestimonialsPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">What Our Customers Say</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map(testimonial => (
          <TestimonialCard 
            key={testimonial.id} 
            name={testimonial.name} 
            feedback={testimonial.feedback} 
            image={testimonial.image} 
          />
        ))}
      </div>
    </div>
  );
}