import { Download, FileText } from "lucide-react";
import { resumeUrl } from "@/data/portfolio";
import { Reveal, Section } from "./primitives";

export function ResumeCTA() {
  return (
    <Section id="resume">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card/70 px-6 py-12 text-center sm:px-12">
          <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="relative">
            <h2 className="text-3xl font-semibold sm:text-4xl">Want to know more?</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Download my resume for a concise overview of my experience, projects, skills,
              education and achievements.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={resumeUrl}
                download="Suzain-Resume.pdf"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-glow sm:w-auto"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download Resume
              </a>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-primary/40 sm:w-auto"
              >
                <FileText className="h-4 w-4" aria-hidden="true" />
                View Resume
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
