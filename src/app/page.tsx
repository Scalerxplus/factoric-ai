"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { NeuralLogo } from "@/components/NeuralLogo";
import { SecurityArchitecture } from "@/components/SecurityArchitecture";
import { AstraTerminal } from "@/components/AstraTerminal";
import { ValueGap } from "@/components/ValueGap";
import { ArrowRight, Plus, Brain, Cpu, Shield, Activity, Zap, TrendingUp, Globe } from "lucide-react";
import Link from "next/link";

const trinity = [
  {
    tier: "BOS M",
    title: "The Cognitive Front",
    desc: "The 24/7 Intelligence layer. Native omnichannel engagement that extracts intent, qualifies leads via BANT, and scores your pipeline with lethal precision.",
    details: "Universal Node • Deployment Ready",
    accent: "border-astra-purple shadow-astra-purple/10",
    icon: Brain,
    color: "text-astra-purple",
    cta: "Deploy Cognitive Layer"
  },
  {
    tier: "BOS X",
    title: "The Revenue Synthesis",
    desc: "The operational backbone. It bridges the gap between conversation and capital—syncing cloud telephony, billing systems, and payment gateways into a single flow.",
    details: "Scale Module • Global Attribution",
    accent: "border-astra-blue shadow-astra-blue/10",
    icon: Activity,
    color: "text-astra-blue",
    cta: "Deploy Synthesis Engine"
  },
  {
    tier: "BOS Z",
    title: "The Kinetic Sentinel",
    desc: "Absolute security. Computer Vision that transforms your existing cameras into predictive security agents. If there is an anomaly, you don't just see it; you prevent it.",
    details: "Sovereign Tier • Absolute Overwatch",
    accent: "border-astra-gold shadow-astra-gold/10",
    icon: Shield,
    color: "text-astra-gold",
    cta: "Deploy Sentinel Logic"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#F2F0E9] selection:bg-astra-purple/30 font-sans">
      <Navbar />
      
      {/* 1. The Hero: Sovereign Command */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-48 px-6 text-center overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-astra-purple/5 rounded-full blur-[160px] pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 space-y-12"
        >
          <NeuralLogo className="w-16 h-16 mx-auto mb-16 opacity-80" />
          <div className="text-astra-purple text-[10px] font-black uppercase tracking-[0.6em] mb-8 animate-pulse">Sovereign Architecture Active</div>
          <h1 className="text-5xl md:text-[90px] font-black tracking-tighter leading-[0.9] silver-gradient mb-12">
            SOFTWARE IS THE PAST. <br />
            AUTONOMOUS LABOR IS THE FUTURE.
          </h1>
          <p className="text-lg md:text-2xl text-white/40 max-w-4xl mx-auto font-medium leading-relaxed mb-16">
            Stop managing static data and start deploying intelligence. Factoric AI replaces human latency with High-Cognition Agents that qualify leads, synchronize revenue, and secure your infrastructure—instantly, globally, 24/7.
          </p>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <Link 
              href="/chat" 
              className="px-16 py-6 bg-astra-purple text-white hover:bg-astra-purple/80 purple-glow rounded-sm font-black text-[10px] uppercase tracking-[0.5em] transition-all"
            >
              Deploy The Workforce
            </Link>
            <Link 
              href="/pricing" 
              className="px-16 py-6 border border-white/10 text-white/60 hover:text-white hover:border-white/20 rounded-sm font-black text-[10px] uppercase tracking-[0.5em] transition-all backdrop-blur-sm"
            >
              Reduce Operational Decay
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 2. The Pulse Section: Why Factoric? */}
      <section className="section-spacing border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="space-y-6">
              <div className="p-4 bg-astra-purple/10 w-fit rounded-full mb-8">
                <Zap className="w-6 h-6 text-astra-purple" />
              </div>
              <h3 className="text-2xl font-bold">Humans Sleep. <br />Opportunities Don't.</h3>
              <p className="text-white/40 leading-relaxed font-medium">
                While your competitors wait for business hours, Factoric agents are already closing deals. We don't just "respond"; we convert intent into revenue before the lead even cools down.
              </p>
            </div>
            <div className="space-y-6">
              <div className="p-4 bg-astra-blue/10 w-fit rounded-full mb-8">
                <TrendingUp className="w-6 h-6 text-astra-blue" />
              </div>
              <h3 className="text-2xl font-bold">From Data Entry <br />to Mission Execution.</h3>
              <p className="text-white/40 leading-relaxed font-medium">
                Traditional CRMs are expensive digital graveyards. Factoric is a living workforce. Our agents don't wait for you to type; they think, analyze, and act on your behalf.
              </p>
            </div>
            <div className="space-y-6">
              <div className="p-4 bg-astra-gold/10 w-fit rounded-full mb-8">
                <Globe className="w-6 h-6 text-astra-gold" />
              </div>
              <h3 className="text-2xl font-bold">Absolute Operational <br />Sovereignty.</h3>
              <p className="text-white/40 leading-relaxed font-medium">
                Scale your empire without increasing your headcount. One founder. One engine. Global reach. That is the Factoric advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Interactive Proof: Mission Log */}
      <section className="py-48">
        <AstraTerminal />
      </section>

      {/* 4. The Tiers: High-Stakes Modules */}
      <section className="max-w-7xl mx-auto px-6 section-spacing border-t border-white/5">
        <div className="text-center mb-32">
          <div className="text-white/20 text-[10px] font-black uppercase tracking-[0.5em] mb-8">Structural Capabilities</div>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight">Deployment Modules.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {trinity.map((item, i) => (
            <motion.div
              key={item.tier}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`p-12 glass-card rounded-sm flex flex-col group border-t-2 ${item.accent} transition-all hover:-translate-y-2`}
            >
              <div className="mb-12 flex justify-between items-start">
                <item.icon className={`w-8 h-8 ${item.color}`} />
                <div className={`text-[10px] font-black tracking-widest uppercase ${item.color}/40`}>{item.tier}</div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <div className={`text-[10px] font-black uppercase tracking-widest mb-6 ${item.color}/60`}>{item.details}</div>
              <p className="text-sm text-white/40 leading-relaxed font-medium mb-12 flex-grow">
                {item.desc}
              </p>
              <Link 
                href={`/chat?tier=${item.tier.split(' ')[1]}`}
                className={`text-[8px] font-black uppercase tracking-[0.4em] ${item.color} group-hover:underline`}
              >
                {item.cta} →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. The McKinsey "Value Gap" Section */}
      <ValueGap />

      {/* Security Architecture Overlay */}
      <SecurityArchitecture />

      {/* 5. Global Infrastructure Closing */}
      <section className="section-spacing border-t border-white/5 bg-astra-purple/[0.02]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <div className="text-astra-purple text-[10px] font-black uppercase tracking-[0.5em]">The Sovereign Asset</div>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-tight">
            Engineering the <br />
            <span className="text-astra-purple">Autonomous Empire.</span>
          </h2>
          <p className="text-xl text-white/40 leading-relaxed font-medium max-w-2xl mx-auto">
            Scale your institutional logic across borders. No headcount latency. No capital leakage. Total operational overwatch.
          </p>
          <div className="pt-12">
            <Link 
              href="/onboarding"
              className="px-16 py-6 bg-astra-purple text-white hover:bg-astra-purple/80 rounded-sm font-black text-[10px] uppercase tracking-[0.5em] transition-all purple-glow"
            >
              Initialize Global Infrastructure
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-32 text-center border-t border-white/5">
        <div className="flex justify-center mb-12">
          <NeuralLogo className="w-8 h-8 opacity-20" />
        </div>
        <p className="text-[10px] uppercase font-bold tracking-[0.5em] text-white/10">
          &copy; 2024 FACTORIC AI • SOVEREIGN INFRASTRUCTURE
        </p>
      </footer>
    </main>
  );
}
