import type { Metadata } from "next";
import { services } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const svc = services.find((s) => s.slug === slug);
  if (!svc) return { title: "Services" };
  return { title: svc.en.t, description: svc.en.d };
}

export default function ServiceDetailLayout({ children }: LayoutProps<"/services/[slug]">) {
  return children;
}
