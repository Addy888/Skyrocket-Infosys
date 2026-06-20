import { motion } from "motion/react";
import { memo, useMemo } from "react";

export const ParticleField = memo(() => {
  // Reduce particle count for better performance
  const particles = useMemo(() => 
    Array.from({ length: 50 }, (_, i) => ({ // Reduced from 100
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1, // Slightly smaller
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-cyan-400/30 will-change-transform"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -80, 0], // Reduced movement range
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [0.1, 0.6, 0.1], // Reduced opacity
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
});

ParticleField.displayName = "ParticleField";
