import { motion } from "motion/react";
import {
  Brain,
  Cpu,
  Workflow,
  Cloud,
  Code,
  Eye,
  MessageSquare,
  Mic,
  Video,
  Shield,
  BarChart3,
  Sparkles,
  Database,
  Zap,
  Lock,
  Rocket
} from "lucide-react";

const services = [
  { icon: Brain, title: "AI Development", description: "Custom AI solutions tailored to your business needs" },
  { icon: Cpu, title: "AI Agents", description: "Intelligent autonomous agents for automation" },
  { icon: Workflow, title: "Automation", description: "End-to-end business process automation" },
  { icon: Cloud, title: "SaaS Platforms", description: "Scalable cloud-based software solutions" },
  { icon: Code, title: "Full Stack Dev", description: "Modern web & mobile applications" },
  { icon: Eye, title: "Computer Vision", description: "Advanced image & video analysis systems" },
  { icon: MessageSquare, title: "NLP Solutions", description: "Natural language processing & understanding" },
  { icon: Mic, title: "Voice Assistants", description: "Conversational AI & voice interfaces" },
  { icon: Video, title: "AI Video Gen", description: "Automated video creation & editing" },
  { icon: Database, title: "Cloud AI", description: "Distributed AI infrastructure & deployment" },
  { icon: Shield, title: "AI Security", description: "Cybersecurity powered by machine learning" },
  { icon: BarChart3, title: "Analytics", description: "Business intelligence & predictive analytics" },
  { icon: Sparkles, title: "Generative AI", description: "Content creation with GPT & diffusion models" },
  { icon: Zap, title: "AI Dashboards", description: "Real-time data visualization & insights" },
  { icon: Lock, title: "Enterprise AI", description: "Secure AI solutions for enterprises" },
  { icon: Rocket, title: "Future Tech", description: "Emerging technologies & innovation labs" },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative py-32 px-6 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive AI solutions for the modern enterprise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100"></div>

              <div className="relative h-full bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-xl border border-cyan-500/20 group-hover:border-cyan-500/50 rounded-2xl p-6 transition-all">
                <div className="mb-4 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  <service.icon className="relative w-12 h-12 text-cyan-400 group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
