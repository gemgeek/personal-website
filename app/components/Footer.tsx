import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-violet-900/30 to-transparent pt-20 pb-8 px-4">
      <div className="container mx-auto">
        {/* Top section with columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left mb-12">
          {/* Column 1: Identity */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-2">GEM</h3>
            <p className="text-gray-400">Full-Stack Developer</p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#expertise" className="text-gray-400 hover:text-white transition-colors">Experience</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h4 className="font-bold text-white mb-4">Connect</h4>
            <div className="flex justify-center md:justify-start gap-6">
              <a href="https://github.com/gemgeek" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform hover:scale-125">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/matilda-esenam-gbeve" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform hover:scale-125">
                <FaLinkedin size={24} />
              </a>
              <a href="https://x.com/gem_geek_" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform hover:scale-125">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2025 GEM (Matilda Esenam Gbeve). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;