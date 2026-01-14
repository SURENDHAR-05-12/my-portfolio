import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, Github, Linkedin, Mail, ArrowRight } from "lucide-react";
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
            : "bg-transparent border border-transparent"
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm md:hidden flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="w-full max-w-sm bg-black/80 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Neon Glow Border Effect */}
              <div className="absolute inset-0 rounded-3xl border border-cyan-500/20 pointer-events-none"></div>
              
              {/* Header inside Card */}
              <div className="flex justify-between items-center p-6 border-b border-white/5">
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Menu Links */}
              <ul className="flex flex-col p-6 space-y-2">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      to={item}
                      smooth={true}
                      duration={700}
                      offset={-80}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-2xl font-bold text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all capitalize tracking-wide flex items-center justify-between group"
                    >
                      {item}
                      <ArrowRight size={20} className="text-cyan-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Footer / Socials */}
              <div className="p-6 bg-white/5 border-t border-white/5 flex justify-center gap-6">
                 <a href="https://github.com/SURENDHAR-05-12" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    <Github size={24} />
                 </a>
                 <a href="https://www.linkedin.com/in/surendhar0512/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
                    <Linkedin size={24} />
                 </a>
                 <a href="mailto:surendhar6384@gmail.com" className="text-gray-400 hover:text-purple-500 transition-colors">
                    <Mail size={24} />
                 </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
};

export default Navbar;
