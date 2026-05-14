import { motion } from "motion/react";
import { Zap, Rocket, Shield, Sparkles, TrendingUp, Award } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI Innovation",
    description: "Cutting-edge AI solutions using the latest models and frameworks",
    stat: "500+ AI Models Deployed",
  },
  {
    icon: Zap,
    title: "Fast Development",
    description: "Rapid prototyping and deployment with agile methodologies",
    stat: "50% Faster Delivery",
  },
  {
    icon: TrendingUp,
    title: "Scalability",
    description: "Enterprise-grade infrastructure that grows with your business",
    stat: "99.9% Uptime SLA",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with SOC2 compliance and encryption",
    stat: "Zero Security Breaches",
  },
  {
    icon: Award,
    title: "Premium UX",
    description: "Award-winning user experiences and interface designs",
    stat: "4.9/5 User Rating",
  },
  {
    icon: Rocket,
    title: "Future Ready",
    description: "Built for tomorrow with emerging tech and AI capabilities",
    stat: "Next-Gen Architecture",
  },
];

export function WhyChooseSection() {
  return (
    <section className="relative py-32 px-6 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Why Choose Us
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Industry-leading AI solutions backed by proven expertise and results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100"></div>

              <div className="relative h-full bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-xl border border-cyan-500/20 group-hover:border-cyan-500/50 rounded-2xl p-8 transition-all">
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center border border-cyan-500/30">
                    <feature.icon className="w-8 h-8 text-cyan-400 group-hover:text-white transition-colors" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                <div className="pt-6 border-t border-white/10">
                  <div className="text-cyan-400 font-bold text-lg">{feature.stat}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Counter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "500+", label: "AI Projects" },
            { value: "200+", label: "Happy Clients" },
            { value: "99%", label: "Success Rate" },
            { value: "24/7", label: "Support" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
