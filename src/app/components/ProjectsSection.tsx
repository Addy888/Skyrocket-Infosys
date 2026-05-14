import { motion } from "motion/react";
import { ExternalLink, Github, Sparkles } from "lucide-react";

const projects = [
  {
    title: "RevvTik AI",
    description: "AI-powered creator dashboard with social analytics and content optimization",
    category: "Social AI Platform",
    gradient: "from-pink-500 to-purple-600",
    tags: ["AI Analytics", "Creator Tools", "Dashboard"],
  },
  {
    title: "Horssa Marketplace",
    description: "Luxury horse marketplace with AI-powered analytics and premium UX",
    category: "E-Commerce AI",
    gradient: "from-amber-500 to-orange-600",
    tags: ["Marketplace", "AI Analytics", "Premium"],
  },
  {
    title: "AI Tutor Platform",
    description: "Personalized learning assistant with adaptive AI curriculum",
    category: "EdTech AI",
    gradient: "from-blue-500 to-cyan-600",
    tags: ["Education", "NLP", "Adaptive AI"],
  },
  {
    title: "Traffic Sign Recognition",
    description: "Real-time computer vision system for autonomous vehicles",
    category: "Computer Vision",
    gradient: "from-green-500 to-emerald-600",
    tags: ["CV", "Real-time", "Autonomous"],
  },
  {
    title: "Cognitive Load Estimation",
    description: "AI system for measuring mental workload in real-time",
    category: "AI Research",
    gradient: "from-violet-500 to-purple-600",
    tags: ["Research", "ML", "Healthcare"],
  },
  {
    title: "Brain-Controlled Gaming",
    description: "BCI interface for hands-free gaming experiences",
    category: "Neurotech",
    gradient: "from-cyan-500 to-blue-600",
    tags: ["BCI", "Gaming", "Innovation"],
  },
  {
    title: "AI Voice Assistant",
    description: "Enterprise-grade conversational AI with multi-language support",
    category: "Voice AI",
    gradient: "from-indigo-500 to-purple-600",
    tags: ["Voice AI", "NLP", "Enterprise"],
  },
  {
    title: "AI HR Automation",
    description: "Intelligent recruitment and HR management system",
    category: "HR Tech",
    gradient: "from-teal-500 to-cyan-600",
    tags: ["Automation", "HR", "AI Screening"],
  },
  {
    title: "AI Video Generator",
    description: "Automated video creation platform with AI editing",
    category: "Media AI",
    gradient: "from-red-500 to-pink-600",
    tags: ["Video AI", "Generative", "Media"],
  },
  {
    title: "AI Medical Diagnosis",
    description: "Deep learning system for medical image analysis",
    category: "HealthTech AI",
    gradient: "from-emerald-500 to-teal-600",
    tags: ["Healthcare", "CV", "Diagnosis"],
  },
  {
    title: "AI Cybersecurity",
    description: "Threat detection and prevention using machine learning",
    category: "Security AI",
    gradient: "from-red-500 to-orange-600",
    tags: ["Security", "ML", "Real-time"],
  },
  {
    title: "Resume Analyzer AI",
    description: "Intelligent CV screening and candidate matching system",
    category: "Recruitment AI",
    gradient: "from-blue-500 to-indigo-600",
    tags: ["NLP", "Recruitment", "Automation"],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-32 px-6 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/10 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 rounded-full bg-purple-500/10 border border-purple-500/30">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-purple-400 font-medium">Portfolio</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transforming industries with cutting-edge AI solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 blur-xl group-hover:opacity-40 group-hover:blur-2xl transition-all rounded-2xl`}></div>

              <div className="relative h-full bg-black/60 backdrop-blur-xl border border-white/10 group-hover:border-cyan-500/50 rounded-2xl p-6 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${project.gradient} text-white`}>
                    {project.category}
                  </span>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                      <Github className="w-4 h-4 text-white" />
                    </button>
                    <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                      <ExternalLink className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
