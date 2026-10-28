"use client";

import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Cta } from "@/components/cta";
import { PHONE_TEL, type Lang } from "@/lib/site";
import { useSyncHtmlLang } from "@/lib/use-sync-html-lang";

const lora = { fontFamily: "var(--font-lora), Georgia, serif" };

// Vannia's own text (Oct 2026), word for word.
const copy = {
  es: {
    eyebrow: "Sobre mí",
    role: "Abogada de inmigración · Eugene, Oregon",
    quote: "Mi identidad latina es mi orgullo y mi brújula.",
    storyTitle: "Mi historia",
    story: [
      "Vannia Glasinovic es abogada, originaria de La Paz, Bolivia. Como muchos inmigrantes, nunca planeó dejar su país. Allí estudió y se recibió de abogada, pero en el año 2000, a los 26 años, la vida la trajo a los Estados Unidos. Tuvo que empezar de nuevo, y el idioma y la cultura fueron barreras fuertes que superó con esfuerzo y determinación.",
      "Decidida a seguir ejerciendo el derecho, aprobó el examen de la barra de California. Aun así, el sistema legal y la cultura estadounidense le resultaban ajenos. Por eso hizo una maestría en Derecho Internacional Sostenible en la Universidad de Washington. Fue una etapa difícil que le mostró lo distintos que son los sistemas legales de Bolivia y de Estados Unidos.",
      "Todavía sin sentirse lista para ejercer, en 2009 volvió a la universidad para obtener su JD en la Universidad de Oregon, mientras criaba a su hija Mara, de cuatro años, y a su bebé recién nacido, Sebastián. Lo hizo porque entendió que, como inmigrante, sus títulos de origen, aunque válidos, no tenían el mismo peso, y que tenía que trabajar el doble. Fue en la Universidad de Oregon donde descubrió el derecho de inmigración, un camino que nunca había imaginado. Empezó a ejercer en 2012.",
    ],
    journeyTitle: "Mi trayectoria",
    journey: [
      ["La Paz", "Se recibe de abogada en Bolivia."],
      ["2000", "Llega a los Estados Unidos a los 26 años."],
      ["California", "Aprueba el examen de la barra de California."],
      ["UW", "Maestría en Derecho Internacional Sostenible, Universidad de Washington."],
      ["2009", "Comienza su JD en la Universidad de Oregon."],
      ["2012", "Empieza a ejercer como abogada de inmigración."],
    ],
    commitmentTitle: "Mi compromiso",
    commitment: [
      "Cada una de esas batallas la formó como la abogada que es hoy. Conoce de primera mano las dificultades de ser inmigrante, y su identidad latina es su orgullo y su brújula, tanto en su carrera como en su vida personal.",
      "Convencida del potencial de los inmigrantes en este país, dedica su práctica casi por completo a la comunidad latina, porque su trabajo nace de lo que significa ser latinoamericana.",
    ],
    familyTitle: "Mi familia",
    family: "Vannia vive en Oregon con sus hijos, Mara y Sebi, y su perro Chiqui. Ellos son su mayor orgullo y quienes, día a día, le dan perspectiva y le siguen enseñando.",
    cta: "Agende una consulta",
  },
  en: {
    eyebrow: "About me",
    role: "Immigration Attorney · Eugene, Oregon",
    quote: "My Latina identity is my pride and my compass.",
    storyTitle: "My story",
    story: [
      "Vannia Glasinovic is an attorney originally from La Paz, Bolivia. Like many immigrants, she never planned to leave her country. She studied and became a lawyer there, but in 2000, at age 26, life brought her to the United States. She had to start over, and language and culture were tough barriers that she overcame through hard work and determination.",
      "Determined to keep practicing law, she passed the California Bar Exam. Even so, the American legal system and culture still felt foreign to her. So she earned a Master of Laws (LLM) in Sustainable International Law at the University of Washington. It was a difficult stage that showed her just how different the legal systems of Bolivia and the United States are.",
      "Still not feeling ready to practice, in 2009 she went back to school to earn her JD at the University of Oregon, while raising her four-year-old daughter, Mara, and her newborn son, Sebastian. She did it because she understood that, as an immigrant, her degrees from home, while valid, did not carry the same weight, and that she had to work twice as hard. It was at the University of Oregon that she discovered immigration law, a path she had never imagined. She began practicing in 2012.",
    ],
    journeyTitle: "My journey",
    journey: [
      ["La Paz", "Becomes a lawyer in Bolivia."],
      ["2000", "Arrives in the United States at age 26."],
      ["California", "Passes the California Bar Exam."],
      ["UW", "LLM in Sustainable International Law, University of Washington."],
      ["2009", "Begins her JD at the University of Oregon."],
      ["2012", "Begins practicing as an immigration attorney."],
    ],
    commitmentTitle: "My commitment",
    commitment: [
      "Each of these battles shaped her into the attorney she is today. She knows firsthand the challenges of being an immigrant, and her Latina identity is her pride and her compass, both in her career and in her personal life.",
      "Convinced of the potential of immigrants in this country, she dedicates her practice almost entirely to the Latino community, because her work is rooted in what it means to be Latin American.",
    ],
    familyTitle: "My family",
    family: "Vannia lives in Oregon with her children, Mara and Sebi, and her dog, Chiqui. They are her greatest pride, and every day they give her perspective and keep teaching her.",
    cta: "Schedule a consultation",
  },
};

export default function AboutPage() {
  const [lang, setLang] = useState<Lang>("es");
  const c = copy[lang];
  useSyncHtmlLang(lang);

  return (
    <div className="min-h-screen bg-white text-[#1C0A06]">
      <SiteHeader lang={lang} setLang={setLang} active="/about" />

      <main>
        <header className="max-w-6xl mx-auto px-6 lg:px-16 pt-14 pb-20 grid md:grid-cols-[1.1fr_0.9fr] gap-12 md:gap-16 items-center">
          <div>
            <p className="text-[#B84832] text-[11px] tracking-[0.22em] uppercase font-semibold">{c.eyebrow}</p>
            <h1 className="font-normal text-[clamp(2.6rem,6vw,4.4rem)] leading-[1.05] mt-3 mb-3" style={lora}>
              Vannia Glasinovic
            </h1>
            <p className="text-[#1C0A06]/55">{c.role}</p>
            <blockquote className="italic text-[clamp(1.3rem,2.4vw,1.6rem)] leading-snug mt-9 pl-5 border-l-2 border-[#B84832]" style={lora}>
              “{c.quote}”
            </blockquote>
          </div>
          <img
            src="/vannia-story.jpg"
            alt="Vannia Glasinovic"
            className="w-full max-w-sm md:max-w-none mx-auto aspect-[4/5] object-cover rounded-t-[999px] rounded-b-2xl"
          />
        </header>

        <section className="bg-[#FAF6F1] border-y border-[#1C0A06]/10">
          <div className="reveal max-w-6xl mx-auto px-6 lg:px-16 py-20 grid md:grid-cols-[220px_1fr] gap-8 md:gap-12">
            <h2 className="text-[2rem] leading-tight" style={lora}>{c.storyTitle}</h2>
            <div className="space-y-5 text-[#1C0A06]/75 leading-loose text-[1.05rem] max-w-[68ch]">
              {c.story.map((p, i) => (
                <p key={i} className={i === 0 ? "first-letter:float-left first-letter:text-[4rem] first-letter:leading-[0.9] first-letter:mr-2.5 first-letter:mt-1.5 first-letter:text-[#B84832] first-letter:font-[family-name:var(--font-lora)]" : ""}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="reveal max-w-3xl mx-auto px-6 py-20">
          <h2 className="text-[2rem] leading-tight mb-8" style={lora}>{c.journeyTitle}</h2>
          <ol className="border-b border-[#1C0A06]/12">
            {c.journey.map(([when, what]) => (
              <li key={when} className="grid grid-cols-[110px_1fr] sm:grid-cols-[140px_1fr] gap-4 py-4 border-t border-[#1C0A06]/12">
                <b className="text-[1.25rem] font-semibold text-[#B84832]" style={lora}>{when}</b>
                <span className="text-[#1C0A06]/75">{what}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="reveal max-w-6xl mx-auto px-6 lg:px-16 pb-20 grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-[#1C0A06] text-white/80 rounded-2xl p-8 md:p-10 space-y-4 leading-relaxed">
            <h2 className="text-white text-[2rem] leading-tight mb-2" style={lora}>{c.commitmentTitle}</h2>
            {c.commitment.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="border border-[#1C0A06]/12 rounded-2xl p-8 md:p-10 leading-relaxed text-[#1C0A06]/75">
            <h2 className="text-[#1C0A06] text-[2rem] leading-tight mb-6" style={lora}>{c.familyTitle}</h2>
            <p>{c.family}</p>
          </div>
        </section>

        <section className="bg-[#FAF6F1] border-t border-[#1C0A06]/10 py-20 text-center px-6">
          <Cta href={`tel:${PHONE_TEL}`}>{c.cta}</Cta>
        </section>
      </main>

      <SiteFooter lang={lang} setLang={setLang} />
    </div>
  );
}
