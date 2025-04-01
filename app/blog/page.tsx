"use client";
import { useState } from 'react';
import Card from '@/components/ui/Card';
import Link from 'next/link';
import FadeIn from '@/components/animations/FadeIn';

// Static blog posts data
const blogPosts = [
  {
    title: "The Art of Fabric Printing",
    excerpt: "Discover the intricate process behind creating beautifully printed fabrics.",
    slug: "art-of-fabric-printing",
    imageUrl: "/images/blog/fabric-printing.jpg"
  },
  {
    title: "Sustainable Practices in Textile Industry",
    excerpt: "How we're committed to eco-friendly printing methods that reduce environmental impact.",
    slug: "sustainable-practices",
    imageUrl: "/images/blog/sustainable.jpg"
  },
  {
    title: "Custom Designs: From Concept to Fabric",
    excerpt: "Follow the journey of a design from initial sketch to finished printed fabric.",
    slug: "custom-designs",
    imageUrl: "/images/blog/custom-design.jpg"
  }
];

export default function BlogPage() {
  return (
    <div className="p-8 bg-amber-50">
      <FadeIn>
        <h1 className="text-3xl font-bold mb-4 text-indigo-800">Our Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug}>
              <div className="transform transition hover:scale-105 duration-300">
                <Card 
                  title={post.title} 
                  content={[post.excerpt]} 
                  imageUrl={post.imageUrl}
                  animation="hover:shadow-xl"
                />
              </div>
            </Link>
          ))}
        </div>
      </FadeIn>
    </div>
  );
}