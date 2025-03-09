
import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';
import ProductCard from '../common/ProductCard';
import ScrollReveal from '../common/ScrollReveal';

// Product data
const products = [
  {
    id: "1",
    name: 'Imam Pasand Mangoes',
    image: '/lovable-uploads/5c1f5c63-6ebd-455f-a899-917b7cb493d2.png',
    description: 'A delicious variety with aromatic flavor and smooth texture, particularly loved for its unique taste.',
    link: '/products/mangoes/imam-pasand'
  },
  {
    id: "3",
    name: 'Banganapalli Mangoes',
    image: '/lovable-uploads/a509a10f-b6bf-4d99-a1c5-ecda3e2a22c3.png',
    description: 'Known as the "King of Mangoes" in South India, featuring a fibreless pulp with sweet flavor.',
    link: '/products/mangoes/banganapalli'
  },
  {
    id: "4",
    name: 'Suvernarekha Mangoes',
    image: '/lovable-uploads/9551071f-00bb-4033-95be-337ff8c8b87c.png',
    description: 'A premium variety with golden-yellow skin, sweet aromatic flesh and low fiber content.',
    link: '/products/mangoes/suvernarekha'
  },
  {
    id: "5",
    name: 'Cheruku Rasalu Mangoes',
    image: '/lovable-uploads/426a1a22-9041-4d08-8c0e-5e881b9011fe.png',
    description: 'A premium variety known for its exceptional sweetness and unique flavor profile.',
    link: '/products/mangoes/cheruku-rasalu'
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
