"use client";

import Link from "next/link";
import { Youtube, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/50 backdrop-blur-lg pt-16 pb-8 relative overflow-hidden">
      <div className="container mx-auto px-4 z-10">
        
        {/* Association Section from Image 5 */}
        <div className="flex flex-col items-center mb-16 border-b border-white/5 pb-16 relative">
          <div className="absolute left-1/2 -top-16 w-[1px] h-16 bg-gradient-to-b from-transparent to-[#00f0ff]/50 -translate-x-1/2" />
          <div className="inline-block relative mb-8">
            <h3 className="text-sm md:text-base font-mono font-bold text-white/50 tracking-[0.4em] uppercase px-8 py-2 border border-white/10 rounded-sm bg-[#05050f]/60 backdrop-blur-md">
              IN ASSOCIATION WITH
            </h3>
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-8 h-[1px] bg-[#00f0ff]/50" />
            <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-8 h-[1px] bg-[#00f0ff]/50" />
          </div>
          <div className="bg-white/90 px-10 py-4 rounded-sm">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#00205B]">AIRBUS</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 font-sans mb-12">
          <div className="md:col-span-2">
            <Link href="#" className="inline-block mb-6">
              <span className="text-3xl font-orbitron font-bold uppercase tracking-widest text-white">DRONE<span className="text-[#00f0ff] ml-1">WARS</span></span>
            </Link>
            <p className="text-white/60 text-sm max-w-sm leading-relaxed font-mono">
              The premier International FPV Drone Racing League pushing the boundaries of aerial motorsport.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-orbitron font-bold tracking-widest mb-6">QUICK LINKS</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li><Link href="#" className="hover:text-[#00f0ff] transition-colors">Home</Link></li>
              <li><Link href="#about" className="hover:text-[#00f0ff] transition-colors">About Us</Link></li>
              <li><Link href="#structure" className="hover:text-[#00f0ff] transition-colors">Specifications</Link></li>
              <li><Link href="#prizes" className="hover:text-[#00f0ff] transition-colors">Prizes</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-orbitron font-bold tracking-widest mb-6">CONTACT</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li>support@dronewars.com</li>
              <li>+1 (555) 123-4567</li>
              <li className="pt-4 flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#00f0ff]/20 flex items-center justify-center transition-colors border border-white/10 hover:border-[#00f0ff]/50 text-white hover:text-[#00f0ff]"><Twitter size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#00f0ff]/20 flex items-center justify-center transition-colors border border-white/10 hover:border-[#00f0ff]/50 text-white hover:text-[#00f0ff]"><Linkedin size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#00f0ff]/20 flex items-center justify-center transition-colors border border-white/10 hover:border-[#00f0ff]/50 text-white hover:text-[#00f0ff]"><Instagram size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#00f0ff]/20 flex items-center justify-center transition-colors border border-white/10 hover:border-[#00f0ff]/50 text-white hover:text-[#00f0ff]"><Youtube size={18} /></a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center text-white/40 text-xs py-6 border-t border-white/10">
          <p>&copy; {new Date().getFullYear()} Drone Wars International League. All rights reserved.</p>
          <p>Made with love by Ansh Mahajan & Shourya Singh</p>
        </div>
      </div>
    </footer>
  );
}
