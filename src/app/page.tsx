"use client";
import { About } from "@/components/about";
import { HeroSection } from "@/components/hero-section";
import { NavbarComp } from "@/components/navbar";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <div className="w-full overflow-auto">
      {/* <NavbarComp /> */}
      <HeroSection />
      <About />
      {/* <Projects /> */}
    </div>
  );
}
