
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      
      {/* About Section */}
      <div className="py-20 px-4 bg-background relative overflow-hidden" id="about">
        <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                  alt="MGC Studio Team"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white">
                About MGC Studio
              </h2>
              <p className="text-xl text-white/60">
                MGC Studio is a micro software house and marketing agency with a team of dedicated experts specializing in digital solutions for businesses of all sizes.
              </p>
              <p className="text-white/80">
                We believe in creating digital solutions that not only look great but also drive results for our clients. Our team combines technical expertise with creative thinking to deliver projects that exceed expectations.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild className="flex items-center gap-2 bg-accent text-white hover:bg-accent/90">
                  <Link to="/company">
                    <Users className="w-5 h-5" />
                    Meet The Team
                  </Link>
                </Button>
                <Button asChild variant="outline" className="text-white border-white/20 hover:bg-white/10">
                  <Link to="/contact">
                    <Mail className="w-5 h-5 mr-2" />
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-20 px-4 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/10 backdrop-blur-3xl"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to transform your digital presence?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Let's discuss how MGC Studio can help achieve your business goals through innovative digital solutions.
          </p>
          <Button asChild className="px-8 py-6 text-lg bg-white text-background hover:bg-white/90">
            <Link to="/contact">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
