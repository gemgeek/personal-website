"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { FaCircle, FaWrench, FaPalette } from 'react-icons/fa';

const projectsData = [
  {
    title: "HandyHub Artisan Marketplace",
    description: "A web platform connecting users with verified local artisans. Built with a modern tech stack to provide a clean and intuitive user experience.",
    image: "/assets/project-handyhub.jpeg", 
    tags: ["React", "Django", "Python", "JavaScript", "REST API"],
    liveLink: null, 
    githubLink: "https://github.com/gemgeek/HandyHub-Frontend",
    status: "Yet to Deploy", 
  },
  {
    title: "GEM's AI Portfolio Chatbot",
    description: "An interactive and engaging AI-powered portfolio where users can have a conversation with an AI assistant powered by Google's Gemini model.",
    image: "/assets/project-ai-portfolio.png", 
    tags: ["React", "Flask", "Tailwind CSS", "Gemini AI", "Python"],
    liveLink: "https://gems-ai-portfolio.vercel.app/",
    githubLink: "https://github.com/gemgeek/Gems-AI-Portfolio",
    status: "Live", 
  },
  {
    title: "Skincare Brand Identity",
    description: "A complete brand identity design for a new skincare line, including logo, color palette, typography, and packaging concepts created using Canva.",
    image: "/assets/project-skincare.jpg", 
    tags: ["Branding", "UI/UX", "Canva", "Graphic Design"],
    liveLink: "https://www.yogem.art/",
    githubLink: null,
    status: "Brand Identity", 
  }
];

const StatusBadge = ({ status }: { status: string }) => {
  const statusInfo: { [key: string]: { icon: React.ReactNode; color: string } } = {
    "Live": { icon: <FaCircle />, color: "text-green-400" },
    "Yet to Deploy": { icon: <FaWrench />, color: "text-yellow-400" },
    "Brand Identity": { icon: <FaPalette />, color: "text-blue-400" },
  };

  if (!statusInfo[status]) return null;

  return (
    <div className="absolute top-3 right-3 bg-gray-900/80 backdrop-blur-sm text-xs text-white px-3 py-1.5 rounded-full flex items-center gap-2 z-20">
      <span className={statusInfo[status].color}>{statusInfo[status].icon}</span>
      {status}
    </div>
  );
};

const FeaturedProjects = () => {
  return (
    <motion.section 
      id="projects" 
      className="py-20 px-4"
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-4">
          My Featured{" "}
          <span className="bg-gradient-to-r from-pink-500 to-violet-500 text-transparent bg-clip-text">
            Projects
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          A selection of my work that demonstrates my skills in software engineering and design, from concept to deployment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 flex flex-col group hover:-translate-y-2 transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="h-48 w-full overflow-hidden">
                  <Image 
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 z-10"></div>
                <StatusBadge status={project.status} />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-gray-700 text-gray-300 text-xs font-semibold px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex items-center gap-4">
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 flex items-center gap-2 transition-colors">
                      <FiExternalLink /> Live Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white flex items-center gap-2 transition-colors">
                      <FiGithub /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16">
          <a href="#" className="text-pink-500 font-semibold text-lg hover:underline">
            View All Projects →
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturedProjects;
