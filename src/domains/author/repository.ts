import { Locale } from "@/domains/shared/value-objects";
import { AuthorProfile, Achievement, Certificate, TimelineEvent } from "./entities";

export interface IAuthorRepository {
  getProfile(locale: Locale): Promise<AuthorProfile | null>;
  getAchievements(locale: Locale): Promise<Achievement[]>;
  getCertificates(locale: Locale): Promise<Certificate[]>;
  getTimelineEvents(locale: Locale): Promise<TimelineEvent[]>;
}
