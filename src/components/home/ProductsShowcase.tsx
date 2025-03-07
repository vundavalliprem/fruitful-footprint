
import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';
import ProductCard from '../common/ProductCard';
import ScrollReveal from '../common/ScrollReveal';

// Product data
const products = [
  {
    id: 1,
    name: 'Premium Mangoes',
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Explore our range of premium-quality mangoes, including Alphonso, Kesar, and Banganapalli varieties.',
    link: '/products/mangoes'
  },
  {
    id: 2,
    name: 'Exotic Fruits',
    image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Fresh, hand-picked fruits from the best farms across India, ready for global distribution.',
    link: '/products/fruits'
  },
  {
    id: 3,
    name: 'Premium Rice',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e8ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'High-quality basmati and non-basmati rice varieties, carefully processed and packaged.',
    link: '/products/rice'
  },
  {
    id: 4,
    name: 'Organic Pulses',
    image: 'https://images.unsplash.com/photo-1515543904379-3d757abe63ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Nutritious and wholesome pulses including lentils, chickpeas, and beans, grown using sustainable practices.',
    link: '/products/pulses'
  },
  {
    id: 5,
    name: 'Authentic Spices',
    image: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Traditional Indian spices that bring authentic flavors to global kitchens and food industries.',
    link: '/products/spices'
  },
  {
    id: 6,
    name: 'Nutrient-Rich Millets',
    image: 'https://images.unsplash.com/photo-1612970547815-d7732046562c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Ancient grains packed with nutrients and health benefits, sourced from sustainable farms.',
    link: '/products/millets'
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
              <ProductCard 
                name={product.name}
                image={product.image}
                description={product.description}
                link={product.link}
              />
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
