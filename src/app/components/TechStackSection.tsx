import { motion } from "motion/react";

const technologies = [
  { name: "Python", color: "from-blue-400 to-yellow-400" },
  { name: "TensorFlow", color: "from-orange-500 to-red-500" },
  { name: "PyTorch", color: "from-red-500 to-orange-600" },
  { name: "OpenCV", color: "from-green-400 to-cyan-500" },
  { name: "React", color: "from-cyan-400 to-blue-500" },
  { name: "Node.js", color: "from-green-500 to-emerald-600" },
  { name: "AWS", color: "from-orange-500 to-yellow-500" },
  { name: "MongoDB", color: "from-green-500 to-emerald-500" },
  { name: "Docker", color: "from-blue-500 to-cyan-400" },
  { name: "Kubernetes", color: "from-blue-600 to-purple-500" },
  { name: "Firebase", color: "from-yellow-500 to-orange-500" },
  { name: "PostgreSQL", color: "from-blue-600 to-cyan-500" },
  { name: "LangChain", color: "from-purple-500 to-pink-500" },
  { name: "OpenAI", color: "from-emerald-400 to-cyan-400" },
  { name: "NVIDIA AI", color: "from-green-500 to-emerald-600" },
  { name: "HuggingFace", color: "from-yellow-500 to-orange-500" },
];

export function TechStackSection() {
  return (
    <section id="tech-stack" className="relative py-32 px-6 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-black to-purple-900/20"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Powered by the most advanced technologies in AI and cloud computing
          </p>
        </motion.div>

        {/* Orbital Layout */}
        <div className="relative w-full max-w-4xl mx-auto h-[600px] flex items-center justify-center">
          {/* Center Core */}
          <motion.div
            className="absolute z-20 w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="text-white font-black text-lg">AI</div>
          </motion.div>

          {/* Orbiting Technologies */}
          {technologies.map((tech, i) => {
            const angle = (i / technologies.length) * 360;
            const radius = 250;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: "50%",
                  top: "50%",
                }}
                animate={{
                  x: [x, x * 1.1, x],
                  y: [y, y * 1.1, y],
                }}
                transition={{
                  duration: 3 + (i % 3),
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="relative -translate-x-1/2 -translate-y-1/2"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} blur-xl opacity-50`}></div>
                  <div className="relative px-6 py-3 bg-black/80 backdrop-blur-xl border border-white/20 rounded-full">
                    <span className={`text-sm font-semibold bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}>
                      {tech.name}
                    </span>
                  </div>
                </motion.div>

                {/* Connection Line */}
                <svg className="absolute left-1/2 top-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <motion.line
                    x1="250"
                    y1="250"
                    x2={250 - x}
                    y2={250 - y}
                    stroke="url(#gradient)"
                    strokeWidth="1"
                    opacity="0.2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: i * 0.1 }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
