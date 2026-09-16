"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactForm } from "@/components/contact-form";
import { services, type Lang } from "@/lib/site";
import { useSyncHtmlLang } from "@/lib/use-sync-html-lang";

export default function ServicesPage() {
  const [lang, setLang] = useState<Lang>("en");
  const L = lang;
  useSyncHtmlLang(lang);
  const practiceAreas = services.slice(0, -1);
  const consultation = services[services.length - 1];

  return (
    <div className="min-h-screen bg-white text-[#1C0A06]">
      <SiteHeader lang={lang} setLang={setLang} active="/services" />

      <main>
        <div className="border-t border-[#1C0A06]/8">
          <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-20 lg:pt-28 pb-10 lg:pb-12">
            <h1
              className="font-medium text-[clamp(2rem,4.2vw,3.6rem)] leading-[1.05] whitespace-normal lg:whitespace-nowrap"
              style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
            >
              {L === "en"
                ? <>A <span className="text-[#B84832] italic">Clear Path</span> For Your Case</>
                : <>Un <span className="text-[#B84832] italic">Camino Claro</span> Para Tu Caso</>}
            </h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-12 pb-16 border-t border-[#1C0A06]/8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {practiceAreas.map((s, i) => (
              <Link
                key={i}
                href={`/services/${s.slug}`}
                className="group border border-[#1C0A06]/10 hover:border-[#B84832]/35 transition-colors duration-200 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={s.photo}
                    alt={s[L].t}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C0A06]/70 via-transparent to-transparent" />
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <h2 className="text-[1.15rem] font-normal mb-3">{s[L].t}</h2>
                  <p className="text-[#1C0A06]/55 text-[0.9rem] leading-relaxed mb-5">{s[L].d}</p>
                  <ul className="space-y-2 mb-6">
                    {s[L].covers.map((c, ci) => (
                      <li key={ci} className="flex gap-2.5 text-[0.82rem] text-[#1C0A06]/50">
                        <Check size={14} className="text-[#B84832] shrink-0 mt-0.5" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto inline-flex items-center gap-2 text-[#B84832] text-[11px] uppercase tracking-[0.2em] font-bold group-hover:gap-3 transition-all duration-200 w-fit">
                    {L === "en" ? "More Information" : "Más Información"} <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <Link
            href={`/services/${consultation.slug}`}
            className="group flex flex-col sm:flex-row items-stretch gap-6 sm:gap-10 border border-[#B84832]/25 bg-[#B84832]/5 hover:bg-[#B84832]/8 transition-colors duration-200 p-8 lg:p-10"
          >
            <div className="flex-1">
              <h2 className="text-[1.15rem] font-normal mb-3">{consultation[L].t}</h2>
              <p className="text-[#1C0A06]/60 text-[0.9rem] leading-relaxed mb-5 max-w-xl">{consultation[L].d}</p>
              <span className="inline-flex items-center gap-2 text-[#B84832] text-[11px] uppercase tracking-[0.2em] font-bold group-hover:gap-3 transition-all duration-200 w-fit">
                {L === "en" ? "More Information" : "Más Información"} <ArrowRight size={13} />
              </span>
            </div>
            <ul className="flex flex-col gap-2.5 justify-center shrink-0 sm:border-l sm:border-[#B84832]/20 sm:pl-8">
              {consultation[L].covers.map((c, ci) => (
                <li key={ci} className="flex gap-2.5 text-[0.82rem] text-[#1C0A06]/55">
                  <Check size={14} className="text-[#B84832] shrink-0 mt-0.5" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </Link>
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
