import { skillGroups } from "@/data/portfolio";
import { Reveal, Section, SectionHeading } from "./primitives";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="The toolkit I build with."
        description="Languages, frameworks and systems I use across software engineering and machine learning work."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, gi) => (
          <Reveal key={group.title} delay={gi * 70}>
            <article className="lift group h-full rounded-2xl border border-border bg-card/70 p-6">
              <header className="flex items-center gap-3">
                <span
                  className="h-8 w-1 rounded-full bg-primary transition-all group-hover:h-10"
                  aria-hidden="true"
                />
                <h3 className="text-base font-semibold">{group.title}</h3>
              </header>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <span className="inline-block cursor-default rounded-lg border border-border bg-secondary/50 px-2.5 py-1.5 font-mono text-xs text-secondary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/10 hover:text-primary">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
