"use client";

import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { services, type Lang } from "@/lib/site";
import { useSyncHtmlLang } from "@/lib/use-sync-html-lang";

export default function ServicesPage() {
  const [lang, setLang] = useState<Lang>("es");
  const L = lang;
  useSyncHtmlLang(lang);

  return (
    <div className="min-h-screen bg-white text-[#1C0A06]">
      <SiteHeader lang={lang} setLang={setLang} active="/services" />

      <main>
        <div className="border-t border-[#1C0A06]/8">
          <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-20 lg:pt-28 pb-10 lg:pb-12">
            <h1
              className="font-medium text-[clamp(2rem,4.2vw,3.6rem)] leading-[1.05] mb-7"
              style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
            >
              {L === "en"
                ? <>A <span className="text-[#B84832] italic">Clear Path</span> For Your Case</>
                : <>Un <span className="text-[#B84832] italic">Camino Claro</span> Para Tu Caso</>}
            </h1>
            <p className="text-[#1C0A06]/55 text-[1.02rem] leading-relaxed max-w-[68ch]">
              {L === "en"
                ? "I represent clients before the Board of Immigration Appeals (BIA), U.S. immigration court (EOIR), U.S. Citizenship & Immigration Services (USCIS), Immigration and Customs Enforcement (ICE), and the U.S. Department of State (DOS) in a variety of immigration law matters, including:"
                : "Represento a clientes ante la Junta de Apelaciones de Inmigración (BIA), la corte de inmigración de EE. UU. (EOIR), el Servicio de Ciudadanía e Inmigración (USCIS), el Servicio de Inmigración y Control de Aduanas (ICE), y el Departamento de Estado (DOS) en una variedad de asuntos de inmigración, incluyendo:"}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-12 pb-16 border-t border-[#1C0A06]/8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {services.map((s, i) => (
              <div key={i} className="flex flex-col">
                <div className="relative h-44 overflow-hidden rounded-2xl mb-5">
                  <img
                    src={s.photo}
                    alt=""
                    aria-hidden
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C0A06]/55 via-transparent to-transparent" />
                  <span
                    className="absolute bottom-3 left-4 text-white/70 text-[11px] font-bold"
                    style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                {/* min-height keeps the rule under each title on the same line across a row */}
                <h2 className="text-[1.1rem] leading-snug font-medium mb-3 pb-3 border-b border-[#B84832]/25 sm:min-h-[4.1rem]">{s[L].t}</h2>
                <p className="text-[#1C0A06]/55 text-[0.9rem] leading-relaxed mb-4">{s[L].d}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <SiteFooter lang={lang} setLang={setLang} />
    </div>
  );
}
