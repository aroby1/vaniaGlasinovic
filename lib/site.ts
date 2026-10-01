export type Lang = "en" | "es";

export const PHONE_DISPLAY = "(541) 908-5079";
export const PHONE_TEL = "+15419085079";
export const EMAIL = "vannia.glasinovic@gmail.com";
export const SITE_URL = "https://www.glasinoviclaw.com";

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
// One photo per practice area. Natural color, no filter (see CLAUDE.md design notes).
export const SVC_PHOTOS = [
  "https://images.unsplash.com/photo-1667849921481-9e13c239ee3d?w=1200&h=850&fit=crop&crop=faces,entropy&auto=format",
  "https://images.unsplash.com/photo-1614144477821-9daf217ae100?w=1200&h=850&fit=crop&crop=faces,entropy&auto=format",
  "https://images.unsplash.com/photo-1626836014893-37663794dca7?w=1200&h=850&fit=crop&crop=faces,entropy&auto=format",
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=850&fit=crop&crop=faces,entropy&auto=format",
  "https://images.unsplash.com/photo-1711934048125-dfae798c4915?w=1200&h=850&fit=crop&crop=faces,entropy&auto=format",
  "https://images.unsplash.com/photo-1534818113099-dbe2b2e800ae?w=1200&h=850&fit=crop&crop=faces,entropy&auto=format",
  "https://images.unsplash.com/photo-1503242464786-199ffb1dd8d9?w=1200&h=850&fit=crop&crop=faces,entropy&auto=format",
  "https://images.unsplash.com/photo-1676054699804-aa1baf2166f8?w=1200&h=850&fit=crop&crop=faces,entropy&auto=format",
  "https://images.unsplash.com/photo-1597199204011-e6e704645213?w=1200&h=850&fit=crop&crop=faces,entropy&auto=format",
  "https://images.unsplash.com/photo-1687992176093-6417a93fa3d0?w=1200&h=850&fit=crop&crop=faces,entropy&auto=format",
  "https://images.unsplash.com/photo-1489641024260-20e5cb3ee4aa?w=1200&h=850&fit=crop&crop=faces,entropy&auto=format",
  "https://images.unsplash.com/photo-1619771699034-fec6b1aabde3?w=1200&h=850&fit=crop&crop=faces,entropy&auto=format",
];

type ServiceCopy = {
  t: string;
  d: string;
  long: string[];
  process: { t: string; d: string }[];
  requirements: string[];
  faqs: { q: string; a: string }[];
};

// The 12 practice areas Vannia listed, in her order. Each has a detail page at /services/[slug].
// The long-form copy is general information written for the site; it needs Vannia's legal review before launch.
export const services: { slug: string; photo: string; en: ServiceCopy; es: ServiceCopy }[] = [
  {
    slug: "deportation-defense",
    photo: SVC_PHOTOS[0],
    en: {
      t: "Removal/Deportation Defense",
      d: "If you have been placed in removal proceedings, Vannia represents you in immigration court and works to identify every form of relief available in your case.",
      long: [
        "Removal proceedings usually begin with a Notice to Appear (NTA), a document that lists the government's reasons for trying to deport you and tells you when to go to immigration court. Receiving one is serious, but it is not the end of your case. Many people in court have options they don't know about.",
        "Vannia reviews your full history, appears with you in court, and builds the strongest case for the relief that fits your situation, whether that is cancellation of removal, asylum, adjustment of status, a waiver, or voluntary departure.",
      ],
      process: [
        { t: "Review your Notice to Appear", d: "We check the charges against you, your immigration history, and any criminal record to see where you stand." },
        { t: "Master calendar hearing", d: "Vannia appears with you at your first hearing, responds to the charges, and tells the judge what relief you will apply for." },
        { t: "Build your application", d: "We prepare the forms, declarations, witness letters, and evidence that support your case." },
        { t: "Individual hearing", d: "At your final hearing, Vannia presents your case to the judge and prepares you to testify." },
      ],
      requirements: [
        "Your Notice to Appear and every notice you have received from the court or ICE",
        "Your immigration history: dates of entry, visas, and any prior applications or deportations",
        "Police reports and court records for any arrest, even if the charges were dropped",
        "Proof of how long you have lived here and of your family ties, especially U.S. citizen or resident relatives",
      ],
      faqs: [
        { q: "What happens if I miss my court date?", a: "The judge can order you deported without you there, called an in absentia order. In limited situations, such as not receiving notice or exceptional circumstances, it may be possible to reopen the case. Contact an attorney right away." },
        { q: "Can I get out of immigration detention?", a: "In many cases you can ask an immigration judge for a bond hearing. Whether you qualify depends on your history and the reason you are detained." },
        { q: "What if the judge orders me deported?", a: "You generally have 30 days to appeal to the Board of Immigration Appeals. In most cases, filing the appeal on time stops the deportation while the appeal is decided." },
      ],
    },
    es: {
      t: "Defensa Contra la Deportación",
      d: "Si te encuentras en proceso de deportación, Vannia te representa ante la corte de inmigración y busca toda forma de alivio disponible en tu caso.",
      long: [
        "El proceso de deportación normalmente empieza con una Notificación de Comparecencia (NTA), un documento que explica las razones del gobierno para intentar deportarte y te indica cuándo presentarte ante la corte de inmigración. Recibirla es serio, pero no es el final de tu caso. Muchas personas en corte tienen opciones que no conocen.",
        "Vannia revisa todo tu historial, te acompaña en la corte y prepara el caso más sólido para el alivio que corresponde a tu situación, ya sea cancelación de deportación, asilo, ajuste de estatus, un perdón o salida voluntaria.",
      ],
      process: [
        { t: "Revisar tu Notificación de Comparecencia", d: "Revisamos los cargos en tu contra, tu historial migratorio y cualquier antecedente penal para saber dónde estás parado." },
        { t: "Audiencia preliminar", d: "Vannia te acompaña en tu primera audiencia, responde a los cargos y le indica al juez qué alivio vas a solicitar." },
        { t: "Preparar tu solicitud", d: "Preparamos los formularios, declaraciones, cartas de testigos y pruebas que respaldan tu caso." },
        { t: "Audiencia individual", d: "En tu audiencia final, Vannia presenta tu caso ante el juez y te prepara para testificar." },
      ],
      requirements: [
        "Tu Notificación de Comparecencia y todos los avisos que hayas recibido de la corte o de ICE",
        "Tu historial migratorio: fechas de entrada, visas y solicitudes o deportaciones anteriores",
        "Reportes policiales y registros judiciales de cualquier arresto, aunque los cargos se hayan retirado",
        "Pruebas del tiempo que llevas viviendo aquí y de tus lazos familiares, en especial familiares ciudadanos o residentes",
      ],
      faqs: [
        { q: "¿Qué pasa si falto a mi cita en la corte?", a: "El juez puede ordenar tu deportación sin que estés presente, lo que se llama una orden in absentia. En situaciones limitadas, como no haber recibido la notificación o circunstancias excepcionales, puede ser posible reabrir el caso. Busca a un abogado de inmediato." },
        { q: "¿Puedo salir de la detención migratoria?", a: "En muchos casos puedes pedirle a un juez de inmigración una audiencia de fianza. Si calificas depende de tu historial y del motivo de tu detención." },
        { q: "¿Qué pasa si el juez ordena mi deportación?", a: "Por lo general tienes 30 días para apelar ante la Junta de Apelaciones de Inmigración. En la mayoría de los casos, presentar la apelación a tiempo detiene la deportación mientras se decide." },
      ],
    },
  },
  {
    slug: "family-based-petitions",
    photo: SVC_PHOTOS[1],
    en: {
      t: "Family-Based Petitions",
      d: "Petitions that allow U.S. citizens and lawful permanent residents to bring a spouse, child, parent, or sibling to live with them in the United States.",
      long: [
        "A family petition (Form I-130) is how a U.S. citizen or permanent resident asks the government to recognize a family relationship so a relative can immigrate. Spouses, unmarried children under 21, and parents of adult U.S. citizens are \"immediate relatives\" and do not wait in a visa line. Other relatives wait in a line that can last years, depending on the category and the country.",
        "Vannia helps you choose the right category, proves the relationship, and guides your relative through the second step, either an interview at a U.S. consulate abroad or adjustment of status inside the United States.",
      ],
      process: [
        { t: "Confirm the category", d: "We look at who is petitioning, who the relative is, and where they live to find the right path." },
        { t: "File the I-130", d: "We submit the petition with proof of your status and of the family relationship." },
        { t: "Wait for approval and a visa number", d: "Immediate relatives move ahead right away. Other categories wait for their priority date in the Visa Bulletin." },
        { t: "Green card step", d: "Your relative completes consular processing abroad or adjustment of status here, including the interview." },
      ],
      requirements: [
        "Proof of the petitioner's status: U.S. passport, naturalization certificate, or green card",
        "Birth, marriage, or adoption certificates that prove the relationship",
        "For spouses, evidence the marriage is real: shared home, finances, photos, children",
        "Proof the petitioner, or a joint sponsor, can financially support the relative (Form I-864)",
      ],
      faqs: [
        { q: "How long does a family petition take?", a: "For immediate relatives of U.S. citizens there is no visa line, only processing time. Other categories can take several years or more, depending on the relationship and the relative's country." },
        { q: "Can a green card holder petition for a parent or sibling?", a: "No. Permanent residents can petition only for a spouse and unmarried children. Parents and siblings require a U.S. citizen petitioner." },
        { q: "What if my relative is already in the U.S. without status?", a: "It depends on how they entered and their history. Some can adjust status here; others need to process abroad and may need a waiver first. This is worth reviewing before anything is filed." },
      ],
    },
    es: {
      t: "Peticiones Familiares",
      d: "Peticiones que permiten a ciudadanos y residentes permanentes traer a su cónyuge, hijo, padre o hermano a vivir con ellos en Estados Unidos.",
      long: [
        "Una petición familiar (Formulario I-130) es la forma en que un ciudadano o residente permanente le pide al gobierno reconocer una relación familiar para que un familiar pueda inmigrar. Los cónyuges, los hijos solteros menores de 21 años y los padres de ciudadanos adultos son \"familiares inmediatos\" y no esperan en una fila de visas. Otros familiares esperan en una fila que puede durar años, según la categoría y el país.",
        "Vannia te ayuda a elegir la categoría correcta, a probar la relación y a guiar a tu familiar en el segundo paso, ya sea una entrevista en un consulado de EE. UU. en el extranjero o un ajuste de estatus dentro de Estados Unidos.",
      ],
      process: [
        { t: "Confirmar la categoría", d: "Revisamos quién hace la petición, quién es el familiar y dónde vive para encontrar el camino correcto." },
        { t: "Presentar el I-130", d: "Presentamos la petición con pruebas de tu estatus y de la relación familiar." },
        { t: "Esperar la aprobación y un número de visa", d: "Los familiares inmediatos avanzan de inmediato. Las otras categorías esperan su fecha de prioridad en el Boletín de Visas." },
        { t: "Paso de la residencia", d: "Tu familiar completa el trámite consular en el extranjero o el ajuste de estatus aquí, incluida la entrevista." },
      ],
      requirements: [
        "Prueba del estatus de quien pide: pasaporte estadounidense, certificado de naturalización o tarjeta de residencia",
        "Actas de nacimiento, matrimonio o adopción que prueben la relación",
        "Para cónyuges, pruebas de que el matrimonio es real: hogar compartido, finanzas, fotos, hijos",
        "Prueba de que quien pide, o un copatrocinador, puede mantener económicamente al familiar (Formulario I-864)",
      ],
      faqs: [
        { q: "¿Cuánto tarda una petición familiar?", a: "Para familiares inmediatos de ciudadanos no hay fila de visas, solo el tiempo de trámite. Otras categorías pueden tardar varios años o más, según la relación y el país del familiar." },
        { q: "¿Un residente permanente puede pedir a sus padres o hermanos?", a: "No. Los residentes permanentes solo pueden pedir a su cónyuge y a sus hijos solteros. Los padres y hermanos requieren que quien pida sea ciudadano." },
        { q: "¿Qué pasa si mi familiar ya está en EE. UU. sin estatus?", a: "Depende de cómo entró y de su historial. Algunos pueden ajustar su estatus aquí; otros deben tramitar en el extranjero y quizá necesiten un perdón primero. Vale la pena revisarlo antes de presentar cualquier cosa." },
      ],
    },
  },
  {
    slug: "naturalization",
    photo: SVC_PHOTOS[2],
    en: {
      t: "Naturalization",
      d: "The final step for lawful permanent residents ready to become U.S. citizens, from the N-400 application through the civics test and the oath ceremony.",
      long: [
        "Most permanent residents can apply for citizenship after five years with a green card, or after three years if they have been married to and living with a U.S. citizen that whole time. You also need to show continuous residence, time physically in the U.S., good moral character, and pass an English and civics test.",
        "Filing is not risk-free. The application reviews your whole history since you became a resident, including long trips abroad, arrests, and taxes. Vannia reviews these issues before you file so there are no surprises at your interview.",
      ],
      process: [
        { t: "Eligibility review", d: "We confirm your dates, travel history, and record to make sure you are ready to apply." },
        { t: "File the N-400", d: "We prepare and submit your application with the supporting documents." },
        { t: "Biometrics and interview", d: "You give fingerprints, then attend an interview with the English and civics test. Vannia prepares you for both." },
        { t: "Oath ceremony", d: "Once approved, you take the Oath of Allegiance and become a U.S. citizen." },
      ],
      requirements: [
        "Your green card and the date you became a permanent resident",
        "A list of every trip outside the U.S. since then, with dates",
        "Records of any arrest, citation, or court case, even if dismissed",
        "Tax returns and, if you are applying through marriage, proof of your spouse's citizenship",
      ],
      faqs: [
        { q: "Do long trips abroad affect my application?", a: "They can. A trip longer than six months may break your continuous residence, and a trip of a year or more usually does. Bring your travel history to the consultation." },
        { q: "What if I fail the English or civics test?", a: "You get a second chance to retake the part you did not pass, usually within a few months of the first interview." },
        { q: "Will I lose my other citizenship?", a: "The U.S. generally allows dual citizenship. Whether you keep your first citizenship depends on the laws of your country of origin." },
      ],
    },
    es: {
      t: "Naturalización",
      d: "El último paso para residentes permanentes listos para convertirse en ciudadanos, desde la solicitud N-400 hasta el examen cívico y la ceremonia de juramento.",
      long: [
        "La mayoría de los residentes permanentes pueden solicitar la ciudadanía después de cinco años con la tarjeta de residencia, o después de tres años si han estado casados y viviendo con un ciudadano durante todo ese tiempo. También debes demostrar residencia continua, tiempo de presencia física en EE. UU., buen carácter moral, y aprobar un examen de inglés y de cívica.",
        "Presentar la solicitud no está libre de riesgo. La solicitud revisa todo tu historial desde que te hiciste residente, incluidos viajes largos al extranjero, arrestos e impuestos. Vannia revisa estos temas antes de presentar para que no haya sorpresas en tu entrevista.",
      ],
      process: [
        { t: "Revisión de elegibilidad", d: "Confirmamos tus fechas, tu historial de viajes y tus antecedentes para asegurar que estás listo para solicitar." },
        { t: "Presentar el N-400", d: "Preparamos y presentamos tu solicitud con los documentos de respaldo." },
        { t: "Biométricos y entrevista", d: "Das tus huellas y luego asistes a una entrevista con el examen de inglés y cívica. Vannia te prepara para ambos." },
        { t: "Ceremonia de juramento", d: "Una vez aprobada, haces el Juramento de Lealtad y te conviertes en ciudadano." },
      ],
      requirements: [
        "Tu tarjeta de residencia y la fecha en que te hiciste residente permanente",
        "Una lista de cada viaje fuera de EE. UU. desde entonces, con fechas",
        "Registros de cualquier arresto, multa o caso judicial, aunque se haya desestimado",
        "Declaraciones de impuestos y, si solicitas por matrimonio, prueba de la ciudadanía de tu cónyuge",
      ],
      faqs: [
        { q: "¿Los viajes largos afectan mi solicitud?", a: "Pueden afectarla. Un viaje de más de seis meses puede romper tu residencia continua, y uno de un año o más normalmente la rompe. Trae tu historial de viajes a la consulta." },
        { q: "¿Qué pasa si no apruebo el examen de inglés o de cívica?", a: "Tienes una segunda oportunidad para repetir la parte que no aprobaste, normalmente dentro de unos meses después de la primera entrevista." },
        { q: "¿Perderé mi otra ciudadanía?", a: "EE. UU. generalmente permite la doble ciudadanía. Si conservas tu primera ciudadanía depende de las leyes de tu país de origen." },
      ],
    },
  },
  {
    slug: "adjustment-of-status",
    photo: SVC_PHOTOS[3],
    en: {
      t: "Adjustment of Status & LPR Card Renewals",
      d: "Applying for a green card from inside the United States, and renewing or replacing a lawful permanent resident card that has expired or been lost.",
      long: [
        "Adjustment of status (Form I-485) lets you become a permanent resident without leaving the United States. You need a basis to apply, such as an approved family petition, asylum, or a U or T visa, and in most cases you must have entered the country lawfully. While the application is pending, you can usually apply for a work permit and travel permission.",
        "Vannia also handles green card renewals and replacements (Form I-90), and removing conditions on a two-year conditional card for recent marriages (Form I-751).",
      ],
      process: [
        { t: "Confirm your basis", d: "We identify what makes you eligible and check your entry and history for problems." },
        { t: "File the I-485 package", d: "We submit the application with medical exam, financial support, and work and travel permit requests." },
        { t: "Biometrics and interview", d: "You give fingerprints and, in many cases, attend an interview. Vannia prepares you and can attend with you." },
        { t: "Green card", d: "Once approved, your card arrives by mail. We calendar renewal or removal-of-conditions deadlines for you." },
      ],
      requirements: [
        "Your passport, I-94 record, and proof of how you entered the U.S.",
        "The approved petition or other basis for your application",
        "Birth certificate and, if applicable, marriage and divorce records",
        "Any arrest or court records, and any prior immigration applications",
      ],
      faqs: [
        { q: "Can I travel while my application is pending?", a: "Not without advance parole (travel permission) approved first. Leaving without it can cancel your application." },
        { q: "My green card expired. Did I lose my status?", a: "No. Permanent resident status does not expire with the card, but you need a valid card as proof. You can file Form I-90 to renew it, up to six months before it expires." },
        { q: "I have a two-year conditional green card. What do I do?", a: "You must file Form I-751 to remove the conditions during the 90 days before the card expires. Missing that window can end your status." },
      ],
    },
    es: {
      t: "Ajuste de Estatus y Renovación de Residencia",
      d: "Solicitar la residencia permanente desde dentro de Estados Unidos, y renovar o reemplazar una tarjeta de residencia vencida o perdida.",
      long: [
        "El ajuste de estatus (Formulario I-485) te permite obtener la residencia permanente sin salir de Estados Unidos. Necesitas una base para solicitar, como una petición familiar aprobada, asilo o una visa U o T, y en la mayoría de los casos debes haber entrado al país legalmente. Mientras tu solicitud está pendiente, normalmente puedes pedir un permiso de trabajo y un permiso de viaje.",
        "Vannia también maneja renovaciones y reemplazos de la tarjeta de residencia (Formulario I-90), y la eliminación de condiciones en una tarjeta condicional de dos años por matrimonio reciente (Formulario I-751).",
      ],
      process: [
        { t: "Confirmar tu base", d: "Identificamos lo que te hace elegible y revisamos tu entrada y tu historial para detectar problemas." },
        { t: "Presentar el paquete I-485", d: "Presentamos la solicitud con el examen médico, el respaldo económico y los pedidos de permiso de trabajo y de viaje." },
        { t: "Biométricos y entrevista", d: "Das tus huellas y, en muchos casos, asistes a una entrevista. Vannia te prepara y puede acompañarte." },
        { t: "Tarjeta de residencia", d: "Una vez aprobada, tu tarjeta llega por correo. Anotamos por ti las fechas de renovación o de eliminación de condiciones." },
      ],
      requirements: [
        "Tu pasaporte, tu registro I-94 y prueba de cómo entraste a EE. UU.",
        "La petición aprobada u otra base para tu solicitud",
        "Acta de nacimiento y, si aplica, actas de matrimonio y divorcio",
        "Cualquier registro de arresto o de corte, y cualquier solicitud migratoria anterior",
      ],
      faqs: [
        { q: "¿Puedo viajar mientras mi solicitud está pendiente?", a: "No sin un permiso de viaje (advance parole) aprobado antes. Salir sin él puede cancelar tu solicitud." },
        { q: "Mi tarjeta de residencia venció. ¿Perdí mi estatus?", a: "No. La residencia permanente no vence con la tarjeta, pero necesitas una tarjeta vigente como prueba. Puedes presentar el Formulario I-90 para renovarla, hasta seis meses antes de que venza." },
        { q: "Tengo una tarjeta condicional de dos años. ¿Qué hago?", a: "Debes presentar el Formulario I-751 para eliminar las condiciones durante los 90 días antes de que venza la tarjeta. Perder ese plazo puede terminar tu estatus." },
      ],
    },
  },
  {
    slug: "daca",
    photo: SVC_PHOTOS[4],
    en: {
      t: "DACA",
      d: "Deferred Action for Childhood Arrivals, for people brought to the United States as children. Vannia handles both first-time requests and renewals.",
      long: [
        "DACA protects people who came to the United States as children from deportation for two years at a time and allows them to work legally. It does not give permanent status, but it can be renewed.",
        "DACA has been the subject of ongoing federal court cases, and the rules for first-time requests have changed more than once. Renewals have continued. Vannia checks where the program stands today before you file, so you do not spend money on an application that cannot be decided.",
      ],
      process: [
        { t: "Check eligibility and current rules", d: "We confirm you meet the requirements and what USCIS is accepting right now." },
        { t: "Gather your proof", d: "School records, leases, pay stubs, and other documents show your arrival and years here." },
        { t: "File the request", d: "We submit Forms I-821D and I-765 with your evidence." },
        { t: "Biometrics and decision", d: "You give fingerprints, and USCIS decides. We calendar your next renewal date." },
      ],
      requirements: [
        "Proof you arrived before your 16th birthday and have lived here since June 15, 2007",
        "Proof you were in the U.S. on June 15, 2012, and under 31 on that date",
        "School enrollment, a diploma or GED, or honorable military discharge",
        "Records of any arrest; certain convictions make you ineligible",
      ],
      faqs: [
        { q: "When should I renew?", a: "USCIS recommends filing between 150 and 120 days before your current DACA expires. Filing late can leave you without work authorization." },
        { q: "Can I travel outside the U.S. with DACA?", a: "Only with advance parole approved before you leave. Leaving without it ends your DACA and can create serious problems returning." },
        { q: "Does DACA lead to a green card?", a: "Not by itself. But some DACA recipients qualify for a green card another way, for example through a U.S. citizen spouse. It is worth checking." },
      ],
    },
    es: {
      t: "DACA",
      d: "Acción Diferida para los Llegados en la Infancia, para personas traídas a Estados Unidos siendo niños. Vannia maneja solicitudes nuevas y renovaciones.",
      long: [
        "DACA protege de la deportación, por dos años a la vez, a personas que llegaron a Estados Unidos siendo niños, y les permite trabajar legalmente. No da un estatus permanente, pero se puede renovar.",
        "DACA ha sido objeto de casos continuos en las cortes federales, y las reglas para las solicitudes nuevas han cambiado más de una vez. Las renovaciones han continuado. Vannia revisa cómo está el programa hoy antes de presentar, para que no gastes dinero en una solicitud que no se puede decidir.",
      ],
      process: [
        { t: "Revisar elegibilidad y reglas actuales", d: "Confirmamos que cumples los requisitos y qué está aceptando USCIS en este momento." },
        { t: "Reunir tus pruebas", d: "Registros escolares, contratos de renta, talones de pago y otros documentos muestran tu llegada y tus años aquí." },
        { t: "Presentar la solicitud", d: "Presentamos los Formularios I-821D e I-765 con tus pruebas." },
        { t: "Biométricos y decisión", d: "Das tus huellas y USCIS decide. Anotamos la fecha de tu próxima renovación." },
      ],
      requirements: [
        "Prueba de que llegaste antes de cumplir 16 años y has vivido aquí desde el 15 de junio de 2007",
        "Prueba de que estabas en EE. UU. el 15 de junio de 2012 y tenías menos de 31 años en esa fecha",
        "Inscripción escolar, diploma o GED, o baja honorable del ejército",
        "Registros de cualquier arresto; ciertas condenas te hacen inelegible",
      ],
      faqs: [
        { q: "¿Cuándo debo renovar?", a: "USCIS recomienda presentar entre 150 y 120 días antes de que venza tu DACA actual. Presentar tarde puede dejarte sin permiso de trabajo." },
        { q: "¿Puedo viajar fuera de EE. UU. con DACA?", a: "Solo con un permiso de viaje (advance parole) aprobado antes de salir. Salir sin él termina tu DACA y puede causar problemas serios para regresar." },
        { q: "¿DACA lleva a la residencia?", a: "No por sí solo. Pero algunos beneficiarios de DACA califican para la residencia por otra vía, por ejemplo a través de un cónyuge ciudadano. Vale la pena revisarlo." },
      ],
    },
  },
  {
    slug: "u-visas",
    photo: SVC_PHOTOS[5],
    en: {
      t: "U Visas",
      d: "For survivors of qualifying criminal activity who have helped, or are willing to help, law enforcement investigate or prosecute the crime.",
      long: [
        "The U visa protects people who were victims of certain crimes in the United States, such as domestic violence, sexual assault, or felonious assault, and who suffered substantial physical or mental harm. You must have been helpful to the police, prosecutor, or another agency investigating the crime, and that agency must sign a certification.",
        "There are more applicants than visas each year, so the wait is long. While you wait, USCIS may grant a work permit and protection from deportation. After three years in U status, you can apply for a green card. Certain family members can be included.",
      ],
      process: [
        { t: "Confidential consultation", d: "We talk through what happened, at your pace, and whether the crime qualifies." },
        { t: "Law enforcement certification", d: "We request the signed certification (Supplement B) from the agency that handled the crime." },
        { t: "File the I-918", d: "We submit your petition with your declaration, evidence of harm, and any waiver you need." },
        { t: "Work permit, then green card", d: "We follow your case through the waiting period and apply for your green card when you are eligible." },
      ],
      requirements: [
        "Police reports, case numbers, or court records about the crime",
        "Evidence of the physical or emotional harm you suffered",
        "Proof of your cooperation with law enforcement",
        "Your immigration and criminal history, so any waiver can be prepared",
      ],
      faqs: [
        { q: "What if I never reported the crime?", a: "You need a certification from law enforcement, but reporting now may still be possible. Talk to Vannia before contacting the agency." },
        { q: "Does the person who hurt me need to be convicted?", a: "No. What matters is that you were a victim and were helpful to the investigation, not whether anyone was convicted." },
        { q: "Can my family be included?", a: "Yes, certain family members can be included in your petition, such as your spouse and children, and in some cases parents and siblings." },
      ],
    },
    es: {
      t: "Visas U",
      d: "Para sobrevivientes de ciertos delitos que han ayudado, o están dispuestos a ayudar, a las autoridades a investigar o procesar el delito.",
      long: [
        "La visa U protege a personas que fueron víctimas de ciertos delitos en Estados Unidos, como violencia doméstica, agresión sexual o agresión grave, y que sufrieron un daño físico o mental considerable. Debes haber ayudado a la policía, a la fiscalía u otra agencia que investigó el delito, y esa agencia debe firmar una certificación.",
        "Cada año hay más solicitantes que visas, así que la espera es larga. Mientras esperas, USCIS puede otorgar un permiso de trabajo y protección contra la deportación. Después de tres años con estatus U, puedes solicitar la residencia. Ciertos familiares pueden incluirse.",
      ],
      process: [
        { t: "Consulta confidencial", d: "Hablamos de lo que pasó, a tu ritmo, y de si el delito califica." },
        { t: "Certificación de las autoridades", d: "Pedimos la certificación firmada (Suplemento B) a la agencia que manejó el delito." },
        { t: "Presentar el I-918", d: "Presentamos tu petición con tu declaración, pruebas del daño y cualquier perdón que necesites." },
        { t: "Permiso de trabajo, luego residencia", d: "Damos seguimiento a tu caso durante la espera y solicitamos tu residencia cuando seas elegible." },
      ],
      requirements: [
        "Reportes policiales, números de caso o registros judiciales del delito",
        "Pruebas del daño físico o emocional que sufriste",
        "Prueba de tu cooperación con las autoridades",
        "Tu historial migratorio y penal, para preparar cualquier perdón",
      ],
      faqs: [
        { q: "¿Y si nunca reporté el delito?", a: "Necesitas una certificación de las autoridades, pero todavía puede ser posible reportarlo ahora. Habla con Vannia antes de contactar a la agencia." },
        { q: "¿La persona que me hizo daño tiene que ser condenada?", a: "No. Lo que importa es que fuiste víctima y ayudaste en la investigación, no si alguien fue condenado." },
        { q: "¿Puede incluirse a mi familia?", a: "Sí, ciertos familiares pueden incluirse en tu petición, como tu cónyuge y tus hijos, y en algunos casos padres y hermanos." },
      ],
    },
  },
  {
    slug: "t-visas",
    photo: SVC_PHOTOS[6],
    en: {
      t: "T Visas",
      d: "For survivors of human trafficking who are present in the United States as a result of that trafficking.",
      long: [
        "Trafficking means being forced, tricked, or pressured into work or commercial sex. It includes labor trafficking: being made to work through threats, debt you can never pay off, or having your documents taken. You do not need to have crossed a border to be a victim of trafficking.",
        "The T visa lets survivors stay in the United States, work legally, and after three years, or sooner once the investigation ends, apply for a green card. Certain family members can be included.",
      ],
      process: [
        { t: "Confidential consultation", d: "We listen to your experience and assess whether it meets the legal definition of trafficking." },
        { t: "Build your declaration", d: "We help you tell your story in writing, with supporting evidence where it exists." },
        { t: "File the I-914", d: "We submit your application, including any waiver and family members." },
        { t: "Status, then green card", d: "Once approved, you can work and live here, and we prepare your green card application when you qualify." },
      ],
      requirements: [
        "Your own account of what happened, which is often the most important evidence",
        "Any documents: pay records, messages, police or agency contacts",
        "Information about any cooperation with law enforcement",
        "Your immigration and criminal history",
      ],
      faqs: [
        { q: "I came here on my own. Can I still be a trafficking victim?", a: "Yes. Trafficking is about force, fraud, or coercion, not how you arrived. Many survivors came willingly and were exploited later." },
        { q: "Do I have to testify against the traffickers?", a: "You generally must respond to reasonable requests from law enforcement, but there are exceptions for people under 18 and for trauma." },
        { q: "Can my family be protected too?", a: "Yes. Your spouse and children, and in some cases parents and siblings, can be included." },
      ],
    },
    es: {
      t: "Visas T",
      d: "Para sobrevivientes de trata de personas que se encuentran en Estados Unidos como resultado de esa trata.",
      long: [
        "La trata significa ser obligado, engañado o presionado a trabajar o a realizar actos sexuales comerciales. Incluye la trata laboral: ser obligado a trabajar con amenazas, con una deuda que nunca se puede pagar o quitándote tus documentos. No necesitas haber cruzado una frontera para ser víctima de trata.",
        "La visa T permite a los sobrevivientes quedarse en Estados Unidos, trabajar legalmente y, después de tres años, o antes si termina la investigación, solicitar la residencia. Ciertos familiares pueden incluirse.",
      ],
      process: [
        { t: "Consulta confidencial", d: "Escuchamos tu experiencia y evaluamos si cumple la definición legal de trata." },
        { t: "Preparar tu declaración", d: "Te ayudamos a contar tu historia por escrito, con pruebas cuando existan." },
        { t: "Presentar el I-914", d: "Presentamos tu solicitud, incluido cualquier perdón y tus familiares." },
        { t: "Estatus, luego residencia", d: "Una vez aprobada, puedes vivir y trabajar aquí, y preparamos tu solicitud de residencia cuando califiques." },
      ],
      requirements: [
        "Tu propio relato de lo que pasó, que muchas veces es la prueba más importante",
        "Cualquier documento: registros de pago, mensajes, contactos con la policía o agencias",
        "Información sobre cualquier cooperación con las autoridades",
        "Tu historial migratorio y penal",
      ],
      faqs: [
        { q: "Vine por mi cuenta. ¿Aún puedo ser víctima de trata?", a: "Sí. La trata se trata de fuerza, engaño o coerción, no de cómo llegaste. Muchos sobrevivientes vinieron por voluntad propia y fueron explotados después." },
        { q: "¿Tengo que testificar contra los tratantes?", a: "Por lo general debes responder a pedidos razonables de las autoridades, pero hay excepciones para menores de 18 años y por trauma." },
        { q: "¿Mi familia también puede estar protegida?", a: "Sí. Tu cónyuge e hijos, y en algunos casos padres y hermanos, pueden incluirse." },
      ],
    },
  },
  {
    slug: "vawa",
    photo: SVC_PHOTOS[7],
    en: {
      t: "VAWA",
      d: "Under the Violence Against Women Act, certain spouses, children, and parents who have suffered abuse can petition for status on their own, without the abuser's knowledge or consent.",
      long: [
        "If your U.S. citizen or permanent resident spouse, parent, or adult U.S. citizen child has abused you, you may be able to petition for yourself (Form I-360) instead of depending on them. Abuse includes physical violence and also extreme cruelty: threats, isolation, control, and emotional abuse.",
        "VAWA protects men and women equally. The law keeps your case confidential, and immigration authorities cannot share it with the abuser. Once the petition is approved, you can apply for a green card.",
      ],
      process: [
        { t: "Safe, confidential consultation", d: "We talk about your situation and your safety first, then whether VAWA fits." },
        { t: "Gather evidence", d: "Your declaration, plus any records of the relationship and the abuse." },
        { t: "File the I-360", d: "We submit your self-petition. The abuser is not notified." },
        { t: "Green card", d: "After approval, or at the same time in some cases, we file your green card application." },
      ],
      requirements: [
        "Proof of the abuser's U.S. citizenship or permanent residence",
        "Proof of the relationship, and for spouses, that the marriage was in good faith",
        "Evidence of the abuse: your declaration, photos, messages, medical or counseling records, statements from people who know",
        "Proof that you lived with the abuser",
      ],
      faqs: [
        { q: "Can men apply under VAWA?", a: "Yes. Despite its name, VAWA protects survivors of any gender." },
        { q: "Will the abuser find out?", a: "Federal law protects the confidentiality of your case. Immigration authorities cannot contact the abuser about it or share your information with them." },
        { q: "I don't have a police report. Can I still apply?", a: "Yes. A police report helps but is not required. Your own statement and other evidence can be enough." },
      ],
    },
    es: {
      t: "VAWA",
      d: "Bajo la Ley de Violencia Contra la Mujer, ciertos cónyuges, hijos y padres que han sufrido abuso pueden pedir estatus por su cuenta, sin el conocimiento ni el consentimiento del abusador.",
      long: [
        "Si tu cónyuge, padre o hijo adulto, ciudadano o residente permanente, te ha maltratado, es posible que puedas hacer la petición por ti mismo (Formulario I-360) en lugar de depender de esa persona. El abuso incluye la violencia física y también la crueldad extrema: amenazas, aislamiento, control y abuso emocional.",
        "VAWA protege por igual a hombres y mujeres. La ley mantiene tu caso confidencial, y las autoridades de inmigración no pueden compartirlo con el abusador. Una vez aprobada la petición, puedes solicitar la residencia.",
      ],
      process: [
        { t: "Consulta segura y confidencial", d: "Primero hablamos de tu situación y de tu seguridad, y luego de si VAWA aplica." },
        { t: "Reunir pruebas", d: "Tu declaración, más cualquier registro de la relación y del abuso." },
        { t: "Presentar el I-360", d: "Presentamos tu autopetición. El abusador no es notificado." },
        { t: "Residencia", d: "Después de la aprobación, o al mismo tiempo en algunos casos, presentamos tu solicitud de residencia." },
      ],
      requirements: [
        "Prueba de la ciudadanía o residencia permanente del abusador",
        "Prueba de la relación y, para cónyuges, de que el matrimonio fue de buena fe",
        "Pruebas del abuso: tu declaración, fotos, mensajes, registros médicos o de consejería, testimonios de personas que saben",
        "Prueba de que viviste con el abusador",
      ],
      faqs: [
        { q: "¿Los hombres pueden aplicar bajo VAWA?", a: "Sí. A pesar de su nombre, VAWA protege a sobrevivientes de cualquier género." },
        { q: "¿El abusador se enterará?", a: "La ley federal protege la confidencialidad de tu caso. Las autoridades de inmigración no pueden contactar al abusador ni compartir tu información con esa persona." },
        { q: "No tengo un reporte policial. ¿Aún puedo aplicar?", a: "Sí. Un reporte policial ayuda pero no es obligatorio. Tu propia declaración y otras pruebas pueden ser suficientes." },
      ],
    },
  },
  {
    slug: "sijs",
    photo: SVC_PHOTOS[8],
    en: {
      t: "Special Immigrant Juvenile Status (SIJS)",
      d: "For young people who cannot be reunited with one or both parents because of abuse, abandonment, or neglect, and for whom returning home would not be in their best interest.",
      long: [
        "SIJS is a path to a green card for unmarried young people under 21. It starts in state court, not immigration court: a judge in a custody, guardianship, or dependency case must find that you cannot reunite with one or both parents because of abuse, abandonment, or neglect, and that returning to your home country is not in your best interest.",
        "With that order, you file an immigration petition (Form I-360), and then apply for a green card when a visa is available. Timing matters, because the age limits are strict and state court can take months.",
      ],
      process: [
        { t: "Assess the case", d: "We review your family history and age to confirm the timeline works." },
        { t: "State court order", d: "We work to obtain the required findings from a state court judge." },
        { t: "File the I-360", d: "We submit the SIJS petition with the court order before you turn 21." },
        { t: "Green card", d: "When a visa is available for your country, we file your green card application." },
      ],
      requirements: [
        "Your birth certificate and proof of age",
        "Information about your parents and what happened with them",
        "Any records of abuse, neglect, or abandonment, such as school, medical, or agency records",
        "Information about who is caring for you now",
      ],
      faqs: [
        { q: "Is there an age deadline?", a: "Yes. You must file the SIJS petition before you turn 21, and you need the state court order first. State courts may have earlier cutoffs, so start as early as possible." },
        { q: "Do both parents have to be involved?", a: "No. In many cases, it is enough that reunification with one parent is not possible." },
        { q: "Can I petition for my parents later?", a: "No. A person who gets a green card through SIJS can never petition for either parent, including a parent who did nothing wrong." },
      ],
    },
    es: {
      t: "Estatus Especial de Inmigrante Juvenil (SIJS)",
      d: "Para jóvenes que no pueden reunirse con uno o ambos padres por abuso, abandono o negligencia, y para quienes regresar a su país no sería lo mejor.",
      long: [
        "SIJS es un camino a la residencia para jóvenes solteros menores de 21 años. Empieza en una corte estatal, no en la corte de inmigración: un juez, en un caso de custodia, tutela o dependencia, debe determinar que no puedes reunirte con uno o ambos padres por abuso, abandono o negligencia, y que regresar a tu país no es lo mejor para ti.",
        "Con esa orden, presentas una petición migratoria (Formulario I-360) y luego solicitas la residencia cuando haya una visa disponible. Los tiempos importan, porque los límites de edad son estrictos y la corte estatal puede tardar meses.",
      ],
      process: [
        { t: "Evaluar el caso", d: "Revisamos tu historia familiar y tu edad para confirmar que los tiempos funcionan." },
        { t: "Orden de la corte estatal", d: "Trabajamos para obtener las determinaciones necesarias de un juez estatal." },
        { t: "Presentar el I-360", d: "Presentamos la petición SIJS con la orden de la corte antes de que cumplas 21 años." },
        { t: "Residencia", d: "Cuando haya una visa disponible para tu país, presentamos tu solicitud de residencia." },
      ],
      requirements: [
        "Tu acta de nacimiento y prueba de tu edad",
        "Información sobre tus padres y lo que pasó con ellos",
        "Cualquier registro de abuso, negligencia o abandono, como registros escolares, médicos o de agencias",
        "Información sobre quién te cuida ahora",
      ],
      faqs: [
        { q: "¿Hay una fecha límite por edad?", a: "Sí. Debes presentar la petición SIJS antes de cumplir 21 años, y primero necesitas la orden de la corte estatal. Las cortes estatales pueden tener límites más tempranos, así que empieza lo antes posible." },
        { q: "¿Tienen que estar involucrados ambos padres?", a: "No. En muchos casos basta con que no sea posible reunirse con uno de los padres." },
        { q: "¿Podré pedir a mis padres después?", a: "No. Quien obtiene la residencia por SIJS nunca puede hacer una petición para ninguno de sus padres, incluso el que no hizo nada malo." },
      ],
    },
  },
  {
    slug: "waivers",
    photo: SVC_PHOTOS[9],
    en: {
      t: "Waivers",
      d: "Requests to forgive a ground of inadmissibility that would otherwise block a visa or a green card, often based on the hardship a close family member would suffer.",
      long: [
        "Some things in your past, such as time in the U.S. without status, a misstatement on an old application, certain criminal convictions, or a prior deportation, can block a green card even when you otherwise qualify. A waiver asks the government to forgive that problem.",
        "The most common waivers are the I-601A provisional waiver, filed in the U.S. before a consular interview, the I-601, and the I-212 permission to reapply after deportation. Most require showing that a U.S. citizen or permanent resident relative would suffer extreme hardship if you were not allowed to stay.",
      ],
      process: [
        { t: "Identify the problem", d: "We pinpoint exactly which ground of inadmissibility applies and which waiver covers it." },
        { t: "Build the hardship case", d: "We document the medical, financial, emotional, and family impact on your qualifying relative." },
        { t: "File the waiver", d: "We submit the waiver with a detailed legal brief and evidence." },
        { t: "Interview and visa", d: "Once approved, you complete your interview and receive your visa or green card." },
      ],
      requirements: [
        "Your full immigration history, including every entry, exit, and prior application",
        "Proof of your relationship to the U.S. citizen or resident relative",
        "Medical, financial, and psychological records showing hardship",
        "Any criminal records, if relevant",
      ],
      faqs: [
        { q: "What counts as extreme hardship?", a: "More than the normal sadness of separation. Serious medical conditions, financial dependence, caring for others, and dangerous conditions in your home country are all considered together." },
        { q: "Who counts as a qualifying relative?", a: "It depends on the waiver. For the I-601A provisional waiver, it must be your U.S. citizen or permanent resident spouse or parent." },
        { q: "What are the 3- and 10-year bars?", a: "If you stayed in the U.S. without status for more than 180 days and then left, you can be barred from returning for 3 years; more than a year, 10 years. A waiver can forgive these bars." },
      ],
    },
    es: {
      t: "Perdones (Waivers)",
      d: "Solicitudes para perdonar una causa de inadmisibilidad que de otro modo impediría una visa o la residencia, con frecuencia basadas en la dificultad que sufriría un familiar cercano.",
      long: [
        "Algunas cosas de tu pasado, como tiempo en EE. UU. sin estatus, un error en una solicitud anterior, ciertas condenas o una deportación previa, pueden impedir la residencia incluso cuando calificas en todo lo demás. Un perdón le pide al gobierno que perdone ese problema.",
        "Los perdones más comunes son el perdón provisional I-601A, que se presenta en EE. UU. antes de la entrevista consular, el I-601, y el I-212, el permiso para volver a solicitar después de una deportación. La mayoría requiere demostrar que un familiar ciudadano o residente sufriría una dificultad extrema si no se te permitiera quedarte.",
      ],
      process: [
        { t: "Identificar el problema", d: "Determinamos exactamente qué causa de inadmisibilidad aplica y qué perdón la cubre." },
        { t: "Documentar la dificultad", d: "Documentamos el impacto médico, económico, emocional y familiar en tu familiar calificado." },
        { t: "Presentar el perdón", d: "Presentamos el perdón con un escrito legal detallado y pruebas." },
        { t: "Entrevista y visa", d: "Una vez aprobado, completas tu entrevista y recibes tu visa o tu residencia." },
      ],
      requirements: [
        "Tu historial migratorio completo, incluida cada entrada, salida y solicitud anterior",
        "Prueba de tu relación con el familiar ciudadano o residente",
        "Registros médicos, económicos y psicológicos que muestren la dificultad",
        "Cualquier antecedente penal, si aplica",
      ],
      faqs: [
        { q: "¿Qué cuenta como dificultad extrema?", a: "Más que la tristeza normal de una separación. Se consideran en conjunto enfermedades graves, dependencia económica, el cuidado de otras personas y condiciones peligrosas en tu país." },
        { q: "¿Quién cuenta como familiar calificado?", a: "Depende del perdón. Para el perdón provisional I-601A, debe ser tu cónyuge o tu padre o madre ciudadano o residente permanente." },
        { q: "¿Qué son los castigos de 3 y 10 años?", a: "Si estuviste en EE. UU. sin estatus más de 180 días y luego saliste, puedes tener prohibido regresar por 3 años; más de un año, por 10 años. Un perdón puede perdonar estos castigos." },
      ],
    },
  },
  {
    slug: "asylum",
    photo: SVC_PHOTOS[10],
    en: {
      t: "Asylum, Withholding of Removal & Relief Under the Convention Against Torture",
      d: "Protection for people who fear persecution or torture if they are returned to their home country.",
      long: [
        "Asylum protects people who have been persecuted, or fear persecution, because of their race, religion, nationality, political opinion, or membership in a particular social group. In most cases you must apply within one year of arriving in the United States. Asylum leads to a green card and can include your spouse and children.",
        "Withholding of removal and protection under the Convention Against Torture (CAT) are related forms of protection. They have no one-year deadline but are harder to win, do not lead to a green card, and do not cover family members. Vannia evaluates all three for every case.",
      ],
      process: [
        { t: "Hear your story", d: "We talk through what happened and why you fear returning, in a confidential setting." },
        { t: "Gather evidence", d: "Your declaration, identity documents, witness statements, and reports on conditions in your country." },
        { t: "File the I-589", d: "We file with USCIS, or in immigration court if you are in removal proceedings." },
        { t: "Interview or hearing", d: "Vannia prepares you to testify and represents you at the interview or hearing." },
      ],
      requirements: [
        "Passport, national ID, or other proof of identity and nationality",
        "Your date of arrival in the U.S.",
        "Any evidence of the harm or threats: medical records, police reports, photos, messages, news articles",
        "Names and details of family members to include",
      ],
      faqs: [
        { q: "I've been here more than a year. Is it too late?", a: "Not necessarily. There are exceptions for changed or extraordinary circumstances. Even if asylum is barred, withholding of removal and CAT have no deadline." },
        { q: "What is the difference between asylum, withholding, and CAT?", a: "Asylum leads to a green card and can protect your family. Withholding and CAT only prevent deportation to that country, require stronger proof, and do not cover family." },
        { q: "Can I work while my case is pending?", a: "After your application has been pending for the period set by law, you may be able to apply for a work permit. We track that date for you." },
      ],
    },
    es: {
      t: "Asilo, Retención de Deportación y Protección bajo la Convención Contra la Tortura",
      d: "Protección para personas que temen persecución o tortura si son devueltas a su país de origen.",
      long: [
        "El asilo protege a personas que han sido perseguidas, o temen ser perseguidas, por su raza, religión, nacionalidad, opinión política o pertenencia a un grupo social determinado. En la mayoría de los casos debes solicitarlo dentro del primer año de haber llegado a Estados Unidos. El asilo lleva a la residencia y puede incluir a tu cónyuge e hijos.",
        "La retención de deportación y la protección bajo la Convención Contra la Tortura (CAT) son formas de protección relacionadas. No tienen fecha límite de un año, pero son más difíciles de ganar, no llevan a la residencia y no cubren a familiares. Vannia evalúa las tres opciones en cada caso.",
      ],
      process: [
        { t: "Escuchar tu historia", d: "Hablamos de lo que pasó y de por qué temes regresar, en un espacio confidencial." },
        { t: "Reunir pruebas", d: "Tu declaración, documentos de identidad, testimonios y reportes sobre las condiciones en tu país." },
        { t: "Presentar el I-589", d: "Presentamos ante USCIS, o ante la corte de inmigración si estás en proceso de deportación." },
        { t: "Entrevista o audiencia", d: "Vannia te prepara para testificar y te representa en la entrevista o audiencia." },
      ],
      requirements: [
        "Pasaporte, identificación nacional u otra prueba de identidad y nacionalidad",
        "Tu fecha de llegada a EE. UU.",
        "Cualquier prueba del daño o las amenazas: registros médicos, reportes policiales, fotos, mensajes, noticias",
        "Nombres y datos de los familiares a incluir",
      ],
      faqs: [
        { q: "Llevo más de un año aquí. ¿Es demasiado tarde?", a: "No necesariamente. Hay excepciones por circunstancias cambiadas o extraordinarias. Aunque el asilo no sea posible, la retención de deportación y CAT no tienen fecha límite." },
        { q: "¿Cuál es la diferencia entre asilo, retención y CAT?", a: "El asilo lleva a la residencia y puede proteger a tu familia. La retención y CAT solo impiden la deportación a ese país, requieren pruebas más fuertes y no cubren a la familia." },
        { q: "¿Puedo trabajar mientras mi caso está pendiente?", a: "Después de que tu solicitud haya estado pendiente el tiempo que fija la ley, es posible que puedas pedir un permiso de trabajo. Nosotros llevamos el control de esa fecha." },
      ],
    },
  },
  {
    slug: "immigration-appeals",
    photo: SVC_PHOTOS[11],
    en: {
      t: "Immigration Appeals",
      d: "Challenging a denial or an adverse decision before the Board of Immigration Appeals and other reviewing bodies.",
      long: [
        "A denial is not always the final word. Decisions by immigration judges can be appealed to the Board of Immigration Appeals (BIA), and many USCIS denials can be appealed or reconsidered through a motion. Some BIA decisions can then be reviewed by a federal court of appeals.",
        "Deadlines are short and strict, often 30 days, so it matters to act quickly. Vannia reviews the decision and the record, identifies the legal errors, and writes the brief that argues your case.",
      ],
      process: [
        { t: "Review the decision", d: "We read the decision and the record to find the errors and the strongest arguments." },
        { t: "File on time", d: "We file the notice of appeal or motion before the deadline." },
        { t: "Write the brief", d: "We prepare a written legal argument explaining why the decision should be reversed." },
        { t: "Decision and next steps", d: "If the appeal succeeds, your case moves forward. If not, we explain any further options." },
      ],
      requirements: [
        "The written decision you received, with its date",
        "The full record: applications, evidence, and hearing transcripts if available",
        "Any notices from the court, BIA, or USCIS",
        "Any new evidence, though it is often handled through a separate motion",
      ],
      faqs: [
        { q: "How long do I have to appeal?", a: "An appeal of an immigration judge's decision must reach the BIA within 30 days. Many USCIS appeals and motions also have a 30-day deadline. Contact us as soon as you receive the decision." },
        { q: "Can I stay in the U.S. while my appeal is pending?", a: "In most appeals of an immigration judge's removal order to the BIA, deportation is paused while the appeal is decided. In federal court, you generally have to ask for a stay." },
        { q: "Can I add new evidence on appeal?", a: "The BIA usually reviews only the existing record. New evidence is generally presented through a motion to reopen or remand." },
      ],
    },
    es: {
      t: "Apelaciones de Inmigración",
      d: "Impugnar una negación o una decisión desfavorable ante la Junta de Apelaciones de Inmigración y otras instancias de revisión.",
      long: [
        "Una negación no siempre es la última palabra. Las decisiones de los jueces de inmigración se pueden apelar ante la Junta de Apelaciones de Inmigración (BIA), y muchas negaciones de USCIS se pueden apelar o reconsiderar mediante una moción. Algunas decisiones de la BIA pueden luego ser revisadas por una corte federal de apelaciones.",
        "Los plazos son cortos y estrictos, muchas veces de 30 días, así que es importante actuar rápido. Vannia revisa la decisión y el expediente, identifica los errores legales y redacta el escrito que defiende tu caso.",
      ],
      process: [
        { t: "Revisar la decisión", d: "Leemos la decisión y el expediente para encontrar los errores y los argumentos más fuertes." },
        { t: "Presentar a tiempo", d: "Presentamos el aviso de apelación o la moción antes de la fecha límite." },
        { t: "Redactar el escrito", d: "Preparamos un argumento legal por escrito que explica por qué la decisión debe revertirse." },
        { t: "Decisión y próximos pasos", d: "Si la apelación tiene éxito, tu caso avanza. Si no, te explicamos las demás opciones." },
      ],
      requirements: [
        "La decisión escrita que recibiste, con su fecha",
        "El expediente completo: solicitudes, pruebas y transcripciones de audiencias si están disponibles",
        "Cualquier aviso de la corte, la BIA o USCIS",
        "Cualquier prueba nueva, aunque muchas veces se maneja con una moción aparte",
      ],
      faqs: [
        { q: "¿Cuánto tiempo tengo para apelar?", a: "Una apelación de la decisión de un juez de inmigración debe llegar a la BIA dentro de 30 días. Muchas apelaciones y mociones ante USCIS también tienen un plazo de 30 días. Contáctanos en cuanto recibas la decisión." },
        { q: "¿Puedo quedarme en EE. UU. mientras se decide mi apelación?", a: "En la mayoría de las apelaciones ante la BIA de una orden de deportación de un juez, la deportación se detiene mientras se decide. En la corte federal, por lo general hay que pedir una suspensión." },
        { q: "¿Puedo agregar pruebas nuevas en la apelación?", a: "La BIA normalmente revisa solo el expediente existente. Las pruebas nuevas por lo general se presentan con una moción para reabrir o devolver el caso." },
      ],
    },
  },
];
