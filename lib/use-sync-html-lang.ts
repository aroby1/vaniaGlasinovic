"use client";

import { useEffect, useSyncExternalStore } from "react";
import type { Lang } from "@/lib/site";

// The visitor's ES/EN choice is saved in localStorage so it carries across pages and visits.
const KEY = "lang";
const listeners = new Set<() => void>();

function read(): Lang {
  try {
    return localStorage.getItem(KEY) === "en" ? "en" : "es";
  } catch {
    return "es";
  }
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  window.addEventListener("storage", cb);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", cb);
  };
}

function setLang(lang: Lang) {
  try {
    localStorage.setItem(KEY, lang);
  } catch {}
  listeners.forEach((cb) => cb());
}

// Shared language state for every page. Also keeps <html lang> in sync (WCAG 3.1.1).
export function useLang(): [Lang, (l: Lang) => void] {
  const lang = useSyncExternalStore(subscribe, read, () => "es" as Lang);
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return [lang, setLang];
}
