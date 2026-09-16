"use client";

import Link from "next/link";
import { LogoMark } from "@/components/logo-mark";
import { LangToggle } from "@/components/lang-toggle";
import { PHONE_DISPLAY, EMAIL, type Lang } from "@/lib/site";

export function SiteFooter({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const L = lang;

  return (
    <footer className="bg-[#080201] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 text-[#D4673B] shrink-0">
              <LogoMark className="w-full h-full" />
            </div>
            <div className="leading-none">
              <p className="text-white text-[15px] font-medium" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>Glasinovic</p>
              <p className="text-[#D4673B] text-[9px] tracking-[0.2em] uppercase">Law Office</p>
            </div>
          </div>
          <p className="text-white/25 text-xs leading-relaxed mb-5">
            {L === "en"
              ? "Immigration & Environmental Law. Serving Oregon and California."
              : "Derecho de Inmigración y Ambiental. Sirviendo a Oregón y California."}
          </p>
          <LangToggle lang={lang} setLang={setLang} variant="dark" />
        </div>

        <div>
          <p className="text-white text-[10px] tracking-[0.3em] uppercase font-bold mb-5">{L === "en" ? "Quick Links" : "Enlaces"}</p>
          <ul className="space-y-3">
            <li><Link href="/about" className="text-white/25 hover:text-white/60 text-xs transition-colors">{L === "en" ? "About" : "Acerca De"}</Link></li>
            <li><Link href="/services" className="text-white/25 hover:text-white/60 text-xs transition-colors">{L === "en" ? "Services" : "Servicios"}</Link></li>
            <li><Link href="/resources" className="text-white/25 hover:text-white/60 text-xs transition-colors">{L === "en" ? "Resources" : "Recursos"}</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-white text-[10px] tracking-[0.3em] uppercase font-bold mb-5">{L === "en" ? "Get Started" : "Comienza"}</p>
          <ul className="space-y-3">
            <li><Link href="/book" className="text-white/25 hover:text-white/60 text-xs transition-colors">{L === "en" ? "Book with Me" : "Agendar Cita"}</Link></li>
            <li><Link href="/intake" className="text-white/25 hover:text-white/60 text-xs transition-colors">{L === "en" ? "Consultation Intake Form" : "Formulario de Ingreso"}</Link></li>
            <li><Link href="/payment" className="text-white/25 hover:text-white/60 text-xs transition-colors">{L === "en" ? "Make a Payment" : "Hacer un Pago"}</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-white text-[10px] tracking-[0.3em] uppercase font-bold mb-5">{L === "en" ? "Contact" : "Contacto"}</p>
          <div className="space-y-3">
            <p className="text-white/25 text-xs">{PHONE_DISPLAY}</p>
            <p className="text-white/25 text-xs">{EMAIL}</p>
            <p className="text-white/25 text-xs">Eugene, Oregon</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-5">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <p className="text-white/15 text-[10px]">&copy; {new Date().getFullYear()} Glasinovic Law Office. {L === "en" ? "All rights reserved." : "Todos los derechos reservados."}</p>
            <Link href="/privacy" className="text-white/25 hover:text-white/60 text-[10px] transition-colors">
              {L === "en" ? "Privacy Policy" : "Política de Privacidad"}
            </Link>
          </div>
          <p className="text-white/10 text-[10px] text-center sm:text-right max-w-md leading-relaxed">
            {L === "en" ? "This website is for informational purposes only and does not constitute legal advice." : "Este sitio es solo informativo y no constituye asesoramiento legal."}
          </p>
        </div>
      </div>
    </footer>
  );
}
