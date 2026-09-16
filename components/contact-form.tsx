"use client";

import { useState } from "react";
import { PHONE_DISPLAY, type Lang } from "@/lib/site";

export function ContactForm({ L }: { L: Lang }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  if (status === "sent") {
    return (
      <div className="bg-white border border-[#1C0A06]/10 p-8 lg:p-10 text-center py-16">
        <h3 className="text-2xl font-normal mb-2">{L === "en" ? "Message Sent" : "Mensaje Enviado"}</h3>
        <p className="text-[#1C0A06]/50 text-sm">{L === "en" ? "We'll respond within one business day." : "Responderemos en un día hábil."}</p>
      </div>
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-[#1C0A06]/10 p-8 lg:p-10 space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[10px] tracking-widest uppercase text-[#1C0A06]/45 font-semibold mb-1.5">{L === "en" ? "Full Name" : "Nombre Completo"} *</label>
          <input required type="text" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            className="w-full border border-[#1C0A06]/15 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#B84832] transition-colors" />
        </div>
        <div>
          <label className="block text-[10px] tracking-widest uppercase text-[#1C0A06]/45 font-semibold mb-1.5">{L === "en" ? "Phone" : "Teléfono"}</label>
          <input type="tel" value={form.phone} onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            className="w-full border border-[#1C0A06]/15 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#B84832] transition-colors" />
        </div>
      </div>
      <div>
        <label className="block text-[10px] tracking-widest uppercase text-[#1C0A06]/45 font-semibold mb-1.5">{L === "en" ? "Email" : "Correo"} *</label>
        <input required type="email" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          className="w-full border border-[#1C0A06]/15 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#B84832] transition-colors" />
      </div>
      <div>
        <label className="block text-[10px] tracking-widest uppercase text-[#1C0A06]/45 font-semibold mb-1.5">{L === "en" ? "About Your Case" : "Sobre Su Caso"} *</label>
        <textarea required rows={5} value={form.message} onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          className="w-full border border-[#1C0A06]/15 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#B84832] transition-colors resize-none" />
      </div>
      {status === "error" && (
        <p className="text-[#B84832] text-xs text-center">
          {L === "en"
            ? `Something went wrong. Please try again, or call us at ${PHONE_DISPLAY}.`
            : `Algo salió mal. Intenta de nuevo, o llámanos al ${PHONE_DISPLAY}.`}
        </p>
      )}
      <button type="submit" disabled={status === "sending"} className="w-full py-4 bg-[#B84832] hover:bg-[#1C0A06] disabled:opacity-60 disabled:cursor-not-allowed text-white text-[11px] tracking-[0.3em] uppercase font-bold transition-colors duration-200">
        {status === "sending" ? (L === "en" ? "Sending…" : "Enviando…") : (L === "en" ? "Send Message" : "Enviar Mensaje")}
      </button>
      <p className="text-[#1C0A06]/30 text-[10px] text-center leading-relaxed">
        {L === "en" ? "Confidential. Submitting this form does not create an attorney-client relationship." : "Confidencial. Enviar este formulario no crea una relación abogado-cliente."}
      </p>
    </form>
  );
}
