"use client";

import { useState } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { type Lang } from "@/lib/site";
import { useSyncHtmlLang } from "@/lib/use-sync-html-lang";

export default function AboutPage() {
  const [lang, setLang] = useState<Lang>("en");
  const L = lang;
  useSyncHtmlLang(lang);

  return (
    <div className="min-h-screen bg-white text-[#1C0A06]">
      <SiteHeader lang={lang} setLang={setLang} active="/about" />

      <main>
        <div className="max-w-2xl mx-auto px-6 pt-20 pb-0 text-center">
          {/* Placeholder until her real headshot is supplied */}
          <div className="w-28 h-28 rounded-full bg-[#1C0A06] flex items-center justify-center mx-auto mb-9">
            <span className="text-white text-[2.2rem] font-medium" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>VG</span>
          </div>
          <h1 className="font-normal text-[clamp(2rem,4.4vw,2.8rem)] mb-2.5" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>
            Vannia Glasinovic
          </h1>
          <p className="text-[#B84832] text-sm font-semibold mb-1">
            {L === "en" ? "Immigration & Environmental Attorney" : "Abogada de Inmigración y Derecho Ambiental"}
          </p>
          <p className="text-[#1C0A06]/40 text-sm mb-9">Eugene, Oregon</p>
          <div className="w-9 h-0.5 bg-[#B84832] mx-auto mb-9" />

          <div className="text-left space-y-5 mb-11">
            <p className="text-[#1C0A06]/65 leading-loose text-[1.05rem]">
              {L === "en"
                ? "Vannia Glasinovic is an attorney based in Eugene, Oregon, primarily focusing on immigration law and environmental law. Originally from Bolivia, she migrated to the United States and transitioned from environmental advocacy into immigration law, helping immigrants navigate the legal system while actively fighting discrimination."
                : "Vannia Glasinovic es una abogada con sede en Eugene, Oregón, que se enfoca principalmente en el derecho de inmigración y el derecho ambiental. Originaria de Bolivia, emigró a los Estados Unidos y pasó del activismo ambiental al derecho de inmigración, ayudando a los inmigrantes a navegar el sistema legal mientras lucha activamente contra la discriminación."}
            </p>
            <p className="text-[#1C0A06]/65 leading-loose text-[1.05rem]">
              {L === "en"
                ? "She knows the weight of the paperwork, the waiting, and the hope. That's why she guides every case as if it were her own."
                : "Ella conoce el peso del papeleo, la espera, y la esperanza. Por eso guía cada caso como si fuera el suyo propio."}
            </p>
            <blockquote className="italic text-[1.2rem] leading-relaxed my-11 pl-5 border-l-2 border-[#B84832]" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>
              {L === "en"
                ? '"I understand what it means to navigate a new country alone. That experience drives every case I take."'
                : '"Entiendo lo que significa navegar un país nuevo sola. Esa experiencia impulsa cada caso que tomo."'}
              <cite className="block not-italic font-sans text-xs tracking-wide uppercase text-[#1C0A06]/40 mt-3">- Vannia Glasinovic</cite>
            </blockquote>
          </div>

          <div className="flex flex-wrap border-t border-b border-[#1C0A06]/13 mb-14">
            {[
              { label: { en: "License", es: "Licencia" }, value: { en: "California State Bar, 2006", es: "Barra de California, 2006" } },
              { label: { en: "Languages", es: "Idiomas" }, value: { en: "English · Español", es: "English · Español" } },
            ].map((f, i) => (
              <div key={i} className="flex-1 p-5 border-r border-[#1C0A06]/13 last:border-r-0">
                <p className="text-[#1C0A06]/40 text-[11px] tracking-wide uppercase font-bold mb-1.5">{f.label[L]}</p>
                <p className="text-[#1C0A06] text-[0.98rem] font-semibold">{f.value[L]}</p>
              </div>
            ))}
          </div>

          <div className="text-left pb-20">
            <h2 className="italic text-[1.3rem] mb-3" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>
              {L === "en" ? 'Featured in "Upward Migration"' : 'Destacada en "Upward Migration"'}
            </h2>
            <p className="text-[#1C0A06]/65 leading-loose text-sm mb-6">
              {L === "en"
                ? "Her personal and professional journey from Bolivia to Oregon is documented in this short film, produced as part of the University of Oregon's Latino Roots project."
                : "Su trayectoria personal y profesional desde Bolivia hasta Oregón está documentada en este cortometraje, producido como parte del proyecto Latino Roots de la Universidad de Oregón."}
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Link href="/book" className="px-7 py-3.5 bg-[#B84832] hover:bg-[#D4673B] text-white text-[11px] tracking-[0.2em] uppercase font-bold transition-colors duration-200">
                {L === "en" ? "Book a Consultation" : "Agenda una Consulta"}
              </Link>
              <a href="https://latinoroots.uoregon.edu/aiovg_videos/upward-migration/" target="_blank" rel="noopener noreferrer" className="text-[#B84832] text-sm font-semibold hover:text-[#93381F]">
                {L === "en" ? "Watch the Film →" : "Ver el Documental →"}
              </a>
            </div>
          </div>
        </div>

        <section className="bg-[#0E0503] text-center py-20 border-t border-white/5">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-white font-normal text-[clamp(1.8rem,4.4vw,3rem)] max-w-[18ch] mx-auto mb-7">
              {L === "en" ? "Ready to tell her your story?" : "¿Lista para contarle su historia?"}
            </h2>
            <Link href="/book" className="inline-block px-8 py-4 bg-[#B84832] hover:bg-[#D4673B] text-white text-[11px] tracking-[0.3em] uppercase font-bold transition-colors duration-200">
              {L === "en" ? "Book Your Free Consultation" : "Agenda tu Consulta Gratis"}
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter lang={lang} setLang={setLang} />
    </div>
  );
}
