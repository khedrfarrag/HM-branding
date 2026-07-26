/**
 * IPaymentGateway — Payments Integration Interface
 * Phase 1: request-based stub. Phase 2: Stripe / HyperPay.
 */
export interface PaymentIntent {
  amount: number;
  currency: string;
  description: string;
  clientEmail: string;
}

export interface IPaymentGateway {
  createPaymentIntent(intent: PaymentIntent): Promise<{ id: string; checkoutUrl: string }>;
  verifyPayment(paymentId: string): Promise<{ verified: boolean; status: string }>;
}

/** Phase 1 stub — returns mock data; swap with Stripe adapter in Phase 2. */
export class StubPaymentGateway implements IPaymentGateway {
  async createPaymentIntent(intent: PaymentIntent): Promise<{ id: string; checkoutUrl: string }> {
    console.log("[Payments] createPaymentIntent", intent);
    return { id: "mock_pi_001", checkoutUrl: "/booking/pending" };
  }
  async verifyPayment(paymentId: string): Promise<{ verified: boolean; status: string }> {
    console.log("[Payments] verifyPayment", paymentId);
    return { verified: true, status: "paid" };
  }
}
