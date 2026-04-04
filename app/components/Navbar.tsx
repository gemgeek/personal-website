"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react'; 
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi'; 
import { FaGithub, FaLinkedin, FaTwitter, FaTiktok } from 'react-icons/fa'; 

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const pathname = "/" + (usePathname()?.split('/')[1] ?? '');
  const [hoveredPath, setHoveredPath] = useState(pathname);
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav className="bg-gray-900/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-gray-700">
        <div className="container mx-auto px-4 flex justify-between items-center h-16">
          
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="/assets/gem-geek-avatar.jpg"
              alt="Matilda Gbeve's Avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="text-white font-bold block">Matilda Esenam Gbeve</p>
              <p className="text-gray-400 text-xs">Full-Stack Developer</p>
            </div>
          </Link>

          <ul 
            className="hidden md:flex items-center space-x-2 relative"
            onMouseLeave={() => setHoveredPath(pathname)}
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href}
                  className={`px-4 py-2 rounded-md text-sm relative transition-colors ${
                    pathname === link.href ? "text-white" : "text-gray-300 hover:text-white"
                  }`}
                  onMouseEnter={() => setHoveredPath(link.href)}
                >
                  {link.name}
                  {link.href === hoveredPath && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-full bg-pink-500/20 rounded-md -z-10"
                      layoutId="navbar"
                      aria-hidden="true"
                      style={{ width: "100%" }}
                      transition={{ type: "spring", bounce: 0.25, stiffness: 130, damping: 9, duration: 0.3 }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <a 
            href="/assets/CV-GEM.pdf" 
            className="hidden md:inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold px-4 py-2 rounded-md transition-colors"
          >
            Resume →
          </a>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </nav>
      
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden fixed top-16 left-0 w-full bg-gray-900/95 backdrop-blur-md z-40 h-screen overflow-y-auto"
            suppressHydrationWarning
          >
            <ul className="flex flex-col items-center space-y-4 py-12">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white text-lg">
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <a 
                  href="/assets/Matilda-Esenam-Gbeve.pdf" 
                  className="mt-4 mb-8 inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-md transition-colors"
                >
                  Resume →
                </a>
              </li>

              {/* Mobile Social Icons Section */}
              <li className="flex items-center gap-8 pt-6 border-t border-gray-800 w-2/3 justify-center">
                <a href="https://www.tiktok.com/@gem_geek?_r=1&_t=ZS-95FronL0fPk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <FaTiktok size={24} />
                </a>
                <a href="https://www.linkedin.com/in/matilda-esenam-gbeve" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <FaLinkedin size={24} />
                </a>
                <a href="https://github.com/gemgeek" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <FaGithub size={24} />
                </a>
                <a href="https://x.com/gem_geek_" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <FaTwitter size={24} />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;