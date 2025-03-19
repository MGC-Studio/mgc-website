
import { Card } from "@/components/ui/card";
import { Globe, ShoppingBag, Code, Cpu, PenTool, LineChart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Features = () => {
  const services = [
    {
      icon: <Globe className="w-6 h-6 text-white" />,
      title: "Website Development",
      description: "Professional websites built with WordPress, Webflow, or custom solutions tailored to your needs."
    },
    {
      icon: <ShoppingBag className="w-6 h-6 text-white" />,
      title: "E-commerce Solutions",
      description: "Online stores built with WooCommerce, Shopify, and other platforms to boost your sales."
    },
    {
      icon: <Code className="w-6 h-6 text-white" />,
      title: "Custom Web Apps",
      description: "Bespoke web applications using React, Next.js, TypeScript, PHP, and Python."
    },
    {
      icon: <Cpu className="w-6 h-6 text-white" />,
      title: "AI Workflows",
      description: "Intelligent automation with OpenAI, Claude, N8N, and NocoDB integrations."
    },
    {
      icon: <PenTool className="w-6 h-6 text-white" />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to increase your online presence."
    },
    {
      icon: <LineChart className="w-6 h-6 text-white" />,
      title: "Data Analysis",
      description: "Turning your business data into actionable insights for better decision making."
    }
  ];

  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden" id="services">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-white mb-4">Our Services</h2>
          <p className="body-lg text-white/60 max-w-2xl mx-auto">
            Comprehensive digital solutions to enhance your business presence and operations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-6 hover-lift glass-effect flex flex-col items-start gap-4 group transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                {service.icon}
              </div>
              <div>
                <h3 className="heading-sm mb-2 text-white">{service.title}</h3>
                <p className="body-md text-white/60">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild className="px-6 py-6 text-lg bg-primary text-white hover:bg-primary/90">
            <Link to="/services">
              View All Services
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Features;
