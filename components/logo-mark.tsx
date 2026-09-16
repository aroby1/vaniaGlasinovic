export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="17" r="12.5" stroke="currentColor" strokeWidth="1.4" opacity="0.4" />
      <path d="M9 22 L16.5 12.5 L24 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="24" cy="7" r="2.1" fill="currentColor" />
    </svg>
  );
}
