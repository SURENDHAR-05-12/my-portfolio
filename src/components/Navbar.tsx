import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navItems = ["home", "about", "projects", "skills", "contact"];

  // 📜 Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div 
        className={`max-w-7xl mx-auto px-6 transition-all duration-300 ${
          scrolled 
            ? "bg-black/60 backdrop-blur-xl border border-white/10 rounded-full shadow-lg mx-4 md:mx-auto max-w-5xl" 
            : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center h-14 md:h-16">
          
          {/* ✒️ Signature Logo */}
          <h1 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent cursor-pointer tracking-tight">
            <span className="md:hidden">SURENDHAR </span>
            <span className="hidden md:block">Surendhar Arasappan</span>
          </h1>

          {/* 🖥️ Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  to={item}
                  smooth={true}
                  duration={700}
                  offset={-100}
                  spy={true}
                  activeClass="text-cyan-400"
                  className="relative text-sm font-medium text-gray-300 hover:text-cyan-400 cursor-pointer transition-colors uppercase tracking-wider after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-cyan-400 after:to-purple-500 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* 📱 Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>

      {/* 📱 Mobile Full-Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-gray-900/60 backdrop-blur-3xl flex flex-col justify-center items-center md:hidden"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-gray-400 hover:text-white transition-colors p-2"
            >
              <X size={32} />
            </button>

            {/* Menu Links */}
            <ul className="flex flex-col space-y-8 text-center">
              {navItems.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                >
                  <Link
                    to={item}
                    smooth={true}
                    duration={700}
                    offset={-80}
                    onClick={() => setIsOpen(false)}
                    className="block text-4xl md:text-5xl font-bold text-gray-300 hover:text-cyan-400 transition-colors uppercase tracking-tight"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
};

export default Navbar;
