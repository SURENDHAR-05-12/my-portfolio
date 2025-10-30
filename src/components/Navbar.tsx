import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["home", "about", "projects", "skills", "contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-lg border-b border-white/10 shadow-[0_2px_15px_rgba(56,189,248,0.05)]">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-14 py-4">
        {/* 🧊 Logo */}
        <h1 className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-wide">
          SURENDHAR ARASAPPAN<span className="text-gray-400"></span>
        </h1>

        {/* 🧭 Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={700}
                offset={-60}
                spy={true}
                activeClass="active-nav"
                className="relative cursor-pointer hover:text-cyan-400 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-0 after:h-[2px] after:bg-gradient-to-r from-cyan-400 to-blue-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        {/* 📱 Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-cyan-400"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* 📱 Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10 text-center py-6 space-y-6 animate-fadeIn">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={700}
              offset={-60}
              spy={true}
              onClick={() => setIsOpen(false)}
              className="block text-gray-300 hover:text-cyan-400 text-lg transition-all duration-300"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </div>
      )}

      {/* 🔥 Active section highlight style */}
      <style>{`
        .active-nav {
          color: #22d3ee;
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
