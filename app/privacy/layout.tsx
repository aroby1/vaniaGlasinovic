import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Glasinovic Law Office collects, uses, and protects your information.",
};

export default function PrivacyLayout({ children }: LayoutProps<"/privacy">) {
  return children;
}
