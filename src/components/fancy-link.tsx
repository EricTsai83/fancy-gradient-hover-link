"use client";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function FancyLink({ href, children, className = "" }: Props) {
  return (
    <a
      href={href}
      className={`group relative block border-t border-white/50 text-white no-underline text-[clamp(2em,8vmin,7em)] p-[clamp(0.25em,1vmin,1em)] px-[clamp(1em,4vmin,4em)] overflow-hidden ${className}`}
    >
      {children}
      <span
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-blue to-light-blue transform -translate-x-full transition-transform duration-200 group-hover:translate-x-0"
        aria-hidden="true"
      />
    </a>
  );
}
