import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation();
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=2070&auto=format&fit=crop",
      title: t("testimonials.projects.construction.title"),
      client: t("testimonials.projects.construction.client"),
      description: t("testimonials.projects.construction.description"),
      tags: ["WordPress", "SEO", "Responsive Design"]
    },
    {
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
      title: t("testimonials.projects.itTraining.title"),
      client: t("testimonials.projects.itTraining.client"),
      description: t("testimonials.projects.itTraining.description"),
      tags: ["Next.js", "React", "Custom CMS"]
    },
    {
      image: "https://images.unsplash.com/photo-1607703703520-bb638e84caf2?q=80&w=1074&auto=format&fit=crop",
      title: t("testimonials.projects.ecommerce.title"),
      client: t("testimonials.projects.ecommerce.client"),
      description: t("testimonials.projects.ecommerce.description"),
      tags: ["Shopify", "WooCommerce", "Payment Integration"]
    }
  ];

  return (
    <div className="py-20 px-4 bg-white relative overflow-hidden" id="projects">
      <div className="absolute inset-0 bg-gray-50/50 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-gray-800 mb-4">
            {t("testimonials.title")}
          </h2>
          <p className="body-lg text-gray-600 max-w-2xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover-lift bg-white shadow-md">
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="w-4 h-4 text-primary" />
                  <span className="caption text-gray-500">{project.client}</span>
                </div>
                <h3 className="heading-sm text-gray-800 mb-2">{project.title}</h3>
                <p className="body-md text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild className="px-6 py-6 text-lg bg-primary text-white hover:bg-primary/90">
            <Link to="/projects">
              {t("testimonials.viewAll")}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
