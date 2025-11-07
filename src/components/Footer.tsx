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
    <footer className="relative bg-gradient-to-b from-[#0f121a] via-[#0d1119] to-[#05070d] text-white py-10 mt-0 border-t border-white/10 overflow-hidden">
      {/* 🌈 Top divider glow */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-purple-500/30 via-cyan-400/60 to-purple-500/30 shadow-[0_0_12px_rgba(34,211,238,0.3)]"></div>

      {/* 💫 Radial background blend */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_bottom,rgba(56,189,248,0.12),transparent_80%)]"></div>

      {/* ✨ Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 md:px-10 text-center relative z-10"
      >
        {/* 🌟 Name */}
        <h3 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-400 to-rose-400 bg-clip-text text-transparent">
          SURENDHAR ARASAPPAN
        </h3>

        {/* 💬 Tagline */}
        <p className="mt-2 text-gray-300 italic text-sm sm:text-base">
          Building modern web experiences with style & innovation 
        </p>

        {/* 🔗 Social Links */}
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

        {/* ⚡ Copyright */}
        <p className="text-sm text-gray-500 mt-6">
          © 2025{" "}
          <span className="text-cyan-400 font-medium">
            Surendhar Arasappan
          </span>{" "}
          — All rights reserved.
        </p>
      </motion.div>

      {/* 🩵 Extended smooth bottom glow (fixes black cutoff on mobile) */}
      <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-b from-transparent via-[#020617]/80 to-[#000000] pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
