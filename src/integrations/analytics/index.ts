/**
 * IAnalyticsGateway — Analytics Integration Interface
 * Phase 1: console stub. Phase 2: GA4 / Plausible / PostHog.
 */
export interface AnalyticsEvent {
  name: string;
  properties?: Record<string, string | number | boolean>;
}

export interface IAnalyticsGateway {
  trackEvent(event: AnalyticsEvent): Promise<void>;
  trackPageView(path: string): Promise<void>;
}

export class StubAnalyticsGateway implements IAnalyticsGateway {
  async trackEvent(event: AnalyticsEvent): Promise<void> {
    console.log("[Analytics] event", event.name, event.properties);
  }
  async trackPageView(path: string): Promise<void> {
    console.log("[Analytics] pageView", path);
  }
}
