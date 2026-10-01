"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactForm } from "@/components/contact-form";
import { services, type Lang } from "@/lib/site";
import { useSyncHtmlLang } from "@/lib/use-sync-html-lang";

export default function ServicesPage() {
  const [lang, setLang] = useState<Lang>("en");
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
              <Link key={i} href={`/services/${s.slug}`} className="group flex flex-col">
                <div className="relative h-44 overflow-hidden rounded-2xl mb-5">
                  <img
                    src={s.photo}
                    alt=""
                    aria-hidden
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.04]"
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
                <h2 className="text-[1.1rem] leading-snug font-medium mb-3 pb-3 border-b border-[#B84832]/25 sm:min-h-[4.1rem] transition-colors duration-300 group-hover:text-[#B84832]">{s[L].t}</h2>
                <p className="text-[#1C0A06]/55 text-[0.9rem] leading-relaxed mb-4">{s[L].d}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-[#B84832] text-[13px] font-semibold">
                  {L === "en" ? "Learn more" : "Más información"}
                  <ArrowRight size={14} strokeWidth={1.75} className="transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>

        <section className="bg-white py-24 border-t border-[#1C0A06]/8">
          <div className="max-w-7xl mx-auto px-6 lg:px-16 grid lg:grid-cols-[5fr_7fr] gap-16 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl font-normal leading-tight mb-6">
                {L === "en" ? "Tell Us About Your Case" : "Cuéntanos Sobre Tu Caso"}
              </h2>
              <p className="text-[#1C0A06]/55 text-[15px] leading-relaxed max-w-sm">
                {L === "en"
                  ? "Send a few details and Vannia will follow up to tell you which practice area fits your situation, and what your next step looks like."
                  : "Envía algunos detalles y Vannia te contactará para decirte cuál área aplica a tu situación, y cómo se ve tu próximo paso."}
              </p>
            </div>
            <ContactForm L={L} />
          </div>
        </section>
      </main>

      <SiteFooter lang={lang} setLang={setLang} />
    </div>
  );
}
