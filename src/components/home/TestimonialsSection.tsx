
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../common/ScrollReveal';

// Testimonial data
const testimonials = [
  {
    id: 1,
    text: "AGROVITAL has been our trusted supplier of premium mangoes for over 3 years. Their consistent quality and reliability have helped us maintain our market reputation.",
    author: "John Mitchell",
    position: "Import Manager",
    company: "FreshFruits Inc., USA"
  },
  {
    id: 2,
    text: "The quality of rice and spices we import from AGROVITAL is exceptional. Their commitment to timely delivery and excellent customer service makes them our preferred partner.",
    author: "Ahmed Al-Farsi",
    position: "Procurement Director",
    company: "Global Foods, UAE"
  },
  {
    id: 3,
    text: "We've been impressed with the premium quality of AGROVITAL's organic millets and pulses. Their products meet our strict quality standards and always arrive in perfect condition.",
    author: "Sarah Wong",
    position: "Head of Imports",
    company: "Natural Foods Co., Singapore"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <ScrollReveal>
          <SectionHeading 
            title="What Our Clients Say" 
            subtitle="Hear from businesses around the world who trust AGROVITAL for their agricultural import needs." 
            center
          />
        </ScrollReveal>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id} 
                    className="min-w-full px-4"
                  >
                    <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg">
                      <Quote className="h-10 w-10 text-agro-gold opacity-20 mb-4" />
                      <p className="text-lg md:text-xl italic text-gray-700 mb-6">
                        "{testimonial.text}"
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-agro-leaf/10 rounded-full flex items-center justify-center text-agro-leaf font-bold">
                          {testimonial.author.split(' ').map(name => name[0]).join('')}
                        </div>
                        <div className="ml-4">
                          <h4 className="font-medium">{testimonial.author}</h4>
                          <p className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation controls */}
            <button 
              onClick={prevTestimonial}
              className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 md:-translate-x-6 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-800 hover:bg-gray-50 focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 md:translate-x-6 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-800 hover:bg-gray-50 focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  currentIndex === index ? 'bg-agro-leaf' : 'bg-gray-300'
                } transition-colors duration-300`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
