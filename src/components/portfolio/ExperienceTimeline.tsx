import { useState } from "react";
import { Briefcase, ChevronDown, MapPin } from "lucide-react";
import { experience } from "@/data/portfolio";
import { Reveal, Section, SectionHeading } from "./primitives";
import { cn } from "@/lib/utils";

export function ExperienceTimeline() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section id="experience" className="bg-surface/40">
      <SectionHeading eyebrow="Experience" title="Where I've shipped work." />

      <div className="relative mt-12 pl-8 sm:pl-12">
        <span
          className="absolute top-2 bottom-2 left-[11px] w-px bg-gradient-to-b from-primary/70 via-border to-transparent sm:left-[19px]"
          aria-hidden="true"
        />
        {experience.map((job, i) => {
          const open = openIndex === i;
          return (
            <Reveal key={job.role} delay={i * 100} className="relative">
              <span
                className="absolute top-7 -left-8 grid h-6 w-6 place-items-center rounded-full border border-primary/50 bg-background sm:-left-12"
                aria-hidden="true"
              >
                <span className="h-2 w-2 rounded-full bg-primary" />
              </span>

              <article className="lift rounded-2xl border border-border bg-card/70 p-6">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold">{job.role}</h3>
                    <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <Briefcase className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                        {job.company}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                        {job.location}
                      </span>
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-border bg-secondary/60 px-3 py-1 font-mono text-[11px] text-secondary-foreground">
                    {job.period}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{job.summary}</p>

                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  aria-expanded={open}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary"
                >
                  {open ? "Hide details" : "Show details"}
                  <ChevronDown
                    className={cn("h-4 w-4 transition-transform duration-300", open && "rotate-180")}
                    aria-hidden="true"
                  />
                </button>

                <div
                  className={cn(
                    "grid transition-all duration-500 ease-out",
                    open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <ul className="space-y-2.5 border-l border-border pl-4">
                      {job.points.map((point) => (
                        <li key={point} className="text-sm leading-relaxed text-muted-foreground">
                          {point}
                        </li>
                      ))}
                    </ul>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {job.tech.map((t) => (
                        <li
                          key={t}
                          className="rounded-lg border border-border bg-secondary/50 px-2.5 py-1 font-mono text-[11px] text-secondary-foreground"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
