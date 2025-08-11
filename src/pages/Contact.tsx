import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useTranslation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
  alert(t("contactPage.form.success"));
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t("contactPage.info.headOffice"),
      details: t("contactPage.info.addressLines", { returnObjects: true }) as string[]
    },
    {
      icon: Phone,
      title: t("contactPage.info.phoneNumbers"),
      details: [
        "Main: +1 (555) 123-4567",
        "Emergency: +1 (555) 911-FUEL",
        "Sales: +1 (555) 123-SALES"
      ]
    },
    {
      icon: Mail,
      title: t("contactPage.info.emailAddresses"),
      details: ["info@planetmobil.com", "sales@planetmobil.com", "support@planetmobil.com"]
    },
    {
      icon: Clock,
      title: t("contactPage.info.businessHours"),
      details: t("contactPage.info.hours", { returnObjects: true }) as string[]
    }
  ];

  const departments = [
    {
      name: t("contactPage.directory.items.sales.name"),
      email: "sales@planetmobil.com",
      phone: "+1 (555) 123-SALES",
      description: t("contactPage.directory.items.sales.desc")
    },
    {
      name: t("contactPage.directory.items.support.name"),
      email: "support@planetmobil.com", 
      phone: "+1 (555) 123-4567",
      description: t("contactPage.directory.items.support.desc")
    },
    {
      name: t("contactPage.directory.items.emergency.name"),
      email: "emergency@planetmobil.com",
      phone: "+1 (555) 911-FUEL",
      description: t("contactPage.directory.items.emergency.desc")
    },
    {
      name: t("contactPage.directory.items.corporate.name"),
      email: "partnerships@planetmobil.com",
      phone: "+1 (555) 123-CORP",
      description: t("contactPage.directory.items.corporate.desc")
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
            {t("contactPage.hero.title").split(" ")[0]} <span className="text-gradient-gold">{t("contactPage.hero.title").split(" ")[1] || ""}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            {t("contactPage.hero.desc")}
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-8">{t("contactPage.form.heading")}</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">{t("contactPage.form.name")}</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                      placeholder={t("contactPage.form.placeholders.name")}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">{t("contactPage.form.email")}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                      placeholder={t("contactPage.form.placeholders.email")}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">{t("contactPage.form.phone")}</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-2"
                      placeholder={t("contactPage.form.placeholders.phone")}
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">{t("contactPage.form.company")}</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="mt-2"
                      placeholder={t("contactPage.form.placeholders.company")}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject">{t("contactPage.form.subject")}</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="mt-2"
                    placeholder={t("contactPage.form.placeholders.subject")}
                  />
                </div>

                <div>
                  <Label htmlFor="message">{t("contactPage.form.message")}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="mt-2 min-h-32"
                    placeholder={t("contactPage.form.placeholders.message")}
                  />
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-gold w-full text-lg py-3"
                  >
                    {isSubmitting ? (
                      t("contactPage.form.submitting")
                    ) : (
                      <>
                        {t("contactPage.form.submit")} <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold mb-8">{t("contactPage.info.heading")}</h2>
              
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="shadow-card hover:shadow-elegant transition-smooth">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <Icon className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="text-xl font-semibold mb-3">{info.title}</h3>
                            <div className="space-y-1">
                              {info.details.map((detail, idx) => (
                                <p key={idx} className="text-muted-foreground">
                                  {detail}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Department Directory */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">{t("contactPage.directory.heading")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("contactPage.directory.sub")}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full shadow-card hover:shadow-elegant transition-smooth">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{dept.name}</h3>
                    <p className="text-muted-foreground mb-4">{dept.description}</p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-secondary" />
                        <a 
                          href={`mailto:${dept.email}`}
                          className="text-secondary hover:underline"
                        >
                          {dept.email}
                        </a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-secondary" />
                        <a 
                          href={`tel:${dept.phone}`}
                          className="text-secondary hover:underline"
                        >
                          {dept.phone}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6">{t("contactPage.visit.heading")}</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t("contactPage.visit.sub")}</p>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg h-96 flex items-center justify-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20" />
            <div className="relative z-10 text-center">
              <MapPin className="w-16 h-16 text-secondary mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">{t("contactPage.visit.mapTitle")}</h3>
              <p className="text-gray-300 mb-4">{t("contactPage.visit.mapHint")}</p>
              <Button className="btn-gold">{t("contactPage.visit.button")}</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Phone className="w-16 h-16 mx-auto mb-6 animate-pulse" />
            <h2 className="text-4xl font-bold mb-6">{t("contactPage.emergency.heading")}</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">{t("contactPage.emergency.desc")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+15559111FUEL">
                <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-3">
                  <Phone className="mr-2 w-5 h-5" />
                  {t("contactPage.emergency.call")}
                </Button>
              </a>
              <a href="mailto:emergency@planetmobil.com">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-red-600 text-lg px-8 py-3"
                >
                  <Mail className="mr-2 w-5 h-5" />
                  {t("contactPage.emergency.email")}
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;