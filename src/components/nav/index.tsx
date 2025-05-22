'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Templates', href: '/templates' },
  { name: 'Features', href: '/features' },
  { 
    name: 'Solutions', 
    href: '#',
    dropdown: [
      { name: 'Business', href: '/solutions/business' },
      { name: 'E-commerce', href: '/solutions/ecommerce' },
      { name: 'Portfolio', href: '/solutions/portfolio' },
      { name: 'Blog', href: '/solutions/blog' },
    ]
  },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' },
];

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to change nav appearance
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle dropdown visibility
  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className={`rounded-lg p-1 ${scrolled ? 'bg-primary/5' : 'bg-white/10'}`}>
              <Globe className={`h-6 w-6 ${scrolled ? 'text-primary' : 'text-white'}`} />
            </div>
            <div className="flex flex-col">
              <span className={`font-black text-xl tracking-tighter ${scrolled ? 'text-primary' : 'text-white'}`}>
                SW
              </span>
              <span className={`text-xs font-medium ${scrolled ? 'text-secondary' : 'text-white/80'}`}>
                ScaleWeb
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <button 
                    onClick={() => toggleDropdown(item.name)}
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      scrolled 
                        ? 'text-gray-700 hover:bg-gray-100' 
                        : 'text-white/90 hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      scrolled 
                        ? 'text-gray-700 hover:bg-gray-100' 
                        : 'text-white/90 hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
                
                {/* Dropdown */}
                {item.dropdown && (
                  <div className="absolute left-0 mt-2 w-48 origin-top-left rounded-md shadow-lg ring-1 ring-black ring-opacity-5 bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform scale-95 group-hover:scale-100">
                    <div className="py-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/get-started"
              className={`ml-4 px-4 py-2 rounded-md text-sm font-medium transition-all transform hover:scale-105 ${
                scrolled 
                  ? 'bg-primary text-white shadow-sm hover:bg-primary/90' 
                  : 'bg-white text-primary hover:bg-white/90'
              }`}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="lg:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${scrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${scrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-b-lg">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                    >
                      {item.name}
                      <ChevronDown className={`h-5 w-5 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Mobile Dropdown */}
                    {activeDropdown === item.name && (
                      <div className="pl-4 space-y-1 mt-1">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-md"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Mobile CTA Button */}
            <div className="pt-2">
              <Link
                href="/get-started"
                className="w-full flex items-center justify-center px-4 py-2 rounded-md text-base font-medium bg-primary text-white hover:bg-primary/90"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
