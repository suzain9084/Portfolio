import { ArrowUp } from "lucide-react";
import { profile } from "@/data/portfolio";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-8 md:grid-cols-[1fr_auto] md:items-center">
        <div className="min-w-0">
          <p className="font-display text-lg font-semibold">
            Suzain<span className="text-primary">.</span>
          </p>
          <p className="mt-1.5 text-sm text-muted-foreground">{profile.eyebrow}</p>
        </div>
        <div className="flex items-center gap-3">
          <SocialLinks size="sm" />
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="grid h-9 w-9 place-items-center rounded-xl border border-border bg-card/60 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
          >
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="mx-auto max-w-6xl border-t border-border px-5 py-6 sm:px-8">
        <p className="text-xs text-muted-foreground">© 2026 Suzain. All rights reserved.</p>
      </div>
    </footer>
  );
}
