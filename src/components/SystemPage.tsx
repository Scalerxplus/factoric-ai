"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { NeuralLogo } from "@/components/NeuralLogo";
import { LucideIcon, ArrowRight, Zap, Shield, Target, Cpu, TrendingUp } from "lucide-react";
import Link from "next/link";

interface Capability {
  title: string;
  desc: string;
}

interface UseCase {
  industry: string;
  scenario: string;
}

interface SystemPageProps {
  id: string;
  title: string;
  headline: string;
  description: string;
  icon: LucideIcon;
  color: string;
  accent: string;
  capabilities: Capability[];
  useCases: UseCase[];
  roi: string;
}

export const SystemPage = ({ 
  id, title, headline, description, icon: Icon, color, accent, capabilities, useCases, roi 
}: SystemPageProps) => {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#F2F0E9] font-sans overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] ${accent}/5 rounded-full blur-[160px] pointer-events-none`} />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row items-center gap-16"
          >
            <div className="flex-grow space-y-12 text-center md:text-left">
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <Icon className={`w-12 h-12 ${color}`} />
                <div className={`${color} text-[10px] font-black uppercase tracking-[0.6em]`}>{id} Active</div>
              </div>
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none silver-gradient">
                {headline}
              </h1>
              <p className="text-xl text-white/40 max-w-2xl font-medium leading-relaxed">
                {description}
              </p>
              <div className="pt-8">
                <Link 
                  href="/onboarding"
                  className={`px-16 py-6 ${accent.replace('text-', 'bg-')} text-white rounded-sm font-black text-[10px] uppercase tracking-[0.5em] transition-all purple-glow inline-block`}
                >
                  Deploy {id} Node
                </Link>
              </div>
            </div>
            
            {/* Abstract Graphic */}
            <div className="w-full md:w-1/2 aspect-square glass-card rounded-sm flex items-center justify-center relative overflow-hidden">
              <div className={`absolute inset-0 ${accent}/5 animate-pulse`} />
              <Icon className={`w-48 h-48 ${color} opacity-20`} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-32 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-24">
            <div className={`${color} text-[10px] font-black uppercase tracking-[0.5em] mb-8`}>Operational Logic</div>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight">Core Capabilities.</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-12 glass-card rounded-sm border-t border-white/10 group hover:border-astra-green transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mb-8 group-hover:bg-astra-green/20 transition-colors">
                  <Zap className="w-3.5 h-3.5 text-white/40 group-hover:text-astra-green" />
                </div>
                <h3 className="text-xl font-bold mb-4">{cap.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed font-medium">
                  {cap.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div>
              <div className={`${color} text-[10px] font-black uppercase tracking-[0.5em] mb-8`}>Mission Execution</div>
              <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-12">Universal Scenarios.</h2>
              <div className="space-y-8">
                {useCases.map((uc, i) => (
                  <div key={i} className="p-8 glass-card rounded-sm border-l-2 border-l-white/10 group hover:border-l-astra-green transition-all">
                    <div className="text-[10px] font-black text-astra-green uppercase tracking-widest mb-2">{uc.industry}</div>
                    <div className="text-lg font-medium text-white/60 group-hover:text-white transition-colors">{uc.scenario}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-12 glass-card rounded-sm border border-white/5 relative overflow-hidden group">
              <div className={`absolute top-0 right-0 w-32 h-32 ${accent}/10 blur-3xl`} />
              <div className="relative z-10">
                <Target className={`w-8 h-8 ${color} mb-8`} />
                <h3 className="text-2xl font-bold mb-6">Structural ROI</h3>
                <p className="text-lg text-white/40 leading-relaxed font-medium mb-12 italic">
                  "{roi}"
                </p>
                <div className="flex items-center gap-4 pt-8 border-t border-white/5">
                  <Cpu className="w-4 h-4 text-white/20" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Astra Engine Validated</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-48 text-center bg-white/[0.01] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter silver-gradient mb-12">
            INITIALIZE YOUR <br /> {title.toUpperCase()} TODAY.
          </h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            <Link 
              href="/onboarding"
              className={`px-16 py-6 ${accent.replace('text-', 'bg-')} text-white rounded-sm font-black text-[10px] uppercase tracking-[0.5em] transition-all`}
            >
              Start Deployment
            </Link>
            <Link 
              href="/contact"
              className="px-16 py-6 border border-white/10 text-white/40 hover:text-white transition-all rounded-sm font-black text-[10px] uppercase tracking-[0.5em]"
            >
              System Consultation
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-32 text-center border-t border-white/5">
        <div className="flex justify-center mb-12">
          <NeuralLogo className="w-8 h-8 opacity-20" />
        </div>
        <p className="text-[10px] uppercase font-bold tracking-[0.5em] text-white/10">
          &copy; 2024 FACTORIC AI • {id} ARCHITECTURE
        </p>
      </footer>
    </main>
  );
};
