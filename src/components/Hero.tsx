import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Hi, I'm Surendhar Arasappan";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 90);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center 
      bg-[#0a0f1a] text-white px-6 sm:px-10 overflow-hidden"
    >
      {/* 🟣 Glass Glow Orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[300px] h-[300px] bg-cyan-500/20 rounded-full blur-[150px] top-10 left-5 animate-pulse"></div>
        <div className="absolute w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-[150px] bottom-10 right-5 animate-pulse"></div>
      </div>

      {/* ✨ Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center font-extrabold tracking-tight leading-tight text-white/90 
        text-4xl sm:text-5xl md:text-6xl max-w-[95%] sm:max-w-2xl"
      >
        <span
          className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]"
        >
          {displayText}
        </span>
        <span className="text-cyan-400 animate-pulse">|</span>
      </motion.h1>

      {/* 🧠 Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="text-gray-400 text-center mt-5 text-base sm:text-lg max-w-lg leading-relaxed"
      >
        Crafting elegant, performant front-end experiences using{" "}
        <span className="text-cyan-300 font-semibold">React</span>,{" "}
        <span className="text-cyan-300 font-semibold">Tailwind</span>, and{" "}
        <span className="text-cyan-300 font-semibold">TypeScript</span>. 🚀
      </motion.p>

      {/* 🌈 Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center items-center">
        <Link to="projects" smooth duration={1000} offset={-20}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 rounded-xl font-medium text-white 
            backdrop-blur-md bg-white/10 border border-white/20 
            hover:bg-cyan-500/20 hover:shadow-[0_0_25px_rgba(34,211,238,0.3)] 
            transition-all duration-300 w-[180px]"
          >
            View My Work
          </motion.button>
        </Link>

        <Link to="contact" smooth duration={1000} offset={-50}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 rounded-xl font-medium text-black bg-cyan-400 
            hover:bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.5)] 
            transition-all duration-300 flex items-center justify-center gap-2 w-[180px]"
          >
            <Sparkles className="w-5 h-5" />
            Hire Me
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
