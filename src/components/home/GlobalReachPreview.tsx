
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Plane, Package, MapPin } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../common/ScrollReveal';

const GlobalReachPreview = () => {
  const animationContainerRef = useRef<HTMLDivElement>(null);
  
  // Export destinations
  const exportDestinations = [
    { country: "United States", coordinates: { x: 25, y: 43 } },
    { country: "United Kingdom", coordinates: { x: 48, y: 38 } },
    { country: "UAE", coordinates: { x: 58, y: 48 } },
    { country: "Singapore", coordinates: { x: 70, y: 55 } },
    { country: "Germany", coordinates: { x: 50, y: 38 } },
    { country: "Japan", coordinates: { x: 80, y: 42 } },
    { country: "Australia", coordinates: { x: 78, y: 65 } }
  ];

  useEffect(() => {
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
        }, index * 1000); // Stagger the animations
      });
    };

    // Initial animation
    animateExports();
    
    // Set interval to restart the animation sequence
    const animationInterval = setInterval(animateExports, 8000);
    
    return () => clearInterval(animationInterval);
  }, []);

  // 3D rotation effect for the globe
  useEffect(() => {
    const container = animationContainerRef.current;
    if (!container) return;
    
    const globe = container.querySelector('.globe-container') as HTMLDivElement;
    if (!globe) return;
    
    let isMouseDown = false;
    let startRotationX = 0;
    let startRotationY = 0;
    let rotationX = -20;
    let rotationY = 15;
    
    // Auto-rotation
    const autoRotate = () => {
      if (!isMouseDown) {
        rotationY += 0.2;
        updateRotation();
      }
    };
    
    const autoRotateInterval = setInterval(autoRotate, 100);
    
    const updateRotation = () => {
      if (globe) {
        globe.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
      }
    };
    
    const handleMouseDown = (e: MouseEvent) => {
      isMouseDown = true;
      startRotationX = e.clientX;
      startRotationY = e.clientY;
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!isMouseDown) return;
      
      const deltaX = e.clientX - startRotationX;
      const deltaY = e.clientY - startRotationY;
      
      rotationY += deltaX * 0.5;
      rotationX -= deltaY * 0.5;
      
      // Limit rotation on X axis
      rotationX = Math.max(-40, Math.min(0, rotationX));
      
      updateRotation();
      
      startRotationX = e.clientX;
      startRotationY = e.clientY;
    };
    
    const handleMouseUp = () => {
      isMouseDown = false;
    };
    
    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    
    updateRotation();
    
    return () => {
      clearInterval(autoRotateInterval);
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
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
            <div 
              ref={animationContainerRef}
              className="aspect-video relative shadow-xl rounded-xl overflow-hidden border-4 border-white bg-gradient-to-br from-blue-50 to-indigo-100 cursor-move"
            >
              {/* 3D Globe Container */}
              <div className="globe-container absolute inset-0 w-full h-full perspective-1000 select-none">
                {/* The world map */}
                <div className="world-map absolute inset-0 opacity-25">
                  <svg viewBox="0 0 1000 500" className="w-full h-full">
                    <path d="M473,190.5c0,0-15,30.1-12,48.1s-2,39.1-5,47.1s-13,42.1-11,59.1s-1,59.1-1,59.1l9,30.1l8-27.1c0,0-4,49.1,6,57.1 c10,8,18,28.1,18,28.1l12-16c0,0-3-22.1,1-39.1s15-49.1,15-49.1s12-13,12-23.1s6-30.1,6-30.1l8-29.1c0,0,22-25.1,24-35.1 s15-42.1,15-42.1s19-31.1,19-47.1s-6-46.1-6-46.1L473,190.5z" fill="#d4e7f7" />
                    <path d="M717,174.5c0,0-3-18.1-9-38.1s-13-39.1-21-51.1s-37-60.1-38-62.1s-13-24.1-18-27.1s-22,13-28,13s-24-1-26-1 s-22,17-25,17s-34-6-38-6s-15,16-15,16s-15-12-21-12s-32-10-39-10s-28,11-28,11s-27-15-65,0l-90,43.1l-80,51.1l-33,55.1 c0,0-16,48.1-16,52.1s21,72.1,21,72.1l27,11l31-16c0,0,28-17,34-17s58,8,58,8l111,23.1l97-4l57-28.1c0,0,72-36.1,83-42.1 s40-24.1,40-24.1L717,174.5z" fill="#d4e7f7" />
                    <path d="M193,263.5c0,0-45,27.1-52,38.1s-20,29.1-20,29.1l-25,9c0,0-11,25.1-11,30.1s8,32.1,8,32.1l16,11h26c0,0,21-20.1,25-20.1 c4,0,59-30.1,59-30.1s5-22.1,5-31.1s-5-23.1-5-23.1l-19-23.1L193,263.5z" fill="#d4e7f7" />
                    <path d="M783,264.5v-19.1l-25-17l-4-14l-10,4l-10-6l-13,6l-5-14l-16,12l-25-3l-11-13l-27,6l-16-28.1l-33,9l-19-21.1l-37,14 c0,0-1,21.1-1,24.1s-8,35.1-8,35.1l78,59.1l73,2c0,0,13-11,18-11s30-6,30-6l-1-40.1l24,8c0,0,2,23.1,7,23.1s31-8,31-8L783,264.5z" fill="#d4e7f7" />
                    <path d="M360,435.5c0,0-13,1-18,9s-18,18.1-18,18.1s-66-2-72-2s-31,21.1-31,21.1h-27l4,26.1l142,8l31-42.1l-3-26.1L360,435.5z" fill="#d4e7f7" />
                  </svg>
                </div>
                
                {/* Origin marker - Kavali, India */}
                <div className="origin-marker absolute left-[63%] top-[48%] z-30">
                  <div className="relative">
                    <div className="w-6 h-6 bg-agro-leaf rounded-full animate-pulse shadow-md shadow-agro-leaf/30"></div>
                    <div className="w-12 h-12 bg-agro-leaf/30 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-ping"></div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white/90 px-2 py-1 text-xs rounded-full font-bold whitespace-nowrap shadow-md">
                      Kavali, India
                    </div>
                  </div>
                </div>
                
                {/* Export routes and destinations */}
                {exportDestinations.map((destination, index) => (
                  <div key={destination.country} className="export-route absolute z-20" style={{ 
                    left: '63%',
                    top: '48%',
                    transformOrigin: 'center',
                  }}>
                    {/* The path arc */}
                    <div className="relative">
                      <svg className="absolute" width="400" height="400" style={{ 
                        left: '-200px', 
                        top: '-200px',
                        overflow: 'visible'
                      }}>
                        <defs>
                          <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#4ade80" />
                            <stop offset="100%" stopColor="#f97316" />
                          </linearGradient>
                        </defs>
                        
                        {/* Calculate path based on destination coordinates */}
                        <path 
                          d={`M0,0 Q${(destination.coordinates.x - 63) * 3},${(destination.coordinates.y - 48) * -1} ${(destination.coordinates.x - 63) * 6},${(destination.coordinates.y - 48) * -2}`} 
                          fill="none" 
                          stroke={`url(#gradient-${index})`} 
                          strokeWidth="2"
                          strokeDasharray="300"
                          strokeDashoffset="300"
                          className="path-animation"
                        />
                        
                        {/* The flying plane along path */}
                        <g className="plane-animation">
                          <Plane size={16} className="text-agro-leaf" style={{ transform: 'rotate(-30deg)' }} />
                        </g>
                        
                        {/* The flying package along path */}
                        <g className="package-animation">
                          <Package size={14} className="text-agro-mango" />
                        </g>
                      </svg>
                    </div>
                    
                    {/* Destination marker */}
                    <div className="absolute" style={{
                      left: `${(destination.coordinates.x - 63) * 6}px`,
                      top: `${(destination.coordinates.y - 48) * -2}px`,
                      transform: 'translate(-50%, -50%)'
                    }}>
                      <div className="relative">
                        <div className="w-4 h-4 bg-agro-mango rounded-full shadow-md"></div>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-white/90 px-2 py-0.5 text-xs rounded-full font-medium whitespace-nowrap shadow-sm">
                          {destination.country}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* 3D Earth shadow */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/5 h-8 bg-black/10 rounded-full blur-md"></div>
              </div>
              
              {/* Legend */}
              <div className="absolute bottom-3 left-3 bg-white/90 rounded-lg p-2 text-xs flex items-center space-x-4 shadow-md z-40">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-agro-leaf rounded-full mr-1"></div>
                  <span>Kavali, India</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-agro-mango rounded-full mr-1"></div>
                  <span>Export Destinations</span>
                </div>
              </div>
              
              {/* Interactive hint */}
              <div className="absolute top-3 right-3 bg-white/90 rounded-lg p-2 text-xs flex items-center space-x-2 shadow-md z-40">
                <MapPin size={14} className="text-gray-500" />
                <span>Drag to rotate</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
      
      {/* CSS for animations */}
      <style>
        {`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .globe-container {
          transform-style: preserve-3d;
          transition: transform 0.1s ease-out;
        }
        
        @keyframes pathAnimation {
          0% { stroke-dashoffset: 300; }
          30% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 0; }
        }
        
        @keyframes planeAnimation {
          0% { opacity: 0; transform: translateX(0) translateY(0) rotate(-30deg); }
          10% { opacity: 1; transform: translateX(0) translateY(0) rotate(-30deg); }
          80% { opacity: 1; transform: translateX(calc(400px)) translateY(calc(-100px)) rotate(-30deg); }
          100% { opacity: 0; transform: translateX(calc(400px)) translateY(calc(-100px)) rotate(-30deg); }
        }
        
        @keyframes packageAnimation {
          0% { opacity: 0; transform: translateX(0) translateY(0); }
          60% { opacity: 0; transform: translateX(200px) translateY(-50px); }
          70% { opacity: 1; transform: translateX(250px) translateY(-60px); }
          95% { opacity: 1; transform: translateX(380px) translateY(-95px); }
          100% { opacity: 0; transform: translateX(400px) translateY(-100px); }
        }
        
        .animate-route .path-animation {
          animation: pathAnimation 3s forwards;
        }
        
        .animate-route .plane-animation {
          animation: planeAnimation 3s forwards;
        }
        
        .animate-route .package-animation {
          animation: packageAnimation 3s forwards;
        }
        
        .world-map svg path {
          filter: drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.1));
        }
        
        .origin-marker, .export-route {
          will-change: transform;
        }
        `}
      </style>
    </section>
  );
};

export default GlobalReachPreview;
