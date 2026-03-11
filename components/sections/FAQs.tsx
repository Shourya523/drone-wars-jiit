"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "IS THERE A QUALIFYING TO BE ABLE TO PARTICIPATE IN THE RACE?", a: "Details about qualifying will be updated soon." },
  { q: "IS THERE A LIMIT ON PRACTICE?", a: "Practice limits are defined in the rulebook." },
  { q: "ARE LEDS MANDATORY?", a: "Yes, addressable LEDs are required as per specifications." },
  { q: "WHAT IS THE RACE FORMAT?", a: "The race format includes qualifiers, semi-finals, and finals." },
  { q: "WHAT IS HOLESHOT?", a: "Holeshot is the first checkpoint in the track layout." },
  { q: "HOW DO I SET UP EVERYTHING FOR THE SPEC RACE IN BETAFLIGHT?", a: "We will provide a detailed Betaflight setup guide before the event." }
];

export function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 z-10 max-w-4xl">
        <div className="flex justify-center mb-16">
          <SectionHeading glowColor="primary">FAQs</SectionHeading>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-white/10 overflow-hidden bg-transparent transition-colors hover:border-[#00f0ff]/30">
              <button 
                className="w-full px-6 py-5 flex justify-between items-center text-left"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-[#00f0ff]/50">[{String(idx + 1).padStart(2, '0')}]</span>
                  <span className="font-orbitron text-sm md:text-base text-white/90 tracking-wider uppercase pr-8">{faq.q}</span>
                </div>
                <ChevronDown className={`text-[#00f0ff]/50 flex-shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-[#00f0ff]' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-white/50 font-mono text-sm border-t border-white/5 pt-4 ml-10">
                      // {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
