import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  title: {
    default: "Vannia Glasinovic | Immigration & Environmental Attorney in Eugene, Oregon",
    template: "%s — Vannia Glasinovic",
  },
  description:
    "Immigration and environmental law attorney in Eugene, Oregon. Citizenship, asylum, deportation defense, and more, in English and Spanish.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${lora.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
