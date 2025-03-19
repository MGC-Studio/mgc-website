
import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Testimonials = () => {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=2070&auto=format&fit=crop",
      title: "Construction Company Website",
      client: "Pawel's Home Building Services",
      description: "Modern responsive website with project gallery and lead generation forms.",
      tags: ["WordPress", "SEO", "Responsive Design"]
    },
    {
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
      title: "IT Training Platform",
      client: "Szymon's IT Consulting",
      description: "Custom web application for IT training and consulting services.",
      tags: ["Next.js", "React", "Custom CMS"]
    },
    {
      image: "https://images.unsplash.com/photo-1607703703520-bb638e84caf2?q=80&w=1074&auto=format&fit=crop",
      title: "E-commerce Store",
      client: "Local Artisan Products",
      description: "Online store with inventory management and payment processing.",
      tags: ["Shopify", "WooCommerce", "Payment Integration"]
    }
  ];

  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden" id="projects">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Recent Projects
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Explore our portfolio of successful digital transformations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover-lift glass-effect">
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="w-4 h-4 text-accent" />
                  <span className="text-white/60 text-sm">{project.client}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-white/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs bg-accent/10 text-accent/90 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild className="px-6 py-6 text-lg bg-accent text-white hover:bg-accent/90">
            <Link to="/projects">
              View All Projects
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
