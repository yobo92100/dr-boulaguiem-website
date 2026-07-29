import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "ghost" | "whatsapp" | "gold";
  size?: "md" | "lg";
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const sizes = {
  md: "min-h-11 px-5 py-3 text-sm",
  lg: "min-h-[3.25rem] px-7 py-3.5 text-[15px]"
};

const variants = {
  primary:
    "bg-forest-700 text-cream shadow-soft hover:bg-forest-800 hover:shadow-lift hover:-translate-y-0.5 focus-visible:outline-forest-600",
  secondary:
    "border border-forest-700/20 bg-white/70 text-forest-800 backdrop-blur hover:border-forest-700/40 hover:bg-white hover:-translate-y-0.5 focus-visible:outline-forest-600",
  ghost:
    "text-forest-800 hover:bg-forest-700/5 focus-visible:outline-forest-600",
  gold:
    "bg-gold text-white shadow-soft hover:bg-gold-dark hover:-translate-y-0.5 focus-visible:outline-gold",
  whatsapp:
    "bg-forest-700 text-cream shadow-soft hover:bg-forest-800 hover:-translate-y-0.5 focus-visible:outline-forest-600"
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href.startsWith("http") || href.startsWith("#")) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
