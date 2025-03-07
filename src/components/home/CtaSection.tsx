
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '../common/ScrollReveal';

const CtaSection = () => {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="relative rounded-2xl overflow-hidden">
          {/* Background image with overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1530176238587-b53132214c54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
              alt="Agricultural landscape" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-agro-leaf/90 mix-blend-multiply"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 py-16 px-6 md:px-12 text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Import Premium Agricultural Products?
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <p className="text-white/90 text-lg max-w-3xl mx-auto mb-8">
                Contact AGROVITAL EXPORTS today to discuss your requirements and discover how our premium-quality products can add value to your business.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact" className="bg-white text-agro-leaf font-medium px-8 py-4 rounded-md shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px] inline-flex items-center justify-center group">
                  Request a Quote <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/products" className="bg-transparent text-white border border-white font-medium px-8 py-4 rounded-md shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px] inline-block">
                  Explore Products
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
