import { motion } from "motion/react";
import { useEffect, useState, memo, useMemo } from "react";
import {
  Brain,
  Cpu,
  Database,
  Cloud,
  Shield,
  Terminal,
  GitBranch,
  Lock,
  Zap,
  Network,
  Workflow
} from "lucide-react";

const icons = [Brain, Cpu, Database, Cloud, Shield, Terminal, GitBranch, Lock, Zap, Network, Workflow];

export const FloatingObjects = memo(() => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let rafId: number;
    let lastX = 0;
    let lastY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      // Throttle mouse tracking with RAF
      if (rafId) return;
      
      rafId = requestAnimationFrame(() => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        // Only update if movement is significant
        if (Math.abs(x - lastX) > 0.01 || Math.abs(y - lastY) > 0.01) {
          setMousePosition({ x, y });
          lastX = x;
          lastY = y;
        }
        rafId = 0;
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // Memoize icon positions to prevent recalculation
  const iconPositions = useMemo(() => 
    icons.map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 15 + Math.random() * 10,
    })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {icons.map((Icon, i) => {
        const pos = iconPositions[i];
        
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
            }}
            animate={{
              x: [0, mousePosition.x * 40 - 20, 0],
              y: [0, -40, mousePosition.y * 40 - 20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: pos.duration,
              repeat: Infinity,
              delay: pos.delay,
              ease: "linear",
            }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 blur-xl opacity-30 group-hover:opacity-70 transition-opacity will-change-auto"></div>
              <Icon className="relative w-6 h-6 md:w-8 md:h-8 text-cyan-400/20 group-hover:text-cyan-400/60 transition-colors" aria-hidden="true" />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
});

FloatingObjects.displayName = "FloatingObjects";
