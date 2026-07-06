import { motion } from "framer-motion";
import { Briefcase, Calendar, Building2, Award, ExternalLink, CheckCircle2 } from "lucide-react";

const Experience = () => {
  const skills = [
    "Flutter", "Dart", "Firebase", "REST API", "Git", "GitHub", "Android Studio", "VS Code"
  ];
  
  const responsibilities = [
    "Developed and maintained cross-platform mobile applications using Flutter and Dart.",
    "Designed responsive and reusable UI components following Material Design guidelines.",
    "Integrated RESTful APIs and handled JSON data efficiently.",
    "Collaborated with senior developers to implement new features and improve application performance.",
    "Participated in code reviews, debugging, and testing to ensure high-quality applications.",
    "Used Git for version control and team collaboration."
  ];

  return (
    <section id="experience" className="py-24 relative z-10 bg-transparent text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none transform -translate-y-1/2 -translate-x-1/4"></div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 flex items-center justify-center gap-4">
            <Briefcase className="w-10 h-10 text-cyan-400" />
            <span>Internship <span className="text-cyan-400">Experience</span></span>
          </h2>
          <p className="text-gray-400 text-lg">My professional journey and hands-on industry experience.</p>
        </motion.div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl shadow-[0_0_40px_rgba(6,182,212,0.05)] hover:shadow-[0_0_60px_rgba(6,182,212,0.15)] transition-all duration-500"
        >
          {/* Glowing border on hover */}
          <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-cyan-400/30 transition duration-700 pointer-events-none"></div>
          
          <div className="flex flex-col md:flex-row gap-8">
            
            {/* Timeline Left Section (Desktop) */}
            <div className="hidden md:flex flex-col items-center">
              <div className="w-20 h-20 bg-white/10 border border-cyan-500/30 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:border-cyan-400/50 transition-all duration-500 overflow-hidden p-2">
                <img src="/assets/UI logo.png" alt="Umaiyaal Infotech Logo" className="w-full h-full object-contain drop-shadow-md" />
              </div>
              {/* Vertical Timeline Line */}
              <div className="w-[2px] h-full bg-gradient-to-b from-cyan-500/50 to-transparent mt-6 rounded-full group-hover:from-cyan-400 transition-colors duration-500"></div>
            </div>

            {/* Content Section */}
            <div className="flex-1">
              
              {/* Header: Role, Company, Duration */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8">
                <div>
                  <h3 className="text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    Flutter Developer Intern
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 mt-3 text-gray-300">
                    <span className="flex items-center gap-2 font-medium">
                      <img src="/assets/UI logo.png" alt="Company Logo" className="w-5 h-5 object-contain md:hidden" />
                      Umaiyaal Infotech
                    </span>
                    <span className="hidden md:inline text-gray-600">•</span>
                    <span className="flex items-center gap-2 text-purple-400">
                      <Calendar className="w-5 h-5" />
                      September 2025 – June 2026
                    </span>
                  </div>
                </div>
              </div>

              {/* Responsibilities List */}
              <div className="space-y-4 mb-8">
                {responsibilities.map((desc, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5 opacity-80" />
                    <p className="text-gray-300 leading-relaxed text-[15px] md:text-base">{desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* Tech Stack Badges */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-2.5">
                  {skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-cyan-100 hover:bg-cyan-500/20 hover:border-cyan-500/50 hover:text-white transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-6 border-t border-white/10">
                {/* <a 
                  href="#" 
                  className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-xl font-medium transition-all shadow-lg hover:shadow-cyan-500/25"
                >
                  <Award className="w-5 h-5" />
                  View Certificate
                </a> */}
                <a 
                  href="https://www.umaiyaalinfotech.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-medium transition-all hover:text-cyan-400"
                >
                  Visit Company
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
