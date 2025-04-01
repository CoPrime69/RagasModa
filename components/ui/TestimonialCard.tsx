import React from 'react';

type TestimonialCardProps = {
    name: string;
    feedback: string;
    image: string;
};

export default function TestimonialCard({ name, feedback, image }: TestimonialCardProps) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <img src={image} alt={`${name}'s picture`} className="w-16 h-16 rounded-full mb-4" />
            <h3 className="text-lg font-semibold mb-2">{name}</h3>
            <p className="text-gray-600 italic">"{feedback}"</p>
        </div>
    );
}