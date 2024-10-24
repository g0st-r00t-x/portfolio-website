import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <a
            href="#"
            className="text-xl font-bold"
          >
            YourName
          </a>
          <div className="hidden md:flex space-x-4">
            <a
              href="#about"
              className="hover:text-gray-300"
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:text-gray-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-gray-300"
            >
              Contact
            </a>
          </div>
          <button
            onClick={toggleMenu}
            className="md:hidden"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-gray-800 py-2"
          >
            <a
              href="#about"
              className="block px-6 py-2 hover:bg-gray-700"
            >
              About
            </a>
            <a
              href="#projects"
              className="block px-6 py-2 hover:bg-gray-700"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block px-6 py-2 hover:bg-gray-700"
            >
              Contact
            </a>
          </motion.div>
        )}
      </header>

      <main className="pt-16">
        <section
          id="hero"
          className="min-h-screen flex items-center justify-center text-center"
        >
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              Hi, I'm YourName
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
          </div>
        </section>

        <section
          id="about"
          className="py-20"
        >
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Your Name"
                  className="rounded-full mx-auto"
                />
              </div>
              <div className="md:w-1/2">
                <p className="text-lg mb-4">
                  I'm a web developer with a passion for creating beautiful,
                  functional, and user-centered digital experiences. With 5
                  years of experience in the field, I am always looking for new
                  and innovative ways to bring my clients' visions to life.
                </p>
                <p className="text-lg">
                  I'm proficient in HTML, CSS, JavaScript, React, and Node.js.
                  When I'm not coding, you can find me exploring new
                  technologies, contributing to open-source projects, or
                  enjoying the great outdoors.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="py-20 bg-gray-800"
        >
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((project) => (
                <Card
                  key={project}
                  className="bg-gray-700"
                >
                  <CardContent className="p-6">
                    <img
                      src={`/placeholder.svg?height=200&width=300`}
                      alt={`Project ${project}`}
                      className="mb-4 rounded"
                    />
                    <h3 className="text-xl font-semibold mb-2">
                      Project {project}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      A brief description of the project and the technologies
                      used.
                    </p>
                    <Button variant="outline">View Project</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="py-20"
        >
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Get In Touch
            </h2>
            <div className="flex justify-center space-x-4 mb-8">
              <a
                href="#"
                className="text-white hover:text-gray-300"
              >
                <Github size={24} />
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300"
              >
                <Mail size={24} />
              </a>
            </div>
            <form className="max-w-md mx-auto">
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
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2023 YourName. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
