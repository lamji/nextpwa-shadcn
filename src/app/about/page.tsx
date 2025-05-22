'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Globe, Award, Users, Code, TrendingUp, MessageSquare } from 'lucide-react';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      bio: 'Former Google developer with 15+ years experience in web technologies.',
    },
    {
      name: 'David Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      bio: 'Full-stack developer specializing in scalable architecture and performance optimization.',
    },
    {
      name: 'Maya Patel',
      role: 'Lead Designer',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      bio: 'Award-winning UI/UX designer with a passion for creating intuitive user experiences.',
    },
    {
      name: 'James Wilson',
      role: 'Project Manager',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      bio: 'Certified project manager with experience delivering complex web projects on time and on budget.',
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary/70 text-white py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMCAxLjEwNC0uODk2IDItMiAycy0yLS44OTYtMi0yIC44OTYtMiAyLTIgMiAuODk2IDIgMnptMC0xOGMwIDEuMTA0LS44OTYgMi0yIDJzLTItLjg5Ni0yLTIgLjg5Ni0yIDItMiAyIC44OTYgMiAyem0tMTggMThjMCAxLjEwNC0uODk2IDItMiAycy0yLS44OTYtMi0yIC44OTYtMiAyLTIgMiAuODk2IDIgMnptMC0xOGMwIDEuMTA0LS44OTYgMi0yIDJzLTItLjg5Ni0yLTIgLjg5Ni0yIDItMiAyIC44OTYgMiAyem0xOCA5YzAgMS4xMDQtLjg5NiAyLTIgMnMtMi0uODk2LTItMiAuODk2LTIgMi0yIDIgLjg5NiAyIDJ6bS0xOCAwYzAgMS4xMDQtLjg5NiAyLTIgMnMtMi0uODk2LTItMiAuODk2LTIgMi0yIDIgLjg5NiAyIDJ6bTM2LTE4YzAgMS4xMDQtLjg5NiAyLTIgMnMtMi0uODk2LTItMiAuODk2LTIgMi0yIDIgLjg5NiAyIDJ6bTAtMThjMCAxLjEwNC0uODk2IDItMiAycy0yLS44OTYtMi0yIC44OTYtMiAyLTIgMiAuODk2IDIgMnptLTE4IDBjMCAxLjEwNC0uODk2IDItMiAycy0yLS44OTYtMi0yIC44OTYtMiAyLTIgMiAuODk2IDIgMnptMC0xOGMwIDEuMTA0LS44OTYgMi0yIDJzLTItLjg5Ni0yLTIgLjg5Ni0yIDItMiAyIC44OTYgMiAyeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+')]">
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">We are ScaleWeb</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 opacity-90">
            Transforming businesses through innovative web solutions and digital experiences
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors shadow-md"
            >
              Get in Touch
            </Link>
            <Link 
              href="#our-work" 
              className="bg-transparent hover:bg-white/10 border border-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white" id="our-story">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2">
              <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-3">OUR STORY</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">From Start-up to Industry Leader</h3>
              
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-4">
                  Founded in 2025, ScaleWeb began with a simple mission: to make powerful web technology accessible to businesses of all sizes. What started as a small team of passionate developers has grown into a full-service digital agency.
                </p>
                <p className="mb-4">
                  We will help companies across diverse industries transform their digital presence and achieve remarkable growth. Our client-first approach and commitment to innovation have established us as a trusted partner for businesses worldwide.
                </p>
                <p>
                  Today, we&apos;re proud to be at the forefront of web development, constantly exploring new technologies and methodologies to deliver exceptional results for our clients.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                  alt="Team working together"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 rounded-lg backdrop-blur-sm z-0 hidden md:block"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full backdrop-blur-sm z-0 hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-3">OUR VALUES</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Drives Us Forward</h3>
            <p className="text-xl text-gray-600">
              Our core values shape everything we do and guide how we work with our clients and each other.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Award className="h-7 w-7 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">Excellence</h4>
              <p className="text-gray-600">
                We&apos;re committed to delivering exceptional quality in everything we create, constantly pushing boundaries and refining our craft.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">Collaboration</h4>
              <p className="text-gray-600">
                We believe in the power of teamwork and partnership, working closely with our clients to understand their unique needs and goals.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Code className="h-7 w-7 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">Innovation</h4>
              <p className="text-gray-600">
                We embrace new technologies and approaches, staying ahead of trends to deliver forward-thinking solutions for our clients.
              </p>
            </div>
            
            {/* Value 4 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <TrendingUp className="h-7 w-7 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">Growth</h4>
              <p className="text-gray-600">
                We&apos;re dedicated to helping our clients grow and succeed, measuring our own success by the results we deliver for them.
              </p>
            </div>
            
            {/* Value 5 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Globe className="h-7 w-7 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">Accessibility</h4>
              <p className="text-gray-600">
                We create inclusive digital experiences that are accessible to all users, regardless of ability or device.
              </p>
            </div>
            
            {/* Value 6 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <MessageSquare className="h-7 w-7 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">Transparency</h4>
              <p className="text-gray-600">
                We believe in honest, clear communication and maintaining open relationships with our clients throughout every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white" id="team">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-3">OUR TEAM</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Meet the Experts</h3>
            <p className="text-xl text-gray-600">
              Our talented team brings together diverse skills and expertise to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="aspect-w-1 aspect-h-1 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <p className="text-5xl font-bold mb-2">250+</p>
              <p className="text-lg opacity-90">Projects Completed</p>
            </div>
            <div className="p-6">
              <p className="text-5xl font-bold mb-2">15+</p>
              <p className="text-lg opacity-90">Industry Awards</p>
            </div>
            <div className="p-6">
              <p className="text-5xl font-bold mb-2">99%</p>
              <p className="text-lg opacity-90">Client Satisfaction</p>
            </div>
            <div className="p-6">
              <p className="text-5xl font-bold mb-2">7</p>
              <p className="text-lg opacity-90">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Digital Presence?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Let&apos;s discuss how we can help your business grow with our custom web solutions.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-medium transition-colors shadow-md text-lg"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
