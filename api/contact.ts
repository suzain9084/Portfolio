import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email address").max(160),
  message: z.string().trim().min(10, "Please write at least 10 characters").max(2000),
});

const escapeHtml = (value: string) =>
  value.replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] ?? c,
  );

export default async function handler(request: Request): Promise<Response> {
  if (request.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const message = parsed.error.issues[0]?.message ?? "Invalid form data";
    return Response.json({ error: message }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json(
      {
        error: "Email service is not configured yet. Please email suzain@ce.du.ac.in directly.",
      },
      { status: 503 },
    );
  }

  const { name, email, message } = parsed.data;
  const from =
    process.env.RESEND_FROM ?? "Portfolio Contact <onboarding@resend.dev>";
  const to = process.env.RESEND_TO ?? "suzain@ce.du.ac.in";

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Portfolio message from ${name}`,
      html: `<h2>New portfolio message</h2>
<p><strong>Name:</strong> ${escapeHtml(name)}</p>
<p><strong>Email:</strong> ${escapeHtml(email)}</p>
<p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Resend error:", errorText);

    let errorMessage =
      "Message could not be sent right now. Please try again or email directly.";
    try {
      const errorJson = JSON.parse(errorText) as { message?: string };
      if (errorJson.message?.includes("testing emails to your own email")) {
        errorMessage =
          "Resend test mode only allows sending to your Resend account email. Set RESEND_TO to that address, or verify a domain at resend.com/domains.";
      } else if (errorJson.message) {
        errorMessage = errorJson.message;
      }
    } catch {
      /* keep default message */
    }

    return Response.json({ error: errorMessage }, { status: 502 });
  }

  return Response.json({ ok: true });
}
