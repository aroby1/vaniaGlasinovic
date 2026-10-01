"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Check, ChevronDown, Phone, Mail, ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Cta } from "@/components/cta";
import { services, PHONE_DISPLAY, PHONE_TEL, EMAIL, type Lang } from "@/lib/site";
import { useSyncHtmlLang } from "@/lib/use-sync-html-lang";

const lora = { fontFamily: "var(--font-lora), Georgia, serif" };

export default function ServiceDetailPage() {
  const params = useParams<{ slug: string }>();
  const [lang, setLang] = useState<Lang>("en");
  const L = lang;
  useSyncHtmlLang(lang);
  const i = services.findIndex((s) => s.slug === params.slug);
  const svc = services[i];

  if (!svc) {
    return (
      <div className="min-h-screen bg-white text-[#1C0A06]">
        <SiteHeader lang={lang} setLang={setLang} active="/services" />
        <main className="max-w-2xl mx-auto px-6 py-24 text-center">
          <h1 className="text-2xl font-medium mb-4" style={lora}>{L === "en" ? "Practice area not found." : "Área de práctica no encontrada."}</h1>
          <Link href="/services" className="text-[#B84832] font-semibold hover:text-[#93381F]">
            {L === "en" ? "Back to all services" : "Volver a todos los servicios"}
          </Link>
        </main>
        <SiteFooter lang={lang} setLang={setLang} />
      </div>
    );
  }

  const c = svc[L];
  const next = services[(i + 1) % services.length];

  return (
    <div className="min-h-screen bg-white text-[#1C0A06]">
      <SiteHeader lang={lang} setLang={setLang} active="/services" />

      <main>
        {/* Photo hero, same dark-scrim treatment as the homepage hero */}
        <div className="relative h-[380px] md:h-[440px] overflow-hidden">
          <img src={svc.photo.replace("w=1200&h=850", "w=2000&h=1000")} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C0A06]/95 via-[#1C0A06]/50 to-[#1C0A06]/20" />
          <div className="relative h-full flex flex-col justify-end max-w-7xl mx-auto px-6 lg:px-16 pb-10 lg:pb-14">
            <Link href="/services" className="inline-flex items-center gap-2 w-fit text-white/60 hover:text-white text-[12px] mb-5 transition-colors duration-300">
              <ArrowLeft size={14} strokeWidth={1.75} /> {L === "en" ? "All practice areas" : "Todas las áreas de práctica"}
            </Link>
            <h1 className="text-white text-[clamp(1.9rem,4vw,2.8rem)] leading-[1.15] font-medium mb-4 max-w-[24ch]" style={lora}>{c.t}</h1>
            <p className="text-white/70 max-w-[60ch] leading-relaxed">{c.d}</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16 lg:py-20 grid lg:grid-cols-[1fr_340px] gap-14 lg:gap-20 items-start">
          <div className="min-w-0">
            <div className="max-w-[68ch] mb-16">
              {c.long.map((p, k) => (
                <p key={k} className="text-[#1C0A06]/65 text-[1.05rem] leading-relaxed mb-5">{p}</p>
              ))}
            </div>

            <h2 className="text-[1.6rem] font-medium mb-8" style={lora}>{L === "en" ? "How the Process Works" : "Cómo Funciona el Proceso"}</h2>
            <div className="relative mb-16 max-w-[68ch]">
              <div className="absolute left-[19px] top-2 bottom-2 w-px bg-[#1C0A06]/10" />
              <ol className="space-y-9">
                {c.process.map((step, k) => (
                  <li key={k} className="relative flex gap-6">
                    <span className="relative z-10 w-10 h-10 rounded-full bg-white border-2 border-[#B84832] text-[#B84832] flex items-center justify-center font-semibold shrink-0" style={lora}>
                      {k + 1}
                    </span>
                    <div className="pt-1.5">
                      <p className="text-[1.02rem] font-semibold mb-1.5">{step.t}</p>
                      <p className="text-[0.93rem] text-[#1C0A06]/60 leading-relaxed">{step.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <h2 className="text-[1.6rem] font-medium mb-6" style={lora}>{L === "en" ? "What to Bring" : "Qué Traer"}</h2>
            <div className="rounded-[2rem] p-2 bg-[#1C0A06]/[0.03] ring-1 ring-[#1C0A06]/[0.06] mb-16 max-w-[68ch]">
              <ul className="rounded-[1.5rem] bg-white ring-1 ring-[#1C0A06]/[0.06] divide-y divide-[#1C0A06]/8">
                {c.requirements.map((r, k) => (
                  <li key={k} className="flex items-start gap-4 p-5 lg:p-6">
                    <span className="w-8 h-8 rounded-full bg-[#B84832]/8 flex items-center justify-center shrink-0">
                      <Check size={14} strokeWidth={2} className="text-[#B84832]" />
                    </span>
                    <span className="text-[0.95rem] text-[#1C0A06]/65 leading-relaxed pt-1">{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="text-[1.6rem] font-medium mb-5" style={lora}>{L === "en" ? "Common Questions" : "Preguntas Frecuentes"}</h2>
            <div className="border-t border-[#1C0A06]/8 max-w-[68ch]">
              {c.faqs.map((f, k) => (
                <details key={k} className="group border-b border-[#1C0A06]/8">
                  <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer text-[0.98rem] font-medium marker:content-none [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <ChevronDown size={16} strokeWidth={1.75} className="text-[#1C0A06]/35 shrink-0 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="text-[#1C0A06]/60 text-[0.93rem] leading-relaxed pb-5 max-w-[62ch]">{f.a}</p>
                </details>
              ))}
            </div>
            <p className="text-[#1C0A06]/40 text-[12px] leading-relaxed mt-8 max-w-[68ch]">
              {L === "en"
                ? "This page is general information, not legal advice for your situation. Immigration rules change often; talk to Vannia about your specific case."
                : "Esta página es información general, no asesoría legal para tu situación. Las reglas de inmigración cambian con frecuencia; habla con Vannia sobre tu caso específico."}
            </p>
          </div>

          {/* Sticky contact card */}
          <aside className="lg:sticky lg:top-24">
            <div className="rounded-[2rem] p-2 bg-[#1C0A06]/[0.03] ring-1 ring-[#1C0A06]/[0.06]">
              <div className="rounded-[1.5rem] bg-white ring-1 ring-[#1C0A06]/[0.06] p-7">
                <p className="text-[1.25rem] font-medium leading-snug mb-3" style={lora}>
                  {L === "en" ? "Talk to Vannia about your case" : "Habla con Vannia sobre tu caso"}
                </p>
                <p className="text-[#1C0A06]/55 text-[0.9rem] leading-relaxed mb-6">
                  {L === "en" ? "In English or Spanish, in person or by phone." : "En inglés o español, en persona o por teléfono."}
                </p>
                <Cta href="/book" className="w-full mb-6">
                  {L === "en" ? "Book a Consultation" : "Agenda una Consulta"}
                </Cta>
                <div className="space-y-3 pt-5 border-t border-[#1C0A06]/8">
                  <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2.5 text-[#1C0A06]/65 hover:text-[#B84832] text-[0.9rem] transition-colors">
                    <Phone size={15} strokeWidth={1.5} className="text-[#B84832]" /> {PHONE_DISPLAY}
                  </a>
                  <a href={`mailto:${EMAIL}`} className="flex items-center gap-2.5 text-[#1C0A06]/65 hover:text-[#B84832] text-[0.9rem] transition-colors break-all">
                    <Mail size={15} strokeWidth={1.5} className="text-[#B84832] shrink-0" /> {EMAIL}
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Next practice area */}
        <Link href={`/services/${next.slug}`} className="group block border-t border-[#1C0A06]/8">
          <div className="max-w-7xl mx-auto px-6 lg:px-16 py-10 flex items-center justify-between gap-6">
            <div>
              <p className="text-[#1C0A06]/40 text-[12px] mb-1">{L === "en" ? "Next practice area" : "Siguiente área de práctica"}</p>
              <p className="text-[1.2rem] font-medium group-hover:text-[#B84832] transition-colors duration-300" style={lora}>{next[L].t}</p>
            </div>
            <span className="w-11 h-11 rounded-full bg-[#1C0A06]/[0.04] flex items-center justify-center shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1">
              <ArrowLeft size={16} strokeWidth={1.75} className="rotate-180" />
            </span>
          </div>
        </Link>
      </main>

      <SiteFooter lang={lang} setLang={setLang} />
    </div>
  );
}
