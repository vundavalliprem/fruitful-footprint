
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
    document.title = "AGROVITAL EXPORTS - Premium Agricultural Products";
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
