
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Globe, ShoppingBag, Code, Cpu, PenTool, LineChart, CheckCircle2, Bookmark } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useCallback, useMemo } from "react";
import { Service, ServiceData } from "@/components/services/types";
import ServicesGrid from "@/components/services/ServicesGrid";

const Services = () => {
  const { i18n, t } = useTranslation();
  const servicesTxt = t("services.services", { returnObjects: true }) as ServiceData[];

  const getValueIcon = useCallback(
    (type: string): JSX.Element => {
      const styling = "w-8 h-8 text-accent";
      switch (type) {
        case 'globe':
          return <Globe className={styling} />
        case 'shopping-bag':
          return <ShoppingBag className={styling} />
        case 'code':
          return <Code className={styling} />
        case 'cpu':
          return <Cpu className={styling} />
        case 'pen':
          return <PenTool className={styling} />
        case 'chart':
          return <LineChart className={styling} />
        case 'chart':
          return <LineChart className={styling} />
        default:
          return <Bookmark className={styling} />;
      }
    },
    [],
  )
  const services: Service[] = useMemo(() => servicesTxt.map(obj => ({ ...obj, icon: getValueIcon(obj.icon) })), [i18n.language]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{t("services.title")}</h1>
          <p className="text-xl max-w-3xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <ServicesGrid services={services} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
