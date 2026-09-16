"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { LogoMark } from "@/components/logo-mark";
import { LangToggle } from "@/components/lang-toggle";
import { PHONE_DISPLAY, PHONE_TEL, EMAIL, PAYMENT_URL, navLinks, services, type Lang } from "@/lib/site";

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

  return (
    <>
      <div className="bg-[#0E0503] min-h-9 flex items-center relative z-50 py-1.5">
        <div className="max-w-7xl mx-auto px-5 w-full flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 sm:gap-5 min-w-0">
            <a href={`tel:${PHONE_TEL}`} title={PHONE_DISPLAY} className="flex items-center gap-1.5 text-white/50 hover:text-white text-[10px] tracking-wide transition-colors shrink-0">
              <Phone size={11} /> <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
            </a>
            <span className="hidden sm:block w-px h-3 bg-white/10" />
            <a href={`mailto:${EMAIL}`} className="hidden sm:flex items-center gap-1.5 text-white/50 hover:text-white text-[10px] transition-colors">
              <Mail size={11} /> {EMAIL}
            </a>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <LangToggle lang={lang} setLang={setLang} variant="dark" labels="full" />
            <span className="hidden sm:block w-px h-3 bg-white/10" />
            <a
              href={PAYMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              title={L === "en" ? "Opens Docketwise, our client portal, in a new tab" : "Abre Docketwise, nuestro portal de clientes, en una nueva pestaña"}
              className="text-white/50 hover:text-white sm:bg-[#B84832] sm:hover:bg-[#D4673B] sm:text-white text-[10px] tracking-widest uppercase font-bold sm:px-3 sm:py-1 transition-colors whitespace-nowrap"
            >
              <span className="sm:hidden">{L === "en" ? "Portal" : "Portal"}</span>
              <span className="hidden sm:inline">{L === "en" ? "Docketwise Portal" : "Portal Docketwise"}</span>
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-white/96 backdrop-blur-sm shadow-sm">
        <nav className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-8 h-8 text-[#B84832] shrink-0">
              <LogoMark className="w-full h-full" />
            </div>
            <div className="leading-none">
              <p className="text-[#1C0A06] text-[15px] font-medium" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Glasinovic</p>
              <p className="text-[#B84832] text-[9px] tracking-[0.2em] uppercase">Law Office</p>
            </div>
          </Link>

          <ul className="hidden lg:flex items-center gap-6 xl:gap-7">
            {navLinks.map((l) =>
              l.href === "/services" ? (
                <li key={l.href} className="group relative">
                  <Link
                    href={l.href}
                    className={`flex items-center gap-1 text-[11px] tracking-widest uppercase font-medium transition-colors whitespace-nowrap ${
                      active === l.href ? "text-[#B84832]" : "text-[#3A1208]/55 hover:text-[#B84832]"
                    }`}
                  >
                    {l[L]} <ChevronDown size={12} className="transition-transform duration-150 group-hover:rotate-180" />
                  </Link>
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-150 z-50">
                    <div className="bg-white border border-[#1C0A06]/10 shadow-lg w-64 py-2">
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className="block px-4 py-2.5 text-[12px] text-[#1C0A06]/65 hover:text-[#B84832] hover:bg-[#B84832]/5 transition-colors"
                        >
                          {s[L].t}
                        </Link>
                      ))}
                      <div className="border-t border-[#1C0A06]/8 mt-1 pt-1">
                        <Link
                          href="/services"
                          className="block px-4 py-2.5 text-[11px] uppercase tracking-wide font-bold text-[#B84832] hover:bg-[#B84832]/5 transition-colors"
                        >
                          {L === "en" ? "View All Services" : "Ver Todos los Servicios"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              ) : (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`text-[11px] tracking-widest uppercase font-medium transition-colors whitespace-nowrap ${
                      active === l.href ? "text-[#B84832]" : "text-[#3A1208]/55 hover:text-[#B84832]"
                    }`}
                  >
                    {l[L]}
                  </Link>
                </li>
              )
            )}
          </ul>

          <div className="hidden lg:block shrink-0">
            <Link href="/book" className="px-5 py-2.5 bg-[#B84832] hover:bg-[#1C0A06] text-white text-[10px] tracking-[0.25em] uppercase font-bold transition-colors inline-block">
              {L === "en" ? "Free Consultation" : "Consulta Gratis"}
            </Link>
          </div>

          <button onClick={() => setMobile(!mobile)} className="lg:hidden text-[#1C0A06] p-1">
            {mobile ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {mobile && (
          <div className="lg:hidden bg-white border-t border-[#B84832]/10 px-5 py-5 flex flex-col gap-4 shadow-lg">
            {navLinks.map((l) =>
              l.href === "/services" ? (
                <details key={l.href} className="group">
                  <summary className="flex items-center justify-between text-[11px] tracking-widest uppercase font-medium cursor-pointer marker:content-none [&::-webkit-details-marker]:hidden text-[#3A1208]/55">
                    {l[L]}
                    <ChevronDown size={14} className="transition-transform duration-150 group-open:rotate-180" />
                  </summary>
                  <div className="mt-3 flex flex-col gap-3 pl-3 border-l border-[#1C0A06]/10">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        onClick={() => setMobile(false)}
                        className="text-[11px] text-[#1C0A06]/55 hover:text-[#B84832]"
                      >
                        {s[L].t}
                      </Link>
                    ))}
                    <Link href="/services" onClick={() => setMobile(false)} className="text-[11px] font-bold text-[#B84832]">
                      {L === "en" ? "View All Services" : "Ver Todos los Servicios"}
                    </Link>
                  </div>
                </details>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobile(false)}
                  className={`text-[11px] tracking-widest uppercase text-left font-medium ${
                    active === l.href ? "text-[#B84832]" : "text-[#3A1208]/55 hover:text-[#B84832]"
                  }`}
                >
                  {l[L]}
                </Link>
              )
            )}
            <Link href="/book" onClick={() => setMobile(false)} className="mt-1 py-3 bg-[#B84832] text-white text-[10px] tracking-[0.25em] uppercase font-bold text-center">
              {L === "en" ? "Free Consultation" : "Consulta Gratis"}
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
