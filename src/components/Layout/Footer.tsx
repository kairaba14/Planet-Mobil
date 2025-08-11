import { Link } from "react-router-dom";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Fuel,
  Zap,
  Droplets
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  const quickLinks = [
    { name: t("Home"), path: "/" },
    { name: t("About"), path: "/about" },
    { name: t("Products"), path: "/products" },
    { name: t("Services"), path: "/services" },
  ];

  const services = [
    { name: t("home.services.items.fuel.title"), icon: Fuel },
    { name: t("home.services.items.lubricants.title"), icon: Droplets },
    { name: t("home.services.items.energy.title"), icon: Zap },
    { name: t("home.services.items.stations.title"), icon: MapPin },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Linkedin, href: "#", name: "LinkedIn" },
    { icon: Instagram, href: "#", name: "Instagram" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">
                Planet <span className="text-gradient-gold">Mobil</span>
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {t("home.hero.desc")}
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-secondary" />
                <span className="text-gray-300">{t("contactPage.info.addressLines.0")}, {t("contactPage.info.addressLines.1")}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary" />
                <span className="text-gray-300">info@planetmobil.com</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold mb-6 text-secondary">{t("footer.quickLinks", { defaultValue: "Quick Links" })}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-secondary transition-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold mb-6 text-secondary">{t("footer.ourServices", { defaultValue: "Our Services" })}</h4>
            <ul className="space-y-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <li key={service.name} className="flex items-center space-x-3">
                    <Icon className="w-4 h-4 text-secondary" />
                    <span className="text-gray-300">{service.name}</span>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* Social & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-xl font-semibold mb-6 text-secondary">{t("footer.followUs", { defaultValue: "Follow Us" })}</h4>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="bg-secondary/10 p-3 rounded-lg hover:bg-secondary hover:text-secondary-foreground transition-smooth"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
            
            <div>
              <h5 className="font-semibold mb-3">{t("footer.newsletter.title", { defaultValue: "Newsletter" })}</h5>
              <p className="text-gray-300 text-sm mb-4">{t("footer.newsletter.desc", { defaultValue: "Stay updated with our latest news and offers." })}</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder={t("footer.newsletter.placeholder", { defaultValue: "Your email" })}
                  className="flex-1 px-4 py-2 rounded-l-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-r-lg hover:bg-accent transition-smooth">
                  {t("footer.newsletter.subscribe", { defaultValue: "Subscribe" })}
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} Planet Mobil. {t("footer.rights", { defaultValue: "All rights reserved." })}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-secondary text-sm transition-smooth">
              {t("footer.privacy", { defaultValue: "Privacy Policy" })}
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-secondary text-sm transition-smooth">
              {t("footer.terms", { defaultValue: "Terms of Service" })}
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;