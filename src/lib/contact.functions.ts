import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email address").max(160),
  message: z.string().trim().min(10, "Please write at least 10 characters").max(2000),
});

export type ContactInput = z.infer<typeof contactSchema>;

const escapeHtml = (value: string) =>
  value.replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] ?? c,
  );

export const sendContactMessage = createServerFn({ method: "POST" })
  .validator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const apiKey = process.env["RESEND_API_KEY"];
    if (!apiKey) {
      throw new Error(
        "Email service is not configured yet. Please email suzain@ce.du.ac.in directly.",
      );
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: ["suzain@ce.du.ac.in"],
        reply_to: data.email,
        subject: `Portfolio message from ${data.name}`,
        html: `<h2>New portfolio message</h2>
<p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
<p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
<p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>`,
      }),
    });

    if (!response.ok) {
      console.log(await response.json());
      throw new Error("Message could not be sent right now. Please try again or email directly.");
    }

    return { ok: true as const };
  });
