"use client";

import { useState, useEffect } from 'react';

/**
 * Custom hook to sync calculator state with LocalStorage for guest users.
 */
export function useCalculatorStorage<T>(key: string, initialValue: T): [T, (val: T | ((prev: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  // Read from LocalStorage after initial mount (hydration safe)
  useEffect(() => {
    try {
      const item = window.localStorage.getItem(`hm_tool_${key}`);
      if (item) {
        setStoredValue(JSON.parse(item));
      }
    } catch (error) {
      console.warn(`Error reading localStorage key "hm_tool_${key}":`, error);
    }
  }, [key]);

  const setValue = (value: T | ((prev: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(`hm_tool_${key}`, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.warn(`Error setting localStorage key "hm_tool_${key}":`, error);
    }
  };

  return [storedValue, setValue];
}
