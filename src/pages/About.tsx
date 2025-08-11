import { motion } from "framer-motion";
import { Shield, Award, Target, Eye, Heart, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: Shield,
      title: t("about.values.items.reliability.title"),
      description: t("about.values.items.reliability.desc")
    },
    {
      icon: Award,
      title: t("about.values.items.excellence.title"),
      description: t("about.values.items.excellence.desc")
    },
    {
      icon: Heart,
      title: t("about.values.items.sustainability.title"),
      description: t("about.values.items.sustainability.desc")
    },
    {
      icon: Globe,
      title: t("about.values.items.innovation.title"),
      description: t("about.values.items.innovation.desc")
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      position: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      description: "20+ years in energy sector leadership"
    },
    {
      name: "Michael Chen",
      position: "Chief Technology Officer", 
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      description: "Expert in energy technology and innovation"
    },
    {
      name: "Emily Rodriguez",
      position: "Head of Operations",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      description: "Operational excellence and process optimization"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary to-planet-gray text-white">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            {t("about.hero.title").split(" ")[0]} <span className="text-gradient-gold">{t("about.hero.title").split(" ")[2]}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            {t("about.hero.desc")}
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">{t("about.story.heading")}</h2>
              <p className="text-lg text-muted-foreground mb-6">{t("about.story.p1")}</p>
              <p className="text-lg text-muted-foreground mb-6">{t("about.story.p2")}</p>
              <p className="text-lg text-muted-foreground">{t("about.story.p3")}</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop"
                alt="Industrial facility"
                className="rounded-lg shadow-elegant w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-transparent rounded-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Target className="w-16 h-16 text-secondary mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-4">{t("about.missionVision.missionTitle")}</h3>
              <p className="text-lg text-muted-foreground">{t("about.missionVision.missionDesc")}</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <Eye className="w-16 h-16 text-secondary mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-4">{t("about.missionVision.visionTitle")}</h3>
              <p className="text-lg text-muted-foreground">{t("about.missionVision.visionDesc")}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">{t("about.values.heading")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("about.values.sub")}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full text-center shadow-card hover:shadow-elegant transition-smooth">
                    <CardContent className="p-6">
                      <Icon className="w-12 h-12 text-secondary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">{t("about.team.heading")}</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t("about.team.sub")}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-elegant group-hover:shadow-gold transition-smooth"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-secondary/20 to-transparent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-secondary mb-3">{member.position}</p>
                <p className="text-gray-300">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;