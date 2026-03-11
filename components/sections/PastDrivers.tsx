"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const drivers = [
  { name: "ANSH MAHAJAN", image: "https://ui-avatars.com/api/?name=Killian+Rousseau&size=200&background=random&color=fff" },
  { name: "SHOURYA SINGH", image: "https://ui-avatars.com/api/?name=Leon+Schubert&size=200&background=random&color=fff" }
];

export function PastDrivers() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 z-10 flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <Button variant="outline" className="rounded-full px-8 neon-border border-white/20 hover:border-[#00f0ff]">RULE BOOK</Button>
          <Button variant="outline" className="rounded-full px-8 neon-border border-white/20 hover:border-[#00f0ff]">TRACK</Button>
        </div>

        <SectionHeading glowColor="none">PAST DRIVERS</SectionHeading>

        <div className="flex flex-wrap justify-center gap-12 mt-12 w-full max-w-4xl">
          {drivers.map((driver, idx) => (
            <div key={idx} className="flex flex-col items-center group cursor-pointer">
              <div className="w-56 h-56 rounded-none overflow-hidden mb-6 transition-all duration-500 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 border border-white/10 group-hover:border-[#00f0ff]/50 relative">
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#00f0ff] opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#00f0ff] opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <img src={driver.image} alt={driver.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-orbitron font-bold text-white/50 group-hover:text-white tracking-widest uppercase transition-colors">{driver.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
