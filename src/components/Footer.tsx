import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";
import React from "react";

const Footer: React.FC = () => {
  const socials = [
    {
      icon: <Github className="w-6 h-6" />,
      href: "https://github.com/SURENDHAR-05-12",
      label: "GitHub",
      color: "hover:text-blue-300",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com/in/surendhar0512/",
      label: "LinkedIn",
      color: "hover:text-sky-400",
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      href: "https://www.instagram.com/itz._.snow_/",
      label: "Instagram",
      color: "hover:text-rose-400",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white py-10 mt-20 border-t border-white/10 overflow-hidden">
      {/* top glow line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-rose-500 via-blue-500 to-cyan-400"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 md:px-10 text-center relative z-10"
      >
        <h3 className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-400 to-rose-400 bg-clip-text text-transparent">
          SURENDHAR A
        </h3>

        <p className="mt-2 text-gray-300 italic">
          Building modern web experiences with style & innovation 🚀
        </p>

        <div className="flex justify-center gap-6 mt-5">
          {socials.map((s, i) => (
            <motion.a
              key={i}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              whileHover={{ scale: 1.2, rotate: 5 }}
              className={`transition ${s.color}`}
            >
              {s.icon}
            </motion.a>
          ))}
        </div>

        <p className="text-sm text-gray-500 mt-6">
          © 2025{" "}
          <span className="text-blue-400 font-medium">
            Surendhar Arasappan
          </span>{" "}
          — All rights reserved.
        </p>
      </motion.div>

      {/* subtle blue glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_bottom,rgba(59,130,246,0.15),transparent_70%)]"></div>
    </footer>
  );
};

export default Footer;
