
import React, { useEffect } from 'react';
import { Check, Award, Users, ShieldCheck, Leaf, Truck, Package } from 'lucide-react';
import Layout from '../components/layout/Layout';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollReveal from '../components/common/ScrollReveal';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Us - AGROVITAL EXPORTS";
  }, []);

  const values = [
    { icon: ShieldCheck, title: "Quality", description: "We maintain the highest standards in all our products and processes." },
    { icon: Leaf, title: "Sustainability", description: "Committed to environmentally responsible farming and business practices." },
    { icon: Truck, title: "Reliability", description: "Consistent and dependable service for all our global partners." },
    { icon: Package, title: "Innovation", description: "Continuously improving our products and processes to meet evolving market needs." }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Agricultural field" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <ScrollReveal>
            <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Story
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Learn about AGROVITAL EXPORTS, our journey, mission, and commitment to quality.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="slideInLeft">
              <div className="space-y-6">
                <SectionHeading 
                  title="Who We Are" 
                  subtitle="AGROVITAL EXPORTS PRIVATE LIMITED is a leading exporter of premium agricultural products from India to global markets."
                />
                <p className="text-gray-600">
                  Founded with a vision to showcase India's agricultural excellence to the world, we've grown from a mango export specialist to a comprehensive agricultural export company. With over 6 years of experience in the industry, we've established strong partnerships with farmers, distributors, and clients worldwide.
                </p>
                <p className="text-gray-600">
                  Our extensive product portfolio includes premium mangoes, diverse fruits, high-quality rice, nutritious pulses, authentic spices, and nutrient-rich millets. Each product is carefully sourced, processed, and packaged to meet international quality standards.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="slideInRight">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1618677603286-0ec56cb6e1b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Agricultural workers" 
                  className="rounded-lg shadow-xl w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg hidden md:block">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Award className="text-agro-gold h-6 w-6 mr-2" />
                      <span className="font-semibold">Certified Exporter</span>
                    </div>
                    <p className="text-sm text-gray-600">International Quality Standards</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <ScrollReveal>
            <SectionHeading 
              title="Our Mission & Vision" 
              subtitle="Guided by clear principles to deliver excellence in agricultural exports." 
              center
            />
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <ScrollReveal animation="slideInLeft">
              <div className="bg-white p-8 rounded-xl shadow-md h-full">
                <h3 className="text-2xl font-bold mb-4 text-agro-leaf">Our Mission</h3>
                <p className="text-gray-600 mb-6">
                  To connect global markets with India's premium agricultural products while ensuring sustainable practices, supporting farming communities, and delivering exceptional value to our clients.
                </p>
                <ul className="space-y-3">
                  {[
                    "Uphold the highest quality standards",
                    "Maintain transparent business practices",
                    "Support sustainable farming methods",
                    "Create value for farmers and partners"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-agro-leaf mr-2 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="slideInRight">
              <div className="bg-white p-8 rounded-xl shadow-md h-full">
                <h3 className="text-2xl font-bold mb-4 text-agro-mango">Our Vision</h3>
                <p className="text-gray-600 mb-6">
                  To be the most trusted global ambassador for Indian agricultural excellence, recognized for quality, sustainability, and innovation in the international marketplace.
                </p>
                <ul className="space-y-3">
                  {[
                    "Establish India as a premium agricultural source",
                    "Expand our product portfolio strategically",
                    "Innovate in preservation and packaging technologies",
                    "Create lasting partnerships across continents"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-agro-mango mr-2 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container-custom">
          <ScrollReveal>
            <SectionHeading 
              title="Our Core Values" 
              subtitle="The principles that guide our operations and relationships with farmers, partners, and clients." 
              center
            />
          </ScrollReveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((value, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 h-full hover:border-agro-gold/30 hover:shadow-lg transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-agro-leaf/10 rounded-lg text-agro-leaf mb-4">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Optional */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <ScrollReveal>
            <SectionHeading 
              title="Meet Our Team" 
              subtitle="The dedicated professionals behind AGROVITAL's success story." 
              center
            />
          </ScrollReveal>
          
          <div className="flex justify-center mb-8">
            <Users className="h-16 w-16 text-agro-leaf opacity-20" />
          </div>
          
          <ScrollReveal>
            <p className="text-center text-gray-600 max-w-3xl mx-auto">
              Our team comprises experienced professionals in agriculture, food processing, quality control, logistics, and international trade. With their combined expertise, we ensure that every aspect of our operation meets the highest standards of excellence.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="container-custom">
          <ScrollReveal>
            <SectionHeading 
              title="Quality Certifications" 
              subtitle="We adhere to international standards and certifications to ensure the highest quality in all our products." 
              center
            />
          </ScrollReveal>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {['FSSAI', 'ISO 22000', 'APEDA', 'Organic Certification'].map((cert, index) => (
              <ScrollReveal key={cert} delay={index * 100}>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center hover:border-agro-gold/30 hover:shadow-lg transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-agro-leaf/10 rounded-full text-agro-leaf mb-4">
                    <Award className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold">{cert}</h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
