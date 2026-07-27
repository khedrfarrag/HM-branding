import { Resend } from "resend";
import type { IEmailGateway, EmailPayload } from "./index";

/**
 * ResendEmailGateway — Concrete implementation of IEmailGateway.
 * Resend client is instantiated inside sendEmail to avoid build-time
 * crashes when RESEND_API_KEY is not set in the environment.
 */
export class ResendEmailGateway implements IEmailGateway {
  async sendEmail(payload: EmailPayload): Promise<void> {
    const apiKey = process.env.RESEND_API_KEY;
    const from =
      payload.from ??
      process.env.RESEND_FROM_EMAIL ??
      "noreply@hussammabrouk.com";

    if (!apiKey || apiKey === "re_your_resend_api_key_here") {
      // Email not configured — log and skip silently (booking is already saved)
      console.warn("[Resend] RESEND_API_KEY not configured — skipping email.");
      return;
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from,
      to: payload.to,
      subject: payload.subject,
      html: payload.html,
    });

    if (error) {
      console.error("[Resend] Failed to send email:", error);
      throw new Error(`Email delivery failed: ${error.message}`);
    }
  }
}
