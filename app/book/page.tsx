"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ClipboardList, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactForm } from "@/components/contact-form";
import { PHONE_DISPLAY, PHONE_TEL, EMAIL, type Lang } from "@/lib/site";
import { useSyncHtmlLang } from "@/lib/use-sync-html-lang";

export default function BookPage() {
  const [lang, setLang] = useState<Lang>("en");
  const L = lang;
  useSyncHtmlLang(lang);

  return (
    <div className="min-h-screen bg-white text-[#1C0A06]">
      <SiteHeader lang={lang} setLang={setLang} active="/book" />

      <main>
        <div className="border-t border-[#1C0A06]/8">
          <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20 lg:py-28 grid lg:grid-cols-[7fr_5fr] gap-12 lg:gap-16 items-center">
            <div className="flex gap-6 lg:gap-8">
              <div className="w-0.5 bg-[#B84832] shrink-0" />
              <div>
                <h1
                  className="font-medium text-[clamp(2.6rem,5.5vw,4.2rem)] max-w-[18ch] mb-6 leading-[1.05]"
                  style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
                >
                  {L === "en"
                    ? <>Let&apos;s Talk <span className="text-[#B84832] italic">This Week</span></>
                    : <>Hablemos <span className="text-[#B84832] italic">Esta Semana</span></>}
                </h1>
                <p className="text-[#1C0A06]/55 text-[1.1rem] max-w-[46ch] leading-relaxed">
                  {L === "en"
                    ? "Every case begins with a conversation, in English or Spanish."
                    : "Cada caso comienza con una conversación, en inglés o español."}
                </p>
              </div>
            </div>

            <div className="border border-[#1C0A06]/10 bg-white p-8">
              <div className="space-y-5 mb-6">
                {[
                  { Icon: Phone, v: PHONE_DISPLAY, href: `tel:${PHONE_TEL}` },
                  { Icon: Mail, v: EMAIL, href: `mailto:${EMAIL}` },
                  { Icon: MapPin, v: "Eugene, Oregon", href: undefined },
                ].map(({ Icon, v, href }, i) => {
                  const row = (
                    <div className="flex items-center gap-4">
                      <div className="w-9 h-9 border border-[#B84832]/40 flex items-center justify-center shrink-0">
                        <Icon size={14} className="text-[#B84832]" />
                      </div>
                      <span className="text-[#1C0A06]/60 text-sm">{v}</span>
                    </div>
                  );
                  return href ? (
                    <a key={i} href={href} className="block hover:opacity-70 transition-opacity">{row}</a>
                  ) : (
                    <div key={i}>{row}</div>
                  );
                })}
              </div>
              <div className="h-px bg-[#1C0A06]/8 mb-6" />
              <p className="text-[#1C0A06]/35 text-xs mb-6">
                {L === "en" ? "Se habla español. All consultations are strictly confidential." : "Se habla español. Todas las consultas son estrictamente confidenciales."}
              </p>
              <a
                href="#contact-form"
                className="block text-center px-8 py-4 bg-[#B84832] hover:bg-[#1C0A06] text-white text-[11px] tracking-[0.3em] uppercase font-bold transition-colors duration-200"
              >
                {L === "en" ? "Send a Message" : "Enviar Mensaje"}
              </a>
            </div>
          </div>
        </div>

        <div id="contact-form" className="max-w-7xl mx-auto px-6 lg:px-16 pt-12 lg:pt-14 pb-16 lg:pb-20 border-t border-[#1C0A06]/8 grid lg:grid-cols-[5fr_7fr] gap-16 items-start">
          <div>
            <h2
              className="font-medium text-[clamp(1.7rem,3vw,2.3rem)] mb-4 leading-tight"
              style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
            >
              {L === "en" ? "Send a Message" : "Envíanos un Mensaje"}
            </h2>
            <p className="text-[#1C0A06]/55 text-[0.98rem] leading-relaxed">
              {L === "en"
                ? "Write a few lines about your situation. We respond within one business day."
                : "Cuéntanos brevemente tu caso. Respondemos en un día hábil."}
            </p>
          </div>

          <ContactForm L={L} />
        </div>

        <section className="bg-white border-t border-[#1C0A06]/8 py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-16">
            <h2 className="font-normal text-[clamp(1.5rem,3vw,2.1rem)] text-center mb-10">
              {L === "en" ? "What to Expect" : "Qué Esperar"}
            </h2>
            <div className="relative max-w-xl mx-auto">
              <div className="absolute left-[19px] top-2 bottom-2 w-px bg-[#1C0A06]/10" />
              <ol className="space-y-8">
                {[
                  { en: { t: "Book a Free Consultation", d: "Call or fill out our contact form. We respond within one business day." }, es: { t: "Agenda una Consulta Gratuita", d: "Llama o completa nuestro formulario. Respondemos en un día hábil." } },
                  { en: { t: "Review Your Options Together", d: "We evaluate your unique situation and outline every viable legal path." }, es: { t: "Revisa Tus Opciones Juntos", d: "Evaluamos tu situación y delineamos cada camino legal viable." } },
                  { en: { t: "We Fight for Your Future", d: "Vannia handles the filings and hearings. You focus on your life." }, es: { t: "Luchamos por Tu Futuro", d: "Vannia maneja las solicitudes y audiencias. Tú te enfocas en tu vida." } },
                ].map((s, i) => (
                  <li key={i} className="relative flex gap-6">
                    <span
                      className="relative z-10 w-10 h-10 rounded-full bg-white border-2 border-[#B84832] text-[#B84832] flex items-center justify-center font-bold shrink-0"
                      style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
                    >
                      {i + 1}
                    </span>
                    <div className="pt-1.5">
                      <p className="text-[1.02rem] font-semibold mb-1.5">{s[L].t}</p>
                      <p className="text-[0.92rem] text-[#1C0A06]/55 leading-relaxed">{s[L].d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-10 border border-[#1C0A06]/10 bg-[#B84832]/[0.04] p-8 lg:p-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
              <div className="w-14 h-14 rounded-full bg-white border border-[#B84832]/30 flex items-center justify-center shrink-0">
                <ClipboardList size={22} className="text-[#B84832]" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-[1.05rem] font-medium mb-1.5">
                  {L === "en" ? "Already Booked a Consultation?" : "¿Ya Agendaste tu Consulta?"}
                </h3>
                <p className="text-[#1C0A06]/55 text-sm leading-relaxed">
                  {L === "en"
                    ? "Fill out your intake form beforehand so Vannia already knows your situation when you talk."
                    : "Completa tu formulario de ingreso antes para que Vannia ya conozca tu situación cuando hablen."}
                </p>
              </div>
              <Link href="/intake" className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 bg-[#B84832] hover:bg-[#1C0A06] text-white text-[11px] tracking-[0.25em] uppercase font-bold transition-colors duration-200">
                {L === "en" ? "Intake Form" : "Formulario"} <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter lang={lang} setLang={setLang} />
    </div>
  );
}
