import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail, FiGlobe, FiMapPin, FiClock } from 'react-icons/fi';
import Link from 'next/link';

const ContactSidebar = () => {
  return (
    <div className="space-y-8">
      {/* Professional Profiles */}
      <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
        <h3 className="text-xl font-bold text-white mb-4">Professional Profiles</h3>
        <div className="flex items-center gap-4 mb-4">
          <Image src="/assets/profile-pic.jpg" alt="Matilda Gbeve" width={50} height={50} className="rounded-full" />
          <div>
            <p className="font-bold text-white">Gbeve Esenam Matilda (GEM)</p>
            <p className="text-sm text-gray-400">Full-Stack Developer & Creative Designer</p>
          </div>
        </div>
        <div className="flex gap-4">
          <a href="https://github.com/gemgeek" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><FaGithub size={24} /></a>
          <a href="https://www.linkedin.com/in/matilda-esenam-gbeve" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><FaLinkedin size={24} /></a>
          <Link href="/projects" className="text-gray-400 hover:text-white transition-colors"><FiGlobe size={24} /></Link>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
        <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-gray-300">
            <FiMail className="text-pink-500" />
            <a href="mailto:esenam16@gmail.com" className="hover:text-white">esenam16@gmail.com</a>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <FiMapPin className="text-pink-500" />
            <span>Accra, Ghana (Remote Globally)</span>
          </div>
        </div>
      </div>

      {/* Current Status */}
      <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
        <h3 className="text-xl font-bold text-white mb-4">Current Status</h3>
        <ul className="space-y-2 text-gray-300">
          <li><span className="text-green-400">✔</span> Freelance Work → Available</li>
          <li><span className="text-green-400">✔</span> Consultations → Open</li>
          <li><span className="text-green-400">✔</span> Collaborations → Actively Seeking</li>
          <li className="flex items-center gap-2 pt-2 border-t border-gray-700 mt-2"><FiClock className="text-pink-500" /> Time Zone: GMT+0 (Accra)</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactSidebar;