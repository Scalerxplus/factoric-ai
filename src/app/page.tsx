"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { NeuralLogo } from "@/components/NeuralLogo";
import { Bot, Headphones, Video, Music, Sparkles, ArrowRight, Zap, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#F2F0E9] selection:bg-astra-green/30 font-sans">
      <Navbar />
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center pt-32 pb-24 px-6 text-center overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-astra-green/5 rounded-full blur-[160px] pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 space-y-12"
        >
          <NeuralLogo className="w-12 h-12 mx-auto mb-8 opacity-80" />
          <div className="text-astra-green text-[10px] font-black uppercase tracking-[0.6em] mb-4 animate-pulse">Factoric AI Platform</div>
          <h1 className="text-4xl md:text-[80px] font-black tracking-tighter leading-[0.95] silver-gradient mb-8 text-balance">
            Deploy Autonomous AI Agents <br className="hidden md:block" /> for Any Task.
          </h1>
          
          <div className="bg-white/[0.03] border-y border-white/5 py-4 mb-8 overflow-hidden">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-xs md:text-sm uppercase font-black tracking-[0.4em] text-emerald-500">
                Your Need, Our Solution. From Customer Support to Media Production.
              </h2>
            </div>
          </div>

          <p className="text-lg md:text-xl text-white/40 max-w-4xl mx-auto font-medium leading-relaxed mb-16">
            Train custom LLMs to act as your 24/7 autonomous customer support executives, or deploy creative AI agents to produce high-quality vlogs, podcasts, and music. We build the intelligence so you can focus on growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-8 justify-center items-center">
            <Link 
              href="/contact" 
              className="w-full sm:w-auto px-8 md:px-16 py-5 md:py-6 bg-astra-green text-white hover:bg-astra-green/80 green-glow rounded-sm font-black text-[10px] uppercase tracking-[0.5em] transition-all text-center"
            >
              Deploy Your Agent
            </Link>
            <div className="flex items-center gap-2">
              <Link 
                href="/about" 
                className="text-white/60 hover:text-white font-black text-[10px] uppercase tracking-[0.5em] transition-all"
              >
                Explore Capabilities {"->"}
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. Trust Strip (Existing Clients) */}
      <section className="py-12 border-b border-white/5 bg-black/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-8 text-center">
          <h3 className="text-xs md:text-sm font-black uppercase tracking-[0.4em] text-white/40 mb-4">
            Trusted by Forward-Thinking Brands
          </h3>
          <div className="flex flex-wrap justify-center gap-16 md:gap-32 items-center grayscale opacity-50 group hover:opacity-80 transition-opacity">
            <div className="flex flex-col items-center">
              <span className="text-sm md:text-lg font-black uppercase tracking-widest text-white">ScalerX Lab</span>
            </div>
            <div className="h-4 w-[1px] bg-white/20 hidden md:block" />
            <div className="flex flex-col items-center">
              <span className="text-sm md:text-lg font-black uppercase tracking-widest text-white">The Future Radio</span>
            </div>
            <div className="h-4 w-[1px] bg-white/20 hidden md:block" />
            <div className="flex flex-col items-center">
              <span className="text-sm md:text-lg font-black uppercase tracking-widest text-white">Media Mafias</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Core Capabilities */}
      <section className="section-spacing border-b border-white/5 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-24 text-center md:text-left">
            <div className="text-astra-green text-[10px] font-black uppercase tracking-[0.5em] mb-8">Agent Catalog</div>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight">Everything You Need. <br />Powered by AI.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 relative">
            {[
              { 
                title: "24/7 Support Executive", 
                desc: "Train an LLM on your company's data. It handles customer inquiries, support tickets, and sales routing autonomously, around the clock.",
                icon: Bot,
                accent: "text-astra-green",
                border: "border-astra-green/20"
              },
              { 
                title: "Podcast Generation", 
                desc: "Generate professional-grade podcasts with lifelike synthetic voices. Feed it a script or an article, and get a ready-to-publish audio show.",
                icon: Headphones,
                accent: "text-astra-blue",
                border: "border-astra-blue/20"
              },
              { 
                title: "Vlog & Video Production", 
                desc: "Create faceless vlogs or AI-avatar driven videos for YouTube, Instagram Reels, and TikTok without ever stepping in front of a camera.",
                icon: Video,
                accent: "text-astra-gold",
                border: "border-astra-gold/20"
              },
              { 
                title: "Music Composition", 
                desc: "Produce original background tracks, jingles, or full-length music tailored to your brand's specific vibe and emotional requirements.",
                icon: Music,
                accent: "text-emerald-500",
                border: "border-emerald-500/20"
              }
            ].map((feature, i) => (
              <div key={i} className={`p-10 glass-card border ${feature.border} rounded-sm bg-black group hover:bg-white/[0.02] transition-all relative`}>
                <div className={`mb-6 p-4 rounded-full bg-white/[0.02] w-fit border border-white/5`}>
                  <feature.icon className={`w-8 h-8 ${feature.accent}`} />
                </div>
                <div className={`text-2xl font-bold mb-4`}>{feature.title}</div>
                <p className="text-sm text-white/60 leading-relaxed font-medium mb-8">{feature.desc}</p>
                <div className="text-[10px] font-black uppercase tracking-widest text-white/20 group-hover:text-astra-green transition-colors flex items-center gap-2">
                  Learn More <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Comparison Strip */}
      <section className="section-spacing border-b border-white/5 bg-black">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="p-12 border border-white/5 rounded-sm bg-red-500/[0.02] group">
              <div className="text-accent-red text-[10px] font-black uppercase tracking-[0.5em] mb-8">The Old Way</div>
              <ul className="space-y-4">
                {["Hiring expensive human support teams", "Renting studios and buying gear", "Paying royalties for generic music", "Weeks of video editing and rendering"].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-white/40 text-sm font-medium">
                    <div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-accent-red/50 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-12 border border-astra-green/20 rounded-sm bg-astra-green/[0.02] group relative overflow-hidden">
              <div className="absolute inset-0 bg-astra-green/5 blur-3xl opacity-20" />
              <div className="relative z-10">
                <div className="text-astra-green text-[10px] font-black uppercase tracking-[0.5em] mb-8">The Factoric Way</div>
                <ul className="space-y-4">
                  {["Zero-latency autonomous 24/7 support", "Instant podcast generation via text", "Original royalty-free music creation", "Automated vlog production in minutes"].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-white font-medium text-sm">
                      <CheckCircle2 className="w-4 h-4 text-astra-green shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className="section-spacing bg-astra-green/[0.02]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <div className="space-y-4">
            <div className="text-astra-green text-[10px] font-black uppercase tracking-[0.5em]">Start Building</div>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-tight">
              Ready to Deploy Your <br />
              <span className="text-astra-green">AI Agents?</span>
            </h2>
            <p className="text-xl text-white/40 leading-relaxed font-medium max-w-2xl mx-auto">
              Tell us what you need. We'll train and deploy the perfect AI model for your business.
            </p>
          </div>

          <div className="pt-8">
            <Link 
              href="/contact"
              className="px-8 md:px-16 py-4 md:py-6 bg-astra-green text-white hover:bg-astra-green/80 rounded-sm font-black text-[10px] uppercase tracking-[0.5em] transition-all green-glow inline-block"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-32 text-center border-t border-white/5">
        <div className="flex justify-center mb-12">
          <NeuralLogo className="w-8 h-8 opacity-20" />
        </div>
        <p className="text-[10px] uppercase font-bold tracking-[0.5em] text-white/10">
          Factoric AI is a product of <a href="https://scalerxlab.com" className="text-white/20 hover:text-astra-green transition-colors">ScalerX Lab</a>. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
