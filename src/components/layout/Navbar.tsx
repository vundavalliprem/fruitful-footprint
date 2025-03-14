
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
          {/* Logo */}
          <Link to="/" className="flex items-center relative z-50">
            <div className="flex items-center">
              <div className="mr-2 text-agro-leaf">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="20" fill="#4D7C0F" />
                  <path d="M20 5C13.925 5 9 9.925 9 16C9 22.075 13.925 27 20 27C26.075 27 31 22.075 31 16C31 9.925 26.075 5 20 5ZM20 7C25.159 7 28.945 10.841 28.945 16C28.945 21.159 25.159 25 20 25C14.841 25 11 21.159 11 16C11 10.841 14.841 7 20 7Z" fill="#FFFFFF"/>
                  <path d="M14 30C14 32.761 16.239 35 19 35H21C23.761 35 26 32.761 26 30V27H14V30Z" fill="#FFFFFF"/>
                  <path d="M20 12C18.895 12 18 12.895 18 14C18 15.105 18.895 16 20 16C21.105 16 22 15.105 22 14C22 12.895 21.105 12 20 12Z" fill="#FFFFFF"/>
                  <path d="M15 17C14.448 17 14 17.448 14 18C14 18.552 14.448 19 15 19C15.552 19 16 18.552 16 18C16 17.448 15.552 17 15 17Z" fill="#FFFFFF"/>
                  <path d="M25 17C24.448 17 24 17.448 24 18C24 18.552 24.448 19 25 19C25.552 19 26 18.552 26 18C26 17.448 25.552 17 25 17Z" fill="#FFFFFF"/>
                  <path d="M15 23C15.552 23 16 22.552 16 22C16 21.448 15.552 21 15 21C14.448 21 14 21.448 14 22C14 22.552 14.448 23 15 23Z" fill="#FFFFFF"/>
                  <path d="M25 23C25.552 23 26 22.552 26 22C26 21.448 25.552 21 25 21C24.448 21 24 21.448 24 22C24 22.552 24.448 23 25 23Z" fill="#FFFFFF"/>
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
const NavLink = ({ to, children, exact }) => {
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
const MobileNavLink = ({ to, children, setIsOpen }) => {
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
