
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Calendar, Globe, Package, Bookmark } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from "@/components/ui/dialog";

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
  const origin = product?.origin || 'India';
  const seasonality = product?.seasonality || 'Year-round';
  
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: `I am interested in ${displayName}. Please send me more information.`
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Sent!",
      description: "We'll get back to you shortly about your product inquiry.",
    });
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

  // Get export countries based on product type
  const getExportCountries = () => {
    const category = product?.category || '';
    switch(category) {
      case 'mangoes': return ['UK', 'USA', 'UAE', 'Singapore'];
      case 'rice': return ['USA', 'UAE', 'Canada', 'Australia'];
      case 'fruits': return ['UK', 'Germany', 'France', 'Netherlands'];
      case 'spices': return ['USA', 'Canada', 'Australia', 'Japan'];
      case 'pulses': return ['UAE', 'UK', 'Singapore', 'Malaysia'];
      case 'vegetables': return ['UK', 'Germany', 'Qatar', 'Singapore'];
      case 'millets': return ['USA', 'Canada', 'Australia', 'UAE'];
      default: return ['USA', 'UK', 'UAE', 'Singapore'];
    }
  };

  // Get packaging info based on product type
  const getPackagingInfo = () => {
    const category = product?.category || '';
    switch(category) {
      case 'mangoes': return 'Card boxes of 2kg, 4kg, and 6kg';
      case 'rice': return 'Vacuum sealed bags of 1kg, 5kg, and 25kg';
      case 'fruits': return 'Corrugated boxes with protective packaging';
      case 'spices': return 'Moisture-proof vacuum sealed packages';
      case 'pulses': return 'Vacuum sealed packets of 500g, 1kg, and 5kg';
      case 'vegetables': return 'Temperature-controlled packaging';
      case 'millets': return 'Air-tight packaging in 500g, 1kg, and 5kg units';
      default: return 'Standard export packaging';
    }
  };

  // Format the seasonality as overlay text with more stylish variants
  const getSeasonalityOverlay = () => {
    if (seasonality.toLowerCase().includes('year-round')) {
      return 'AVAILABLE ALL YEAR';
    }
    
    if (seasonality.toLowerCase().includes('varies')) {
      return 'SEASONAL HARVEST';
    }
    
    return seasonality.split(' to ').join('-').toUpperCase();
  };

  // Get seasonality badge color based on product type
  const getSeasonalityBadgeClass = () => {
    const category = product?.category || '';
    switch(category) {
      case 'mangoes': return 'bg-gradient-to-r from-amber-500 to-amber-600';
      case 'rice': return 'bg-gradient-to-r from-amber-700 to-amber-800';
      case 'fruits': return 'bg-gradient-to-r from-red-500 to-red-600';
      case 'spices': return 'bg-gradient-to-r from-orange-500 to-orange-600';
      case 'pulses': return 'bg-gradient-to-r from-emerald-500 to-emerald-600';
      case 'vegetables': return 'bg-gradient-to-r from-green-500 to-green-600';
      case 'millets': return 'bg-gradient-to-r from-yellow-500 to-yellow-600';
      default: return 'bg-gradient-to-r from-agro-leaf to-green-600';
    }
  };

  return (
    <div className="product-card group">
      <div className="image-hover-zoom aspect-[4/3] relative">
        <img 
          src={displayImage} 
          alt={displayName} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className={`absolute bottom-3 right-3 ${getSeasonalityBadgeClass()} text-white px-3 py-1 text-sm font-semibold rounded-full shadow-md`}>
          {getSeasonalityOverlay()}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{displayName}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{displayDescription}</p>
        
        <Dialog>
          <DialogTrigger asChild>
            <button className="w-full py-2 px-4 bg-agro-leaf text-white rounded-md hover:bg-agro-leaf/90 transition-colors flex items-center justify-center">
              View Details
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">{displayName}</DialogTitle>
            </DialogHeader>
            
            <div className="mt-4 space-y-4">
              <p className="text-gray-700">{displayDescription}</p>
              
              <div>
                <h4 className="font-semibold text-lg mb-2">Specifications</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <Globe className="h-5 w-5 text-agro-leaf flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Origin:</p>
                      <p className="text-gray-700">{origin}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Calendar className="h-5 w-5 text-agro-leaf flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Season:</p>
                      <p className="text-gray-700">{seasonality}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Package className="h-5 w-5 text-agro-leaf flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Packaging:</p>
                      <p className="text-gray-700">{getPackagingInfo()}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-2">Export Information</h4>
                <p className="mb-2 text-gray-700">We export this premium product to various countries worldwide, including:</p>
                <div className="flex flex-wrap gap-2">
                  {getExportCountries().map((country, index) => (
                    <span key={index} className="px-3 py-1 bg-agro-leaf/10 text-agro-leaf rounded-full text-sm font-medium">
                      {country}
                    </span>
                  ))}
                </div>
              </div>
              
              <DialogFooter>
                <button 
                  onClick={() => setIsOpen(true)} 
                  className="bg-agro-leaf text-white px-4 py-2 rounded-md hover:bg-agro-leaf/90 transition-colors flex items-center justify-center w-full sm:w-auto"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Inquire Now
                </button>
              </DialogFooter>
              
              {isOpen && (
                <div className="mt-4 border-t pt-4">
                  <h4 className="font-semibold text-lg mb-3">Inquire About This Product</h4>
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
                    <button 
                      type="submit" 
                      className="bg-agro-leaf text-white px-4 py-2 rounded-md hover:bg-agro-leaf/90 transition-colors flex items-center justify-center w-full"
                    >
                      Submit Inquiry
                    </button>
                  </form>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default ProductCard;
