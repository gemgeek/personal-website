"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaMapMarkerAlt } from 'react-icons/fa'; 

const AboutHero = () => {
  return (
    <section className="py-20 px-4 pt-32 md:pt-40"> 
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left side text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-2">
            <p className="text-pink-500 font-semibold uppercase tracking-wide">About Me</p>
            <span className="text-gray-400 text-sm flex items-center gap-1">
              <FaMapMarkerAlt className="text-pink-500" /> Tema, Ghana
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            Blending Creativity & Code to Shape the Future
          </h1>
          <p className="text-gray-400 text-lg">
            I’m GEM (Gbeve Esenam Matilda), a Full-Stack Software Developer, Creative Designer, and Problem-Solver with a passion for building digital solutions that inspire, connect, and empower. My work spans across technology, design, branding, and writing — bridging the gap between functionality and creativity.
          </p>
        </motion.div>
        
        <motion.div
          className="relative w-full aspect-square md:w-3/4 lg:w-2/3 mx-auto md:mx-0 rounded-lg overflow-hidden shadow-lg" // Added aspect-square for equal sides
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src="/assets/profile-pic.png"
            alt="Matilda Esenam Gbeve"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;