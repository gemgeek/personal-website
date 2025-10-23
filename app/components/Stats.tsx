"use client";

import { FaStar, FaRegComments, FaSuitcase, FaClock } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { motion, useInView, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

const statsData: { 
  icon: IconType; 
  value: number; 
  suffix: string; 
  decimals?: number; 
  label: string 
}[] = [
  {
    icon: FaStar,
    value: 5.0,
    suffix: "",
    decimals: 1, 
    label: "AVERAGE RATING",
  },
  {
    icon: FaRegComments,
    value: 65,
    suffix: "+",
    label: "CLIENT FEEDBACK",
  },
  {
    icon: FaSuitcase,
    value: 60,
    suffix: "+",
    label: "PROJECTS DONE",
  },
  {
    icon: FaClock,
    value: 100,
    suffix: "%",
    label: "ON-TIME DELIVERY",
  },
];

function AnimatedStat({ to, suffix = "", decimals = 0 }: { to: number; suffix?: string; decimals?: number }) {

  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { 
    once: true, 
    margin: "-100px", 
  });

  useEffect(() => {
    if (inView && ref.current) {
      const node = ref.current;
      
      const controls = animate(0, to, {
        duration: 2, 
        ease: "easeOut",
        onUpdate(value) {
          node.textContent = value.toFixed(decimals) + suffix;
        }
      });

      return () => controls.stop();
    }
  }, [inView, to, decimals, suffix]); 

  return (
    <p ref={ref} className="text-4xl lg:text-5xl font-bold">
      {decimals === 1 ? '0.0' : '0'}{suffix}
    </p>
  );
}

const Stats = () => {
  return (
    <section className="py-20 bg-[#0d1117]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
          {statsData.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="flex flex-col items-center">
                <div className="mb-3">
                  <IconComponent size={40} className="text-pink-500" />
                </div>
                
                <AnimatedStat 
                  to={stat.value} 
                  suffix={stat.suffix} 
                  decimals={stat.decimals} 
                />
                <p className="text-sm text-gray-400 tracking-widest mt-2">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;