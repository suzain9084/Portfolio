import { Award, Code2, Medal, Trophy } from "lucide-react";
import { achievements } from "@/data/portfolio";
import { Reveal, Section, SectionHeading } from "./primitives";

const icons = { trophy: Trophy, medal: Medal, code: Code2, award: Award };

export function Achievements() {
  return (
    <Section id="achievements" className="bg-surface/40">
      <SectionHeading eyebrow="Achievements" title="Competitions, hackathons and consistency." />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {achievements.map((item, i) => {
          const Icon = icons[item.icon] ?? Award;
          return (
            <Reveal key={item.title} delay={i * 100} className="h-full">
              <article className="lift group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card/70 p-6">
                <div
                  className="pointer-events-none absolute -top-16 -left-10 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: "color-mix(in oklab, var(--gold) 22%, transparent)" }}
                  aria-hidden="true"
                />
                <div className="flex items-center justify-between gap-3">
                  <span
                    className="grid h-11 w-11 place-items-center rounded-2xl border border-border transition-transform duration-500 group-hover:-rotate-6"
                    style={{ background: "color-mix(in oklab, var(--gold) 14%, transparent)" }}
                  >
                    <Icon className="h-5 w-5" style={{ color: "var(--gold)" }} aria-hidden="true" />
                  </span>
                  <span className="rounded-full border border-border bg-secondary/60 px-3 py-1 font-mono text-[10px] tracking-[0.14em] text-secondary-foreground uppercase">
                    {item.tag}
                  </span>
                </div>
                <h3 className="mt-5 text-base leading-snug font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
