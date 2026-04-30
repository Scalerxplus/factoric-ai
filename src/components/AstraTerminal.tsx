"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const logs = [
  { label: "[LOG]", content: "High-Intent Inquiry Detected (USD 50K Potential).", color: "text-white/40" },
  { label: "[ANALYSIS]", content: "Extracting BANT... Success. Intent: Mission Critical.", color: "text-astra-green font-bold" },
  { label: "[ACTION]", content: "Revenue Pipeline Updated. Commander Notified.", color: "text-white/80" },
  { label: "[SYSTEM]", content: "Global Node Synchronization Complete. v4.2.0 active.", color: "text-white/20" },
  { label: "[Astra]", content: "Analyzing capital leakage in North American infrastructure...", color: "text-astra-green/60 italic" },
  { label: "[BOS Z]", content: "Kinetic Sentinel active. Zero latency anomalies detected.", color: "text-astra-gold font-bold" },
];

export const AstraTerminal = () => {
  const [visibleLogs, setVisibleLogs] = useState<typeof logs>([]);
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % logs.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setVisibleLogs((prev) => {
      const next = [...prev, logs[index]];
      if (next.length > 5) return next.slice(1);
      return next;
    });
  }, [index]);

  return (
    <div className="w-full max-w-3xl mx-auto px-6">
      <div className="glass-card rounded-sm p-4 md:p-8 font-mono text-[10px] md:text-xs overflow-hidden relative min-h-[350px] md:min-h-[300px]">
        <div className="absolute top-4 left-4 flex gap-1.5 md:gap-2 mb-8">
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-red-500/50" />
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-astra-gold/50" />
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-astra-green/50" />
        </div>
        
        <div className="absolute top-4 right-4 text-[8px] font-black tracking-widest text-white/10 uppercase">
          Live Mission Log
        </div>

        <div className="mt-8 space-y-4" ref={containerRef}>
          <AnimatePresence mode="popLayout">
            {visibleLogs.map((log, i) => (
              <motion.div
                key={`${log.label}-${i}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex gap-4 items-start"
              >
                <span className="text-[8px] md:text-[10px] font-black uppercase tracking-tighter text-astra-green shrink-0 min-w-[60px] md:min-w-[80px]">
                  {log.label}
                </span>
                <span className={`${log.color} leading-relaxed text-[10px] md:text-xs`}>{log.content}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="absolute bottom-4 left-8 right-8 flex items-center gap-4">
          <div className="h-[1px] flex-grow bg-white/5" />
          <div className="text-[8px] font-black uppercase tracking-[0.5em] text-astra-green animate-pulse">
            Astra Intelligence Active
          </div>
          <div className="h-[1px] flex-grow bg-white/5" />
        </div>
      </div>
      <p className="text-center mt-8 text-sm text-white/20 italic font-medium">
        While you sleep, Astra executes.
      </p>
    </div>
  );
};
