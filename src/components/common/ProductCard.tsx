
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Updated interface to either accept individual props or a product object
interface ProductCardProps {
  name?: string;
  image?: string;
  description?: string;
  link?: string;
  product?: {
    id: string;
    name: string;
    image: string;
    description: string;
    price?: string;
    origin?: string;
    seasonality?: string;
    category?: string;
    link?: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  image,
  description,
  link,
  product
}) => {
  // If product object is provided, use its properties, otherwise use individual props
  const displayName = product?.name || name || '';
  const displayImage = product?.image || image || '';
  const displayDescription = product?.description || description || '';
  const displayLink = product?.link || link || '#';

  return (
    <div className="product-card group">
      <div className="image-hover-zoom aspect-[4/3]">
        <img 
          src={displayImage} 
          alt={displayName} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{displayName}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{displayDescription}</p>
        <Link 
          to={displayLink} 
          className="inline-flex items-center text-agro-leaf hover:text-agro-mango transition-colors duration-300"
        >
          Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
