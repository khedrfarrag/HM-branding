import { Locale, TradeIntelType } from "@/domains/shared/value-objects";
import { TradeIntel } from "./entities";

export interface ITradeIntelRepository {
  getTradeIntelItems(locale: Locale, type?: TradeIntelType): Promise<TradeIntel[]>;
  getTradeIntelBySlug(locale: Locale, type: TradeIntelType, slug: string): Promise<TradeIntel | null>;
  getAllSlugs(locale: Locale): Promise<{ type: TradeIntelType; slug: string }[]>;
}
