"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { NeuralLogo } from "@/components/NeuralLogo";
import { ArrowRight, Plus } from "lucide-react";
import Link from "next/link";

export default function PhilosophyPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-300 font-sans selection:bg-purple-500/30">
      <Navbar />
      
      {/* Header: Whitepaper Alignment */}
      <section className="relative flex flex-col items-center pt-64 pb-32 px-6">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
          <div className="w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
        </div>
        
        <div className="max-w-4xl w-full relative z-10">
          <div className="flex items-center gap-6 mb-12">
            <div className="text-purple-500 text-[10px] font-black uppercase tracking-[0.4em]">Whitepaper 01</div>
            <div className="text-[10px] font-bold text-zinc-500 tracking-[0.2em] border-l border-zinc-800 pl-6 uppercase">Mission Philosophy</div>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-medium tracking-tight mb-16 leading-[1.1] text-white">
            From Static Prompts <br />
            to <span className="text-purple-500">A</span>utonomous Logic.
          </h1>
          
          <div className="grid md:grid-cols-2 gap-16 py-16 border-t border-zinc-900">
            <p className="text-lg text-zinc-400 font-medium leading-relaxed">
              Generative AI is currently trapped in a chat interface. It requires constant human prompting, supervision, and validation to produce basic outputs.
            </p>
            <p className="text-lg text-zinc-400 font-medium leading-relaxed">
              Factoric AI orchestrates "Agentic Loops" — asynchronous systems that interact with each other, query databases, synthesise audio, and make decisions without a human in the loop. We build intelligence infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Main Philosophy Sections */}
      <section className="py-32 border-t border-zinc-900 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-32">
            <div className="flex flex-col gap-12 relative">
              <div className="absolute -left-12 top-0 text-purple-500/20 text-xs font-black">01</div>
              <h2 className="text-3xl font-medium text-white">The Agency Problem</h2>
              <div className="space-y-8 text-xl text-zinc-400 leading-relaxed font-medium">
                <p>
                  Every modern institution is currently losing potential growth to the "Manual Gap"—the space where human operators must translate digital intent into operational action or media assets.
                </p>
                <p>
                  Our inquiry was direct: What if the software itself possessed the agency to close this gap? What if a customer inquiry was instantly parsed, routed, and resolved by a model that also synthesised a personalised voice response?
                </p>
              </div>
            </div>

            <div className="p-16 border border-zinc-800 rounded-sm bg-black relative overflow-hidden group hover:border-purple-500/30 transition-colors">
              <Plus className="absolute top-8 right-8 w-6 h-6 text-purple-500/20" />
              <p className="text-2xl md:text-4xl font-light leading-relaxed italic pr-12 text-white">
                "Basic AI makes individuals faster. <br />
                <span className="text-purple-500">Agentic AI</span> makes institutions sovereign."
              </p>
            </div>

            <div className="flex flex-col gap-12 relative">
              <div className="absolute -left-12 top-0 text-purple-500/20 text-xs font-black">02</div>
              <h2 className="text-3xl font-medium text-white">The Factoric Orchestration</h2>
              <div className="space-y-8 text-xl text-zinc-400 leading-relaxed font-medium">
                <p>
                  At Factoric AI, we do not build wrappers. We engineer autonomous operating systems. Systems that do not merely generate text, but actively govern entire pipelines for B2B enterprises and decentralised media networks like The Future Radio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structural Comparison: Realigned */}
      <section className="py-32 bg-black border-t border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-24">
            <h2 className="text-4xl font-medium mb-8 text-white">Architectural Shift</h2>
            <p className="text-zinc-500 font-medium text-lg max-w-xl">The transition from passive chat models to active orchestration.</p>
          </div>

          <div className="overflow-hidden border border-zinc-900 rounded-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-900 bg-zinc-950">
                  <th className="p-10 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 w-1/4">Capability</th>
                  <th className="p-10 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 w-1/4">Legacy Chat AI</th>
                  <th className="p-10 text-[10px] font-black uppercase tracking-[0.3em] text-purple-500 w-1/2">Factoric Agent Architecture</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-900">
                {[
                  { f: "Operational Agency", l: "Passive (Human Prompting)", s: "Autonomous (Agentic Action)", d: "Models that trigger their own workflows." },
                  { f: "Media Processing", l: "Text In / Text Out", s: "Multimodal (Audio, Video, Logic)", d: "Native TTS, voice synthesis, and real-time routing." },
                  { f: "Data Integrity", l: "Hallucination Prone", s: "Sovereign RAG", d: "100% precision grounded in your private enterprise data." },
                  { f: "Infrastructure", l: "Shared Compute APIs", s: "Isolated Sovereign Nodes", d: "Dedicated latency-optimized compute clusters." }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-zinc-950 transition-colors">
                    <td className="p-10 text-xs font-bold text-zinc-400">{row.f}</td>
                    <td className="p-10 text-xs text-zinc-500">{row.l}</td>
                    <td className="p-10">
                      <div className="text-xs text-white font-bold mb-2">{row.s}</div>
                      <div className="text-[8px] font-black uppercase tracking-widest text-purple-500/50">{row.d}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-32 text-center bg-zinc-950 border-t border-zinc-900">
        <h2 className="text-3xl font-medium mb-12 text-white">Initialize Your Architecture</h2>
        <Link 
          href="/contact" 
          className="inline-flex items-center gap-4 px-16 py-5 bg-purple-600 text-white hover:bg-purple-500 shadow-[0_0_30px_rgba(147,51,234,0.3)] rounded-sm font-black text-[10px] uppercase tracking-[0.4em] transition-all"
        >
          Consult An Architect <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      <footer className="py-24 text-center border-t border-zinc-900 bg-black">
        <div className="flex justify-center mb-12">
          <NeuralLogo className="w-8 h-8 opacity-20" />
        </div>
        <p className="text-[10px] uppercase font-bold tracking-[0.5em] text-zinc-700">
          &copy; 2024 FACTORIC AI • PHILOSOPHY ARCHIVE
        </p>
      </footer>
    </main>
  );
}
