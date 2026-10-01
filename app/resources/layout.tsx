import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recursos",
  description:
    "Recursos oficiales de inmigración del gobierno y de organizaciones nacionales, seleccionados por la abogada Vannia Glasinovic.",
};

export default function ResourcesLayout({ children }: LayoutProps<"/resources">) {
  return children;
}
