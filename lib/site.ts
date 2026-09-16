export type Lang = "en" | "es";

export const PHONE_DISPLAY = "(541) 908-5079";
export const PHONE_TEL = "+15419085079";
export const EMAIL = "vannia.glasinovic@gmail.com";

// Left empty on purpose — Vannia doesn't have online scheduling set up yet.
export const CALENDLY_URL = "";

// Docketwise's client portal login is one universal URL for every firm (client.docketwise.com),
// not a firm-specific address — this is correct as-is once Vannia has Docketwise + LawPay set up.
export const PAYMENT_URL = "https://client.docketwise.com";

export const navLinks: { en: string; es: string; href: string }[] = [
  { en: "Home", es: "Inicio", href: "/" },
  { en: "About", es: "Acerca De", href: "/about" },
  { en: "Services", es: "Servicios", href: "/services" },
  { en: "Book with Me", es: "Agendar Cita", href: "/book" },
  { en: "Make a Payment", es: "Hacer un Pago", href: "/payment" },
  { en: "Resources", es: "Recursos", href: "/resources" },
];

export const SVC_PHOTOS = [
  "https://images.unsplash.com/photo-1603796846097-bee99e4a601f?w=900&h=700&fit=crop&auto=format",
  // Swapped: original cropped to torsos with heads cut off in the wide detail hero.
  "https://images.unsplash.com/photo-1673180246747-38fecba1d48d?w=1200&h=560&fit=crop&crop=faces,entropy&auto=format",
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&h=700&fit=crop&auto=format",
  // Swapped: original cropped into what read as a wedding-veil close-up in the wide detail hero.
  "https://images.unsplash.com/photo-1742522450616-a2cf0cba1274?w=1200&h=560&fit=crop&crop=faces,entropy&auto=format",
  "https://images.unsplash.com/photo-1521791055366-0d553872125f?w=900&h=700&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1575421377056-f78e26f4b173?w=900&h=700&fit=crop&auto=format",
];

export const services = [
  {
    slug: "citizenship-naturalization",
    photo: SVC_PHOTOS[0],
    en: {
      t: "Citizenship & Naturalization",
      d: "Becoming a U.S. citizen is the end goal of many immigration cases. Vannia reviews your eligibility, prepares your application, and walks with you all the way to your oath of citizenship.",
      covers: ["Full eligibility review", "N-400 application preparation", "Civics test and interview preparation"],
      long: [
        "Naturalization is the last step in a long journey, and it's worth doing right. Vannia reviews your full immigration history before filing, because a small mistake on Form N-400 can delay your case by months or raise questions you weren't ready for.",
        "From there, she helps you prepare for the civics test and the interview itself, in the language you're most comfortable in, so you walk in ready instead of anxious.",
      ],
      requirements: [
        "Continuous residence and physical presence in the U.S. for the required period",
        "Good moral character during that time",
        "Basic English and civics knowledge (with exemptions for some applicants)",
        "No unresolved issues in your immigration history that could complicate the case",
      ],
      process: [
        { t: "Eligibility Review", d: "Vannia goes through your immigration history line by line to confirm you're ready to file, and flags anything that needs attention first." },
        { t: "Filing Form N-400", d: "She prepares and files your application with the supporting documents USCIS expects to see." },
        { t: "Biometrics & Interview Prep", d: "You'll complete a biometrics appointment, then prepare together for the civics test and interview questions." },
        { t: "The Interview & Oath", d: "Vannia gets you ready for interview day, and celebrates with you through the oath ceremony." },
      ],
      faqs: [
        { q: "How long does naturalization take?", a: "Processing time depends on your local USCIS office, but most cases move from filing to interview within roughly 8 to 14 months." },
        { q: "What if I have an old arrest or a mistake on a past application?", a: "It doesn't automatically disqualify you. Vannia reviews it upfront so you know what to expect instead of being surprised at the interview." },
        { q: "Do I need to pass the English test?", a: "Most applicants do, but there are exemptions based on age, residence time, and certain medical conditions. Vannia can tell you if one applies to you." },
        { q: "Can my case be denied?", a: "Yes, which is why preparation matters. Vannia builds your application to address weak points before USCIS ever sees them." },
        { q: "Will I have to give up my citizenship from my home country?", a: "It depends on your country of origin. The U.S. doesn't require you to renounce your other citizenship, but some countries automatically end theirs when you naturalize elsewhere. Vannia can tell you what your home country's rules are before you apply." },
      ],
    },
    es: {
      t: "Ciudadanía y Naturalización",
      d: "Convertirte en ciudadana o ciudadano estadounidense es la meta final de muchos casos de inmigración. Vannia revisa tu elegibilidad, prepara tu solicitud, y te acompaña hasta el día del juramento.",
      covers: ["Revisión completa de elegibilidad", "Preparación del formulario N-400", "Preparación para el examen y la entrevista"],
      long: [
        "La naturalización es el último paso de un camino largo, y vale la pena hacerlo bien. Vannia revisa tu historial de inmigración completo antes de presentar tu caso, porque un pequeño error en el Formulario N-400 puede retrasar tu proceso por meses o generar preguntas para las que no estabas preparada o preparado.",
        "Después te ayuda a prepararte para el examen de civismo y la entrevista misma, en el idioma con el que te sientas más cómoda o cómodo, para que llegues lista o listo en vez de con ansiedad.",
      ],
      requirements: [
        "Residencia continua y presencia física en EE. UU. durante el periodo requerido",
        "Buen carácter moral durante ese tiempo",
        "Conocimiento básico de inglés y civismo (con exenciones para algunos solicitantes)",
        "Ningún asunto pendiente en tu historial de inmigración que pueda complicar el caso",
      ],
      process: [
        { t: "Revisión de Elegibilidad", d: "Vannia repasa tu historial de inmigración a fondo para confirmar que estás lista o listo para presentar el caso, y señala cualquier cosa que necesite atención primero." },
        { t: "Presentación del Formulario N-400", d: "Prepara y presenta tu solicitud con los documentos de respaldo que USCIS espera ver." },
        { t: "Biometría y Preparación para la Entrevista", d: "Completarás una cita de biometría, y luego se preparan juntos para el examen de civismo y las preguntas de la entrevista." },
        { t: "La Entrevista y el Juramento", d: "Vannia te prepara para el día de la entrevista, y celebra contigo hasta la ceremonia de juramentación." },
      ],
      faqs: [
        { q: "¿Cuánto tiempo toma la naturalización?", a: "El tiempo de procesamiento depende de tu oficina local de USCIS, pero la mayoría de los casos avanzan de la presentación a la entrevista en aproximadamente 8 a 14 meses." },
        { q: "¿Qué pasa si tengo un arresto anterior o un error en una solicitud pasada?", a: "No te descalifica automáticamente. Vannia lo revisa desde el principio para que sepas qué esperar en vez de llevarte una sorpresa en la entrevista." },
        { q: "¿Necesito pasar el examen de inglés?", a: "La mayoría de los solicitantes sí, pero hay exenciones según la edad, el tiempo de residencia y ciertas condiciones médicas. Vannia puede decirte si alguna aplica en tu caso." },
        { q: "¿Puede negarse mi caso?", a: "Sí, por eso la preparación importa. Vannia construye tu solicitud para resolver los puntos débiles antes de que USCIS los vea." },
        { q: "¿Tendré que renunciar a mi ciudadanía de mi país de origen?", a: "Depende de tu país de origen. Estados Unidos no te exige renunciar a tu otra ciudadanía, pero algunos países terminan la tuya automáticamente cuando te naturalizas en otro lugar. Vannia puede decirte cuáles son las reglas de tu país antes de que apliques." },
      ],
    },
  },
  {
    slug: "asylum-refugee-claims",
    photo: SVC_PHOTOS[1],
    en: {
      t: "Asylum & Refugee Claims",
      d: "If you fled persecution in your home country, asylum may offer you legal protection in the United States. Vannia builds your case around your declaration and the evidence that supports it.",
      covers: ["Declaration and supporting evidence", "Asylum interview preparation", "Representation before immigration court"],
      long: [
        "Asylum cases are won or lost on the strength of your story and the evidence behind it. Vannia takes the time to hear your full account, in your language, before a single word gets written down.",
        "She then builds a declaration that holds together under scrutiny, and prepares you for an interview or hearing where the details matter as much as the truth of what happened to you.",
      ],
      requirements: [
        "You must generally file within one year of arriving in the U.S. (with limited exceptions)",
        "Your fear of return must be tied to race, religion, nationality, political opinion, or social group",
        "A detailed, consistent personal declaration",
        "Supporting evidence where available (records, news reports, witness statements)",
      ],
      process: [
        { t: "Case Evaluation", d: "Vannia listens to your story and identifies the legal basis that fits it." },
        { t: "Declaration & Evidence", d: "Together you build a written declaration and gather the evidence available to support it." },
        { t: "Filing", d: "She files your application (Form I-589) within the required timeframe." },
        { t: "Interview or Hearing Prep", d: "You rehearse the real questions you'll face, so nothing catches you off guard." },
      ],
      faqs: [
        { q: "What if it's already been more than a year since I arrived?", a: "There are exceptions for changed or extraordinary circumstances. Vannia can tell you honestly whether yours applies." },
        { q: "Can my spouse and children be included?", a: "Yes, immediate family members can often be included in your application or file derivative claims." },
        { q: "What happens while my case is pending?", a: "You can generally apply for a work permit while you wait, and Vannia will guide you through that filing too." },
        { q: "What if my asylum case is denied?", a: "Depending on how you filed, there may be next steps, including immigration court. Vannia will walk you through your options before that happens." },
        { q: "What's the difference between asylum and refugee status?", a: "They're two paths to the same protection. Refugee status is applied for from outside the United States, before you arrive. Asylum is for people already in the U.S. or arriving at the border. Vannia can tell you which applies to your situation." },
      ],
    },
    es: {
      t: "Asilo y Refugio",
      d: "Si huiste de persecución en tu país de origen, el asilo puede ofrecerte protección legal en los Estados Unidos. Vannia construye tu caso con tu declaración y la evidencia que lo respalda.",
      covers: ["Declaración jurada y evidencia de respaldo", "Preparación para la entrevista de asilo", "Representación ante la corte de inmigración"],
      long: [
        "Los casos de asilo se ganan o se pierden según la fuerza de tu historia y la evidencia que la respalda. Vannia se toma el tiempo de escuchar tu relato completo, en tu idioma, antes de escribir una sola palabra.",
        "Luego construye una declaración que se mantenga firme bajo escrutinio, y te prepara para una entrevista o audiencia donde los detalles importan tanto como la verdad de lo que viviste.",
      ],
      requirements: [
        "Generalmente debes presentar tu caso dentro de un año de tu llegada a EE. UU. (con excepciones limitadas)",
        "Tu temor de regresar debe estar relacionado con raza, religión, nacionalidad, opinión política o grupo social",
        "Una declaración personal detallada y consistente",
        "Evidencia de respaldo cuando esté disponible (documentos, reportes de noticias, testimonios)",
      ],
      process: [
        { t: "Evaluación del Caso", d: "Vannia escucha tu historia e identifica la base legal que corresponde a tu situación." },
        { t: "Declaración y Evidencia", d: "Juntas construyen una declaración escrita y reúnen la evidencia disponible para respaldarla." },
        { t: "Presentación", d: "Presenta tu solicitud (Formulario I-589) dentro del plazo requerido." },
        { t: "Preparación para Entrevista o Audiencia", d: "Practican las preguntas reales que enfrentarás, para que nada te tome por sorpresa." },
      ],
      faqs: [
        { q: "¿Qué pasa si ya ha pasado más de un año desde que llegué?", a: "Existen excepciones por circunstancias cambiantes o extraordinarias. Vannia puede decirte con honestidad si la tuya aplica." },
        { q: "¿Pueden incluirse mi cónyuge e hijos?", a: "Sí, los familiares directos a menudo pueden incluirse en tu solicitud o presentar reclamos derivados." },
        { q: "¿Qué pasa mientras mi caso está pendiente?", a: "Generalmente puedes solicitar un permiso de trabajo mientras esperas, y Vannia también te guiará en esa solicitud." },
        { q: "¿Qué pasa si me niegan el asilo?", a: "Dependiendo de cómo presentaste tu caso, puede haber siguientes pasos, incluyendo la corte de inmigración. Vannia te explicará tus opciones antes de que eso ocurra." },
        { q: "¿Cuál es la diferencia entre asilo y estatus de refugiado?", a: "Son dos caminos hacia la misma protección. El estatus de refugiado se solicita fuera de Estados Unidos, antes de llegar. El asilo es para personas que ya están en EE. UU. o que llegan a la frontera. Vannia puede decirte cuál aplica a tu situación." },
      ],
    },
  },
  {
    slug: "deportation-defense",
    photo: SVC_PHOTOS[2],
    en: {
      t: "Deportation Defense",
      d: "Receiving a notice to appear in immigration court is frightening. Vannia reviews your case, identifies the relief available to you, and represents you at every hearing.",
      covers: ["Review of your notice to appear", "Motions and available relief", "Representation at every hearing"],
      long: [
        "A notice to appear in immigration court is one of the most frightening documents a person can receive. Vannia's first job is to slow things down long enough to understand what you're actually facing.",
        "Then she builds a defense around whatever relief is realistically available to you, and stands beside you at every hearing so you're never facing the judge alone.",
      ],
      requirements: [
        "A copy of your Notice to Appear (NTA) and any prior immigration paperwork",
        "An honest account of how long you've been in the U.S. and your ties here (family, work, community)",
        "Any criminal history, even minor, disclosed upfront",
        "Time. Court deadlines are strict, so the sooner she reviews your case, the more options stay open",
      ],
      process: [
        { t: "Immediate Case Review", d: "Vannia reviews your NTA and court date first, since deadlines can eliminate options fast." },
        { t: "Identifying Relief", d: "She evaluates what's realistically available to you: cancellation of removal, asylum, adjustment of status, voluntary departure, a waiver, or another path." },
        { t: "Motions & Preparation", d: "She files the motions your case needs and prepares your evidence and testimony." },
        { t: "Representation at Hearings", d: "Vannia appears with you at every hearing, so you're never in that courtroom without someone on your side." },
      ],
      faqs: [
        { q: "Do I have to go to court alone if I can't afford a lawyer right away?", a: "No. Call as soon as you get your notice. Even a short consultation can help you understand your first hearing." },
        { q: "Can deportation be stopped?", a: "Sometimes, depending on your history and what relief you qualify for. Vannia will tell you plainly what's realistic for your case." },
        { q: "What if I missed a court date?", a: "It's serious, but not always the end of your case. Reach out right away so Vannia can review your options." },
        { q: "Will my family be told what's happening?", a: "That's your call entirely. Vannia keeps you informed in plain language so you can decide who else needs to know." },
        { q: "What happens if the judge orders deportation?", a: "You can usually appeal to a higher immigration court, the Board of Immigration Appeals, within 30 days of the decision. It doesn't always succeed, but it's rarely the final word, and Vannia will tell you honestly whether it's worth pursuing in your case." },
      ],
    },
    es: {
      t: "Defensa Contra Deportación",
      d: "Recibir un aviso de comparecencia ante la corte de inmigración es aterrador. Vannia revisa tu caso, identifica el alivio disponible, y te representa en cada audiencia.",
      covers: ["Revisión de tu aviso de comparecencia", "Mociones y alivio disponible", "Representación en cada audiencia"],
      long: [
        "Recibir un aviso de comparecencia ante la corte de inmigración es uno de los documentos más aterradores que una persona puede recibir. El primer trabajo de Vannia es frenar las cosas el tiempo suficiente para entender lo que realmente estás enfrentando.",
        "Luego construye una defensa alrededor del alivio que realmente esté disponible para ti, y te acompaña en cada audiencia para que nunca enfrentes al juez sola o solo.",
      ],
      requirements: [
        "Una copia de tu Aviso de Comparecencia (NTA) y cualquier papeleo de inmigración anterior",
        "Un relato honesto de cuánto tiempo llevas en EE. UU. y tus lazos aquí (familia, trabajo, comunidad)",
        "Cualquier historial criminal, incluso menor, revelado desde el principio",
        "Tiempo. Los plazos de la corte son estrictos, así que cuanto antes revise tu caso, más opciones quedan abiertas",
      ],
      process: [
        { t: "Revisión Inmediata del Caso", d: "Vannia revisa tu NTA y tu fecha de corte primero, ya que los plazos pueden eliminar opciones rápidamente." },
        { t: "Identificación del Alivio Disponible", d: "Evalúa qué está realmente disponible para ti: cancelación de deportación, asilo, ajuste de estatus, salida voluntaria, un perdón, u otro camino." },
        { t: "Mociones y Preparación", d: "Presenta las mociones que tu caso necesita y prepara tu evidencia y testimonio." },
        { t: "Representación en las Audiencias", d: "Vannia se presenta contigo en cada audiencia, para que nunca estés en esa sala de corte sin alguien de tu lado." },
      ],
      faqs: [
        { q: "¿Tengo que ir a la corte sola o solo si no puedo pagar un abogado de inmediato?", a: "No. Llama en cuanto recibas tu aviso. Incluso una consulta breve puede ayudarte a entender tu primera audiencia." },
        { q: "¿Se puede detener una deportación?", a: "A veces, dependiendo de tu historial y del alivio para el que califiques. Vannia te dirá con claridad qué es realista en tu caso." },
        { q: "¿Qué pasa si perdí una fecha de corte?", a: "Es serio, pero no siempre es el final de tu caso. Comunícate de inmediato para que Vannia revise tus opciones." },
        { q: "¿Se le informará a mi familia lo que está pasando?", a: "Esa decisión es completamente tuya. Vannia te mantiene informada en un lenguaje claro para que decidas quién más necesita saberlo." },
        { q: "¿Qué pasa si el juez ordena mi deportación?", a: "Por lo general puedes apelar ante una corte de inmigración superior, la Junta de Apelaciones de Inmigración, dentro de 30 días de la decisión. No siempre tiene éxito, pero rara vez es la última palabra, y Vannia te dirá con honestidad si vale la pena presentarla en tu caso." },
      ],
    },
  },
  {
    slug: "permanent-residence",
    photo: SVC_PHOTOS[3],
    en: {
      t: "Permanent Residence",
      d: "Whether through a family member or an employer, obtaining your green card sets the foundation for your life in the United States. Vannia prepares your petition with the attention this step deserves.",
      covers: ["Family petitions (I-130)", "Adjustment of status (I-485)", "Employment-based petitions"],
      long: [
        "A green card is the foundation everything else gets built on: work, travel, eventually citizenship. Vannia prepares your petition so it withstands scrutiny the first time, not after a request for more evidence.",
        "Whether your path runs through a family member or an employer, she keeps you informed at every stage instead of leaving you guessing while your file sits with USCIS.",
      ],
      requirements: [
        "A qualifying relationship (spouse, parent, child, sibling) or a qualifying job offer",
        "Proof of the relationship or employment (marriage records, birth certificates, employer letters)",
        "A financial sponsor who meets income requirements (for family cases)",
        "No disqualifying immigration or criminal history",
      ],
      process: [
        { t: "Petition Strategy", d: "Vannia identifies the right category and petition for your situation." },
        { t: "Filing the Petition", d: "She files Form I-130 or the employment-based petition with complete supporting evidence." },
        { t: "Adjustment of Status", d: "Once your petition is approved (or filed concurrently), she prepares your I-485 application." },
        { t: "Interview & Green Card", d: "She prepares you for your interview and follows through until your card is in hand." },
      ],
      faqs: [
        { q: "How long does a family-based green card take?", a: "It varies widely by relationship and category, from under a year to several years. Vannia will give you a realistic estimate for your specific case." },
        { q: "Can I work while my green card application is pending?", a: "Often yes, through a separate work permit application filed alongside your case." },
        { q: "What if my spouse and I got married recently?", a: "Recent marriages get extra scrutiny, so Vannia helps you document the relationship in a way that holds up." },
        { q: "Do I need to leave the U.S. during the process?", a: "Usually not if you're adjusting status from inside the country, but travel needs advance planning. Ask before you book anything." },
        { q: "If I got my green card through marriage, is it different from a regular one?", a: "If you'd been married less than two years when it was approved, you'll get a conditional two-year card instead of a permanent one. Vannia will help you file the paperwork (Form I-751) to remove those conditions before it expires." },
      ],
    },
    es: {
      t: "Residencia Permanente",
      d: "Ya sea a través de un familiar o de un empleador, obtener tu tarjeta verde establece las bases de tu vida en los Estados Unidos. Vannia prepara tu petición con la atención que este paso merece.",
      covers: ["Peticiones familiares (I-130)", "Ajuste de estatus (I-485)", "Peticiones laborales"],
      long: [
        "Una tarjeta verde es la base sobre la que se construye todo lo demás: trabajo, viajes, y eventualmente la ciudadanía. Vannia prepara tu petición para que resista el escrutinio desde la primera vez, no después de una solicitud de más evidencia.",
        "Ya sea que tu camino sea a través de un familiar o un empleador, te mantiene informada o informado en cada etapa en vez de dejarte adivinando mientras tu expediente está en USCIS.",
      ],
      requirements: [
        "Una relación que califique (cónyuge, padre/madre, hijo/a, hermano/a) o una oferta de trabajo que califique",
        "Prueba de la relación o del empleo (actas de matrimonio, actas de nacimiento, cartas del empleador)",
        "Un patrocinador financiero que cumpla con los requisitos de ingresos (para casos familiares)",
        "Ningún historial de inmigración o criminal que descalifique",
      ],
      process: [
        { t: "Estrategia de Petición", d: "Vannia identifica la categoría y petición correcta para tu situación." },
        { t: "Presentación de la Petición", d: "Presenta el Formulario I-130 o la petición laboral con toda la evidencia de respaldo." },
        { t: "Ajuste de Estatus", d: "Una vez aprobada tu petición (o presentada de forma concurrente), prepara tu solicitud I-485." },
        { t: "Entrevista y Tarjeta Verde", d: "Te prepara para tu entrevista y da seguimiento hasta que tengas tu tarjeta en mano." },
      ],
      faqs: [
        { q: "¿Cuánto tiempo toma una tarjeta verde familiar?", a: "Varía mucho según la relación y la categoría, desde menos de un año hasta varios años. Vannia te dará un estimado realista para tu caso específico." },
        { q: "¿Puedo trabajar mientras mi solicitud está pendiente?", a: "A menudo sí, mediante una solicitud de permiso de trabajo por separado presentada junto con tu caso." },
        { q: "¿Qué pasa si mi cónyuge y yo nos casamos recientemente?", a: "Los matrimonios recientes reciben un escrutinio adicional, así que Vannia te ayuda a documentar la relación de una manera que se sostenga." },
        { q: "¿Necesito salir de EE. UU. durante el proceso?", a: "Generalmente no si estás ajustando estatus desde dentro del país, pero viajar requiere planificación previa. Pregunta antes de reservar cualquier cosa." },
        { q: "Si obtuve mi tarjeta verde por matrimonio, ¿es diferente de una normal?", a: "Si llevabas menos de dos años casada o casado cuando se aprobó, recibirás una tarjeta condicional de dos años en lugar de una permanente. Vannia te ayudará a presentar el papeleo (Formulario I-751) para eliminar esas condiciones antes de que venza." },
      ],
    },
  },
  {
    slug: "temporary-status-visas",
    photo: SVC_PHOTOS[4],
    en: {
      t: "Temporary Status & Visas",
      d: "Work visas, TPS, extensions, and status changes. We navigate the complexity so you can focus on your life and your family.",
      covers: ["Temporary Protected Status (TPS)", "Work permits", "Visa changes and extensions"],
      long: [
        "Not every case is about a green card right away. Sometimes what you need is a work permit, a status extension, or TPS while a longer-term plan comes together.",
        "Vannia keeps track of deadlines and re-registration windows most people miss, so your status doesn't lapse while you're focused on everything else in your life.",
      ],
      requirements: [
        "Proof of nationality and continuous presence for TPS cases",
        "A qualifying visa category or job offer for work visas",
        "Current status documentation (I-94, prior approval notices)",
        "Awareness of your expiration and re-registration dates",
      ],
      process: [
        { t: "Status Check", d: "Vannia reviews your current status and how much time you actually have." },
        { t: "Choosing the Right Filing", d: "She identifies whether TPS, an extension, a status change, or a new visa fits your situation." },
        { t: "Filing & Tracking Deadlines", d: "She files on time and tracks re-registration or renewal windows so nothing lapses." },
        { t: "Planning Your Next Step", d: "She helps you think past the temporary fix toward a longer-term path." },
      ],
      faqs: [
        { q: "What happens if my TPS country designation ends?", a: "Vannia stays current on TPS announcements and will tell you what options open up if that happens." },
        { q: "Can I switch from one visa type to another?", a: "Sometimes, depending on your current status and history. It's worth a real review before you assume either way." },
        { q: "How early should I file for a renewal?", a: "As early as the window allows. Filing late is one of the most common, and most avoidable, mistakes." },
        { q: "Does a temporary status lead to a green card?", a: "Not directly, but it can buy time to build toward one. Vannia can map out what that path could look like for you." },
        { q: "What happens if my current status expires before my renewal is approved?", a: "If you filed on time, you're often protected from accruing unlawful presence while it's pending, though rules vary by category. This is exactly why Vannia tracks your deadlines closely instead of leaving it to chance." },
      ],
    },
    es: {
      t: "Estado Temporal y Visas",
      d: "Visas de trabajo, TPS, extensiones y cambios de estatus. Navegamos la complejidad para que tú te enfoques en tu vida y tu familia.",
      covers: ["Estatus de Protección Temporal (TPS)", "Permisos de trabajo", "Cambios y extensiones de visa"],
      long: [
        "No todos los casos se tratan de una tarjeta verde de inmediato. A veces lo que necesitas es un permiso de trabajo, una extensión de estatus, o TPS mientras se construye un plan a más largo plazo.",
        "Vannia da seguimiento a los plazos y ventanas de reinscripción que la mayoría de las personas pasan por alto, para que tu estatus no venza mientras te enfocas en todo lo demás en tu vida.",
      ],
      requirements: [
        "Prueba de nacionalidad y presencia continua para casos de TPS",
        "Una categoría de visa que califique o una oferta de trabajo para visas laborales",
        "Documentación de estatus actual (I-94, avisos de aprobación anteriores)",
        "Estar al tanto de tus fechas de vencimiento y reinscripción",
      ],
      process: [
        { t: "Revisión de tu Estatus", d: "Vannia revisa tu estatus actual y cuánto tiempo tienes realmente." },
        { t: "Elegir la Solicitud Correcta", d: "Identifica si TPS, una extensión, un cambio de estatus, o una nueva visa se ajusta a tu situación." },
        { t: "Presentación y Seguimiento de Plazos", d: "Presenta a tiempo y da seguimiento a las ventanas de reinscripción o renovación para que nada venza." },
        { t: "Planeando tu Próximo Paso", d: "Te ayuda a pensar más allá de la solución temporal, hacia un camino a más largo plazo." },
      ],
      faqs: [
        { q: "¿Qué pasa si termina la designación de TPS de mi país?", a: "Vannia se mantiene al día con los anuncios de TPS y te dirá qué opciones se abren si eso ocurre." },
        { q: "¿Puedo cambiar de un tipo de visa a otro?", a: "A veces, dependiendo de tu estatus actual y tu historial. Vale la pena una revisión real antes de asumir cualquier respuesta." },
        { q: "¿Con cuánta anticipación debo presentar una renovación?", a: "Tan pronto como la ventana lo permita. Presentar tarde es uno de los errores más comunes, y más evitables." },
        { q: "¿Un estatus temporal lleva a una tarjeta verde?", a: "No directamente, pero puede darte tiempo para construir un camino hacia una. Vannia puede trazar cómo se vería ese camino para ti." },
        { q: "¿Qué pasa si mi estatus actual vence antes de que aprueben mi renovación?", a: "Si presentaste a tiempo, muchas veces estás protegida o protegido de acumular presencia ilegal mientras se procesa, aunque las reglas varían según la categoría. Por eso Vannia da seguimiento de cerca a tus plazos en lugar de dejarlo al azar." },
      ],
    },
  },
  {
    slug: "case-consultation",
    photo: SVC_PHOTOS[5],
    en: {
      t: "Case Consultation",
      d: "Not sure which area applies to your situation. A consultation gives you a clear read on your case and a concrete plan for your next step.",
      covers: ["One hour, no obligation", "Available in English and Spanish", "A clear plan for your next step"],
      long: [
        "Immigration law rarely fits neatly into one category, and most people don't arrive already knowing which one applies to them. A consultation gives you a straight answer.",
        "You'll spend an hour walking through your situation with Vannia directly, not a paralegal or an intake form, and leave with a clear sense of where you actually stand.",
      ],
      requirements: [
        "Any immigration paperwork you already have (notices, prior filings, approval letters)",
        "A rough timeline of your immigration history, even if it's incomplete",
        "Your questions written down, so nothing gets forgotten in the moment",
        "Nothing else. You don't need to have this figured out before you call",
      ],
      process: [
        { t: "Book Your Time", d: "Pick a time that works for you, by phone, video, or in person." },
        { t: "Talk Through Your Case", d: "Vannia listens first, then explains what she's seeing and why." },
        { t: "Get a Clear Read", d: "You leave the call knowing which category applies and what's realistic." },
        { t: "Decide Your Next Step", d: "If you're ready to move forward, she outlines exactly what that looks like and what it costs." },
      ],
      faqs: [
        { q: "Does the consultation cost anything?", a: "Ask when you book. Vannia is upfront about cost before you commit to anything." },
        { q: "What if I don't end up needing a lawyer?", a: "Then you'll leave with a clear answer and no pressure. That's the point of the call." },
        { q: "Can I bring a family member?", a: "Of course. Many people prefer to have someone with them, and that's welcome." },
        { q: "Is the consultation confidential?", a: "Yes. What you share with Vannia stays between you and her." },
        { q: "Do I have to come to Eugene in person?", a: "No. Vannia meets with clients across Oregon and California by phone or video just as often as in person. Pick whatever works for your situation." },
      ],
    },
    es: {
      t: "Consulta de Caso",
      d: "No estás segura de cuál área aplica a tu situación. Una consulta te da una evaluación clara y un plan concreto para tu próximo paso.",
      covers: ["Una hora, sin compromiso", "Disponible en inglés y español", "Un plan claro para tu próximo paso"],
      long: [
        "El derecho de inmigración rara vez encaja perfectamente en una sola categoría, y la mayoría de las personas no llegan sabiendo ya cuál les corresponde. Una consulta te da una respuesta directa.",
        "Pasarás una hora repasando tu situación directamente con Vannia, no con una asistente legal ni un formulario de admisión, y saldrás con una idea clara de dónde realmente estás parada o parado.",
      ],
      requirements: [
        "Cualquier papeleo de inmigración que ya tengas (avisos, solicitudes anteriores, cartas de aprobación)",
        "Una idea general de tu historial de inmigración, aunque esté incompleta",
        "Tus preguntas por escrito, para que nada se te olvide en el momento",
        "Nada más. No necesitas tener esto resuelto antes de llamar",
      ],
      process: [
        { t: "Agenda tu Horario", d: "Elige un horario que te funcione, por teléfono, video, o en persona." },
        { t: "Cuéntale tu Caso", d: "Vannia escucha primero, y después te explica lo que ve y por qué." },
        { t: "Obtén una Evaluación Clara", d: "Sales de la llamada sabiendo qué categoría aplica y qué es realista." },
        { t: "Decide tu Próximo Paso", d: "Si estás lista o listo para avanzar, te explica exactamente cómo se ve eso y cuánto cuesta." },
      ],
      faqs: [
        { q: "¿La consulta tiene algún costo?", a: "Pregunta al agendar. Vannia es transparente sobre el costo antes de que te comprometas a nada." },
        { q: "¿Qué pasa si al final no necesito un abogado?", a: "Entonces sales con una respuesta clara y sin presión. Ese es el propósito de la llamada." },
        { q: "¿Puedo llevar a un familiar?", a: "Por supuesto. Muchas personas prefieren tener a alguien con ellas, y es bienvenido." },
        { q: "¿La consulta es confidencial?", a: "Sí. Lo que compartas con Vannia queda entre tú y ella." },
        { q: "¿Tengo que ir a Eugene en persona?", a: "No. Vannia se reúne con clientes de Oregón y California por teléfono o video tanto como en persona. Elige lo que mejor te funcione." },
      ],
    },
  },
];
