import { stats } from "@/data/portfolio";
import { useCountUp, useReveal } from "@/hooks/use-scroll-effects";
import { Reveal, Section, SectionHeading } from "./primitives";
import { Brain, Cpu, Layers, Terminal } from "lucide-react";

const interests = [
  { Icon: Brain, label: "Artificial Intelligence" },
  { Icon: Cpu, label: "Machine Learning" },
  { Icon: Layers, label: "Full-Stack Development" },
  { Icon: Terminal, label: "Backend Engineering" },
  { Icon: Brain, label: "Problem Solving" },
  { Icon: Cpu, label: "Data Structures & Algorithms" },
];

function StatCard({
  value,
  suffix,
  decimals,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  decimals: number;
  label: string;
  delay: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>(0.3);
  const display = useCountUp(value, visible, 1500, decimals);

  return (
    <div
      ref={ref}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
      className={`reveal lift rounded-2xl border border-border bg-card/70 p-5 ${visible ? "is-visible" : ""}`}
    >
      <p className="font-display text-3xl font-semibold sm:text-4xl">
        <span className="text-gradient">{display}</span>
        <span className="text-primary">{suffix}</span>
      </p>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About"
        title="A developer who likes building things that think."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
        <div className="space-y-5">
          <Reveal>
            <p className="text-base leading-relaxed text-muted-foreground">
              I&apos;m currently pursuing a B.Tech. in Computer Science and Engineering (AI &amp; ML)
              at the Faculty of Technology, University of Delhi (2023–2027), where I hold a CGPA of
              8.87/10. Most of my time goes into two things: building software that people actually
              use, and getting better at the fundamentals behind it.
            </p>
          </Reveal>
          <Reveal delay={90}>
            <p className="text-base leading-relaxed text-muted-foreground">
              On the engineering side, I work across the stack — React and TypeScript on the front,
              Node, Express and Flask on the back. On the AI side, I&apos;m drawn to deep learning
              and applied NLP: attention-based models, LLM agent workflows and automation that
              removes real manual work. Alongside that, I keep a steady habit of solving DSA
              problems in C++, which has shaped how I think about correctness and complexity.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <ul className="flex flex-wrap gap-2 pt-2">
              {interests.map(({ Icon, label }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                >
                  <Icon className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} delay={i * 90} />
          ))}
        </div>
      </div>
    </Section>
  );
}
