import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines Tailwind CSS classes with clsx and merges conflicting utility declarations.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
