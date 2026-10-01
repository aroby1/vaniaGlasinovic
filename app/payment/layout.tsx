import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hacer un Pago",
  description:
    "Paga tus honorarios legales en línea a través de nuestro portal seguro de clientes Docketwise.",
};

export default function PaymentLayout({ children }: LayoutProps<"/payment">) {
  return children;
}
