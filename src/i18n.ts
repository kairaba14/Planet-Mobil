import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // Navigation
      Home: "Home",
      About: "About",
      Products: "Products",
      Services: "Services",
      Stations: "Stations",
      Contact: "Contact",
      GetQuote: "Get Quote",

      home: {
        hero: {
          title1: "Powering Your",
          title2: "Energy",
          title3: "Needs",
          desc:
            "Leading provider of fuel distribution, lubricants, and energy solutions. Delivering excellence across all energy sectors with unmatched reliability.",
          ctaServices: "Our Services",
          ctaContact: "Contact Us"
        },
        services: {
          heading: "Our Services",
          sub: "Comprehensive energy solutions designed to meet your every need with professional excellence.",
          items: {
            fuel: {
              title: "Fuel Distribution",
              desc: "Premium quality fuel delivery services for businesses and industries."
            },
            lubricants: {
              title: "Lubricants",
              desc: "High-performance lubricants for automotive and industrial applications."
            },
            energy: {
              title: "Energy Solutions",
              desc: "Comprehensive energy solutions tailored to your specific needs."
            },
            stations: {
              title: "Gas Stations",
              desc: "Strategically located gas stations for convenient fuel access."
            }
          }
        },
        stats: {
          happyClients: "Happy Clients",
          deliveryTrucks: "Delivery Trucks",
          gasStations: "Gas Stations",
          yearsExperience: "Years Experience"
        },
        cta: {
          heading: "Ready to Power Your Business?",
          sub: "Get in touch with our expert team and discover how Planet Mobil can fuel your success.",
          button: "Get Started Today"
        }
      },

      about: {
        hero: {
          title: "About Planet Mobil",
          desc:
            "Leading the energy industry with innovative solutions, unwavering commitment to quality, and a vision for a sustainable future."
        },
        story: {
          heading: "Our Story",
          p1:
            "Founded in 2008, Planet Mobil began as a small fuel distribution company with a big vision. Today, we're a leading provider of comprehensive energy solutions, serving hundreds of clients across multiple sectors.",
          p2:
            "Our journey has been marked by continuous growth, strategic expansion, and an unwavering commitment to excellence. We've built our reputation on reliability, quality, and customer satisfaction.",
          p3:
            "As we look to the future, we remain dedicated to innovation, sustainability, and powering the success of our partners and communities."
        },
        missionVision: {
          missionTitle: "Our Mission",
          missionDesc:
            "To provide reliable, high-quality energy solutions that power businesses and communities while maintaining the highest standards of safety and environmental responsibility.",
          visionTitle: "Our Vision",
          visionDesc:
            "To be the leading energy solutions provider, recognized for innovation, sustainability, and our commitment to creating a cleaner, more efficient energy future."
        },
        values: {
          heading: "Our Values",
          sub: "The principles that guide every decision we make and every service we provide.",
          items: {
            reliability: {
              title: "Reliability",
              desc: "Consistent quality and dependable service you can trust."
            },
            excellence: {
              title: "Excellence",
              desc: "Continuous improvement and industry-leading standards."
            },
            sustainability: {
              title: "Sustainability",
              desc: "Committed to environmental responsibility and green solutions."
            },
            innovation: {
              title: "Innovation",
              desc: "Embracing new technologies for better energy solutions."
            }
          }
        },
        team: {
          heading: "Leadership Team",
          sub: "Meet the experienced leaders driving Planet Mobil's vision and success."
        }
      },

      servicesPage: {
        hero: {
          title: "Our Services",
          desc:
            "Comprehensive energy services designed to support your business operations with reliability, efficiency, and professional excellence."
        },
        core: {
          heading: "Core Services",
          sub: "Comprehensive solutions to meet all your energy and fuel distribution needs.",
          btn: "Learn More",
          items: {
            fuel: {
              title: "Fuel Distribution",
              desc: "Reliable fuel delivery services with our modern fleet of tanker trucks.",
              features: [
                "24/7 Emergency Delivery",
                "Scheduled Regular Deliveries",
                "GPS Tracked Vehicles",
                "Certified Drivers",
                "Real-time Updates"
              ]
            },
            station: {
              title: "Gas Station Management",
              desc: "Complete gas station solutions from setup to ongoing operations.",
              features: [
                "Station Design & Setup",
                "Equipment Installation",
                "Staff Training",
                "Inventory Management",
                "Maintenance Support"
              ]
            },
            consulting: {
              title: "Energy Consulting",
              desc: "Expert consulting services to optimize your energy consumption and costs.",
              features: [
                "Energy Audits",
                "Cost Optimization",
                "Sustainability Planning",
                "Efficiency Improvements",
                "Custom Solutions"
              ]
            }
          }
        },
        support: {
          heading: "Support Services",
          sub: "Additional services that ensure your complete satisfaction and success.",
          items: {
            support247: {
              title: "24/7 Support",
              desc: "Round-the-clock customer support for all your energy needs."
            },
            quality: {
              title: "Quality Assurance",
              desc: "Rigorous quality control and testing for all our products and services."
            },
            training: {
              title: "Training Programs",
              desc: "Comprehensive training for your team on safety and best practices."
            },
            maintenance: {
              title: "Maintenance Services",
              desc: "Regular maintenance and repair services for equipment and facilities."
            }
          }
        },
        process: {
          heading: "Our Process",
          sub: "A proven approach that delivers results and exceeds expectations.",
          steps: [
            { step: "01", title: "Consultation", desc: "We assess your specific energy requirements and challenges." },
            { step: "02", title: "Planning", desc: "Our experts develop a customized solution plan for your needs." },
            { step: "03", title: "Implementation", desc: "We execute the plan with precision and attention to detail." },
            { step: "04", title: "Support", desc: "Ongoing support and optimization to ensure continued success." }
          ]
        },
        emergency: {
          heading: "Emergency Services",
          desc: "Fuel emergency? Our rapid response team is available 24/7 to handle critical fuel delivery situations.",
          call: "Call Emergency Line: +1 (555) 911-FUEL",
          request: "Request Emergency Service"
        },
        cta: {
          heading: "Ready to Get Started?",
          sub: "Contact our team today to discuss your energy service requirements and discover how we can support your business success.",
          button: "Get a Quote Today"
        }
      },

      stationsPage: {
        hero: {
          title: "Our Stations",
          desc:
            "Strategically located gas stations providing convenient access to premium fuels and comprehensive services across the region."
        },
        finder: {
          heading: "Find Your Nearest Station",
          sub: "Use our interactive map to locate the most convenient Planet Mobil station for your needs.",
          mapTitle: "Interactive Map",
          mapHint: "Interactive station locator would be integrated here",
          mapOpen: "Open Full Map"
        },
        list: {
          heading: "All Locations",
          sub: "Explore our complete network of gas stations and their unique services.",
          services: "Services",
          amenities: "Amenities",
          more: "more",
          directions: "Directions",
          details: "Details"
        },
        features: {
          heading: "Why Choose Planet Mobil Stations?",
          sub: "Every Planet Mobil station is designed with your convenience and satisfaction in mind.",
          items: [
            { title: "Premium Quality", desc: "Top-grade fuels and products" },
            { title: "Convenient Hours", desc: "Extended and 24/7 locations" },
            { title: "Complete Services", desc: "Everything you need in one stop" },
            { title: "Modern Facilities", desc: "Clean, safe, and well-maintained" }
          ],
          cta: {
            heading: "Looking for a New Station Location?",
            sub: "We're always expanding our network. Contact us about franchise opportunities or suggest a new location.",
            button: "Franchise Opportunities"
          }
        }
      },

      contactPage: {
        hero: {
          title: "Contact Us",
          desc:
            "Ready to power your business? Get in touch with our expert team for personalized energy solutions and exceptional service."
        },
        form: {
          heading: "Send us a Message",
          name: "Full Name *",
          email: "Email Address *",
          phone: "Phone Number",
          company: "Company Name",
          subject: "Subject *",
          message: "Message *",
          placeholders: {
            name: "John Doe",
            email: "john@company.com",
            phone: "+1 (555) 123-4567",
            company: "Your Company",
            subject: "How can we help you?",
            message: "Tell us about your energy needs..."
          },
          submit: "Send Message",
          submitting: "Sending...",
          success: "Message sent successfully! We'll get back to you soon."
        },
        info: {
          heading: "Get in Touch",
          headOffice: "Head Office",
          phoneNumbers: "Phone Numbers",
          emailAddresses: "Email Addresses",
          businessHours: "Business Hours",
          addressLines: ["123 Energy Boulevard", "Industrial Zone, City 12345", "United States"],
          hours: [
            "Monday - Friday: 8:00 AM - 6:00 PM",
            "Saturday: 9:00 AM - 4:00 PM",
            "Sunday: Emergency Only"
          ]
        },
        directory: {
          heading: "Department Directory",
          sub: "Connect directly with the right department for faster, more specialized assistance.",
          items: {
            sales: {
              name: "Sales & New Business",
              desc: "New customer inquiries, quotes, and business partnerships"
            },
            support: {
              name: "Customer Support",
              desc: "Existing customer support, billing, and service issues"
            },
            emergency: {
              name: "Emergency Services",
              desc: "24/7 emergency fuel delivery and urgent requests"
            },
            corporate: {
              name: "Corporate Partnerships",
              desc: "Fleet services, bulk purchasing, and corporate accounts"
            }
          }
        },
        visit: {
          heading: "Visit Our Head Office",
          sub: "Located in the heart of the industrial district, our modern facilities are equipped to serve all your energy needs.",
          mapTitle: "Interactive Map",
          mapHint: "Google Maps integration would be placed here",
          button: "Get Directions"
        },
        emergency: {
          heading: "Emergency Contact",
          desc: "For urgent fuel delivery needs or emergency situations, our rapid response team is available 24/7.",
          call: "Call: +1 (555) 911-FUEL",
          email: "Emergency Email"
        }
      },

      productsPage: {
        hero: {
          title: "Our Products",
          desc:
            "Premium quality fuels, lubricants, and energy solutions designed to power your business with reliability and efficiency."
        },
        categories: {
          heading: "Product Categories",
          sub: "Comprehensive range of energy products to meet all your requirements.",
          btn: "Learn More",
          items: {
            fuels: {
              title: "Premium Fuels",
              desc: "High-quality gasoline and diesel for all your needs",
              list: [
                "Premium Gasoline (95 RON)",
                "Super Gasoline (98 RON)",
                "Diesel (Ultra Low Sulfur)",
                "Marine Gas Oil",
                "Aviation Fuel"
              ]
            },
            lubricants: {
              title: "Lubricants",
              desc: "Professional-grade lubricants for automotive and industrial use",
              list: [
                "Engine Oils (Synthetic & Mineral)",
                "Hydraulic Fluids",
                "Gear Oils",
                "Industrial Lubricants",
                "Marine Lubricants"
              ]
            },
            energy: {
              title: "Energy Solutions",
              desc: "Comprehensive energy products and solutions",
              list: [
                "LPG (Liquefied Petroleum Gas)",
                "Natural Gas",
                "Renewable Energy Systems",
                "Energy Storage Solutions",
                "Solar Panel Systems"
              ]
            }
          }
        },
        applications: {
          heading: "Applications",
          sub: "Our products serve diverse industries and applications.",
          items: [
            { title: "Automotive", desc: "Fuel and lubricants for passenger vehicles" },
            { title: "Commercial", desc: "Solutions for fleet and logistics companies" },
            { title: "Industrial", desc: "Energy solutions for manufacturing and industry" }
          ]
        },
        quality: {
          heading: "Quality Assurance",
          desc:
            "Every product we deliver meets the highest international standards. Our rigorous quality control processes ensure consistent excellence and reliability you can trust.",
          features: [
            "ISO 9001:2015 Certified",
            "Rigorous Quality Testing",
            "Environmental Compliance",
            "24/7 Quality Monitoring",
            "Certified Supply Chain",
            "International Standards"
          ]
        },
        cta: {
          heading: "Need a Custom Solution?",
          sub: "Our team can help you find the perfect products for your specific requirements.",
          button: "Contact Our Experts"
        }
      },
      footer: {
        quickLinks: "Quick Links",
        ourServices: "Our Services",
        followUs: "Follow Us",
        newsletter: {
          title: "Newsletter",
          desc: "Stay updated with our latest news and offers.",
          placeholder: "Your email",
          subscribe: "Subscribe"
        },
        rights: "All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Service"
      }
    }
  },
  fr: {
    translation: {
      // Navigation
      Home: "Accueil",
      About: "À propos",
      Products: "Produits",
      Services: "Services",
      Stations: "Stations",
      Contact: "Contact",
      GetQuote: "Demander un devis",

      home: {
        hero: {
          title1: "Alimenter vos",
          title2: "besoins",
          title3: "énergétiques",
          desc:
            "Fournisseur leader en distribution de carburants, lubrifiants et solutions énergétiques. Excellence et fiabilité inégalée dans tous les secteurs de l'énergie.",
          ctaServices: "Nos services",
          ctaContact: "Nous contacter"
        },
        services: {
          heading: "Nos services",
          sub: "Des solutions énergétiques complètes pour répondre à tous vos besoins avec un professionnalisme exemplaire.",
          items: {
            fuel: {
              title: "Distribution de carburant",
              desc: "Livraison de carburant de qualité premium pour entreprises et industries."
            },
            lubricants: {
              title: "Lubrifiants",
              desc: "Lubrifiants haute performance pour l'automobile et l'industrie."
            },
            energy: {
              title: "Solutions énergétiques",
              desc: "Solutions énergétiques complètes adaptées à vos besoins."
            },
            stations: {
              title: "Stations-service",
              desc: "Stations idéalement situées pour un accès pratique au carburant."
            }
          }
        },
        stats: {
          happyClients: "Clients satisfaits",
          deliveryTrucks: "Camions de livraison",
          gasStations: "Stations-service",
          yearsExperience: "Années d'expérience"
        },
        cta: {
          heading: "Prêt à propulser votre entreprise ?",
          sub: "Contactez notre équipe d'experts et découvrez comment Planet Mobil peut alimenter votre réussite.",
          button: "Commencer aujourd'hui"
        }
      },

      about: {
        hero: {
          title: "À propos de Planet Mobil",
          desc:
            "Leader du secteur de l'énergie, avec des solutions innovantes, un engagement constant pour la qualité, et une vision d'un avenir durable."
        },
        story: {
          heading: "Notre histoire",
          p1:
            "Fondée en 2008, Planet Mobil a débuté comme une petite entreprise de distribution de carburant avec une grande vision. Aujourd'hui, nous sommes un fournisseur majeur de solutions énergétiques complètes, au service de centaines de clients dans de multiples secteurs.",
          p2:
            "Notre parcours est marqué par une croissance continue, une expansion stratégique et un engagement inébranlable envers l'excellence. Nous avons bâti notre réputation sur la fiabilité, la qualité et la satisfaction client.",
          p3:
            "Tournés vers l'avenir, nous restons dédiés à l'innovation, à la durabilité et à la réussite de nos partenaires et communautés."
        },
        missionVision: {
          missionTitle: "Notre mission",
          missionDesc:
            "Fournir des solutions énergétiques fiables et de haute qualité alimentant entreprises et communautés, tout en respectant les normes les plus strictes de sécurité et d'environnement.",
          visionTitle: "Notre vision",
          visionDesc:
            "Être le leader des solutions énergétiques, reconnu pour l'innovation, la durabilité et notre engagement envers un avenir énergétique plus propre et efficace."
        },
        values: {
          heading: "Nos valeurs",
          sub: "Les principes qui guident chacune de nos décisions et chacun de nos services.",
          items: {
            reliability: {
              title: "Fiabilité",
              desc: "Qualité constante et service fiable sur lequel vous pouvez compter."
            },
            excellence: {
              title: "Excellence",
              desc: "Amélioration continue et standards de référence du secteur."
            },
            sustainability: {
              title: "Durabilité",
              desc: "Engagement pour l'environnement et des solutions vertes."
            },
            innovation: {
              title: "Innovation",
              desc: "Adoption de nouvelles technologies pour de meilleures solutions énergétiques."
            }
          }
        },
        team: {
          heading: "Équipe dirigeante",
          sub: "Découvrez les dirigeants expérimentés qui portent la vision et le succès de Planet Mobil."
        }
      },

      servicesPage: {
        hero: {
          title: "Nos services",
          desc:
            "Des services énergétiques complets pour soutenir vos opérations avec fiabilité, efficacité et excellence professionnelle."
        },
        core: {
          heading: "Services principaux",
          sub: "Des solutions complètes pour tous vos besoins en énergie et distribution de carburant.",
          btn: "En savoir plus",
          items: {
            fuel: {
              title: "Distribution de carburant",
              desc: "Livraisons fiables grâce à notre flotte moderne de camions-citernes.",
              features: [
                "Livraison d'urgence 24/7",
                "Livraisons régulières planifiées",
                "Véhicules suivis par GPS",
                "Chauffeurs certifiés",
                "Mises à jour en temps réel"
              ]
            },
            station: {
              title: "Gestion de stations-service",
              desc: "Solutions complètes, de la mise en place à l'exploitation.",
              features: [
                "Conception & installation",
                "Installation d'équipements",
                "Formation du personnel",
                "Gestion des stocks",
                "Support de maintenance"
              ]
            },
            consulting: {
              title: "Conseil en énergie",
              desc: "Expertise pour optimiser votre consommation et vos coûts énergétiques.",
              features: [
                "Audits énergétiques",
                "Optimisation des coûts",
                "Planification durable",
                "Amélioration de l'efficacité",
                "Solutions personnalisées"
              ]
            }
          }
        },
        support: {
          heading: "Services d'accompagnement",
          sub: "Des services additionnels pour une satisfaction totale.",
          items: {
            support247: { title: "Support 24/7", desc: "Assistance continue pour tous vos besoins énergétiques." },
            quality: { title: "Assurance qualité", desc: "Contrôle et tests rigoureux de tous nos produits et services." },
            training: { title: "Formations", desc: "Programmes complets sur la sécurité et les bonnes pratiques." },
            maintenance: { title: "Maintenance", desc: "Entretien et réparation réguliers des équipements et installations." }
          }
        },
        process: {
          heading: "Notre démarche",
          sub: "Une approche éprouvée qui délivre des résultats et dépasse les attentes.",
          steps: [
            { step: "01", title: "Consultation", desc: "Analyse de vos besoins et défis énergétiques." },
            { step: "02", title: "Planification", desc: "Élaboration d'une solution sur mesure." },
            { step: "03", title: "Mise en œuvre", desc: "Exécution précise et soignée du plan." },
            { step: "04", title: "Support", desc: "Accompagnement continu pour un succès durable." }
          ]
        },
        emergency: {
          heading: "Services d'urgence",
          desc: "Urgence carburant ? Notre équipe d'intervention rapide est disponible 24/7.",
          call: "Appeler la ligne d'urgence : +1 (555) 911-FUEL",
          request: "Demander une intervention d'urgence"
        },
        cta: {
          heading: "Prêt à démarrer ?",
          sub: "Contactez-nous pour discuter de vos besoins énergétiques et découvrir comment nous pouvons vous accompagner.",
          button: "Obtenir un devis"
        }
      },

      stationsPage: {
        hero: {
          title: "Nos stations",
          desc:
            "Des stations idéalement situées offrant un accès pratique à des carburants premium et des services complets."
        },
        finder: {
          heading: "Trouvez votre station la plus proche",
          sub: "Utilisez notre carte interactive pour localiser la station Planet Mobil la plus pratique.",
          mapTitle: "Carte interactive",
          mapHint: "Le localisateur de stations sera intégré ici",
          mapOpen: "Ouvrir la carte complète"
        },
        list: {
          heading: "Toutes les implantations",
          sub: "Explorez notre réseau complet de stations-service et leurs services.",
          services: "Services",
          amenities: "Commodités",
          more: "de plus",
          directions: "Itinéraire",
          details: "Détails"
        },
        features: {
          heading: "Pourquoi choisir nos stations ?",
          sub: "Chaque station Planet Mobil est conçue pour votre confort et votre satisfaction.",
          items: [
            { title: "Qualité premium", desc: "Carburants et produits de premier choix" },
            { title: "Horaires pratiques", desc: "Sites étendus et 24/7" },
            { title: "Services complets", desc: "Tout ce dont vous avez besoin en un seul arrêt" },
            { title: "Installations modernes", desc: "Propres, sûres et bien entretenues" }
          ],
          cta: {
            heading: "À la recherche d'un nouvel emplacement ?",
            sub: "Nous élargissons constamment notre réseau. Parlons franchise ou proposez un nouvel emplacement.",
            button: "Opportunités de franchise"
          }
        }
      },

      contactPage: {
        hero: {
          title: "Nous contacter",
          desc:
            "Prêt à propulser votre entreprise ? Contactez notre équipe pour des solutions personnalisées et un service d'exception."
        },
        form: {
          heading: "Envoyez-nous un message",
          name: "Nom complet *",
          email: "Adresse e-mail *",
          phone: "Numéro de téléphone",
          company: "Nom de l'entreprise",
          subject: "Objet *",
          message: "Message *",
          placeholders: {
            name: "Jean Dupont",
            email: "jean@entreprise.com",
            phone: "+33 1 23 45 67 89",
            company: "Votre entreprise",
            subject: "Comment pouvons-nous vous aider ?",
            message: "Parlez-nous de vos besoins énergétiques..."
          },
          submit: "Envoyer le message",
          submitting: "Envoi en cours...",
          success: "Message envoyé avec succès ! Nous vous répondrons prochainement."
        },
        info: {
          heading: "Entrer en contact",
          headOffice: "Siège social",
          phoneNumbers: "Numéros de téléphone",
          emailAddresses: "Adresses e-mail",
          businessHours: "Horaires d'ouverture",
          addressLines: ["123 Boulevard de l'Énergie", "Zone Industrielle, Ville 12345", "États-Unis"],
          hours: [
            "Lundi - Vendredi : 8h00 - 18h00",
            "Samedi : 9h00 - 16h00",
            "Dimanche : Urgences uniquement"
          ]
        },
        directory: {
          heading: "Annuaire des services",
          sub: "Contactez directement le bon service pour une assistance plus rapide et spécialisée.",
          items: {
            sales: { name: "Ventes & nouveaux clients", desc: "Demandes de devis et partenariats" },
            support: { name: "Service client", desc: "Support client, facturation et services" },
            emergency: { name: "Urgences", desc: "Livraison d'urgence 24/7 et demandes urgentes" },
            corporate: { name: "Partenariats corporate", desc: "Flottes, achats en gros et comptes" }
          }
        },
        visit: {
          heading: "Visitez notre siège",
          sub: "Situé au cœur de la zone industrielle, nos locaux modernes sont équipés pour répondre à tous vos besoins énergétiques.",
          mapTitle: "Carte interactive",
          mapHint: "L'intégration Google Maps sera ici",
          button: "Itinéraire"
        },
        emergency: {
          heading: "Contact d'urgence",
          desc: "Pour les besoins urgents en carburant, notre équipe d'intervention rapide est disponible 24/7.",
          call: "Appeler : +1 (555) 911-FUEL",
          email: "E-mail d'urgence"
        }
      },

      productsPage: {
        hero: {
          title: "Nos produits",
          desc:
            "Des carburants, lubrifiants et solutions énergétiques premium pour alimenter votre activité avec fiabilité et efficacité."
        },
        categories: {
          heading: "Catégories de produits",
          sub: "Une gamme complète de produits énergétiques pour tous vos besoins.",
          btn: "En savoir plus",
          items: {
            fuels: {
              title: "Carburants premium",
              desc: "Essence et diesel de haute qualité pour tous vos besoins",
              list: [
                "Essence Premium (95 RON)",
                "Essence Super (98 RON)",
                "Diesel (Très faible teneur en soufre)",
                "Gazole maritime",
                "Carburant aviation"
              ]
            },
            lubricants: {
              title: "Lubrifiants",
              desc: "Lubrifiants professionnels pour l'auto et l'industrie",
              list: [
                "Huiles moteur (Synthèse & Minérale)",
                "Fluides hydrauliques",
                "Huiles de boîte",
                "Lubrifiants industriels",
                "Lubrifiants marins"
              ]
            },
            energy: {
              title: "Solutions énergétiques",
              desc: "Produits et solutions énergétiques complets",
              list: [
                "GPL (Gaz de pétrole liquéfié)",
                "Gaz naturel",
                "Énergies renouvelables",
                "Solutions de stockage d'énergie",
                "Systèmes de panneaux solaires"
              ]
            }
          }
        },
        applications: {
          heading: "Applications",
          sub: "Nos produits couvrent une grande diversité d'industries et d'usages.",
          items: [
            { title: "Automobile", desc: "Carburants et lubrifiants pour véhicules particuliers" },
            { title: "Commercial", desc: "Solutions pour flottes et logistique" },
            { title: "Industrie", desc: "Solutions énergétiques pour la production et l'industrie" }
          ]
        },
        quality: {
          heading: "Assurance qualité",
          desc:
            "Tous nos produits respectent les standards internationaux les plus élevés. Des contrôles rigoureux garantissent une excellence constante et une fiabilité éprouvée.",
          features: [
            "Certifié ISO 9001:2015",
            "Tests qualité rigoureux",
            "Conformité environnementale",
            "Suivi qualité 24/7",
            "Chaîne d'approvisionnement certifiée",
            "Normes internationales"
          ]
        },
        cta: {
          heading: "Besoin d'une solution sur mesure ?",
          sub: "Notre équipe vous aide à trouver les produits parfaitement adaptés à vos besoins.",
          button: "Contacter nos experts"
        }
      },
      footer: {
        quickLinks: "Liens rapides",
        ourServices: "Nos services",
        followUs: "Suivez-nous",
        newsletter: {
          title: "Newsletter",
          desc: "Restez informé de nos actualités et offres.",
          placeholder: "Votre e-mail",
          subscribe: "S'abonner"
        },
        rights: "Tous droits réservés.",
        privacy: "Politique de confidentialité",
        terms: "Conditions d'utilisation"
      }
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
