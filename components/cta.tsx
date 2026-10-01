import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// Primary pill button with its arrow nested in its own circle. `external` opens in a new tab.
export function Cta({
  href,
  children,
  external,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}) {
  const cls = `group inline-flex items-center justify-between gap-4 rounded-full bg-[#B84832] hover:bg-[#9E3C29] pl-7 pr-1.5 py-1.5 text-white text-[11px] tracking-[0.22em] uppercase font-semibold transition-[background-color,transform] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] ${className}`;
  const inner = (
    <>
      <span className="py-2.5">{children}</span>
      <span className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105">
        <ArrowUpRight size={15} strokeWidth={1.75} />
      </span>
    </>
  );
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
  ) : (
    <Link href={href} className={cls}>{inner}</Link>
  );
}
