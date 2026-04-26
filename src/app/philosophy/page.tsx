"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { NeuralLogo } from "@/components/NeuralLogo";
import { NationalAlignment } from "@/components/NationalAlignment";
import { ArrowRight, Plus } from "lucide-react";
import Link from "next/link";

export default function PhilosophyPage() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-[#F2F0E9]">
      <Navbar />
      
      {/* Header: Whitepaper Alignment */}
      <section className="relative flex flex-col items-center pt-64 pb-32 px-6">
        <div className="max-w-4xl w-full">
          <div className="flex items-center gap-6 mb-12">
            <div className="text-accent-red text-[10px] font-black uppercase tracking-[0.4em]">Whitepaper 01</div>
            <div className="text-[10px] font-bold text-[#F2F0E9]/20 tracking-[0.2em] border-l border-[#1F1F1F] pl-6 uppercase">Mission Philosophy</div>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-medium tracking-tight mb-16 leading-[1.1]">
            From Passive Records <br />
            to <span className="text-accent-red">A</span>ctive Operational Logic.
          </h1>
          
          <div className="grid md:grid-cols-2 gap-16 py-16 border-t border-[#1F1F1F]">
            <p className="text-lg text-[#F2F0E9]/40 font-medium leading-relaxed">
              The limitation of modern enterprise software isn't a lack of features. It's a lack of agency. Traditional ERPs are passive filing cabinets.
            </p>
            <p className="text-lg text-[#F2F0E9]/40 font-medium leading-relaxed">
              They require human input to record chaos, rather than autonomous logic to prevent it. We are engineering the transition to agentic labor.
            </p>
          </div>
        </div>
      </section>

      {/* Main Philosophy Sections */}
      <section className="section-spacing border-t border-[#1F1F1F]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-32">
            <div className="flex flex-col gap-12 relative">
              <div className="absolute -left-12 top-0 text-accent-red/20 text-xs font-black">01</div>
              <h2 className="text-3xl font-medium">The Agency Problem</h2>
              <div className="space-y-8 text-xl text-[#F2F0E9]/60 leading-relaxed font-medium">
                <p>
                  Every modern institution is currently losing 30-40% of its potential growth to the "Manual Gap"—the space where human operators must translate digital intent into operational action.
                </p>
                <p>
                  Our inquiry was direct: What if the software itself possessed the agency to close this gap? What if intent was mapped to outcome at the speed of thought?
                </p>
              </div>
            </div>

            <div className="p-16 hairline-border rounded-sm bg-[#F2F0E9]/[0.01] relative overflow-hidden group">
              <Plus className="absolute top-8 right-8 w-6 h-6 text-accent-red/20" />
              <p className="text-2xl md:text-4xl font-light leading-relaxed italic pr-12">
                "Legacy systems make accountants happy. <br />
                <span className="text-accent-red">Factoric BOS Z</span> makes institutions sovereign."
              </p>
            </div>

            <div className="flex flex-col gap-12 relative">
              <div className="absolute -left-12 top-0 text-accent-red/20 text-xs font-black">02</div>
              <h2 className="text-3xl font-medium">The Factoric Workforce</h2>
              <div className="space-y-8 text-xl text-[#F2F0E9]/60 leading-relaxed font-medium">
                <p>
                  At Factoric AI, we do not build dashboards. We engineer autonomous operating systems. Systems that do not merely list appointments, but actively triage intent and optimize the clinical pipeline through **Factoric Workforce**.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structural Comparison: Realigned */}
      <section className="section-spacing bg-white/[0.01] border-y border-[#1F1F1F]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-24">
            <h2 className="text-4xl font-medium mb-8">Structural Comparison</h2>
            <p className="text-[#F2F0E9]/40 font-medium text-lg max-w-xl">The shift from passive storage to active intelligence.</p>
          </div>

          <div className="overflow-hidden hairline-border rounded-sm">
            <table className="w-full text-left border-collapse bg-[#0D0D0D]">
              <thead>
                <tr className="border-b border-[#1F1F1F]">
                  <th className="p-10 text-[10px] font-black uppercase tracking-[0.3em] text-[#F2F0E9]/20 w-1/3">Core Capability</th>
                  <th className="p-10 text-[10px] font-black uppercase tracking-[0.3em] text-[#F2F0E9]/20 w-1/3">Legacy Systems</th>
                  <th className="p-10 text-[10px] font-black uppercase tracking-[0.3em] text-accent-red w-1/3">Factoric Architecture</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1F1F1F]">
                {[
                  { f: "Data Processing", l: "Passive Entry", s: "Factoric Workforce" },
                  { f: "Logical Routing", l: "Manual Assignment", s: "Neural BOS Tiers" },
                  { f: "Revenue Integrity", l: "Reactive Audit", s: "Closed-Loop BOS X" },
                  { f: "Infrastructure", l: "Centralized Vulnerability", s: "Sovereign BOS Z Tiers" }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-white/[0.01] transition-colors">
                    <td className="p-10 text-xs font-bold text-[#F2F0E9]/40">{row.f}</td>
                    <td className="p-10 text-xs text-[#F2F0E9]/30">{row.l}</td>
                    <td className="p-10 text-xs text-[#F2F0E9] font-bold">{row.s}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-spacing text-center">
        <h2 className="text-3xl font-medium mb-12">Initialize Structural Integration</h2>
        <Link 
          href="/onboarding" 
          className="inline-flex items-center gap-4 px-16 py-5 bg-[#F2F0E9] text-[#0D0D0D] rounded-sm font-black text-[10px] uppercase tracking-[0.4em] hover:bg-white transition-all shadow-2xl"
        >
          Explore Architectures <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      <NationalAlignment />

      <footer className="py-32 text-center border-t border-[#1F1F1F]">
        <div className="flex justify-center mb-12">
          <NeuralLogo className="w-8 h-8 opacity-20" />
        </div>
        <p className="text-[10px] uppercase font-bold tracking-[0.5em] text-[#F2F0E9]/10">
          &copy; 2024 FACTORIC AI • PHILOSOPHY ARCHIVE
        </p>
      </footer>
    </main>
  );
}
