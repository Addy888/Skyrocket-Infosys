import { motion } from "motion/react";
import { useEffect, useState } from "react";
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

export function FloatingObjects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {icons.map((Icon, i) => {
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        const randomDelay = Math.random() * 5;
        const randomDuration = 15 + Math.random() * 10;

        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${randomX}%`,
              top: `${randomY}%`,
            }}
            animate={{
              x: [0, mousePosition.x * 50 - 25, 0],
              y: [0, -50, mousePosition.y * 50 - 25, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: randomDuration,
              repeat: Infinity,
              delay: randomDelay,
              ease: "linear",
            }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <Icon className="relative w-8 h-8 text-cyan-400/30 group-hover:text-cyan-400 transition-colors" />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
