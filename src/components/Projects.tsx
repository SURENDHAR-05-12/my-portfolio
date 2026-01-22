import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const TiltCard = ({ project, index }: { project: any; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full sm:w-[85%] md:w-[42%] lg:w-[32%]"
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          transform: "translateZ(50px)",
          transformStyle: "preserve-3d",
        }}
        className="group relative block h-full bg-gradient-to-b from-white/10 to-white/5 rounded-3xl 
        border border-white/10 backdrop-blur-md 
        shadow-[0_0_25px_rgba(56,189,248,0.15)] 
        transition-all duration-500 overflow-hidden"
      >
        {/* 🔹 Image */}
        <div 
          className="relative w-full h-56 overflow-hidden rounded-t-3xl"
          style={{ transform: "translateZ(50px)" }}
        >
          <motion.img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover rounded-t-3xl transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        {/* 🔹 Project Info */}
        <div 
          className="p-6 text-left"
          style={{ transform: "translateZ(50px)" }}
        >
          <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm mt-3 leading-relaxed">
            {project.desc}
          </p>

          {/* 🔹 Learn More Button */}
          <div
            className="mt-5 inline-flex items-center gap-2 text-cyan-400 font-medium cursor-pointer"
          >
            View Project →
          </div>
        </div>

        {/* Glowing border effect */}
        <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-cyan-400/30 transition duration-700"></div>
      </a>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "A React + Tailwind portfolio with smooth animations and transitions.",
      img: "/assets/portfolio.png",
      link: "https://surendhar-05-12.github.io/my-portfolio/",
    },
  ];

  return (
    <section
      id="projects"
      className="pt-32 pb-20 relative z-10 bg-transparent text-white text-center overflow-hidden"
    >
      {/* 🔹 Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-extrabold mb-12 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
      >
        My Projects
      </motion.h2>

      {/* 🧱 Project Cards Grid */}
      <div className="flex flex-wrap justify-center gap-12 px-8 md:px-20 perspective-1000">
        {projects.map((p, i) => (
          <TiltCard key={i} project={p} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
