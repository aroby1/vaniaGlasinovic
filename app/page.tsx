"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Cta } from "@/components/cta";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { services, type Lang } from "@/lib/site";
import { useSyncHtmlLang } from "@/lib/use-sync-html-lang";

const HERO_BG = "/hero-bolivia.webp";
// Trimmed photo, pre-enlarged 2× with lanczos + unsharp (ffmpeg) so it reads crisper than the browser's own upscale.
// The unsharpened hero-bolivia-trimmed.webp is kept as a backup.
const HERO_TRIMMED = "/hero-bolivia-trimmed-sharp.webp";

export default function Home() {
  const [lang, setLang] = useState<Lang>("es");
  const [activeSvc, setActiveSvc] = useState(0);
  const L = lang;
  useSyncHtmlLang(lang);
  const shown = services[activeSvc];

  return (
    <div className="min-h-screen bg-white text-[#1C0A06]">
      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        .fu1{animation:fadeIn .9s cubic-bezier(0.32,0.72,0,1) both}
        .fu2{animation:fadeUp .7s cubic-bezier(0.32,0.72,0,1) both .1s}
        .fu3{animation:fadeUp .7s cubic-bezier(0.32,0.72,0,1) both .25s}
        @media (prefers-reduced-motion: reduce) {
          .fu1,.fu2,.fu3{animation:none;opacity:1;transform:none}
        }
      `}</style>

      <SiteHeader lang={lang} setLang={setLang} active="/" />

      {/* Hero — Illimani above La Paz, Bolivia, in a rounded card with glass controls over it.
          The card spans the header's content width (max-w-7xl, px-5) so its edges line up with the logo
          and the nav. From sm up the card is 782:370 (the trimmed photo, see below), running from the top of the
          mountain down to the town; copy sits straight on the photo (on the right on desktop).
          At full width (~1240px) the photo is enlarged ~1.6×;
          a larger original from the client would sharpen it. */}
      <section className="bg-white max-w-7xl mx-auto px-5 pt-4 sm:pt-8 pb-12 lg:pb-16">
        <div className="fu1 relative overflow-hidden rounded-[24px] sm:rounded-[32px] w-full sm:aspect-[782/370] sm:min-h-[360px]">
          {/* sm+: HERO_TRIMMED, an edit of the client's photo with the foothills between the range and La Paz cut out
              (and the empty sky above the summit), so the card is ~30% shorter. Phones keep the original, whose tall
              shape fits the tall phone card without enlarging it. */}
          <picture>
            <source media="(min-width: 640px)" srcSet={HERO_TRIMMED} width={1564} height={740} />
            <img
              src={HERO_BG}
              alt={L === "en" ? "Illimani mountain above La Paz, Bolivia, at sunset" : "El Illimani sobre La Paz, Bolivia, al atardecer"}
              width={782}
              height={582}
              fetchPriority="high"
              className="absolute inset-0 w-full h-full object-cover object-[30%_top] sm:object-center"
            />
          </picture>
          <span className="absolute right-5 top-4 sm:right-7 sm:top-6 lg:right-auto lg:top-auto lg:left-8 lg:bottom-6 text-[11px] text-white/70 [text-shadow:0_1px_2px_rgba(0,0,0,0.4)]">
            Illimani, La Paz, Bolivia
          </span>
          {/* Copy sits straight on the photo, no box ("Right side", option A of the no-box mockups). Each breakpoint
              darkens only where its text is: phones/tablets a bottom-up shadow under text at the bottom; desktop a shadow
              fading in from the right edge under text on the right, over the clouds, so the peak on the left stays natural. */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C0A06]/85 via-[#1C0A06]/40 via-40% to-transparent to-65% lg:hidden" />
          <div className="absolute inset-0 hidden lg:block bg-[linear-gradient(to_left,rgba(28,10,6,0.74)_0%,rgba(28,10,6,0.46)_34%,rgba(28,10,6,0)_58%)]" />
          <div className="relative sm:absolute sm:inset-0 min-h-[620px] sm:min-h-0 flex flex-col justify-end lg:justify-center lg:items-end p-6 sm:p-10 lg:px-12 xl:px-14">
            <div className="lg:max-w-[45%]">
            <h1
              className="fu2 text-white font-medium leading-[1.08] tracking-[-0.012em] text-[clamp(1.75rem,3.1vw,3rem)] [text-shadow:0_2px_18px_rgba(28,10,6,0.45)]"
              style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
            >
              {L === "en"
                ? "Comprehensive Immigration Legal Services with Experience and Compassion."
                : "Servicios Legales Integrales de Inmigración con Experiencia y Compasión."}
            </h1>
            <div className="fu3 mt-6 sm:mt-7 flex flex-wrap items-center gap-2">
              <Cta href="/services" className="mr-2 mb-1 sm:mb-0">
                {L === "en" ? "Our Practice Areas" : "Áreas de Práctica"}
              </Cta>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice areas — click a row, the panel on the right updates. Nothing links out. */}
      <section className="bg-white border-t border-[#1C0A06]/8 pb-24">
        <div className="reveal max-w-7xl mx-auto px-6 lg:px-16 pt-20 pb-12">
          <h2 className="text-3xl lg:text-5xl font-medium mb-6" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>
            {L === "en" ? "How She Can Help" : "Cómo Puede Ayudarte"}
          </h2>
          <p className="text-[#1C0A06]/55 text-[1.02rem] leading-relaxed max-w-[68ch]">
            {L === "en"
              ? "I represent clients before the Board of Immigration Appeals (BIA), U.S. immigration court (EOIR), U.S. Citizenship & Immigration Services (USCIS), Immigration and Customs Enforcement (ICE), and the U.S. Department of State (DOS) in a variety of immigration law matters, including:"
              : "Represento a clientes ante la Junta de Apelaciones de Inmigración (BIA), la corte de inmigración de EE. UU. (EOIR), el Servicio de Ciudadanía e Inmigración (USCIS), el Servicio de Inmigración y Control de Aduanas (ICE), y el Departamento de Estado (DOS) en una variedad de asuntos de inmigración, incluyendo:"}
          </p>
        </div>

        {/* Desktop: list on the left, photo + description on the right */}
        <div className="hidden lg:grid max-w-7xl mx-auto px-6 lg:px-16 lg:grid-cols-[2fr_3fr] gap-10">
          <div className="border-t border-[#1C0A06]/8">
            {services.map((svc, i) => (
              <button
                key={i}
                onClick={() => setActiveSvc(i)}
                aria-pressed={i === activeSvc}
                className={`w-full text-left pl-4 lg:pl-6 pr-6 py-4 border-b border-[#1C0A06]/8 flex items-start gap-4 transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${i === activeSvc ? "bg-[#B84832]/8 border-l-2 border-l-[#B84832]" : "border-l-2 border-l-transparent hover:bg-[#1C0A06]/3 hover:border-l-[#B84832]/40"}`}
              >
                <span className="text-[#B84832]/50 text-[11px] font-bold w-6 shrink-0 mt-1" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={`text-[0.95rem] leading-snug font-medium ${i === activeSvc ? "text-[#1C0A06]" : "text-[#1C0A06]/45"}`}>{svc[L].t}</span>
              </button>
            ))}
          </div>

          <div className="rounded-[2rem] p-2 bg-[#1C0A06]/[0.03] ring-1 ring-[#1C0A06]/[0.06]">
            <div key={activeSvc} className="fade-in relative h-full overflow-hidden rounded-[1.5rem]">
              <img src={shown.photo} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C0A06]/90 via-[#1C0A06]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-10 lg:p-12">
                <h3 className="text-white text-2xl lg:text-[1.9rem] leading-tight font-medium mb-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>{shown[L].t}</h3>
                <p className="text-white/75 leading-relaxed max-w-lg">{shown[L].d}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile / tablet: each area is its own accordion row */}
        <div className="lg:hidden border-t border-[#1C0A06]/8">
          {services.map((svc, i) => (
            <details key={i} className="group border-b border-[#1C0A06]/8" open={i === 0}>
              <summary className="flex items-start gap-4 px-6 py-5 cursor-pointer marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="text-[#B84832]/50 text-[11px] font-bold w-6 shrink-0 mt-1" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-[0.95rem] leading-snug font-medium">{svc[L].t}</span>
                <ChevronDown size={18} className="text-[#1C0A06]/35 shrink-0 mt-0.5 transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-7">
                <div className="relative h-48 overflow-hidden rounded-2xl mb-5">
                  <img src={svc.photo} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C0A06]/70 via-transparent to-transparent" />
                </div>
                <p className="text-[#1C0A06]/55 text-sm leading-relaxed">{svc[L].d}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Payment preview */}
      <section className="bg-white py-24 lg:py-32 border-t border-[#1C0A06]/8">
        <div className="reveal max-w-7xl mx-auto px-6 lg:px-16">
          <div className="rounded-[2rem] p-2 bg-[#1C0A06]/[0.03] ring-1 ring-[#1C0A06]/[0.06]">
          <div className="rounded-[1.5rem] bg-white ring-1 ring-[#1C0A06]/[0.06] grid lg:grid-cols-[3fr_2fr]">
            <div className="p-10 lg:p-14 border-b lg:border-b-0 lg:border-r border-[#1C0A06]/8">
              <h2 className="text-2xl lg:text-3xl font-medium leading-tight mb-4" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>{L === "en" ? "Pay Your Legal Fees Online" : "Paga Tus Honorarios En Línea"}</h2>
              <p className="text-[#1C0A06]/50 text-[15px] leading-relaxed max-w-md mb-8">
                {L === "en" ? "Existing clients can make secure online payments through our client portal." : "Los clientes actuales pueden hacer pagos seguros en línea a través de nuestro portal de clientes."}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {["Visa", "Mastercard", "Amex", "Discover", "ACH"].map((c) => (
                  <span key={c} className="rounded-full bg-[#1C0A06]/[0.04] text-[#1C0A06]/50 text-[10px] tracking-widest uppercase px-3 py-1.5 font-semibold">{c}</span>
                ))}
              </div>
            </div>
            <div className="p-10 lg:p-14 flex flex-col justify-center gap-4">
              <Cta href="/payment" className="w-full">
                {L === "en" ? "Make a Payment" : "Realizar un Pago"}
              </Cta>
            </div>
          </div>
          </div>
        </div>
      </section>

      <SiteFooter lang={lang} setLang={setLang} />
    </div>
  );
}
