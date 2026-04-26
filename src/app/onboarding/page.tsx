"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { NeuralLogo } from "@/components/NeuralLogo";
import { Smartphone, ShieldCheck, Zap, ArrowRight, QrCode } from "lucide-react";
import Link from "next/link";

export default function OnboardingPage() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-[#F2F0E9] flex flex-col">
      <Navbar />
      
      <section className="flex-grow flex flex-col items-center justify-center px-6 pt-32 pb-20">
        <div className="max-w-5xl w-full">
          <div className="flex flex-col md:flex-row gap-24 items-center">
            
            {/* Left Column: Initialization Media */}
            <div className="flex-1 w-full">
              <div className="text-[10px] uppercase font-black tracking-[0.4em] text-[#F2F0E9]/20 mb-12">
                Phase 01: System Initialization
              </div>
              <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-8">
                <span className="text-accent-red">I</span>nitialize Sovereign Systems.
              </h1>
              <p className="text-lg text-[#F2F0E9]/40 font-medium leading-relaxed mb-16 max-w-xl">
                Scan the enterprise signature below to authorize your sovereign logic node. Zero leakage, instant operational visibility.
              </p>

              <div className="p-12 hairline-border rounded-sm bg-white/[0.01] relative overflow-hidden group max-w-sm">
                <div className="absolute top-4 left-4 text-[6px] font-black tracking-[0.3em] text-[#F2F0E9]/10 uppercase">Auth Layer: 4096-RSA</div>
                <div className="bg-[#F2F0E9] p-8 rounded-sm mb-8 flex justify-center">
                  <QrCode className="w-48 h-48 text-[#0D0D0D]" />
                </div>
                <div className="flex justify-between items-center text-[8px] font-black tracking-[0.2em] text-[#F2F0E9]/20 uppercase">
                  <span>Sync Status: Ready</span>
                  <span className="text-accent-red">Neural Link Active</span>
                </div>
              </div>
            </div>

            {/* Right Column: Architectural Validations */}
            <div className="flex-1 space-y-16">
              {[
                {
                  icon: Smartphone,
                  title: "Sync Workforce Hub",
                  desc: "Connect your primary communication channel to the Factoric Workforce neural triage engine.",
                },
                {
                  icon: ShieldCheck,
                  title: "Sovereign Compliance",
                  desc: "Enterprise-grade security with DPDPA and IndiaAI-ready data isolation protocols.",
                },
                {
                  icon: Zap,
                  title: "Instant Operational ROI",
                  desc: "Observe 200% throughput increases across your institutional communication network.",
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="shrink-0 p-4 hairline-border rounded-sm bg-white/[0.01] group-hover:bg-accent-red/5 transition-colors">
                    <item.icon className="w-6 h-6 text-[#F2F0E9]/40 group-hover:text-accent-red transition-colors" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-sm font-black uppercase tracking-[0.3em] text-[#F2F0E9]/80">{item.title}</h3>
                    <p className="text-xs text-[#F2F0E9]/30 leading-relaxed font-medium max-w-xs">{item.desc}</p>
                  </div>
                </div>
              ))}

              <div className="pt-12">
                <Link 
                  href="/" 
                  className="w-full md:w-auto inline-flex items-center justify-between gap-12 px-12 py-5 bg-emerald-600 text-white hover:bg-emerald-500 shadow-xl shadow-emerald-900/20 rounded-sm font-black text-[10px] uppercase tracking-[0.4em] transition-all group"
                >
                  Continue to Hub <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <footer className="py-20 text-center border-t border-[#1F1F1F]">
        <div className="flex justify-center mb-8">
          <NeuralLogo className="w-6 h-6 opacity-10" />
        </div>
        <p className="text-[8px] uppercase font-bold tracking-[0.5em] text-[#F2F0E9]/10">
          FACTORIC AI • INITIALIZATION ARCHIVE • 2024
        </p>
      </footer>
    </main>
  );
}
