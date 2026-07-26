/**
 * ICrmGateway — CRM Integration Interface
 * Phase 1: log stub. Phase 2: HubSpot / ActiveCampaign.
 */
export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  source: string;
  tags?: string[];
}

export interface ICrmGateway {
  createContact(payload: ContactPayload): Promise<void>;
  updateContact(email: string, data: Partial<ContactPayload>): Promise<void>;
}

/** Phase 1 stub — logs to console; swap with HubSpot adapter in Phase 2. */
export class StubCrmGateway implements ICrmGateway {
  async createContact(payload: ContactPayload): Promise<void> {
    console.log("[CRM] createContact", payload);
  }
  async updateContact(email: string, data: Partial<ContactPayload>): Promise<void> {
    console.log("[CRM] updateContact", email, data);
  }
}
