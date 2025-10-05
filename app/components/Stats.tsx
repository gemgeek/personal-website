"use client";

import { FaStar, FaRegComments, FaSuitcase, FaClock } from 'react-icons/fa';
import { IconType } from 'react-icons';

const statsData: { icon: IconType; value: string; label: string }[] = [
  {
    icon: FaStar,
    value: "5.0",
    label: "AVERAGE RATING",
  },
  {
    icon: FaRegComments,
    value: "65+",
    label: "CLIENT FEEDBACK",
  },
  {
    icon: FaSuitcase,
    value: "60+",
    label: "PROJECTS DONE",
  },
  {
    icon: FaClock,
    value: "100%",
    label: "ON-TIME DELIVERY",
  },
];

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
                <p className="text-4xl lg:text-5xl font-bold">{stat.value}</p>
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