import { Card } from "@/components/ui/card";
import { Globe, ShoppingBag, Code, Cpu, PenTool, LineChart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";

const Features = () => {
  const { t } = useTranslation();
  const services = [
    {
      icon: <Globe className="w-6 h-6 text-primary" />,
      title: t("features.services.websites.title"),
      description: t("features.services.websites.description"),
    },
    {
      icon: <ShoppingBag className="w-6 h-6 text-primary" />,
      title: t("features.services.ecommerce.title"),
      description: t("features.services.ecommerce.description"),
    },
    {
      icon: <Code className="w-6 h-6 text-primary" />,
      title: t("features.services.webapps.title"),
      description: t("features.services.webapps.description"),
    },
    {
      icon: <Cpu className="w-6 h-6 text-primary" />,
      title: t("features.services.ai.title"),
      description: t("features.services.ai.description"),
    },
    {
      icon: <PenTool className="w-6 h-6 text-primary" />,
      title: t("features.services.marketing.title"),
      description: t("features.services.marketing.description"),
    },
    {
      icon: <LineChart className="w-6 h-6 text-primary" />,
      title: t("features.services.data.title"),
      description: t("features.services.data.description"),
    }
  ];

  return (
    <div className="py-20 px-4 bg-gray-50 relative overflow-hidden" id="services">
      <div className="absolute inset-0 bg-primary/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-gray-800 mb-4">{t("features.title")}</h2>
          <p className="body-lg text-gray-600 max-w-2xl mx-auto">
            {t("features.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 hover-lift bg-white shadow-md flex flex-col items-start gap-4 group transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                {service.icon}
              </div>
              <div>
                <h3 className="heading-sm mb-2 text-gray-800">{service.title}</h3>
                <p className="body-md text-gray-600">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild className="px-6 py-6 text-lg bg-primary text-white hover:bg-primary/90">
            <Link to="/services">
              {t("features.viewAll")}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Features;
