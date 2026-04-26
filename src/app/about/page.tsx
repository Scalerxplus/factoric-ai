"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { NeuralLogo } from "@/components/NeuralLogo";
import { NationalAlignment } from "@/components/NationalAlignment";
import { ArrowRight, Target, Brain, Plus } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-[#F2F0E9]">
      <Navbar />
      
      <section className="relative flex flex-col items-center justify-center pt-64 pb-32 px-6">
        <div className="text-[10px] uppercase font-black tracking-[0.4em] text-accent-red mb-8">
          The Manifesto
        </div>
        <h1 className="text-4xl md:text-8xl font-medium tracking-tight text-center mb-12 max-w-4xl leading-[1.05]">
          Engineering <br />
          <span className="text-[#F2F0E9]/40">Agentic Sovereignty.</span>
        </h1>
        <p className="text-lg md:text-2xl text-[#F2F0E9]/40 text-center max-w-2xl mb-16 font-medium leading-relaxed">
          Factoric AI is an architectural lab specializing in the autonomous logic of modern institutions.
        </p>
      </section>

      <section className="section-spacing border-t border-[#1F1F1F]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-24 items-start">
            <div className="flex flex-col gap-12">
              <div className="text-[10px] uppercase font-black tracking-[0.4em] text-accent-red">The Genesis</div>
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight">
                Born from Friction. <br />
                <span className="text-[#F2F0E9]/40 italic">Built for the Engine.</span>
              </h2>
              
              <div className="space-y-8 text-[#F2F0E9]/50 leading-relaxed text-lg font-medium">
                <p>
                  We observed ambitious organizations losing integrity to manual friction. Legacy software remained passive. We envisioned a system that acts.
                </p>
                <p>
                  The result is **Factoric Workforce**—a neural foundation that powers our BOS M, X, and Z architectures. We don't just provide software; we provide an autonomous labor force.
                </p>
              </div>
              <p className="text-[#F2F0E9]/30 italic text-sm border-l border-[#1F1F1F] pl-8 py-2">
                "Headquartered in Raipur, Raipur's structural hub — engineering the neural infrastructure for the sovereign enterprise."
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {[
                { number: '< 10s', label: 'Logical Latency' },
                { number: '24/7', label: 'Workforce Uptime' },
                { number: '100%', label: 'Capital Attribution' },
                { number: 'Zero', label: 'Human Friction' },
              ].map((stat, i) => (
                <div key={i} className="p-10 bg-white/[0.01] hairline-border rounded-xl">
                  <div className="text-3xl font-light text-accent-red mb-3">{stat.number}</div>
                  <div className="text-[8px] font-black uppercase tracking-[0.3em] text-[#F2F0E9]/20">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white/[0.01] border-y border-[#1F1F1F]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-24 items-center">
            <div className="flex-1 space-y-12">
              <div className="text-[10px] uppercase font-black tracking-[0.4em] text-accent-red">National Commitment</div>
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight">
                The <span className="text-accent-red">I</span>ndiaAI Protocol.
              </h2>
              <div className="space-y-8 text-[#F2F0E9]/50 leading-relaxed text-lg font-medium">
                <p>
                  Factoric AI is fundamentally aligned with the Govt of India's **IndiaAI Mission**. We believe that the next decade of institutional growth will be governed by domestic agentic sovereignty.
                </p>
                <p>
                  Our mission is direct: To equip Indian MSMEs—the industrial heart of the nation—with global-standard autonomous systems. We are not just building a startup; we are engineering a validated pillar of the **Digital India** revolution.
                </p>
              </div>
            </div>
            <div className="flex-1 p-16 hairline-border rounded-sm bg-white/[0.01] flex flex-col justify-center relative overflow-hidden group">
               <div className="text-6xl font-black text-[#F2F0E9]/5 mb-8 tracking-[0.2em] uppercase">BOS IND</div>
               <div className="text-[10px] uppercase font-bold tracking-[0.3em] text-accent-red/40 mb-4">IndiaAI Mission Synchronized</div>
               <div className="space-y-4">
                 <div className="flex items-center gap-4 text-[8px] font-black uppercase tracking-[0.5em] text-[#F2F0E9]/20">
                   <div className="w-1.5 h-1.5 bg-accent-red rounded-full" /> MSME Empowerment Layer
                 </div>
                 <div className="flex items-center gap-4 text-[8px] font-black uppercase tracking-[0.5em] text-[#F2F0E9]/20">
                   <div className="w-1.5 h-1.5 bg-accent-red rounded-full" /> Sovereign Data Integrity
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing text-center">
        <h2 className="text-3xl font-medium mb-12">Experience Structural Logic.</h2>
        <Link 
          href="/login" 
          className="inline-flex items-center gap-6 px-16 py-5 bg-[#F2F0E9] text-[#0D0D0D] rounded-sm font-black text-[10px] uppercase tracking-[0.4em] hover:bg-white transition-all shadow-2xl"
        >
          Initialize Deployment
        </Link>
      </section>

      <NationalAlignment />

      <footer className="py-32 text-center border-t border-[#1F1F1F]">
        <div className="flex justify-center mb-12">
          <NeuralLogo className="w-8 h-8 opacity-20" />
        </div>
        <p className="text-[10px] uppercase font-bold tracking-[0.5em] text-[#F2F0E9]/10">
          &copy; 2024 FACTORIC AI • LABORATORY RECORDS
        </p>
      </footer>
    </main>
  );
}
