
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/6902de51-e3ed-4fe8-a60d-e2feafe23b72.png" 
            alt="MGC Studio Logo" 
            className="h-10"
          />
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/services" className="text-white/80 hover:text-white transition-colors">Services</Link>
          <Link to="/projects" className="text-white/80 hover:text-white transition-colors">Projects</Link>
          <Link to="/company" className="text-white/80 hover:text-white transition-colors">Company</Link>
          <Link to="/contact" className="text-white/80 hover:text-white transition-colors">Contact</Link>
          <Button className="bg-accent text-white hover:bg-accent/90">
            Get a Quote
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
