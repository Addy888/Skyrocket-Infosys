import { useEffect, useState, memo } from "react";
import { motion } from "motion/react";

export const CursorGlow = memo(() => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Don't render on mobile/touch devices
    if ('ontouchstart' in window) {
      return;
    }

    setIsVisible(true);
    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (rafId) return;
      
      rafId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
        rafId = 0;
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-50 mix-blend-screen will-change-transform"
      style={{
        left: mousePosition.x - 50,
        top: mousePosition.y - 50,
      }}
      aria-hidden="true"
    >
      <div className="w-[80px] h-[80px] bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-2xl"></div>
    </motion.div>
  );
});

CursorGlow.displayName = "CursorGlow";
