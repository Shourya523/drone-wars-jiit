"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Events", href: "#events" },
    { name: "About", href: "#about" },
    { name: "Structure", href: "#structure" },
    { name: "Prizes", href: "#prizes" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="#" className="flex items-center gap-2 group">
            <span className="text-2xl font-orbitron font-bold uppercase tracking-widest text-white">DRONE<span className="text-primary ml-1">WARS</span></span>
          </Link>

          <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm font-orbitron text-white/50 hover:text-primary uppercase tracking-widest transition-colors">
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex">
            <Button size="sm" variant="primary" className="bg-primary hover:bg-primary/80 border-none">Register Now</Button>
          </div>

          <button className="md:hidden text-white cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          className="md:hidden absolute top-20 left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-white/10 origin-top p-4 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-lg font-orbitron text-white hover:text-primary uppercase tracking-widest p-2" onClick={() => setIsOpen(false)}>
              {link.name}
            </Link>
          ))}
          <Button size="md" variant="primary" className="w-full mt-4 bg-primary border-none">Register Now</Button>
        </motion.div>
      )}
    </motion.nav>
  );
}
