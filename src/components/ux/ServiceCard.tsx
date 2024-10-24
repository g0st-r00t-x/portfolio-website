import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <motion.div
        className="w-16 h-16 mb-4 text-blue-400 mx-auto"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1, rotate: 360 } : { scale: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: index * 0.1 + 0.2,
        }}
      >
        <service.icon size={64} />
      </motion.div>
      <h3 className="text-xl font-semibold mb-2 text-center">
        {service.title}
      </h3>
      <p className="text-gray-300 text-center">{service.description}</p>
    </motion.div>
  );
};

export default ServiceCard;
