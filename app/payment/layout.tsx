import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Make a Payment",
  description:
    "Pay your legal fees online through our secure Docketwise client portal.",
};

export default function PaymentLayout({ children }: LayoutProps<"/payment">) {
  return children;
}
