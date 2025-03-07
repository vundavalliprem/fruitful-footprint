
import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Globe, Package } from 'lucide-react';
import ScrollReveal from '../common/ScrollReveal';

const AboutPreview = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal animation="slideInLeft">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1591028027917-d5ef5134ef67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Mango farm" 
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg hidden md:block">
                <div className="flex items-center justify-center w-full h-full">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-agro-leaf">6+</p>
                    <p className="text-gray-600">Years of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="slideInRight">
            <div className="space-y-6">
              <span className="inline-block px-3 py-1 bg-agro-leaf/10 text-agro-leaf rounded-full text-sm font-medium">
                About AGROVITAL
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">Leading Agricultural Exports from the Heart of India</h2>
              <p className="text-gray-600">
                AGROVITAL EXPORTS PRIVATE LIMITED is a premier exporter of high-quality mangoes and diverse agricultural products. With over 6 years of experience, we've built a reputation for excellence, quality, and reliability in global markets.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
                <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg bg-white">
                  <Award className="text-agro-leaf h-8 w-8 mb-2" />
                  <h3 className="font-semibold">Premium Quality</h3>
                </div>
                <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg bg-white">
                  <Globe className="text-agro-leaf h-8 w-8 mb-2" />
                  <h3 className="font-semibold">Global Reach</h3>
                </div>
                <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg bg-white">
                  <Package className="text-agro-leaf h-8 w-8 mb-2" />
                  <h3 className="font-semibold">Reliable Delivery</h3>
                </div>
              </div>
              
              <Link to="/about" className="inline-block mt-4 px-6 py-3 bg-agro-leaf text-white font-medium rounded-md hover:bg-agro-leaf/90 transition-colors">
                Discover Our Story
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
