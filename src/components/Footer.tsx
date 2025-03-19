
import { Github, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-20 px-4 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link to="/">
              <img 
                src="/lovable-uploads/6902de51-e3ed-4fe8-a60d-e2feafe23b72.png" 
                alt="MGC Studio Logo" 
                className="h-10"
              />
            </Link>
            <p className="text-gray-600">
              A micro software house and marketing agency specializing in websites, e-commerce, custom web-apps and AI workflows.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-gray-100 text-gray-600">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-gray-100 text-gray-600">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-gray-100 text-gray-600">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services#websites" className="text-gray-600 hover:text-primary transition-colors">Websites</Link></li>
              <li><Link to="/services#ecommerce" className="text-gray-600 hover:text-primary transition-colors">E-commerce</Link></li>
              <li><Link to="/services#webapps" className="text-gray-600 hover:text-primary transition-colors">Custom Web Apps</Link></li>
              <li><Link to="/services#ai" className="text-gray-600 hover:text-primary transition-colors">AI Workflows</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/company" className="text-gray-600 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="text-gray-600 hover:text-primary transition-colors">Our Projects</Link></li>
              <li><Link to="/company#team" className="text-gray-600 hover:text-primary transition-colors">Our Team</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-gray-600">Warsaw, Poland</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-gray-600">contact@mgcstudio.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-gray-600">+48 123 456 789</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} MGC Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
