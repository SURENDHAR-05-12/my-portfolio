import { motion } from "framer-motion";
import profilePic from "/assets/profile-pic.jpg";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.1),transparent_50%)]"></div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-10 items-center"
        >
          {/* Profile image */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="md:w-1/3 w-full flex justify-center"
          >
            <div className="relative p-1 rounded-3xl bg-gradient-to-r from-cyan-400 to-purple-500 shadow-lg">
              <img
                src={profilePic}
                alt="Profile"
                className="rounded-2xl w-full h-auto object-cover border border-white/20 shadow-[0_0_25px_rgba(56,189,248,0.2)]"
              />
            </div>
          </motion.div>

          {/* Text section */}
          <div className="md:w-2/3 w-full">
            <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </h2>

            <p className="text-gray-300 leading-relaxed mb-5">
              I’m <span className="text-cyan-400 font-semibold">Surendhar Arasappan</span>, a passionate Frontend Developer from Tamil Nadu.
              I love crafting responsive, elegant, and user-friendly websites using
              modern tools like <span className="text-purple-400 font-medium">HTML</span>,{" "}
              <span className="text-purple-400 font-medium">CSS</span>,{" "}
              <span className="text-purple-400 font-medium">JavaScript</span>,{" "}
              <span className="text-purple-400 font-medium">React</span>,{" "}
              <span className="text-purple-400 font-medium">Tailwind</span>, and{" "}
              <span className="text-purple-400 font-medium">TypeScript</span>.
            </p>

            <p className="text-gray-400 italic mb-6">
              “Design is intelligence made visible. Code brings it to life.”
            </p>

            {/* Info grid */}
            <div className="grid sm:grid-cols-2 gap-y-3 gap-x-6 mb-8 text-sm text-gray-300">
              <div><strong className="text-cyan-400">Name:</strong> Surendhar Arasappan</div>
              <div><strong className="text-cyan-400">DOB:</strong> Dec 5, 2003</div>
              <div><strong className="text-cyan-400">Address:</strong> Karur, Tamil Nadu</div>
              <div><strong className="text-cyan-400">Zip:</strong> 621311</div>
              <div><strong className="text-cyan-400">Email:</strong> surendhar6384@gmail.com</div>
              <div><strong className="text-cyan-400">Phone:</strong> +91-63840-24943</div>
            </div>

            {/* Interests */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: "🎵", label: "Music" },
                { icon: "✈️", label: "Travel" },
                { icon: "🎬", label: "Movies" },
                { icon: "⚽", label: "Sports" },
              ].map((item, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.15 }}
                  className="bg-white/10 px-4 py-2 rounded-full text-sm border border-white/10 hover:border-cyan-400/40 transition-colors"
                >
                  {item.icon} {item.label}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
