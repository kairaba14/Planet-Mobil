import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Fuel, Car, Truck, Coffee, ShoppingBag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const Stations = () => {
  const stations = [
    {
      id: 1,
      name: "Planet Mobil Downtown",
      address: "123 Main Street, Downtown District",
      phone: "+1 (555) 123-0001",
      hours: "24/7",
      services: ["Premium Fuel", "Car Wash", "Convenience Store", "ATM"],
      amenities: ["Coffee Shop", "Restrooms", "Air Pump", "Vacuum"],
      coordinates: { lat: 40.7128, lng: -74.0060 },
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Planet Mobil Highway Express",
      address: "456 Highway 101, Industrial Zone",
      phone: "+1 (555) 123-0002", 
      hours: "5:00 AM - 11:00 PM",
      services: ["Diesel", "Premium Fuel", "Truck Services", "Fleet Cards"],
      amenities: ["Restaurant", "Truck Parking", "Shower Facilities", "WiFi"],
      coordinates: { lat: 40.7580, lng: -73.9855 },
      image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Planet Mobil Suburban",
      address: "789 Oak Avenue, Residential Area",
      phone: "+1 (555) 123-0003",
      hours: "6:00 AM - 10:00 PM",
      services: ["Premium Fuel", "Convenience Store", "Lottery", "Money Transfer"],
      amenities: ["Snack Bar", "Kids Play Area", "Electric Charging", "Parking"],
      coordinates: { lat: 40.6892, lng: -74.0445 },
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      name: "Planet Mobil Business Center",
      address: "321 Corporate Drive, Business District",
      phone: "+1 (555) 123-0004",
      hours: "24/7",
      services: ["Premium Fuel", "Fleet Services", "Business Accounts", "Bulk Sales"],
      amenities: ["Meeting Room", "Business Lounge", "Concierge", "Valet"],
      coordinates: { lat: 40.7282, lng: -73.7949 },
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      name: "Planet Mobil Airport",
      address: "567 Airport Boulevard, Terminal Area",
      phone: "+1 (555) 123-0005",
      hours: "24/7",
      services: ["Premium Fuel", "Car Rental", "Travel Shop", "Currency Exchange"],
      amenities: ["Travel Lounge", "Baggage Storage", "Phone Charging", "Taxi Service"],
      coordinates: { lat: 40.6413, lng: -73.7781 },
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      name: "Planet Mobil Marina",
      address: "890 Harbor Drive, Waterfront District",
      phone: "+1 (555) 123-0006",
      hours: "6:00 AM - 9:00 PM",
      services: ["Marine Fuel", "Premium Fuel", "Boat Supplies", "Ice"],
      amenities: ["Harbor View", "Boat Slip Rental", "Fishing Supplies", "Seafood Restaurant"],
      coordinates: { lat: 40.7505, lng: -73.9934 },
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop"
    }
  ];

  const serviceIcons = {
    "Premium Fuel": Fuel,
    "Diesel": Truck,
    "Car Wash": Car,
    "Convenience Store": ShoppingBag,
    "Coffee Shop": Coffee,
    "Fleet Services": Truck,
    "Marine Fuel": MapPin,
    "Truck Services": Truck,
    "Business Accounts": ShoppingBag,
    "Car Rental": Car,
    "Travel Shop": ShoppingBag,
    "Boat Supplies": MapPin,
    "Fleet Cards": ShoppingBag,
    "Lottery": ShoppingBag,
    "Money Transfer": ShoppingBag,
    "Bulk Sales": Truck,
    "Currency Exchange": ShoppingBag,
    "ATM": ShoppingBag,
    "Ice": ShoppingBag
  };

  const { t } = useTranslation();

  // Translated station feature items (title/desc pairs)
  const translatedFeatures = t("stationsPage.features.items", { returnObjects: true }) as Array<{
    title: string;
    desc: string;
  }>;

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
            {t("stationsPage.hero.title").split(" ")[0]} <span className="text-gradient-gold">{t("stationsPage.hero.title").split(" ")[1] || ""}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            {t("stationsPage.hero.desc")}
          </motion.p>
        </div>
      </section>

      {/* Interactive Map Placeholder */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6">{t("stationsPage.finder.heading")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("stationsPage.finder.sub")}</p>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-muted rounded-lg h-96 mb-12 flex items-center justify-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20" />
            <div className="relative z-10 text-center">
              <MapPin className="w-16 h-16 text-secondary mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">{t("stationsPage.finder.mapTitle")}</h3>
              <p className="text-muted-foreground">{t("stationsPage.finder.mapHint")}</p>
              <Button className="btn-gold mt-4">{t("stationsPage.finder.mapOpen")}</Button>
            </div>
            
            {/* Floating Station Markers */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 left-20 w-4 h-4 bg-secondary rounded-full shadow-lg"
            />
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-32 right-32 w-4 h-4 bg-secondary rounded-full shadow-lg"
            />
            <motion.div
              animate={{ y: [-3, 3, -3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-24 left-1/3 w-4 h-4 bg-secondary rounded-full shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Station List */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">{t("stationsPage.list.heading")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("stationsPage.list.sub")}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stations.map((station, index) => (
              <motion.div
                key={station.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full shadow-card hover:shadow-elegant transition-smooth overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src={station.image}
                      alt={station.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">{station.name}</h3>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{station.address}</span>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                        <span className="text-sm">{station.phone}</span>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-secondary flex-shrink-0" />
                        <span className="text-sm">{station.hours}</span>
                      </div>
                    </div>

                    {/* Services */}
                    <div className="mt-6">
                      <h4 className="font-semibold mb-3">{t("stationsPage.list.services")}</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {station.services.slice(0, 4).map((service) => {
                          const Icon = serviceIcons[service] || Fuel;
                          return (
                            <div key={service} className="flex items-center space-x-2 text-sm">
                              <Icon className="w-4 h-4 text-secondary" />
                              <span className="truncate">{service}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Amenities */}
                    <div className="mt-6">
                      <h4 className="font-semibold mb-3">{t("stationsPage.list.amenities")}</h4>
                      <div className="flex flex-wrap gap-2">
                        {station.amenities.slice(0, 3).map((amenity) => (
                          <span key={amenity} className="bg-muted px-2 py-1 rounded text-xs">
                            {amenity}
                          </span>
                        ))}
                        {station.amenities.length > 3 && (
                          <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs">
                            +{station.amenities.length - 3} {t("stationsPage.list.more")}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex space-x-2 mt-6">
                      <Button className="btn-gold flex-1" size="sm">{t("stationsPage.list.directions")}</Button>
                      <Button variant="outline" size="sm">{t("stationsPage.list.details")}</Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Station Features */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">{t("stationsPage.features.heading")}</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t("stationsPage.features.sub")}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Fuel, title: translatedFeatures?.[0]?.title, description: translatedFeatures?.[0]?.desc },
              { icon: Clock, title: translatedFeatures?.[1]?.title, description: translatedFeatures?.[1]?.desc },
              { icon: ShoppingBag, title: translatedFeatures?.[2]?.title, description: translatedFeatures?.[2]?.desc },
              { icon: Car, title: translatedFeatures?.[3]?.title, description: translatedFeatures?.[3]?.desc }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <Icon className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
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
            <h2 className="text-4xl font-bold mb-6 text-secondary-foreground">{t("stationsPage.features.cta.heading")}</h2>
            <p className="text-xl mb-8 text-secondary-foreground/80 max-w-2xl mx-auto">{t("stationsPage.features.cta.sub")}</p>
            <Button size="lg" className="btn-dark">{t("stationsPage.features.cta.button")}</Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Stations;