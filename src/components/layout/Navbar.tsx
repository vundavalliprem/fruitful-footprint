
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-white/90 backdrop-blur-md shadow-sm' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
            <div className="flex items-center">
              <div className="relative mr-3 h-12 w-12 bg-gradient-to-tr from-agro-leaf to-agro-mango rounded-full overflow-hidden flex items-center justify-center shadow-md">
                <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white">
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
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About Us</Link>
            
            {/* Products dropdown */}
            <div className="relative group">
              <button 
                className="nav-link flex items-center"
                onClick={() => setProductsOpen(!productsOpen)}
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                Products <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div 
                className={`absolute top-full left-0 w-48 bg-white shadow-md rounded-md overflow-hidden transition-all duration-300 transform origin-top
                ${productsOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <Link to="/products/mangoes" className="block px-4 py-2 hover:bg-secondary transition-colors">Mangoes</Link>
                <Link to="/products/fruits" className="block px-4 py-2 hover:bg-secondary transition-colors">Fruits</Link>
                <Link to="/products/rice" className="block px-4 py-2 hover:bg-secondary transition-colors">Rice</Link>
                <Link to="/products/pulses" className="block px-4 py-2 hover:bg-secondary transition-colors">Pulses</Link>
                <Link to="/products/grains" className="block px-4 py-2 hover:bg-secondary transition-colors">Grains</Link>
                <Link to="/products/spices" className="block px-4 py-2 hover:bg-secondary transition-colors">Spices</Link>
                <Link to="/products/millets" className="block px-4 py-2 hover:bg-secondary transition-colors">Millets</Link>
              </div>
            </div>
            
            <Link to="/global-reach" className="nav-link">Global Reach</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/request-quote" className="cta-button-primary">
              Request a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed inset-0 z-40 bg-background transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '64px' }}
      >
        <nav className="flex flex-col p-4 space-y-3">
          <Link to="/" className="nav-link text-lg" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="nav-link text-lg" onClick={() => setIsOpen(false)}>About Us</Link>
          
          <button 
            className="flex items-center justify-between w-full py-2 text-left text-lg"
            onClick={() => setProductsOpen(!productsOpen)}
          >
            <span>Products</span>
            <ChevronDown className={`h-5 w-5 transform transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
          </button>
          
          <div className={`space-y-2 pl-4 ${productsOpen ? 'block' : 'hidden'}`}>
            <Link to="/products/mangoes" className="block py-2 text-foreground/80" onClick={() => setIsOpen(false)}>Mangoes</Link>
            <Link to="/products/fruits" className="block py-2 text-foreground/80" onClick={() => setIsOpen(false)}>Fruits</Link>
            <Link to="/products/rice" className="block py-2 text-foreground/80" onClick={() => setIsOpen(false)}>Rice</Link>
            <Link to="/products/pulses" className="block py-2 text-foreground/80" onClick={() => setIsOpen(false)}>Pulses</Link>
            <Link to="/products/grains" className="block py-2 text-foreground/80" onClick={() => setIsOpen(false)}>Grains</Link>
            <Link to="/products/spices" className="block py-2 text-foreground/80" onClick={() => setIsOpen(false)}>Spices</Link>
            <Link to="/products/millets" className="block py-2 text-foreground/80" onClick={() => setIsOpen(false)}>Millets</Link>
          </div>
          
          <Link to="/global-reach" className="nav-link text-lg" onClick={() => setIsOpen(false)}>Global Reach</Link>
          <Link to="/contact" className="nav-link text-lg" onClick={() => setIsOpen(false)}>Contact</Link>
          
          <div className="pt-4">
            <Link to="/request-quote" className="cta-button-primary block text-center" onClick={() => setIsOpen(false)}>
              Request a Quote
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
