import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { AlertCircle, CheckCircle2, Loader2, Mail, Phone, Send } from "lucide-react";
import { z } from "zod";
import { profile } from "@/data/portfolio";
import { sendContactMessage } from "@/lib/contact.functions";
import { Reveal, Section, SectionHeading } from "./primitives";
import { SocialLinks } from "./SocialLinks";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80, "Name is too long"),
  email: z.string().trim().email("Enter a valid email address").max(160),
  message: z
    .string()
    .trim()
    .min(10, "Please write at least 10 characters")
    .max(2000, "Message is too long"),
});

type Values = z.infer<typeof schema>;
type Errors = Partial<Record<keyof Values, string>>;

const fieldClass =
  "w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60";

export function ContactForm() {
  const send = useServerFn(sendContactMessage);
  const [values, setValues] = useState<Values>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const update =
    (key: keyof Values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [key]: e.target.value }));
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Errors = {};
      parsed.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof Values;
        if (!next[key]) next[key] = issue.message;
      });
      setErrors(next);
      setStatus("idle");
      return;
    }

    setStatus("loading");
    setErrorMessage("");
    try {
      await send({ data: parsed.data });
      setStatus("success");
      setValues({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error && err.message
          ? err.message
          : "Something went wrong. Please email me directly instead.",
      );
    }
  };

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's Build Something Together"
        description="Have a role, project or idea in mind? Send a message and I'll get back to you."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <div className="flex h-full flex-col gap-4 rounded-3xl border border-border bg-card/70 p-7">
            <a
              href={`mailto:${profile.email}`}
              className="group flex items-start gap-4 rounded-2xl border border-border bg-secondary/40 p-4 transition-colors hover:border-primary/40"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10">
                <Mail className="h-[18px] w-[18px] text-primary" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs text-muted-foreground">Email</span>
                <span className="block truncate text-sm font-medium">{profile.email}</span>
              </span>
            </a>
            <a
              href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}
              className="group flex items-start gap-4 rounded-2xl border border-border bg-secondary/40 p-4 transition-colors hover:border-primary/40"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10">
                <Phone className="h-[18px] w-[18px] text-primary" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs text-muted-foreground">Phone</span>
                <span className="block truncate text-sm font-medium">{profile.phone}</span>
              </span>
            </a>
            <div className="mt-auto pt-4">
              <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">Elsewhere</p>
              <SocialLinks className="mt-3" only={["github", "linkedin", "leetcode"]} />
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-3xl border border-border bg-card/70 p-7"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={update("name")}
                  maxLength={80}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  placeholder="Your name"
                  className={fieldClass}
                />
                {errors.name ? (
                  <p id="name-error" className="mt-1.5 text-xs text-destructive">
                    {errors.name}
                  </p>
                ) : null}
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={update("email")}
                  maxLength={160}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  placeholder="you@example.com"
                  className={fieldClass}
                />
                {errors.email ? (
                  <p id="email-error" className="mt-1.5 text-xs text-destructive">
                    {errors.email}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={values.message}
                onChange={update("message")}
                maxLength={2000}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                placeholder="Tell me about the role, project or idea…"
                className={`${fieldClass} resize-y`}
              />
              {errors.message ? (
                <p id="message-error" className="mt-1.5 text-xs text-destructive">
                  {errors.message}
                </p>
              ) : null}
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 sm:w-auto"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  Sending…
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" aria-hidden="true" />
                  Send Message
                </>
              )}
            </button>

            <div aria-live="polite" className="mt-4">
              {status === "success" ? (
                <p className="flex items-start gap-2 rounded-xl border border-primary/30 bg-primary/10 p-3 text-sm text-foreground">
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  Thanks for reaching out — your message is on its way. I&apos;ll reply soon.
                </p>
              ) : null}
              {status === "error" ? (
                <p className="flex items-start gap-2 rounded-xl border border-destructive/40 bg-destructive/10 p-3 text-sm text-foreground">
                  <AlertCircle
                    className="mt-0.5 h-4 w-4 shrink-0 text-destructive"
                    aria-hidden="true"
                  />
                  {errorMessage}
                </p>
              ) : null}
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
