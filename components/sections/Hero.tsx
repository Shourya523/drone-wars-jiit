"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center">
          {/* Animated Tech Ornaments */}
          <div className="relative mb-12">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute -inset-4 border border-white/5 bg-white/[0.02] backdrop-blur-3xl rounded-full"
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative px-6 py-2 border border-white/10 bg-black/40 text-[10px] font-mono tracking-[0.4em] uppercase text-primary flex items-center gap-3"
            >
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <motion.span
                    key={i}
                    animate={{ opacity: [0.2, 1, 0.2] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                    className="w-1 h-1 bg-primary rounded-full"
                  />
                ))}
              </div>
              Flight Protocol Active // 2026
            </motion.div>
          </div>

          {/* Main Title Overhaul */}
          <div className="relative mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl md:text-[10rem] font-orbitron font-black text-white tracking-tighter leading-none"
            >
              DRONE<br />
              <span className="relative inline-block">
                WARS
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 0.8, ease: "circOut" }}
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary to-accent"
                />
              </span>
            </motion.h1>
          </div>

          {/* Minimalist Subtext */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex flex-col items-center gap-4 mb-16"
          >
            <p className="text-white/40 font-mono text-xs uppercase tracking-[0.3em] max-w-lg leading-loose">
              High Intensity FPV Racing. <br />
              Custom Circuits. Elite Pilots. Zero Margin for Error.
            </p>
            <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent" />
          </motion.div>

          {/* Refined CTAs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-8"
          >
            <Button size="lg" className="h-16 px-12 text-sm tracking-[0.2em] font-orbitron font-bold relative group overflow-hidden bg-white text-black hover:text-white border-none rounded-none transition-colors duration-500">
              <span className="relative z-10">ENTER ARENA</span>
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Button>
            <Button size="lg" variant="outline" className="h-16 px-12 text-sm tracking-[0.2em] font-orbitron font-bold rounded-none border-white/10 hover:bg-white/5 transition-all text-white/60 hover:text-white">
              SQUAD REGISTRY
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Side Decorative Elements */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-24 opacity-20">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex flex-col gap-2">
            <div className="w-8 h-[1px] bg-white" />
            <div className="font-mono text-[8px] uppercase tracking-widest text-white/50">DATA_CH_{i+102}</div>
          </div>
        ))}
      </div>
      
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-end gap-24 opacity-20 text-right">
        <div className="rotate-90 origin-right translate-x-12 translate-y-12 font-mono text-[8px] uppercase tracking-[0.5em] text-white">
          Lat: -34.6037 // Lon: -58.3816
        </div>
      </div>
    </section>
  );
}
