
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Have a project in mind or want to learn more about our services? We'd love to hear from you.
          </p>
        </div>
      </div>
      
      {/* Contact Information */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="p-6 hover-lift glass-effect flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Our Location</h3>
              <p className="text-white/60">Warsaw, Poland</p>
              <p className="text-white/60">123 Digital Street</p>
            </Card>
            
            <Card className="p-6 hover-lift glass-effect flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-white/60">contact@mgcstudio.com</p>
              <p className="text-white/60">support@mgcstudio.com</p>
            </Card>
            
            <Card className="p-6 hover-lift glass-effect flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-white/60">+48 123 456 789</p>
              <p className="text-white/60">Mon-Fri, 9:00-17:00</p>
            </Card>
          </div>
          
          {/* Contact Form */}
          <Card className="p-8 glass-effect max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-white">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-white">Your Email</label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-white">Subject</label>
                <input
                  id="subject"
                  type="text"
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-white">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full py-6 bg-accent text-white hover:bg-accent/90 flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
      
      {/* Map Section (placeholder) */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="h-80 rounded-3xl overflow-hidden glass-effect">
            <div className="w-full h-full bg-accent/5 flex items-center justify-center">
              <p className="text-white/60">Map embedding would go here</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
