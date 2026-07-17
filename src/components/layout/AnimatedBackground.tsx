"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Dot Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.08] dark:opacity-[0.10] text-foreground"
        style={{
          backgroundImage: "radial-gradient(circle, currentColor 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
        }}
      />
      
      {/* Thin Geometric Outline - Rotated Square */}
      <motion.div
        animate={{ 
          y: ["0%", "5%", "0%"], 
          rotate: [0, 90, 180, 360],
          x: ["0%", "-5%", "0%"]
        }}
        transition={{ duration: 45, ease: "linear", repeat: Infinity }}
        className="absolute top-[5%] -left-[5%] md:left-[2%] w-[25vw] h-[25vw] max-w-[400px] max-h-[400px] border-[1.5px] border-primary/20 rounded-3xl"
      />
      
      {/* Thin Geometric Outline - Large Circle */}
      <motion.div
        animate={{ 
          x: ["0%", "5%", "0%"], 
          y: ["0%", "5%", "0%"],
          scale: [1, 1.05, 1]
        }}
        transition={{ duration: 35, ease: "easeInOut", repeat: Infinity }}
        className="absolute bottom-[5%] -right-[5%] md:right-[2%] w-[35vw] h-[35vw] max-w-[600px] max-h-[600px] border-[1.5px] border-accent-secondary/20 rounded-full"
      />
      
      {/* Thin Geometric Outline - Triangle */}
      <motion.svg
        viewBox="0 0 100 100"
        animate={{ 
          rotate: [0, -180, -360],
          y: ["0%", "-5%", "0%"],
          x: ["0%", "5%", "0%"]
        }}
        transition={{ duration: 55, ease: "linear", repeat: Infinity }}
        className="absolute top-[25%] -right-[2%] md:right-[5%] w-[20vw] h-[20vw] max-w-[300px] max-h-[300px] text-accent-tertiary/20 overflow-visible"
        style={{ strokeWidth: "0.5px", fill: "none", stroke: "currentColor", strokeLinejoin: "round" }}
      >
        <polygon points="50,15 90,85 10,85" />
      </motion.svg>
    </div>
  );
}
