"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { NeuralLogo } from "@/components/NeuralLogo";
import { ArrowRight, Brain, Workflow, Zap, Network, Bot } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-300 selection:bg-purple-500/30 font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-64 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
          <div className="w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-12"
          >
            <div className="inline-block border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 rounded-full">
              <div className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                The Intelligence Infrastructure
              </div>
            </div>
            <h1 className="text-5xl md:text-8xl font-medium tracking-tight leading-[0.95] text-white">
              Engineering Autonomous <br />
              <span className="text-zinc-500">Workforces.</span>
            </h1>
            <p className="text-xl md:text-3xl text-zinc-400 max-w-4xl font-medium leading-relaxed">
              We do not build chatbots. We architect self-governing multi-agent systems that autonomously execute enterprise operations, media synthesis, and customer triage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-32 border-t border-zinc-900 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-24">
            <div className="text-purple-500 text-[10px] font-black uppercase tracking-[0.5em] mb-8">Architectural Philosophy</div>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white">The Factoric Creed</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Agents Over Apps",
                desc: "Software shouldn't wait for human input. Our AI agents think, coordinate, and act autonomously across your entire tech stack without manual triggers."
              },
              {
                title: "Deep-Tech Orchestration",
                desc: "We deploy isolated multi-agent workflows (LLM + TTS + RAG) that communicate seamlessly to solve complex, multi-step institutional problems."
              },
              {
                title: "Sovereign Intelligence",
                desc: "Your data trains your agents. We build secure, ring-fenced models that capture your institutional knowledge and never share it externally."
              }
            ].map((phil, i) => (
              <div key={i} className="p-12 border border-zinc-800 bg-black rounded-sm hover:bg-zinc-900/50 hover:border-purple-500/30 transition-all duration-300 group">
                <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-purple-400 transition-colors">{phil.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-medium">
                  {phil.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. The Tech Stack (Deep-Tech Edge) */}
      <section className="py-32 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-24 items-start">
            <div className="space-y-12">
              <div className="text-[10px] uppercase font-black tracking-[0.5em] text-emerald-400">The Deployment Layer</div>
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight text-white">
                Cognitive <br />
                <span className="text-zinc-500">Processing.</span>
              </h2>
              <div className="space-y-8 text-zinc-400 leading-relaxed text-lg font-medium">
                <p>
                  Factoric AI moves beyond conversational wrappers. We engineer **Agentic Orchestration**—a proprietary intelligence layer that runs real-time inference across text, audio, and logic nodes.
                </p>
                <p>
                  Whether it is parsing a customer's intent in Hindi and routing a ticket, or automatically generating a 10-minute podcast script and synthesizing the voice, our agents execute deterministic workflows with zero human intervention.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {[
                { title: 'Agent Orchestration', desc: 'Multi-agent system coordination at <20ms latency.', icon: Network },
                { title: 'Synthetic Media', desc: 'High-fidelity audio generation & TTS pipelines.', icon: Bot },
                { title: 'Sovereign RAG', desc: 'Isolated retrieval-augmented generation models.', icon: Brain },
              ].map((tech, i) => (
                <div key={i} className="p-8 border border-zinc-800 bg-black rounded-sm flex gap-6 items-center hover:border-purple-500/30 transition-colors group">
                  <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-full shrink-0 group-hover:bg-purple-500/10 transition-colors">
                    <tech.icon className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <div className="text-sm font-bold uppercase tracking-widest text-white mb-1">{tech.title}</div>
                    <div className="text-xs text-zinc-500 font-medium">{tech.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. The Lab (Halo Effect) */}
      <section className="py-32 border-t border-zinc-900 bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div className="order-2 md:order-1 flex flex-col gap-8">
              <div className="p-12 rounded-sm border border-zinc-800 bg-black relative group hover:border-purple-500/30 transition-all">
                <div className="absolute top-0 left-0 w-2 h-2 bg-purple-500" />
                <h3 className="text-2xl font-bold mb-6 text-white">The ScalerX Ecosystem</h3>
                <p className="text-lg text-zinc-400 leading-relaxed font-medium mb-8">
                  Factoric AI is the premium intelligence infrastructure of **ScalerX Lab**. Our core autonomous logic powers other enterprise entities within the holding ecosystem, including B2B operations and decentralized media networks.
                </p>
                <div className="flex items-center gap-4 pt-8 border-t border-zinc-800">
                  <div className="text-[10px] font-black uppercase tracking-[0.4em] text-purple-500">Infrastructure Layer: Active</div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-8">
              <div className="text-[10px] uppercase font-black tracking-[0.5em] text-purple-500">Institutional Authority</div>
              <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white">
                Backed By <br /><span className="text-purple-500">ScalerX Lab.</span>
              </h2>
              <p className="text-xl text-zinc-400 leading-relaxed font-medium">
                By leveraging the research and capital of <a href="https://scalerxlab.com" className="text-white hover:text-purple-400 transition-colors underline underline-offset-8">ScalerX Lab</a>, Factoric AI operates with unparalleled stability. Every agent deployed is stress-tested in real-world high-volume environments before entering your ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Clear CTA */}
      <section className="py-32 text-center border-t border-zinc-900 bg-black">
        <div className="max-w-3xl mx-auto px-6 space-y-12">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white">Ready to deploy your intelligence layer?</h2>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center gap-6 px-16 py-6 bg-purple-600 text-white hover:bg-purple-500 shadow-[0_0_30px_rgba(147,51,234,0.3)] rounded-sm font-black text-[10px] uppercase tracking-[0.5em] transition-all group"
          >
            Request Deployment <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <footer className="py-24 text-center border-t border-zinc-900 bg-zinc-950">
        <div className="flex justify-center mb-8">
          <NeuralLogo className="w-8 h-8 opacity-20" />
        </div>
        <p className="text-[10px] uppercase font-bold tracking-[0.5em] text-zinc-600">
          Factoric AI is a <a href="https://scalerxlab.com" className="text-zinc-400 hover:text-purple-400 transition-colors">ScalerX Lab</a> Ecosystem Infrastructure.
        </p>
      </footer>
    </main>
  );
}
