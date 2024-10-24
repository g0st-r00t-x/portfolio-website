import { PersonalInfo } from "@/types";
import { motion } from "framer-motion";

interface AboutSectionProps {
  data: PersonalInfo;
}

const AboutSection: React.FC<AboutSectionProps> = ({ data }) => (
  <section
    id="about"
    className="py-20"
  >
    <div className="container mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8 text-center"
      >
        About Me
      </motion.h2>
      <div className="flex flex-col md:flex-row items-center justify-between mt-40">
        <motion.div
          className="md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/placeholder.svg?height=300&width=300"
            alt={data.name}
            className="rounded-full mx-auto"
          />
        </motion.div>
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg mb-4">
            I'm a {data.age}-year-old web developer based in{" "}
            {data.location}. With 5 years of experience in the field, I
            am always looking for new and innovative ways to bring my clients'
            visions to life.
          </p>
          <p className="text-lg mb-4">
            I'm proficient in HTML, CSS, JavaScript, React, and Node.js. When
            I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or enjoying the great
            outdoors.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-semibold">Email:</p>
              <p>{data.email}</p>
            </div>
            <div>
              <p className="font-semibold">Phone:</p>
              <p>{data.phone}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;