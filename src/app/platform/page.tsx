"use client";

import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import { Shield, Cpu, Zap, Database, Lock, Server, Network, Mic, Activity } from "lucide-react";
import Link from "next/link";

export default function PlatformPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-300 font-sans selection:bg-purple-500/30">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-24 px-6 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-600/10 blur-[150px] pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-4xl mx-auto space-y-8"
        >
          <div className="text-purple-500 text-[10px] font-black uppercase tracking-[0.6em]">System Architecture</div>
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-tight text-white">
            The Intelligence Engine Behind Modern Enterprises.
          </h1>
          <p className="text-xl text-zinc-400 font-medium leading-relaxed max-w-3xl mx-auto">
            Factoric AI provides the raw infrastructure to deploy, monitor, and scale autonomous AI agents. We handle the orchestration so your agents can handle the labor.
          </p>
        </motion.div>
      </section>

      {/* Flow Strip */}
      <section className="py-12 border-y border-zinc-900 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto custom-scrollbar">
          <div className="flex items-center justify-between min-w-[800px] gap-4">
            {[
              "Ingestion", "Intent Parsing", "Agent Routing", "Workflow Execution", "Media Synthesis", "Delivery"
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full border border-purple-500/30 bg-black flex items-center justify-center text-[10px] font-black text-purple-500">
                    0{i+1}
                  </div>
                  <div className="mt-4 text-[10px] font-black uppercase tracking-widest text-zinc-500">{step}</div>
                </div>
                {i < 5 && <div className="h-[1px] w-12 bg-zinc-800" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Infrastructure */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Network,
                title: "Multi-Agent Swarms",
                desc: "Deploy swarms of specialized agents that communicate with each other to solve complex tasks asynchronously.",
                tag: "High Concurrency"
              },
              {
                icon: Mic,
                title: "Native TTS Synthesis",
                desc: "Enterprise-grade voice synthesis pipelines for generating podcast audio, vlog voiceovers, and voice support.",
                tag: "Ultra-Low Latency"
              },
              {
                icon: Shield,
                title: "Sovereign Knowledge",
                desc: "Your data trains your agents securely. We utilize isolated vector stores that prevent data leakage.",
                tag: "Zero Trust Architecture"
              }
            ].map((item, i) => (
              <div key={i} className="p-12 border border-zinc-900 bg-zinc-950 rounded-sm hover:border-purple-500/30 transition-all group">
                <item.icon className="w-8 h-8 text-purple-500 mb-8 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-medium mb-8">
                  {item.desc}
                </p>
                <div className="text-[8px] font-black uppercase tracking-widest text-zinc-600">{item.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 border-t border-zinc-900 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <h2 className="text-4xl font-medium tracking-tight text-white">Ready to Deploy Your First Agent?</h2>
          <div className="flex justify-center gap-8">
            <Link 
              href="/contact"
              className="px-12 py-5 bg-purple-600 text-white font-black text-[10px] uppercase tracking-[0.4em] rounded-sm shadow-[0_0_30px_rgba(147,51,234,0.3)] hover:bg-purple-500 transition-colors"
            >
              Start Deployment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
