import { motion } from "framer-motion";
import { ArrowRight, Fuel, Zap, Droplets, MapPin, Shield, Award, Users, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Fuel,
      title: t("home.services.items.fuel.title"),
      description: t("home.services.items.fuel.desc"),
      color: "bg-red-500"
    },
    {
      icon: Droplets,
      title: t("home.services.items.lubricants.title"),
      description: t("home.services.items.lubricants.desc"),
      color: "bg-blue-500"
    },
    {
      icon: Zap,
      title: t("home.services.items.energy.title"),
      description: t("home.services.items.energy.desc"),
      color: "bg-yellow-500"
    },
    {
      icon: MapPin,
      title: t("home.services.items.stations.title"),
      description: t("home.services.items.stations.desc"),
      color: "bg-green-500"
    }
  ];

  const stats = [
  { icon: Users, number: "500+", label: t("home.stats.happyClients") },
  { icon: Truck, number: "50+", label: t("home.stats.deliveryTrucks") },
  { icon: MapPin, number: "25+", label: t("home.stats.gasStations") },
  { icon: Award, number: "15+", label: t("home.stats.yearsExperience") }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-planet-gray to-planet-black">
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Animated Background Elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-32 h-32 border border-secondary/20 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-24 h-24 border border-secondary/30 rounded-full"
        />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              {t("home.hero.title1")} <span className="text-gradient-gold">{t("home.hero.title2")}</span> {t("home.hero.title3")}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto"
            >
              {t("home.hero.desc")}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="btn-gold text-lg px-8 py-3">
                {t("home.hero.ctaServices")} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-black"
              >
                {t("home.hero.ctaContact")}
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t("home.services.heading").split(" ")[0]} <span className="text-gradient-gold">{t("home.services.heading").split(" ")[1] || ""}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("home.services.sub")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="h-full shadow-card hover:shadow-elegant transition-smooth border-0 bg-white">
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <Icon className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    className="text-4xl font-bold mb-2"
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="text-gray-300">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-accent">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary-foreground">
              {t("home.cta.heading")}
            </h2>
            <p className="text-xl mb-8 text-secondary-foreground/80 max-w-2xl mx-auto">
              {t("home.cta.sub")}
            </p>
            <Link to="/contact">
              <Button size="lg" className="btn-dark text-lg px-8 py-3">
                {t("home.cta.button")} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
