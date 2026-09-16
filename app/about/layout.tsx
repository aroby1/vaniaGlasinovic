import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Vannia Glasinovic, an immigration and environmental attorney in Eugene, Oregon who has lived the immigrant journey herself.",
};

export default function AboutLayout({ children }: LayoutProps<"/about">) {
  return children;
}
