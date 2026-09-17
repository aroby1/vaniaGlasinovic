"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, ChevronDown, ArrowRight, Phone, Check } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactForm } from "@/components/contact-form";
import { PHONE_DISPLAY, PHONE_TEL, services, type Lang } from "@/lib/site";
import { useSyncHtmlLang } from "@/lib/use-sync-html-lang";

const HERO_BG = "https://images.unsplash.com/photo-1628783629868-19fb7eb52e2a?w=1920&h=1080&fit=crop&auto=format";
const FAMILY_BG = "https://images.unsplash.com/photo-1638202948587-ac48463ddb1f?w=1920&h=1200&fit=crop&auto=format";

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const [activeSvc, setActiveSvc] = useState(0);
  const L = lang;
  useSyncHtmlLang(lang);
  const shown = services[activeSvc];

  return (
    <div className="min-h-screen bg-white text-[#1C0A06]">
      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        .fu2{animation:fadeUp .6s ease both .1s}
        .fu3{animation:fadeUp .6s ease both .25s}
        .fu4{animation:fadeUp .6s ease both .4s}
        @keyframes kbZoom { from{transform:scale(1)} to{transform:scale(1.07)} }
        .kb-anim{animation:kbZoom 22s ease-in-out infinite alternate}
        @media (prefers-reduced-motion: reduce) {
          .fu2,.fu3,.fu4{animation:none;opacity:1;transform:none}
          .kb-anim{animation:none}
        }
      `}</style>

      <SiteHeader lang={lang} setLang={setLang} active="/" />

      {/* Hero — photo band, same fixed height/treatment as Services and Book */}
      <div className="relative h-[420px] lg:h-[460px] overflow-hidden">
        <img
          src={HERO_BG}
          alt=""
          aria-hidden
          className="kb-anim absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C0A06]/92 via-[#1C0A06]/55 to-[#1C0A06]/35" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <h1
            className="fu2 font-medium leading-[1.15] mb-5 text-[clamp(2rem,4vw,3.2rem)] text-white"
            style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
          >
            {L === "en"
              ? <>The Attorney Who&apos;s <span className="text-[#D4673B] italic">Lived</span> Your Journey,<br />Fighting For Your <span className="text-[#D4673B] italic">Future</span>.</>
              : <>La Abogada Que <span className="text-[#D4673B] italic">Vivió</span> Tu Camino,<br />Luchando Por Tu <span className="text-[#D4673B] italic">Futuro</span>.</>}
          </h1>
          <p className="fu3 text-white/65 text-[1.05rem] max-w-[52ch] leading-relaxed mb-8">
            {L === "en"
              ? "Serving Oregon and California, in English and Spanish."
              : "Sirviendo a Oregón y California, en inglés y español."}
          </p>
          <div className="fu4 flex flex-col sm:flex-row gap-4">
            <Link href="/book" className="px-8 py-4 bg-[#B84832] hover:bg-[#D4673B] text-white text-[11px] tracking-[0.3em] uppercase font-bold transition-colors duration-200 text-center">
              {L === "en" ? "Free Consultation" : "Consulta Gratis"}
            </Link>
            <Link href="/services" className="px-8 py-4 border border-white/25 hover:border-white/60 hover:bg-white/8 text-white text-[11px] tracking-[0.3em] uppercase font-bold transition-all duration-200 text-center">
              {L === "en" ? "Our Practice Areas" : "Áreas de Práctica"}
            </Link>
          </div>
        </div>
      </div>

      {/* Services preview — white, terracotta accent only */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16 border-b border-[#1C0A06]/8 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl lg:text-5xl font-medium" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>{L === "en" ? "How She Can Help" : "Cómo Podemos Ayudarte"}</h2>
          </div>
          <Link href="/services" className="text-[#B84832] text-[10px] tracking-widest uppercase font-bold hover:text-[#D4673B] transition-colors hidden sm:flex items-center gap-1 shrink-0">
            {L === "en" ? "View All" : "Ver Todos"} <ChevronRight size={11} />
          </Link>
        </div>

        {/* Desktop: click a row, preview updates in the side panel */}
        <div className="hidden lg:grid max-w-7xl mx-auto px-6 lg:px-16 lg:grid-cols-[2fr_3fr]">
          <div className="lg:border-r border-[#1C0A06]/8">
            {services.map((svc, i) => (
              <button
                key={i}
                onClick={() => setActiveSvc(i)}
                className={`w-full text-left pl-4 lg:pl-6 pr-6 py-7 border-b border-[#1C0A06]/8 flex items-center gap-5 transition-colors duration-200 ${i === activeSvc ? "bg-[#B84832]/8 border-l-2 border-l-[#B84832]" : "border-l-2 border-l-transparent hover:bg-[#1C0A06]/3 hover:border-l-[#B84832]/40"}`}
              >
                <span className="text-[#B84832]/50 text-xs font-bold w-6 shrink-0" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={`text-base font-medium ${i === activeSvc ? "text-[#1C0A06]" : "text-[#1C0A06]/45"}`}>{svc[L].t}</span>
              </button>
            ))}
          </div>

          <Link key={activeSvc} href={`/services/${shown.slug}`} className="group relative min-h-[420px] lg:min-h-0 overflow-hidden block">
            <img src={shown.photo} alt={shown[L].t} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C0A06]/95 via-[#1C0A06]/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-10 lg:p-14">
              <h3 className="text-white text-2xl lg:text-3xl font-medium mb-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>{shown[L].t}</h3>
              <p className="text-white/60 leading-relaxed mb-8 max-w-md">{shown[L].d}</p>
              <span className="inline-flex items-center gap-2 text-[#D4673B] text-[11px] uppercase tracking-[0.3em] font-bold group-hover:gap-4 transition-all duration-200">
                {L === "en" ? "More Information" : "Más Información"} <ArrowRight size={13} />
              </span>
            </div>
          </Link>
        </div>

        {/* Mobile / tablet: each area is its own accordion row, no separate side panel to scroll to */}
        <div className="lg:hidden">
          {services.map((svc, i) => (
            <details key={i} className="group border-b border-[#1C0A06]/8" open={i === 0}>
              <summary className="flex items-center gap-4 px-6 py-6 cursor-pointer marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="text-[#B84832]/50 text-xs font-bold w-6 shrink-0" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-base font-medium">{svc[L].t}</span>
                <ChevronDown size={18} className="text-[#1C0A06]/35 shrink-0 transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <Link href={`/services/${svc.slug}`} className="group/card block px-6 pb-7">
                <div className="relative h-48 overflow-hidden mb-5">
                  <img src={svc.photo} alt={svc[L].t} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C0A06]/70 via-transparent to-transparent" />
                </div>
                <p className="text-[#1C0A06]/55 text-sm leading-relaxed mb-5">{svc[L].d}</p>
                <span className="inline-flex items-center gap-2 text-[#B84832] text-[11px] uppercase tracking-[0.3em] font-bold group-hover/card:gap-3 transition-all duration-200">
                  {L === "en" ? "More Information" : "Más Información"} <ArrowRight size={13} />
                </span>
              </Link>
            </details>
          ))}
        </div>
      </section>

      {/* Book preview */}
      <section className="bg-white py-24 border-t border-[#1C0A06]/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 grid lg:grid-cols-[5fr_7fr] gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-medium leading-tight mb-6" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>
              {L === "en" ? "Schedule Your Free Consultation" : "Agenda Tu Consulta Gratuita"}
            </h2>
            <p className="text-[#1C0A06]/55 text-[15px] leading-relaxed mb-8 max-w-sm">
              {L === "en" ? "Every case begins with a conversation. Pick a time that works for you, or reach out directly." : "Cada caso comienza con una conversación. Elige un horario que te convenga, o contáctanos directamente."}
            </p>
            <Link href="/book" className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#1C0A06]/20 hover:border-[#B84832] hover:text-[#B84832] text-[11px] tracking-[0.3em] uppercase font-bold transition-colors duration-200">
              {L === "en" ? "See Contact Options" : "Ver Opciones de Contacto"}
            </Link>
          </div>
          <div className="bg-white border border-[#1C0A06]/10 p-10 lg:p-14 flex flex-col items-center text-center gap-5">
            <h3 className="text-2xl font-normal">{L === "en" ? "Online booking is coming soon" : "La reserva en línea llega pronto"}</h3>
            <p className="text-[#1C0A06]/55 text-sm max-w-sm">
              {L === "en" ? "For now, call or email to schedule your free consultation." : "Por ahora, llama o escribe para agendar tu consulta gratuita."}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
              <a href={`tel:${PHONE_TEL}`} className="flex-1 py-3.5 px-6 bg-[#B84832] hover:bg-[#1C0A06] text-white text-[11px] tracking-[0.25em] uppercase font-bold transition-colors duration-200 flex items-center justify-center gap-2">
                <Phone size={13} /> {L === "en" ? "Call" : "Llamar"}
              </a>
              <Link href="/book" className="flex-1 py-3.5 px-6 border border-[#B84832]/30 hover:border-[#B84832] text-[11px] tracking-[0.25em] uppercase font-bold transition-colors duration-200 flex items-center justify-center gap-2">
                {L === "en" ? "More" : "Más"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Family / journey — photo section, unavoidably dark for text contrast */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={FAMILY_BG} alt="" aria-hidden className="w-full h-full object-cover" style={{ filter: "saturate(1.05) brightness(0.72)" }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0503]/95 via-[#0E0503]/25 to-[#0E0503]/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E0503]/55 to-transparent" />

        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-16 pt-16 pb-0">
          <div className="max-w-xl mb-14">
            <h2
              className="text-white font-medium leading-tight text-[clamp(2.1rem,4.8vw,3.6rem)] mb-5"
              style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
            >
              {L === "en" ? <>Your path begins with <span className="text-[#D4673B] italic">one conversation.</span></> : <>Tu camino comienza con <span className="text-[#D4673B] italic">una conversación.</span></>}
            </h2>
            <p className="text-white/55 text-lg leading-relaxed">
              {L === "en" ? "Three steps stand between you and clarity on your immigration case." : "Tres pasos te separan de la claridad sobre tu caso de inmigración."}
            </p>
          </div>
          <div className="grid md:grid-cols-3 md:border-t md:border-[#D4673B]/25">
            {[
              { en: { t: "Book a Free Consultation", d: "Call or fill out our contact form. We respond within one business day, in English or Spanish." }, es: { t: "Agenda una Consulta Gratuita", d: "Llama o completa nuestro formulario. Respondemos en un día hábil, en inglés o español." } },
              { en: { t: "Review Your Options Together", d: "We evaluate your unique situation and outline every viable legal path, no surprises." }, es: { t: "Revisa Tus Opciones Juntos", d: "Evaluamos tu situación y delineamos cada camino legal viable, sin sorpresas." } },
              { en: { t: "We Fight for Your Future", d: "Vannia handles the filings and hearings. You focus on your life and your family." }, es: { t: "Luchamos por Tu Futuro", d: "Vannia maneja las solicitudes y audiencias. Tú te enfocas en tu vida y tu familia." } },
            ].map((step, i) => (
              <div key={i} className="relative p-8 lg:p-10 md:pt-12">
                <span
                  className="hidden md:flex absolute -top-[19px] left-8 lg:left-10 w-9 h-9 rounded-full bg-[#B84832] border-2 border-[#0E0503] text-white items-center justify-center font-bold text-[15px]"
                  style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
                >
                  {i + 1}
                </span>
                <span className="md:hidden inline-flex w-7 h-7 rounded-full bg-[#B84832] text-white items-center justify-center font-bold text-[13px] mb-3" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>
                  {i + 1}
                </span>
                <h3 className="text-white text-lg font-medium mb-2">{step[L].t}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{step[L].d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose Vannia — real differentiators, not a repeat of the hero's story */}
      <section className="bg-white py-24 border-t border-[#1C0A06]/8">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-medium mb-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>
            {L === "en" ? "Why Work With Vannia" : "Por Qué Trabajar con Vannia"}
          </h2>
          <p className="text-[#1C0A06]/55 text-[1.05rem] leading-relaxed mb-10 max-w-xl mx-auto">
            {L === "en"
              ? "Not just legal expertise, a lived understanding of what you're going through."
              : "No solo experiencia legal, sino comprensión vivida de lo que estás pasando."}
          </p>

          <div className="flex justify-center border-t border-b border-[#1C0A06]/10 mb-10">
            {[
              { v: "2006", en: "Licensed, California", es: "Licenciada, California" },
              { v: "EN / ES", en: "Bilingual", es: "Bilingüe" },
            ].map((c, i) => (
              <div key={i} className={`flex-1 max-w-[220px] py-5 px-4 ${i === 0 ? "border-r border-[#1C0A06]/10" : ""}`}>
                <p className="font-semibold text-lg mb-1" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>{c.v}</p>
                <p className="text-[#1C0A06]/45 text-[10.5px] tracking-wide uppercase">{L === "en" ? c.en : c.es}</p>
              </div>
            ))}
          </div>

          <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-4 text-left max-w-xl mx-auto mb-10">
            {[
              { en: "She lived the same immigration journey you're living now.", es: "Ella vivió el mismo proceso migratorio que tú estás viviendo ahora." },
              { en: "Consultations and representation fully in English or Spanish, no intermediaries.", es: "Consultas y representación completamente en inglés o español, sin intermediarios." },
              { en: "Personal attention: you speak directly with Vannia, not an assistant.", es: "Trato personal: hablas directamente con Vannia, no con un asistente." },
              { en: "Serving clients across Oregon and California.", es: "Atendemos a clientes en Oregón y California." },
            ].map((item, i) => (
              <li key={i} className="flex gap-2.5 text-sm text-[#1C0A06]/60 leading-relaxed">
                <Check size={16} className="text-[#B84832] shrink-0 mt-0.5" />
                <span>{L === "en" ? item.en : item.es}</span>
              </li>
            ))}
          </ul>

          <Link href="/about" className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#B84832]/30 hover:border-[#B84832] hover:bg-[#B84832]/5 text-[#B84832] text-[11px] tracking-[0.3em] uppercase font-bold transition-colors duration-200">
            {L === "en" ? "Learn More About Vannia" : "Conoce Más Sobre Vannia"} <ChevronRight size={13} />
          </Link>
        </div>
      </section>

      {/* Homepage FAQ — general questions, distinct from the per-service FAQs on each detail page */}
      <section className="bg-white py-24 border-t border-[#1C0A06]/8">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-medium mb-3 text-center" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>
            {L === "en" ? "Common Questions" : "Preguntas Frecuentes"}
          </h2>
          <p className="text-[#1C0A06]/55 text-[1.05rem] mb-10 text-center">
            {L === "en" ? "A few things people ask before their first call." : "Algunas preguntas frecuentes antes de la primera llamada."}
          </p>
          <div className="border-t border-[#1C0A06]/8">
            {[
              {
                en: { q: "Is the consultation confidential?", a: "Yes. What you share with Vannia stays between you and her." },
                es: { q: "¿La consulta es confidencial?", a: "Sí. Lo que compartas con Vannia queda entre tú y ella." },
              },
              {
                en: { q: "Do you work with clients outside Eugene?", a: "Yes. Vannia represents clients across Oregon and California." },
                es: { q: "¿Trabajan con clientes fuera de Eugene?", a: "Sí. Vannia representa a clientes en Oregón y California." },
              },
              {
                en: { q: "I'm not sure which service I need. What do I do?", a: "Start with a consultation. Vannia reviews your situation and tells you clearly which path applies, no pressure." },
                es: { q: "No sé cuál servicio necesito. ¿Qué hago?", a: "Empieza con una consulta. Vannia revisa tu situación y te dice con claridad cuál es tu camino, sin presión." },
              },
              {
                en: { q: "Do I need to speak English?", a: "No. Every step, from your first call to hearing prep, is available fully in Spanish." },
                es: { q: "¿Necesito hablar inglés?", a: "No. Cada paso, desde tu primera llamada hasta la preparación para audiencias, está disponible completamente en español." },
              },
            ].map((f, i) => (
              <details key={i} className="group border-b border-[#1C0A06]/8">
                <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer text-[0.98rem] font-medium marker:content-none [&::-webkit-details-marker]:hidden">
                  {f[L].q}
                  <ChevronDown size={16} className="text-[#1C0A06]/35 shrink-0 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="text-[#1C0A06]/55 text-[0.92rem] leading-relaxed pb-5 max-w-[62ch]">{f[L].a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="bg-white py-24 border-t border-[#1C0A06]/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 grid lg:grid-cols-[5fr_7fr] gap-16 items-start">
          <div>
            <h2 className="text-3xl lg:text-4xl font-medium leading-tight mb-6" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>{L === "en" ? "Tell Us About Your Case" : "Cuéntanos Sobre Tu Caso"}</h2>
            <p className="text-[#1C0A06]/55 text-[15px] leading-relaxed max-w-sm">
              {L === "en" ? "Prefer to write first? Send a few details and we'll follow up to book your consultation." : "¿Prefieres escribir primero? Envía algunos detalles y te contactaremos para agendar tu consulta."}
            </p>
          </div>
          <ContactForm L={L} />
        </div>
      </section>

      {/* Payment preview */}
      <section className="bg-white py-24 border-t border-[#1C0A06]/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="border border-[#1C0A06]/10 grid lg:grid-cols-[3fr_2fr]">
            <div className="p-10 lg:p-14 border-b lg:border-b-0 lg:border-r border-[#1C0A06]/10">
              <h2 className="text-2xl lg:text-3xl font-medium leading-tight mb-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>{L === "en" ? "Pay Your Legal Fees Online" : "Paga Tus Honorarios En Línea"}</h2>
              <p className="text-[#1C0A06]/50 text-[15px] leading-relaxed max-w-md mb-8">
                {L === "en" ? "We accept secure online payments through our Docketwise client portal." : "Aceptamos pagos seguros en línea a través de nuestro portal de clientes Docketwise."}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {["Visa", "Mastercard", "Amex", "Discover", "ACH"].map((c) => (
                  <span key={c} className="border border-[#1C0A06]/12 text-[#1C0A06]/40 text-[9px] tracking-widest uppercase px-3 py-1.5 font-bold">{c}</span>
                ))}
              </div>
            </div>
            <div className="p-10 lg:p-14 flex flex-col justify-center gap-4">
              <Link href="/payment" className="w-full py-5 px-8 bg-[#B84832] hover:bg-[#D4673B] text-white text-[12px] tracking-[0.3em] uppercase font-bold transition-colors duration-200 text-center flex items-center justify-center gap-2.5">
                {L === "en" ? "Make a Payment" : "Realizar un Pago"} <ArrowRight size={15} />
              </Link>
              <Link href="/payment" className="w-full py-4 px-8 border border-[#1C0A06]/15 hover:border-[#B84832]/60 text-[#1C0A06]/60 hover:text-[#B84832] text-[11px] tracking-[0.25em] uppercase font-bold transition-all duration-200 text-center">
                {L === "en" ? "More Information" : "Más Información"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter lang={lang} setLang={setLang} />
    </div>
  );
}
