
import React from 'react';
import { Link } from 'react-router-dom';
import { Globe } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../common/ScrollReveal';

const GlobalReachPreview = () => {
  return (
    <section className="py-20 bg-agro-leaf text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <ScrollReveal>
          <SectionHeading 
            title="Our Global Reach" 
            subtitle="Delivering premium agricultural products to countries across the globe, establishing AGROVITAL as a trusted name in international trade." 
            center
            light
          />
        </ScrollReveal>
        
        <div className="flex justify-center mb-12">
          <Globe className="w-16 h-16 animate-float" />
        </div>
        
        <ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
            {['USA', 'UAE', 'UK', 'Singapore', 'Canada', 'Australia', 'Germany', 'France', 'Japan', 'Malaysia', 'Qatar', 'Saudi Arabia'].map((country, index) => (
              <div 
                key={country} 
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="font-medium text-white">{country}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
        
        <div className="text-center mt-12">
          <Link to="/global-reach" className="bg-white text-agro-leaf font-medium px-6 py-3 rounded-md shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-2px] inline-block">
            Explore Our Global Network
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GlobalReachPreview;
