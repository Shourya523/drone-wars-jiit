"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function AboutEvent() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 z-10">
        <div className="flex justify-center mb-16">
          <SectionHeading glowColor="secondary">About Us</SectionHeading>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 text-center text-lg md:text-xl text-white/80 font-mono tracking-wide font-light leading-relaxed border-white/5">
            <p className="mb-6">
              THE INTERNATIONAL FPV DRONE RACING LEAGUE IS BACK AT TECHFEST, IIT BOMBAY! PREPARE TO WITNESS ONE OF THE MOST THRILLING AERIAL RACING SPECTACLES AS HIGH-SPEED FPV DRONES BLAZE THROUGH A DEMANDING, PRECISION-CRAFTED TRACK.
            </p>
            <p className="mb-8 text-white/50 text-base md:text-lg">
              DESIGN AND BUILD YOUR OWN FPV DRONE TO GO HEAD-TO-HEAD WITH TOP PILOTS FROM AROUND THE WORLD. FEEL THE ADRENALINE SURGE AS YOU RACE THROUGH CUSTOM-DESIGNED COURSES AT LIGHTNING SPEED!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-10">
              <Button variant="outline">WHATSAPP GROUP</Button>
              <Button variant="primary">INSTRUCTIONS FOR RACE</Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
