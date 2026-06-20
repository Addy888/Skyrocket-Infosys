import { motion } from "motion/react";
import { Mail, MapPin, Send, Calendar } from "lucide-react";
import { memo, useCallback, FormEvent } from "react";

export const ContactSection = memo(() => {
  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic here
    console.log("Form submitted");
  }, []);

  return (
    <section id="contact" className="relative py-32 px-6 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 via-black to-black" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-500/20 rounded-full blur-[150px]" aria-hidden="true"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Let's Build The Future
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to transform your business with AI? Get in touch with us today.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl" aria-hidden="true"></div>
              <div className="relative bg-black/60 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-cyan-500/10 rounded-lg" aria-hidden="true">
                      <MapPin className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Location</div>
                      <div className="text-white font-medium">Pune, India</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-500/10 rounded-lg" aria-hidden="true">
                      <Mail className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Email</div>
                      <a 
                        href="mailto:adityashastri76@gmail.com" 
                        className="text-white font-medium hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded"
                      >
                        adityashastri76@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <div className="text-sm text-gray-400 mb-2">Founder</div>
                  <div className="text-xl font-bold text-white">Aditya Kumar Shastri</div>
                  <div className="text-cyan-400 mt-1">AI Innovation Leader</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-semibold text-white flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                aria-label="Start your AI project"
              >
                <Send className="w-5 h-5" aria-hidden="true" />
                Start AI Project
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 border-2 border-cyan-500/50 rounded-xl font-semibold text-cyan-400 hover:bg-cyan-500/10 transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                aria-label="Schedule a meeting with us"
              >
                <Calendar className="w-5 h-5" aria-hidden="true" />
                Schedule Meeting
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 border-2 border-purple-500/50 rounded-xl font-semibold text-purple-400 hover:bg-purple-500/10 transition-all focus:outline-none focus:ring-2 focus:ring-purple-400"
                aria-label="Explore future technology solutions"
              >
                Explore Future Tech
              </motion.button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl" aria-hidden="true"></div>
            <div className="relative bg-black/60 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-gray-400 mb-2">
                    Name *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors"
                    placeholder="Your name"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-gray-400 mb-2">
                    Email *
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors"
                    placeholder="your@email.com"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label htmlFor="contact-project-type" className="block text-sm font-medium text-gray-400 mb-2">
                    Project Type *
                  </label>
                  <select 
                    id="contact-project-type"
                    name="projectType"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors"
                    aria-required="true"
                  >
                    <option value="">Select a service</option>
                    <option value="ai">AI Development</option>
                    <option value="automation">Automation</option>
                    <option value="saas">SaaS Platform</option>
                    <option value="fullstack">Full Stack Development</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-gray-400 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                    aria-required="true"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-lg font-semibold text-white flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  aria-label="Send your message"
                >
                  <Send className="w-5 h-5" aria-hidden="true" />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

ContactSection.displayName = "ContactSection";
