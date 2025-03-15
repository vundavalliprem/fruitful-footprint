
import React, { useEffect, useRef } from 'react';
import { Globe, MapPin, Ship, Plane, Leaf, Package } from 'lucide-react';
import Layout from '../components/layout/Layout';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollReveal from '../components/common/ScrollReveal';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "../components/ui/carousel";

const GlobalReach = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
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

  // Export destinations for 3D animation
  const destinations = [
    { id: 'usa', name: 'United States', color: '#4facfe', position: { x: -0.6, y: 0.05 } },
    { id: 'uk', name: 'United Kingdom', color: '#4facfe', position: { x: 0.2, y: -0.3 } },
    { id: 'germany', name: 'Germany', color: '#4facfe', position: { x: 0.4, y: -0.3 } },
    { id: 'uae', name: 'UAE', color: '#feb047', position: { x: -0.3, y: -0.35 } },
    { id: 'singapore', name: 'Singapore', color: '#4facfe', position: { x: 0.5, y: 0.1 } },
    { id: 'japan', name: 'Japan', color: '#4facfe', position: { x: 0.8, y: 0.1 } },
    { id: 'australia', name: 'Australia', color: '#4facfe', position: { x: 0.7, y: 0.6 } },
    { id: 'africa', name: 'South Africa', color: '#45e089', position: { x: -0.7, y: 0.5 } },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions with higher resolution
    const pixelRatio = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    canvas.width = rect.width * pixelRatio;
    canvas.height = rect.height * pixelRatio;
    
    // Scale the context for higher resolution
    ctx.scale(pixelRatio, pixelRatio);
    
    // Set the display size
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    // Calculate center position
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Draw globe outline
    const radius = Math.min(centerX, centerY) * 0.9;
    
    const drawGlobe = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw faint grid lines
      ctx.strokeStyle = '#e9e9e9';
      ctx.lineWidth = 0.5;
      
      // Horizontal grid lines
      for (let i = -4; i <= 4; i++) {
        ctx.beginPath();
        ctx.moveTo(centerX - radius, centerY + (radius/4) * i);
        ctx.lineTo(centerX + radius, centerY + (radius/4) * i);
        ctx.stroke();
      }
      
      // Vertical grid lines
      for (let i = -4; i <= 4; i++) {
        ctx.beginPath();
        ctx.moveTo(centerX + (radius/4) * i, centerY - radius);
        ctx.lineTo(centerX + (radius/4) * i, centerY + radius);
        ctx.stroke();
      }
      
      // Draw globe outline
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.strokeStyle = '#e0e0c0';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Origin point (Kavali, India)
      const originX = centerX;
      const originY = centerY;
      
      // Draw origin point
      ctx.beginPath();
      ctx.arc(originX, originY, 8, 0, Math.PI * 2);
      ctx.fillStyle = '#45e089';
      ctx.fill();
      
      // Draw ripple effect
      drawRipple(originX, originY, '#45e089', Date.now());
      
      // Add label for origin
      ctx.font = '12px Arial';
      ctx.fillStyle = '#333';
      ctx.textAlign = 'center';
      ctx.fillText("Kavali, India", originX, originY + 25);
      
      // Draw connections to each destination
      destinations.forEach((dest, index) => {
        const destX = centerX + dest.position.x * radius;
        const destY = centerY + dest.position.y * radius;
        
        // Draw destination point
        ctx.beginPath();
        ctx.arc(destX, destY, 5, 0, Math.PI * 2);
        ctx.fillStyle = dest.color;
        ctx.fill();
        
        // Draw label
        ctx.font = '11px Arial';
        ctx.fillStyle = '#333';
        ctx.textAlign = 'center';
        ctx.fillText(dest.name, destX, destY + 15);
        
        // Draw the route as a bezier curve
        drawRoute(originX, originY, destX, destY, dest.color, Date.now());
        
        // Draw moving dot on the path
        drawMovingDot(originX, originY, destX, destY, dest.color, Date.now() / 1000 + index);
      });
    };
    
    // Draw a route with animation
    const drawRoute = (startX: number, startY: number, endX: number, endY: number, color: string, timeOffset: number) => {
      // Calculate control point for the bezier curve
      const dx = endX - startX;
      const dy = endY - startY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Control point perpendicular to the line connecting start and end points
      const controlX = (startX + endX) / 2 - dy * 0.5;
      const controlY = (startY + endY) / 2 + dx * 0.5;
      
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.quadraticCurveTo(controlX, controlY, endX, endY);
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.5;
      ctx.stroke();
    };
    
    // Draw moving dot along the route
    const drawMovingDot = (startX: number, startY: number, endX: number, endY: number, color: string, timeOffset: number) => {
      const dx = endX - startX;
      const dy = endY - startY;
      
      // Control point for the bezier curve
      const controlX = (startX + endX) / 2 - dy * 0.5;
      const controlY = (startY + endY) / 2 + dx * 0.5;
      
      // Calculate position along the bezier curve (0 to 1)
      let t = (Math.sin(timeOffset) + 1) / 2; // Oscillate between 0 and 1
      
      // Bezier formula for quadratic curve
      const posX = Math.pow(1-t, 2) * startX + 2 * (1-t) * t * controlX + Math.pow(t, 2) * endX;
      const posY = Math.pow(1-t, 2) * startY + 2 * (1-t) * t * controlY + Math.pow(t, 2) * endY;
      
      // Draw moving dot
      ctx.beginPath();
      ctx.arc(posX, posY, 3, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
    };
    
    // Draw ripple effect
    const drawRipple = (x: number, y: number, color: string, timeOffset: number) => {
      const maxRadius = 20;
      const rippleSpeed = 2000; // ms for one cycle
      const rippleCount = 2;
      
      for (let i = 0; i < rippleCount; i++) {
        const cycleOffset = i * (rippleSpeed / rippleCount);
        const time = (timeOffset + cycleOffset) % rippleSpeed;
        const progress = time / rippleSpeed;
        
        const rippleRadius = maxRadius * progress;
        const alpha = 1 - progress;
        
        ctx.beginPath();
        ctx.arc(x, y, rippleRadius, 0, Math.PI * 2);
        ctx.strokeStyle = `${color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    };
    
    // Animation loop
    let animationId: number;
    const animate = () => {
      drawGlobe();
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Clean up
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

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

      {/* 3D Export Animation */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <ScrollReveal>
            <SectionHeading 
              title="Global Export Network" 
              subtitle="Experience our global supply chain in action, with shipments departing from Kavali to destinations around the world." 
              center
            />
          </ScrollReveal>
          
          <div className="mt-12">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 relative">
                <canvas 
                  ref={canvasRef} 
                  className="w-full aspect-square rounded-xl"
                />
                
                {/* Legend */}
                <div className="absolute bottom-6 left-6 bg-white/90 rounded-lg p-3 shadow-md z-10 flex flex-col gap-2">
                  <div className="text-sm font-medium">Export Destinations</div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#45e089]"></div>
                    <span className="text-xs">Kavali, India (Origin)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#4facfe]"></div>
                    <span className="text-xs">Major Markets</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#feb047]"></div>
                    <span className="text-xs">Middle East</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
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
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto mt-12"
          >
            <CarouselContent>
              {caseStudies.map((study, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <ScrollReveal delay={index * 100}>
                    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 lg:-left-12" />
            <CarouselNext className="right-0 lg:-right-12" />
          </Carousel>
        </div>
      </section>
    </Layout>
  );
};

export default GlobalReach;
