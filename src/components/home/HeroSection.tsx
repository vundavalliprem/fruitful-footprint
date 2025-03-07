
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1621939514649-280e2ee25f60?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Farm field with mangoes" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 py-20">
        <div className="max-w-3xl opacity-0 animate-fadeIn" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
          <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full mb-4 animate-fadeIn" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
            Premium Agricultural Exports
          </span>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight opacity-0 animate-fadeIn" style={{ animationDelay: '900ms', animationFillMode: 'forwards' }}>
            From India's Finest Farms <br />To The World
          </h1>
          
          <p className="text-xl text-white/90 mb-8 max-w-lg opacity-0 animate-fadeIn" style={{ animationDelay: '1200ms', animationFillMode: 'forwards' }}>
            AGROVITAL EXPORTS delivers premium-quality mangoes and agricultural products with commitment to excellence and sustainability.
          </p>
          
          <div className="flex flex-wrap gap-4 opacity-0 animate-fadeIn" style={{ animationDelay: '1500ms', animationFillMode: 'forwards' }}>
            <Link to="/products" className="bg-agro-leaf hover:bg-agro-leaf/90 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center group">
              Explore Products <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/contact" className="bg-white hover:bg-white/90 text-agro-leaf px-6 py-3 rounded-md font-medium transition-all duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scrolling indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 animate-fadeIn" style={{ animationDelay: '2000ms', animationFillMode: 'forwards' }}>
        <span className="text-white/80 text-sm mb-2">Scroll to discover</span>
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full animate-[bounce_1.5s_infinite]"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
