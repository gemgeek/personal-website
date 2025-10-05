"use client";

import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

// 1. We define your expertise data here
const expertiseData = [
  {
    title: "Full-Stack Development",
    description: "Building modern applications with clean code and scalable architecture.",
    skills: [
      "React, Next.js & TypeScript",
      "Python, Django REST Framework",
      "Database design & API optimization",
      "State management with Redux",
    ],
    borderColor: "border-pink-500",
  },
  {
    title: "Creative & Brand Identity Design",
    description: "Transforming ideas into visuals that resonate and inspire.",
    skills: [
      "Logo & visual identity systems",
      "Event branding & digital campaigns",
      "UI/UX design for web & mobile",
      "Graphic storytelling",
    ],
    borderColor: "border-violet-500",
  },
  {
    title: "Writing & Ghostwriting",
    description: "Crafting words that connect and convert.",
    skills: [
      "Tech blogging & documentation",
      "Ghostwriting for thought leaders",
      "Creative storytelling & brand voice",
      "Copywriting for digital products",
    ],
    borderColor: "border-blue-500",
  },
];

const Expertise = () => {
  return (
    <motion.section 
      id="expertise" 
      className="py-20 px-4"
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-4">
          My{" "}
          <span className="bg-gradient-to-r from-pink-500 to-violet-500 text-transparent bg-clip-text">
            Expertise
          </span>
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto mb-12">
          I merge technology, design, and strategy to create solutions that are both functional and inspiring. My expertise spans across software development, creative design, and consulting, allowing me to deliver projects with a unique 360° approach.
        </p>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {expertiseData.map((item, index) => (
            <div 
              key={index} 
              // 2. Here we add the dynamic border color for the top of the card
              className={`bg-gray-800/50 p-6 rounded-lg border border-gray-700 border-t-4 ${item.borderColor} hover:-translate-y-2 transition-transform duration-300`}
            >
              <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 mb-6">{item.description}</p>
              <ul className="space-y-3">
                {item.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Expertise;