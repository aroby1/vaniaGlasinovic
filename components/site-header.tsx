"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { LogoMark } from "@/components/logo-mark";
import { LangToggle } from "@/components/lang-toggle";
import { PHONE_DISPLAY, PHONE_TEL, navLinks, type Lang } from "@/lib/site";

const lora = { fontFamily: "var(--font-lora), Georgia, serif" };

// "Dusk Masthead": a dark masthead with her name, the phone number and a payment button,
// over a white menu row. Desktop pins the menu row; phones/tablets pin a compact dark bar instead.
export function SiteHeader({
  lang,
  setLang,
  active,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
  active: string;
}) {
  const [mobile, setMobile] = useState(false);
  const L = lang;
  const role = L === "en" ? "Immigration Attorney" : "Abogada de Inmigración";
  const where = L === "en" ? "Eugene, Oregon" : "Eugene, Oregón";
  const call = L === "en" ? "Call today" : "Llame hoy";
  const pay = L === "en" ? "Make a Payment" : "Hacer un Pago";

  return (
    <>
      {/* Desktop masthead (scrolls away) */}
      <div className="hidden lg:block bg-[#1C0A06] text-white">
        <div className="max-w-7xl mx-auto px-5 py-6 flex items-center justify-between gap-8">
          <Link href="/" className="flex items-center gap-4 min-w-0">
            <LogoMark className="w-12 h-12 text-[#D4673B] shrink-0" />
            <div className="min-w-0">
              <p className="text-[34px] leading-none font-semibold tracking-[-0.01em]" style={lora}>Vannia Glasinovic</p>
              <p className="mt-2 text-[15px] italic text-white/60" style={lora}>
                {role} · {where} · English y Español
              </p>
            </div>
          </Link>
          <div className="flex items-center gap-7 shrink-0">
            <a href={`tel:${PHONE_TEL}`} className="group text-right leading-tight">
              <span className="block text-[14px] italic text-white/60" style={lora}>{call}</span>
              <span className="block text-[28px] font-semibold tabular-nums text-[#D4673B] group-hover:text-[#E07A5F] transition-colors duration-300" style={lora}>
                {PHONE_DISPLAY}
              </span>
            </a>
            <Link
              href="/payment"
              className="rounded-full border border-white/30 px-5 py-2.5 text-[11px] tracking-[0.18em] uppercase font-semibold transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-white/70 hover:bg-white/10"
            >
              {pay}
            </Link>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40">
        {/* Desktop: white menu row, pinned, with the language toggle */}
        <nav className="hidden lg:block bg-white/90 backdrop-blur-md border-b border-[#1C0A06]/8">
          <div className="max-w-7xl mx-auto px-5 h-14 flex items-center justify-between gap-6">
            <ul className="flex items-center gap-6 xl:gap-8">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`text-[11px] tracking-[0.14em] uppercase font-medium transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] whitespace-nowrap ${
                      active === l.href ? "text-[#B84832]" : "text-[#3A1208]/60 hover:text-[#B84832]"
                    }`}
                  >
                    {l[L]}
                  </Link>
                </li>
              ))}
            </ul>
            <LangToggle lang={lang} setLang={setLang} variant="light" labels="full" />
          </div>
        </nav>

        {/* Phones/tablets: compact dark bar, pinned */}
        <div className="lg:hidden bg-[#1C0A06] text-white">
          <div className="px-5 h-16 flex items-center justify-between gap-3">
            <Link href="/" className="flex items-center gap-2.5 min-w-0">
              <LogoMark className="w-8 h-8 text-[#D4673B] shrink-0" />
              <div className="min-w-0 leading-tight">
                <p className="text-[18px] font-semibold truncate" style={lora}>Vannia Glasinovic</p>
                <p className="text-[12px] italic text-white/60 truncate" style={lora}>{role}</p>
              </div>
            </Link>
            <div className="flex items-center gap-2 shrink-0">
              <LangToggle lang={lang} setLang={setLang} variant="dark" />
              <button
                onClick={() => setMobile(!mobile)}
                aria-expanded={mobile}
                aria-label={mobile ? (L === "en" ? "Close menu" : "Cerrar menú") : (L === "en" ? "Open menu" : "Abrir menú")}
                className="p-1.5 text-white"
              >
                {mobile ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
              </button>
            </div>
          </div>

          {mobile && (
            <div className="border-t border-white/10 px-5 py-5 flex flex-col gap-4">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobile(false)}
                  className={`text-[12px] tracking-[0.14em] uppercase font-medium ${
                    active === l.href ? "text-[#D4673B]" : "text-white/70 hover:text-white"
                  }`}
                >
                  {l[L]}
                </Link>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Phones/tablets: call row under the pinned bar (scrolls away) */}
      <a href={`tel:${PHONE_TEL}`} className="lg:hidden flex items-center justify-between gap-3 bg-[#1C0A06] px-5 pb-4 pt-1">
        <span className="text-[14px] italic text-white/60" style={lora}>{call}</span>
        <span className="inline-flex items-center gap-2 text-[20px] font-semibold tabular-nums text-[#D4673B]" style={lora}>
          <Phone size={16} strokeWidth={1.75} /> {PHONE_DISPLAY}
        </span>
      </a>
    </>
  );
}
