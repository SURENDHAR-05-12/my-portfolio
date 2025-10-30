import { motion } from "framer-motion";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    ScrollReveal().reveal(".skill-card", {
      duration: 1000,
      distance: "40px",
      origin: "bottom",
      easing: "ease-in-out",
      interval: 150,
      reset: false,
    });
  }, []);

  const skills = [
    { name: "HTML", img: "./assets/html (2).png" },
    { name: "CSS", img: "./assets/css.png" },
    { name: "JavaScript", img: "./assets/javascript.png" },
    { name: "React", img: "./assets/react.png" },
    { name: "Tailwind", img: "./assets/tailwind.png" },
    { name: "TypeScript", img: "./assets/ts.png" },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-black to-gray-900 text-center text-white"
    >
      <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
        My Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-10 px-8">
        {skills.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="skill-card bg-white/5 px-6 py-6 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(56,189,248,0.3)] transform hover:scale-110 hover:-rotate-1 transition-all duration-500 flex flex-col items-center"
          >
            <motion.img
              whileHover={{
                rotate: 5,
                scale: 1.15,
                transition: { type: "spring", stiffness: 200 },
              }}
              src={s.img}
              alt={s.name}
              className="w-16 h-16 object-contain mb-3"
            />
            <p className="text-lg font-semibold group-hover:text-cyan-400 transition-colors">
              {s.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
