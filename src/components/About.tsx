import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import profilePic from "/assets/profile-pic.jpg";

const About: React.FC = () => {
  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring animation for the tilt
  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  // Map mouse position to rotation degrees
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]); // Tilt up/down
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]); // Tilt left/right
  
  // Glare effect opacity/position
  const glareOpacity = useTransform(mouseX, [-0.5, 0.5], [0, 1]); // Show glare on sides
  const glareX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate mouse position from center of the card (-0.5 to 0.5)
    const normalizedX = (e.clientX - rect.left) / width - 0.5;
    const normalizedY = (e.clientY - rect.top) / height - 0.5;
    
    x.set(normalizedX);
    y.set(normalizedY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      id="about"
      className="relative py-20 bg-transparent text-white overflow-hidden"
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
          {/* Profile image with 3D Tilt */}
          <div className="md:w-1/3 w-full flex justify-center perspective-1000">
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative p-1 rounded-3xl bg-gradient-to-r from-cyan-400 to-purple-500 shadow-2xl cursor-pointer group"
            >
              <div 
                className="relative rounded-2xl overflow-hidden bg-black"
                style={{ transform: "translateZ(20px)" }} // Pop out effect
              >
                  <img
                    src={profilePic}
                    alt="Profile"
                    className="w-full h-auto object-cover border border-white/20"
                  />
                  
                  {/* Dynamic Glare Overlay */}
                  <motion.div 
                    style={{ 
                        opacity: glareOpacity,
                        background: `linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)`,
                        x: glareX,
                    }}
                    className="absolute inset-0 w-[200%] h-full pointer-events-none mix-blend-overlay"
                  />
              </div>

              {/* Back Glow Effect */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-300 -z-10" 
                style={{ transform: "translateZ(-50px)" }}
              ></div>
            </motion.div>
          </div>

          {/* Text section */}
          <div className="md:w-2/3 w-full">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-transparent rounded-full mt-2"></div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-5">
              I’m <span className="text-cyan-400 font-semibold">Surendhar Arasappan</span>, a passionate Frontend Developer from Tamil Nadu.
              I love crafting responsive, elegant, and user-friendly websites using
              modern tools like <span className="text-purple-400 font-medium">React</span>,{" "}
              <span className="text-purple-400 font-medium">Tailwind</span>,{" "}
              <span className="text-purple-400 font-medium">TypeScript</span>, and mobile technology like{" "}
              <span className="text-purple-400 font-medium">Flutter</span> &{" "}
              <span className="text-purple-400 font-medium">Dart</span>.
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
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ 
                    scale: 1.1, 
                    boxShadow: "0 0 15px rgba(6,182,212,0.4)" 
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-6 py-3 rounded-full text-sm font-medium cursor-pointer 
                    bg-white/5 border border-white/10 backdrop-blur-md text-gray-300
                    hover:text-cyan-400 hover:border-cyan-400 
                    hover:bg-cyan-950/30
                    transition-all duration-300"
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
