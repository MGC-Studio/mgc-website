
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { 
  Clock, Zap, Users, Heart, 
  Linkedin, Mail, Globe, Twitter
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Company = () => {
  const values = [
    {
      icon: <Clock className="w-6 h-6 text-accent" />,
      title: "Time-Efficiency",
      description: "We value your time and deliver projects within agreed deadlines without sacrificing quality."
    },
    {
      icon: <Zap className="w-6 h-6 text-accent" />,
      title: "Innovation",
      description: "We constantly explore new technologies and approaches to provide cutting-edge solutions."
    },
    {
      icon: <Users className="w-6 h-6 text-accent" />,
      title: "Collaboration",
      description: "We work closely with our clients to ensure their vision is realized in every project."
    },
    {
      icon: <Heart className="w-6 h-6 text-accent" />,
      title: "Passion",
      description: "We're passionate about digital solutions and put our heart into every project we undertake."
    }
  ];
  
  const team = [
    {
      name: "Marcin Kowalski",
      role: "Founder & Lead Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
      bio: "Marcin has over 15 years of experience in web development and software engineering. He founded MGC Studio with a vision to help businesses transform their digital presence.",
      social: {
        linkedin: "#",
        twitter: "#",
        website: "#"
      }
    },
    {
      name: "Aleksandra Nowak",
      role: "UX/UI Designer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1922&auto=format&fit=crop",
      bio: "Aleksandra brings creativity and user-centered design principles to every project. Her designs are not only beautiful but also highly functional and user-friendly.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Tomasz Jankowski",
      role: "Backend Developer",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop",
      bio: "Tomasz specializes in building robust backend systems and databases. His expertise in PHP, Python, and database optimization ensures our applications run smoothly.",
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Kasia Lewandowska",
      role: "Digital Marketing Specialist",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
      bio: "Kasia has a deep understanding of digital marketing strategies and helps our clients increase their online visibility and reach their target audiences effectively.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About MGC Studio</h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            A micro software house and marketing agency dedicated to helping businesses succeed in the digital world
          </p>
        </div>
      </div>
      
      {/* About Section */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Our Story</h2>
              <p className="text-white/80">
                MGC Studio was founded with a simple mission: to help businesses of all sizes establish and enhance their digital presence. As a micro agency, we pride ourselves on providing personalized service and direct communication with our clients.
              </p>
              <p className="text-white/80">
                Our team comprises experts in web development, e-commerce, custom applications, and AI workflows. We combine technical expertise with creative thinking to deliver solutions that not only meet but exceed our clients' expectations.
              </p>
              <p className="text-white/80">
                We believe that even small businesses deserve high-quality digital solutions. That's why we work closely with our clients to understand their specific needs and deliver tailored solutions that help them achieve their business goals.
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
            <h2 className="text-3xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              The principles that guide our work and relationships with clients
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
                <h3 className="text-xl font-semibold text-white">{value.title}</h3>
                <p className="text-white/60">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      {/* Team Section */}
      <div className="py-16 px-4" id="team">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              The talented professionals behind MGC Studio's success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover-lift glass-effect">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                  <p className="text-accent mb-3">{member.role}</p>
                  <p className="text-white/60 text-sm mb-4">{member.bio}</p>
                  <div className="flex gap-2">
                    {member.social.linkedin && (
                      <Button variant="ghost" size="icon" className="hover:bg-white/10 h-8 w-8">
                        <Linkedin className="w-4 h-4" />
                      </Button>
                    )}
                    {member.social.twitter && (
                      <Button variant="ghost" size="icon" className="hover:bg-white/10 h-8 w-8">
                        <Twitter className="w-4 h-4" />
                      </Button>
                    )}
                    {member.social.website && (
                      <Button variant="ghost" size="icon" className="hover:bg-white/10 h-8 w-8">
                        <Globe className="w-4 h-4" />
                      </Button>
                    )}
                    <Button variant="ghost" size="icon" className="hover:bg-white/10 h-8 w-8 ml-auto">
                      <Mail className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Company;
