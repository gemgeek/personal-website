"use client";

import { motion } from 'framer-motion';
import { FiMail } from 'react-icons/fi';

const CallToAction = () => {
  return (
    <motion.section 
      id="contact"
      className="py-20 px-4 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-4">
          Ready to Build Something{" "}
          <span className="bg-gradient-to-r from-pink-500 to-violet-500 text-transparent bg-clip-text">
            Great?
          </span>
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto mb-8 text-lg">
          Let’s bring your vision to life. From concept to launch, I create impactful digital products, brand identities, and strategies that combine creativity with technology to deliver real results.
        </p>
        <a 
          href="mailto:esenam16@gmail.com"
          className="inline-flex items-center gap-3 bg-pink-600 text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-pink-700 transition-transform hover:scale-105 duration-300"
        >
          <FiMail />
          Get in Touch
        </a>
      </div>
    </motion.section>
  );
};

export default CallToAction;