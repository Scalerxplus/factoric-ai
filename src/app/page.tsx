"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { NeuralLogo } from "@/components/NeuralLogo";
import { ImpactCalculator } from "@/components/ImpactCalculator";
import { SecurityArchitecture } from "@/components/SecurityArchitecture";
import { NationalAlignment } from "@/components/NationalAlignment";
import { AstraTerminal } from "@/components/AstraTerminal";
import { ValueGap } from "@/components/ValueGap";
import { ArrowRight, Plus, Brain, Cpu, Shield, Activity, Zap } from "lucide-react";
import Link from "next/link";

const trinity = [
  {
    tier: "BOS M",
    title: "The Brain",
    desc: "WhatsApp & Social Intelligence. Captures digital intent and maps it to structural outcomes.",
    details: "Single User • 30-Day Free Trial",
    accent: "border-astra-purple shadow-astra-purple/10",
    icon: Brain,
    color: "text-astra-purple",
    cta: "Initialize M Logic"
  },
  {
    tier: "BOS X",
    title: "The Nervous System",
    desc: "Telephony & Billing Sync. Integrates capital integrity engines to identify and close revenue leakage.",
    details: "5 Users Standard • +₹699/mo per extra",
    accent: "border-astra-blue shadow-astra-blue/10",
    icon: Activity,
    color: "text-astra-blue",
    cta: "Initialize X Logic"
  },
  {
    tier: "BOS Z",
    title: "The Sentinel",
    desc: "Computer Vision & Security. Total structural preservation and autonomous governance of physical assets.",
    details: "10 Users Standard • +₹999/mo per extra",
    accent: "border-astra-gold shadow-astra-gold/10",
    icon: Shield,
    color: "text-astra-gold",
    cta: "Initialize Z Logic"
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
          <h1 className="text-5xl md:text-[120px] font-black tracking-tighter leading-[0.9] silver-gradient mb-12">
            YOUR BUSINESS. <br />
            ON AUTOPILOT.
          </h1>
          <p className="text-lg md:text-2xl text-white/40 max-w-3xl mx-auto font-medium leading-relaxed mb-16">
            While legacy systems wait for human input, Factoric AI executes mission-critical tasks autonomously. Deploy your 24/7 Digital Workforce today.
          </p>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <Link 
              href="/chat" 
              className="px-16 py-6 bg-astra-purple text-white hover:bg-astra-purple/80 purple-glow rounded-sm font-black text-[10px] uppercase tracking-[0.5em] transition-all"
            >
              Deploy Astra-1
            </Link>
            <Link 
              href="/philosophy" 
              className="px-16 py-6 border border-white/10 text-white/60 hover:text-white hover:border-white/20 rounded-sm font-black text-[10px] uppercase tracking-[0.5em] transition-all backdrop-blur-sm"
            >
              Watch Intel Demo
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 2. The Live "Mission Log" (Astra Terminal) */}
      <section className="pb-48">
        <AstraTerminal />
      </section>

      {/* 3. The Trinity (BOS M, X, Z) */}
      <section className="max-w-7xl mx-auto px-6 section-spacing border-t border-white/5">
        <div className="text-center mb-32">
          <div className="text-white/20 text-[10px] font-black uppercase tracking-[0.5em] mb-8">Structural Tiers</div>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight">The Trinity Architecture.</h2>
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

        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <Link 
            href="/contact" 
            className="px-16 py-5 bg-emerald-600 text-white hover:bg-emerald-500 shadow-xl shadow-emerald-900/20 rounded-sm font-black text-[10px] uppercase tracking-[0.4em] transition-all"
          >
            Strategy Consult
          </Link>
          <Link 
            href="/login" 
            className="px-16 py-5 hairline-border text-[#F2F0E9] rounded-sm font-black text-[10px] uppercase tracking-[0.4em] hover:bg-white/[0.05] transition-all"
          >
            Enterprise Login
          </Link>
        </div>
      </section>

      {/* 5. The Desi Footer (ScalerX Special) */}
      <section className="section-spacing border-t border-white/5 bg-accent-red/5">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <div className="text-accent-red text-[10px] font-black uppercase tracking-[0.5em]">The Bharat Protocol</div>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight">
            Bharat ke vyapaariyon ke liye, <br />
            <span className="text-accent-red">Bharat ka AI.</span>
          </h2>
          <p className="text-xl text-white/60 leading-relaxed font-medium max-w-2xl mx-auto">
            Raipur ke hosptials ho ya Bhilai ki factories—ab har dhandha banega 'High-Tech'. Join the Factoric Revolution.
          </p>
          <div className="pt-12">
            <Link 
              href="/chat"
              className="px-16 py-6 bg-white text-black hover:bg-white/90 rounded-sm font-black text-[10px] uppercase tracking-[0.5em] transition-all"
            >
              Start Your Revolution
            </Link>
          </div>
        </div>
      </section>

      <NationalAlignment />

      <footer className="py-32 text-center border-t border-[#1F1F1F]">
        <div className="flex justify-center mb-12">
          <NeuralLogo className="w-8 h-8 opacity-20" />
        </div>
        <p className="text-[10px] uppercase font-bold tracking-[0.5em] text-[#F2F0E9]/10">
          &copy; 2024 FACTORIC AI • ARCHITECTURAL RECORDS
        </p>
      </footer>
    </main>
  );
}
