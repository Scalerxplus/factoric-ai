"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { NeuralLogo } from "@/components/NeuralLogo";
import { ArrowLeft, ShieldCheck, Lock, ArrowRight, Plus } from "lucide-react";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  const tiers = [
    { id: "SUPPORT", name: "Support Node", desc: "Autonomous Triage & Chat" },
    { id: "MEDIA", name: "Media Node", desc: "Voice & Audio Synthesis" },
    { id: "WORKFORCE", name: "Workforce", desc: "Internal RAG & Logic" },
    { id: "ARCHITECT", name: "Architect", desc: "Full Multi-Agent Orchestration" },
  ];

  const handleLogin = (provider: string) => {
    if (!selectedTier) return;
    signIn(provider, { callbackUrl: `/?tier=${selectedTier}` });
  };

  return (
    <main className="min-h-screen bg-black text-zinc-300 flex flex-col items-center justify-center px-6 overflow-hidden relative font-sans selection:bg-purple-500/30">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 blur-[150px] pointer-events-none" />
      
      <Link 
        href="/" 
        className="absolute top-12 left-12 flex items-center gap-3 text-[10px] uppercase font-black tracking-[0.4em] text-zinc-600 hover:text-purple-400 transition-colors group z-20"
      >
        <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" /> 
        Return to Hub
      </Link>

      <div className="absolute top-12 right-12 flex items-center gap-4 text-[8px] font-bold text-zinc-600 tracking-[0.3em] uppercase z-20">
        <ShieldCheck className="w-3 h-3 text-purple-500/40" />
        Auth Protocol: v4.2.0-AGENT_AWARE
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-2xl flex flex-col items-center z-10"
      >
        <NeuralLogo className="w-16 h-16 mb-12" />
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-4 text-white">
            <span className="text-purple-500">I</span>ntelligence Access
          </h1>
          <p className="text-[10px] uppercase font-black tracking-[0.5em] text-zinc-500">
            Initialize Agentic Architecture
          </p>
        </div>

        {/* Product Selection Slab */}
        <div className="w-full border border-zinc-900 rounded-sm bg-black p-8 md:p-12 relative overflow-hidden group mb-8 shadow-2xl">
          <div className="text-[10px] uppercase font-black tracking-[0.4em] text-zinc-500 mb-8 border-b border-zinc-900 pb-4">
            Step 01: Select Node Type
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {tiers.map((tier) => (
              <button
                key={tier.id}
                onClick={() => setSelectedTier(tier.id)}
                className={`p-6 text-left border transition-all duration-500 rounded-sm group/tier relative ${
                  selectedTier === tier.id 
                    ? "border-purple-500 bg-purple-500/[0.05]" 
                    : "border-zinc-900 bg-zinc-950 hover:border-purple-500/30"
                }`}
              >
                <div className={`text-[10px] font-black uppercase tracking-widest mb-2 transition-colors ${
                  selectedTier === tier.id ? "text-purple-400" : "text-zinc-400"
                }`}>
                  {tier.name}
                </div>
                <div className="text-[8px] font-medium text-zinc-600 leading-tight">
                  {tier.desc}
                </div>
                {selectedTier === tier.id && (
                  <motion.div 
                    layoutId="check"
                    className="absolute top-2 right-2"
                  >
                    <Plus className="w-3 h-3 text-purple-500" />
                  </motion.div>
                )}
              </button>
            ))}
          </div>

          <div className="text-[10px] uppercase font-black tracking-[0.4em] text-zinc-500 mb-8 border-b border-zinc-900 pb-4">
            Step 02: Verification
          </div>

          <div className={`space-y-6 transition-all duration-700 ${selectedTier ? "opacity-100 translate-y-0" : "opacity-20 pointer-events-none translate-y-4"}`}>
            <button 
              onClick={() => handleLogin("google")}
              className="w-full py-5 px-8 flex items-center justify-between bg-purple-600 text-white hover:bg-purple-500 shadow-[0_0_20px_rgba(147,51,234,0.3)] rounded-sm font-black text-[10px] uppercase tracking-[0.4em] transition-all group"
            >
              <span className="flex items-center gap-4">
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Initialize {selectedTier ? `Node [${selectedTier}]` : "Architecture"}
              </span>
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
            </button>

            <button 
              onClick={() => handleLogin("azure-ad")}
              className="w-full py-5 px-8 flex items-center justify-between border border-zinc-800 bg-zinc-950 text-white rounded-sm font-black text-[10px] uppercase tracking-[0.4em] hover:bg-zinc-900 hover:border-purple-500/30 transition-all group"
            >
              <span className="flex items-center gap-4">
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z" />
                </svg>
                Corporate SSO Authorization
              </span>
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
            </button>
          </div>

          <div className="mt-12 pt-8 border-t border-zinc-900 text-center">
            <Link 
              href="/contact" 
              className="text-[10px] uppercase font-black tracking-[0.3em] text-zinc-500 hover:text-purple-400 transition-colors"
            >
              Request Custom Agent Deployment
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-6 text-[8px] font-black uppercase tracking-[0.5em] text-zinc-600">
          <div className="flex items-center gap-2">
            <Lock className="w-3 h-3 text-purple-500/50" /> Sovereign Encrypted Session
          </div>
          <div className="w-1 h-1 bg-purple-500/20 rounded-full" />
          <div>Factoric Agent Orchestration Layer</div>
        </div>
      </motion.div>
    </main>
  );
}
