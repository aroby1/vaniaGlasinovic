import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book with Me",
  description:
    "Book a consultation with Vannia Glasinovic, in English or Spanish.",
};

export default function BookLayout({ children }: LayoutProps<"/book">) {
  return children;
}
