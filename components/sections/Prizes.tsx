"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export function Prizes() {
  return (
    <section id="prizes" className="py-24 relative overflow-hidden bg-[#03030a]">
      <div className="container mx-auto px-4 z-10 text-center relative">
        <SectionHeading glowColor="primary">PRIZE POOL</SectionHeading>
        
        <div className="mt-12 mb-20">
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-orbitron font-black text-white tracking-tighter uppercase relative inline-block">
            $50,000
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/20 -translate-y-1/2" />
          </h2>
          <p className="text-sm md:text-base text-[#00f0ff] font-mono tracking-[0.3em] mt-6 uppercase">Total Cash Prizes // Authorized Allocation</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-end">
          <Card className="p-8 border-none bg-[#080812] order-2 md:order-1 h-[280px] flex flex-col justify-end transition-all hover:bg-white/5 relative group">
            <div className="absolute top-0 right-0 p-4 font-mono text-white/20 text-xl font-bold">[02]</div>
            <h3 className="text-xl font-orbitron font-bold text-white/70 mb-2 uppercase tracking-wider">RUNNER UP</h3>
            <p className="text-3xl text-white font-bold font-mono">$10,000</p>
          </Card>
          
          <Card className="p-10 border-none bg-[#0a0a15] order-1 md:order-2 h-[340px] flex flex-col justify-end relative overflow-hidden transition-all hover:bg-white/5 group border-t-2 border-t-[#00f0ff]">
            <div className="absolute top-0 right-0 p-4 font-mono text-[#00f0ff]/50 text-2xl font-bold">[01]</div>
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#00f0ff]/10 to-transparent pointer-events-none" />
            <h3 className="text-2xl font-orbitron font-bold text-[#00f0ff] mb-2 uppercase tracking-widest text-shadow-[0_0_5px_#00f0ff]">CHAMPION</h3>
            <p className="text-5xl text-white font-bold font-mono">$30,000</p>
            <div className="mt-6 inline-block w-full py-2 bg-transparent text-white/50 text-xs font-mono uppercase tracking-widest border border-white/10 self-center group-hover:bg-[#00f0ff]/10 group-hover:border-[#00f0ff]/30 group-hover:text-[#00f0ff] transition-colors">Sector Alpha First Place</div>
          </Card>
          
          <Card className="p-8 border-none bg-[#05050f] order-3 md:order-3 h-[240px] flex flex-col justify-end transition-all hover:bg-white/5 relative group">
            <div className="absolute top-0 right-0 p-4 font-mono text-white/20 text-xl font-bold">[03]</div>
            <h3 className="text-lg font-orbitron font-bold text-white/50 mb-2 uppercase tracking-wider">3RD PLACE</h3>
            <p className="text-2xl font-bold text-white/80 font-mono">$5,000</p>
          </Card>
        </div>
      </div>
    </section>
  );
}
