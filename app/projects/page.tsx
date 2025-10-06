"use client";

import ProjectCard from '../components/ProjectCard'; 
import { motion } from 'framer-motion';

const featuredProjects = [
  {
    title: "Personal Website",
    subtitle: "My Portfolio Site",
    image: "/assets/screenshot.png", 
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Resend"],
    liveLink: "https://www.gemgeek.online/", 
    githubLink: "https://github.com/gemgeek/personal-website",
  },
  {
    title: "AI-Powered ChatBot",
    subtitle: "Full-Stack Application",
    image: "/assets/project-ai-portfolio.png",
    tags: ["React", "Flask", "Gemini AI"],
    liveLink: "https://gems-ai-portfolio.vercel.app/",
    githubLink: "https://github.com/gemgeek/Gems-AI-Portfolio",
  },
  {
    title: "FIT App (Farmers in Tech)",
    subtitle: "UI/UX Design",
    image: "/assets/project-fit-app.jpg", 
    tags: ["UI/UX", "Figma", "Mobile App"],
    liveLink: null,
    githubLink: null,
  },
];

const brandDesigns = [
  {
    title: "Lumiere Skincare",
    subtitle: "Brand Identity",
    image: "/assets/project-skincare.jpg",
    tags: ["Branding", "Canva", "Logo Design"],
    liveLink: "https://www.yogem.art/",
    githubLink: null,
  },
  {
    title: "Kobbe Mensah Fitness",
    subtitle: "Brand Identity",
    image: "/assets/project-fitness.jpg", 
    tags: ["Branding", "Social Media", "Logo"],
    liveLink: "https://www.yogem.art/",
    githubLink: null,
  },
  {
    title: "VAVE Fintech",
    subtitle: "Brand Identity",
    image: "/assets/project-fintech.png", 
    tags: ["Branding", "Corporate", "Logo"],
    liveLink: "https://www.yogem.art/",
    githubLink: null,
  },
];

const ProjectsPage = () => {
  return (
    <div className="pt-24 container mx-auto px-4 py-16">
      {/* Page Header */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">My Projects</h1>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          A curated showcase of innovative solutions, from full-stack applications to bold brand identities. Each project reflects creativity, problem-solving, and a commitment to high-quality results.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <span className="border border-gray-600 px-4 py-2 rounded-full text-sm">Full-Stack</span>
          <span className="border border-gray-600 px-4 py-2 rounded-full text-sm">Branding</span>
          <span className="border border-gray-600 px-4 py-2 rounded-full text-sm">UI/UX</span>
        </div>
      </motion.div>

      {/* Featured Projects Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center md:text-left">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((proj, index) => <ProjectCard key={index} project={proj} />)}
        </div>
      </div>

      {/* Brand Identity Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center md:text-left">Brand Identity Designs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brandDesigns.map((proj, index) => <ProjectCard key={index} project={proj} />)}
        </div>
      </div>

      {/* GitHub CTA */}
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">💡 Want to see more?</h3>
        <p className="text-gray-400 mb-4">I have built 60+ projects across multiple industries.</p>
        <a 
          href="https://github.com/gemgeek" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-pink-600 font-semibold text-lg hover:underline"
        >
          Explore them all on my GitHub →
        </a>
      </div>
    </div>
  );
};

export default ProjectsPage;