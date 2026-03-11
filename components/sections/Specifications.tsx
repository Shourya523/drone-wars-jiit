"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

const specs = [
  {
    id: "01",
    title: "FRAME",
    desc: "Any 5 inch frame, weighing minimum 500 grams AUW. Addressable LEDs required for identification.",
    color: "primary",
  },
  {
    id: "02",
    title: "MOTORS",
    desc: "Any motor with a stator volume the same as 2207 motor or 2306 motor specifications.",
    color: "secondary",
  },
  {
    id: "03",
    title: "ELECTRONICS",
    desc: "Any esc with D-shot and RPM limit enabled. Any betaflight flight controller. HDZERO or analog VTX/camera.",
    color: "accent",
  },
  {
    id: "04",
    title: "BATTERIES",
    desc: "Any 6S 1400MAH capacity or less battery unit.",
    color: "yellow",
  },
  {
    id: "05",
    title: "PROPELLERS",
    desc: "Gemfan hurricane V2 51466 prop. Standard issue available for purchase at the venue.",
    color: "cyan",
  }
];

export function Specifications() {
  return (
    <section id="structure" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex justify-center mb-16">
          <SectionHeading glowColor="primary">SPECIFICATIONS</SectionHeading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specs.map((spec) => (
            <Card key={spec.id} className="p-8 flex flex-col items-start border-none relative group overflow-hidden bg-white/5 backdrop-blur-sm">
              <div 
                className="absolute top-0 left-0 w-1 h-full transition-colors duration-500" 
                style={{ backgroundColor: `var(--color-${spec.color})` }}
              />
              <div 
                className="text-4xl font-mono opacity-10 font-bold mb-4 group-hover:opacity-30 transition-opacity"
                style={{ color: `var(--color-${spec.color})` }}
              >
                [{spec.id}]
              </div>
              <h3 className="text-xl font-orbitron font-bold text-white mb-4 tracking-widest">{spec.title}</h3>
              <p className="text-white/60 font-mono text-xs leading-relaxed uppercase tracking-wide">{spec.desc}</p>
              
              {/* Subtle hover glow */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at center, var(--color-${spec.color}), transparent)` }}
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
