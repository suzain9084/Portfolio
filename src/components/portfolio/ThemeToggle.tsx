import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl border border-border bg-card/60 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
    >
      <Sun
        aria-hidden="true"
        className={`absolute h-[18px] w-[18px] transition-all duration-500 ${
          theme === "dark" ? "translate-y-6 rotate-90 opacity-0" : "translate-y-0 rotate-0 opacity-100"
        }`}
      />
      <Moon
        aria-hidden="true"
        className={`absolute h-[18px] w-[18px] transition-all duration-500 ${
          theme === "dark" ? "translate-y-0 rotate-0 opacity-100" : "-translate-y-6 -rotate-90 opacity-0"
        }`}
      />
    </button>
  );
}
