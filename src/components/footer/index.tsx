'use client';

import React from 'react';
import Link from 'next/link';
import { Globe, ArrowRight, Facebook, ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section with Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Section */}
          <div>
            <div className="flex items-center mb-4">
              <div className="rounded-lg p-1 bg-primary/5 mr-2">
                <Globe className="h-5 w-5 text-primary" />
              </div>
              <span className="font-semibold text-xl text-gray-900">ScaleWeb</span>
            </div>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              Beautiful, modern websites that scale with your business. Launch faster with our comprehensive web solutions.
            </p>
            <div className="flex space-x-4">
              {/* <a href="https://twitter.com" aria-label="Twitter" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter size={18} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram size={18} />
              </a> */}
              <a href="https://facebook.com" aria-label="Facebook" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook size={18} />
              </a>
              {/* <a href="https://linkedin.com" aria-label="LinkedIn" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin size={18} />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium text-sm uppercase tracking-wider text-gray-500 mb-4">Products</h3>
            <ul className="space-y-2">
              {['Templates', 'Custom Websites', 'E-commerce', 'CMS'].map((item) => (
                <li key={item}>
                  <p className="text-gray-600 hover:text-primary transition-colors text-sm">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-medium text-sm uppercase tracking-wider text-gray-500 mb-4">Company</h3>
            <ul className="space-y-2">
              {['About', 'Blog'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-gray-600 hover:text-primary transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-medium text-sm uppercase tracking-wider text-gray-500 mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              {/* <li>
                <Link href="/help" className="text-gray-600 hover:text-primary transition-colors text-sm">
                  Help Center
                </Link>
              </li> */}
              <li>
                <Link href="/privacy-policy" className="text-gray-600 hover:text-primary transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-primary transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
            <div className="mt-6">
              <Link 
                href="/contact" 
                className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium"
              >
                Get in touch
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Newsletter Section - Apple-Inspired */}
        {/* <div className="border-t border-gray-200 pt-8 pb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Stay updated with ScaleWeb</h3>
            <p className="text-gray-600 mb-6 text-sm">
              Sign up for our newsletter to receive the latest updates, resources, and special offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
              />
              <button className="px-6 py-3 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div> */}

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col-reverse md:flex-row md:items-center md:justify-between">
          <div className="mt-6 md:mt-0">
            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()} ScaleWeb. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex space-x-4">
              {['Privacy', 'Terms', 'Cookies', 'Sitemap'].map((item) => (
                <Link 
                  key={item}
                  href={`/${item.toLowerCase()}`} 
                  className="text-gray-500 hover:text-gray-700 transition-colors text-xs"
                >
                  {item}
                </Link>
              ))}
            </div>
            <button 
              onClick={scrollToTop}
              className="ml-4 p-2 bg-gray-200 rounded-full text-gray-500 hover:bg-gray-300 transition-colors focus:outline-none"
              aria-label="Scroll to top"
            >
              <ChevronUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
