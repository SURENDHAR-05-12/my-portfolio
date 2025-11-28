import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { Sparkles, ExternalLink } from "lucide-react";

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
    }, 70);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      style={{ backgroundImage: `url(${"./assets/developer.jpg"})` }}
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col md:flex-row items-center justify-center md:justify-between 
  px-6 sm:px-12 md:px-24 lg:px-36 text-white overflow-hidden"
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 sm:bg-black/40 pointer-events-none"></div>

      {/* Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[350px] h-[350px] bg-cyan-500/25 rounded-full blur-[150px] top-10 left-10 animate-pulse"></div>
        <div className="absolute w-[350px] h-[350px] bg-purple-500/25 rounded-full blur-[150px] bottom-10 right-10 animate-pulse"></div>
      </div>

      {/* 🧠 Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left space-y-6 max-w-3xl mt-20 md:mt-0"
      >
        {/* ✨ Heading */}
        <h1
          className="bg-[length:200%_200%] animate-gradientMove
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold 
          text-transparent bg-clip-text bg-gradient-to-r 
          from-cyan-400 via-blue-400 to-purple-500 
          drop-shadow-[0_0_25px_rgba(34,211,238,0.5)] tracking-tight leading-snug 
          whitespace-normal sm:whitespace-normal md:whitespace-nowrap"
        >
          {displayText}
          <span className="text-cyan-400 animate-pulse">|</span>
        </h1>

        <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-lg">
          Crafting elegant, performant front-end experiences using{" "}
          <span className="text-cyan-300 font-semibold">React</span>,{" "}
          <span className="text-cyan-300 font-semibold">Tailwind</span>, and{" "}
          <span className="text-cyan-300 font-semibold">TypeScript</span>. 🚀
        </p>

        {/* 🔘 Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start items-center flex-wrap">
          <Link to="projects" smooth duration={1000} offset={-20}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 rounded-xl font-medium text-white 
              bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400
              hover:shadow-[0_0_25px_rgba(34,211,238,0.3)] 
              transition-all duration-300 w-[200px]"
            >
              View My Work
            </motion.button>
          </Link>

          <Link to="contact" smooth duration={1000} offset={-50}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 rounded-xl font-medium text-black bg-cyan-400 
              hover:bg-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.5)] 
              transition-all duration-300 flex items-center justify-center gap-2 w-[200px]"
            >
              <Sparkles className="w-5 h-5" />
              Hire Me
            </motion.button>
          </Link>

          <motion.a
            whileHover={{ scale: 1.05 }}
            href={`${import.meta.env.BASE_URL}SURENDHAR_A.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-xl font-medium text-white 
            bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500
            hover:shadow-[0_0_30px_rgba(147,51,234,0.4)] 
            transition-all duration-300 w-[200px] text-center flex items-center justify-center gap-2"
          >
            <ExternalLink className="w-5 h-5" />
            View CV
          </motion.a>
        </div>
      </motion.div>

      {/* 🌈 Animations */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradientMove {
          animation: gradientMove 6s ease infinite;
        }

        
      `}</style>
    </section>
  );
};

export default Hero;
