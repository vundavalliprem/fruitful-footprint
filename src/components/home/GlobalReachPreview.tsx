
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Plane, Package } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../common/ScrollReveal';

const GlobalReachPreview = () => {
  const mapRef = useRef<HTMLIFrameElement>(null);
  // Kavali map URL
  const kavaliMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61543.04887023106!2d79.95960559581906!3d14.915053828955893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a9aebf41d4a1d%3A0x4f17d672412d4e3b!2sKavali%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1673425387631!5m2!1sen!2sin";

  // Export destinations
  const exportDestinations = [
    { country: "United States", coordinates: { x: 25, y: 43 } },
    { country: "United Kingdom", coordinates: { x: 48, y: 38 } },
    { country: "UAE", coordinates: { x: 58, y: 48 } },
    { country: "Singapore", coordinates: { x: 70, y: 55 } },
    { country: "Germany", coordinates: { x: 50, y: 38 } }
  ];

  useEffect(() => {
    // Update the map's src to Kavali, Andhra Pradesh location
    if (mapRef.current) {
      mapRef.current.src = kavaliMapUrl;
    }

    // Animation for export routes
    const animateExports = () => {
      const routes = document.querySelectorAll('.export-route');
      routes.forEach((route, index) => {
        setTimeout(() => {
          route.classList.add('animate-route');
          
          // Reset the animation after it completes
          setTimeout(() => {
            route.classList.remove('animate-route');
            // Re-add the class after a short delay to restart the animation
            setTimeout(() => {
              route.classList.add('animate-route');
            }, 500);
          }, 3000);
        }, index * 1500); // Stagger the animations
      });
    };

    // Initial animation
    animateExports();
    
    // Set interval to restart the animation sequence
    const animationInterval = setInterval(animateExports, 8000);
    
    return () => clearInterval(animationInterval);
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
              {/* The map */}
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
              
              {/* 3D Animated Routes Overlay */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Origin marker - Kavali */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 bg-agro-leaf rounded-full animate-pulse"></div>
                  <div className="w-8 h-8 bg-agro-leaf/30 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-ping"></div>
                </div>
                
                {/* Export routes */}
                {exportDestinations.map((destination, index) => (
                  <div key={destination.country} className="export-route absolute left-1/2 top-1/2" style={{ 
                    transformOrigin: 'center',
                    zIndex: 20 - index
                  }}>
                    {/* The path line */}
                    <div className="absolute w-0 h-0.5 bg-gradient-to-r from-agro-leaf to-agro-mango origin-left"
                      style={{
                        transform: `rotate(${Math.atan2(
                          destination.coordinates.y - 50, 
                          destination.coordinates.x - 50
                        ) * (180 / Math.PI)}deg)`,
                        width: `${Math.sqrt(
                          Math.pow(destination.coordinates.x - 50, 2) + 
                          Math.pow(destination.coordinates.y - 50, 2)
                        )}%`
                      }}>
                      {/* The flying plane */}
                      <Plane size={16} className="text-agro-leaf absolute right-0 plane-icon" style={{ transform: 'translateY(-50%)' }} />
                      
                      {/* The package */}
                      <Package size={14} className="text-agro-mango absolute right-0 package-icon" style={{ transform: 'translateY(-50%) translateX(20px)' }} />
                    </div>
                    
                    {/* Destination marker */}
                    <div className="absolute transform -translate-x-1/2 -translate-y-1/2"
                      style={{
                        left: `${destination.coordinates.x}%`,
                        top: `${destination.coordinates.y}%`
                      }}>
                      <div className="w-3 h-3 bg-agro-mango rounded-full"></div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-white/80 px-2 py-0.5 text-xs rounded whitespace-nowrap font-medium">
                        {destination.country}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="absolute inset-0 pointer-events-none border border-white rounded-xl"></div>
              
              {/* Legend */}
              <div className="absolute bottom-2 left-2 bg-white/80 rounded-lg p-2 text-xs flex items-center space-x-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-agro-leaf rounded-full mr-1"></div>
                  <span>Kavali, India</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-agro-mango rounded-full mr-1"></div>
                  <span>Export Destinations</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
      
      {/* CSS for animations */}
      <style jsx>{`
        @keyframes animatePath {
          0% { width: 0; }
          60% { width: 100%; }
          100% { width: 100%; }
        }
        
        @keyframes flyPlane {
          0% { transform: translateY(-50%) translateX(-10px); opacity: 0; }
          5% { transform: translateY(-50%) translateX(0px); opacity: 1; }
          90% { transform: translateY(-50%) translateX(calc(100% - 10px)); opacity: 1; }
          100% { transform: translateY(-50%) translateX(100%); opacity: 0; }
        }
        
        @keyframes deliverPackage {
          0% { transform: translateY(-50%) translateX(0); opacity: 0; }
          60% { transform: translateY(-50%) translateX(0); opacity: 0; }
          65% { transform: translateY(-50%) translateX(10px); opacity: 1; }
          90% { transform: translateY(-50%) translateX(calc(100% - 10px)); opacity: 1; }
          100% { transform: translateY(-50%) translateX(100%); opacity: 0; }
        }
        
        .export-route {
          opacity: 0.7;
          transition: opacity 0.3s;
        }
        
        .export-route:hover {
          opacity: 1;
        }
        
        .animate-route > div:first-child {
          animation: animatePath 3s forwards;
        }
        
        .animate-route .plane-icon {
          animation: flyPlane 3s forwards;
        }
        
        .animate-route .package-icon {
          animation: deliverPackage 3s forwards;
        }
      `}</style>
    </section>
  );
};

// Export the Kavali map URL for reuse in other components
export const kavaliMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61543.04887023106!2d79.95960559581906!3d14.915053828955893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a9aebf41d4a1d%3A0x4f17d672412d4e3b!2sKavali%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1673425387631!5m2!1sen!2sin";

export default GlobalReachPreview;
