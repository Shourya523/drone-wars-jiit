"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function RegistrationCTA() {
  return (
    <section className="py-32 relative overflow-hidden border-t border-b border-white/10 bg-[#03030a]">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_25%,rgba(255,255,255,0.02)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.02)_75%,rgba(255,255,255,0.02)_100%)] bg-[length:20px_20px] pointer-events-none opacity-20" />
      <div className="container mx-auto px-4 z-10 text-center relative flex flex-col items-center">
        
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-[#00f0ff] mb-8" />
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-orbitron font-black text-white mb-6 tracking-tighter uppercase"
        >
          READY TO <span className="text-[#00f0ff]">RACE?</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sm md:text-base text-white/50 max-w-2xl mx-auto mb-12 font-mono tracking-widest uppercase"
        >
          JOIN THE ELITE PILOTS FROM AROUND THE WORLD. PROVE YOUR SKILLS ON THE ULTIMATE FPV RACING TRACK.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <Button size="lg" variant="primary" className="px-12 py-5 text-lg">REGISTER NOW</Button>
          <Button size="lg" variant="secondary" className="px-12 py-5 text-lg">CONTACT US</Button>
        </motion.div>
      </div>
    </section>
  );
}
