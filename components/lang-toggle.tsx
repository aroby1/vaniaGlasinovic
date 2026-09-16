"use client";

import type { Lang } from "@/lib/site";

export function LangToggle({
  lang,
  setLang,
  variant = "light",
  labels = "code",
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
  variant?: "light" | "dark";
  labels?: "code" | "full";
}) {
  const dark = variant === "dark";
  const enLabel = labels === "full" ? "English" : "EN";
  const esLabel = labels === "full" ? "Español" : "ES";
  return (
    <div
      className={`inline-flex items-center rounded-full border overflow-hidden text-[10px] font-bold tracking-wide shrink-0 ${
        dark ? "border-white/20" : "border-[#1C0A06]/15"
      }`}
      role="group"
      aria-label="Language"
    >
      <button
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        title="Switch to English"
        className={`px-2.5 py-1 transition-colors ${
          lang === "en"
            ? "bg-[#B84832] text-white"
            : dark
              ? "text-white/45 hover:text-white"
              : "text-[#1C0A06]/45 hover:text-[#B84832]"
        }`}
      >
        {enLabel}
      </button>
      <button
        onClick={() => setLang("es")}
        aria-pressed={lang === "es"}
        title="Cambiar a español"
        className={`px-2.5 py-1 transition-colors ${
          lang === "es"
            ? "bg-[#B84832] text-white"
            : dark
              ? "text-white/45 hover:text-white"
              : "text-[#1C0A06]/45 hover:text-[#B84832]"
        }`}
      >
        {esLabel}
      </button>
    </div>
  );
}
