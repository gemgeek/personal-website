import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-gray-900/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-gray-700">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        
        {/* === NEW LOGO SECTION === */}
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/assets/gem-geek-avatar.jpg" 
            alt="GEM's Avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
          {/* Your Name and Title */}
          <div>
            <p className="text-white font-bold">Matilda Esenam Gbeve</p>
            <p className="text-gray-400 text-xs">Full-Stack Developer</p>
          </div>
        </Link>

        {/* Menu Links */}
        <ul className="hidden md:flex items-center space-x-6">
          <li><Link href="#home" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
          <li><Link href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link></li>
          <li><Link href="#about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
          <li><Link href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
        </ul>

        {/* Resume Button */}
        <a 
          href="/assets/Matilda-Esenam-Gbeve.pdf" 
          className="bg-pink-600 hover:bg-pink-400 text-white font-semibold px-4 py-2 rounded-md transition-colors"
        >
          Resume →
        </a>
      </div>
    </nav>
  );
};

export default Navbar;