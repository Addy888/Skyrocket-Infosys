import { motion } from "motion/react";
import { Award, Rocket, Target, Users } from "lucide-react";

const stats = [
  { label: "AI Projects", value: "500+", icon: Rocket },
  { label: "Happy Clients", value: "200+", icon: Users },
  { label: "Success Rate", value: "99%", icon: Target },
  { label: "Industry Awards", value: "15+", icon: Award },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-6 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-black to-cyan-900/10"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[150px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About SkyRocket
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Founded by <span className="text-cyan-400 font-semibold">Aditya Kumar Shastri</span>, SkyRocket Infosys develops futuristic AI ecosystems, intelligent automation systems, advanced SaaS platforms, immersive digital experiences, and next-generation technology solutions.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-black/40 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8 text-center">
                <stat.icon className="w-10 h-10 mx-auto mb-4 text-cyan-400" />
                <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Our Vision",
              description: "To empower businesses worldwide with cutting-edge AI solutions that transform industries and create unprecedented value.",
              gradient: "from-cyan-500/20 to-blue-500/20",
            },
            {
              title: "Our Mission",
              description: "Deliver world-class AI systems, automation platforms, and digital products that push the boundaries of what's possible.",
              gradient: "from-purple-500/20 to-pink-500/20",
            },
            {
              title: "Our Values",
              description: "Innovation, Excellence, Security, and Client Success drive everything we do in the AI revolution.",
              gradient: "from-cyan-500/20 to-purple-500/20",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} rounded-2xl blur-xl group-hover:blur-2xl transition-all`}></div>
              <div className="relative bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
                <p className="text-gray-400 leading-relaxed">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
