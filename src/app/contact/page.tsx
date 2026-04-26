"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { NeuralLogo } from "@/components/NeuralLogo";
import { Mail, Globe, MapPin, Loader2 } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import { ChatInterface } from "@/components/ChatInterface";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-[#F2F0E9]">
      <Navbar />
      
      <section className="relative flex flex-col items-center justify-center pt-64 pb-32 px-6">
        <div className="text-[10px] uppercase font-black tracking-[0.4em] text-accent-red mb-8">
          Inquiry
        </div>
        <h1 className="text-4xl md:text-8xl font-medium tracking-tight text-center mb-12 max-w-4xl leading-[1.05]">
          Connect with the <br />
          <span className="text-[#F2F0E9]/40">Architecture Team.</span>
        </h1>
        <p className="text-lg md:text-2xl text-[#F2F0E9]/40 text-center max-w-2xl mb-16 font-medium leading-relaxed">
          Initialize a structural consult to identify the right BOS tier for your institution.
        </p>
      </section>

      <section className="section-spacing border-t border-[#1F1F1F]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-24">
            <div className="space-y-12">
              <div className="text-accent-red text-[10px] font-black uppercase tracking-[0.4em]">Inquiry Channels</div>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 hairline-border rounded-sm flex items-center justify-center group-hover:bg-white/[0.05] transition-colors">
                    <Mail className="w-5 h-5 text-accent-red/40" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-widest text-[#F2F0E9]/20 mb-1">Electronic Mail</div>
                    <div className="text-lg font-medium">hello@factoricai.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 hairline-border rounded-sm flex items-center justify-center group-hover:bg-white/[0.05] transition-colors">
                    <Globe className="w-5 h-5 text-accent-red/40" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-widest text-[#F2F0E9]/20 mb-1">Digital Domain</div>
                    <div className="text-lg font-medium">factoricai.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 hairline-border rounded-sm flex items-center justify-center group-hover:bg-white/[0.05] transition-colors">
                    <MapPin className="w-5 h-5 text-accent-red/40" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-widest text-[#F2F0E9]/20 mb-1">Structural Hub</div>
                    <div className="text-lg font-medium">Raipur • Global Deployment</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hairline-border rounded-sm bg-black relative overflow-hidden group">
              <div className="absolute inset-0 bg-emerald-500/5 blur-3xl pointer-events-none" />
              <div className="relative z-10 p-2 md:p-6">
                <Suspense fallback={
                  <div className="flex h-[600px] items-center justify-center">
                    <Loader2 className="w-8 h-8 animate-spin text-accent-red" />
                  </div>
                }>
                  <ChatInterface 
                    compact={true} 
                    defaultTier="EXECUTIVE"
                    defaultPrompt="You are a top executive from McKinsey handling the sales for Factoric AI. Engage me and help me find the right BOS tier (M, X, or Z) for my business. Ask me about my current operational bottlenecks." 
                  />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-32 text-center border-t border-[#1F1F1F]">
        <div className="flex justify-center mb-12">
          <NeuralLogo className="w-8 h-8 opacity-20" />
        </div>
        <p className="text-[10px] uppercase font-bold tracking-[0.5em] text-[#F2F0E9]/10">
          &copy; 2024 FACTORIC AI • COMMUNICATIONS HUB
        </p>
      </footer>
    </main>
  );
}
