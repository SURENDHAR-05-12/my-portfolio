import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, ArrowUp } from "lucide-react";
import { Link } from "react-scroll";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/SURENDHAR-05-12", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/surendhar0512/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/itz._.snow_/", label: "Instagram" },
    { icon: Mail, href: "mailto:surendhar6384@gmail.com", label: "Email" },
  ];

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <footer className="relative bg-transparent text-white py-12 border-t border-white/10 overflow-hidden">
      
      {/* � Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          
          {/* � Brand & Copyright */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Surendhar Arasappan
            </h2>
            <p className="text-gray-400 text-sm mb-4">
              Building digital experiences that matter.
            </p>
            <p className="text-gray-600 text-xs">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* 🔗 Quick Links & Socials */}
          <div className="flex flex-col items-center md:items-end gap-6">
            
            {/* Navigation */}
            <div className="flex flex-wrap justify-center gap-6">
              {navLinks.map((link, i) => (
                <Link
                  key={i}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className="text-sm text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

          </div>

        </div>

        {/* ⬆️ Back to Top Button */}
        <div className="flex justify-center mt-12 md:hidden">
            <Link to="home" smooth={true} duration={800} className="p-3 bg-white/5 border border-white/10 rounded-full text-cyan-400 cursor-pointer">
                <ArrowUp className="w-5 h-5"/>
            </Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
