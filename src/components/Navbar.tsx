import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const navItems = ["home", "about", "projects", "skills", "contact"];

  // 🧠 Close menu if user clicks outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"
    >
      {/* 🧊 Wrapper */}
      <div className="flex justify-between items-center px-5 sm:px-8 lg:px-10 py-3 transition-all duration-300">
        {/* 🌈 Logo */}
        <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-wide whitespace-nowrap">
          SURENDHAR ARASAPPAN
        </h1>

        {/* 🧭 Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 lg:space-x-10 text-gray-300 font-medium">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth
                duration={700}
                offset={-55}
                spy
                activeClass="active-nav"
                className="relative cursor-pointer hover:text-cyan-400 transition-all duration-300 
                after:content-[''] after:absolute after:left-0 after:bottom-[-5px] 
                after:w-0 after:h-[2px] after:bg-gradient-to-r from-cyan-400 to-blue-500 
                hover:after:w-full after:transition-all after:duration-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        {/* 📱 Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-cyan-400 transition-transform duration-200 hover:scale-110"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* 📱 Mobile Menu (Modern Glassmorphic) */}
      <div
        className={`absolute top-full left-0 w-full bg-[#0a0f1af0] backdrop-blur-lg border-t border-cyan-400/10 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center py-6 space-y-5 text-lg font-medium text-gray-300">
          {navItems.map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={item}
                smooth
                duration={700}
                offset={-50}
                spy
                onClick={() => setIsOpen(false)}
                className="relative text-gray-300 hover:text-cyan-400 transition-all duration-300 
                after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-5px] 
                after:w-0 after:h-[2px] after:bg-cyan-400 hover:after:w-10 after:transition-all after:duration-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* ⚡ Active Link + Animations */}
      <style>{`
        .active-nav {
          color: #22d3ee;
          text-shadow: 0 0 10px rgba(34,211,238,0.8);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
