"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Check, ChevronDown, Phone, Mail } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { services, PHONE_DISPLAY, PHONE_TEL, EMAIL, type Lang } from "@/lib/site";
import { useSyncHtmlLang } from "@/lib/use-sync-html-lang";

const helpBullets = {
  en: [
    "A real conversation about your case, not a form letter",
    "Every document prepared and reviewed before it reaches USCIS or the court",
    "Interview and hearing prep so you know what to expect",
    "Honest answers about your odds and your timeline, even when they're not what you hoped to hear",
  ],
  es: [
    "Una conversación real sobre tu caso, no una carta genérica",
    "Cada documento preparado y revisado antes de que llegue a USCIS o a la corte",
    "Preparación para entrevistas y audiencias, para que sepas qué esperar",
    "Respuestas honestas sobre tus posibilidades y tus tiempos, incluso cuando no son lo que esperabas escuchar",
  ],
};

export default function ServiceDetailPage() {
  const params = useParams<{ slug: string }>();
  const [lang, setLang] = useState<Lang>("en");
  const L = lang;
  useSyncHtmlLang(lang);
  const svc = services.find((s) => s.slug === params.slug);

  if (!svc) {
    return (
      <div className="min-h-screen bg-white text-[#1C0A06]">
        <SiteHeader lang={lang} setLang={setLang} active="/services" />
        <main className="max-w-2xl mx-auto px-6 py-24 text-center">
          <h1 className="text-2xl font-normal mb-4">{L === "en" ? "Practice area not found." : "Área de práctica no encontrada."}</h1>
          <Link href="/services" className="text-[#B84832] font-semibold hover:text-[#93381F]">
            {L === "en" ? "← Back to all services" : "← Volver a todos los servicios"}
          </Link>
        </main>
        <SiteFooter lang={lang} setLang={setLang} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#1C0A06]">
      <SiteHeader lang={lang} setLang={setLang} active="/services" />

      <main>
        <div className="relative h-[380px] md:h-[440px] overflow-hidden">
          <img src={svc.photo} alt={svc[L].t} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C0A06]/95 via-[#1C0A06]/45 to-[#1C0A06]/15" />
          <div className="relative h-full flex flex-col justify-end max-w-7xl mx-auto px-6 lg:px-16 pb-10 lg:pb-14">
            <h1 className="text-white text-[2rem] lg:text-[2.6rem] font-normal mb-3 max-w-[22ch]">{svc[L].t}</h1>
            <p className="text-white/65 max-w-[58ch] leading-relaxed mb-6">{svc[L].d}</p>
            <Link href="/book" className="inline-block w-fit px-7 py-3.5 bg-[#B84832] hover:bg-[#D4673B] text-white text-[11px] tracking-[0.2em] uppercase font-bold transition-colors duration-200">
              {L === "en" ? "Book a Consultation" : "Agenda una Consulta"}
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16">
          <div className="max-w-[70ch] mb-16">
            {svc[L].long.map((p, i) => (
              <p key={i} className="text-[#1C0A06]/60 text-[1.05rem] leading-relaxed mb-5">{p}</p>
            ))}
          </div>

          <h2 className="text-[1.2rem] font-normal mb-10">{L === "en" ? "How the Process Works" : "Cómo Funciona el Proceso"}</h2>
          <div className="relative mb-20 max-w-[70ch]">
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-[#1C0A06]/10" />
            <ol className="space-y-10">
              {svc[L].process.map((step, i) => (
                <li key={i} className="relative flex gap-6">
                  <span
                    className="relative z-10 w-10 h-10 rounded-full bg-white border-2 border-[#B84832] text-[#B84832] flex items-center justify-center font-bold shrink-0"
                    style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
                  >
                    {i + 1}
                  </span>
                  <div className="pt-1.5">
                    <p className="text-[1.02rem] font-semibold mb-1.5">{step.t}</p>
                    <p className="text-[0.92rem] text-[#1C0A06]/55 leading-relaxed">{step.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="mb-16">
            <h2 className="text-[1.2rem] font-normal mb-6">{L === "en" ? "What Typically Matters" : "Qué Suele Importar"}</h2>
            <div className="border border-[#1C0A06]/10 bg-white divide-y divide-[#1C0A06]/8 max-w-[70ch]">
              {svc[L].requirements.map((r, i) => (
                <div key={i} className="flex items-start gap-4 p-6">
                  <div className="w-9 h-9 border border-[#B84832]/40 flex items-center justify-center shrink-0">
                    <Check size={14} className="text-[#B84832]" />
                  </div>
                  <span className="text-[0.92rem] text-[#1C0A06]/60 leading-relaxed pt-1.5">{r}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-[70ch]">
            <h2 className="text-[1.2rem] font-normal mb-5">{L === "en" ? "Common Questions" : "Preguntas Frecuentes"}</h2>
            <div className="border-t border-[#1C0A06]/8">
              {svc[L].faqs.map((f, i) => (
                <details key={i} className="group border-b border-[#1C0A06]/8">
                  <summary className="flex items-center justify-between gap-4 py-4 cursor-pointer text-[0.95rem] font-medium marker:content-none [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <ChevronDown size={16} className="text-[#1C0A06]/35 shrink-0 transition-transform duration-200 group-open:rotate-180" />
                  </summary>
                  <p className="text-[#1C0A06]/55 text-[0.9rem] leading-relaxed pb-5 max-w-[62ch]">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>

        <section className="bg-[#0E0503] py-20 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6 lg:px-16">
            <h2 className="text-white font-normal text-[clamp(1.7rem,3.6vw,2.6rem)] max-w-[20ch] mb-10">
              {L === "en" ? "How Vannia Can Help" : "Cómo Vannia Te Puede Ayudar"}
            </h2>
            <ul className="grid sm:grid-cols-2 gap-5 mb-12">
              {helpBullets[L].map((b, i) => (
                <li key={i} className="flex gap-3 text-[0.93rem] text-white/60 leading-relaxed">
                  <Check size={16} className="text-[#D4673B] shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-white/10">
              <Link href="/book" className="inline-block px-8 py-4 bg-[#B84832] hover:bg-[#D4673B] text-white text-[11px] tracking-[0.3em] uppercase font-bold transition-colors duration-200">
                {L === "en" ? "Start with a Consultation" : "Empecemos con una Consulta"}
              </Link>
              <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2 text-white/55 hover:text-white text-[0.9rem] transition-colors">
                <Phone size={15} /> {PHONE_DISPLAY}
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-white/55 hover:text-white text-[0.9rem] transition-colors">
                <Mail size={15} /> {EMAIL}
              </a>
            </div>
            <p className="text-white/40 text-[0.85rem] mt-8">
              {L === "en" ? "Licensed to practice in California since 2006." : "Licenciada para ejercer en California desde 2006."}{" "}
              <Link href="/about" className="text-[#D4673B] hover:text-white transition-colors">
                {L === "en" ? "Read her story →" : "Conoce su historia →"}
              </Link>
            </p>
          </div>
        </section>
      </main>

      <SiteFooter lang={lang} setLang={setLang} />
    </div>
  );
}
