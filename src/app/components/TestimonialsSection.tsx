import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechVision Inc",
    image: "https://i.pravatar.cc/150?img=1",
    text: "SkyRocket transformed our business with their AI solutions. The team's expertise and dedication are unmatched.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "CEO, DataFlow Systems",
    image: "https://i.pravatar.cc/150?img=2",
    text: "Outstanding AI development! They delivered a complex automation system that exceeded all expectations.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager, InnovateLabs",
    image: "https://i.pravatar.cc/150?img=3",
    text: "The most professional AI team I've worked with. Their technical skills and communication are exceptional.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Founder, AI Ventures",
    image: "https://i.pravatar.cc/150?img=4",
    text: "SkyRocket's innovative approach to AI development helped us gain a competitive edge in the market.",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    role: "Director, CloudTech",
    image: "https://i.pravatar.cc/150?img=5",
    text: "Incredible work on our SaaS platform. The AI features they built are game-changing for our users.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative py-32 px-6 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-black to-purple-900/10"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Client Testimonials
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Trusted by industry leaders worldwide
          </p>
        </motion.div>

        {/* Scrolling Testimonials */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory">
            {[...testimonials, ...testimonials].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % testimonials.length) * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative flex-shrink-0 w-[350px] snap-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-transparent rounded-2xl blur-xl"></div>

                <div className="relative h-full bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                  <Quote className="w-10 h-10 text-cyan-400/30 mb-6" />

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 overflow-hidden">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
