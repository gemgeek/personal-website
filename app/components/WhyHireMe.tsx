"use client";

import { FaStar, FaCodeBranch, FaCloud } from 'react-icons/fa';
import { motion } from 'framer-motion'; 

const features = [
  {
    icon: <FaStar size={24} className="text-pink-500" />,
    title: "Client-Focused Results",
    description: "I am committed to delivering not just code, but value. My work is built on a foundation of reliability and proven results.",
  },
  {
    icon: <FaCodeBranch size={24} className="text-violet-500" />,
    title: "Versatile Full-Stack Skillset",
    description: "Architected and delivered scalable full-stack applications, from robust REST APIs to dynamic, responsive front-ends.",
  },
  {
    icon: <FaCloud size={24} className="text-blue-400" />,
    title: "Modern Cloud & DevOps",
    description: "Experienced in deploying applications on cloud services like Vercel and AWS, utilizing CI/CD pipelines to ensure quality and speed.",
  },
];

const WhyHireMe = () => {
  return (
    <motion.section 
      id="about" 
      className="bg-[#0d1117] py-20 px-4" 
    >
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-pink-500 to-violet-500 text-transparent bg-clip-text">
            Why Hire Me?
          </span>
        </h2>
        <h3 className="text-4xl font-bold text-white mb-4">
          Creativity, Reliability & Impact
        </h3>
        <p className="text-gray-400 max-w-3xl mx-auto mb-12">
          As a developer, I thrive on solving complex problems and turning innovative ideas into reality. My goal is to build impactful digital experiences that are both functional and beautiful.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-800/50 p-6 rounded-lg text-left flex items-start gap-4 border border-gray-700 hover:border-pink-500 transition-colors"
            >
              <div className="bg-gray-900 p-3 rounded-full">
                {feature.icon}
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WhyHireMe;