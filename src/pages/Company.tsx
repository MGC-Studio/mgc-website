
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import {
  Clock, Zap, Users, Heart,
  Bookmark,
} from "lucide-react";
import TeamMember from "@/components/team/TeamMember";
import { TeamMemberData, Values } from "@/components/team/types";
import { useTranslation } from "react-i18next";
import { useCallback, useMemo } from "react";
const Company = () => {
  const { i18n, t } = useTranslation();
  const team = t("about.teamSection.team", { returnObjects: true }) as TeamMemberData[];
  const valuesTxt = t("company.values.values", { returnObjects: true }) as Values[];

  const getValueIcon = useCallback(
    (type: string): JSX.Element => {
      const styling = "w-6 h-6 text-accent";
      switch (type) {
        case 'clock':
          return <Clock className={styling} />
        case 'zap':
          return <Zap className={styling} />
        case 'users':
          return <Users className={styling} />
        case 'heart':
          return <Heart className={styling} />

        default:
          return <Bookmark className={styling} />;
      }
    },
    [],
  )
  const values = useMemo(() => valuesTxt.map(obj => ({ ...obj, icon: getValueIcon(obj.icon) })), [i18n.language])



  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{t("company.title")}</h1>
          <p className="text-xl max-w-3xl mx-auto">
            {t("company.subtitle")}
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">{t("company.about.title")}</h2>
              <p>
                {t("company.about.p1")}
              </p>
              <p>
                {t("company.about.p2")}
              </p>
              <p>
                {t("company.about.p3")}
              </p>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1974&auto=format&fit=crop"
                  alt="MGC Studio Office"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 px-4 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t("company.values.title")}</h2>
            <p className="text-xl max-w-2xl mx-auto">
              {t("company.values.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-6 hover-lift glass-effect flex flex-col items-center text-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p >{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 px-4" id="team">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t("about.teamSection.title")}</h2>
            <p className="text-xl max-w-2xl mx-auto">
              {t("about.teamSection.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <TeamMember key={index} teamMemberData={member} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Company;
