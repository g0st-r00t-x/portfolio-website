import { Menu, X } from "lucide-react";
import { Navigation } from "@/components/ux/Navigation";
import { PersonalInfo } from "@/types";
import { motion } from "framer-motion";

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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
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
          className="md:hidden"
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
    </header>
  );
};

export default Header;