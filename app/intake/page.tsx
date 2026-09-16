"use client";

import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { type Lang } from "@/lib/site";
import { useSyncHtmlLang } from "@/lib/use-sync-html-lang";

type FieldType = "text" | "email" | "tel" | "date" | "textarea" | "radio";

type FieldDef = {
  key: string;
  en: string;
  es: string;
  type: FieldType;
  required?: boolean;
  fullWidth?: boolean;
};

type SectionDef = {
  en: string;
  es: string;
  fields: FieldDef[];
};

const SECTIONS: SectionDef[] = [
  {
    en: "Contact Information",
    es: "Información de Contacto",
    fields: [
      { key: "fullName", en: "Full Name (include any other names or aliases you've used)", es: "Nombre Completo (incluye otros nombres o alias que hayas usado)", type: "text", required: true, fullWidth: true },
      { key: "consultDate", en: "Date of Your Consultation", es: "Fecha de Tu Consulta", type: "date", required: true },
      { key: "referral", en: "How Did You Hear About Us?", es: "¿Cómo Supiste de Nosotros?", type: "text" },
      { key: "email", en: "Email", es: "Correo Electrónico", type: "email", required: true },
      { key: "phone", en: "Phone Number", es: "Número de Teléfono", type: "tel", required: true },
      { key: "address", en: "Current Address", es: "Dirección Actual", type: "text", required: true, fullWidth: true },
    ],
  },
  {
    en: "Personal Background",
    es: "Información Personal",
    fields: [
      { key: "birthPlace", en: "City, State, and Country of Birth", es: "Ciudad, Estado y País de Nacimiento", type: "text", required: true },
      { key: "dob", en: "Date of Birth", es: "Fecha de Nacimiento", type: "date", required: true },
      { key: "hasSSN", en: "Do You Have a Social Security Number?", es: "¿Tienes Número de Seguro Social?", type: "radio", required: true },
      { key: "hasITIN", en: "Do You Have an ITIN (Tax ID)?", es: "¿Tienes un ITIN (Número de Identificación de Contribuyente)?", type: "radio", required: true },
      { key: "alienNumber", en: "Alien Registration or Case Number (if you know it)", es: "Número de Registro de Extranjero o Número de Caso (si lo sabes)", type: "text" },
    ],
  },
  {
    en: "Immigration History",
    es: "Historial Migratorio",
    fields: [
      { key: "currentCountry", en: "What Country Are You in Right Now?", es: "¿En Qué País Te Encuentras Ahora?", type: "text", required: true },
      { key: "entryDates", en: "Date(s) You Entered the United States", es: "Fecha(s) en Que Entraste a Estados Unidos", type: "text", required: true },
      { key: "portsOfEntry", en: "Port(s) of Entry Into the United States", es: "Puerto(s) de Entrada a Estados Unidos", type: "text", required: true },
      { key: "formOfEntry", en: "How Did You Enter? (visa, parole, border crossing, etc.)", es: "¿Cómo Entraste? (visa, permiso, cruce fronterizo, etc.)", type: "text", required: true },
      { key: "borderArrests", en: "Any Arrests at the Border? Please Include Dates and Places", es: "¿Algún Arresto en la Frontera? Incluye Fechas y Lugares", type: "textarea", fullWidth: true },
      { key: "hasPriorArrest", en: "Have You Ever Been Arrested or Fined for Breaking the Law?", es: "¿Alguna Vez Has Sido Arrestado(a) o Multado(a) por Violar la Ley?", type: "radio", required: true },
      { key: "arrestDetails", en: "If Yes, Please Explain (include any stops or fingerprints given to police, here or in your home country)", es: "Si Es Así, Por Favor Explica (incluye cualquier parada o huellas dactilares dadas a la policía, aquí o en tu país)", type: "textarea", fullWidth: true },
    ],
  },
  {
    en: "Family Information",
    es: "Información Familiar",
    fields: [
      {
        key: "maritalStatus",
        en: "Marital Status (Single, Married, Separated, Divorced, Widowed, or Domestic Partnership)",
        es: "Estado Civil (Soltero(a), Casado(a), Separado(a), Divorciado(a), Viudo(a), o Unión Libre)",
        type: "text",
        required: true,
        fullWidth: true,
      },
      { key: "spouseName", en: "Name of Spouse, Ex-Spouse, or Partner (if applicable)", es: "Nombre del Esposo(a), Ex-Esposo(a), o Pareja (si aplica)", type: "text" },
      { key: "spouseDob", en: "Spouse/Partner's Date of Birth", es: "Fecha de Nacimiento del Esposo(a)/Pareja", type: "date" },
      { key: "spouseBirthplace", en: "Spouse/Partner's City, State, and Country of Birth", es: "Ciudad, Estado y País de Nacimiento del Esposo(a)/Pareja", type: "text" },
      { key: "spousePhone", en: "Spouse/Partner's Phone Number", es: "Teléfono del Esposo(a)/Pareja", type: "tel" },
      { key: "marriagePlace", en: "Date and Place of Marriage", es: "Fecha y Lugar del Matrimonio", type: "text" },
      { key: "divorceDetails", en: "Date and Place of Divorce (if applicable)", es: "Fecha y Lugar del Divorcio (si aplica)", type: "text" },
      { key: "children", en: "Names, Dates of Birth, and Places of Birth of Your Children (write \"None\" if you have no children)", es: "Nombres, Fechas y Lugares de Nacimiento de Tus Hijos(as) (escribe \"Ninguno\" si no tienes hijos)", type: "textarea", fullWidth: true, required: true },
    ],
  },
  {
    en: "Employment & Taxes",
    es: "Empleo e Impuestos",
    fields: [
      { key: "isEmployed", en: "Are You Currently Employed?", es: "¿Estás Empleado(a) Actualmente?", type: "radio", required: true },
      { key: "employerName", en: "Employer's Name", es: "Nombre del Empleador", type: "text" },
      { key: "workAddress", en: "Work Address", es: "Dirección de Trabajo", type: "text" },
      { key: "filedTaxes", en: "Have You Ever Filed Tax Returns?", es: "¿Alguna Vez Has Presentado Declaraciones de Impuestos?", type: "radio", required: true },
      { key: "taxYears", en: "How Many Years of Taxes Have You Filed?", es: "¿Cuántos Años de Impuestos Has Presentado?", type: "text" },
    ],
  },
  {
    en: "Your Case",
    es: "Tu Caso",
    fields: [
      {
        key: "legalQuestion",
        en: "What Would You Like to Discuss in Your Consultation?",
        es: "¿Qué Te Gustaría Hablar en Tu Consulta?",
        type: "textarea",
        required: true,
        fullWidth: true,
      },
    ],
  },
];

const inputClass =
  "w-full border border-[#1C0A06]/15 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#B84832] transition-colors";

function Field({ field, value, onChange, L }: { field: FieldDef; value: string; onChange: (v: string) => void; L: Lang }) {
  const label = L === "en" ? field.en : field.es;

  return (
    <div className={field.fullWidth ? "sm:col-span-2" : undefined}>
      <label className="block text-[10px] tracking-widest uppercase text-[#1C0A06]/45 font-semibold mb-1.5">
        {label} {field.required && "*"}
      </label>
      {field.type === "textarea" ? (
        <textarea required={field.required} rows={3} value={value} onChange={(e) => onChange(e.target.value)} className={`${inputClass} resize-none`} />
      ) : field.type === "radio" ? (
        <div className="flex gap-6 pt-2">
          {(L === "en" ? ["Yes", "No"] : ["Sí", "No"]).map((opt) => (
            <label key={opt} className="flex items-center gap-2 text-sm text-[#1C0A06]/70 cursor-pointer">
              <input
                type="radio"
                required={field.required}
                name={field.key}
                checked={value === opt}
                onChange={() => onChange(opt)}
                className="accent-[#B84832]"
              />
              {opt}
            </label>
          ))}
        </div>
      ) : (
        <input required={field.required} type={field.type} value={value} onChange={(e) => onChange(e.target.value)} className={inputClass} />
      )}
    </div>
  );
}

export default function IntakePage() {
  const [lang, setLang] = useState<Lang>("en");
  const L = lang;
  useSyncHtmlLang(lang);
  const [form, setForm] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const setField = (key: string, value: string) => setForm((f) => ({ ...f, [key]: value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen bg-white text-[#1C0A06]">
      <SiteHeader lang={lang} setLang={setLang} active="/intake" />

      <main>
        <div className="border-t border-[#1C0A06]/8">
          <div className="max-w-4xl mx-auto px-6 lg:px-16 py-16 lg:py-20">
            <h1 className="font-medium text-[clamp(1.8rem,3.6vw,2.6rem)] mb-4 leading-tight" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>
              {L === "en" ? "Consultation Intake Form" : "Formulario de Ingreso para Consulta"}
            </h1>
            <p className="text-[#1C0A06]/55 text-[1.02rem] leading-relaxed max-w-[64ch]">
              {L === "en"
                ? "If you've booked a consultation with Vannia, filling this out beforehand means she already knows your situation when you talk, so your time together goes further."
                : "Si ya agendaste una consulta con Vannia, completar esto antes significa que ella ya conocerá tu situación cuando hablen, y así aprovechan mejor el tiempo."}
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-16 pb-20">
          {status === "sent" ? (
            <div className="border border-[#1C0A06]/10 p-10 lg:p-14 text-center">
              <h2 className="text-2xl font-normal mb-2">{L === "en" ? "Form Received" : "Formulario Recibido"}</h2>
              <p className="text-[#1C0A06]/50 text-sm">
                {L === "en" ? "Thank you. Vannia will review this before your consultation." : "Gracias. Vannia revisará esto antes de tu consulta."}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-12">
              {SECTIONS.map((section) => (
                <div key={section.en}>
                  <h2 className="text-[1.1rem] font-medium mb-5 pb-3 border-b border-[#1C0A06]/8">{L === "en" ? section.en : section.es}</h2>
                  <div className="grid sm:grid-cols-2 gap-5">
                    {section.fields.map((field) => (
                      <Field key={field.key} field={field} value={form[field.key] || ""} onChange={(v) => setField(field.key, v)} L={L} />
                    ))}
                  </div>
                </div>
              ))}

              {status === "error" && (
                <p className="text-[#B84832] text-sm text-center">
                  {L === "en" ? "Something went wrong. Please try again, or call us." : "Algo salió mal. Intenta de nuevo, o llámanos."}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-4 bg-[#B84832] hover:bg-[#1C0A06] disabled:opacity-60 disabled:cursor-not-allowed text-white text-[11px] tracking-[0.3em] uppercase font-bold transition-colors duration-200"
              >
                {status === "sending" ? (L === "en" ? "Sending…" : "Enviando…") : L === "en" ? "Submit Intake Form" : "Enviar Formulario"}
              </button>
              <p className="text-[#1C0A06]/30 text-[10px] text-center leading-relaxed">
                {L === "en"
                  ? "Confidential. Submitting this form does not create an attorney-client relationship."
                  : "Confidencial. Enviar este formulario no crea una relación abogado-cliente."}
              </p>
            </form>
          )}
        </div>
      </main>

      <SiteFooter lang={lang} setLang={setLang} />
    </div>
  );
}
