import { Github, Linkedin, Mail, Code2 } from "lucide-react";
import { profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const items = [
  { key: "github", label: "GitHub", href: profile.links.github, Icon: Github },
  { key: "linkedin", label: "LinkedIn", href: profile.links.linkedin, Icon: Linkedin },
  { key: "leetcode", label: "LeetCode", href: profile.links.leetcode, Icon: Code2 },
  { key: "email", label: "Email", href: `mailto:${profile.email}`, Icon: Mail },
];

export function SocialLinks({
  className,
  only,
  size = "md",
}: {
  className?: string;
  only?: string[];
  size?: "sm" | "md";
}) {
  const shown = only ? items.filter((i) => only.includes(i.key)) : items;
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {shown.map(({ key, label, href, Icon }) => {
        const isPlaceholder = href.endsWith("_URL_HERE");
        return (
          <a
            key={key}
            href={isPlaceholder ? undefined : href}
            aria-label={isPlaceholder ? `${label} (link not set yet)` : label}
            aria-disabled={isPlaceholder || undefined}
            title={isPlaceholder ? `${label}: add your URL in src/data/portfolio.ts` : label}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
            className={cn(
              "grid place-items-center rounded-xl border border-border bg-card/60 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary",
              size === "sm" ? "h-9 w-9" : "h-10 w-10",
              isPlaceholder && "cursor-not-allowed opacity-60 hover:translate-y-0",
            )}
          >
            <Icon className={size === "sm" ? "h-4 w-4" : "h-[18px] w-[18px]"} aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
}
