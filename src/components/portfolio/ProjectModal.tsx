import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-6">
      <h4 className="font-mono text-[11px] tracking-[0.22em] text-primary uppercase">{title}</h4>
      <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const hasGithub = project ? !project.github.endsWith("_URL_HERE") : false;

  return (
    <Dialog open={Boolean(project)} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-h-[88vh] overflow-y-auto sm:max-w-2xl">
        {project ? (
          <>
            <DialogHeader>
              <span className="w-fit rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[10px] tracking-[0.16em] text-primary uppercase">
                {project.category}
              </span>
              <DialogTitle className="mt-2 text-left text-xl leading-snug break-words">
                {project.title}
              </DialogTitle>
              <DialogDescription className="text-left">{project.short}</DialogDescription>
            </DialogHeader>

            <Block title="Problem">{project.problem}</Block>
            <Block title="Solution">{project.solution}</Block>
            <Block title="Technical approach">
              <ul className="list-disc space-y-1.5 pl-5">
                {project.approach.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </Block>
            <Block title="Results">
              <ul className="list-disc space-y-1.5 pl-5">
                {project.results.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </Block>
            <Block title="Technologies">
              <ul className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-lg border border-border bg-secondary/50 px-2.5 py-1 font-mono text-[11px] text-secondary-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </Block>

            <div className="mt-7 flex flex-wrap gap-2 border-t border-border pt-5">
              <a
                href={hasGithub ? project.github : undefined}
                aria-disabled={!hasGithub}
                title={hasGithub ? "View source" : "Add the GitHub URL in src/data/portfolio.ts"}
                target={hasGithub ? "_blank" : undefined}
                rel={hasGithub ? "noreferrer noopener" : undefined}
                className={`inline-flex items-center gap-1.5 rounded-xl border border-border px-4 py-2 text-sm font-medium ${
                  hasGithub ? "hover:border-primary/40" : "cursor-not-allowed opacity-55"
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
                  className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  Live Demo
                </a>
              ) : (
                <span className="inline-flex items-center rounded-xl border border-dashed border-border px-4 py-2 text-sm text-muted-foreground">
                  Live demo not available
                </span>
              )}
            </div>
          </>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
