"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { NeuralLogo } from "./NeuralLogo";

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center py-8 px-6 bg-[#0D0D0D]/80 backdrop-blur-md border-b border-[#1F1F1F]"
    >
      <div className="flex items-center justify-between w-full max-w-6xl">
        <Link href="/" className="flex items-center gap-4 group">
          <NeuralLogo className="w-8 h-8" />
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[#F2F0E9]">Factoric AI</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-12 text-[10px] uppercase font-bold tracking-[0.3em] text-[#F2F0E9]/40">
          <Link href="/about" className="hover:text-[#F2F0E9] transition-colors">About</Link>
          <Link href="/philosophy" className="hover:text-[#F2F0E9] transition-colors">Philosophy</Link>
          <Link href="/pricing" className="hover:text-[#F2F0E9] transition-colors">Pricing</Link>
          <Link href="/contact" className="hover:text-[#F2F0E9] transition-colors">Contact</Link>
        </div>

        <div className="flex items-center gap-6">
          <Link 
            href="/login" 
            className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#F2F0E9]/60 hover:text-[#F2F0E9] transition-colors"
          >
            Sign In
          </Link>
          <Link 
            href="/login?signup=true" 
            className="px-6 py-2.5 text-[10px] uppercase font-black tracking-[0.3em] bg-[#F2F0E9] text-[#0D0D0D] hover:bg-white transition-all rounded-sm"
          >
            Deploy
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};
