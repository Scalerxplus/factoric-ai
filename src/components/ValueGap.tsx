"use client";

import { motion } from "framer-motion";
import { ArrowRight, AlertCircle, CheckCircle2, Zap, Clock, Users, Cpu, TrendingUp } from "lucide-react";

export const ValueGap = () => {
  return (
    <section className="section-spacing relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-astra-green/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-32">
          <div className="text-astra-green text-[10px] font-black uppercase tracking-[0.6em] mb-8">Structural Sovereignty</div>
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 silver-gradient">The Value Gap.</h2>
          <p className="text-lg text-white/30 max-w-2xl mx-auto leading-relaxed font-medium">
            Bridging the chasm between legacy manual friction and <br className="hidden md:block" /> 
            autonomous capital efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 relative">
          {/* Central Divider / Flow */}
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 items-center justify-center">
            <div className="w-[1px] h-64 bg-gradient-to-b from-transparent via-white/5 to-transparent relative">
              <motion.div 
                animate={{ top: ["0%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute left-1/2 -translate-x-1/2 w-1 h-8 bg-astra-green/20 blur-sm"
              />
            </div>
          </div>

          {/* 1. Legacy Protocol (The Decay) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-red-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="p-6 md:p-16 glass-card rounded-sm border-l-2 border-l-red-500/30 relative z-10 min-h-[400px] md:min-h-[500px] flex flex-col">
              <div className="flex items-center justify-between mb-16">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-red-500/10 rounded-full border border-red-500/20">
                    <AlertCircle className="w-6 h-6 text-red-500" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-[10px] font-black uppercase tracking-widest text-red-500">Legacy Protocol</div>
                    <div className="text-[8px] font-bold text-white/20 uppercase tracking-widest">Manual Infrastructure</div>
                  </div>
                </div>
                <div className="text-[10px] font-mono text-red-500/40">v1.0.Decay</div>
              </div>

              <div className="space-y-12 flex-grow">
                {[
                  { t: "Manual Entry", d: "Human-dependent data logging and synchronization.", i: Users },
                  { t: "Delayed Response", d: "High-latency engagement cycles (>4 hours).", i: Clock },
                  { t: "Revenue Leakage", d: "Non-qualified intent resulting in lost capital.", i: AlertCircle }
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-6 relative group/node">
                    <div className="w-8 h-8 rounded-full border border-white/5 bg-white/[0.02] flex items-center justify-center shrink-0">
                      <step.i className="w-3.5 h-3.5 text-white/20" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-lg md:text-xl font-bold text-white/40 group-last:text-red-500 transition-colors">{step.t}</div>
                      <p className="text-[9px] md:text-[10px] text-white/10 font-medium leading-relaxed">{step.d}</p>
                    </div>
                    {idx < 2 && (
                      <div className="absolute left-4 top-10 w-[1px] h-8 bg-white/5" />
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-16 pt-8 border-t border-white/5 flex items-center justify-between">
                <div className="text-[8px] font-black uppercase tracking-widest text-white/20">Operational Outcome</div>
                <div className="px-4 py-1 bg-red-500/10 border border-red-500/20 text-red-500 text-[8px] font-black uppercase tracking-widest">
                  Terminal Decay
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. Factoric Protocol (The Sovereignty) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-astra-green/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="p-6 md:p-16 glass-card rounded-sm border-l-2 border-l-astra-green/50 relative z-10 min-h-[400px] md:min-h-[500px] flex flex-col green-glow">
              <div className="flex items-center justify-between mb-16">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-astra-green/10 rounded-full border border-astra-green/20">
                    <CheckCircle2 className="w-6 h-6 text-astra-green" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-[10px] font-black uppercase tracking-widest text-astra-green">Factoric Protocol</div>
                    <div className="text-[8px] font-bold text-white/20 uppercase tracking-widest">Autonomous Infrastructure</div>
                  </div>
                </div>
                <div className="text-[10px] font-mono text-astra-green/40">Astra-Active</div>
              </div>

              <div className="space-y-12 flex-grow">
                {[
                  { t: "Instant Intent", d: "Zero-latency neural capture of digital and physical intent.", i: Zap },
                  { t: "Autonomous Closure", d: "Astra-driven execution from discovery to capital flow.", i: Cpu },
                  { t: "Capital Efficiency", d: "100% attribution and verified institutional growth.", i: TrendingUp }
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-6 relative group/node">
                    <div className="w-8 h-8 rounded-full border border-astra-green/20 bg-astra-green/5 flex items-center justify-center shrink-0">
                      <step.i className="w-3.5 h-3.5 text-astra-green" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-lg md:text-xl font-bold text-white/80 group-last:text-astra-green transition-colors">{step.t}</div>
                      <p className="text-[9px] md:text-[10px] text-white/30 font-medium leading-relaxed">{step.d}</p>
                    </div>
                    {idx < 2 && (
                      <div className="absolute left-4 top-10 w-[1px] h-8 bg-astra-green/20" />
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-16 pt-8 border-t border-white/5 flex items-center justify-between">
                <div className="text-[8px] font-black uppercase tracking-widest text-white/20">Structural Outcome</div>
                <div className="px-4 py-1 bg-astra-green/10 border border-astra-green/20 text-astra-green text-[8px] font-black uppercase tracking-widest animate-pulse">
                  Autonomous Empire
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
