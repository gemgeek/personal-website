"use client";

import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center">
      <motion.div 
        className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        <motion.div 
          className="md:w-3/5 text-center md:text-left" 
          variants={itemVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-green-400 mb-2">● Open to new opportunities</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-100">
            Hi, I'm Matilda Esenam Gbeve
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold my-4 bg-gradient-to-r from-pink-500 to-violet-500 text-transparent bg-clip-text">
            Exploring Innovation, Design & Web Dev
          </h2>
          <p className="text-gray-400 mb-6 max-w-lg mx-auto md:mx-0">
            A creative full-stack developer with a design edge, passionate about building impactful digital experiences.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#contact" className="text-pink-500 font-semibold hover:underline">
              Get in Touch →
            </a>
            <a href="/assets/Matilda-Esenam-Gbeve.pdf" className="text-pink-500 font-semibold hover:underline">
              View Resume →
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="md:w-2/5" 
          variants={itemVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="rounded-lg overflow-hidden">
            <video 
              src="/assets/hero-video-1.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full"
            />
          </div>
          <div className="text-center mt-3 text-gray-300">
            <p>CORE TECHNOLOGIES:</p>
            <div className="flex justify-center gap-4 mt-1 font-mono">
              <span>Python</span>
              <span>JavaScript</span>
              <span>SQL</span>
              <span>PostgreSQL</span>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero;