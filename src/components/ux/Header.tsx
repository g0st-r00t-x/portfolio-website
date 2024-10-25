import { Menu, X } from "lucide-react";
import { Navigation } from "@/components/ux/Navigation";
import { PersonalInfo } from "@/types";
import { motion } from "framer-motion";
import React from "react";

interface HeaderProps {
  data: PersonalInfo;
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({
  data,
  isMenuOpen,
  toggleMenu,
}) => {
  const navLinks = [
    "about",
    "services",
    "projects",
    "skills",
    "testimonials",
    "contact",
  ];

  const [scrollOpacity, setScrollOpacity] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const opacity = Math.min(scrollPosition / (windowHeight * 0.3), 1);
      setScrollOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
     <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: `rgba(0, 0, 0, ${scrollOpacity * 0.7})`,
          boxShadow:
            scrollOpacity > 0
              ? `0 4px 6px -1px rgba(0, 0, 0, ${scrollOpacity * 0.1})`
              : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
              <motion.a
                href="#"
                className="text-xl font-bold"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {data.name}
              </motion.a>
              <Navigation links={navLinks} />
              <motion.button
                onClick={toggleMenu}
                className="md:hidden mr-6"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </motion.button>
            </div>
            {isMenuOpen && (
              <Navigation
                links={navLinks}
                isMobile
                onClose={toggleMenu}
              />
            )}
          </div>
      </motion.nav>
  );
};

export default Header