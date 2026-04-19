
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ROLE_COLORS = {
  color1: {
    border: "border-[#00f0ff]",
    bg: "from-[#0a0a0a] via-[#181a20] to-[#0a0a0a]",
    text: "text-[#00f0ff]",
    glow: "shadow-[0_0_24px_2px_rgba(0,240,255,0.18)]",
  },
  color2: {
    border: "border-[#ffea00]",
    bg: "from-[#181818] via-[#1a1a1a] to-[#181818]",
    text: "text-[#ffea00]",
    glow: "shadow-[0_0_24px_2px_rgba(255,234,0,0.18)]",
  },
  color3: {
    border: "border-[#ff4d00]",
    bg: "from-[#181818] via-[#1a1a1a] to-[#181818]",
    text: "text-[#ff4d00]",
    glow: "shadow-[0_0_24px_2px_rgba(255,77,0,0.18)]",
  },
  color4: {
    border: "border-[#bd00ff]",
    bg: "from-[#181818] via-[#1a1a1a] to-[#181818]",
    text: "text-[#bd00ff]",
    glow: "shadow-[0_0_24px_2px_rgba(189,0,255,0.18)]",
  },
};

const DEVELOPERS = [
  {
    name: "Mohammed Ali",
    role: "Outreach Head",
    color: "color1",
    img: "",
  },
  {
    name: "Yasharth Singh",
    role: "Management Head",
    color: "color2",
    img: "",
  },
  {
    name: "Vaibhav Katariya",
    role: "Events Head",
    color: "color3",
    img: "",
  },
  {
    name: "Rakshit Suneja",
    role: "Creative Head",
    color: "color4",
    img: "",
  },
  {
    name: "Vardaan Saxena",
    role: "Web Developer",
    color: "color1",
    img: "/uploads/vardaan.jpg",
  },
  {
    name: "Shourya Singh",
    role: "Web Developer",
    color: "color2",
    img: "/devs/web2.jpg",
  },
  {
    name: "Ansh Mahajan",
    role: "Web Developer",
    color: "color3",
    img: "/devs/web3.jpg",
  },
  {
    name: "Shreshta Gupta",
    role: "Automation Developer",
    color: "color4",
    img: "",
  },
];

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Leads", value: "leads" },
  { label: "Web Developers", value: "Web Developer" },
  { label: "Automation Developer", value: "Automation Developer" },
];

export function MeetTheDevelopers() {
  const [filter, setFilter] = useState("all");
  const filtered =
    filter === "all"
      ? DEVELOPERS
      : filter === "leads"
        ? DEVELOPERS.filter((dev) =>
            [
              "Outreach Head",
              "Management Head",
              "Events Head",
              "Creative Head"
            ].includes(dev.role)
          )
        : DEVELOPERS.filter((dev) => dev.role === filter);

  return (
    <section id="developers" className="py-16 relative z-10 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_20%_10%,rgba(0,240,255,0.08),transparent_60%),radial-gradient(circle_at_80%_90%,rgba(255,77,0,0.10),transparent_60%)] animate-pulse" />
      <div className="container mx-auto px-4 flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-orbitron font-black text-[#00f0ff] mb-6 text-center uppercase tracking-widest drop-shadow-lg"
        >
          Meet the Developers
        </motion.h2>
        <div className="flex gap-3 mb-10 flex-wrap justify-center">
          {FILTERS.map((f, i) => (
            <motion.button
              key={f.value}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              className={`px-6 py-2 rounded-full font-bold font-mono text-base uppercase tracking-widest border-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#00f0ff]/60 ${
                filter === f.value
                  ? "bg-[#00f0ff] text-black border-[#00f0ff] shadow-lg"
                  : "bg-black/60 text-[#00f0ff] border-[#00f0ff]/40 hover:bg-[#00f0ff]/10"
              }`}
              onClick={() => setFilter(f.value)}
            >
              {f.label}
            </motion.button>
          ))}
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {filtered.map((dev, idx) => {
            const color = ROLE_COLORS[dev.color] || ROLE_COLORS["color1"];
            return (
              <motion.div
                key={dev.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.04, boxShadow: "0 0 32px 4px rgba(0,255,255,0.18)" }}
                className={`flex flex-col items-center bg-gradient-to-br ${color.bg} rounded-2xl p-6 md:p-7 border-2 ${color.border} ${color.glow} transition-all duration-300`}
              >
                <div className={`w-28 h-28 mb-3 relative rounded-full overflow-hidden border-4 ${color.border} shadow-lg animate-pulse-slow`}>
                  {dev.img ? (
                    <Image
                      src={dev.img}
                      alt={dev.name}
                      fill
                      className="object-cover"
                      sizes="128px"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-black/60 text-white/30 font-orbitron text-3xl">?</div>
                  )}
                </div>
                <h3
                  className={`text-2xl font-extrabold font-orbitron mb-1 text-center drop-shadow-lg ${dev.role === "Automation Developer" ? "bg-gradient-to-r from-[#00ff99] via-[#00f0ff] to-[#00ff99] bg-clip-text text-transparent animate-gradient-x" : "text-white"}`}
                  style={dev.role === "Automation Developer" ? { letterSpacing: "0.15em" } : {}}
                >
                  {dev.name}
                </h3>
                <p className={`font-mono text-base uppercase tracking-widest text-center ${color.text} drop-shadow-md`}>
                  {dev.role}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
