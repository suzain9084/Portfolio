import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { BackgroundGradient } from "./ui/background-gradient";

export function HeroSection() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="w-full flex justify-evenly">
        <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight items-center mt-20">
          What&apos;s cooler than Beams?{" "}
          <div className="relative mx-auto w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
              <span className="">Exploding beams.</span>
            </div>
            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
              <span className="">Exploding beams.</span>
            </div>
          </div>
        </h2>
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <img
            src={`/suzain`}
            alt="jordans"
            height="400"
            width="400"
            className="object-contain"
          />
        </BackgroundGradient>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
