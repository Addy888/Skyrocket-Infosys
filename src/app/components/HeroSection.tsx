import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useRef, memo, useMemo } from "react";
import gsap from "gsap";

export const HeroSection = memo(() => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-text",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out" }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Reduce number of animated particles
  const particles = useMemo(() => 
    Array.from({ length: 15 }, (_, i) => ({ // Reduced from 30
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 2,
    })),
    []
  );

  return (
    <section 
      ref={heroRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      id="home"
      aria-label="Hero section"
    >
      {/* Animated Sphere Background - Optimized */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30" aria-hidden="true">
        <motion.div
          className="w-[500px] h-[500px] md:w-[600px] md:h-[600px] rounded-full will-change-transform"
          style={{
            background: "radial-gradient(circle, rgba(6,182,212,0.3) 0%, rgba(168,85,247,0.2) 50%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.15, 1],
            rotate: 360,
          }}
          transition={{
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          }}
        >
          <motion.div
            className="w-full h-full rounded-full border border-cyan-500/20"
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </div>

      {/* Holographic Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ffff05_1px,transparent_1px),linear-gradient(to_bottom,#00ffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" aria-hidden="true"></div>

      {/* Optimized Particles */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full will-change-transform"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.1, 0.7, 0.1],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          className="hero-text mb-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Sparkles className="w-4 h-4 text-cyan-400" aria-hidden="true" />
          <span className="text-cyan-400 text-sm font-medium">Next-Gen AI Innovation</span>
        </motion.div>

        <h1 className="hero-text text-5xl sm:text-6xl md:text-8xl font-black mb-8 leading-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-[gradient_3s_ease_infinite] bg-[length:200%_auto]">
            SkyRocket Infosys
          </span>
        </h1>

        <h2 className="hero-text text-2xl sm:text-3xl md:text-5xl font-bold mb-6 text-white/90">
          Powering The Future With AI Innovation
        </h2>

        <p className="hero-text text-base sm:text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          We build next-generation AI systems, intelligent automation platforms, futuristic digital products, and immersive technology experiences.
        </p>

        <div className="hero-text flex flex-col sm:flex-row gap-6 justify-center items-center">
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold text-white overflow-hidden focus:outline-none focus:ring-2 focus:ring-cyan-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Launch your AI project"
          >
            <span className="relative z-10 flex items-center gap-2">
              Launch Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.button
            className="px-8 py-4 border-2 border-cyan-500/50 rounded-full font-semibold text-cyan-400 hover:bg-cyan-500/10 transition-all backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
            whileHover={{ scale: 1.05, borderColor: "rgba(6, 182, 212, 0.8)" }}
            whileTap={{ scale: 0.95 }}
            aria-label="Explore our innovations"
          >
            Explore Innovations
          </motion.button>
        </div>
      </div>

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-cyan-500/15 rounded-full blur-[120px] animate-pulse" aria-hidden="true"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-500/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} aria-hidden="true"></div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";
