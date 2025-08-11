import { motion } from "framer-motion";
import { Truck, Clock, Shield, Phone, MapPin, Zap, Users, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  const mainServices = [
    {
      icon: Truck,
      title: t("servicesPage.core.items.fuel.title"),
      description: t("servicesPage.core.items.fuel.desc"),
      features: t("servicesPage.core.items.fuel.features", { returnObjects: true }) as string[],
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop"
    },
    {
      icon: MapPin,
      title: t("servicesPage.core.items.station.title"),
      description: t("servicesPage.core.items.station.desc"),
      features: t("servicesPage.core.items.station.features", { returnObjects: true }) as string[],
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=600&h=400&fit=crop"
    },
    {
      icon: Zap,
      title: t("servicesPage.core.items.consulting.title"),
      description: t("servicesPage.core.items.consulting.desc"),
      features: t("servicesPage.core.items.consulting.features", { returnObjects: true }) as string[],
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&h=400&fit=crop"
    }
  ];

  const supportServices = [
    {
      icon: Clock,
      title: t("servicesPage.support.items.support247.title"),
      description: t("servicesPage.support.items.support247.desc")
    },
    {
      icon: Shield,
      title: t("servicesPage.support.items.quality.title"),
      description: t("servicesPage.support.items.quality.desc")
    },
    {
      icon: Users,
      title: t("servicesPage.support.items.training.title"),
      description: t("servicesPage.support.items.training.desc")
    },
    {
      icon: Wrench,
      title: t("servicesPage.support.items.maintenance.title"),
      description: t("servicesPage.support.items.maintenance.desc")
    }
  ];

  const processSteps = (t("servicesPage.process.steps", { returnObjects: true }) as Array<{step:string; title:string; desc:string}>);

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
            {t("servicesPage.hero.title").split(" ")[0]} <span className="text-gradient-gold">{t("servicesPage.hero.title").split(" ")[1] || ""}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            {t("servicesPage.hero.desc")}
          </motion.p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">{t("servicesPage.core.heading")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("servicesPage.core.sub")}</p>
          </motion.div>

          <div className="space-y-20">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                    <div className="flex items-center mb-6">
                      <Icon className="w-12 h-12 text-secondary mr-4" />
                      <h3 className="text-3xl font-bold">{service.title}</h3>
                    </div>
                    <p className="text-lg text-muted-foreground mb-8">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          className="flex items-center"
                        >
                          <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    <Button className="btn-gold">{t("servicesPage.core.btn")}</Button>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`relative ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-lg shadow-elegant w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-transparent rounded-lg" />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">{t("servicesPage.support.heading")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("servicesPage.support.sub")}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full text-center shadow-card hover:shadow-elegant transition-smooth">
                    <CardContent className="p-6">
                      <Icon className="w-12 h-12 text-secondary mx-auto mb-4" />
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

      {/* Process Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">{t("servicesPage.process.heading")}</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t("servicesPage.process.sub")}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="bg-secondary text-secondary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.desc}</p>
                
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-secondary/30 transform -translate-y-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Phone className="w-16 h-16 mx-auto mb-6 animate-pulse" />
            <h2 className="text-4xl font-bold mb-6">{t("servicesPage.emergency.heading")}</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">{t("servicesPage.emergency.desc")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-3">{t("servicesPage.emergency.call")}</Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-red-600 text-lg px-8 py-3"
              >
                {t("servicesPage.emergency.request")}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">{t("servicesPage.cta.heading")}</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">{t("servicesPage.cta.sub")}</p>
            <Button size="lg" className="btn-gold">{t("servicesPage.cta.button")}</Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;