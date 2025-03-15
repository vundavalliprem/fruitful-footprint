
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../common/ScrollReveal';

const GlobalReachPreview = () => {
  const mapRef = useRef<HTMLIFrameElement>(null);
  const kavaliMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61543.04887023106!2d79.95960559581906!3d14.915053828955893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a9aebf41d4a1d%3A0x4f17d672412d4e3b!2sKavali%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1673425387631!5m2!1sen!2sin";

  useEffect(() => {
    // Update the map's src to Kavali, Andhra Pradesh location
    if (mapRef.current) {
      mapRef.current.src = kavaliMapUrl;
    }
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="space-y-6">
              <SectionHeading
                title="Global Reach"
                subtitle="Delivering premium Indian agricultural products to markets worldwide"
                center={false}
              />
              
              <p className="text-gray-700">
                With a robust supply chain and strategic partnerships across continents, ARGOVITAL ensures timely delivery of fresh produce to international markets while maintaining optimal quality.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-agro-leaf mr-2">•</span>
                  <span>Direct exports to 20+ countries across 5 continents</span>
                </li>
                <li className="flex items-start">
                  <span className="text-agro-leaf mr-2">•</span>
                  <span>Temperature-controlled logistics for consistent quality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-agro-leaf mr-2">•</span>
                  <span>Compliance with international import regulations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-agro-leaf mr-2">•</span>
                  <span>Headquartered in Kavali, Andhra Pradesh, India</span>
                </li>
              </ul>
              
              <div>
                <Link 
                  to="/global-reach" 
                  className="inline-flex items-center text-agro-leaf hover:text-agro-mango transition-colors duration-300"
                >
                  Explore Our Global Presence <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal>
            <div className="aspect-video relative shadow-xl rounded-xl overflow-hidden border-4 border-white">
              <iframe
                ref={mapRef}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src={kavaliMapUrl}
                title="ARGOVITAL global presence map"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border border-white rounded-xl"></div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

// Export the Kavali map URL for reuse in other components
export const kavaliMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61543.04887023106!2d79.95960559581906!3d14.915053828955893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a9aebf41d4a1d%3A0x4f17d672412d4e3b!2sKavali%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1673425387631!5m2!1sen!2sin";

export default GlobalReachPreview;
