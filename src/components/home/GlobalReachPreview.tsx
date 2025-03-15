
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../common/ScrollReveal';

const GlobalReachPreview = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Export destinations
  const destinations = [
    { id: 'usa', name: 'United States', color: '#4facfe', position: { x: -0.6, y: 0.05 } },
    { id: 'europe', name: 'Europe', color: '#4facfe', position: { x: 0.4, y: -0.3 } },
    { id: 'asia', name: 'Asia', color: '#4facfe', position: { x: 0.8, y: 0.1 } },
    { id: 'middleeast', name: 'Middle East', color: '#feb047', position: { x: -0.3, y: -0.35 } },
    { id: 'australia', name: 'Australia', color: '#4facfe', position: { x: 0.7, y: 0.6 } },
    { id: 'africa', name: 'Africa', color: '#45e089', position: { x: -0.7, y: -0.5 } },
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
      
      // Draw connections to each destination
      destinations.forEach((dest) => {
        const destX = centerX + dest.position.x * radius;
        const destY = centerY + dest.position.y * radius;
        
        // Draw destination point
        ctx.beginPath();
        ctx.arc(destX, destY, 5, 0, Math.PI * 2);
        ctx.fillStyle = dest.color;
        ctx.fill();
        
        // Draw the route as a bezier curve
        drawRoute(originX, originY, destX, destY, dest.color, Date.now());
        
        // Draw moving dot on the path
        drawMovingDot(originX, originY, destX, destY, dest.color, Date.now() / 1000 + destinations.indexOf(dest));
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
            <div className="relative aspect-square rounded-full overflow-hidden border-4 border-white shadow-xl bg-white">
              <canvas 
                ref={canvasRef} 
                className="w-full h-full"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default GlobalReachPreview;
