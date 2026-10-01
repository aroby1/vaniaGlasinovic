import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Cómo Glasinovic Law Office recopila, usa y protege tu información.",
};

export default function PrivacyLayout({ children }: LayoutProps<"/privacy">) {
  return children;
}
