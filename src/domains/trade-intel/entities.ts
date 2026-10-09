import { BaseContent } from "@/types/content";
import { TradeIntelType, AlertSeverity } from "@/domains/shared/value-objects";

export interface TradeIntel extends BaseContent {
  feedType: TradeIntelType;
  title: string;
  body: string;
  severity?: AlertSeverity;
  active?: boolean;
  region?: string;
  sourceUrl?: string | null;
}
