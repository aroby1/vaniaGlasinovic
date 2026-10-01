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
};

// The 12 practice areas Vannia listed, in her order.
export const services: { photo: string; en: ServiceCopy; es: ServiceCopy }[] = [
  {
    photo: SVC_PHOTOS[0],
    en: {
      t: "Removal/Deportation Defense",
      d: "If you have been placed in removal proceedings, Vannia represents you in immigration court and works to identify every form of relief available in your case.",
    },
    es: {
      t: "Defensa Contra la Deportación",
      d: "Si te encuentras en proceso de deportación, Vannia te representa ante la corte de inmigración y busca toda forma de alivio disponible en tu caso.",
    },
  },
  {
    photo: SVC_PHOTOS[1],
    en: {
      t: "Family-Based Petitions",
      d: "Petitions that allow U.S. citizens and lawful permanent residents to bring a spouse, child, parent, or sibling to live with them in the United States.",
    },
    es: {
      t: "Peticiones Familiares",
      d: "Peticiones que permiten a ciudadanos y residentes permanentes traer a su cónyuge, hijo, padre o hermano a vivir con ellos en Estados Unidos.",
    },
  },
  {
    photo: SVC_PHOTOS[2],
    en: {
      t: "Naturalization",
      d: "The final step for lawful permanent residents ready to become U.S. citizens, from the N-400 application through the civics test and the oath ceremony.",
    },
    es: {
      t: "Naturalización",
      d: "El último paso para residentes permanentes listos para convertirse en ciudadanos, desde la solicitud N-400 hasta el examen cívico y la ceremonia de juramento.",
    },
  },
  {
    photo: SVC_PHOTOS[3],
    en: {
      t: "Adjustment of Status & LPR Card Renewals",
      d: "Applying for a green card from inside the United States, and renewing or replacing a lawful permanent resident card that has expired or been lost.",
    },
    es: {
      t: "Ajuste de Estatus y Renovación de Residencia",
      d: "Solicitar la residencia permanente desde dentro de Estados Unidos, y renovar o reemplazar una tarjeta de residencia vencida o perdida.",
    },
  },
  {
    photo: SVC_PHOTOS[4],
    en: {
      t: "DACA",
      d: "Deferred Action for Childhood Arrivals, for people brought to the United States as children. Vannia handles both first-time requests and renewals.",
    },
    es: {
      t: "DACA",
      d: "Acción Diferida para los Llegados en la Infancia, para personas traídas a Estados Unidos siendo niños. Vannia maneja solicitudes nuevas y renovaciones.",
    },
  },
  {
    photo: SVC_PHOTOS[5],
    en: {
      t: "U Visas",
      d: "For survivors of qualifying criminal activity who have helped, or are willing to help, law enforcement investigate or prosecute the crime.",
    },
    es: {
      t: "Visas U",
      d: "Para sobrevivientes de ciertos delitos que han ayudado, o están dispuestos a ayudar, a las autoridades a investigar o procesar el delito.",
    },
  },
  {
    photo: SVC_PHOTOS[6],
    en: {
      t: "T Visas",
      d: "For survivors of human trafficking who are present in the United States as a result of that trafficking.",
    },
    es: {
      t: "Visas T",
      d: "Para sobrevivientes de trata de personas que se encuentran en Estados Unidos como resultado de esa trata.",
    },
  },
  {
    photo: SVC_PHOTOS[7],
    en: {
      t: "VAWA",
      d: "Under the Violence Against Women Act, certain spouses, children, and parents who have suffered abuse can petition for status on their own, without the abuser's knowledge or consent.",
    },
    es: {
      t: "VAWA",
      d: "Bajo la Ley de Violencia Contra la Mujer, ciertos cónyuges, hijos y padres que han sufrido abuso pueden pedir estatus por su cuenta, sin el conocimiento ni el consentimiento del abusador.",
    },
  },
  {
    photo: SVC_PHOTOS[8],
    en: {
      t: "Special Immigrant Juvenile Status (SIJS)",
      d: "For young people who cannot be reunited with one or both parents because of abuse, abandonment, or neglect, and for whom returning home would not be in their best interest.",
    },
    es: {
      t: "Estatus Especial de Inmigrante Juvenil (SIJS)",
      d: "Para jóvenes que no pueden reunirse con uno o ambos padres por abuso, abandono o negligencia, y para quienes regresar a su país no sería lo mejor.",
    },
  },
  {
    photo: SVC_PHOTOS[9],
    en: {
      t: "Waivers",
      d: "Requests to forgive a ground of inadmissibility that would otherwise block a visa or a green card, often based on the hardship a close family member would suffer.",
    },
    es: {
      t: "Perdones (Waivers)",
      d: "Solicitudes para perdonar una causa de inadmisibilidad que de otro modo impediría una visa o la residencia, con frecuencia basadas en la dificultad que sufriría un familiar cercano.",
    },
  },
  {
    photo: SVC_PHOTOS[10],
    en: {
      t: "Asylum, Withholding of Removal & Relief Under the Convention Against Torture",
      d: "Protection for people who fear persecution or torture if they are returned to their home country.",
    },
    es: {
      t: "Asilo, Retención de Deportación y Protección bajo la Convención Contra la Tortura",
      d: "Protección para personas que temen persecución o tortura si son devueltas a su país de origen.",
    },
  },
  {
    photo: SVC_PHOTOS[11],
    en: {
      t: "Immigration Appeals",
      d: "Challenging a denial or an adverse decision before the Board of Immigration Appeals and other reviewing bodies.",
    },
    es: {
      t: "Apelaciones de Inmigración",
      d: "Impugnar una negación o una decisión desfavorable ante la Junta de Apelaciones de Inmigración y otras instancias de revisión.",
    },
  },
];
