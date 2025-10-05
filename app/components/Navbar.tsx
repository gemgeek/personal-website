"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const pathname = "/" + (usePathname()?.split('/')[1] ?? ''); 
  const [hoveredPath, setHoveredPath] = useState(pathname);

  return (
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

        {/* Updated Menu Links */}
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
                    style={{
                      width: "100%",
                    }}
                    transition={{
                      type: "spring",
                      bounce: 0.25,
                      stiffness: 130,
                      damping: 9,
                      duration: 0.3,
                    }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <a 
          href="/assets/Matilda-Gbeve-Resume.pdf" 
          className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-4 py-2 rounded-md transition-colors"
        >
          Resume →
        </a>
      </div>
    </nav>
  );
};

export default Navbar;