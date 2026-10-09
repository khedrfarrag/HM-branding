/**
 * Contract: City Module Data Structure
 * Feature: 023-china-cities-expansion
 *
 * Every file in `src/features/china-cities/data/cities/[city-slug].ts` MUST
 * satisfy this interface contract and export a single `ICity` object as default or named export.
 */

import type { ICity } from "@/features/china-cities/types";

export type CityModuleContract = ICity;

export interface ICityRegistryContract {
  getCities(): ICity[];
  getCityBySlug(slug: string): ICity | undefined;
  getAllCitySlugs(): string[];
}
