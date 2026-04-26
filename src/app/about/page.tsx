"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { NeuralLogo } from "@/components/NeuralLogo";
import { NationalAlignment } from "@/components/NationalAlignment";
import { ArrowRight, Target, Brain, Plus, Zap, Shield, Cpu, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-[#F2F0E9] selection:bg-emerald-500/30">
      <Navbar />
      
      {/* 1. The Visionary Narrative (McKinsey Style) */}
      <section className="relative pt-64 pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="text-[10px] uppercase font-black tracking-[0.5em] text-accent-red">Problem Statement: Operational Latency</div>
            <h1 className="text-5xl md:text-8xl font-medium tracking-tight leading-[0.95]">
              India's MSMEs are <br />
              <span className="text-[#F2F0E9]/40">Bleeding Efficiency.</span>
            </h1>
            <p className="text-xl md:text-3xl text-[#F2F0E9]/40 max-w-4xl font-medium leading-relaxed">
              Legacy organizations are trapped in "operational latency"—the gap between intent and outcome. While the world moves toward 24/7 automation, Indian MSMEs are held back by manual friction. Factoric AI is the antidote: **Autonomous Intelligence** engineered to eliminate the gap.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. The Tech Stack (Deep-Tech Edge) */}
      <section className="section-spacing border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-24 items-start">
            <div className="space-y-12">
              <div className="text-[10px] uppercase font-black tracking-[0.5em] text-emerald-500">The Deep-Tech Edge</div>
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight">
                Not an API Wrapper. <br />
                <span className="text-[#F2F0E9]/40">A Cognitive Engine.</span>
              </h2>
              <div className="space-y-8 text-[#F2F0E9]/50 leading-relaxed text-lg font-medium">
                <p>
                  Factoric AI moves beyond basic LLM wrappers. We engineer **Agentic-AI Orchestration**—a proprietary layer that enables cognitive reasoning in real-time.
                </p>
                <p>
                  Our architecture is fully asynchronous, allowing our agents to extract **BANT** (Budget, Authority, Need, Timeline) intelligence and execute institutional logic without human intervention. This is a novel application of generative models for industrial automation.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {[
                { title: 'Cognitive Reasoning', desc: 'System-wide logic processing at 12ms latency.', icon: Brain },
                { title: 'Agentic Orchestration', desc: 'Multi-agent coordination for complex tasks.', icon: Cpu },
                { title: 'Real-time BANT', desc: 'Autonomous lead qualification & intent mapping.', icon: Target },
              ].map((tech, i) => (
                <div key={i} className="p-8 glass-card rounded-sm border border-white/5 flex gap-6 items-center">
                  <div className="p-4 bg-emerald-500/10 rounded-full shrink-0">
                    <tech.icon className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <div className="text-sm font-bold uppercase tracking-widest text-white mb-1">{tech.title}</div>
                    <div className="text-xs text-white/40 font-medium">{tech.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Values (Founder's Philosophy) */}
      <section className="section-spacing border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-24 items-center">
            <div className="flex-1 space-y-12">
              <div className="text-[10px] uppercase font-black tracking-[0.5em] text-accent-red">The Mission</div>
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight">
                Transforming <br />
                <span className="text-accent-red">Software into Labor.</span>
              </h2>
              <div className="space-y-8 text-[#F2F0E9]/50 leading-relaxed text-lg font-medium">
                <p>
                  Our philosophy is simple: Software should no longer be a tool; it should be an employee. We are building the world's first **Digital Workforce**—operatives that work, think, and scale autonomously.
                </p>
                <p>
                  From 1 to 1000+ deployments, Factoric AI architectures are engineered for infinite scalability, ensuring that institutional growth is never limited by human headcount.
                </p>
              </div>
            </div>
            <div className="flex-1 p-16 glass-card rounded-sm bg-white/[0.01] flex flex-col justify-center relative overflow-hidden emerald-glow shadow-2xl">
               <div className="absolute inset-0 data-pulse opacity-10" />
               <div className="relative z-10">
                 <div className="text-6xl font-light text-emerald-500/20 mb-8 tracking-tighter">1,000+</div>
                 <div className="text-[10px] uppercase font-bold tracking-[0.5em] text-emerald-500 mb-4">Deployment Scalability</div>
                 <p className="text-sm text-white/40 font-medium">Engineered to govern entire organizations through a single unified neural bridge.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DPIIT/Startup India Alignment */}
      <section className="section-spacing bg-white/[0.01]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-16">
          <div className="space-y-8">
            <div className="text-[10px] uppercase font-black tracking-[0.5em] text-[#F2F0E9]/20">Economic Impact & Innovation</div>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight">The Digital Munim.</h2>
            <p className="text-xl text-[#F2F0E9]/40 leading-relaxed font-medium">
              By empowering local businesses through cost-efficient "Digital Munims," Factoric AI is creating a direct economic impact on the Indian MSME sector. We represent a **novel application of LLMs** for national industrial growth, aligned with the Startup India vision.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 pt-12">
            {[
              { label: 'Startup India', value: 'DPIIT Aligned' },
              { label: 'Innovation', value: 'Agentic Core' },
              { label: 'Economy', value: 'MSME Growth' },
            ].map((tag, i) => (
              <div key={i} className="p-6 border border-white/5 bg-white/[0.01] rounded-sm">
                <div className="text-[8px] font-black uppercase tracking-[0.3em] text-[#F2F0E9]/20 mb-2">{tag.label}</div>
                <div className="text-xs font-bold text-emerald-500 uppercase tracking-widest">{tag.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Clear CTA (Lethal Button) */}
      <section className="section-spacing text-center bg-accent-red/5 border-y border-accent-red/10">
        <div className="max-w-3xl mx-auto px-6 space-y-12">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight">Ready to see the Intelligence in action?</h2>
          <Link 
            href="/chat" 
            className="inline-flex items-center gap-6 px-16 py-6 bg-accent-red text-white hover:bg-accent-red/80 shadow-2xl shadow-red-900/40 rounded-sm font-black text-[10px] uppercase tracking-[0.5em] transition-all"
          >
            Deploy Your First Agent <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <NationalAlignment />

      <footer className="py-32 text-center border-t border-white/5">
        <div className="flex justify-center mb-12">
          <NeuralLogo className="w-8 h-8 opacity-20" />
        </div>
        <p className="text-[10px] uppercase font-bold tracking-[0.5em] text-[#F2F0E9]/10">
          &copy; 2024 FACTORIC AI • INSTITUTIONAL OVERWATCH
        </p>
      </footer>
    </main>
  );
}
