"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

export interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles = "relative inline-flex items-center justify-center font-orbitron tracking-widest uppercase transition-all duration-300 ease-out overflow-hidden";
    
    const variants = {
      primary: "bg-black/40 text-[#00f0ff] border border-[#00f0ff]/50 hover:bg-[#00f0ff]/5 hover:border-[#00f0ff] cursor-pointer before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-[#00f0ff]/20 before:to-transparent before:-translate-x-full outline-none hover:before:translate-x-full before:transition-transform before:duration-700 before:ease-in-out shadow-[0_0_10px_rgba(0,240,255,0.1)] hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]",
      secondary: "bg-black/40 text-[#bd00ff] border border-[#bd00ff]/50 hover:bg-[#bd00ff]/5 hover:border-[#bd00ff] cursor-pointer before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-[#bd00ff]/20 before:to-transparent before:-translate-x-full outline-none hover:before:translate-x-full before:transition-transform before:duration-700 before:ease-in-out shadow-[0_0_10px_rgba(189,0,255,0.1)] hover:shadow-[0_0_15px_rgba(189,0,255,0.2)]",
      outline: "bg-transparent text-white/70 border border-white/10 hover:text-white hover:bg-white/5 hover:border-white/30 backdrop-blur-sm cursor-pointer",
    };

    const sizes = {
      sm: "px-4 py-2 text-xs tracking-wider",
      md: "px-8 py-3 text-sm font-semibold tracking-widest",
      lg: "px-10 py-4 text-sm font-bold tracking-[0.2em]",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        <span className="relative z-10 block">{children}</span>
      </motion.button>
    );
  }
);
Button.displayName = "Button";
