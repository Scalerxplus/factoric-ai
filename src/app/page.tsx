"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { NeuralLogo } from "@/components/NeuralLogo";
import { Brain, Radio, Clapperboard, MessageSquare, Workflow, Mic, Terminal, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const TELEMETRY_LOGS = [
  "[SYS] Agent-01: Triage Complete for Healthcare Client. Intent: High.",
  "[SYS] Agent-02: Generating Podcast Script for Future Radio.",
  "[SYS] Agent-03: Audio Sync Active for Media Mafias.",
  "[SYS] Agent-01: Multilingual parsing successful. Routing to Hindi module.",
  "[SYS] Agent-04: Synthesizing voice for ambient broadcast.",
  "[SYS] System: Core intelligence models synced. Latency: 12ms."
];

export default function FactoricAIHome() {
  const [logs, setLogs] = useState<string[]>([]);
  const [logIndex, setLogIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogs((prev) => {
        const newLogs = [...prev, TELEMETRY_LOGS[logIndex % TELEMETRY_LOGS.length]];
        return newLogs.slice(-4); // Keep last 4 logs
      });
      setLogIndex((prev) => prev + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, [logIndex]);

  return (
    <main className="min-h-screen bg-black text-zinc-300 font-sans selection:bg-purple-500/30">
      <Navbar />
      
      {/* 1. THE HERO SECTION (The Intelligence Core) */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-24 px-6 text-center overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
          <div className="w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[100px]" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 max-w-5xl mx-auto space-y-10"
        >
          <div className="inline-block border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 rounded-full">
            <div className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              THE INTELLIGENCE LAYER BY SCALERX LAB
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[80px] font-medium tracking-tighter leading-[0.95] text-white">
            Deploy Custom AI Agents. <br />
            <span className="text-zinc-500">Automate Complex Workflows.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Factoric AI engineers highly-specialized, autonomous agentic workforces. From 24/7 multilingual customer support desks to automated media production pipelines, we build the underlying intelligence that runs enterprise operations on absolute autopilot.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Link 
              href="/contact" 
              className="w-full sm:w-auto px-10 py-5 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase tracking-[0.2em] rounded-sm transition-all shadow-[0_0_30px_rgba(147,51,234,0.3)] hover:shadow-[0_0_40px_rgba(147,51,234,0.5)] flex items-center justify-center gap-3 group"
            >
              Deploy Custom Agent <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/about" 
              className="w-full sm:w-auto px-10 py-5 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-bold text-xs uppercase tracking-[0.2em] rounded-sm transition-all flex items-center justify-center"
            >
              Read Technical Whitepaper
            </Link>
          </div>
        </motion.div>

        {/* 4. THE AGENT TELEMETRY (Live Status Component) - Absolute Bottom */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-md px-6">
          <div className="border border-purple-500/20 bg-black/80 backdrop-blur-md rounded-sm p-4 font-mono text-[10px] sm:text-xs">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-zinc-800">
              <Terminal className="w-3 h-3 text-purple-500" />
              <span className="text-zinc-500 uppercase tracking-widest font-bold">Live Telemetry Feed</span>
            </div>
            <div className="space-y-2 h-[88px] overflow-hidden">
              <AnimatePresence mode="popLayout">
                {logs.map((log, index) => (
                  <motion.div
                    key={`${logIndex}-${index}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-emerald-400/80"
                  >
                    {log}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE PROOF MATRIX: ECOSYSTEM VALIDATION */}
      <section className="py-32 border-t border-zinc-900 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <div className="text-purple-500 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Ecosystem Validation</div>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white">The High-Authority Narrative.</h2>
            <p className="text-zinc-400 mt-4 max-w-2xl">Showcasing how Factoric AI powers the other pillars of ScalerX Lab to prove real-world capability.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                title: "100% Engagement. Zero Lead Leakage.",
                entity: "ScalerX BOS Integration",
                copy: "Factoric AI acts as the sovereign automated triage layer for ScalerX BOS. By autonomously managing omnichannel client interactions, qualifying intent, and instantly routing data, it completely revolutionized the lead acquisition process with zero human error.",
                logoUrl: "https://www.google.com/s2/favicons?domain=scalerxlab.com&sz=128",
                color: "group-hover:border-emerald-500/30 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]"
              },
              {
                title: "High-Fidelity Agentic Media Pipelines",
                entity: "The Future Radio Integration",
                copy: "Powering the next generation of broadcasting. Factoric AI architected custom workflows for The Future Radio to automate the end-to-end content production pipeline for hi-fidelity musical, podcast, and talk-format digital stations, including autonomous AI RJs and hosts.",
                logoUrl: "https://www.google.com/s2/favicons?domain=thefutureradio.com&sz=128",
                color: "group-hover:border-purple-500/30 group-hover:shadow-[0_0_30px_rgba(147,51,234,0.1)]"
              },
              {
                title: "Digitizing & Preserving Vernacular Content",
                entity: "Media Mafias Integration",
                copy: "Empowering local talent through technology. Factoric AI provides deep production support to Media Mafias, deploying specialized AI-powered tools that simplify recording, processing, and preserving hyper-local cultural content for the decentralized creator network.",
                logoUrl: "https://www.google.com/s2/favicons?domain=mediamafias.com&sz=128",
                color: "group-hover:border-red-500/30 group-hover:shadow-[0_0_30px_rgba(239,68,68,0.1)]"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className={`p-8 border border-zinc-800 bg-black rounded-sm group transition-all duration-300 ${item.color}`}
              >
                <div className="mb-6 p-3 bg-zinc-900 border border-zinc-800 rounded-sm w-fit group-hover:bg-zinc-800 transition-colors">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.logoUrl} alt={`${item.entity} Logo`} className="w-6 h-6 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-purple-500 mb-3">{item.entity}</div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{item.copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE CAPABILITIES (The Custom Deployment Engine) */}
      <section className="py-32 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center">
            <div className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.4em] mb-4">The Custom Deployment Engine</div>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white">Specific B2B Offerings.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "24/7 Multilingual Support Desks",
                desc: "Deploy autonomous customer support agents that understand complex intent, handle multi-turn conversations, and speak the local language of your customers fluently. Continuous execution with absolute consistency.",
                icon: MessageSquare
              },
              {
                title: "Agentic Content Pipelines",
                desc: "End-to-end automation for media and enterprise communications. Turn raw data into production-ready scripts, audio assets, and structured media feeds using orchestrated multi-agent systems.",
                icon: Workflow
              },
              {
                title: "Autonomous AI RJs & Hosts",
                desc: "Synthetic voice and context-aware script engines built specifically for digital radio, ambient branding, and live streaming setups. Media that responds and adapts in real-time.",
                icon: Mic
              }
            ].map((pillar, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full border border-purple-500/20 bg-purple-500/5 flex items-center justify-center mb-8 group-hover:border-purple-500/50 group-hover:bg-purple-500/10 transition-all">
                  <pillar.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-4">{pillar.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-medium">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-zinc-900 text-center bg-zinc-950">
        <div className="flex justify-center mb-8">
          <NeuralLogo className="w-8 h-8 opacity-20" />
        </div>
        <p className="text-[10px] uppercase font-bold tracking-[0.4em] text-zinc-600">
          Factoric AI is a <a href="https://scalerxlab.com" className="text-zinc-400 hover:text-purple-400 transition-colors">ScalerX Lab</a> Ecosystem Infrastructure.
        </p>
      </footer>
    </main>
  );
}
