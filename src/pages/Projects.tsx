
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import ProjectCard from "@/components/projects/ProjectCard";

const Projects = () => {
  const { t } = useTranslation();

  //KSZRD, WealthyFrame, SlyVip, MatteoBrunnetii, Motorise, CapsuleGym, KrystianFolman

  const projects = [
    {
      image: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=2070&auto=format&fit=crop",
      title: "Construction Company Website",
      client: "Pawel's Home Building Services",
      date: "June 2023",
      description: "A modern responsive website with project gallery and lead generation forms for a local construction company. The site features an interactive project showcase, testimonials section, and optimized contact forms.",
      challenge: "The client needed a professional online presence to showcase their portfolio and generate leads in a competitive market.",
      solution: "We designed a modern, mobile-friendly website with an emphasis on visual project showcasing and easy contact options.",
      results: "50% increase in inquiries within the first three months and improved visibility in local search results.",
      tags: ["WordPress", "SEO", "Responsive Design", "Lead Generation"]
    },
    {
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
      title: "IT Training Platform",
      client: "Szymon's IT Consulting",
      date: "September 2023",
      description: "A custom web application for delivering IT training and consulting services. The platform includes course management, user progress tracking, and a booking system for consulting sessions.",
      challenge: "The client needed to transition from in-person training to a hybrid model with online courses and virtual consulting.",
      solution: "We developed a custom platform using Next.js and React with secure user authentication and a comprehensive course management system.",
      results: "Successfully transitioned 80% of training materials online and expanded client reach beyond local markets.",
      tags: ["Next.js", "React", "Custom CMS", "Authentication"]
    },
    {
      image: "https://images.unsplash.com/photo-1607703703520-bb638e84caf2?q=80&w=1074&auto=format&fit=crop",
      title: "E-commerce Store",
      client: "Local Artisan Products",
      date: "December 2023",
      description: "A comprehensive e-commerce solution for a local artisan collective. The store features product listings, inventory management, secure checkout, and integration with shipping providers.",
      challenge: "The client needed a way to sell handmade products online with specific inventory management requirements and custom product options.",
      solution: "We implemented a WooCommerce solution with custom plugins to handle their specific product variations and inventory needs.",
      results: "200% increase in sales in the first six months compared to their previous selling methods.",
      tags: ["WooCommerce", "Payment Integration", "Custom Plugins"]
    },
    {
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
      title: "Marketing Agency Website",
      client: "Creative Solutions",
      date: "February 2024",
      description: "A creative and dynamic website for a marketing agency, with case studies, service offerings, and a blog section for content marketing.",
      challenge: "The agency needed a website that reflected their creative capabilities and effectively showcased their portfolio.",
      solution: "We designed a visually striking website with interactive elements and a comprehensive portfolio system.",
      results: "Improved user engagement with average session duration increasing by 45%.",
      tags: ["Webflow", "Animation", "Content Strategy"]
    },
    {
      image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=2070&auto=format&fit=crop",
      title: "AI Customer Service Bot",
      client: "Regional Insurance Provider",
      date: "March 2024",
      description: "An AI-powered chatbot for handling customer service inquiries for an insurance company, integrated with their existing systems.",
      challenge: "The client needed to handle increasing customer service inquiries without expanding their team.",
      solution: "We developed a custom AI solution using OpenAI's technologies integrated with their customer database.",
      results: "Successfully automated responses to 70% of common inquiries, reducing response time from hours to seconds.",
      tags: ["OpenAI", "API Integration", "Automation"]
    },
    {
      image: "https://images.unsplash.com/photo-1576153192396-180ecef2a715?q=80&w=1974&auto=format&fit=crop",
      title: "Restaurant Ordering System",
      client: "Gourmet Dining Group",
      date: "April 2024",
      description: "A custom ordering system for a restaurant chain, with online ordering, table reservations, and kitchen management features.",
      challenge: "The client needed to streamline their ordering process and integrate online orders with their in-house systems.",
      solution: "We created a comprehensive system with customer-facing and staff-facing interfaces, real-time updates, and payment processing.",
      results: "30% reduction in order processing time and a 25% increase in online orders.",
      tags: ["React", "Node.js", "Real-time Updates"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{t("projects.title")}</h1>
          <p className="text-xl max-w-3xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/10 backdrop-blur-3xl"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">
            {t("projects.cta.title")}
          </h2>
          <p className="text-xl mb-8">
            {t("projects.cta.subtitle")}
          </p>
          <Button asChild className="px-8 py-6 text-lg bg-primary hover:bg-primary/90">
            <a href="/contact">
              {t("projects.cta.link")}
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
