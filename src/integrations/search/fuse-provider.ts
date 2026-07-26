import Fuse from "fuse.js";
import {
  ISearchProvider,
  SearchDocument,
  SearchResult,
  SearchQueryOptions
} from "./provider";

/**
 * FuseSearchProvider — Phase 1 in-memory search implementation.
 *
 * Replace this class with AlgoliaSearchProvider, MeilisearchProvider,
 * or a vector-search provider without touching any calling code.
 */
export class FuseSearchProvider implements ISearchProvider {
  private fuse: Fuse<SearchDocument> | null = null;

  async buildIndex(documents: SearchDocument[]): Promise<void> {
    this.fuse = new Fuse(documents, {
      keys: [
        { name: "title", weight: 0.6 },
        { name: "excerpt", weight: 0.3 },
        { name: "tags", weight: 0.1 }
      ],
      includeScore: true,
      threshold: 0.35,
      minMatchCharLength: 2
    });
  }

  async search(query: string, options?: SearchQueryOptions): Promise<SearchResult[]> {
    if (!this.fuse) return [];

    const results = this.fuse.search(query, { limit: options?.limit ?? 10 });

    return results
      .filter((r) => {
        if (options?.type && r.item.type !== options.type) return false;
        return true;
      })
      .map((r) => ({
        document: r.item,
        score: r.score ?? 1
      }));
  }
}
