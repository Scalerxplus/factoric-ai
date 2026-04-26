"use client";

import { motion } from "framer-motion";
import { ArrowRight, AlertCircle, CheckCircle2 } from "lucide-react";

export const ValueGap = () => {
  return (
    <section className="section-spacing bg-white/[0.01]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-24">
          <div className="text-astra-purple text-[10px] font-black uppercase tracking-[0.5em] mb-8">Structural Efficiency</div>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8">The Value Gap.</h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto leading-relaxed font-medium">
            Bridging the gap between intent and outcome through autonomous execution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-10">
            <ArrowRight className="w-12 h-12 text-white" />
          </div>

          {/* Old Way */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 glass-card rounded-sm border-l-4 border-l-red-500/50 relative z-10"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-red-500/10 rounded-full">
                <AlertCircle className="w-6 h-6 text-red-500" />
              </div>
              <div className="text-sm font-black uppercase tracking-widest text-red-500/60">Legacy Protocol</div>
            </div>
            <div className="space-y-6 text-xl font-medium">
              <div className="text-white/40">Manual Entry</div>
              <ArrowRight className="w-4 h-4 text-white/10" />
              <div className="text-white/40">Delayed Response</div>
              <ArrowRight className="w-4 h-4 text-white/10" />
              <div className="text-red-500">Lost Lead.</div>
            </div>
          </motion.div>

          {/* Factoric Way */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 glass-card rounded-sm border-l-4 border-l-astra-purple relative z-10 purple-glow"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-astra-purple/10 rounded-full">
                <CheckCircle2 className="w-6 h-6 text-astra-purple" />
              </div>
              <div className="text-sm font-black uppercase tracking-widest text-astra-purple">Factoric Protocol</div>
            </div>
            <div className="space-y-6 text-xl font-medium">
              <div className="text-white/80">Instant Intent</div>
              <ArrowRight className="w-4 h-4 text-astra-purple/30" />
              <div className="text-white/80">Autonomous Closure</div>
              <ArrowRight className="w-4 h-4 text-astra-purple/30" />
              <div className="text-astra-purple">Revenue.</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
