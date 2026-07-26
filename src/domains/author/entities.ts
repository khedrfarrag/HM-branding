import { BaseContent } from "@/types/content";

export interface AuthorProfile extends BaseContent {
  name: string;
  nameEn: string;
  title: string;
  bio: string;
  avatarUrl: string;
}

export interface Achievement {
  title: string;
  year: number;
  details: string;
}

export interface Certificate {
  name: string;
  issuer: string;
  issueDate: string;
  verifyUrl: string | null;
  badgeUrl: string | null;
}

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  iconType?: string;
}
