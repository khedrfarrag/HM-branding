import { Resend } from "resend";
import type { IEmailGateway, EmailPayload } from "./index";

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = process.env.RESEND_FROM_EMAIL ?? "noreply@hussammabrouk.com";

/**
 * ResendEmailGateway — Concrete implementation of IEmailGateway
 * Uses the Resend SDK to send transactional emails.
 * Replace StubEmailGateway with this class in production.
 */
export class ResendEmailGateway implements IEmailGateway {
  async sendEmail(payload: EmailPayload): Promise<void> {
    const { error } = await resend.emails.send({
      from: payload.from ?? FROM,
      to: payload.to,
      subject: payload.subject,
      html: payload.html,
    });

    if (error) {
      // Log and re-throw so the Server Action can flag the booking as orphaned
      console.error("[Resend] Failed to send email:", error);
      throw new Error(`Email delivery failed: ${error.message}`);
    }
  }
}
