"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, Shield, Zap, Target, Eye, Info, BookOpen, MessageSquare, Layout, LogIn, Rocket, Headphones, Video, Music } from "lucide-react";
import { NeuralLogo } from "./NeuralLogo";

interface CommandCenterProps {
  isOpen: boolean;
  onClose: () => void;
}

const sections = [
  {
    title: "AI Agents",
    links: [
      { name: "Customer Support Agent", href: "/contact", icon: Zap, desc: "24/7 Autonomous Executives" },
      { name: "Podcast Generator", href: "/contact", icon: Headphones, desc: "Synthetic Audio Production" },
      { name: "Vlog Synthesizer", href: "/contact", icon: Video, desc: "Faceless Video Creation" },
      { name: "Music Composer", href: "/contact", icon: Music, desc: "Original Tracks & Jingles" },
    ]
  },
  {
    title: "The Laboratory",
    links: [
      { name: "About Factoric AI", href: "/about", icon: Info, desc: "Our mission and capabilities" },
      { name: "Use Cases", href: "/", icon: BookOpen, desc: "Discover what you can build" },
      { name: "Strategy Consult", href: "/contact", icon: MessageSquare, desc: "Speak with our architects" },
    ]
  },
  {
    title: "Deployment",
    links: [
      { name: "Request Deployment", href: "/contact", icon: Rocket, desc: "Start building your agent" },
      { name: "Client Login", href: "/login", icon: LogIn, desc: "Access your dashboard" },
      { name: "Talk to our AI", href: "/chat", icon: MessageSquare, desc: "Test the intelligence" },
    ]
  }
];

export const CommandCenter = ({ isOpen, onClose }: CommandCenterProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-[#0D0D0D]/95 backdrop-blur-3xl overflow-y-auto px-6 py-12 md:py-24"
        >
          {/* Background Decorations */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/5 rounded-full blur-[120px]" />
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            {/* Header */}
            <div className="flex items-center justify-between mb-12 md:mb-24 pb-8 border-b border-white/5">
              <div className="flex items-center gap-4">
                <NeuralLogo className="w-10 h-10" />
                <div>
                  <div className="text-sm font-black uppercase tracking-[0.4em] text-white">Command Center</div>
                  <div className="text-[8px] font-bold text-purple-500/40 uppercase tracking-[0.2em]">Agent Orchestration Console</div>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
              >
                <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform" />
              </button>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
              {sections.map((section, idx) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                  className="space-y-12"
                >
                  <div className="text-[10px] uppercase font-black tracking-[0.5em] text-white/20 pl-4 border-l border-purple-500/40">
                    {section.title}
                  </div>
                  <div className="space-y-2 md:space-y-4">
                    {section.links.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={onClose}
                        className="group block p-4 md:p-6 rounded-sm hover:bg-white/[0.03] border border-transparent hover:border-white/5 transition-all"
                      >
                        <div className="flex items-start gap-4 mb-2">
                          <link.icon className="w-4 h-4 text-purple-500 mt-1 opacity-60 group-hover:opacity-100 transition-opacity" />
                          <div className="text-base md:text-lg font-medium text-white/80 group-hover:text-white transition-colors">{link.name}</div>
                        </div>
                        <p className="text-[8px] md:text-[10px] text-white/20 uppercase font-bold tracking-widest pl-8">{link.desc}</p>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Footer Status */}
            <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex gap-12">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                  <span className="text-[8px] font-black uppercase tracking-widest text-white/30">System Status: Optimal</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                  <span className="text-[8px] font-black uppercase tracking-widest text-white/30">Factoric API: Synced</span>
                </div>
              </div>
              <div className="text-[8px] font-black uppercase tracking-[0.3em] text-white/10">
                &copy; 2024 FACTORIC AI • CORE ARCHITECTURE ACCESS
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
