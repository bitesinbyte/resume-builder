import { useState, useEffect, useRef, useCallback } from "react";
import { Resume } from "@/types/resume";
import { DefaultResumeData } from "@/config/default-resume-data";

const STORAGE_KEY = "resume-builder-data";
const DEBOUNCE_MS = 500;

function loadFromStorage(): Resume | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as Resume;
  } catch {
    return null;
  }
}

function saveToStorage(data: Resume): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // Storage full or unavailable — silently ignore
  }
}

/**
 * Drop-in replacement for useState<Resume> that auto-persists to localStorage.
 * - Loads saved data on mount (falls back to DefaultResumeData)
 * - Debounces writes by 500ms to avoid excessive serialization
 * - SSR-safe: only reads localStorage after hydration
 */
export function useResumeStorage(): [Resume, React.Dispatch<React.SetStateAction<Resume>>] {
  const [data, setData] = useState<Resume>(DefaultResumeData);
  const [hydrated, setHydrated] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Load from localStorage once after hydration
  useEffect(() => {
    const saved = loadFromStorage();
    if (saved) setData(saved);
    setHydrated(true);
  }, []);

  // Debounced save on every change (skip until hydrated to avoid
  // overwriting stored data with the default on first render)
  useEffect(() => {
    if (!hydrated) return;

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => saveToStorage(data), DEBOUNCE_MS);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [data, hydrated]);

  // Flush any pending debounce before the tab closes
  useEffect(() => {
    const flush = () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      if (hydrated) saveToStorage(data);
    };
    window.addEventListener("beforeunload", flush);
    return () => window.removeEventListener("beforeunload", flush);
  }, [data, hydrated]);

  // Wrap setData so external callers (like LoadUnload) automatically
  // trigger the debounced save via the normal state-change effect
  const setResumeData: React.Dispatch<React.SetStateAction<Resume>> = useCallback(
    (action) => setData(action),
    [],
  );

  return [data, setResumeData];
}

/** Remove all saved resume data from localStorage */
export function clearResumeStorage(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}
