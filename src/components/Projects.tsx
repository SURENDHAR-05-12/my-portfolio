import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "A React + Tailwind portfolio with smooth animations and transitions.",
      img: "/assets/project1.png",
      link: "https://surendhar-05-12.github.io/Port-Folio/",
    },
    {
      title: "Online Ticket Booking",
      desc: "An interactive booking UI with scroll effects and dynamic components.",
      img: "/src/assets/bus.jpg",
      link: "https://surendhar-05-12.github.io/GoBus/",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-[#06090f] via-[#0a101a] to-black text-white text-center overflow-hidden"
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
      <div className="flex flex-wrap justify-center gap-12 px-8 md:px-20">
        {projects.map((p, i) => (
          <motion.a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="group relative w-full sm:w-[85%] md:w-[42%] lg:w-[32%] 
            bg-gradient-to-b from-white/10 to-white/5 rounded-3xl 
            border border-white/10 backdrop-blur-md 
            shadow-[0_0_25px_rgba(56,189,248,0.15)] 
            hover:shadow-[0_0_35px_rgba(56,189,248,0.4)] 
            transition-all duration-500 overflow-hidden hover:-translate-y-2"
          >
            {/* 🔹 Image */}
            <div className="relative w-full h-56 overflow-hidden rounded-t-3xl">
              <motion.img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover rounded-t-3xl transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* 🔹 Project Info */}
            <div className="p-6 text-left">
              <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                {p.title}
              </h3>
              <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                {p.desc}
              </p>

              {/* 🔹 Learn More Button */}
              <motion.div
                whileHover={{ x: 6 }}
                className="mt-5 inline-flex items-center gap-2 text-cyan-400 font-medium cursor-pointer"
              >
                View Project →
              </motion.div>
            </div>

            {/* Glowing border effect */}
            <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-cyan-400/30 transition duration-700"></div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
