
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail('');
    }
  };

  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="relative mr-3 h-10 w-10 bg-gradient-to-br from-agro-leaf via-green-600 to-agro-mango rounded-lg overflow-hidden flex items-center justify-center shadow-md">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white">
                  <path d="M20 5C11.716 5 5 11.716 5 20C5 28.284 11.716 35 20 35C28.284 35 35 28.284 35 20C35 11.716 28.284 5 20 5Z" fill="#FFFFFF" fillOpacity="0.9"/>
                  <path d="M20 8C16 8 12 11 12 16C12 21 16 28 20 28C24 28 28 21 28 16C28 11 24 8 20 8Z" fill="#52A447" fillOpacity="0.9"/>
                  <path d="M20 16C18 16 16 18 16 20C16 22 18 24 20 24C22 24 24 22 24 20C24 18 22 16 20 16Z" fill="#FFA62B" fillOpacity="0.9"/>
                  <path d="M7 18L12 12M12 12V17M12 12H7" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M33 18L28 12M28 12V17M28 12H33" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M20 32L14 27M14 27H19M14 27V32" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M20 32L26 27M26 27H21M26 27V32" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <div className="absolute inset-0 bg-gradient-to-br from-agro-leaf/20 via-green-600/20 to-agro-mango/20 rounded-lg"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-agro-leaf tracking-wider">ARGO<span className="text-agro-mango">VITAL</span></span>
                <span className="text-xs tracking-widest text-gray-600">PREMIUM EXPORTS</span>
              </div>
            </div>
            <p className="text-gray-600">
              Premium exporter of high-quality mangoes and agricultural products from India to the world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-agro-leaf transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-agro-leaf transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-agro-leaf transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-agro-leaf transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-medium text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-agro-leaf transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-agro-leaf transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-gray-600 hover:text-agro-leaf transition-colors">Products</Link></li>
              <li><Link to="/global-reach" className="text-gray-600 hover:text-agro-leaf transition-colors">Global Reach</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-agro-leaf transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="font-medium text-lg">Our Products</h4>
            <ul className="space-y-2">
              <li><Link to="/products/mangoes" className="text-gray-600 hover:text-agro-leaf transition-colors">Mangoes</Link></li>
              <li><Link to="/products/fruits" className="text-gray-600 hover:text-agro-leaf transition-colors">Fruits</Link></li>
              <li><Link to="/products/rice" className="text-gray-600 hover:text-agro-leaf transition-colors">Rice</Link></li>
              <li><Link to="/products/pulses" className="text-gray-600 hover:text-agro-leaf transition-colors">Pulses</Link></li>
              <li><Link to="/products/spices" className="text-gray-600 hover:text-agro-leaf transition-colors">Spices</Link></li>
              <li><Link to="/products/millets" className="text-gray-600 hover:text-agro-leaf transition-colors">Millets</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-medium text-lg">Subscribe to Our Newsletter</h4>
            <p className="text-gray-600">Stay updated with our latest products and offers.</p>
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-agro-leaf/20 focus:border-agro-leaf"
                required
              />
              <button 
                type="submit" 
                className="bg-agro-leaf text-white p-2 rounded-r-md hover:bg-agro-leaf/90 transition-colors"
                aria-label="Subscribe"
              >
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} ARGOVITAL PREMIUM EXPORTS. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <Link to="/privacy-policy" className="text-sm text-gray-500 hover:text-agro-leaf transition-colors">Privacy Policy</Link>
              <Link to="/privacy-policy" className="text-sm text-gray-500 hover:text-agro-leaf transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
