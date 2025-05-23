
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";

const Navbar = () => {
  const { t } = useTranslation();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/95 backdrop-blur-lg border-b border-primary/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/6902de51-e3ed-4fe8-a60d-e2feafe23b72.png" 
            alt="MGC Studio Logo" 
            className="h-10"
          />
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/services" className="text-gray-700 hover:text-primary transition-colors font-body">
            {t('navigation.services')}
          </Link>
          <Link to="/projects" className="text-gray-700 hover:text-primary transition-colors font-body">
            {t('navigation.projects')}
          </Link>
          <Link to="/company" className="text-gray-700 hover:text-primary transition-colors font-body">
            {t('navigation.company')}
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-primary transition-colors font-body">
            {t('navigation.contact')}
          </Link>
          <Button className="bg-primary text-white hover:bg-primary/90">
            {t('navigation.getQuote')}
          </Button>
          <LanguageSwitcher />
        </div>
        
        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-800">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-l border-primary/20 p-0">
              <div className="flex flex-col h-full">
                <div className="p-6 border-b border-primary/10">
                  <div className="flex items-center justify-between">
                    <Link to="/" className="flex items-center">
                      <img 
                        src="/lovable-uploads/6902de51-e3ed-4fe8-a60d-e2feafe23b72.png" 
                        alt="MGC Studio Logo" 
                        className="h-8"
                      />
                    </Link>
                    <SheetClose className="rounded-full p-2 hover:bg-gray-100">
                      <X className="h-5 w-5 text-gray-800" />
                      <span className="sr-only">Close</span>
                    </SheetClose>
                  </div>
                </div>
                
                <nav className="flex-1 p-6">
                  <ul className="space-y-6">
                    <li>
                      <SheetClose asChild>
                        <Link to="/services" className="text-xl font-medium text-gray-800 hover:text-primary transition-colors block">
                          {t('navigation.services')}
                        </Link>
                      </SheetClose>
                    </li>
                    <li>
                      <SheetClose asChild>
                        <Link to="/projects" className="text-xl font-medium text-gray-800 hover:text-primary transition-colors block">
                          {t('navigation.projects')}
                        </Link>
                      </SheetClose>
                    </li>
                    <li>
                      <SheetClose asChild>
                        <Link to="/company" className="text-xl font-medium text-gray-800 hover:text-primary transition-colors block">
                          {t('navigation.company')}
                        </Link>
                      </SheetClose>
                    </li>
                    <li>
                      <SheetClose asChild>
                        <Link to="/contact" className="text-xl font-medium text-gray-800 hover:text-primary transition-colors block">
                          {t('navigation.contact')}
                        </Link>
                      </SheetClose>
                    </li>
                  </ul>
                </nav>
                
                <div className="p-6 border-t border-primary/10">
                  <SheetClose asChild>
                    <Button asChild className="w-full bg-primary text-white hover:bg-primary/90">
                      <Link to="/contact">{t('navigation.getQuote')}</Link>
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
