"use client";
import { motion } from 'framer-motion';

const expertiseItems = [
  {
    title: "Full-Stack Development",
    skills: "JavaScript, Python, React, Next.js, Node.js, Django",
  },
  {
    title: "UI/UX Design & Prototyping",
    skills: "Figma, Canva, User Research, Wireframing",
  },
  {
    title: "Brand Identity & Graphic Design",
    skills: "Logo Design, Visual Systems, Digital Campaigns",
  },
  {
    title: "Content Strategy & Ghostwriting",
    skills: "Tech Blogging, Copywriting, Brand Voice",
  },
];

const JourneyAndExpertise = () => {
  return (
    <motion.section 
      className="py-20 px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto">
        {/* My Journey */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">My Journey</h2>
          <div className="text-gray-400 space-y-4">
            <p>
              My journey started in design, where I created bold brand identities and graphic systems for startups and businesses. Over time, my curiosity led me into software engineering, learning how to transform concepts into real products through code. Today, I combine these skills to craft intuitive applications, striking visuals, and meaningful digital experiences.
            </p>
            <p>
              Living with aphantasia, a rare condition where I cannot visualize images in my mind, has deeply shaped my creative approach. Instead of “seeing” ideas, I build them through logic, structure, and storytelling — translating concepts into tangible designs, interfaces, and systems. This perspective allows me to approach problems differently, often uncovering solutions others might overlook. Beyond development and design, I bring years of customer service expertise, where I learned the art of listening, empathy, and problem resolution. These skills continue to guide my work, ensuring that every solution I build is not only technically sound but also user-centered and emotionally intuitive.
            </p>
          </div>
        </div>

        {/* Technical Expertise */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Technical Expertise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertiseItems.map((item, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.skills}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default JourneyAndExpertise;