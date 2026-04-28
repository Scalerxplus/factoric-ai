"use client";

import { motion } from "framer-motion";
import { Shield, Lock, FileText, Globe, Server, CheckCircle2 } from "lucide-react";

const protocols = [
  {
    title: "HIPAA Protocol",
    desc: "Full adherence to Health Insurance Portability and Accountability Act standards for medical data sovereignty.",
    icon: Shield,
    status: "Active Shield"
  },
  {
    title: "DPDPA Adherence",
    desc: "Rigorous alignment with India's Digital Personal Data Protection Act for domestic data integrity.",
    icon: FileText,
    status: "Certified Logic"
  },
  {
    title: "AES-4096 Encryption",
    desc: "Military-grade data masking at rest and in transit across all architectural nodes.",
    icon: Lock,
    status: "Full Encryption"
  },
  {
    title: "Sovereign Hosting",
    desc: "Isolated infrastructure on dedicated instances powered by IBM's Astra DB (Neural Memory).",
    icon: Server,
    status: "Total Ownership"
  }
];

export const SecurityArchitecture = () => {
  return (
    <section className="section-spacing bg-white/[0.01] border-y border-white/5 relative overflow-hidden">
      {/* Background Pulse */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <div className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.5em] mb-8">Security Layer 0</div>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8">The Security Architecture.</h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto leading-relaxed font-medium">
            Protected by AES-4096 encryption. Our architecture utilizes a Dual-Engine Failover Protocol (Gemini + Groq) to ensure 100% operational uptime for your hospital or business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {protocols.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-10 glass-card rounded-sm border border-white/5 hover:border-emerald-500/20 transition-all group"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="p-4 bg-emerald-500/10 rounded-full">
                  <p.icon className="w-6 h-6 text-emerald-500" />
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/5 border border-emerald-500/10 rounded-full">
                  <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[7px] font-black uppercase tracking-widest text-emerald-500/60">{p.status}</span>
                </div>
              </div>
              <h3 className="text-xl font-medium mb-4 group-hover:text-emerald-400 transition-colors">{p.title}</h3>
              <p className="text-sm text-white/30 leading-relaxed font-medium mb-8">
                {p.desc}
              </p>
              <div className="flex items-center gap-2 text-[8px] font-black uppercase tracking-widest text-emerald-500/40">
                <CheckCircle2 className="w-3 h-3" /> Fully Operational Tier
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 p-8 glass-card rounded-sm border border-emerald-500/20 text-center relative overflow-hidden">
          <div className="absolute inset-0 data-pulse opacity-5" />
          <div className="relative z-10">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-500">Compliance Audit Active</span>
            <div className="flex flex-wrap justify-center items-center gap-8 mt-8 mb-8 grayscale opacity-50">
              <div className="px-4 py-2 border border-white/10 rounded-sm text-[10px] font-black uppercase tracking-widest">DPDPA INDIA</div>
              <div className="px-4 py-2 border border-white/10 rounded-sm text-[10px] font-black uppercase tracking-widest">HIPAA US</div>
              <div className="px-4 py-2 border border-white/10 rounded-sm text-[10px] font-black uppercase tracking-widest">AES-4096</div>
            </div>
            <p className="text-sm text-white/60 font-medium">
              Global Compliance, Sovereign Control. Factoric AI architectures are designed for SOC2 Type II readiness and ISO 27001 alignment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
