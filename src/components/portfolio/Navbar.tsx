import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { navItems, resumeUrl } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/use-scroll-effects";
import { cn } from "@/lib/utils";
import { SocialLinks } from "./SocialLinks";
import { ThemeToggle } from "./ThemeToggle";

const sectionIds = navItems.map((i) => i.href.slice(1));

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      {/* Mobile menu */}
      <div
        className={cn(
          "pointer-events-none fixed inset-0 z-40 transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "opacity-0",
        )}
      >
        <div
          onClick={() => setOpen(false)}
          aria-hidden="true"
          className={cn("absolute inset-0 bg-background/60", open && "pointer-events-auto")}
        />
        <div
          className={cn(
            "glass absolute inset-x-4 top-20 rounded-3xl p-4 shadow-soft transition-transform duration-300",
            open ? "pointer-events-auto translate-y-0" : "-translate-y-4",
          )}
        >

          <nav aria-label="Mobile" className="flex flex-col">
            {navItems.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: `${open ? i * 35 : 0}ms` }}
                className={cn(
                  "rounded-xl px-4 py-3 text-base text-muted-foreground transition-all duration-300 hover:bg-secondary hover:text-foreground",
                  open ? "translate-x-0 opacity-100" : "translate-x-3 opacity-0",
                  active === item.href.slice(1) && "text-foreground",
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-3 flex items-center justify-between border-t border-border pt-4">
            <SocialLinks size="sm" />
            <a
              href={resumeUrl}
              download="Suzain-Resume.pdf"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Resume
            </a>
          </div>
        </div>
      </div>
      <div
        className={cn(
          "relative z-50 mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 transition-all duration-300 sm:px-8",
          scrolled ? "py-3" : "py-5",
        )}
      >
        <div
          className={cn(
            "grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-2xl px-3 py-2 transition-all duration-300 lg:flex lg:justify-between",
            scrolled ? "glass shadow-soft" : "border border-transparent",
          )}
        >
          <a
            href="#home"
            className="min-w-0 truncate px-2 font-display text-lg font-semibold tracking-tight"
          >
            Suzain<span className="text-primary">.</span>
          </a>

          <nav aria-label="Primary" className="hidden lg:flex lg:items-center lg:gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={active === item.href.slice(1) ? "true" : undefined}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
                  active === item.href.slice(1) && "bg-secondary text-foreground",
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <SocialLinks className="hidden sm:flex" only={["github", "linkedin"]} size="sm" />
            <ThemeToggle />
            <a
              href={resumeUrl}
              download="Suzain-Resume.pdf"
              className="hidden items-center gap-2 rounded-xl bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-glow sm:inline-flex"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Resume
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-card/60 text-foreground lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
