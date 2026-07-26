/**
 * ISearchProvider — Abstract Search Interface
 *
 * Swap Fuse.js for Algolia, Meilisearch, Typesense, or AI vector search
 * without touching any UI or domain code.
 */

export interface SearchDocument {
  id: string;
  title: string;
  excerpt: string;
  url: string;
  type: "article" | "experience" | "service" | "trade-intel" | "media" | "china";
  tags?: string[];
}

export interface SearchResult {
  document: SearchDocument;
  score: number;
}

export interface SearchQueryOptions {
  limit?: number;
  type?: SearchDocument["type"];
}

export interface ISearchProvider {
  /** Populate the search index. Call at build time or on demand. */
  buildIndex(documents: SearchDocument[]): Promise<void>;

  /** Execute a full-text search query. */
  search(query: string, options?: SearchQueryOptions): Promise<SearchResult[]>;
}
