
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold  mb-6">{t("contact.title")}</h1>
          <p className="text-xl max-w-3xl mx-auto">
            {t("contact.subtitle")}
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
              <h3 className="text-xl font-semibold  mb-2">{t("contact.office.title")}</h3>
              <p>{t("contact.office.addressLine")}</p>
            </Card>

            <Card className="p-6 hover-lift glass-effect flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("contact.email.title")}</h3>
              <p><a href={`mailto:${t("contact.email.email")}`} className="underline">{t("contact.email.email")}</a></p>
            </Card>

            <Card className="p-6 hover-lift glass-effect flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("contact.call.title")}</h3>
              <p><a href={`tel:${t("contact.call.phone")}`} className="underline">{t("contact.call.phone")}</a></p>
              <p>{t("contact.call.days")}</p>
              <p>{t("contact.call.hours")}</p>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 glass-effect max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-2 text-center">{t("contact.form.title")}</h2>
            <p className="text-center mb-6 text-black/50">{t("contact.form.subtitle")}</p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" >{t("contact.form.name.label")}</label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-4 py-2 bg-white/5 border border-primary/60 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder={t("contact.form.name.placeholder")}

                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email">{t("contact.form.email.label")}</label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-4 py-2 bg-white/5 border border-primary/60 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder={t("contact.form.email.placeholder")}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject">{t("contact.form.subject.label")}</label>
                <input
                  id="subject"
                  type="text"
                  className="w-full px-4 py-2 bg-white/5 border border-primary/60 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder={t("contact.form.subject.placeholder")}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message">{t("contact.form.message.label")}</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 bg-white/5 border border-primary/60 rounded-md focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder={t("contact.form.message.placeholder")}
                ></textarea>
              </div>

              <Button type="submit" className="w-full py-6 bg-accent hover:bg-accent/90 flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                {t("contact.form.submit")}
              </Button>
            </form>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
