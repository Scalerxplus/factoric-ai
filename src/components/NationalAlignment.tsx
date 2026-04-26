"use client";

import { motion } from "framer-motion";

export const NationalAlignment = () => {
  return (
    <section className="w-full py-24 border-t border-[#1F1F1F] bg-[#0D0D0D]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32 opacity-20 grayscale hover:opacity-40 transition-opacity duration-700">
          {/* Startup India Placeholder (Text-based for maximum minimal aesthetic) */}
          <div className="flex flex-col items-center gap-2 group cursor-default">
            <div className="text-xl font-light tracking-[0.2em] uppercase border border-[#1F1F1F] px-4 py-2">
              Startup<span className="font-bold text-accent-red">India</span>
            </div>
            <div className="text-[6px] font-black uppercase tracking-[0.5em] text-[#F2F0E9]/40 group-hover:text-accent-red transition-colors">DPIIT VALIDATED</div>
          </div>

          {/* Make in India Placeholder */}
          <div className="flex flex-col items-center gap-2 group cursor-default">
            <div className="text-xl font-light tracking-[0.2em] uppercase border border-[#1F1F1F] px-4 py-2">
              MakeIn<span className="font-bold text-accent-red">India</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="text-[6px] font-black uppercase tracking-[0.5em] text-[#F2F0E9]/40 group-hover:text-accent-red transition-colors">CENTRAL INDIA HUB</div>
              <div className="text-[5px] font-bold text-[#F2F0E9]/10 tracking-[0.2em] group-hover:text-[#F2F0E9]/20 transition-colors uppercase">UDYAM-MP-38-0052942</div>
            </div>
          </div>

          {/* Digital India Placeholder */}
          <div className="flex flex-col items-center gap-2 group cursor-default">
            <div className="text-xl font-light tracking-[0.2em] uppercase border border-[#1F1F1F] px-4 py-2">
              Digital<span className="font-bold text-accent-red">India</span>
            </div>
            <div className="text-[6px] font-black uppercase tracking-[0.5em] text-[#F2F0E9]/40 group-hover:text-accent-red transition-colors">IndiaAI PARTNER</div>
          </div>
        </div>

        <p className="mt-16 text-[10px] md:text-xs uppercase font-bold tracking-[0.4em] text-[#F2F0E9]/20 text-center max-w-2xl leading-relaxed">
          Empowering the Industrial Heart of Central India through National AI Initiatives.
        </p>
      </div>
    </section>
  );
};
