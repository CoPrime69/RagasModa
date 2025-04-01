"use client";

import { useState } from 'react';
import ContactForm from '@/components/ui/ContactForm';
import FadeIn from '@/components/animations/FadeIn';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (data: { name: string; email: string; message: string }) => {
    // Instead of API call, just log the data and show success message
    console.log('Form data:', data);
    setSubmitted(true);
    return new Promise<void>((resolve) => {
      setTimeout(resolve, 500);
    });
  };

  return (
    <div className="p-8 bg-amber-50">
      <FadeIn>
        <h1 className="text-3xl font-bold mb-4 text-indigo-800">Contact Us</h1>
        <div className="space-y-4 text-lg text-indigo-900">
          <p><strong>Address:</strong> PL NO 1 AMBIKA NAGAR, B/H HARINAGAR 2 UDHNA SURAT-GUJARAT INDIA</p>
          <p><strong>Phone:</strong> +91 8866416150</p>
          <p><strong>Email:</strong> info.ragasmoda@gmail.com</p>
        </div>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-indigo-800">Get in Touch</h2>
        
        {submitted ? (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative animate-fade-in">
            <strong>Thank you for your message!</strong>
            <p>We'll get back to you as soon as possible.</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
            >
              Send another message
            </button>
          </div>
        ) : (
          <ContactForm onSubmit={handleSubmit} />
        )}
      </FadeIn>
    </div>
  );
}