import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Citizenship, asylum, deportation defense, permanent residence, temporary status, and case consultations with immigration attorney Vannia Glasinovic.",
};

export default function ServicesLayout({ children }: LayoutProps<"/services">) {
  return children;
}
