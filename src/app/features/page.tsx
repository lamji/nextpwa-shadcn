"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define feature card type
type FeatureCard = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

// Define feature highlight type
type FeatureHighlight = {
  id: string;
  title: string;
  description: string;
  cta: string;
  ctaLink: string;
  imageUrl: string;
  imageAlt: string;
};

// Core features data
const coreFeatures: FeatureCard[] = [
  {
    id: '1',
    icon: 'layout',
    title: 'Fully Responsive Templates',
    description: 'Our designs adapt flawlessly to any device, ensuring perfect viewing experiences everywhere.'
  },
  {
    id: '2',
    icon: 'zap',
    title: 'Fast Loading & SEO Optimized',
    description: 'Lightning-fast performance and search engine visibility built into every template.'
  },
  {
    id: '3',
    icon: 'edit-3',
    title: 'Customizable Designs',
    description: 'Tailor every element to your brand with our intuitive customization options.'
  },
  {
    id: '4',
    icon: 'code',
    title: 'Clean Code Architecture',
    description: `Meticulously crafted code that's maintainable, scalable, and follows best practices.`
  },
  {
    id: '5',
    icon: 'layers',
    title: 'Built with Modern Technologies',
    description: 'Leveraging the latest frameworks and tools for superior performance and developer experience.'
  },
  {
    id: '6',
    icon: 'life-buoy',
    title: 'Dedicated Support Team',
    description: 'Our experts are always ready to help you make the most of your website.'
  }
];

// Feature highlights data
const featureHighlights: FeatureHighlight[] = [
  {
    id: '1',
    title: 'Design Freedom at Your Fingertips',
    description: 'Seamlessly adjust colors, typography, and layouts to create a website that perfectly represents your brand identity. Our intuitive design system gives you creative control without requiring coding knowledge.',
    cta: 'Explore Templates',
    ctaLink: '/templates',
    imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop',
    imageAlt: 'Designer working on website mockups',
  },
 {
  id: '2',
  title: `Mobile-First, Always`,
  description: `In today's mobile-dominated world, your website needs to shine on every screen size. Our templates are built from the ground up with responsive design principles, ensuring perfect experiences from smartphones to ultrawide displays.`,
  cta: 'Learn About Our Approach',
  ctaLink: '/about',
  imageUrl: 'https://images.unsplash.com/photo-1616469829718-0fbe5caa320b?q=80&w=1000&auto=format&fit=crop',
  imageAlt: 'Website displayed on multiple devices',
 },
 {
  id: '3',
  title: 'Performance You Can Feel',
  description: `Speed is a feature. Our templates are optimized for lightning-fast loading times, smooth animations, and responsive interactions. Your visitors won't just see the difference—they'll feel it.`,
  cta: 'See Live Preview',
  ctaLink: '/templates',
  imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
  imageAlt: 'Performance dashboard metrics',
}
];

// {
//   id: '2',
//   title: `Mobile-First, Always`,
//   description: 'In today's mobile-dominated world, your website needs to shine on every screen size. Our templates are built from the ground up with responsive design principles, ensuring perfect experiences from smartphones to ultrawide displays.',
//   cta: 'Learn About Our Approach',
//   ctaLink: '/about',
//   imageUrl: 'https://images.unsplash.com/photo-1616469829718-0fbe5caa320b?q=80&w=1000&auto=format&fit=crop',
//   imageAlt: 'Website displayed on multiple devices',
// },
// {
//   id: '3',
//   title: 'Performance You Can Feel',
//   description: 'Speed is a feature. Our templates are optimized for lightning-fast loading times, smooth animations, and responsive interactions. Your visitors won't just see the difference—they'll feel it.',
//   cta: 'See Live Preview',
//   ctaLink: '/templates',
//   imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
//   imageAlt: 'Performance dashboard metrics',
// }

// Testimonial type
type Testimonial = {
  id: string;
  quote: string;
  author: string;
  position: string;
  company: string;
  avatarUrl: string;
};

// Testimonials data
const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: "ScaleWeb transformed our online presence in ways we couldn't imagine. The templates are not just beautiful—they convert visitors into customers.",
    author: "Sarah Johnson",
    position: "Marketing Director",
    company: "Elevate Digital",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: '2',
    quote: "The speed and flexibility of ScaleWeb's templates gave us a competitive edge. Our website now loads in under 2 seconds and looks stunning on every device.",
    author: "Michael Chen",
    position: "CTO",
    company: "FutureTech Solutions",
    avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: '3',
    quote: "After trying several web design services, ScaleWeb stands head and shoulders above the rest. Their attention to detail and customer support is unmatched.",
    author: "Emma Rodriguez",
    position: "Founder",
    company: "Creative Spark Studio",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
  }
];

// Icon component that maps string names to SVG icons
const FeatureIcon = ({ name }: { name: string }) => {
  switch (name) {
    case 'layout':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      );
    case 'zap':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      );
    case 'edit-3':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
          <path d="M12 20h9"></path>
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
        </svg>
      );
    case 'code':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      );
    case 'layers':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      );
    case 'life-buoy':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="4"></circle>
          <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
          <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line>
          <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line>
          <line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line>
          <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>
        </svg>
      );
    default:
      return null;
  }
};

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white min-h-[100vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-secondary opacity-90"></div>
        
        {/* Abstract Blob Shape */}
        <div className="absolute opacity-20 top-0 right-0 w-[600px] h-[600px] -translate-y-1/4 translate-x-1/4">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFFFFF" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-1.5C87,13.3,81.3,26.6,73.6,39.1C65.9,51.6,56.1,63.3,43.7,70.9C31.3,78.4,15.7,81.7,0.6,80.8C-14.6,79.8,-29.1,74.5,-41.2,66.5C-53.3,58.5,-62.9,47.7,-68.6,35.4C-74.3,23,-76.1,9,-76.1,-4.9C-76.1,-18.9,-74.1,-33.7,-67.4,-45.7C-60.7,-57.7,-49.2,-66.9,-36.6,-74.6C-24,-82.3,-12,-88.7,1.4,-91C14.7,-93.3,29.4,-91.5,44.7,-84.6Z" transform="translate(100 100)" />
          </svg>
        </div>
        
        <div className="absolute opacity-20 bottom-0 left-0 w-[500px] h-[500px] translate-y-1/4 -translate-x-1/4">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFFFFF" d="M48.8,-69.5C62.9,-62.1,74.3,-47.7,79.7,-31.6C85.2,-15.5,84.5,2.3,79.4,18.5C74.2,34.6,64.6,49.1,51.3,58.7C38,68.3,21,73.1,3.4,70.5C-14.2,67.9,-28.5,57.9,-41.9,47.1C-55.4,36.3,-68,24.7,-73.4,9.5C-78.7,-5.7,-76.8,-24.6,-67.7,-38.4C-58.6,-52.3,-42.3,-61.2,-26.7,-67.8C-11.1,-74.5,3.9,-78.9,18.9,-77.3C33.9,-75.7,48.9,-68.1,63.9,-60.6Z" transform="translate(100 100)" />
          </svg>
        </div>
        
        {/* Hero content */}
        <div className="relative container mx-auto px-6 py-24 md:py-32 flex flex-col items-center justify-center z-10">
          <div className="w-full max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              What Makes ScaleWeb Different
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-12">
              From pixel-perfect design to lightning-fast delivery — we&apos;re redefining how websites are built.
            </p>
          </div>
          
          {/* Hero image */}
          <div className="relative w-full max-w-4xl mx-auto mt-8 shadow-2xl rounded-2xl overflow-hidden bg-white">
            <div className="aspect-w-16 aspect-h-9 md:aspect-h-7 w-full">
              <Image 
                src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=1200&auto=format&fit=crop" 
                alt="ScaleWeb multi-device preview" 
                className="object-cover" 
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to build exceptional websites that stand out from the competition
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature) => (
              <div 
                key={feature.id}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-primary mb-5">
                  <FeatureIcon name={feature.icon} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlights (Split Layouts) */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-6">
          {featureHighlights.map((highlight, index) => (
            <div 
              key={highlight.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center my-20 first:mt-0 last:mb-0`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-3xl overflow-hidden shadow-lg">
                  <div className="aspect-w-16 aspect-h-12 w-full">
                    <Image 
                      src={highlight.imageUrl} 
                      alt={highlight.imageAlt}
                      className="object-cover"
                      fill
                      sizes="(max-width: 768px) 100vw, 600px"
                    />
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="w-full lg:w-1/2 flex flex-col items-start">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {highlight.title}
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  {highlight.description}
                </p>
                <Link 
                  href={highlight.ctaLink}
                  className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
                >
                  {highlight.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from businesses that have transformed their online presence with ScaleWeb
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image 
                      src={testimonial.avatarUrl} 
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">&quot;{testimonial.quote}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let&apos;s Build Your Dream Website
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Join thousands of businesses who&apos;ve already transformed their online presence with ScaleWeb&apos;s professional templates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/templates" 
              className="px-8 py-4 bg-white text-primary rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Browse Templates
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-transparent text-white border border-white rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
