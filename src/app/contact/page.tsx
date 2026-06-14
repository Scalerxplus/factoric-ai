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
      
      <section className="relative pt-64 pb-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="text-[10px] uppercase font-black tracking-[0.5em] text-astra-green">Architect Consultation</div>
            <h1 className="text-5xl md:text-8xl font-medium tracking-tight leading-[0.95]">
              Let's Discuss Your <br />
              <span className="text-white/40">Operational Bottlenecks.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/40 max-w-4xl mx-auto font-medium leading-relaxed">
              Whether you want to unify inquiry handling, automate bookings, or completely eliminate billing leakage, our architects are ready to map Factoric AI to your workflows.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="section-spacing border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="p-12 glass-card border border-white/5 rounded-sm">
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Full Name</label>
                  <input type="text" className="w-full bg-black border border-white/10 rounded-sm p-4 text-sm focus:border-astra-green outline-none transition-colors" placeholder="e.g. John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Company / Hospital Name</label>
                  <input type="text" className="w-full bg-black border border-white/10 rounded-sm p-4 text-sm focus:border-astra-green outline-none transition-colors" placeholder="e.g. Apollo Healthcare" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Industry</label>
                  <select className="w-full bg-black border border-white/10 rounded-sm p-4 text-sm focus:border-astra-green outline-none transition-colors appearance-none">
                    <option>Healthcare</option>
                    <option>Real Estate</option>
                    <option>Service Enterprise</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Preferred Contact Method</label>
                  <select className="w-full bg-black border border-white/10 rounded-sm p-4 text-sm focus:border-astra-green outline-none transition-colors appearance-none">
                    <option>WhatsApp</option>
                    <option>Phone Call</option>
                    <option>Email</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Current Biggest Bottleneck</label>
                <textarea className="w-full bg-black border border-white/10 rounded-sm p-4 text-sm focus:border-astra-green outline-none transition-colors h-32" placeholder="e.g. Lead drop, Billing leakage, Front-desk friction..."></textarea>
              </div>

              <button className="w-full py-6 bg-astra-green text-white font-black text-[10px] uppercase tracking-[0.5em] rounded-sm hover:bg-astra-green/80 transition-all green-glow">
                Submit Request
              </button>
            </form>
          </div>
        </div>
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
