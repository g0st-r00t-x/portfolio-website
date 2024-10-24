import { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useAnimation,
  useInView,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  ChevronDown,
  ExternalLink,
  Quote,
  Code,
  Palette,
  Globe,
  Zap,
  Smartphone,
  MessageCircle,
} from "lucide-react";

export default function EnhancedPortfolioWithServices() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const personalInfo = {
    name: "John Doe",
    age: 28,
    location: "New York, USA",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
  };

  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "HTML/CSS", level: 95 },
    { name: "UI/UX Design", level: 85 },
    { name: "GraphQL", level: 70 },
    { name: "Python", level: 65 },
  ];

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with React and Node.js",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "Social Media Dashboard",
      description: "Real-time analytics dashboard for social media platforms",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "AI-powered Chatbot",
      description: "Intelligent chatbot using natural language processing",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      title: "Fitness Tracking App",
      description: "Mobile app for tracking workouts and nutrition",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 5,
      title: "Blockchain Wallet",
      description: "Secure cryptocurrency wallet with blockchain integration",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 6,
      title: "Virtual Reality Game",
      description: "Immersive VR game experience built with Unity",
      image: "/placeholder.svg?height=400&width=600",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Alice Johnson",
      role: "CEO, TechCorp",
      content:
        "John's work on our e-commerce platform was exceptional. His attention to detail and innovative solutions greatly improved our user experience.",
    },
    {
      id: 2,
      name: "Bob Smith",
      role: "CTO, DataViz",
      content:
        "We were impressed by John's ability to translate complex data into intuitive visualizations. His dashboard design skills are top-notch.",
    },
    {
      id: 3,
      name: "Carol Williams",
      role: "Product Manager, AI Innovations",
      content:
        "John's expertise in AI and natural language processing was crucial in developing our chatbot. He delivered beyond our expectations.",
    },
    {
      id: 4,
      name: "David Brown",
      role: "Founder, FitTech",
      content:
        "John's mobile app development skills are outstanding. He created a user-friendly and robust fitness tracking app that our users love.",
    },
    {
      id: 5,
      name: "Eva Martinez",
      role: "Lead Developer, BlockChain Solutions",
      content:
        "John's understanding of blockchain technology and his development skills were instrumental in creating our secure wallet application.",
    },
  ];

  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Custom web applications tailored to your needs",
      icon: Code,
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "Intuitive and visually appealing user interfaces",
      icon: Palette,
    },
    {
      id: 3,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications",
      icon: Smartphone,
    },
    {
      id: 4,
      title: "API Integration",
      description: "Seamless integration with third-party services",
      icon: Globe,
    },
    {
      id: 5,
      title: "Performance Optimization",
      description: "Boost your website's speed and efficiency",
      icon: Zap,
    },
    {
      id: 6,
      title: "Consultation",
      description: "Expert advice on your tech stack and architecture",
      icon: MessageCircle,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Header and Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <motion.a
            href="#"
            className="text-xl font-bold"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {personalInfo.name}
          </motion.a>
          <div className="hidden md:flex space-x-4">
            {[
              "about",
              "services",
              "projects",
              "skills",
              "testimonials",
              "contact",
            ].map((item) => (
              <motion.a
                key={item}
                href={`#${item}`}
                className="hover:text-gray-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.a>
            ))}
          </div>
          <motion.button
            onClick={toggleMenu}
            className="md:hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </motion.button>
        </nav>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-gray-800 py-2"
          >
            {[
              "about",
              "services",
              "projects",
              "skills",
              "testimonials",
              "contact",
            ].map((item) => (
              <motion.a
                key={item}
                href={`#${item}`}
                className="block px-6 py-2 hover:bg-gray-700"
                whileHover={{ x: 10 }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.a>
            ))}
          </motion.div>
        )}
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <motion.section
          id="hero"
          className="min-h-screen flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            Hi, I'm {personalInfo.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            A passionate web developer creating modern experiences
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button size="lg">View My Work</Button>
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute bottom-10"
          >
            <ChevronDown size={40} />
          </motion.div>
        </motion.section>

        {/* About Section */}
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
            <div className="flex flex-col md:flex-row items-center justify-between">
              <motion.div
                className="md:w-1/2 mb-8 md:mb-0"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt={personalInfo.name}
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
                  I'm a {personalInfo.age}-year-old web developer based in{" "}
                  {personalInfo.location}. With 5 years of experience in the
                  field, I am always looking for new and innovative ways to
                  bring my clients' visions to life.
                </p>
                <p className="text-lg mb-4">
                  I'm proficient in HTML, CSS, JavaScript, React, and Node.js.
                  When I'm not coding, you can find me exploring new
                  technologies, contributing to open-source projects, or
                  enjoying the great outdoors.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold">Email:</p>
                    <p>{personalInfo.email}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Phone:</p>
                    <p>{personalInfo.phone}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* New Services Section */}
        <section
          id="services"
          className="py-20 bg-gray-800"
        >
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-8 text-center"
            >
              My Services
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="py-20"
        >
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-8 text-center"
            >
              Project Gallery
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <Card className="bg-gray-700 overflow-hidden">
                    <CardContent className="p-0">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2">
                          {project.title}
                        </h3>
                        <p className="text-gray-300">{project.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-gray-800 p-6 rounded-lg max-w-2xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {selectedProject.description}
                </p>
                <div className="flex justify-between items-center">
                  <Button
                    variant="outline"
                    onClick={() => setSelectedProject(null)}
                  >
                    Close
                  </Button>
                  <Button>
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Skills Section */}
        <section
          id="skills"
          className="py-20  bg-gray-800"
        >
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-8 text-center"
            >
              My Skills
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-700 p-6 rounded-lg"
                >
                  <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-blue-200 text-blue-800">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                    <motion.div
                      className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    >
                      <div
                        style={{ width: `${skill.level}%` }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                      ></div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="py-20 overflow-hidden"
        >
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-8 text-center"
            >
              Client Testimonials
            </motion.h2>
            <TestimonialSlider testimonials={testimonials} />
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-20 bg-gray-800"
        >
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-8 text-center"
            >
              Get In Touch
            </motion.h2>
            <div className="flex justify-center space-x-4 mb-8">
              {[Github, Linkedin, Mail].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-white hover:text-gray-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
            <motion.form
              className="max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 bg-gray-700 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 bg-gray-700 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 py-2 bg-gray-700 rounded-md"
                  required
                ></textarea>
              </div>
              <Button
                type="submit"
                className="w-full"
              >
                Send Message
              </Button>
            </motion.form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2023 {personalInfo.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

// Service Card Component
function ServiceCard({ service, index }) {
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
}

// Testimonial Slider Component
function TestimonialSlider({ testimonials }) {
  const controls = useAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    controls.start({
      x: "-100%",
      transition: { ease: "linear", duration: 20 },
    });
  }, [controls]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex"
        animate={controls}
        onAnimationComplete={() => {
          controls.set({ x: 0 });
          controls.start({
            x: "-100%",
            transition: { ease: "linear", duration: 20 },
          });
        }}
      >
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <motion.div
            key={`${testimonial.id}-${index}`}
            className="w-full flex-shrink-0 px-4"
          >
            <Card className="bg-gray-700">
              <CardContent className="p-6">
                <Quote className="w-8 h-8 mb-4 text-blue-400" />
                <p className="text-lg mb-4">{testimonial.content}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-500 rounded-full mr-4"></div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
