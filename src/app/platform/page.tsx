"use client";

import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import { Shield, Cpu, Zap, Database, Lock, Server } from "lucide-react";
import Link from "next/link";

export default function PlatformPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#F2F0E9] font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-24 px-6 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-astra-green/5 blur-[120px] pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-4xl mx-auto space-y-8"
        >
          <div className="text-astra-green text-[10px] font-black uppercase tracking-[0.6em]">System Architecture</div>
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-tight">
            The Operating System Behind Every Business Interaction.
          </h1>
          <p className="text-xl text-white/40 font-medium leading-relaxed max-w-3xl mx-auto">
            We connect the front office to the back office. Factoric AI replaces your fragmented software stack with a single, intelligent layer that executes labor instead of just recording data.
          </p>
        </motion.div>
      </section>

      {/* Flow Strip */}
      <section className="py-12 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto">
          <div className="flex items-center justify-between min-w-[800px] gap-4">
            {[
              "Inquiry", "Qualification", "Booking", "Visit/Check-In", "Payment", "Monitoring"
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full border border-astra-green/20 flex items-center justify-center text-[10px] font-black text-astra-green">
                    0{i+1}
                  </div>
                  <div className="mt-4 text-[10px] font-black uppercase tracking-widest text-white/60">{step}</div>
                </div>
                {i < 5 && <div className="h-[1px] w-12 bg-white/10" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Infrastructure */}
      <section className="section-spacing">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Database,
                title: "Sovereign Data Control",
                desc: "Built on isolated Astra DB instances. Your data is not shared; it is sovereign.",
                tag: "ISO 27001 Ready"
              },
              {
                icon: Lock,
                title: "AES-4096 Encryption",
                desc: "Military-grade protection for patient, client, and enterprise data at rest and in transit.",
                tag: "Institutional Grade"
              },
              {
                icon: Server,
                title: "Dual-Engine Failover",
                desc: "100% uptime guaranteed by redundant AI cognitive routing across global node clusters.",
                tag: "Mission Critical"
              }
            ].map((item, i) => (
              <div key={i} className="p-12 glass-card border border-white/5 rounded-sm hover:bg-white/[0.02] transition-all">
                <item.icon className="w-8 h-8 text-astra-green mb-8" />
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed font-medium mb-8">
                  {item.desc}
                </p>
                <div className="text-[8px] font-black uppercase tracking-widest text-white/20">{item.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 border-t border-white/5 bg-astra-green/[0.01]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <h2 className="text-4xl font-medium tracking-tight">Ready to Unify Your Stack?</h2>
          <div className="flex justify-center gap-8">
            <Link 
              href="/onboarding"
              className="px-12 py-5 bg-astra-green text-white font-black text-[10px] uppercase tracking-[0.4em] rounded-sm green-glow"
            >
              Start Deployment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
