
import React, { useEffect } from 'react';
import { Globe, MapPin, Ship, Plane } from 'lucide-react';
import Layout from '../components/layout/Layout';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollReveal from '../components/common/ScrollReveal';

const GlobalReach = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Global Reach - AGROVITAL EXPORTS";
  }, []);

  // List of countries where products are exported
  const exportCountries = [
    { region: 'North America', countries: ['United States', 'Canada'] },
    { region: 'Europe', countries: ['United Kingdom', 'Germany', 'France', 'Netherlands', 'Spain', 'Italy'] },
    { region: 'Middle East', countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Oman', 'Kuwait', 'Bahrain'] },
    { region: 'Asia Pacific', countries: ['Singapore', 'Malaysia', 'Japan', 'South Korea', 'Australia', 'New Zealand'] },
  ];

  // Case studies data
  const caseStudies = [
    {
      title: 'Premium Mango Exports to UAE',
      description: 'How AGROVITAL established a steady supply chain of premium Alphonso mangoes to leading supermarket chains in the UAE.',
      image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Organic Spice Distribution in Europe',
      description: 'Developing sustainable packaging solutions for exporting organic spices to health food distributors across Europe.',
      image: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Basmati Rice Supply to USA',
      description: 'Creating a custom quality control process for premium basmati rice exports to specialty food importers in the United States.',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e8ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1488841714725-bb4c32d1ac94?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Global map" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-agro-leaf/80"></div>
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <ScrollReveal>
            <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full mb-4">
              International Presence
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Global Reach
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Delivering premium agricultural products from India to countries across the world.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* World Map Visualization */}
      <section className="py-20">
        <div className="container-custom">
          <ScrollReveal>
            <SectionHeading 
              title="Where We Export" 
              subtitle="AGROVITAL products reach customers across continents, establishing our presence in key global markets." 
              center
            />
          </ScrollReveal>
          
          <div className="mt-12 relative">
            <div className="flex justify-center mb-12">
              <Globe className="h-24 w-24 text-agro-leaf opacity-20 animate-float" />
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
                alt="World map" 
                className="w-full rounded-lg opacity-30"
              />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-8">
                  {exportCountries.map((region, index) => (
                    <ScrollReveal key={region.region} animation="zoomIn" delay={index * 200}>
                      <div className="bg-white p-6 rounded-xl shadow-md h-full">
                        <h3 className="text-xl font-semibold mb-4 text-agro-leaf flex items-center">
                          <MapPin className="h-5 w-5 mr-2" />
                          {region.region}
                        </h3>
                        <ul className="space-y-2">
                          {region.countries.map((country) => (
                            <li key={country} className="text-gray-600">
                              • {country}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Export Process */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <ScrollReveal>
            <SectionHeading 
              title="Our Export Process" 
              subtitle="A streamlined approach to ensure quality and timely delivery across international borders." 
              center
            />
          </ScrollReveal>
          
          <div className="relative mt-16">
            {/* Process Timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-agro-leaf/20 hidden md:block"></div>
            
            {/* Process Steps */}
            <div className="space-y-12 md:space-y-24 relative">
              {[
                {
                  title: 'Sourcing & Quality Control',
                  description: 'We carefully select products from trusted farmers, performing rigorous quality checks to ensure only the best products are exported.',
                  icon: Leaf
                },
                {
                  title: 'Processing & Packaging',
                  description: 'Products are processed using state-of-the-art technology and packaged according to international standards for optimal freshness and shelf life.',
                  icon: Package
                },
                {
                  title: 'Documentation & Customs',
                  description: 'Our experienced team handles all export documentation and customs clearance efficiently to prevent delays.',
                  icon: Ship
                },
                {
                  title: 'Logistics & Delivery',
                  description: 'We ensure safe and timely transportation through our global logistics network, with real-time tracking available for all shipments.',
                  icon: Plane
                }
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className={`md:flex items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                    <div className="md:w-1/2 relative">
                      <ScrollReveal animation={index % 2 === 0 ? 'slideInLeft' : 'slideInRight'}>
                        <div className={`bg-white p-8 rounded-xl shadow-md border border-gray-100 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                          <div className="inline-flex items-center justify-center w-12 h-12 bg-agro-leaf/10 rounded-lg text-agro-leaf mb-4">
                            <step.icon className="h-6 w-6" />
                          </div>
                          <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </ScrollReveal>
                    </div>
                    
                    <div className="hidden md:block absolute left-1/2 w-5 h-5 rounded-full bg-agro-leaf transform -translate-x-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container-custom">
          <ScrollReveal>
            <SectionHeading 
              title="Export Success Stories" 
              subtitle="Real examples of how AGROVITAL products have successfully entered and thrived in international markets." 
              center
            />
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {caseStudies.map((study, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{study.title}</h3>
                    <p className="text-gray-600">{study.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GlobalReach;
