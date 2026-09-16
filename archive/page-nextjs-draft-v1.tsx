"use client";

import { useEffect, useState } from "react";

type Lang = "es" | "en";

const NAV = [
  { es: "Inicio", en: "Home", href: "#inicio" },
  { es: "Servicios", en: "Services", href: "#servicios" },
  { es: "Testimonios", en: "Testimonials", href: "#testimonios" },
  { es: "Reservar cita", en: "Book with me", href: "#", cta: true },
  { es: "Pagar factura", en: "Make a payment", href: "#" },
  { es: "Recursos", en: "Resources", href: "#" },
];

const SERVICES = [
  {
    es: ["Ciudadanía y Naturalización", "Preparación y acompañamiento completo del proceso."],
    en: ["Citizenship and Naturalization", "Full preparation and support through the process."],
  },
  {
    es: ["Asilo y Casos de Refugiados", "Defensa de tu caso con atención personal."],
    en: ["Asylum and Refugee Claims", "Case defense with personal attention."],
  },
  {
    es: ["Defensa contra la Deportación", "Representación en procesos de deportación."],
    en: ["Deportation Defense", "Representation in deportation proceedings."],
  },
  {
    es: ["Estatus Permanente", "Residencia permanente y green card."],
    en: ["Permanent Status", "Permanent residency and green cards."],
  },
  {
    es: ["Estatus Temporal", "TPS y visas temporales."],
    en: ["Temporary Status", "TPS and temporary visas."],
  },
  {
    es: ["Consulta", "Una primera conversación clara sobre tu caso."],
    en: ["Consultation", "A clear first conversation about your case."],
  },
];

export default function Home() {
  const [lang, setLang] = useState<Lang>("es");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (es: string, en: string) => (lang === "es" ? es : en);

  return (
    <div className="flex flex-col flex-1">
      <nav className="sticky top-0 z-20 bg-burgundy text-paper">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-8">
          <span className="font-display font-semibold text-lg">Vannia Glasinovic</span>

          <ul className="hidden md:flex items-center gap-6 text-sm">
            {NAV.map((item) => (
              <li key={item.href + item.es}>
                <a
                  href={item.href}
                  className={
                    item.cta
                      ? "flex min-h-11 items-center rounded-full bg-paper px-4 font-semibold text-terracotta transition-transform hover:-translate-y-0.5"
                      : "flex min-h-11 items-center opacity-90 hover:opacity-100"
                  }
                >
                  {t(item.es, item.en)}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <div className="flex rounded-full border border-paper/70 text-xs overflow-hidden">
              <button
                type="button"
                onClick={() => setLang("es")}
                aria-pressed={lang === "es"}
                className={`min-h-11 px-3 ${lang === "es" ? "bg-paper text-terracotta font-semibold" : ""}`}
              >
                ES
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                aria-pressed={lang === "en"}
                className={`min-h-11 px-3 ${lang === "en" ? "bg-paper text-terracotta font-semibold" : ""}`}
              >
                EN
              </button>
            </div>

            <button
              type="button"
              className="md:hidden flex h-11 w-11 items-center justify-center rounded-full"
              aria-label={t("Abrir menú", "Open menu")}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <ul className="md:hidden flex flex-col gap-1 border-t border-paper/20 px-4 py-3">
            {NAV.map((item) => (
              <li key={item.href + item.es}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={
                    item.cta
                      ? "flex min-h-11 items-center justify-center rounded-full bg-paper px-4 font-semibold text-terracotta"
                      : "flex min-h-11 items-center px-2"
                  }
                >
                  {t(item.es, item.en)}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>

      <header
        id="inicio"
        className="bg-terracotta px-4 py-16 text-center text-paper sm:px-8 sm:py-24"
      >
        <h1 className="m-rise mx-auto max-w-3xl font-display text-4xl font-semibold leading-tight text-balance sm:text-6xl">
          {t(
            "Un proceso claro, un abogado de confianza",
            "A clear process, an attorney you can trust"
          )}
        </h1>
        <p className="m-rise m-rise-2 mx-auto mt-5 max-w-xl text-base leading-relaxed opacity-95 sm:text-lg">
          {t(
            "Documentos, plazos y pasos legales explicados en un lenguaje que entiendes.",
            "Documents, deadlines, and legal steps explained in language you understand."
          )}
        </p>
        <div className="m-rise m-rise-3 mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="#"
            className="flex min-h-11 items-center rounded-full bg-paper px-6 font-semibold text-terracotta transition-transform hover:-translate-y-0.5"
          >
            {t("Reservar una consulta", "Book a consultation")}
          </a>
          <a
            href="#testimonios"
            className="flex min-h-11 items-center rounded-full border border-paper/70 px-6 font-semibold"
          >
            {t("Ver testimonios", "Read testimonials")}
          </a>
        </div>
      </header>

      <div className="grid divide-y divide-ink/10 bg-paper sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        <div className="px-6 py-8 sm:px-8">
          <svg viewBox="0 0 24 24" className="mb-3 h-8 w-8 text-terracotta" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M7 3h7l4 4v14H7z" />
            <path d="M14 3v4h4" />
            <path d="M9.5 13h5M9.5 16.5h5" />
          </svg>
          <h3 className="mb-1 font-semibold">{t("Tu caso", "Your case")}</h3>
          <p className="text-sm opacity-75">
            {t(
              "Entendemos juntos qué opciones aplican a tu situación.",
              "We work out together which options apply to your situation."
            )}
          </p>
        </div>
        <div className="px-6 py-8 sm:px-8">
          <svg viewBox="0 0 24 24" className="mb-3 h-8 w-8 text-terracotta" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3.5" y="5" width="17" height="15" rx="2" />
            <path d="M3.5 9.5h17M8 3v4M16 3v4" />
          </svg>
          <h3 className="mb-1 font-semibold">{t("Tus plazos", "Your timeline")}</h3>
          <p className="text-sm opacity-75">
            {t("Sabrás con claridad qué sigue y cuándo.", "You'll know clearly what's next, and when.")}
          </p>
        </div>
        <div className="px-6 py-8 sm:px-8">
          <svg viewBox="0 0 24 24" className="mb-3 h-8 w-8 text-terracotta" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 5.5h16v10H9l-4 3.5v-3.5H4z" />
          </svg>
          <h3 className="mb-1 font-semibold">{t("Tu consulta", "Your consultation")}</h3>
          <p className="text-sm opacity-75">
            {t("Una primera conversación honesta, sin tecnicismos.", "An honest first conversation, no legal jargon.")}
          </p>
        </div>
      </div>

      <section className="bg-paper px-4 py-16 sm:px-8">
        <div className="mx-auto max-w-2xl text-left">
          <p className="mb-3 text-xs uppercase tracking-wide opacity-70">
            {t("Sobre mí", "About me")}
          </p>
          <p className="max-w-[70ch] text-base leading-relaxed">
            {t(
              "Vannia Glasinovic es una abogada con sede en Eugene, Oregón, que se enfoca principalmente en el derecho de inmigración y el derecho ambiental. Originaria de Bolivia, emigró a los Estados Unidos y pasó del activismo ambiental al derecho de inmigración, ayudando a los inmigrantes a navegar el sistema legal mientras lucha activamente contra la discriminación.",
              "Vannia Glasinovic is an attorney based in Eugene, Oregon, primarily focusing on immigration law and environmental law. Originally from Bolivia, she migrated to the United States and transitioned from environmental advocacy into immigration law, helping immigrants navigate the legal system while actively fighting discrimination."
            )}
          </p>

          <dl className="mt-6 grid gap-4 border-t border-ink/15 pt-6 text-sm sm:grid-cols-[9rem_1fr]">
            <dt className="font-semibold text-terracotta">{t("Educación", "Education")}</dt>
            <dd>
              {t(
                "Becaria de Democracia Ambiental Global, Facultad de Derecho de la Universidad de Oregón.",
                "Global Environmental Democracy fellow, University of Oregon School of Law."
              )}
            </dd>
            <dt className="font-semibold text-terracotta">{t("Licencia", "License")}</dt>
            <dd>
              {t(
                "Autorizada para ejercer en California desde 2006.",
                "Licensed to practice in California since 2006."
              )}
            </dd>
            <dt className="font-semibold text-terracotta">{t("Documental", "Documentary")}</dt>
            <dd>
              {t(
                '"Upward Migration", proyecto Latino Roots de la Universidad de Oregón.',
                '"Upward Migration," University of Oregon’s Latino Roots project.'
              )}
            </dd>
          </dl>
        </div>
      </section>

      <section id="servicios" className="bg-bg px-4 py-16 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 font-display text-3xl font-semibold">
            {t("Servicios", "Services")}
          </h2>
          <div className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {SERVICES.map((s) => (
              <div key={s.es[0]} className="border-t border-ink/15 pt-5">
                <h3 className="mb-1 text-lg font-semibold">{t(s.es[0], s.en[0])}</h3>
                <p className="text-sm opacity-75">{t(s.es[1], s.en[1])}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonios" className="bg-burgundy px-4 py-16 text-center text-paper sm:px-8">
        <h2 className="mb-6 font-display text-3xl font-semibold">
          {t("Testimonios", "Testimonials")}
        </h2>
        <div className="mx-auto max-w-md rounded-2xl border border-dashed border-paper/40 p-8 text-sm opacity-85">
          {t(
            "Los testimonios de clientes se añadirán pronto.",
            "Client testimonials will be added soon."
          )}
        </div>
      </section>

      <footer className="mt-auto flex flex-col gap-8 bg-ink px-4 py-10 text-sm text-paper/90 sm:flex-row sm:justify-between sm:px-8">
        <div>
          <p className="font-display font-semibold text-lg">Vannia Glasinovic</p>
          <p className="mt-1 opacity-80">Eugene, Oregon</p>
        </div>
        <ul className="grid gap-2">
          {NAV.filter((i) => i.href === "#" || i.cta).map((item) => (
            <li key={item.es}>
              <a href={item.href} className="opacity-85 hover:opacity-100">
                {t(item.es, item.en)}
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
}
