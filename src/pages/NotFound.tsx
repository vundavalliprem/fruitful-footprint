
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import ScrollReveal from "@/components/common/ScrollReveal";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom max-w-4xl">
        <ScrollReveal>
          <div className="text-center p-8 md:p-12 rounded-2xl glass shadow-xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">404</h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8">The page you're looking for cannot be found.</p>
            <div className="w-16 h-1 bg-agro-gold mx-auto mb-8 rounded-full"></div>
            <p className="mb-8 text-foreground/70 max-w-xl mx-auto">
              It seems that the page you were trying to access doesn't exist or might have been moved.
            </p>
            <Link to="/" className="inline-flex items-center text-agro-leaf hover:text-agro-mango transition-colors duration-300 font-medium">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Return to Home
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default NotFound;
