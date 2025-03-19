
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/95 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/6902de51-e3ed-4fe8-a60d-e2feafe23b72.png" 
            alt="MGC Studio Logo" 
            className="h-10"
          />
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/services" className="text-white/80 hover:text-primary transition-colors font-body">Services</Link>
          <Link to="/projects" className="text-white/80 hover:text-primary transition-colors font-body">Projects</Link>
          <Link to="/company" className="text-white/80 hover:text-primary transition-colors font-body">Company</Link>
          <Link to="/contact" className="text-white/80 hover:text-primary transition-colors font-body">Contact</Link>
          <Button className="bg-primary text-white hover:bg-primary/90">
            Get a Quote
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
