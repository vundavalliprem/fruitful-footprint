
import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollReveal from '../components/common/ScrollReveal';
import { Shield, Award, Globe, Leaf, Sprout, Users } from 'lucide-react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Us - AGROVITAL EXPORTS";
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-r from-agro-leaf/90 to-agro-leaf">
        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        <div className="container-custom relative">
          <ScrollReveal animation="fadeIn" threshold={0.1}>
            <SectionHeading
              title="About AGROVITAL EXPORTS"
              subtitle="The story of our journey to global agricultural excellence"
              light={true}
              center={true}
            />
          </ScrollReveal>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="slideInLeft">
              <img 
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Farmers in mango orchard" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </ScrollReveal>
            
            <div className="space-y-6">
              <ScrollReveal animation="fadeIn" delay={200}>
                <h3 className="text-2xl font-bold">Our Story</h3>
                <div className="h-1 w-20 bg-agro-gold rounded my-4"></div>
                
                <p className="text-gray-700">
                  Founded over 6 years ago, AGROVITAL EXPORTS began as a specialized exporter of premium mangoes from India's finest orchards. What started as a passion for bringing India's exquisite alphonso and kesar mangoes to the world has evolved into a comprehensive agricultural export enterprise.
                </p>
                <p className="text-gray-700">
                  Our journey has been driven by a commitment to quality, sustainability, and building lasting relationships with farmers and global clients alike. Over the years, we've expanded our portfolio to include a diverse range of agricultural products, while maintaining the same dedication to excellence that defined our beginnings.
                </p>
                <p className="text-gray-700">
                  Today, AGROVITAL EXPORTS stands as a trusted name in agricultural exports, with a presence in over 20 countries across 4 continents. Our success stems from our deep understanding of both local farming practices and international market standards.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <ScrollReveal animation="fadeIn">
            <SectionHeading
              title="Our Mission & Vision"
              subtitle="Guided by purpose, driven by excellence"
              center={true}
            />
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <ScrollReveal animation="slideInLeft" delay={200}>
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-agro-leaf">Our Mission</h3>
                <p className="text-gray-700">
                  To bridge the gap between India's agricultural abundance and global markets through sustainable practices, stringent quality control, and mutually beneficial partnerships with farmers and international clients.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="slideInRight" delay={400}>
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-agro-mango">Our Vision</h3>
                <p className="text-gray-700">
                  To be recognized globally as the most trusted exporter of premium Indian agricultural products, setting industry standards for quality, innovation, and ethical business practices while contributing to sustainable agricultural development.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <ScrollReveal animation="fadeIn">
            <SectionHeading
              title="Our Core Values"
              subtitle="Principles that guide every aspect of our business"
              center={true}
            />
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <ScrollReveal animation="zoomIn" delay={100}>
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full">
                <div className="rounded-full bg-agro-leaf/10 w-14 h-14 flex items-center justify-center mb-4">
                  <Quality className="text-agro-leaf h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Quality Excellence</h3>
                <p className="text-gray-600">
                  We never compromise on quality, ensuring that every product that leaves our facility meets the highest international standards.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="zoomIn" delay={200}>
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full">
                <div className="rounded-full bg-agro-leaf/10 w-14 h-14 flex items-center justify-center mb-4">
                  <Leaf className="text-agro-leaf h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Sustainability</h3>
                <p className="text-gray-600">
                  We are committed to environmentally responsible practices throughout our supply chain, from farm to shipping.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="zoomIn" delay={300}>
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full">
                <div className="rounded-full bg-agro-leaf/10 w-14 h-14 flex items-center justify-center mb-4">
                  <Users className="text-agro-leaf h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Farmer Partnerships</h3>
                <p className="text-gray-600">
                  We build long-term, equitable relationships with our farmer network, ensuring fair compensation and knowledge sharing.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="zoomIn" delay={400}>
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full">
                <div className="rounded-full bg-agro-leaf/10 w-14 h-14 flex items-center justify-center mb-4">
                  <Globe className="text-agro-leaf h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Global Standards</h3>
                <p className="text-gray-600">
                  We adhere to international certifications and standards in processing, packaging, and transportation.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="zoomIn" delay={500}>
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full">
                <div className="rounded-full bg-agro-leaf/10 w-14 h-14 flex items-center justify-center mb-4">
                  <Award className="text-agro-leaf h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Innovation</h3>
                <p className="text-gray-600">
                  We constantly seek better methods in cultivation, preservation, and logistics to deliver the freshest products to our global clients.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="zoomIn" delay={600}>
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full">
                <div className="rounded-full bg-agro-leaf/10 w-14 h-14 flex items-center justify-center mb-4">
                  <Shield className="text-agro-leaf h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Integrity</h3>
                <p className="text-gray-600">
                  We conduct business with transparency, honesty, and ethical practices, building trust with all our stakeholders.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <ScrollReveal animation="fadeIn">
            <SectionHeading
              title="Our Certifications"
              subtitle="Meeting global standards of quality and safety"
              center={true}
            />
          </ScrollReveal>
          
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <ScrollReveal animation="zoomIn" delay={100}>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col items-center justify-center text-center w-[280px]">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/USDA_organic_seal.svg/240px-USDA_organic_seal.svg.png" alt="USDA Organic" className="h-24 w-auto mb-4" />
                <h3 className="text-lg font-bold mb-1">USDA Organic</h3>
                <p className="text-gray-600 text-sm">Certified organic products meeting USDA standards</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="zoomIn" delay={200}>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col items-center justify-center text-center w-[280px]">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Fairtrade_Certification_Mark.svg/240px-Fairtrade_Certification_Mark.svg.png" alt="Fair Trade Certified" className="h-24 w-auto mb-4" />
                <h3 className="text-lg font-bold mb-1">Fair Trade Certified</h3>
                <p className="text-gray-600 text-sm">Committed to fair wages and sustainable farming</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="zoomIn" delay={300}>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col items-center justify-center text-center w-[280px]">
                <img src="https://www.tuv.com/content-media-files/master-content/services/product-testing-and-certification/0-tuv-rheinland-certification-marks/global-g-a-p/tuev-rheinland-global-g-a-p-logo.png" alt="GlobalG.A.P Certified" className="h-24 w-auto mb-4" />
                <h3 className="text-lg font-bold mb-1">GlobalG.A.P Certified</h3>
                <p className="text-gray-600 text-sm">Good Agricultural Practices certification</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="zoomIn" delay={400}>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col items-center justify-center text-center w-[280px]">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/FSSAI_logo.svg/240px-FSSAI_logo.svg.png" alt="FSSAI Certified" className="h-24 w-auto mb-4" />
                <h3 className="text-lg font-bold mb-1">FSSAI Certified</h3>
                <p className="text-gray-600 text-sm">Food Safety and Standards Authority of India</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Team section could be added here if needed */}

      {/* CTA Section */}
      <section className="py-16 bg-agro-leaf text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <ScrollReveal animation="fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
              <p className="text-white/90 text-lg mb-8">
                Discover how AGROVITAL EXPORTS can help bring premium agricultural products from India to your market.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="bg-white text-agro-leaf px-6 py-3 rounded-md font-medium transition-all duration-300 hover:bg-white/90 hover:shadow-lg">
                  Contact Us
                </a>
                <a href="/request-quote" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-medium transition-all duration-300 hover:bg-white/10 hover:shadow-lg">
                  Request a Quote
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// Missing icon component
const Quality = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 2L9.5 7 4 8l4 4-1 5.5L12 15l5 2.5L16 13l4-4-5.5-1z" />
  </svg>
);

export default About;
