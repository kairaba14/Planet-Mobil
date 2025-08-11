import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLang = (lng: "fr" | "en") => {
    i18n.changeLanguage(lng);
    // optional: persist selection
    localStorage.setItem("lang", lng);
  };

  useEffect(() => {
    const saved = localStorage.getItem("lang") as "fr" | "en" | null;
    if (saved && saved !== i18n.language) i18n.changeLanguage(saved);
  }, [i18n]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Services", path: "/services" },
    { name: "Stations", path: "/stations" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth bg-background/70 backdrop-blur-md shadow-elegant ${
        isScrolled
          ? "md:bg-background/95 md:backdrop-blur-md md:shadow-elegant"
          : "md:bg-transparent md:backdrop-blur-0"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3">
              <img src="/src/assets/opengraph-image.png" alt="Planet Mobil Logo" className="h-10 w-auto" />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-smooth ${
                  location.pathname === item.path ? "text-secondary" : "text-foreground hover:text-gradient-gold"
                }`}
              >
                {t(item.name)}
                {location.pathname === item.path && (
                  <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary" />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            {/* Language Dropdown (Desktop) - hover open, no radio */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  aria-label="Change language"
                  className="h-8 px-2 rounded-full bg-card/80 border border-border shadow-elegant hover:bg-card/95 flex items-center gap-1"
                >
                  <span className="text-base leading-none">
                    {i18n.language?.startsWith("fr") ? "🇫🇷" : "🇬🇧"}
                  </span>
                  <ChevronDown className="h-3.5 w-3.5 opacity-80" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onSelect={() => changeLang("fr")}
                  className={`hover:text-gradient-gold  ${i18n.language?.startsWith("fr") ? "bg-accent text-accent-foreground" : ""}`}
                >
                  <span className="mr-2">🇫🇷</span> Français
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={() => changeLang("en")}
                  className={`hover:text-gradient-gold ${i18n.language?.startsWith("en") ? "bg-accent text-accent-foreground" : ""}`}
                >
                  <span className="mr-2">🇬🇧</span> English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* CTA Button */}
            <Button className="btn-gold">{t("GetQuote")}</Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 bg-background/70 backdrop-blur-md rounded-lg"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2 text-sm font-medium transition-smooth ${
                    location.pathname === item.path ? "text-secondary" : "text-foreground hover:text-gradient-gold"
                  }`}
                >
                  {t(item.name)}
                </Link>
              ))}

              {/* Language Dropdown (Mobile) - simple items, no radio */}
              <div className="pt-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      aria-label="Change language"
                      className="w-full h-9 rounded-full bg-card/80 border border-border shadow-elegant hover:bg-card/95 flex items-center justify-center gap-2"
                    >
                      <span className="text-base">
                        {i18n.language?.startsWith("fr") ? "🇫🇷" : "🇬🇧"}
                      </span>
                      <span className="text-sm">
                        {i18n.language?.startsWith("fr") ? "Français" : "English"}
                      </span>
                      <ChevronDown className="h-3.5 w-3.5 opacity-80" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onSelect={() => { changeLang("fr"); setIsOpen(false); }} className="hover:text-gradient-gold">
                      <span className="mr-2">🇫🇷</span> Français
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => { changeLang("en"); setIsOpen(false); }} className="hover:text-gradient-gold">
                      <span className="mr-2">🇬🇧</span> English
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <Button className="btn-gold w-full mt-4">{t("GetQuote")}</Button>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;