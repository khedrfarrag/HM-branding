import { Locale } from "./value-objects";

/**
 * Base Repository Contract
 *
 * All domain repositories must adhere to these structural expectations.
 */
export interface IBaseRepository<T> {
  getAll(locale: Locale): Promise<T[]>;
  getBySlug(locale: Locale, slug: string): Promise<T | null>;
}
