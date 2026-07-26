/**
 * IEmailGateway — Transactional Email Integration Interface
 * Phase 1: console stub. Phase 2: Resend / SendGrid.
 */
export interface EmailPayload {
  to: string;
  subject: string;
  html: string;
  from?: string;
}

export interface IEmailGateway {
  sendEmail(payload: EmailPayload): Promise<void>;
}

export class StubEmailGateway implements IEmailGateway {
  async sendEmail(payload: EmailPayload): Promise<void> {
    console.log("[Email] sendEmail to", payload.to, "subject:", payload.subject);
  }
}
