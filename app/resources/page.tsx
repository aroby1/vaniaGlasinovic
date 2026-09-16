"use client";

import { useState } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { type Lang } from "@/lib/site";
import { useSyncHtmlLang } from "@/lib/use-sync-html-lang";

const groups = [
  {
    en: { t: "Forms & Case Status", d: "U.S. Citizenship and Immigration Services (USCIS) is the official source for forms, fees, and your application status." },
    es: { t: "Formularios y Estado de Caso", d: "Servicios de Ciudadanía e Inmigración de EE. UU. (USCIS) es la fuente oficial para formularios, tarifas y el estado de tu solicitud." },
    links: [
      { href: "https://www.uscis.gov", en: { t: "USCIS.gov", d: "Official immigration services site" }, es: { t: "USCIS.gov", d: "Sitio oficial de inmigración" } },
      { href: "https://www.uscis.gov/forms", en: { t: "USCIS Forms", d: "Download official immigration forms" }, es: { t: "Formularios de USCIS", d: "Descarga los formularios oficiales" } },
      { href: "https://egov.uscis.gov/casestatus/landing.do", en: { t: "Check Case Status", d: "Track your application's progress" }, es: { t: "Revisar Estado de Caso", d: "Consulta el progreso de tu solicitud" } },
      { href: "https://travel.state.gov", en: { t: "Visas & Travel Info", d: "U.S. Department of State" }, es: { t: "Visas e Información de Viaje", d: "Departamento de Estado de EE. UU." } },
    ],
  },
  {
    en: { t: "Immigration Courts", d: "The Executive Office for Immigration Review (EOIR) oversees immigration courts nationwide." },
    es: { t: "Cortes de Inmigración", d: "La Oficina Ejecutiva de Revisión de Inmigración (EOIR) supervisa las cortes de inmigración en todo el país." },
    links: [
      { href: "https://www.justice.gov/eoir", en: { t: "EOIR", d: "Executive Office for Immigration Review" }, es: { t: "EOIR", d: "Oficina Ejecutiva de Revisión de Inmigración" } },
      { href: "https://www.justice.gov/eoir/eoir-immigration-court-listing", en: { t: "Find Your Court", d: "Immigration court directory" }, es: { t: "Buscar tu Corte", d: "Directorio de cortes de inmigración" } },
    ],
  },
  {
    en: { t: "Know Your Rights & Legal Aid", d: "Trusted national organizations with free guides and legal-aid directories." },
    es: { t: "Conoce Tus Derechos y Ayuda Legal", d: "Organizaciones nacionales de confianza con guías gratuitas y directorios de asistencia legal." },
    links: [
      { href: "https://www.nilc.org", en: { t: "National Immigration Law Center", d: "NILC.org" }, es: { t: "Centro Nacional de Ley de Inmigración", d: "NILC.org" } },
      { href: "https://www.aclu.org/know-your-rights/immigrants-rights", en: { t: "Know Your Rights (ACLU)", d: "Immigrants' rights guide" }, es: { t: "Conoce Tus Derechos (ACLU)", d: "Guía para inmigrantes" } },
      { href: "https://www.immigrationadvocates.org", en: { t: "Free Legal Aid Directory", d: "Immigration Advocates Network" }, es: { t: "Directorio de Ayuda Legal Gratuita", d: "Immigration Advocates Network" } },
    ],
  },
];

export default function ResourcesPage() {
  const [lang, setLang] = useState<Lang>("en");
  const L = lang;
  useSyncHtmlLang(lang);

  return (
    <div className="min-h-screen bg-white text-[#1C0A06]">
      <SiteHeader lang={lang} setLang={setLang} active="/resources" />

      <main>
        <div className="bg-white py-16 border-b border-[#1C0A06]/8">
          <div className="max-w-7xl mx-auto px-6 lg:px-16">
            <h1 className="font-normal text-[clamp(2.2rem,4.6vw,3.4rem)] mb-4">{L === "en" ? "Resources You Can Trust" : "Recursos de Confianza"}</h1>
            <p className="text-[#1C0A06]/55 text-[1.05rem] max-w-[56ch]">
              {L === "en"
                ? "Official government and national-organization links, so you can get informed while you decide your next step."
                : "Enlaces oficiales del gobierno y de organizaciones nacionales, para que puedas informarte mientras decides tu próximo paso."}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16">
          {groups.map((g, gi) => (
            <div key={gi} className="mb-14">
              <h2 className="text-[1.3rem] font-normal mb-1.5">{g[L].t}</h2>
              <p className="text-[#1C0A06]/50 text-sm mb-6 max-w-[60ch]">{g[L].d}</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {g.links.map((l, li) => (
                  <a key={li} href={l.href} target="_blank" rel="noopener noreferrer" className="flex justify-between items-center gap-4 border border-[#1C0A06]/10 hover:border-[#B84832]/40 hover:bg-[#B84832]/5 p-5 transition-colors duration-200">
                    <div>
                      <h3 className="text-[0.95rem] font-semibold mb-0.5">{l[L].t}</h3>
                      <p className="text-[#1C0A06]/45 text-[0.82rem]">{l[L].d}</p>
                    </div>
                    <ExternalLink size={16} className="text-[#1C0A06]/30 shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          ))}

          <div className="border border-dashed border-[#1C0A06]/15 p-6 text-[#1C0A06]/50 text-sm leading-relaxed">
            {L === "en"
              ? "These links lead to external and government sites not operated by Glasinovic Law Office. They're provided for informational purposes only and don't substitute for personalized legal advice. Can't find what you're looking for?"
              : "Estos enlaces llevan a sitios externos y del gobierno que no son operados por Glasinovic Law Office. Se proporcionan solo con fines informativos y no sustituyen el asesoramiento legal personalizado. ¿No encuentras lo que buscas?"}
            {" "}
            <Link href="/book" className="text-[#B84832] font-semibold hover:text-[#93381F]">{L === "en" ? "Ask Vannia →" : "Pregúntale a Vannia →"}</Link>
          </div>
        </div>

        <section className="bg-[#0E0503] text-center py-20 border-t border-white/5">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-white font-normal text-[clamp(1.8rem,4.4vw,3rem)] max-w-[20ch] mx-auto mb-7">
              {L === "en" ? "Need guidance made for your case?" : "¿Necesitas orientación personalizada?"}
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
