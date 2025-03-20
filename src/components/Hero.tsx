
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, PenTool } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { i18n, t } = useTranslation();
  const heroImgPath = `hero_img_${i18n.language}.png`;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-12">
          <h1 className="heading-lg text-gray-800">
            {t('hero.title')}
          </h1>
          <p className="body-lg text-gray-600 max-w-xl">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="px-6 py-6 text-lg bg-primary text-white hover:bg-primary/90 flex items-center gap-2">
              <Link to="/services">
                {t('hero.buttons.services')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="px-6 py-6 text-lg text-gray-800 border-gray-300 hover:bg-primary/90">
              <Link to="/contact">
                {t('hero.buttons.contact')}
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative z-10 rounded-3xl overflow-hidden">
          <img src={heroImgPath} alt="hero image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
