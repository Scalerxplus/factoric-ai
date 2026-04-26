import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, LayoutGrid } from "lucide-react";
import { NeuralLogo } from "./NeuralLogo";
import { CommandCenter } from "./CommandCenter";

export const Navbar = () => {
  const [isCommandCenterOpen, setIsCommandCenterOpen] = useState(false);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isCommandCenterOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isCommandCenterOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 md:py-8 px-6 bg-[#0D0D0D]/60 backdrop-blur-2xl border-b border-white/5 shadow-[0_4px_30px_rgba(16,185,129,0.05)]"
      >
        <div className="flex items-center justify-between w-full max-w-6xl">
          <Link href="/" className="flex items-center gap-4 group">
            <NeuralLogo className="w-8 h-8" />
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[#F2F0E9]">Factoric AI</span>
          </Link>
          
          <div className="flex items-center gap-8 md:gap-12">
            <button 
              onClick={() => setIsCommandCenterOpen(true)}
              className="flex items-center gap-3 text-[10px] uppercase font-black tracking-[0.3em] text-[#F2F0E9]/60 hover:text-emerald-500 transition-all group"
            >
              <LayoutGrid className="w-4 h-4 group-hover:rotate-90 transition-transform" />
              <span className="hidden md:inline">Systems</span>
            </button>

            <div className="flex items-center gap-6">
              <Link 
                href="/blog" 
                className="hidden md:block text-[10px] uppercase font-bold tracking-[0.3em] text-[#F2F0E9]/60 hover:text-[#F2F0E9] transition-colors"
              >
                Insights
              </Link>
              <Link 
                href="/login" 
                className="hidden md:block text-[10px] uppercase font-bold tracking-[0.3em] text-[#F2F0E9]/60 hover:text-[#F2F0E9] transition-colors"
              >
                Sign In
              </Link>
              <Link 
                href={`/chat?prompt=${encodeURIComponent("how Factoric AI's Agentic AI can help a business engaging leads, recording and analysing data, doing billing, reciving patients and also watching over your cctv feeds to inform you right before something critical happens.")}`} 
                className="px-6 py-2.5 text-[10px] uppercase font-black tracking-[0.3em] bg-emerald-600 text-white hover:bg-emerald-500 shadow-xl shadow-emerald-900/20 transition-all rounded-sm"
              >
                Deploy
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      <CommandCenter 
        isOpen={isCommandCenterOpen} 
        onClose={() => setIsCommandCenterOpen(false)} 
      />
    </>
  );
};
