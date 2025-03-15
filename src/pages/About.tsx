
import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollReveal from '../components/common/ScrollReveal';
import { Shield, Award, Globe, Leaf, Sprout, Users } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import Footer from '../components/layout/Footer';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Us - AGROVITAL EXPORTS";
  }, []);

  // Team members data
  const teamMembers = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      bio: "With over 15 years in agricultural exports, Rajesh has built AGROVITAL from the ground up.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Priya Sharma",
      role: "Head of Operations",
      bio: "Priya ensures that every shipment meets our stringent quality standards before export.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Vikram Singh",
      role: "International Relations",
      bio: "Vikram manages our global partnerships and ensures regulatory compliance in all markets.",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Ananya Patel",
      role: "Farmer Network Manager",
      bio: "Ananya works directly with our network of farmers to implement sustainable farming practices.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

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

      {/* Team Section - Enhanced with modern card design */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <ScrollReveal animation="fadeIn">
            <SectionHeading
              title="Meet Our Team"
              subtitle="The passionate experts behind AGROVITAL's success"
              center={true}
            />
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <ScrollReveal key={member.name} animation="zoomIn" delay={100 * index}>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative overflow-hidden h-56">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-bold text-xl">{member.name}</h3>
                      <p className="text-white/80 font-medium">{member.role}</p>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <p className="text-gray-600">{member.bio}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications - Enhanced with modern interactive design */}
      <section className="py-16">
        <div className="container-custom">
          <ScrollReveal animation="fadeIn">
            <SectionHeading
              title="Our Certifications"
              subtitle="Meeting global standards of quality and safety"
              center={true}
            />
          </ScrollReveal>
          
          <div className="mt-12">
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 text-gray-700 font-medium">
                  <span className="text-agro-leaf mr-2">•</span> All Certifications
                </button>
                <button className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 text-gray-700 font-medium">
                  <span className="text-agro-leaf mr-2">•</span> Quality Standards
                </button>
                <button className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 text-gray-700 font-medium">
                  <span className="text-agro-leaf mr-2">•</span> Organic
                </button>
                <button className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 text-gray-700 font-medium">
                  <span className="text-agro-leaf mr-2">•</span> Fair Trade
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ScrollReveal animation="zoomIn" delay={100}>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center h-full">
                  <div className="relative mb-4 w-24 h-24 flex items-center justify-center">
                    <div className="absolute inset-0 bg-green-100 rounded-full animate-pulse opacity-50"></div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/USDA_organic_seal.svg/240px-USDA_organic_seal.svg.png" alt="USDA Organic" className="h-20 w-auto relative z-10" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">USDA Organic</h3>
                  <p className="text-gray-600">Our products meet the stringent USDA organic standards, ensuring no harmful chemicals.</p>
                  <span className="mt-4 text-xs px-3 py-1 bg-green-100 text-green-800 rounded-full font-medium">
                    Verified & Current
                  </span>
                </div>
              </ScrollReveal>
              
              <ScrollReveal animation="zoomIn" delay={200}>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center h-full">
                  <div className="relative mb-4 w-24 h-24 flex items-center justify-center">
                    <div className="absolute inset-0 bg-blue-100 rounded-full animate-pulse opacity-50"></div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Fairtrade_Certification_Mark.svg/240px-Fairtrade_Certification_Mark.svg.png" alt="Fair Trade Certified" className="h-20 w-auto relative z-10" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">Fair Trade Certified</h3>
                  <p className="text-gray-600">We ensure fair wages and sustainable farming practices with our partner farmers.</p>
                  <span className="mt-4 text-xs px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-medium">
                    Verified & Current
                  </span>
                </div>
              </ScrollReveal>
              
              <ScrollReveal animation="zoomIn" delay={300}>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center h-full">
                  <div className="relative mb-4 w-24 h-24 flex items-center justify-center">
                    <div className="absolute inset-0 bg-yellow-100 rounded-full animate-pulse opacity-50"></div>
                    <img src="https://www.tuv.com/content-media-files/master-content/services/product-testing-and-certification/0-tuv-rheinland-certification-marks/global-g-a-p/tuev-rheinland-global-g-a-p-logo.png" alt="GlobalG.A.P Certified" className="h-20 w-auto relative z-10" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">GlobalG.A.P Certified</h3>
                  <p className="text-gray-600">Our farms follow Good Agricultural Practices for safe and sustainable production.</p>
                  <span className="mt-4 text-xs px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full font-medium">
                    Verified & Current
                  </span>
                </div>
              </ScrollReveal>
              
              <ScrollReveal animation="zoomIn" delay={400}>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center h-full">
                  <div className="relative mb-4 w-24 h-24 flex items-center justify-center">
                    <div className="absolute inset-0 bg-red-100 rounded-full animate-pulse opacity-50"></div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/FSSAI_logo.svg/240px-FSSAI_logo.svg.png" alt="FSSAI Certified" className="h-20 w-auto relative z-10" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">FSSAI Certified</h3>
                  <p className="text-gray-600">We comply with all food safety standards set by the Food Safety and Standards Authority of India.</p>
                  <span className="mt-4 text-xs px-3 py-1 bg-red-100 text-red-800 rounded-full font-medium">
                    Verified & Current
                  </span>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

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
      
      <Footer />
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
