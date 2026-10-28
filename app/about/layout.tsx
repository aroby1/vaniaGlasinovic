import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acerca De",
  description:
    "Vannia Glasinovic, abogada de inmigración en Eugene, Oregon. Originaria de La Paz, Bolivia, conoce de primera mano el camino del inmigrante.",
};

export default function AboutLayout({ children }: LayoutProps<"/about">) {
  return children;
}
