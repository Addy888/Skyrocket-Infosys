import { motion } from "motion/react";
import { ExternalLink, Sparkles, TrendingUp } from "lucide-react";

export function SpecialProjects() {
  return (
    <section className="relative py-32 px-6 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/30 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/30">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-medium">Flagship Projects</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Premium Showcases
            </span>
          </h2>
        </motion.div>

        {/* RevvTik AI */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/30 via-purple-500/30 to-transparent rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>

            <div className="relative h-full bg-black/60 backdrop-blur-xl border border-pink-500/30 rounded-3xl p-10 group-hover:border-pink-500/60 transition-all">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white text-sm font-bold mb-4">
                    Social AI Platform
                  </span>
                  <h3 className="text-4xl font-black text-white mb-3">RevvTik AI</h3>
                  <p className="text-pink-400 font-semibold mb-4">Creator Economy Revolution</p>
                </div>
                <button className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors">
                  <ExternalLink className="w-6 h-6 text-pink-400" />
                </button>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                AI-powered creator dashboard with advanced social analytics, content optimization, revenue forecasting, and automated engagement tools. Built for the next generation of digital creators.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-pink-500/10 border border-pink-500/30 rounded-xl p-4">
                  <div className="text-3xl font-black text-pink-400 mb-1">10M+</div>
                  <div className="text-sm text-gray-400">Creators Analyzed</div>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
                  <div className="text-3xl font-black text-purple-400 mb-1">98%</div>
                  <div className="text-sm text-gray-400">Growth Rate</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {["AI Analytics", "Creator Tools", "Real-time Data", "Revenue Optimization"].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-pink-500/10 border border-pink-500/30 rounded-full text-pink-400 text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Horssa Marketplace */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/30 via-orange-500/30 to-transparent rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>

            <div className="relative h-full bg-black/60 backdrop-blur-xl border border-amber-500/30 rounded-3xl p-10 group-hover:border-amber-500/60 transition-all">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full text-white text-sm font-bold mb-4">
                    Premium E-Commerce
                  </span>
                  <h3 className="text-4xl font-black text-white mb-3">Horssa</h3>
                  <p className="text-amber-400 font-semibold mb-4">Luxury Horse Marketplace</p>
                </div>
                <button className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors">
                  <ExternalLink className="w-6 h-6 text-amber-400" />
                </button>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                Ultra-premium marketplace for luxury horses with AI-powered analytics, bloodline verification, health tracking, and investment insights. Glassmorphic design meets cutting-edge AI.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
                  <div className="text-3xl font-black text-amber-400 mb-1">$50M+</div>
                  <div className="text-sm text-gray-400">Platform Value</div>
                </div>
                <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4">
                  <div className="text-3xl font-black text-orange-400 mb-1 flex items-center gap-1">
                    <TrendingUp className="w-6 h-6" />
                    150%
                  </div>
                  <div className="text-sm text-gray-400">YoY Growth</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Premium UX", "AI Analytics", "Blockchain Verified", "Investment Tools"].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
