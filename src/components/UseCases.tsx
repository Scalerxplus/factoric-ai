"use client";

import { motion } from "framer-motion";
import { Hospital, Building2, Scale } from "lucide-react";

const deployments = [
  {
    product: "Factoric AI AXON",
    title: "Cognitive Triage",
    description: "Managing high-volume patient intake via autonomous intent-mapping. Eliminating human bottlenecks in the critical first 30 seconds of engagement.",
  },
  {
    product: "Factoric AI COMMAND",
    title: "Marketing Automation",
    description: "Automating customer engagement and lead capturing for MSMEs. Designed to manage heavy social media marketing flows with absolute precision and zero-manual effort.",
  },
  {
    product: "Factoric AI VELOCITY",
    title: "Capital Integrity",
    description: "Automating invoicing and zero-fee collection protocols. Identifying and closing revenue leakage points in real-time billing cycles.",
  },
  {
    product: "Factoric AI CORE",
    title: "Sovereign Infrastructure",
    description: "Deploying isolated, DPDPA-compliant database environments for high-security healthcare and legal data requirements.",
  }
];

export const UseCases = () => {
  return (
    <section className="section-spacing border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-32">
          <h2 className="title-understated max-w-4xl">
            Our autonomous layers are engineered for specific institutional requirements.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-32">
          {deployments.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 1 }}
              className="flex flex-col"
            >
              <div className="text-[10px] uppercase font-black tracking-[0.4em] text-accent-red mb-8">{item.product}</div>
              <div className="text-xl font-medium mb-6">{item.title}</div>
              <p className="text-sm text-[#F5F5F7]/40 leading-relaxed font-medium max-w-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
