import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().trim().min(1, "Nome obrigatório").max(100),
  email: z.string().trim().email("Email inválido").max(255),
  message: z.string().trim().min(1, "Mensagem obrigatória").max(2000),
  website: z.string().max(0).optional().default(""),
});

const TO_EMAIL = "kanao.interiordesign@gmail.com";
const FROM_EMAIL = "Kanao <onboarding@resend.dev>";
const RESEND_URL = "https://api.resend.com/emails";

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export const sendContactMessage = createServerFn({ method: "POST" })
  .validator((data: unknown) => ContactSchema.parse(data))
  .handler(async ({ data }) => {
    if (data.website) return { ok: true as const };

    const RESEND_API_KEY = process.env.RESEND_API_KEY_OWN;
    if (!RESEND_API_KEY) {
      throw new Error("Email service not configured");
    }

    const safeName = escapeHtml(data.name);
    const safeEmail = escapeHtml(data.email);
    const safeMsg = escapeHtml(data.message).replace(/\n/g, "<br/>");

    const html = `
      <div style="font-family:Helvetica,Arial,sans-serif;color:#111;line-height:1.6">
        <h2 style="margin:0 0 16px;font-weight:400">Nova mensagem de contacto</h2>
        <p><strong>Nome:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Mensagem:</strong></p>
        <div style="padding:12px;background:#f5f3ee;border-left:3px solid #c9b896">${safeMsg}</div>
      </div>
    `;

    const response = await fetch(RESEND_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: data.email,
        subject: `Contacto site — ${data.name}`,
        html,
      }),
    });

    if (!response.ok) {
      const body = await response.text().catch(() => "");
      console.error("Resend error", response.status, body);
      throw new Error(`Resend ${response.status}: ${body.slice(0, 300)}`);
    }

    return { ok: true as const };
  });
