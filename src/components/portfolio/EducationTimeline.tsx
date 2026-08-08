import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";
import { Reveal, Section, SectionHeading } from "./primitives";

export function EducationTimeline() {
  return (
    <Section id="education">
      <SectionHeading eyebrow="Education" title="Academic background." />

      <div className="relative mt-12 pl-8 sm:pl-12">
        <span
          className="absolute top-2 bottom-2 left-[11px] w-px bg-gradient-to-b from-primary/70 via-border to-transparent sm:left-[19px]"
          aria-hidden="true"
        />
        {education.map((item, i) => (
          <Reveal key={item.degree} delay={i * 90} className="relative">
            <span
              className="absolute top-7 -left-8 grid h-6 w-6 place-items-center rounded-full border border-primary/50 bg-background sm:-left-12"
              aria-hidden="true"
            >
              <GraduationCap className="h-3 w-3 text-primary" />
            </span>
            <article className="lift grid gap-6 rounded-3xl border border-border bg-card/70 p-6 sm:grid-cols-[1fr_auto] sm:items-center sm:p-8">
              <div className="min-w-0">
                <h3 className="text-lg leading-snug font-semibold">{item.degree}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.school}</p>
                <span className="mt-4 inline-block rounded-full border border-border bg-secondary/60 px-3 py-1 font-mono text-[11px] text-secondary-foreground">
                  {item.period}
                </span>
              </div>
              <div className="rounded-2xl border border-primary/30 bg-primary/10 px-6 py-5 text-center">
                <p className="font-display text-3xl font-semibold text-gradient">{item.cgpa}</p>
                <p className="mt-1 font-mono text-[10px] tracking-[0.2em] text-primary uppercase">
                  CGPA / 10
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
