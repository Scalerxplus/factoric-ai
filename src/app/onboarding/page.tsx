"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { NeuralLogo } from "@/components/NeuralLogo";
import { Network, ShieldCheck, Bot, ArrowRight, QrCode } from "lucide-react";
import Link from "next/link";

export default function OnboardingPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-300 flex flex-col font-sans selection:bg-purple-500/30">
      <Navbar />
      
      <section className="flex-grow flex flex-col items-center justify-center px-6 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 blur-[150px] pointer-events-none" />
        
        <div className="max-w-5xl w-full relative z-10">
          <div className="flex flex-col md:flex-row gap-24 items-center">
            
            {/* Left Column: Initialization Media */}
            <div className="flex-1 w-full">
              <div className="text-[10px] uppercase font-black tracking-[0.4em] text-purple-500 mb-12">
                Phase 01: Agent Initialization
              </div>
              <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-8 text-white">
                <span className="text-purple-500">I</span>nitialize Sovereign Nodes.
              </h1>
              <p className="text-lg text-zinc-400 font-medium leading-relaxed mb-16 max-w-xl">
                Scan the enterprise signature below to authorize your agentic logic node. Zero data leakage, instant autonomous orchestration.
              </p>

              <div className="p-12 border border-zinc-900 rounded-sm bg-zinc-950 relative overflow-hidden group max-w-sm hover:border-purple-500/30 transition-colors">
                <div className="absolute top-4 left-4 text-[6px] font-black tracking-[0.3em] text-zinc-600 uppercase">Auth Layer: Agentic-RSA</div>
                <div className="bg-white p-8 rounded-sm mb-8 flex justify-center border border-zinc-200">
                  <QrCode className="w-48 h-48 text-black" />
                </div>
                <div className="flex justify-between items-center text-[8px] font-black tracking-[0.2em] text-zinc-500 uppercase">
                  <span>Sync Status: Ready</span>
                  <span className="text-purple-500 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse" /> Node Active
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Architectural Validations */}
            <div className="flex-1 space-y-16">
              {[
                {
                  icon: Network,
                  title: "Sync Orchestration Hub",
                  desc: "Connect your enterprise APIs to the Factoric Agent Orchestration Engine.",
                },
                {
                  icon: ShieldCheck,
                  title: "Sovereign Compliance",
                  desc: "Enterprise-grade security with isolated vector databases and zero-trust inference nodes.",
                },
                {
                  icon: Bot,
                  title: "Deploy Autonomous Labor",
                  desc: "Watch as your deployed agents instantly begin triaging tickets, synthesizing audio, and executing workflows.",
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="shrink-0 p-4 border border-zinc-900 rounded-sm bg-black group-hover:border-purple-500/30 group-hover:bg-purple-500/5 transition-all">
                    <item.icon className="w-6 h-6 text-zinc-600 group-hover:text-purple-500 transition-colors" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-sm font-black uppercase tracking-[0.3em] text-zinc-300 group-hover:text-white transition-colors">{item.title}</h3>
                    <p className="text-xs text-zinc-500 leading-relaxed font-medium max-w-xs">{item.desc}</p>
                  </div>
                </div>
              ))}

              <div className="pt-12">
                <Link 
                  href="/" 
                  className="w-full md:w-auto inline-flex items-center justify-between gap-12 px-12 py-5 bg-purple-600 text-white hover:bg-purple-500 shadow-[0_0_20px_rgba(147,51,234,0.3)] rounded-sm font-black text-[10px] uppercase tracking-[0.4em] transition-all group"
                >
                  Continue to Hub <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <footer className="py-20 text-center border-t border-zinc-900 bg-black">
        <div className="flex justify-center mb-8">
          <NeuralLogo className="w-6 h-6 opacity-10" />
        </div>
        <p className="text-[8px] uppercase font-bold tracking-[0.5em] text-zinc-700">
          FACTORIC AI • INITIALIZATION ARCHIVE • 2024
        </p>
      </footer>
    </main>
  );
}
