import { ChinaSubdomain } from "@/domains/shared/value-objects";
import { IChinaDirectoryEntity, IChinaDirectoryCoverage } from "./entities";

export interface IChinaDirectoryFilterOptions {
  provinceSlug?: string;
  citySlug?: string;
  categoryTag?: string;
  verificationStatus?: string;
  searchQuery?: string;
  page?: number;
  pageSize?: number;
}

export interface IPaginatedResult<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface IChinaDirectoryRepository {
  getItems(subdomain: ChinaSubdomain, options?: IChinaDirectoryFilterOptions): Promise<IPaginatedResult<IChinaDirectoryEntity>>;
  getItemBySlug(subdomain: ChinaSubdomain, slug: string): Promise<IChinaDirectoryEntity | null>;
  getAllEntitySlugs(): Promise<{ subdomain: ChinaSubdomain; slug: string }[]>;
  getRelatedEntities(subdomain: ChinaSubdomain, slug: string, limit?: number): Promise<IChinaDirectoryEntity[]>;
  getCoverageStats(): Promise<IChinaDirectoryCoverage[]>;
  search(query: string, limit?: number): Promise<IChinaDirectoryEntity[]>;
}
