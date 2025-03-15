
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Leaf, MapPin, Mail, Phone } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 py-3'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Improved Logo */}
          <Link to="/" className="flex items-center relative z-50">
            <div className="flex items-center">
              <div className="mr-2 text-agro-leaf">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4D7C0F" />
                      <stop offset="100%" stopColor="#65a30d" />
                    </linearGradient>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="2" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>
                  <circle cx="20" cy="20" r="20" fill="url(#logoGradient)" />
                  <g filter="url(#glow)">
                    <path d="M20 8C14 8 10 12 10 18C10 24 14 28 20 28C26 28 30 24 30 18C30 12 26 8 20 8Z" fill="#FFFFFF" fillOpacity="0.9"/>
                    <path d="M20 12C17 12 15 14 15 17C15 21 17 24 20 24C23 24 25 21 25 17C25 14 23 12 20 12Z" fill="#65a30d" fillOpacity="0.9"/>
                    <path d="M20 15C19 15 18 16 18 17C18 18 19 19 20 19C21 19 22 18 22 17C22 16 21 15 20 15Z" fill="#FFA62B" fillOpacity="0.9"/>
                    <path d="M14 30C14 32.761 16.239 35 19 35H21C23.761 35 26 32.761 26 30V27H14V30Z" fill="#FFFFFF" fillOpacity="0.7"/>
                  </g>
                </svg>
              </div>
              <div>
                <span className="font-bold text-2xl tracking-tight bg-gradient-to-r from-agro-leaf to-agro-mango bg-clip-text text-transparent">ARGO<span className="text-agro-leaf font-extrabold">VITAL</span></span>
                <div className="text-xs text-gray-500 font-medium -mt-1">Premium Agricultural Exports</div>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className={`hidden md:flex items-center space-x-8`}>
            <NavLink to="/" exact={true}>Home</NavLink>
            <NavLink to="/about" exact={false}>About Us</NavLink>
            <NavLink to="/products" exact={false}>Products</NavLink>
            <NavLink to="/global-reach" exact={false}>Global Reach</NavLink>
            <NavLink to="/contact" exact={false}>Contact</NavLink>
            <Link to="/request-quote" className="cta-button-primary">
              Get a Quote
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden relative z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-white pt-20 px-6 z-40">
          <div className="flex flex-col space-y-6 text-center">
            <MobileNavLink to="/" setIsOpen={setIsOpen}>Home</MobileNavLink>
            <MobileNavLink to="/about" setIsOpen={setIsOpen}>About Us</MobileNavLink>
            <MobileNavLink to="/products" setIsOpen={setIsOpen}>Products</MobileNavLink>
            <MobileNavLink to="/global-reach" setIsOpen={setIsOpen}>Global Reach</MobileNavLink>
            <MobileNavLink to="/contact" setIsOpen={setIsOpen}>Contact</MobileNavLink>
            
            <Link 
              to="/request-quote" 
              className="cta-button-primary w-full !mt-8"
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </Link>

            {/* Quick Contact Info */}
            <div className="border-t border-gray-100 pt-6 mt-8">
              <h3 className="font-medium text-gray-800 mb-4">Quick Contact</h3>
              <div className="flex flex-col space-y-4">
                <a href="tel:+919876543210" className="flex items-center justify-center text-gray-600 hover:text-agro-leaf transition-colors">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+91 98765 43210</span>
                </a>
                <a href="mailto:info@argovital.com" className="flex items-center justify-center text-gray-600 hover:text-agro-leaf transition-colors">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>info@argovital.com</span>
                </a>
                <div className="flex items-center justify-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span>Kavali, Andhra Pradesh, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

// Desktop Navigation Link
const NavLink = ({ to, children, exact }: { to: string; children: React.ReactNode; exact: boolean }) => {
  const location = useLocation();
  const isActive = exact 
    ? location.pathname === to 
    : location.pathname.startsWith(to);
  
  return (
    <Link 
      to={to} 
      className={`relative px-1 py-2 font-medium text-gray-700 hover:text-agro-leaf transition-colors ${
        isActive ? 'text-agro-leaf after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-agro-leaf' : ''
      }`}
    >
      {children}
    </Link>
  );
};

// Mobile Navigation Link
const MobileNavLink = ({ to, children, setIsOpen }: { to: string; children: React.ReactNode; setIsOpen: (isOpen: boolean) => void }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`block px-4 py-3 text-lg font-medium rounded-md transition-colors ${
        isActive 
          ? 'bg-agro-leaf/10 text-agro-leaf' 
          : 'text-gray-800 hover:bg-gray-50'
      }`}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Link>
  );
};

export default Navbar;
