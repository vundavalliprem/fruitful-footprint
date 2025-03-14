
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Send, Phone } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

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
  
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: `I am interested in ${displayName}. Please send me more information.`
  });
  const { toast } = useToast();

  const handleInquiry = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowInquiryForm(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Sent!",
      description: "We'll get back to you shortly about your product inquiry.",
    });
    setShowInquiryForm(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: `I am interested in ${displayName}. Please send me more information.`
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

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
        
        {showInquiryForm ? (
          <div className="mt-4">
            <h4 className="font-medium text-lg mb-3">Inquire About This Product</h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agro-leaf/20"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agro-leaf/20"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agro-leaf/20"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agro-leaf/20 resize-none"
                  required
                />
              </div>
              <div className="flex space-x-2">
                <button 
                  type="submit" 
                  className="bg-agro-leaf text-white px-4 py-2 rounded-md hover:bg-agro-leaf/90 transition-colors flex items-center"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Inquiry
                </button>
                <button 
                  type="button" 
                  onClick={() => setShowInquiryForm(false)}
                  className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <button
              onClick={handleInquiry}
              className="inline-flex items-center text-agro-mango hover:text-agro-leaf transition-colors duration-300"
            >
              <Phone className="mr-2 h-4 w-4" />
              Inquire Now <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
