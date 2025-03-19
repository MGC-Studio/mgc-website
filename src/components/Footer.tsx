
import { Github, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
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
            <p className="text-white/60">
              A micro software house and marketing agency specializing in websites, e-commerce, custom web-apps and AI workflows.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services#websites" className="text-white/60 hover:text-white transition-colors">Websites</Link></li>
              <li><Link to="/services#ecommerce" className="text-white/60 hover:text-white transition-colors">E-commerce</Link></li>
              <li><Link to="/services#webapps" className="text-white/60 hover:text-white transition-colors">Custom Web Apps</Link></li>
              <li><Link to="/services#ai" className="text-white/60 hover:text-white transition-colors">AI Workflows</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/company" className="text-white/60 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="text-white/60 hover:text-white transition-colors">Our Projects</Link></li>
              <li><Link to="/company#team" className="text-white/60 hover:text-white transition-colors">Our Team</Link></li>
              <li><Link to="/contact" className="text-white/60 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-white/60">Warsaw, Poland</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-white/60">contact@mgcstudio.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-white/60">+48 123 456 789</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-white/60">
            © {new Date().getFullYear()} MGC Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
