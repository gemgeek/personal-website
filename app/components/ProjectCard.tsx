"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

// Define the type for a single project
type ProjectProps = {
  title: string;
  subtitle: string;
  image: string;
  tags: string[];
  liveLink?: string | null;
  githubLink?: string | null;
};

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  return (
    <motion.div
      className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 flex flex-col group hover:-translate-y-2 transition-transform duration-300"
      layout
    >
      <div className="relative">
        <div className="h-56 w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={400}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300 z-10"></div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <p className="text-sm text-pink-400 mb-1">{project.subtitle}</p>
        <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-gray-700 text-gray-300 text-xs font-semibold px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-4 pt-4 border-t border-gray-700">
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white flex items-center gap-2 transition-colors">
              <FiExternalLink /> Live Site
            </a>
          )}
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white flex items-center gap-2 transition-colors">
              <FiGithub /> View Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;