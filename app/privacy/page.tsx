"use client";

import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { EMAIL, type Lang } from "@/lib/site";
import { useSyncHtmlLang } from "@/lib/use-sync-html-lang";

const sections = [
  {
    en: { h: "Information We Collect", b: "When you submit a contact form, request a consultation, or email or call our office, we collect the information you provide directly, such as your name, phone number, email address, and details about your case. We do not collect sensitive information beyond what you choose to share with us." },
    es: { h: "Información que Recopilamos", b: "Cuando envías un formulario de contacto, solicitas una consulta, o nos escribes o llamas, recopilamos la información que nos proporcionas directamente, como tu nombre, número de teléfono, correo electrónico y detalles sobre tu caso. No recopilamos información sensible más allá de lo que decidas compartir con nosotros." },
  },
  {
    en: { h: "How We Use Your Information", b: "We use the information you provide solely to respond to your inquiry, schedule a consultation, and, if you become a client, to represent you in your case. We do not sell, rent, or share your personal information with third parties for marketing purposes." },
    es: { h: "Cómo Usamos Tu Información", b: "Usamos la información que proporcionas únicamente para responder a tu consulta, agendar una cita, y, si te conviertes en clienta o cliente, para representarte en tu caso. No vendemos, alquilamos ni compartimos tu información personal con terceros con fines de mercadeo." },
  },
  {
    en: { h: "No Attorney-Client Relationship", b: "Submitting a contact form or otherwise reaching out through this website does not create an attorney-client relationship. That relationship begins only once Vannia Glasinovic agrees to represent you, typically confirmed in writing." },
    es: { h: "No se Crea una Relación Abogado-Cliente", b: "Enviar un formulario de contacto o comunicarte de otra manera a través de este sitio no crea una relación abogado-cliente. Esa relación comienza únicamente cuando Vannia Glasinovic acepta representarte, normalmente confirmado por escrito." },
  },
  {
    en: { h: "Third-Party Links", b: "Our Resources page links to official government and nonprofit websites (such as USCIS, EOIR, and legal-aid organizations) that we do not operate or control. Those sites have their own privacy practices, and we encourage you to review them separately." },
    es: { h: "Enlaces a Terceros", b: "Nuestra página de Recursos enlaza a sitios oficiales del gobierno y organizaciones sin fines de lucro (como USCIS, EOIR y organizaciones de ayuda legal) que no operamos ni controlamos. Esos sitios tienen sus propias prácticas de privacidad, y te recomendamos revisarlas por separado." },
  },
  {
    en: { h: "Payments", b: "Payments made through our Client Portal are processed by Docketwise, a third-party legal practice management platform, and are subject to Docketwise's own privacy and security practices. We do not store your payment card details." },
    es: { h: "Pagos", b: "Los pagos realizados a través de nuestro Portal del Cliente son procesados por Docketwise, una plataforma de gestión legal de terceros, y están sujetos a las prácticas de privacidad y seguridad propias de Docketwise. No almacenamos los datos de tu tarjeta de pago." },
  },
  {
    en: { h: "Data Security", b: "We take reasonable steps to protect the information you share with us, in keeping with our professional obligation to safeguard client confidentiality. No method of electronic transmission or storage is completely secure, so we cannot guarantee absolute security." },
    es: { h: "Seguridad de los Datos", b: "Tomamos medidas razonables para proteger la información que compartes con nosotros, conforme a nuestra obligación profesional de resguardar la confidencialidad de nuestros clientes. Ningún método de transmisión o almacenamiento electrónico es completamente seguro, por lo que no podemos garantizar seguridad absoluta." },
  },
  {
    en: { h: "Your Choices", b: "You may ask us at any time what information we hold about you, request that we correct it, or ask that we delete information that is not required for an open or past legal matter. Contact us using the information below." },
    es: { h: "Tus Opciones", b: "Puedes preguntarnos en cualquier momento qué información tenemos sobre ti, solicitar que la corrijamos, o pedir que eliminemos información que no sea necesaria para un asunto legal abierto o pasado. Contáctanos con la información a continuación." },
  },
  {
    en: { h: "Changes to This Policy", b: "We may update this privacy policy from time to time. The \"last updated\" date below reflects the most recent revision." },
    es: { h: "Cambios a Esta Política", b: "Podemos actualizar esta política de privacidad de vez en cuando. La fecha de \"última actualización\" abajo refleja la revisión más reciente." },
  },
];

export default function PrivacyPage() {
  const [lang, setLang] = useState<Lang>("en");
  const L = lang;
  useSyncHtmlLang(lang);

  return (
    <div className="min-h-screen bg-white text-[#1C0A06]">
      <SiteHeader lang={lang} setLang={setLang} active="/privacy" />

      <main>
        <div className="bg-white py-16 border-b border-[#1C0A06]/8">
          <div className="max-w-3xl mx-auto px-6">
            <h1 className="font-normal text-[clamp(2rem,4vw,2.8rem)] mb-3">
              {L === "en" ? "Privacy Policy" : "Política de Privacidad"}
            </h1>
            <p className="text-[#1C0A06]/45 text-sm">
              {L === "en" ? "Last updated: September 2026" : "Última actualización: septiembre de 2026"}
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 py-16 space-y-12">
          <p className="text-[#1C0A06]/60 leading-relaxed">
            {L === "en"
              ? "Glasinovic Law Office respects your privacy. This policy explains what information we collect through this website, how we use it, and the choices you have."
              : "Glasinovic Law Office respeta tu privacidad. Esta política explica qué información recopilamos a través de este sitio web, cómo la usamos, y las opciones que tienes."}
          </p>

          {sections.map((s, i) => (
            <div key={i}>
              <h2 className="text-[1.1rem] font-semibold mb-2.5">{s[L].h}</h2>
              <p className="text-[#1C0A06]/60 leading-relaxed text-[0.95rem]">{s[L].b}</p>
            </div>
          ))}

          <div>
            <h2 className="text-[1.1rem] font-semibold mb-2.5">{L === "en" ? "Contact Us" : "Contáctanos"}</h2>
            <p className="text-[#1C0A06]/60 leading-relaxed text-[0.95rem]">
              {L === "en" ? "Questions about this privacy policy can be sent to " : "Las preguntas sobre esta política de privacidad pueden enviarse a "}
              <a href={`mailto:${EMAIL}`} className="text-[#B84832] font-medium">{EMAIL}</a>.
            </p>
          </div>
        </div>
      </main>

      <SiteFooter lang={lang} setLang={setLang} />
    </div>
  );
}
