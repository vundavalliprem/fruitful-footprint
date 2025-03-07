
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  name: string;
  image: string;
  description: string;
  link: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  image,
  description,
  link
}) => {
  return (
    <div className="product-card group">
      <div className="image-hover-zoom aspect-[4/3]">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <Link 
          to={link} 
          className="inline-flex items-center text-agro-leaf hover:text-agro-mango transition-colors duration-300"
        >
          Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
