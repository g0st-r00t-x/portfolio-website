import { Service } from "@/types";
import { motion } from "framer-motion";
import ServiceCard from "@/components/ux/ServiceCard";

interface ServicesSectionProps {
  data: Service[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  data,
}) => (
  <section
    id="services"
    className="py-20 bg-gray-800"
  >
    <div className="container mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8 text-center"
      >
        My Services
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((service, index) => (
          <ServiceCard
            key={service.id}
            service={service}
            index={index}
          />
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;