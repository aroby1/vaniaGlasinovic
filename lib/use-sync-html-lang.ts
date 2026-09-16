"use client";

import { useEffect } from "react";
import type { Lang } from "@/lib/site";

// Keeps <html lang> in sync with the page's language toggle (WCAG 3.1.1).
export function useSyncHtmlLang(lang: Lang) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
}
