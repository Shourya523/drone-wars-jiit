"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "primary" | "secondary" | "accent" | "yellow" | "cyan" | "none";
}

export function SectionHeading({ children, className, glowColor = "primary" }: SectionHeadingProps) {
  return (
    <div className={cn("relative inline-block mb-12", className)}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className={cn(
          "text-3xl md:text-5xl font-orbitron font-bold tracking-[0.2em] uppercase text-white"
        )}
      >
        {children}
      </motion.h2>
      {glowColor !== "none" && (
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, duration: 0.8, ease: "circOut" }}
          className="absolute -bottom-2 left-0 h-[2px] w-full origin-left"
          style={{ 
            background: `linear-gradient(to right, transparent, var(--color-${glowColor}), transparent)` 
          }}
        />
      )}
    </div>
  );
}
