import type { Metadata } from "next";

export const metadata: Metadata = {
  // Object form so the site-wide suffix also reaches the /services/[slug] pages.
  title: { default: "Services", template: "%s — Vannia Glasinovic" },
  description:
    "Deportation defense, family petitions, naturalization, green cards, DACA, U and T visas, VAWA, SIJS, waivers, asylum, and immigration appeals with attorney Vannia Glasinovic.",
};

export default function ServicesLayout({ children }: LayoutProps<"/services">) {
  return children;
}
