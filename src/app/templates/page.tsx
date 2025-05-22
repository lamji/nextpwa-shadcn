
"use client"
import React from 'react';
import Image from 'next/image';

// Define the template item type
type TemplateItem = {
  id: string;
  title: string;
  code: string;
  description: string;
  imageUrl: string;
  category: string;
  link: string;
};

// Sample data for templates
const templates: TemplateItem[] = [
  {
    id: '1',
    title: 'Nebula Dashboard',
    code: 'SWT-001',
    description: 'Modern admin dashboard with dark mode and real-time analytics features.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&h=600&auto=format&fit=crop',
    category: 'Admin',
    link: 'https://template-demo.scaleweb.com/nebula-dashboard'
  },
  {
    id: '2',
    title: 'Quantum E-commerce',
    code: 'SWT-002',
    description: 'Sleek e-commerce template with dynamic product displays and smooth animations.',
    imageUrl: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=800&h=600&auto=format&fit=crop',
    category: 'E-commerce',
    link: 'https://template-demo.scaleweb.com/quantum-ecommerce'
  },
  {
    id: '3',
    title: 'Zenith Portfolio',
    code: 'SWT-003',
    description: 'Minimalist portfolio for creatives with immersive scrolling effects.',
    imageUrl: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=800&h=600&auto=format&fit=crop',
    category: 'Portfolio',
    link: 'https://template-demo.scaleweb.com/zenith-portfolio'
  },
  {
    id: '4',
    title: 'Pulsar Blog',
    code: 'SWT-004',
    description: 'Sophisticated blog template with advanced typography and reading features.',
    imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&h=600&auto=format&fit=crop',
    category: 'Blog',
    link: 'https://template-demo.scaleweb.com/pulsar-blog'
  },
  {
    id: '5',
    title: 'Eclipse Agency',
    code: 'SWT-005',
    description: 'Bold agency website with parallax sections and interactive elements.',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&h=600&auto=format&fit=crop',
    category: 'Agency',
    link: 'https://template-demo.scaleweb.com/eclipse-agency'
  },
  {
    id: '6',
    title: 'Nova Landing',
    code: 'SWT-006',
    description: 'High-conversion landing page with animated CTAs and testimonial showcases.',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&h=600&auto=format&fit=crop',
    category: 'Landing',
    link: 'https://template-demo.scaleweb.com/nova-landing'
  },
  {
    id: '7',
    title: 'Orion Events',
    code: 'SWT-007',
    description: 'Event management template with ticket systems and scheduling features.',
    imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&h=600&auto=format&fit=crop',
    category: 'Events',
    link: 'https://template-demo.scaleweb.com/orion-events'
  },
  {
    id: '8',
    title: 'Cosmos SaaS',
    code: 'SWT-008',
    description: 'Feature-rich SaaS template with pricing tables and onboarding flows.',
    imageUrl: 'https://images.unsplash.com/photo-1581472723648-909f4851d4ae?q=80&w=800&h=600&auto=format&fit=crop',
    category: 'SaaS',
    link: 'https://template-demo.scaleweb.com/cosmos-saas'
  }
];

// Categories for filtering
const categories = ['All', ...Array.from(new Set(templates.map(t => t.category)))];

export default function TemplateGallery() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchQuery, setSearchQuery] = React.useState('');
  
  // Filter templates based on selected category and search query
  const filteredTemplates = React.useMemo(() => {
    let results = templates;
    
    // First filter by category
    if (selectedCategory !== 'All') {
      results = results.filter(template => template.category === selectedCategory);
    }
    
    // Then filter by search query if it exists
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      results = results.filter(template => 
        template.title.toLowerCase().includes(query) ||
        template.description.toLowerCase().includes(query) ||
        template.category.toLowerCase().includes(query) ||
        template.code.toLowerCase().includes(query)
      );
    }
    
    return results;
  }, [selectedCategory, searchQuery]);
  
  // Handle search input
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
  return (
    <main className="min-h-screen">
      {/* Hero Section with Glassmorphism */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-secondary opacity-90"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>
        
        {/* Abstract geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Triangles */}
          <div className="absolute top-[15%] left-[10%] w-20 h-20 bg-white/10 rotate-45 backdrop-blur-sm border border-white/20 animate-float"></div>
          <div className="absolute top-[25%] right-[15%] w-32 h-32 border-l-[40px] border-t-[40px] border-white/10 rotate-12 animate-float animation-delay-2000"></div>
          <div className="absolute bottom-[30%] left-[20%] w-0 h-0 border-l-[30px] border-r-[30px] border-b-[50px] border-l-transparent border-r-transparent border-b-white/10 rotate-12 animate-pulse animation-delay-1000"></div>
          
          {/* Squares/Rectangles */}
          <div className="absolute bottom-[20%] right-[25%] w-16 h-16 bg-white/5 rotate-12 backdrop-blur-md border border-white/10 animate-float animation-delay-3000"></div>
          <div className="absolute top-[40%] left-[25%] w-24 h-12 bg-white/5 -rotate-12 backdrop-blur-sm border border-white/20 animate-spin-slow"></div>
          <div className="absolute top-[10%] right-[30%] w-10 h-40 bg-white/5 rotate-45 backdrop-blur-sm animate-float animation-delay-4000"></div>
          
          {/* Circle and ring */}
          <div className="absolute bottom-[15%] left-[15%] w-20 h-20 rounded-full border-4 border-white/10 rotate-45 animate-spin-slow animation-delay-2000"></div>
          <div className="absolute top-[60%] right-[10%] w-16 h-16 rounded-full bg-white/5 backdrop-blur-md animate-pulse animation-delay-3000"></div>
        </div>
        
        {/* Hero content */}
        <div className="relative container mx-auto px-6 py-12 flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
              ScaleWeb Template Gallery
            </span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-blue-100 mb-8">
            Explore our collection of futuristic and responsive web templates 
            designed for modern businesses and creative professionals.
          </p>
          
          {/* Glassmorphism search bar */}
          <div className="w-full max-w-lg backdrop-blur-md bg-white/10 border border-white/20 rounded-full p-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search templates..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-full px-6 py-3 bg-transparent rounded-full text-white placeholder-blue-200 outline-none"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-white/20 hover:bg-white/30 transition rounded-full">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-white" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter Section */}
      <section className="container mx-auto px-6 py-8">
        <div className="flex overflow-x-auto scrollbar-hide space-x-4 pb-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full backdrop-blur-sm border transition-all duration-300 whitespace-nowrap font-medium ${
                selectedCategory === category 
                  ? 'bg-primary text-white shadow-md shadow-primary/20 border-transparent scale-105' 
                  : 'bg-primary/5 text-primary/80 border-primary/20 hover:bg-primary/10 hover:border-primary/30'
              }`}
            >
              {category}
              {selectedCategory === category && (
                <span className="ml-2 inline-flex items-center justify-center w-5 h-5 text-xs bg-white text-primary rounded-full">
                  {category === 'All' 
                    ? templates.length 
                    : templates.filter(t => t.category === category).length
                  }
                </span>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Templates Grid Section */}
      <section className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredTemplates.map((template) => (
            <div 
              key={template.id}
              className="group relative overflow-hidden transition-all duration-300"
            >
              <div className="relative rounded-2xl overflow-hidden backdrop-blur-md bg-white/[0.06] dark:bg-black/[0.06] border border-white/20 shadow-[0_0_20px_rgba(0,0,0,0.02)] group-hover:shadow-[0_10px_40px_rgba(0,0,0,0.12)] transition-all duration-500 group-hover:scale-[1.02]">
                {/* Image container */}
                <a 
                  href={template.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative block aspect-[4/3] overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-10"></div>
                  <div className="w-full h-full relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
                    {/* Random Unsplash image */}
                    <Image 
                      src={template.imageUrl} 
                      alt={template.title}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </a>
                
                {/* Template info */}
                <div className="p-7">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex-1">
                      <h3 className="text-xl font-medium text-gray-800 dark:text-white group-hover:text-primary transition-colors duration-300">
                        {template.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1.5 text-xs">
                        <span className="font-medium text-gray-500 dark:text-gray-400">{template.code}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                        <span className="font-medium text-gray-500 dark:text-gray-400">{template.category}</span>
                      </div>
                    </div>
                   
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-5">
                    {template.description}
                  </p>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-800">
                    <div className="flex gap-1">
                      {['HTML5', 'CSS3', 'JS'].map((tech, i) => (
                        <span key={i} className="px-2 py-1 text-[10px] uppercase tracking-wider font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  
                    <a 
                      href={template.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-primary hover:text-primary/90 transition-colors duration-300 flex items-center gap-1"
                    >
                      <span>View</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="relative rounded-2xl overflow-hidden">
          {/* Background gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"></div>
          
          {/* Glassmorphism effect */}
          <div className="absolute inset-0 backdrop-blur-sm bg-white/5"></div>
          
          {/* Glowing accents */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          
          <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need a Custom Template?</h2>
              <p className="text-blue-200 max-w-lg">
                We can build a personalized solution tailored to your specific business needs and brand identity.
              </p>
            </div>
            
            <a 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 rounded-full bg-white text-primary font-medium hover:bg-blue-50 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            >
              <span>Get a Custom Quote</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
