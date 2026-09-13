import Fuse from "fuse.js";
import { ChinaSubdomain } from "@/domains/shared/value-objects";
import { IChinaDirectoryEntity, IChinaDirectoryCoverage } from "@/domains/china-directory/entities";
import {
  IChinaDirectoryRepository,
  IChinaDirectoryFilterOptions,
  IPaginatedResult
} from "@/domains/china-directory/repository";
import {
  getDirectoryEntities,
  getDirectoryEntityBySlug,
  getAllDirectoryEntitySlugs,
  getRelatedDirectoryEntities,
  getDirectoryCoverageStats,
  ALL_DIRECTORY_ENTITIES
} from "@/data/china-directory";

export class LocalFsChinaDirectoryRepository implements IChinaDirectoryRepository {
  private fuseInstance: Fuse<IChinaDirectoryEntity> | null = null;

  private getFuse(): Fuse<IChinaDirectoryEntity> {
    if (!this.fuseInstance) {
      this.fuseInstance = new Fuse(ALL_DIRECTORY_ENTITIES, {
        keys: [
          { name: "name.ar", weight: 0.35 },
          { name: "name.en", weight: 0.25 },
          { name: "name.zh", weight: 0.2 },
          { name: "name.pinyin", weight: 0.1 },
          { name: "description.ar", weight: 0.1 },
          { name: "tags", weight: 0.1 }
        ],
        threshold: 0.35,
        minMatchCharLength: 2,
        ignoreLocation: true
      });
    }
    return this.fuseInstance;
  }

  async getItems(
    subdomain: ChinaSubdomain,
    options?: IChinaDirectoryFilterOptions
  ): Promise<IPaginatedResult<IChinaDirectoryEntity>> {
    const result = getDirectoryEntities(subdomain, options);
    return result;
  }

  async getItemBySlug(
    subdomain: ChinaSubdomain,
    slug: string
  ): Promise<IChinaDirectoryEntity | null> {
    return getDirectoryEntityBySlug(subdomain, slug);
  }

  async getAllEntitySlugs(): Promise<{ subdomain: ChinaSubdomain; slug: string }[]> {
    return getAllDirectoryEntitySlugs();
  }

  async getRelatedEntities(
    subdomain: ChinaSubdomain,
    slug: string,
    limit: number = 6
  ): Promise<IChinaDirectoryEntity[]> {
    return getRelatedDirectoryEntities(subdomain, slug, limit);
  }

  async getCoverageStats(): Promise<IChinaDirectoryCoverage[]> {
    return getDirectoryCoverageStats();
  }

  async search(query: string, limit: number = 20): Promise<IChinaDirectoryEntity[]> {
    const q = query.trim();
    if (!q) return [];
    const fuse = this.getFuse();
    const results = fuse.search(q, { limit });
    return results.map(r => r.item);
  }
}
