import { cn } from "@/lib/utils";
import React from "react";

export function Card({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div 
      className={cn(
        "relative rounded-sm border border-white/5 bg-[#05050f]/60 backdrop-blur-md overflow-hidden",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none",
        "hover:border-[#00f0ff]/30 transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
