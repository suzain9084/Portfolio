import { Binary, Braces, Target } from "lucide-react";
import { Reveal, Section, SectionHeading } from "./primitives";

const cards = [
  {
    Icon: Braces,
    title: "C++ as my DSA language",
    detail:
      "I solve consistently in C++, which keeps me close to memory, complexity and the standard library.",
  },
  {
    Icon: Binary,
    title: "Data Structures & Algorithms",
    detail:
      "Trees, graphs, dynamic programming, greedy and sliding-window patterns — practiced until the approach comes before the code.",
  },
  {
    Icon: Target,
    title: "Problem solving habit",
    detail:
      "Regular practice is how I train for interviews, contests and the debugging that real projects demand.",
  },
];

export function BeyondProjects() {
  return (
    <Section id="beyond" className="bg-surface/40">
      <SectionHeading
        eyebrow="Beyond Projects"
        title="Problem solving & competitive programming."
        description="The practice behind the projects — sharpening algorithms and reasoning one problem at a time."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-primary/25 bg-card/70 p-8">
            <div
              className="animate-orb pointer-events-none absolute -right-10 -bottom-16 h-48 w-48 rounded-full bg-primary/15 blur-3xl"
              aria-hidden="true"
            />
            <div>
              <p className="font-mono text-[11px] tracking-[0.22em] text-primary uppercase">
                LeetCode
              </p>
              <p className="mt-4 font-display text-5xl font-semibold sm:text-6xl">
                <span className="text-gradient">650+</span>
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                DSA problems solved using C++
              </p>
            </div>
            <div className="mt-8 grid grid-cols-12 gap-1.5" aria-hidden="true">
              {Array.from({ length: 60 }).map((_, i) => (
                <span
                  key={i}
                  className="aspect-square rounded-[3px] transition-colors duration-500"
                  style={{
                    background:
                      i % 7 === 0
                        ? "color-mix(in oklab, var(--primary) 20%, transparent)"
                        : i % 3 === 0
                          ? "color-mix(in oklab, var(--primary) 60%, transparent)"
                          : "color-mix(in oklab, var(--primary) 38%, transparent)",
                  }}
                />
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Illustrative activity grid — figures reflect resume data only.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5">
          {cards.map(({ Icon, title, detail }, i) => (
            <Reveal key={title} delay={i * 90}>
              <article className="lift flex h-full items-start gap-4 rounded-2xl border border-border bg-card/70 p-6">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-primary/10">
                  <Icon className="h-[18px] w-[18px] text-primary" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{detail}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
