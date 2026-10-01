import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acerca De",
  description:
    "Conoce a Vannia Glasinovic, abogada de inmigración y medio ambiente en Eugene, Oregón, que ha vivido en carne propia el camino del inmigrante.",
};

export default function AboutLayout({ children }: LayoutProps<"/about">) {
  return children;
}
