import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consultation Intake",
  description:
    "Complete your consultation intake form ahead of your appointment with Vannia Glasinovic.",
};

export default function IntakeLayout({ children }: LayoutProps<"/intake">) {
  return children;
}
