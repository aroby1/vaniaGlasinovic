"use client";

import { useState } from "react";
import { CreditCard, Lock, ShieldCheck, Phone, Mail } from "lucide-react";
import { Cta } from "@/components/cta";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PAYMENT_URL, PHONE_DISPLAY, PHONE_TEL, EMAIL, type Lang } from "@/lib/site";
import { useSyncHtmlLang } from "@/lib/use-sync-html-lang";

export default function PaymentPage() {
  const [lang, setLang] = useState<Lang>("es");
  const L = lang;
  useSyncHtmlLang(lang);

  return (
    <div className="min-h-screen bg-white text-[#1C0A06]">
      <SiteHeader lang={lang} setLang={setLang} active="/payment" />

      <main>
        <div className="border-t border-[#1C0A06]/8">
          <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16 lg:py-20 text-center">
            <h1
              className="font-medium text-[clamp(2rem,4vw,3rem)] mb-5 leading-tight"
              style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
            >
              {L === "en" ? "Pay Your Legal Fees Online" : "Paga Tus Honorarios En Línea"}
            </h1>
            <p className="text-[#1C0A06]/55 text-[1.05rem] max-w-[46ch] leading-relaxed mx-auto">
              {L === "en" ? "Secure online payments for existing clients, powered by LawPay." : "Pagos seguros en línea para clientes actuales, con tecnología de LawPay."}
            </p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-6 pb-4">
          <div className="rounded-[2rem] p-2 bg-[#1C0A06]/[0.03] ring-1 ring-[#1C0A06]/[0.06]">
          <div className="rounded-[1.5rem] bg-white ring-1 ring-[#1C0A06]/[0.06] p-10 lg:p-14 text-center">
            <div className="w-14 h-14 rounded-full bg-[#B84832]/10 flex items-center justify-center mx-auto mb-7">
              <CreditCard size={22} strokeWidth={1.5} className="text-[#B84832]" />
            </div>
            <div className="max-w-sm mx-auto mb-7">
              <Cta href={PAYMENT_URL} external className="w-full">
                {L === "en" ? "Go to Client Portal" : "Ir al Portal del Cliente"}
              </Cta>
            </div>
            <p className="text-[#1C0A06]/30 text-[10px] tracking-wide mb-4">
              {L === "en" ? "Powered by Docketwise & LawPay · SSL Encrypted" : "Con tecnología de Docketwise y LawPay · Encriptado SSL"}
            </p>
            <p className="text-[#1C0A06]/45 text-[11px] leading-relaxed mb-7 max-w-xs mx-auto">
              {L === "en"
                ? "New client or don't have portal access yet? Call or email us and we'll get you set up."
                : "¿Eres cliente nuevo o aún no tienes acceso al portal? Llámanos o escríbenos y te ayudamos a configurarlo."}
            </p>
            <div className="flex flex-wrap justify-center gap-2.5 pt-7 border-t border-[#1C0A06]/8">
              {["Visa", "Mastercard", "Amex", "Discover", "ACH Transfer"].map((c) => (
                <span key={c} className="rounded-full bg-[#1C0A06]/[0.04] text-[#1C0A06]/55 text-[11px] tracking-widest uppercase px-3 py-1.5 font-semibold">{c}</span>
              ))}
            </div>
          </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-16 pt-16">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {[
              { Icon: Lock, en: "SSL Encrypted", es: "Cifrado SSL" },
              { Icon: ShieldCheck, en: "Built for Law Firms", es: "Diseñado para Bufetes" },
              { Icon: CreditCard, en: "Client Funds Handled Properly", es: "Fondos Manejados Correctamente" },
            ].map(({ Icon, en, es }, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#B84832]/8 flex items-center justify-center">
                  <Icon size={16} strokeWidth={1.5} className="text-[#B84832]" />
                </div>
                <span className="text-[#1C0A06]/55 text-[0.85rem]">{L === "en" ? en : es}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-16 pt-16 pb-20 text-center">
          <p className="text-[#1C0A06]/50 text-[0.85rem] mb-4">
            {L === "en" ? "Questions about a charge or an invoice?" : "¿Preguntas sobre un cargo o una factura?"}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2.5 text-[#1C0A06]/65 hover:text-[#B84832] text-[0.9rem] transition-colors">
              <Phone size={14} className="text-[#B84832]" /> {PHONE_DISPLAY}
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-2.5 text-[#1C0A06]/65 hover:text-[#B84832] text-[0.9rem] transition-colors">
              <Mail size={14} className="text-[#B84832]" /> {EMAIL}
            </a>
          </div>
        </div>
      </main>

      <SiteFooter lang={lang} setLang={setLang} />
    </div>
  );
}
