import { useState } from "react";
import Header from "@/components/ux/Header";
import HeroSection from "@/components/ux/Hero";
import AboutSection from "@/components/ux/About";
import ServicesSection from "@/components/ux/Services";
import ProjectsSection from "@/components/ux/Project";
import Skills from "@/components/ux/Skills";
import TestimonialsSection from "@/components/ux/Testimonial";
import ContactForm from "@/components/ux/ContactForm";
import { FooterSection } from "@/components/ux/Footer";


import {
  Code,
  Palette,
  Globe,
  Zap,
  Smartphone,
  MessageCircle,
} from "lucide-react";

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



export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Header
        data={personalInfo}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />
      <main className="pt-16">
        <HeroSection data={personalInfo} />
        <AboutSection data={personalInfo} />
        <ServicesSection data={services} />
        <ProjectsSection projects={projects}  />
        <Skills data= {skills}/>
        <TestimonialsSection testimonials={testimonials} />
        <ContactForm />
      </main>
      <FooterSection name="G0st-R00T" />
    </div>
  );
}
