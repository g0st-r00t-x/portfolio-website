import { motion } from "framer-motion";

interface NavigationProps {
  links: string[];
  isMobile?: boolean;
  onClose?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  links,
  isMobile,
  onClose,
}) => {
  const baseClasses = isMobile
    ? "block px-6 py-2 hover:bg-gray-700"
    : "hover:text-gray-300";

  return (
    <div className={isMobile ? "md:hidden" : "hidden md:flex space-x-4"}>
      {links.map((link) => (
        <motion.a
          key={link}
          href={`#${link}`}
          className={baseClasses}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
        >
          {link.charAt(0).toUpperCase() + link.slice(1)}
        </motion.a>
      ))}
    </div>
  );
};
