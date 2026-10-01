import type { Metadata } from "next";
import { Geist, Lora } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["italic", "normal"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin", "latin-ext"],
});

const TITLE_DEFAULT = "Vannia Glasinovic | Abogada de Inmigración y Medio Ambiente en Eugene, Oregón";
const DESCRIPTION =
  "Abogada de inmigración y derecho ambiental en Eugene, Oregón. Ciudadanía, asilo, defensa contra la deportación y más, en español e inglés.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE_DEFAULT,
    template: "%s — Vannia Glasinovic",
  },
  description: DESCRIPTION,
  openGraph: {
    title: TITLE_DEFAULT,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Vannia Glasinovic",
    locale: "es_US",
    alternateLocale: ["en_US"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE_DEFAULT,
    description: DESCRIPTION,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Attorney",
  name: "Vannia Glasinovic",
  legalName: "Glasinovic Law Office",
  url: SITE_URL,
  telephone: "+15419085079",
  email: "vannia.glasinovic@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Eugene",
    addressRegion: "OR",
    addressCountry: "US",
  },
  areaServed: ["Oregon", "California"],
  knowsLanguage: ["en", "es"],
  description: DESCRIPTION,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${lora.variable} ${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
