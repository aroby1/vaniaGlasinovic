import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["italic", "normal"],
});

const SITE_URL = "https://vanniaglasinovic.com";

const TITLE_DEFAULT = "Vannia Glasinovic | Immigration & Environmental Attorney in Eugene, Oregon";
const DESCRIPTION =
  "Immigration and environmental law attorney in Eugene, Oregon. Citizenship, asylum, deportation defense, and more, in English and Spanish.";

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
    locale: "en_US",
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
    <html lang="en" className={`${lora.variable} h-full antialiased`}>
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
