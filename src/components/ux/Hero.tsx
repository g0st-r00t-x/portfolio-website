import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { PersonalInfo } from "@/types";
import bgImage from "@/assets/bg-image.svg";

interface HeroSectionProps {
  data: PersonalInfo;
}

const HeroSection: React.FC<HeroSectionProps> = ({ data }) => (
  <section
    className="min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
    }}
  >
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-5xl md:text-7xl font-bold mb-4"
    >
      Hi, I'm {data.name}
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-xl md:text-2xl mb-8"
    >
      A passionate web developer creating modern experiences
    </motion.p>
    <Button size="lg">View My Work</Button>
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      className="absolute bottom-10"
    >
      <ChevronDown size={40} />
    </motion.div>
  </section>
);

export default HeroSection;