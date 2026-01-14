import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-28 md:pt-0"
    >

      {/* 🌟 Spotlight Effect behind text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        
        {/* Avaliable Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm text-cyan-400 font-medium hover:bg-white/10 transition-colors cursor-default"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          Ready to Collaborate
        </motion.div>

        {/* 🧛 Main Heading */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-2">
            Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Surendhar Arasappan
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mt-6 max-w-3xl mx-auto leading-relaxed">
            Just a guy who loves building cool stuff for the <span className="text-gray-100 font-semibold">web</span> and <span className="text-gray-100 font-semibold">mobile</span>.
          </p>
        </motion.div>

        {/* 🔘 Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <Link to="projects" smooth duration={1000} offset={-20}>
            <button className="px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-gray-200 transition-all flex items-center gap-2 group">
              View Work 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          
          <a
            href={`${import.meta.env.BASE_URL}SURENDHAR_A.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
             <button className="px-8 py-4 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-white font-bold text-lg hover:bg-white/20 transition-all flex items-center gap-2">
               Download CV <Download className="w-5 h-5" />
             </button>
          </a>
        </motion.div>

        {/* � Socials (Minimal) */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1, delay: 0.6 }}
           className="flex items-center justify-center gap-6 pt-8 text-gray-500"
        >
           <a href="https://github.com/SURENDHAR-05-12" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Github className="w-6 h-6" /></a>
           <a href="https://www.linkedin.com/in/surendhar0512/" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors"><Linkedin className="w-6 h-6" /></a>
           <a href="mailto:surendhar6384@gmail.com" className="hover:text-purple-400 transition-colors"><Mail className="w-6 h-6" /></a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
