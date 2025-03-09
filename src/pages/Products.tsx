<lov-code>
import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollReveal from '../components/common/ScrollReveal';
import { ArrowRight, Download, FileText } from 'lucide-react';
import ProductCard from '../components/common/ProductCard';

const Products = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(category || 'all');
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Products - AGROVITAL EXPORTS`;
    
    if (category) {
      setActiveTab(category);
    }
  }, [category]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'all') {
      navigate('/products');
    } else {
      navigate(`/products/${tab}`);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-r from-agro-mango/90 to-agro-mango">
        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="product-grid" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <rect width="100" height="100" fill="url(#product-grid)" />
          </svg>
        </div>
        <div className="container-custom relative">
          <ScrollReveal animation="fadeIn" threshold={0.1}>
            <SectionHeading
              title="Our Premium Products"
              subtitle="Discover the finest agricultural exports from India's heartland"
              light={true}
              center={true}
            />
          </ScrollReveal>
        </div>
      </div>

      {/* Product Categories Tabs */}
      <div className="sticky top-[70px] z-20 bg-white shadow-sm border-b border-gray-200">
        <div className="container-custom py-4 overflow-x-auto">
          <div className="flex space-x-2 md:space-x-4 min-w-max">
            <TabButton 
              active={activeTab === 'all'} 
              onClick={() => handleTabChange('all')}
              label="All Products"
            />
            <TabButton 
              active={activeTab === 'mangoes'} 
              onClick={() => handleTabChange('mangoes')}
              label="Mangoes"
            />
            <TabButton 
              active={activeTab === 'fruits'} 
              onClick={() => handleTabChange('fruits')}
              label="Fruits"
            />
            <TabButton 
              active={activeTab === 'rice'} 
              onClick={() => handleTabChange('rice')}
              label="Rice"
            />
            <TabButton 
              active={activeTab === 'pulses'} 
              onClick={() => handleTabChange('pulses')}
              label="Pulses"
            />
            <TabButton 
              active={activeTab === 'vegetables'} 
              onClick={() => handleTabChange('vegetables')}
              label="Vegetables"
            />
            <TabButton 
              active={activeTab === 'spices'} 
              onClick={() => handleTabChange('spices')}
              label="Spices"
            />
            <TabButton 
              active={activeTab === 'millets'} 
              onClick={() => handleTabChange('millets')}
              label="Millets"
            />
          </div>
        </div>
      </div>

      {/* Products Display Section */}
      <section className="py-16">
        <div className="container-custom">
          {activeTab === 'all' && <AllProducts />}
          {activeTab === 'mangoes' && <MangoesProducts />}
          {activeTab === 'fruits' && <FruitsProducts />}
          {activeTab === 'rice' && <RiceProducts />}
          {activeTab === 'pulses' && <PulsesProducts />}
          {activeTab === 'vegetables' && <VegetablesProducts />}
          {activeTab === 'spices' && <SpicesProducts />}
          {activeTab === 'millets' && <MilletsProducts />}
        </div>
      </section>

      {/* Product Catalog Download */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-100">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Download Our Product Catalog</h3>
                <p className="text-gray-600">
                  Get detailed information about our products, specifications, and packaging options.
                </p>
              </div>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 bg-agro-leaf hover:bg-agro-leaf/90 text-white px-5 py-3 rounded-md font-medium transition-all duration-300">
                  <Download size={20} />
                  <span>Full Catalog</span>
                </button>
                <button className="flex items-center gap-2 border border-agro-leaf text-agro-leaf hover:bg-agro-leaf/5 px-5 py-3 rounded-md font-medium transition-all duration-300">
                  <FileText size={20} />
                  <span>Price List</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Export Specifications */}
      <section className="py-16">
        <div className="container-custom">
          <ScrollReveal animation="fadeIn">
            <SectionHeading
              title="Export Specifications"
              subtitle="We adhere to international standards for packaging and shipping"
              center={true}
            />
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <ScrollReveal animation="fadeIn" delay={100}>
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full">
                <h3 className="text-xl font-bold mb-4 text-agro-leaf">Packaging</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-agro-leaf mr-2">•</span>
                    <span>Corrugated boxes with proper ventilation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-agro-leaf mr-2">•</span>
                    <span>Food-grade liner materials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-agro-leaf mr-2">•</span>
                    <span>Individual wrapping for premium produce</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-agro-leaf mr-2">•</span>
                    <span>Temperature-controlled packaging available</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-agro-leaf mr-2">•</span>
                    <span>Custom packaging solutions as per client requirements</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fadeIn" delay={200}>
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full">
                <h3 className="text-xl font-bold mb-4 text-agro-leaf">Quality Control</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-agro-leaf mr-2">•</span>
                    <span>FSSAI and other international certifications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-agro-leaf mr-2">•</span>
                    <span>Regular laboratory testing for pesticides</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-agro-leaf mr-2">•</span>
                    <span>Multi-stage quality checks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-agro-leaf mr-2">•</span>
                    <span>Rigorous grading systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-agro-leaf mr-2">•</span>
                    <span>Compliance with importing country regulations</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fadeIn" delay={300}>
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full">
                <h3 className="text-xl font-bold mb-4 text-agro-leaf">Shipping</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-agro-leaf mr-2">•</span>
                    <span>Air freight for premium perishables</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-agro-leaf mr-2">•</span>
                    <span>Temperature-controlled sea containers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-agro-leaf mr-2">•</span>
                    <span>Expedited customs clearance services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-agro-leaf mr-2">•</span>
                    <span>Real-time shipment tracking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-agro-leaf mr-2">•</span>
                    <span>Phytosanitary and export documentation handling</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-agro-leaf to-agro-mango text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <ScrollReveal animation="fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in Our Products?</h2>
              <p className="text-white/90 text-lg mb-8">
                Contact us to discuss your requirements or request a detailed quote.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="bg-white text-agro-leaf px-6 py-3 rounded-md font-medium transition-all duration-300 hover:bg-white/90 hover:shadow-lg">
                  Contact Us
                </Link>
                <Link to="/request-quote" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-medium transition-all duration-300 hover:bg-white/10 hover:shadow-lg">
                  Request a Quote
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const TabButton = ({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-md transition-all whitespace-nowrap ${
      active 
        ? 'bg-agro-leaf text-white font-medium shadow-sm' 
        : 'bg-white text-gray-700 hover:bg-gray-100'
    }`}
  >
    {label}
  </button>
);

const AllProducts = () => (
  <div>
    <div className="mb-12">
      <p className="text-lg text-gray-700 mb-8">
        AGROVITAL EXPORTS offers a diverse portfolio of premium agricultural products from India's finest farms. From succulent mangoes to aromatic basmati rice, each product is carefully selected, processed, and exported to meet international quality standards.
      </p>
      
      <div className="flex flex-col gap-8">
        <CategoryPreviewSection 
          title="Premium Mangoes"
          subtitle="Our flagship exports, featuring the finest varieties from India's mango belt"
          viewAllLink="/products/mangoes"
          products={mangoProducts.slice(0, 3)}
        />
        
        <CategoryPreviewSection 
          title="Fruits"
          subtitle="Fresh and exotic fruits sourced from selected farms across India"
          viewAllLink="/products/fruits"
          products={fruitProducts.slice(0, 3)}
        />
        
        <CategoryPreviewSection 
          title="Rice Varieties"
          subtitle="Premium rice varieties including aromatic Basmati and nutritious brown rice"
          viewAllLink="/products/rice"
          products={riceProducts.slice(0, 3)}
        />
        
        <CategoryPreviewSection 
          title="Vegetables"
          subtitle="Fresh, seasonal vegetables grown using sustainable farming practices"
          viewAllLink="/products/vegetables"
          products={vegetableProducts.slice(0, 3)}
        />
      </div>
    </div>
  </div>
);

const CategoryPreviewSection = ({ 
  title, 
  subtitle, 
  viewAllLink, 
  products 
}: { 
  title: string; 
  subtitle: string; 
  viewAllLink: string; 
  products: any[] 
}) => (
  <ScrollReveal animation="fadeIn">
    <div className="mb-12 border-t pt-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
          <p className="text-gray-600">{subtitle}</p>
        </div>
        <Link 
          to={viewAllLink} 
          className="mt-4 md:mt-0 text-agro-leaf flex items-center hover:underline font-medium"
        >
          View All <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <ScrollReveal animation="zoomIn" delay={100 * index} key={product.id}>
            <ProductCard product={product} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  </ScrollReveal>
);

const MangoesProducts = () => (
  <div>
    <ScrollReveal animation="fadeIn">
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Premium Indian Mangoes</h2>
        <p className="text-lg text-gray-700 mb-8">
          India is known as the world's mango paradise, and AGROVITAL EXPORTS brings the finest varieties to global markets. Our mangoes are sourced from certified orchards and undergo rigorous quality checks before export.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mangoProducts.map((product, index) => (
            <ScrollReveal animation="zoomIn" delay={100 * index} key={product.id}>
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </ScrollReveal>
  </div>
);

const FruitsProducts = () => (
  <div>
    <ScrollReveal animation="fadeIn">
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Fresh & Exotic Fruits</h2>
        <p className="text-lg text-gray-700 mb-8">
          Beyond mangoes, we export a variety of other high-quality fruits that showcase India's diverse agricultural bounty. Our fruits are carefully selected for flavor, appearance, and shelf life.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fruitProducts.map((product, index) => (
            <ScrollReveal animation="zoomIn" delay={100 * index} key={product.id}>
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </ScrollReveal>
  </div>
);

const RiceProducts = () => (
  <div>
    <ScrollReveal animation="fadeIn">
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Premium Rice Varieties</h2>
        <p className="text-lg text-gray-700 mb-8">
          Our rice portfolio includes world-renowned Basmati and specialty rice varieties, carefully processed and packed to preserve their aroma, texture, and flavor profiles.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {riceProducts.map((product, index) => (
            <ScrollReveal animation="zoomIn" delay={100 * index} key={product.id}>
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </ScrollReveal>
  </div>
);

const PulsesProducts = () => (
  <div>
    <ScrollReveal animation="fadeIn">
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Protein-Rich Pulses</h2>
        <p className="text-lg text-gray-700 mb-8">
          India is a major producer of pulses and lentils. Our selection features carefully cleaned, graded, and processed pulses that meet international food safety standards.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pulseProducts.map((product, index) => (
            <ScrollReveal animation="zoomIn" delay={100 * index} key={product.id}>
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </ScrollReveal>
  </div>
);

const VegetablesProducts = () => (
  <div>
    <ScrollReveal animation="fadeIn">
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Fresh Vegetables</h2>
        <p className="text-lg text-gray-700 mb-8">
          Our carefully selected vegetables are grown using sustainable farming practices, ensuring peak freshness, flavor, and nutritional value when they reach international markets.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vegetableProducts.map((product, index) => (
            <ScrollReveal animation="zoomIn" delay={100 * index} key={product.id}>
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </ScrollReveal>
  </div>
);

const SpicesProducts = () => (
  <div>
    <ScrollReveal animation="fadeIn">
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Aromatic Spices</h2>
        <p className="text-lg text-gray-700 mb-8">
          India's spices have been coveted for centuries. Our spice exports feature carefully selected, processed, and packed spices that preserve their essential oils and aromatic compounds.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {spiceProducts.map((product, index) => (
            <ScrollReveal animation="zoomIn" delay={100 * index} key={product.id}>
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </ScrollReveal>
  </div>
);

const MilletsProducts = () => (
  <div>
    <ScrollReveal animation="fadeIn">
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Nutritious Millets</h2>
        <p className="text-lg text-gray-700 mb-8">
          Rediscovering the ancient grains of India, our millet exports offer nutritious, gluten-free alternatives that are increasingly popular in health-conscious markets worldwide.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {milletProducts.map((product, index) => (
            <ScrollReveal animation="zoomIn" delay={100 * index} key={product.id}>
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </ScrollReveal>
  </div>
);

const mangoProducts = [
  {
    id: 'm1',
    name: 'Imam Pasand Mango',
    image: '/lovable-uploads/5c1f5c63-6ebd-455f-a899-917b7cb493d2.png',
    description: 'A delicious variety with aromatic flavor and smooth texture, particularly loved for its unique taste.',
    price: '$45-$60 per box',
    origin: 'Andhra Pradesh, Tamil Nadu',
    seasonality: 'May to July',
    category: 'mangoes'
  },
  {
    id: 'm3',
    name: 'Banganapalli Mango',
    image: '/lovable-uploads/a509a10f-b6bf-4d99-a1c5-ecda3e2a22c3.png',
    description: 'Known as the "King of Mangoes" in South India, featuring a fibreless pulp.',
    price: '$30-$45 per box',
    origin: 'Andhra Pradesh',
    seasonality: 'April to June',
    category: 'mangoes'
  },
  {
    id: 'm7',
    name: 'Cheruku Rasalu Mango',
    image: '/lovable-uploads/426a1a22-9041-4d08-8c0e-5e881b9011fe.png',
    description: 'A premium variety known for its exceptional sweetness and unique flavor profile.',
    price: '$40-$55 per box',
    origin: 'Andhra Pradesh',
    seasonality: 'May to July',
    category: 'mangoes'
  },
  {
    id: 'm8',
    name: 'Suvernarekha Mango',
    image: '/lovable-uploads/9551071f-00bb-4033-95be-337ff8c8b87c.png',
    description: 'A premium variety with golden-yellow skin, sweet aromatic flesh and low fiber content.',
    price: '$38-$52 per box',
    origin: 'Andhra Pradesh',
    seasonality: 'May to July',
    category: 'mangoes'
  }
];

const fruitProducts = [
  {
    id: 'f1',
    name: 'Pomegranate',
    image: '/lovable-uploads/426a1a22-9041-4d08-8c0e-5e881b9011fe.png',
    description: 'Ruby-red arils with the perfect balance of sweetness and tartness.',
    price: '$25-$35 per box',
    origin: 'Maharashtra, Gujarat',
    seasonality: 'Year-round, peaks Oct-Feb',
    category: 'fruits'
  },
  {
    id: 'f2',
    name: 'Litchi',
    image: '/lovable-uploads/426a1a22-9041-4d08-8c0e-5e881b9011fe.png',
    description: 'Fragrant, juicy fruits with translucent white flesh and sweet flavor.',
    price: '$30-$42 per box',
    origin: 'Bihar, West Bengal',
    seasonality: 'May to June',
    category: 'fruits'
  },
  {
    id: 'f3',
    name: 'Guava',
    image: '/lovable-uploads/9551071f-00bb-4033-95be-337ff8c8b87c.png',
    description: 'Aromatic, tropical fruit with edible seeds and high vitamin C content.',
    price: '$18-$28 per box',
    origin: 'Various regions',
    seasonality: 'Year-round, peaks in winter',
    category: 'fruits'
  },
  {
    id: 'f4',
    name: 'Sapota (Chikoo)',
    image: '/lovable-uploads/5c1f5c63-6ebd-455f-a899-917b7cb493d2.png',
    description: 'Sweet, malty-flavored fruits with a grainy texture.',
    price: '$20-$30 per box',
    origin: 'Karnataka, Maharashtra',
    seasonality: 'Year-round, peaks Jan-Mar',
    category: 'fruits'
  },
  {
    id: 'f5',
    name: 'Grapes',
    image: '/lovable-uploads/a509a10f-b6bf-4d99-a1c5-ecda3e2a22c3.png',
    description: 'Thompson Seedless and other varieties, known for sweetness and crunch.',
    price: '$22-$35 per box',
    origin: 'Maharashtra',
    seasonality: 'February to May',
    category: 'fruits'
  },
  {
    id: 'f6',
    name: 'Papaya',
    image: '/lovable-uploads/426a1a22-9041-4d08-8c0e-5e881b9011fe.png',
    description: 'Sweet, butter-soft flesh with a tropical flavor profile.',
    price: '$15-$25 per box',
    origin: 'Various regions',
    seasonality: 'Year-round',
    category: 'fruits'
  }
];

const riceProducts = [
  {
    id: 'r1',
    name: 'Basmati Rice',
    image: '/lovable-uploads/9551071f-00bb-4033-95be-337ff8c8b87c.png',
    description: 'Long-grain aromatic rice with distinctive fragrance and flavor.',
    price: '$18-$30 per kg (premium)',
    origin: 'Punjab, Haryana',
    seasonality: 'Available year-round',
    category: 'rice'
  },
  {
    id: 'r2',
    name: 'Sona Masoori Rice',
    image: '/lovable-uploads/5c1f5c63-6ebd-455f-a899-917b7cb493d2.png',
    description: 'Medium-grain rice with light, fluffy texture when cooked.',
    price: '$12-$20 per kg',
    origin: 'Andhra Pradesh, Telangana',
    seasonality: 'Available year-round',
    category: 'rice'
  },
  {
    id: 'r3',
    name: 'Brown Basmati Rice',
    image: '/lovable-uploads/a509a10f-b6bf-4d99-a1c5-ecda3e2a22c3.png',
    description: 'Whole grain basmati with nutty flavor and added nutritional benefits.',
    price: '$20-$32 per kg',
    origin: 'Punjab, Haryana',
    seasonality: 'Available year-round',
    category: 'rice'
  },
  {
    id: 'r4',
    name: 'Ponni Rice',
    image: '/lovable-uploads/426a1a22-9041-4d08-8c0e-5e881b9011fe.png',
    description: 'Popular South Indian variety with excellent cooking qualities.',
    price: '$10-$18 per kg',
    origin: 'Tamil Nadu',
    seasonality: 'Available year-round',
    category: 'rice'
  },
  {
    id: 'r5',
    name: 'Black Rice',
    image: '/lovable-uploads/9551071f-00bb-4033-95be-337ff8c8b87c.png',
    description: 'Specialty rice with deep purple color and nutty taste, rich in antioxidants.',
    price: '$25-$40 per kg',
    origin: 'Manipur, North East India',
    seasonality: 'Available year-round',
    category: 'rice'
  },
  {
    id: 'r6',
    name: 'Red Rice',
    image: '/lovable-uploads/5c1f5c63-6ebd-455f-a899-917b7cb493d2.png',
    description: 'Whole grain rice with reddish bran layer and high nutritional value.',
    price: '$15-$25 per kg',
    origin: 'Kerala, Karnataka',
    seasonality: 'Available year-round',
    category: 'rice'
  }
];

const pulseProducts = [
  {
    id: 'p1',
    name: 'Yellow Moong Dal',
    image: '/lovable-uploads/a509a10f-b6bf-4d99-a1c5-ecda3e2a22c3.png',
    description: 'Split yellow lentils, easy to digest with mild, sweet flavor.',
    price: '$8-$15 per kg',
    origin: 'Madhya Pradesh, Maharashtra',
    seasonality: 'Available year-round',
    category: 'pulses'
  },
  {
    id: 'p2',
    name: 'Toor Dal (Pigeon Pea)',
    image: '/lovable-uploads/426a1a22-9041-4d08-8c0e-5e881b9011fe.png',
    description: 'Yellow split lentils, commonly used in sambar and other dishes.',
    price: '$10-$18 per kg',
    origin: 'Maharashtra, Karnataka',
    seasonality: 'Available year-round',
    category: 'pulses'
  },
  {
    id: 'p3',
    name: 'Masoor Dal (Red Lentils)',
    image: '/lovable-uploads/9551071f-00bb-4033-95be-337ff8c8b87c.png',
    description: 'Orange-red split lentils that cook quickly with a mild, earthy flavor.',
    price: '$9-$16 per kg',
    origin: 'Uttar Pradesh, Madhya Pradesh',
    seasonality: 'Available year-round',
    category: 'pulses'
  },
  {
    id: 'p4',
    name: 'Chana Dal (Bengal Gram)',
    image: '/lovable-uploads/5c1f5c63-6ebd-455f-a899-917b7cb493d2.png',
    description: 'Split chickpeas with a nutty flavor, high in protein and fiber.',
    price: '$8-$14 per kg',
    origin: 'Maharashtra, Rajasthan',
    seasonality: 'Available year-round',
    category: 'pulses'
  },
  {
    id: 'p5',
    name: 'Green Gram (Whole Moong)',
    image: '/lovable-uploads/a509a10f-b6bf-4d99-a1c5-ecda3e2a22c3.png',
    description: 'Whole green lentils with high nutritional value, used in various dishes.',
    price: '$9-$16 per kg',
    origin: 'Madhya Pradesh, Rajasthan',
    seasonality: 'Available year-round',
    category: 'pulses'
  }
];

const vegetableProducts = [
  {
    id: 'v1',
    name: 'Tomato',
    image: '/lovable-uploads/426a1a22-9041-4d08-8c0e-5e881b9011fe.png',
    description: 'Fresh, vine-ripened tomatoes with balanced sweetness and acidity.',
    price: '$12-$20 per box',
    origin: 'Various regions in India',
    seasonality: 'Year-round, peak in winter',
    category: 'vegetables'
  },
  {
    id: 'v2',
    name: 'Brinjal (Eggplant)',
    image: '/lovable-uploads/9551071f-00bb-4
