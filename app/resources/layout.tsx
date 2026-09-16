import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Official government and national-organization immigration resources, curated by attorney Vannia Glasinovic.",
};

export default function ResourcesLayout({ children }: LayoutProps<"/resources">) {
  return children;
}
