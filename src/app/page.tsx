"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { NeuralLogo } from "@/components/NeuralLogo";
import { ImpactCalculator } from "@/components/ImpactCalculator";
import { NationalAlignment } from "@/components/NationalAlignment";
import { ArrowRight, Plus } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-[#F2F0E9]">
      <Navbar />
      
      {/* Hero Section: Extreme Whitespace */}
      <section className="relative flex flex-col items-center justify-center pt-64 pb-48 px-6 text-center">
        <NeuralLogo className="w-24 h-24 mb-16" />
        <h1 className="text-4xl md:text-8xl font-medium tracking-tight mb-8 leading-[1.05]">
          Factoric AI
        </h1>
        <p className="text-lg md:text-2xl text-[#F2F0E9]/40 max-w-3xl mb-16 font-medium leading-relaxed">
          The autonomous operational layer for sovereign institutions. <br />
          Engineering the future of agentic labor and institutional logic.
        </p>
        <Link 
          href={`/chat?prompt=${encodeURIComponent("how Factoric AI's Agentic AI can help a business engaging leads, recording and analysing data, doing billing, reciving patients and also watching over your cctv feeds to inform you right before something critical happens.")}`} 
          className="px-12 py-5 bg-emerald-600 text-white hover:bg-emerald-500 shadow-xl shadow-emerald-900/20 rounded-sm font-black text-[10px] uppercase tracking-[0.4em] transition-all"
        >
          Experience Our AI Workforce
        </Link>
      </section>

      {/* Section: Factoric Workforce (The Wide Centerpiece) */}
      <section className="border-y border-[#1F1F1F] bg-[#F2F0E9]/[0.01]">
        <div className="max-w-6xl mx-auto px-6 py-48 text-center">
          <div className="text-accent-red text-[10px] font-black uppercase tracking-[0.4em] mb-12">The Engine</div>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-12">Factoric Workforce</h2>
          <p className="text-xl text-[#F2F0E9]/40 max-w-3xl mx-auto leading-relaxed font-medium mb-16">
            The autonomous agentic labor force. A neural network of task-specific agents that govern the logic of every BOS level. Workforce does not just process data—it executes intent.
          </p>
          <div className="grid md:grid-cols-3 gap-12 text-left">
            {[
              { t: "Cognitive Labor", d: "Agents that think and prioritize like your most elite operators.", p: "How does the autonomous agentic labor force optimize my existing workflows?" },
              { t: "Neural Memory", d: "Systems that learn institutional nuance and adapt to shifting growth vectors.", p: "Explain the implementation of Neural Memory in institutional scaling." },
              { t: "Zero Latency", d: "Autonomous execution of complex workflows 24/7 with zero human friction.", p: "Show me the latency reduction metrics for cross-border logistics." }
            ].map((feature, i) => (
              <Link 
                key={i} 
                href={`/chat?tier=WORKFORCE&prompt=${encodeURIComponent(feature.p)}`}
                className="p-10 glass-card rounded-xl hover:bg-white/[0.05] transition-all group relative overflow-hidden"
              >
                <div className="absolute inset-0 data-pulse opacity-20 group-hover:opacity-40 transition-opacity" />
                <Plus className="w-5 h-5 text-emerald-500 mb-6 group-hover:rotate-90 transition-transform relative z-10" />
                <div className="text-sm font-bold uppercase tracking-widest mb-4 relative z-10">{feature.t}</div>
                <p className="text-sm text-[#F2F0E9]/40 leading-relaxed font-medium mb-8 relative z-10">{feature.d}</p>
                <div className="text-[8px] uppercase font-black tracking-[0.3em] text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity relative z-10">Initialize Inquiry →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section: The Information Slabs (BOS M, X, Z) */}
      <section className="max-w-6xl mx-auto px-6 section-spacing">
        <div className="mb-32">
          <h2 className="title-understated">The Architecture</h2>
        </div>

        <div className="space-y-32">
          {/* BOS M */}
          <div className="grid md:grid-cols-2 gap-24 items-center relative overflow-hidden group">
            <div className="space-y-8 z-10">
              <div className="flex items-center gap-4">
                <div className="text-accent-red text-[10px] font-black uppercase tracking-[0.4em]">Precision Operations</div>
                <div className="text-[8px] font-bold text-[#F2F0E9]/10 tracking-[0.2em] border-l border-[#1F1F1F] pl-4">v4.1.0-M</div>
              </div>
              <h3 className="text-4xl font-medium">Factoric BOS M</h3>
              <p className="text-lg text-[#F2F0E9]/40 leading-relaxed font-medium">
                Engineered for Marketing & Lead Automation. BOS M captures every digital intent and maps it to a structural outcome.
              </p>
              <ul className="space-y-4 mb-12">
                <li className="flex items-center gap-4 text-sm font-medium text-[#F2F0E9]/60">
                  <Plus className="w-4 h-4 text-accent-red" /> Lead Management Automation
                </li>
                <li className="flex items-center gap-4 text-sm font-medium text-[#F2F0E9]/60">
                  <Plus className="w-4 h-4 text-accent-red" /> Social Media Intent Mapping
                </li>
                <li className="flex items-center gap-4 text-sm font-medium text-[#F2F0E9]/60">
                  <Plus className="w-4 h-4 text-accent-red" /> Instant Engagement Logic
                </li>
              </ul>
              <Link 
                href={`/chat?tier=M&prompt=${encodeURIComponent("Initialize lead management automation protocols for high-volume social media marketing.")}`}
                className="inline-flex items-center gap-4 px-8 py-4 bg-accent-red text-[10px] uppercase font-black tracking-[0.3em] hover:bg-accent-red/80 transition-all text-white"
              >
                Initialize M Logic <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="p-16 glass-card rounded-sm flex flex-col justify-center min-h-[400px] relative overflow-hidden emerald-glow">
              <div className="absolute inset-0 data-pulse opacity-10" />
              <div className="absolute top-8 right-8 text-[8px] font-black tracking-[0.5em] text-emerald-500/20 uppercase relative z-10">System Active</div>
              <div className="text-6xl font-light text-emerald-500/10 mb-8 tracking-tighter relative z-10">BOS M</div>
              <div className="flex gap-12 relative z-10">
                <div className="text-[8px] uppercase tracking-[0.3em] font-black text-emerald-500/20">Latency: 12ms</div>
                <div className="text-[8px] uppercase tracking-[0.3em] font-black text-emerald-500/20">Nodes: 124</div>
              </div>
            </div>
          </div>

          {/* BOS X */}
          <div className="grid md:grid-cols-2 gap-24 items-center relative overflow-hidden group">
            <div className="p-16 glass-card rounded-sm flex flex-col justify-center min-h-[400px] order-2 md:order-1 text-right items-end relative overflow-hidden emerald-glow">
              <div className="absolute inset-0 data-pulse opacity-10" />
              <div className="absolute top-8 left-8 text-[8px] font-black tracking-[0.5em] text-emerald-500/20 uppercase relative z-10">Revenue Integrity</div>
              <div className="text-6xl font-light text-emerald-500/20 mb-8 tracking-tighter relative z-10">BOS X</div>
              <div className="flex gap-12 relative z-10">
                <div className="text-[8px] uppercase tracking-[0.3em] font-black text-emerald-500/20">Attribution: 100%</div>
                <div className="text-[8px] uppercase tracking-[0.3em] font-black text-emerald-500/20">Security: Tier 2</div>
              </div>
            </div>
            <div className="space-y-8 order-1 md:order-2 z-10">
              <div className="flex items-center gap-4">
                <div className="text-accent-red text-[10px] font-black uppercase tracking-[0.4em]">Growth Acceleration</div>
                <div className="text-[8px] font-bold text-[#F2F0E9]/10 tracking-[0.2em] border-l border-[#1F1F1F] pl-4">v4.1.0-X</div>
              </div>
              <h3 className="text-4xl font-medium">Factoric BOS X</h3>
              <p className="text-lg text-[#F2F0E9]/40 leading-relaxed font-medium">
                Marketing + Revenue Acceleration. BOS X integrates capital integrity engines to identify and close revenue leakage.
              </p>
              <ul className="space-y-4 mb-12">
                <li className="flex items-center gap-4 text-sm font-medium text-[#F2F0E9]">
                  <Plus className="w-4 h-4 text-accent-red" /> Everything in BOS M
                </li>
                <li className="flex items-center gap-4 text-sm font-medium text-[#F2F0E9]/60">
                  <Plus className="w-4 h-4 text-accent-red" /> Automated Billing & Invoicing
                </li>
                <li className="flex items-center gap-4 text-sm font-medium text-[#F2F0E9]/60">
                  <Plus className="w-4 h-4 text-accent-red" /> 100% Capital Attribution
                </li>
              </ul>
              <Link 
                href={`/chat?tier=X&prompt=${encodeURIComponent("Activate revenue acceleration and identify potential capital leakage in my current billing cycle.")}`}
                className="inline-flex items-center gap-4 px-8 py-4 bg-accent-red text-[10px] uppercase font-black tracking-[0.3em] hover:bg-accent-red/80 transition-all text-white"
              >
                Initialize X Logic <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* BOS Z */}
          <div className="grid md:grid-cols-2 gap-24 items-center relative overflow-hidden group">
            <div className="space-y-8 z-10">
              <div className="flex items-center gap-4">
                <div className="text-accent-red text-[10px] font-black uppercase tracking-[0.4em]">Sovereign Control</div>
                <div className="text-[8px] font-bold text-[#F2F0E9]/10 tracking-[0.2em] border-l border-[#1F1F1F] pl-4">v4.1.0-Z</div>
              </div>
              <h3 className="text-4xl font-medium">Factoric BOS Z</h3>
              <p className="text-lg text-[#F2F0E9]/40 leading-relaxed font-medium">
                The Ultimate Engine. Integrated Marketing, Revenue, and Vision Security for enterprise-wide sovereign automation.
              </p>
              <ul className="space-y-4 mb-12">
                <li className="flex items-center gap-4 text-sm font-medium text-[#F2F0E9]">
                  <Plus className="w-4 h-4 text-accent-red" /> Everything in BOS X
                </li>
                <li className="flex items-center gap-4 text-sm font-medium text-[#F2F0E9]/60">
                  <Plus className="w-4 h-4 text-accent-red" /> Vision-Based Anomaly Detection
                </li>
                <li className="flex items-center gap-4 text-sm font-medium text-[#F2F0E9]/60">
                  <Plus className="w-4 h-4 text-accent-red" /> Isolated Sovereign Tiers
                </li>
              </ul>
              <Link 
                href={`/chat?tier=Z&prompt=${encodeURIComponent("Enable total sovereign vision security and integrated enterprise logic.")}`}
                className="inline-flex items-center gap-4 px-8 py-4 bg-accent-red text-[10px] uppercase font-black tracking-[0.3em] hover:bg-accent-red/80 transition-all text-white"
              >
                Initialize Z Logic <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="p-16 glass-card rounded-sm flex flex-col justify-center min-h-[400px] relative overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.1)]">
              <div className="absolute inset-0 data-pulse opacity-20" />
              <div className="absolute top-8 right-8 text-[8px] font-black tracking-[0.5em] text-emerald-500/30 uppercase relative z-10">Sovereign State</div>
              <div className="text-6xl font-light text-emerald-500/20 mb-8 tracking-tighter relative z-10">BOS Z</div>
              <div className="flex gap-12 relative z-10">
                <div className="text-[8px] uppercase tracking-[0.3em] font-black text-emerald-500/20">Compliance: 100%</div>
                <div className="text-[8px] uppercase tracking-[0.3em] font-black text-emerald-500/20">Encryption: AES-4096</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Data Section */}
      <ImpactCalculator />

      {/* Final Selection CTA */}
      <section className="max-w-4xl mx-auto px-6 py-64 text-center">
        <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-12">
          Initialize Your Architecture.
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <Link 
            href="/contact" 
            className="px-16 py-5 bg-emerald-600 text-white hover:bg-emerald-500 shadow-xl shadow-emerald-900/20 rounded-sm font-black text-[10px] uppercase tracking-[0.4em] transition-all"
          >
            Strategy Consult
          </Link>
          <Link 
            href="/login" 
            className="px-16 py-5 hairline-border text-[#F2F0E9] rounded-sm font-black text-[10px] uppercase tracking-[0.4em] hover:bg-white/[0.05] transition-all"
          >
            Enterprise Login
          </Link>
        </div>
      </section>

      <NationalAlignment />

      <footer className="py-32 text-center border-t border-[#1F1F1F]">
        <div className="flex justify-center mb-12">
          <NeuralLogo className="w-8 h-8 opacity-20" />
        </div>
        <p className="text-[10px] uppercase font-bold tracking-[0.5em] text-[#F2F0E9]/10">
          &copy; 2024 FACTORIC AI • ARCHITECTURAL RECORDS
        </p>
      </footer>
    </main>
  );
}
