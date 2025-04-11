
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img 
            src="/lovable-uploads/800d76a0-1e63-4e96-bb1c-90874876a085.png" 
            alt="Kozhisec Logo" 
            className="h-8 w-auto mr-2"
          />
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Kozhisec
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">
            Services
          </a>
          <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">
            Solutions
          </a>
          <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">
            Case Studies
          </a>
          <Button variant="ghost" className="text-gray-700 hover:text-blue-600">
            Client Portal
          </Button>
          <Button>Get Protected</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white absolute top-full left-0 right-0 shadow-lg py-4 px-4">
          <div className="flex flex-col space-y-4">
            <a
              href="#services"
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#features"
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Case Studies
            </a>
            <Button variant="ghost" className="justify-start">
              Client Portal
            </Button>
            <Button>Get Protected</Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
