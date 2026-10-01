import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Defensa contra la deportación, peticiones familiares, naturalización, residencia permanente, DACA, visas U y T, VAWA, SIJS, perdones, asilo y apelaciones migratorias con la abogada Vannia Glasinovic.",
};

export default function ServicesLayout({ children }: LayoutProps<"/services">) {
  return children;
}
