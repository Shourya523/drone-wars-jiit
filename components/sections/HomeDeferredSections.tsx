"use client";

import { AboutEvent } from "@/components/sections/AboutEvent";
import { EventsSection } from "@/components/sections/EventsSection";
import { FAQs } from "@/components/sections/FAQs";
import { Prizes } from "@/components/sections/Prizes";
import { ContactUs } from "@/components/sections/ContactUs";
import { Footer } from "@/components/sections/Footer";

export function HomeDeferredSections() {
  return (
    <>
      <AboutEvent />
      <EventsSection />
      <FAQs />
      <Prizes />
      <ContactUs />
      <Footer />
    </>
  );
}
