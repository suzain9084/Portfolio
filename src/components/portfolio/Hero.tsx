import { ArrowDown, Download, Sparkles } from "lucide-react";
import { profile, resumeUrl } from "@/data/portfolio";
import { SocialLinks } from "./SocialLinks";

const snippets = [
  { code: "model.eval()", className: "top-[12%] left-[4%] animate-float-slow" },
  { code: "graph.add_node(agent)", className: "top-[62%] left-[2%] [animation-delay:1.2s] animate-float-slow" },
  { code: "O(n log n)", className: "top-[22%] right-[5%] [animation-delay:.6s] animate-float-slow" },
  { code: "await fetch('/api')", className: "bottom-[14%] right-[8%] [animation-delay:1.8s] animate-float-slow" },
];

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-32 pb-10 sm:pt-40 md:pb-14">
      <div className="hero-glow pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <div className="grid-bg pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <div
        className="animate-orb pointer-events-none absolute -top-24 left-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]"
        aria-hidden="true"
      />

      <div className="pointer-events-none absolute inset-0 -z-10 hidden md:block" aria-hidden="true">
        {snippets.map((s) => (
          <span
            key={s.code}
            className={`glass absolute rounded-lg px-3 py-1.5 font-mono text-[11px] text-muted-foreground ${s.className}`}
          >
            {s.code}
          </span>
        ))}
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="reveal is-visible inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5">
            <span className="animate-pulse-ring h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
            <span className="text-xs font-medium text-muted-foreground">{profile.status}</span>
          </div>

          <p className="mt-7 font-mono text-[11px] tracking-[0.3em] text-primary uppercase sm:text-xs">
            {profile.eyebrow}
          </p>

          <h1 className="mt-5 text-4xl leading-[1.05] font-semibold sm:text-6xl md:text-7xl">
            Hi, I&apos;m <span className="text-gradient">Suzain.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-foreground/90 sm:text-xl">
            {profile.headline}
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            I&apos;m a Computer Science &amp; Engineering (AI &amp; ML) student who enjoys the full
            arc of building software — from designing intelligent systems and training models to
            shipping full-stack applications and sharpening problem-solving through data structures
            and algorithms.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#projects"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-glow sm:w-auto"
            >
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              View My Work
            </a>
            <a
              href={resumeUrl}
              download="Suzain-Resume.pdf"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-card/60 px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-primary/40 sm:w-auto"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Resume
            </a>
          </div>

          <SocialLinks className="mt-8 justify-center" />

          <a
            href="#about"
            aria-label="Scroll to about section"
            className="mt-10 inline-flex flex-col items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-primary"
          >
            Scroll
            <ArrowDown className="animate-float-slow h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
