
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Download = () => {
  return (
    <div className="py-20 px-4 bg-primary/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          <h2 className="heading-lg text-gray-800">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="body-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with our team and let's discuss how we can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="px-8 py-6 text-lg bg-primary text-white hover:bg-primary/90 flex items-center gap-2">
              <Link to="/contact">
                <Mail className="w-5 h-5" />
                Contact Us
              </Link>
            </Button>
            <Button asChild className="px-8 py-6 text-lg bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 flex items-center gap-2">
              <a href="tel:+1234567890">
                <Phone className="w-5 h-5" />
                Call for a Quote
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
