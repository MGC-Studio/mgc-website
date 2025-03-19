
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Globe, ShoppingBag, Code, Cpu, PenTool, LineChart, CheckCircle2 } from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "websites",
      icon: <Globe className="w-8 h-8 text-accent" />,
      title: "Website Development",
      description: "Professional websites that engage visitors and convert them into customers.",
      features: [
        "Custom WordPress websites",
        "Webflow design and development",
        "Responsive design for all devices",
        "SEO optimization",
        "Website maintenance and support",
        "Performance optimization"
      ],
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop"
    },
    {
      id: "ecommerce",
      icon: <ShoppingBag className="w-8 h-8 text-accent" />,
      title: "E-commerce Solutions",
      description: "Online stores that drive sales and provide excellent shopping experiences.",
      features: [
        "WooCommerce development",
        "Shopify store setup and customization",
        "Payment gateway integration",
        "Inventory management",
        "Product catalog setup",
        "Mobile-friendly checkout process"
      ],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "webapps",
      icon: <Code className="w-8 h-8 text-accent" />,
      title: "Custom Web Applications",
      description: "Bespoke web applications tailored to your specific business needs.",
      features: [
        "React and Next.js development",
        "TypeScript implementation",
        "PHP and Python backends",
        "Database design and optimization",
        "API development and integration",
        "Cloud deployment and scaling"
      ],
      image: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "ai",
      icon: <Cpu className="w-8 h-8 text-accent" />,
      title: "AI Workflows",
      description: "Intelligent automation solutions to streamline your business processes.",
      features: [
        "OpenAI and Claude integrations",
        "N8N workflow automation",
        "NocoDB database solutions",
        "Chatbot development",
        "AI-powered content generation",
        "Predictive analytics"
      ],
      image: "https://images.unsplash.com/photo-1677442135637-1da700a7939d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "marketing",
      icon: <PenTool className="w-8 h-8 text-accent" />,
      title: "Digital Marketing",
      description: "Strategies to increase your online presence and reach your target audience.",
      features: [
        "Search engine optimization (SEO)",
        "Social media marketing",
        "Content marketing",
        "Email campaigns",
        "PPC advertising",
        "Analytics and reporting"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
    },
    {
      id: "data",
      icon: <LineChart className="w-8 h-8 text-accent" />,
      title: "Data Analysis",
      description: "Turn your data into actionable insights to make better business decisions.",
      features: [
        "Business intelligence dashboards",
        "Data visualization",
        "Customer behavior analysis",
        "Sales and conversion tracking",
        "Performance reporting",
        "Trend identification"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to transform your business and boost your online presence
          </p>
        </div>
      </div>
      
      {/* Services List */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              id={service.id}
              className={`grid md:grid-cols-2 gap-12 items-center py-16 ${
                index !== 0 ? 'border-t border-white/10 pt-16' : ''
              }`}
            >
              <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center">
                  {service.icon}
                </div>
                <h2 className="text-3xl font-bold text-white">{service.title}</h2>
                <p className="text-xl text-white/60">{service.description}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`relative ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Services;
