"use client";

import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import { ShoppingCart, Stethoscope, Building2, Landmark, Truck, Headset, ArrowRight, Radio } from "lucide-react";
import Link from "next/link";

export default function IndustriesPage() {
  const industries = [
    {
      icon: Headset,
      title: "Telecom & Service Providers",
      problem: "Millions of repetitive queries regarding billing, outages, and plan upgrades overwhelming human agents.",
      solution: "Deploy multilingual, autonomous voice and text agents that resolve 80% of L1/L2 queries with zero wait time.",
      case: "Infinite concurrency. Zero hold times.",
      accent: "border-purple-500/20"
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce & Retail",
      problem: "High volume of 'Where is my order?' requests, returns processing, and cart abandonment.",
      solution: "Agentic pipelines interface directly with logistics APIs to provide real-time updates and autonomously process returns.",
      case: "Scale support instantly during holiday peaks.",
      accent: "border-emerald-500/20"
    },
    {
      icon: Landmark,
      title: "Banking & Finance",
      problem: "Complex compliance requirements and high-friction KYC/onboarding processes.",
      solution: "Secure, sovereign agents guide users through document submission, securely verifying intent while maintaining strict privacy.",
      case: "Isolated Astra DB instances ensure data sovereignty.",
      accent: "border-zinc-500/20"
    },
    {
      icon: Stethoscope,
      title: "Healthcare & Telemedicine",
      problem: "Missed appointments, complex triage, and delayed patient follow-ups.",
      solution: "Voice-enabled agents call patients to confirm appointments, handle basic triage, and route urgent cases to human doctors.",
      case: "Reduce no-shows by 40% autonomously.",
      accent: "border-purple-500/20"
    },
    {
      icon: Building2,
      title: "Real Estate Developers",
      problem: "Thousands of junk leads wasting the sales team's time.",
      solution: "AI filters out 90% of low-intent leads, schedules site visits for serious buyers, and answers property-specific queries 24/7.",
      case: "Qualified demand, zero human entry.",
      accent: "border-emerald-500/20"
    },
    {
      icon: Radio,
      title: "Media & Broadcasting",
      problem: "Content generation bottlenecks, expensive voice talent, and slow localized translations.",
      solution: "Synthetic audio generation, automated podcast workflows, and faceless vlog voiceovers deployed at scale.",
      case: "Powering decentralized networks like The Future Radio.",
      accent: "border-zinc-500/20"
    }
  ];

  return (
    <main className="min-h-screen bg-black text-zinc-300 font-sans selection:bg-purple-500/30">
      <Navbar />
      
      <section className="relative pt-48 pb-24 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto space-y-8 relative z-10"
        >
          <div className="text-purple-500 text-[10px] font-black uppercase tracking-[0.6em]">Sector Specific Solutions</div>
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-tight text-white">
            Built for High-Volume Support & Scale.
          </h1>
          <p className="text-xl text-zinc-400 font-medium leading-relaxed max-w-2xl mx-auto">
            Factoric AI fits environments where query volumes are high, margins are tight, and human labor bottlenecks growth.
          </p>
        </motion.div>
      </section>

      <section className="py-32 border-t border-zinc-900 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          {industries.map((ind, i) => (
            <div key={i} className={`p-16 border border-zinc-900 ${ind.accent} bg-black rounded-sm group hover:border-purple-500/30 transition-all`}>
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-12">
                  <ind.icon className="w-12 h-12 text-zinc-600 group-hover:text-purple-500 transition-colors" />
                  <h2 className="text-4xl font-bold text-white">{ind.title}</h2>
                  <div className="pt-8 border-t border-zinc-800">
                    <div className="text-[10px] font-bold text-purple-500 italic">{ind.case}</div>
                  </div>
                </div>
                
                <div className="space-y-12">
                  <div className="space-y-4">
                    <div className="text-[10px] font-black uppercase tracking-widest text-zinc-500">The Problem</div>
                    <p className="text-xl text-zinc-400 font-medium leading-relaxed">{ind.problem}</p>
                  </div>
                  <div className="space-y-4">
                    <div className="text-[10px] font-black uppercase tracking-widest text-emerald-400">The Agentic Solution</div>
                    <p className="text-xl text-white font-medium leading-relaxed">{ind.solution}</p>
                  </div>
                  <Link href="/contact" className="inline-flex items-center gap-4 text-zinc-400 hover:text-purple-400 transition-colors font-black text-[10px] uppercase tracking-[0.4em]">
                    Deploy for {ind.title} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
