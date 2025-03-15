
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
          {/* Company Info with Updated Logo */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="relative mr-3 h-14 w-14 bg-gradient-to-br from-green-600 to-yellow-500 rounded-lg overflow-hidden flex items-center justify-center shadow-md">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10">
                  <path d="M20 5C13.925 5 9 9.925 9 16C9 22.075 13.925 27 20 27C26.075 27 31 22.075 31 16C31 9.925 26.075 5 20 5Z" fill="url(#footerGradient)" />
                  <path d="M14 16C14 13.791 15.791 12 18 12H22C24.209 12 26 13.791 26 16V16C26 18.209 24.209 20 22 20H18C15.791 20 14 18.209 14 16V16Z" fill="white" />
                  <path d="M20 22C18.895 22 18 22.895 18 24C18 25.105 18.895 26 20 26C21.105 26 22 25.105 22 24C22 22.895 21.105 22 20 22Z" fill="white" />
                  <defs>
                    <linearGradient id="footerGradient" x1="9" y1="5" x2="31" y2="27" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="#4ADE80" />
                      <stop offset="1" stopColor="#F59E0B" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/20 rounded-lg"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-wider">ARGO<span className="text-orange-500">VITAL</span></span>
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
              <Link to="/terms-of-service" className="text-sm text-gray-500 hover:text-agro-leaf transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
