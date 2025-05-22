import React from 'react';
import Image from 'next/image';
import useViewModel from './useViewModel';

export default function Index() {
  const {showTestimonials} = useViewModel()
  return (
    <>
    <section className="relative min-h-[100vh] w-full flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-accent/50 z-0">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/20 blur-3xl"></div>
          <div className="absolute top-1/3 -right-24 w-80 h-80 rounded-full bg-white/20 blur-3xl"></div>
          <div className="absolute -bottom-24 left-1/3 w-72 h-72 rounded-full bg-white/20 blur-3xl"></div>
        </div>
        
        {/* Abstract Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating shapes */}
          <div className="absolute top-[15%] right-[10%] w-20 h-20 rotate-45 bg-white/10 backdrop-blur-md rounded-lg animate-pulse"></div>
          <div className="absolute top-[30%] left-[15%] w-16 h-16 rotate-12 bg-secondary/20 backdrop-blur-md rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-[25%] right-[20%] w-24 h-24 -rotate-12 bg-primary/20 backdrop-blur-md rounded-md animate-pulse delay-700"></div>
          
          {/* Geometric patterns */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3"/>
                </pattern>
                <linearGradient id="fadeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="white" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              <rect width="100%" height="100%" fill="url(#fadeGradient)" />
            </svg>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute bottom-10 left-[10%] w-40 h-40">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-20">
              <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="0.5" fill="none" />
              <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="0.5" fill="none" />
              <circle cx="50" cy="50" r="20" stroke="white" strokeWidth="0.5" fill="none" />
            </svg>
          </div>
          <div className="absolute top-[15%] right-[15%] w-60 h-60">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-10">
              <polygon points="50,0 100,50 50,100 0,50" stroke="white" strokeWidth="0.5" fill="none" />
              <polygon points="50,10 90,50 50,90 10,50" stroke="white" strokeWidth="0.5" fill="none" />
              <polygon points="50,20 80,50 50,80 20,50" stroke="white" strokeWidth="0.5" fill="none" />
            </svg>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Logo */}
          <div className="flex justify-center mb-10">
            <div className="relative bg-white rounded-2xl shadow-lg px-6 py-4 flex items-center overflow-hidden">
              <div className="absolute inset-0 bg-white"></div>
              <div className="relative z-10 flex items-center gap-3">
                <div className="text-primary p-2 bg-primary/5 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                  </svg>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-primary text-3xl font-black tracking-tighter leading-none" style={{ fontFamily: "'Montserrat', sans-serif" }}>SW</span>
                  <span className="text-secondary text-xs font-semibold tracking-widest uppercase">ScaleWeb</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-md">
            Build Your Web Presence with <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-secondary">ScaleWeb</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light">
            Browse, customize, and launch your dream website with ease.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="px-8 py-4 text-lg font-medium rounded-lg bg-white text-primary hover:bg-opacity-95 transition-all transform hover:scale-105 shadow-lg">
              Browse Templates
            </button>
            <button className="px-8 py-4 text-lg font-medium rounded-lg bg-primary/20 text-white border-2 border-white/30 backdrop-blur-sm hover:bg-primary/30 transition-all transform hover:scale-105 shadow-lg">
              Get a Quote
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center">
        <div className="animate-bounce flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

     
    </section>
     {/* Features Grid */}
     <div className="relative mt-24 py-16 bg-white/95 backdrop-blur-sm rounded-t-3xl w-full min-h-[100vh]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-primary mb-2">Why Choose ScaleWeb</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Our platform provides everything you need to build and grow your online presence.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Fast Deployment</h3>
              <p className="text-gray-600 text-center">Launch your website in minutes, not days. Our streamlined process gets you online quickly.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Affordable Pricing</h3>
              <p className="text-gray-600 text-center">Flexible plans that grow with your business. Pay only for what you need, with no hidden fees.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Fully Customizable</h3>
              <p className="text-gray-600 text-center">Personalize every aspect of your site with our intuitive templates — no coding required.</p>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="mt-12 text-center">
            <button className="px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-primary/90 transition-colors font-medium">
              Explore All Features
            </button>
          </div>
        </div>
      </div>

      {/* Why Transform Business Into Digital World */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Image Column */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="relative">
                {/* Main Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa"
                    alt="Digital Transformation"
                    width={700}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 rounded-lg backdrop-blur-sm z-0 hidden md:block"></div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full backdrop-blur-sm z-0 hidden md:block"></div>
                
                {/* Stats Cards */}
                <div className="absolute top-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Average Growth</p>
                      <p className="text-lg font-bold text-gray-900">+147%</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 left-12 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Cost Reduction</p>
                      <p className="text-lg font-bold text-gray-900">-35%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content Column */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="max-w-xl">
                <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-3">DIGITAL TRANSFORMATION</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Transform Your Business Into The Digital World?</h3>
                
                <p className="text-gray-600 mb-8 text-lg">
                  In today&apos;s rapidly evolving marketplace, digital transformation is no longer optional—it&apos;s essential for business survival and growth.
                </p>
                
                {/* Benefits List */}
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-1">Enhanced Security</h4>
                      <p className="text-gray-600">Modern digital solutions offer advanced security features to protect your business data and customer information.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-1">Competitive Advantage</h4>
                      <p className="text-gray-600">Stay ahead of competitors by leveraging digital tools to enhance customer experience and operational efficiency.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-1">Increased Revenue</h4>
                      <p className="text-gray-600">Digital businesses typically see higher revenue growth through expanded market reach and new sales channels.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <button className="px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-primary/90 transition-colors font-medium inline-flex items-center">
                    Start Your Transformation
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {showTestimonials  && (
      <div className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Don&apos;t just take our word for it — hear from businesses who&apos;ve transformed their online presence with ScaleWeb.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl shadow-sm p-8 flex flex-col items-center text-center transition-all hover:shadow-md hover:-translate-y-1">
              <div className="relative w-20 h-20 mb-6 rounded-full overflow-hidden ring-4 ring-primary/10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" 
                  alt="Sarah Johnson" 
                  className="object-cover"
                  fill
                />
              </div>
              <div className="mb-4 text-primary">
                <svg className="w-8 h-8 mx-auto opacity-80" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <blockquote className="mb-4 text-gray-700">
                <p>&quot;ScaleWeb transformed our online presence in just days. The templates were gorgeous and the customer support was exceptional. Our conversion rate has increased by 40% since launch!&quot;</p>
              </blockquote>
              <div className="mt-auto">
                <p className="font-semibold text-gray-900">Sarah Johnson</p>
                <p className="text-sm text-gray-500">Marketing Director, Bright Ideas Co.</p>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl shadow-sm p-8 flex flex-col items-center text-center transition-all hover:shadow-md hover:-translate-y-1">
              <div className="relative w-20 h-20 mb-6 rounded-full overflow-hidden ring-4 ring-primary/10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" 
                  alt="David Chen" 
                  className="object-cover"
                  fill
                />
              </div>
              <div className="mb-4 text-primary">
                <svg className="w-8 h-8 mx-auto opacity-80" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <blockquote className="mb-4 text-gray-700">
                <p>&quot;As a small business owner, I needed an affordable yet professional website. ScaleWeb delivered beyond my expectations. The customization options allowed me to create exactly what I envisioned.&quot;</p>
              </blockquote>
              <div className="mt-auto">
                <p className="font-semibold text-gray-900">David Chen</p>
                <p className="text-sm text-gray-500">Owner, Urban Fitness Studio</p>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white rounded-xl shadow-sm p-8 flex flex-col items-center text-center transition-all hover:shadow-md hover:-translate-y-1">
              <div className="relative w-20 h-20 mb-6 rounded-full overflow-hidden ring-4 ring-primary/10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                <Image
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e" 
                  alt="Emily Rodriguez" 
                  className="object-cover"
                  fill
                />
              </div>
              <div className="mb-4 text-primary">
                <svg className="w-8 h-8 mx-auto opacity-80" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <blockquote className="mb-4 text-gray-700">
                <p>&quot;The deployment speed was incredible. We launched our e-commerce store in less than a week, and the mobile responsiveness is flawless. Our customers love the shopping experience!&quot;</p>
              </blockquote>
              <div className="mt-auto">
                <p className="font-semibold text-gray-900">Emily Rodriguez</p>
                <p className="text-sm text-gray-500">CEO, Artisan Goods Co.</p>
              </div>
            </div>
          </div>
          
          {/* Trust Badges */}
          <div className="mt-20 text-center">
            <p className="text-sm uppercase tracking-wider text-gray-500 mb-6">Trusted by leading brands</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              <div className="w-24 h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
                <svg viewBox="0 0 124 34" className="h-6 w-auto" fill="currentColor">
                  <path d="M6.5 33L0 6.5 17 0l17 6.5-6.5 26.5H6.5zm9-7.5a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" />
                </svg>
              </div>
              <div className="w-24 h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
                <svg viewBox="0 0 124 34" className="h-6 w-auto" fill="currentColor">
                  <path d="M62 16.5c0 9.5-7.5 17-17 17s-17-7.5-17-17 7.5-17 17-17 17 7.5 17 17zM96 0v33h-9V23H73v10h-9V0h9v14h14V0h9z" />
                </svg>
              </div>
              <div className="w-24 h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
                <svg viewBox="0 0 124 34" className="h-7 w-auto" fill="currentColor">
                  <path d="M108 7c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zM0 7h12v4c2.2-2.6 5.4-4 9-4 3.4 0 6.5 1.2 9 3.5C32.5 8 35.6 7 39 7c4 0 7.5 1.4 10.2 4.2 2.7 2.8 4 6.4 4 11V33H41V23.5c0-2-.5-3.5-1.5-4.5-1-1.2-2.5-1.8-4.2-1.8-1.7 0-3.2.6-4.2 1.8-1 1-1.5 2.5-1.5 4.5V33H17V23.5c0-2-.5-3.5-1.5-4.5-1-1.2-2.5-1.8-4.2-1.8-1.7 0-3.2.6-4.2 1.8-1 1-1.5 2.5-1.5 4.5V33H0V7z" />
                </svg>
              </div>
              <div className="w-24 h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
                <svg viewBox="0 0 124 34" className="h-6 w-auto" fill="currentColor">
                  <path d="M72 17H52v16H37V1h35v16zm-62 0c0 9.3 7.2 17 16.5 17S43 26.3 43 17c0-9.2-7.2-16.7-16.5-16.7S10 7.8 10 17zM82 0h9l25 33H99l-4-5.5H78L74 33H57L82 0zm2 15l-4.5 6h9.5L84 15z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}

      {/* Call to Action Section */}
      <div className="relative py-20 bg-gradient-to-r from-primary to-secondary overflow-hidden">
        {/* Background Design Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute -right-10 top-10 w-60 h-60 rounded-full bg-white blur-3xl"></div>
          <div className="absolute left-0 bottom-0 w-40 h-40 rounded-full bg-white blur-3xl"></div>
          <svg className="absolute left-0 top-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="diagonalHatch" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="40" stroke="white" strokeWidth="1" opacity="0.1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonalHatch)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 text-center md:text-left">
            <div className="md:max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Ready to launch your website?</h2>
              <p className="text-white/80 text-lg md:text-xl">
                Get started today and have your professional website live in just a few days.
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex justify-center md:justify-end">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-primary bg-white rounded-lg shadow-lg hover:bg-gray-50 transform transition-all hover:scale-105 hover:shadow-xl"
              >
                <span>Talk to Us Today</span>
                <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
