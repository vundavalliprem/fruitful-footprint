
import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';
import ProductCard from '../common/ProductCard';
import ScrollReveal from '../common/ScrollReveal';

// Product data with correct images for different categories
const products = [
  {
    id: "1",
    name: 'Premium Mangoes',
    image: '/lovable-uploads/5c1f5c63-6ebd-455f-a899-917b7cb493d2.png', // Mango image
    description: 'Various premium mango varieties including Alphonso, Banganapalli, and other exotic types.',
    link: '/products/mangoes',
    category: 'mangoes',
    seasonality: 'May to July',
    origin: 'Maharashtra, India'
  },
  {
    id: "2",
    name: 'Premium Rice Varieties',
    image: '/lovable-uploads/9551071f-00bb-4033-95be-337ff8c8b87c.png', // Rice image
    description: 'Aromatic basmati and other specialty varieties known for their premium quality and authentic taste.',
    link: '/products/rice',
    category: 'rice',
    seasonality: 'Available Year-Round',
    origin: 'Punjab, India'
  },
  {
    id: "3",
    name: 'Exotic Fruits Collection',
    image: '/lovable-uploads/a509a10f-b6bf-4d99-a1c5-ecda3e2a22c3.png', // Fruits image
    description: 'Fresh and exotic fruits sourced from the finest orchards across the country.',
    link: '/products/fruits',
    category: 'fruits',
    seasonality: 'Varies by fruit',
    origin: 'Various regions, India'
  },
  {
    id: "4",
    name: 'Organic Spices',
    image: '/lovable-uploads/426a1a22-9041-4d08-8c0e-5e881b9011fe.png', // Spices image
    description: 'Aromatic spices carefully processed to preserve their essential oils and flavor profiles.',
    link: '/products/spices',
    category: 'spices',
    seasonality: 'Available Year-Round',
    origin: 'Kerala, India'
  }
];

const ProductsShowcase = () => {
  return (
    <section className="py-20">
      <div className="container-custom">
        <ScrollReveal>
          <SectionHeading 
            title="Our Premium Products" 
            subtitle="Discover our diverse range of high-quality agricultural products sourced from the finest farms across India." 
            center
          />
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ScrollReveal key={product.id} delay={index * 100}>
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/products" className="cta-button-primary">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
