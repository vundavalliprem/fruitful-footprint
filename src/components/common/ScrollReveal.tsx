
import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fadeIn' | 'slideInLeft' | 'slideInRight' | 'zoomIn';
  delay?: number;
  threshold?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animation = 'fadeIn',
  delay = 0,
  threshold = 0.1
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold
      }
    );
    
    const currentRef = ref.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);
  
  const getAnimationClass = () => {
    switch (animation) {
      case 'fadeIn':
        return 'animate-fadeIn';
      case 'slideInLeft':
        return 'animate-slideInLeft';
      case 'slideInRight':
        return 'animate-slideInRight';
      case 'zoomIn':
        return 'animate-zoomIn';
      default:
        return 'animate-fadeIn';
    }
  };
  
  return (
    <div 
      ref={ref}
      className={`${isVisible ? getAnimationClass() : 'opacity-0'}`}
      style={{ 
        animationDelay: `${delay}ms`,
        animationFillMode: 'both' 
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
