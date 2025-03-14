
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
              <div className="relative mr-3 h-10 w-10 bg-gradient-to-tr from-agro-leaf to-agro-mango rounded-full overflow-hidden flex items-center justify-center shadow-md">
                <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white">
                  <path d="M18 4C10.268 4 4 10.268 4 18C4 25.732 10.268 32 18 32C25.732 32 32 25.732 32 18C32 10.268 25.732 4 18 4Z" fill="white"/>
                  <path d="M18 7C15.5 7 13.5 9 13.5 12C13.5 15 15.5 19 18 19C20.5 19 22.5 15 22.5 12C22.5 9 20.5 7 18 7Z" fill="#52A447"/>
                  <path d="M18 19C15.5 19 13.5 21 13.5 24C13.5 27 15.5 29 18 29C20.5 29 22.5 27 22.5 24C22.5 21 20.5 19 18 19Z" fill="#52A447"/>
                  <path d="M7 18C7 15.5 9 13.5 12 13.5C15 13.5 19 15.5 19 18C19 20.5 15 22.5 12 22.5C9 22.5 7 20.5 7 18Z" fill="#FFA62B"/>
                  <path d="M19 18C19 15.5 21 13.5 24 13.5C27 13.5 29 15.5 29 18C29 20.5 27 22.5 24 22.5C21 22.5 19 20.5 19 18Z" fill="#FFA62B"/>
                </svg>
                <div className="absolute inset-0 bg-gradient-to-tr from-agro-leaf/40 to-agro-mango/40 rounded-full"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-agro-leaf tracking-wider">ARGO<span className="text-agro-mango">VITAL</span></span>
                <span className="text-xs tracking-widest text-gray-600">EXPORTS</span>
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
              &copy; {new Date().getFullYear()} ARGOVITAL EXPORTS PRIVATE LIMITED. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <Link to="/privacy-policy" className="text-sm text-gray-500 hover:text-agro-leaf transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-sm text-gray-500 hover:text-agro-leaf transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
