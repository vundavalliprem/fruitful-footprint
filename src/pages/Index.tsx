
import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/home/HeroSection';
import AboutPreview from '../components/home/AboutPreview';
import ProductsShowcase from '../components/home/ProductsShowcase';
import GlobalReachPreview from '../components/home/GlobalReachPreview';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CtaSection from '../components/home/CtaSection';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "ARGOVITAL EXPORTS - Premium Agricultural Products";
    
    // Force reload of images to fix any caching issues
    const preloadImages = [
      '/lovable-uploads/a509a10f-b6bf-4d99-a1c5-ecda3e2a22c3.png',
      '/lovable-uploads/426a1a22-9041-4d08-8c0e-5e881b9011fe.png',
      '/lovable-uploads/9551071f-00bb-4033-95be-337ff8c8b87c.png',
      '/lovable-uploads/5c1f5c63-6ebd-455f-a899-917b7cb493d2.png'
    ];
    
    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <Layout>
      <HeroSection />
      <AboutPreview />
      <ProductsShowcase />
      <GlobalReachPreview />
      <TestimonialsSection />
      <CtaSection />
    </Layout>
  );
};

export default Index;
