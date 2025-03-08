
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
    image: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A delicious variety with aromatic flavor and smooth texture, particularly loved for its unique taste.',
    link: '/products/mangoes/imam-pasand'
  },
  {
    id: "3",
    name: 'Banganapalli Mangoes',
    image: '/lovable-uploads/527c24f3-b802-408c-aa65-601f97a658f1.png',
    description: 'Known as the "King of Mangoes" in South India, featuring a fibreless pulp with sweet flavor.',
    link: '/products/mangoes/banganapalli'
  },
  {
    id: "4",
    name: 'Suvernarekha Mangoes',
    image: 'https://images.unsplash.com/photo-1596404643764-2a2461483a3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A premium variety with golden-yellow skin, sweet aromatic flesh and low fiber content.',
    link: '/products/mangoes/suvernarekha'
  },
  {
    id: "5",
    name: 'Cheruku Rasalu Mangoes',
    image: '/lovable-uploads/e51f5840-5890-44f6-b7ea-bfc3572f9487.png',
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
