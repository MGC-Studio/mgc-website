
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, PenTool } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="heading-xl text-gray-800">
            Digital Solutions for Modern Businesses
          </h1>
          <p className="body-lg text-gray-600 max-w-xl">
            MGC Studio is a micro software house and marketing agency specializing in websites, e-commerce, custom web-apps and AI workflows.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="px-6 py-6 text-lg bg-primary text-white hover:bg-primary/90 flex items-center gap-2">
              <Link to="/services">
                Our Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="px-6 py-6 text-lg text-gray-800 border-gray-300 hover:bg-gray-50">
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-8 pt-8">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <div className="text-gray-600 font-body">Web Development</div>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                <PenTool className="w-6 h-6 text-primary" />
              </div>
              <div className="text-gray-600 font-body">Digital Marketing</div>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                <Database className="w-6 h-6 text-primary" />
              </div>
              <div className="text-gray-600 font-body">AI Workflows</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
              alt="Digital Solutions"
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
