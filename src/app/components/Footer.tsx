import { motion } from "motion/react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 bg-black border-t border-cyan-500/20">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
              SkyRocket Infosys
            </h3>
            <p className="text-gray-400 text-sm">
              © {currentYear} SkyRocket Infosys — Shaping The AI Powered Digital Future
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {[
              { icon: Github, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Twitter, href: "#" },
              { icon: Mail, href: "mailto:adityashastri76@gmail.com" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-white/5 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 border border-white/10 hover:border-cyan-500/50 rounded-lg transition-all group"
              >
                <social.icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Links */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Cookie Policy</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Careers</a>
        </div>
      </div>
    </footer>
  );
}
