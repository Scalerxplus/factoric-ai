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
        className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 md:py-8 px-4 md:px-6 bg-[#0D0D0D]/60 backdrop-blur-2xl border-b border-white/5 shadow-[0_4px_30px_rgba(16,185,129,0.05)]"
      >
        <div className="flex items-center justify-between w-full max-w-6xl">
          <Link href="/" className="flex items-center gap-3 md:gap-4 group shrink-0">
            <NeuralLogo className="w-6 h-6 md:w-8 md:h-8" />
            <div className="flex flex-col">
              <span className="text-[10px] md:text-sm font-semibold tracking-[0.2em] uppercase text-[#F2F0E9]">Factoric AI</span>
              <span className="text-[6px] md:text-[7px] font-mono font-bold tracking-widest text-purple-500 uppercase">Intel: ScalerX Lab</span>
            </div>
          </Link>
          
          <div className="flex items-center gap-8 md:gap-12">
            <button 
              onClick={() => setIsCommandCenterOpen(true)}
              className="flex items-center gap-3 text-[10px] uppercase font-black tracking-[0.3em] text-[#F2F0E9]/60 hover:text-purple-500 transition-all group"
            >
              <LayoutGrid className="w-4 h-4 group-hover:rotate-90 transition-transform" />
              <span className="hidden md:inline">Agents</span>
            </button>

            <div className="flex items-center gap-6">
              <Link 
                href="/about" 
                className="hidden md:block text-[10px] uppercase font-bold tracking-[0.3em] text-[#F2F0E9]/60 hover:text-[#F2F0E9] transition-colors"
              >
                About
              </Link>
              <Link 
                href="/industries" 
                className="hidden md:block text-[10px] uppercase font-bold tracking-[0.3em] text-[#F2F0E9]/60 hover:text-[#F2F0E9] transition-colors"
              >
                Industries
              </Link>
              <Link 
                href="/login" 
                className="hidden md:block text-[10px] uppercase font-bold tracking-[0.3em] text-[#F2F0E9]/60 hover:text-[#F2F0E9] transition-colors"
              >
                Sign In
              </Link>
              <Link 
                href={`/chat?prompt=${encodeURIComponent("I want to deploy an autonomous AI agent for my business.")}`} 
                className="px-4 md:px-6 py-2 md:py-2.5 text-[8px] md:text-[10px] uppercase font-black tracking-[0.3em] bg-purple-600 text-white hover:bg-purple-500 shadow-xl shadow-purple-900/20 transition-all rounded-sm whitespace-nowrap"
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
