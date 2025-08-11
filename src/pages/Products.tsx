import { motion } from "framer-motion";
import { Fuel, Droplets, Zap, Car, Truck, Factory, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const Products = () => {
  const { t } = useTranslation();

  const productCategories = [
    {
      icon: Fuel,
      title: t("productsPage.categories.items.fuels.title"),
      description: t("productsPage.categories.items.fuels.desc"),
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      products: t("productsPage.categories.items.fuels.list", { returnObjects: true }) as string[]
    },
    {
      icon: Droplets,
      title: t("productsPage.categories.items.lubricants.title"),
      description: t("productsPage.categories.items.lubricants.desc"),
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      products: t("productsPage.categories.items.lubricants.list", { returnObjects: true }) as string[]
    },
    {
      icon: Zap,
      title: t("productsPage.categories.items.energy.title"),
      description: t("productsPage.categories.items.energy.desc"),
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=600&h=400&fit=crop",
      products: t("productsPage.categories.items.energy.list", { returnObjects: true }) as string[]
    }
  ];

  const translatedApps = t("productsPage.applications.items", { returnObjects: true }) as Array<{ title: string; desc: string }>;
  const applications = [
    { icon: Car, title: translatedApps?.[0]?.title, description: translatedApps?.[0]?.desc },
    { icon: Truck, title: translatedApps?.[1]?.title, description: translatedApps?.[1]?.desc },
    { icon: Factory, title: translatedApps?.[2]?.title, description: translatedApps?.[2]?.desc }
  ];

  const qualityFeatures = t("productsPage.quality.features", { returnObjects: true }) as string[];

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
            {t("productsPage.hero.title").split(" ")[0]} <span className="text-gradient-gold">{t("productsPage.hero.title").split(" ")[1] || ""}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            {t("productsPage.hero.desc")}
          </motion.p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">{t("productsPage.categories.heading")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("productsPage.categories.sub")}</p>
          </motion.div>

          <div className="space-y-20">
            {productCategories.map((category, index) => {
              const Icon = category.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={category.title}
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
                      <h3 className="text-3xl font-bold">{category.title}</h3>
                    </div>
                    <p className="text-lg text-muted-foreground mb-8">
                      {category.description}
                    </p>
                    
                    <div className="space-y-3 mb-8">
                      {category.products.map((product, idx) => (
                        <motion.div
                          key={product}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          className="flex items-center"
                        >
                          <CheckCircle className="w-5 h-5 text-secondary mr-3" />
                          <span>{product}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    <Button className="btn-gold">{t("productsPage.categories.btn")}</Button>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`relative ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                  >
                    <img
                      src={category.image}
                      alt={category.title}
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

      {/* Applications */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">{t("productsPage.applications.heading")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("productsPage.applications.sub")}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {applications.map((app, index) => {
              const Icon = app.icon;
              return (
                <motion.div
                  key={app.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full text-center shadow-card hover:shadow-elegant transition-smooth">
                    <CardContent className="p-8">
                      <Icon className="w-16 h-16 text-secondary mx-auto mb-6" />
                      <h3 className="text-2xl font-semibold mb-4">{app.title}</h3>
                      <p className="text-muted-foreground">{app.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">{t("productsPage.quality.heading")}</h2>
              <p className="text-lg text-gray-300 mb-8">{t("productsPage.quality.desc")}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {qualityFeatures.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <CheckCircle className="w-5 h-5 text-secondary mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=600&h=400&fit=crop"
                alt="Quality control facility"
                className="rounded-lg shadow-elegant w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-transparent rounded-lg" />
            </motion.div>
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
            <h2 className="text-4xl font-bold mb-6 text-secondary-foreground">{t("productsPage.cta.heading")}</h2>
            <p className="text-xl mb-8 text-secondary-foreground/80 max-w-2xl mx-auto">{t("productsPage.cta.sub")}</p>
            <Button size="lg" className="btn-dark">{t("productsPage.cta.button")}</Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;