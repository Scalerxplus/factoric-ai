"use client";

import { motion } from "framer-motion";

export const NeuralLogo = ({ className = "w-24 h-24" }: { className?: string }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Increased Matte Radiance Background */}
      <div className="absolute inset-0 bg-[#D14343]/10 blur-2xl rounded-full" />
      
      <motion.svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10"
        initial="hidden"
        animate="visible"
      >
        {/* Continuous Spinning Perimeter - Factoric Red */}
        <motion.circle
          cx="50"
          cy="50"
          r="42"
          stroke="#D14343"
          strokeWidth="3"
          strokeDasharray="4 6"
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ 
            opacity: 0.6,
            rotate: 360 
          }}
          transition={{ 
            opacity: { duration: 2 },
            rotate: { duration: 30, repeat: Infinity, ease: "linear" }
          }}
        />

        {/* Thick Structural Connections - Soft Parchment */}
        <motion.path
          d="M50 50 L50 20 M50 50 L20 65 M50 50 L80 65"
          stroke="#F2F0E9"
          strokeWidth="3.5"
          strokeLinecap="round"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: { pathLength: 1, opacity: 0.8 },
          }}
          transition={{ duration: 3 }}
        />

        {/* Large Central Node - Factoric Red */}
        <motion.circle
          cx="50"
          cy="50"
          r="8"
          fill="#D14343"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "backOut" }}
        />
      </motion.svg>
    </div>
  );
};
