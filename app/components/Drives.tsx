"use client";
import { motion } from 'framer-motion';
import { FaLightbulb, FaAward, FaUsers, FaArrowUp } from 'react-icons/fa';

const drivesData = [
  { icon: <FaLightbulb size={28} />, title: "Innovation First", description: "I love solving problems in fresh and creative ways." },
  { icon: <FaAward size={28} />, title: "Quality", description: "Every project reflects my attention to detail and craftsmanship." },
  { icon: <FaArrowUp size={28} />, title: "Continuous Growth", description: "Always learning, always improving." },
  { icon: <FaUsers size={28} />, title: "Collaboration", description: "Great ideas are built together." },
];

const Drives = () => {
  return (
    <motion.section 
      className="py-20 px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-12">What Drives Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {drivesData.map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-pink-500 inline-block mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-400 max-w-3xl mx-auto mt-16 text-lg">
          Beyond the work, I’m deeply passionate about storytelling, creativity, and building communities. I believe technology is most powerful when it connects people, empowers ideas, and drives meaningful change.
        </p>
      </div>
    </motion.section>
  );
};

export default Drives;