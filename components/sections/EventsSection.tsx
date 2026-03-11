"use client";

import { motion, AnimatePresence } from "framer-motion";
import { events, Event } from "@/lib/events";
import Link from "next/link";
import { useState } from "react";
import { MoreVertical, Circle } from "lucide-react";

const categories = ["ALL", "TECHNICAL", "ENTREPRENEURIAL", "MISCELLANEOUS"] as const;

export function EventsSection() {
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>("ALL");

  const filteredEvents = events.filter(
    (event) => activeCategory === "ALL" || event.category === activeCategory
  );

  return (
    <section id="events" className="py-24 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4 z-10 relative">
        {/* Header matching image */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
          <div className="flex items-center gap-4">
            <div className="relative flex items-center justify-center">
              <Circle size={48} className="text-white/20" />
              <div className="absolute w-2 h-2 bg-orange-500 rounded-full" />
            </div>
            <h2 className="text-4xl md:text-6xl font-orbitron font-black text-white tracking-widest uppercase">
              ARENAS OF EXCELLENCE
            </h2>
          </div>
          <div className="flex-1 h-[1px] bg-white/10 hidden md:block" />
        </div>

        {/* Filters matching image */}
        <div className="flex flex-wrap gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-8 py-3 font-mono text-xs tracking-widest uppercase transition-all duration-300 group ${
                activeCategory === cat ? "text-black" : "text-white/50 hover:text-white"
              }`}
            >
              <div 
                className={`absolute inset-0 skew-x-[-20deg] border transition-all duration-300 ${
                  activeCategory === cat 
                    ? "bg-[#C4A484] border-[#C4A484]" 
                    : "bg-white/5 border-white/10 group-hover:bg-white/10"
                }`}
              />
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        {/* Grid matching image card style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#1A1A1A] border border-white/5"
              >
                <Link href={`/events/${event.slug}`} className="block w-full h-full">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${event.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

                  {/* Vertical Label */}
                  <div className="absolute right-0 top-0 bottom-0 w-12 flex items-center justify-center border-l border-white/10 bg-black/40 backdrop-blur-sm">
                    <span className="rotate-90 origin-center whitespace-nowrap font-mono text-[10px] tracking-[0.5em] text-white/40 uppercase">
                      {event.category}
                    </span>
                  </div>

                  {/* Top Badges */}
                  <div className="absolute top-6 left-6 flex items-center gap-4">
                    <div className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 font-mono text-[9px] tracking-widest text-white uppercase">
                      COMPETITIONS
                    </div>
                    <MoreVertical size={16} className="text-white/40" />
                  </div>

                  {/* Bottom Content */}
                  <div className="absolute bottom-10 left-8 right-16">
                    <h3 className="text-3xl font-orbitron font-black text-white leading-tight tracking-tight uppercase group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <div className="mt-4 flex items-center gap-3">
                      <div className="w-8 h-[1px] bg-white/20" />
                      <p className="text-[10px] font-mono text-white/40 uppercase tracking-[0.2em]">
                        {event.description.length > 80 ? event.description.substring(0, 80) + "..." : event.description}
                      </p>
                    </div>
                  </div>

                  {/* Subtle Border Glow */}
                  <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 transition-colors pointer-events-none" />
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
