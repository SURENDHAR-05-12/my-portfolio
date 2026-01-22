import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Frontend Ecosystem",
    skills: [
      { name: "HTML", img: "/assets/html (2).png" },
      { name: "CSS", img: "/assets/css.png" },
      { name: "JavaScript", img: "/assets/javascript.png" },
      { name: "React", img: "/assets/react.png" },
      { name: "TypeScript", img: "/assets/ts.png" },
      { name: "Tailwind", img: "/assets/tailwind.png" },
    ]
  },
  {
    category: "Mobile & Others",
    skills: [
      { name: "Flutter", img: "/assets/flutter.png" },
      { name: "Dart", img: "/assets/dart.png" },
      { name: "REST API", img: "/assets/rest.png" },
    ]
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-transparent text-white relative overflow-hidden">
      
      {/* 🌟 Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-cyan-400">Proficiency</span>
          </h2>
          <p className="text-gray-400 text-lg">
            A curated list of technologies I use to build amazing products.
          </p>
        </motion.div>

        <div className="space-y-16">
          {skillsData.map((category, catIndex) => (
            <div key={catIndex}>
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-2xl font-bold mb-8 pl-4 border-l-4 border-cyan-500 text-gray-200"
              >
                {category.category}
              </motion.h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 10px 30px -10px rgba(6,182,212,0.3)",
                      borderColor: "rgba(34,211,238,0.5)"
                    }}
                    className="group bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 backdrop-blur-sm cursor-default transition-all duration-300"
                  >
                    <div className="relative w-16 h-16 flex items-center justify-center bg-white/5 rounded-full mb-2 group-hover:scale-110 transition-transform duration-300">
                      <img 
                        src={skill.img} 
                        alt={skill.name} 
                        className="w-10 h-10 object-contain drop-shadow-lg" 
                      />
                    </div>
                    <span className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
