import { useState } from "react";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { Reveal, Section, SectionHeading } from "./primitives";
import { ProjectModal } from "./ProjectModal";

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Featured Projects"
        description="Applied AI systems and full-stack builds — each one solving a concrete problem end to end."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => {
          const hasGithub = !project.github.endsWith("_URL_HERE");
          return (
            <Reveal key={project.slug} delay={i * 90} className="h-full">
              <article className="lift group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card/70 p-6 sm:p-7">
                <div
                  className="pointer-events-none absolute -top-24 -right-16 h-48 w-48 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <span className="w-fit rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[10px] tracking-[0.16em] text-primary uppercase">
                  {project.category}
                </span>

                <h3 className="mt-4 font-display text-lg leading-snug font-semibold break-words sm:text-xl">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.short}</p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-lg border border-border bg-secondary/50 px-2.5 py-1 font-mono text-[11px] text-secondary-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap items-center gap-2 pt-7">
                  <button
                    type="button"
                    onClick={() => setSelected(project)}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-glow"
                  >
                    View Details
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <a
                    href={hasGithub ? project.github : undefined}
                    aria-disabled={!hasGithub}
                    title={hasGithub ? "View source on GitHub" : "Add the GitHub URL in src/data/portfolio.ts"}
                    target={hasGithub ? "_blank" : undefined}
                    rel={hasGithub ? "noreferrer noopener" : undefined}
                    className={`inline-flex items-center gap-1.5 rounded-xl border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary/40 ${
                      hasGithub ? "" : "cursor-not-allowed opacity-55"
                    }`}
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                    GitHub
                  </a>
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1.5 rounded-xl border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary/40"
                    >
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      Live Demo
                    </a>
                  ) : null}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </Section>
  );
}
