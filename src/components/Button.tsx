import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "ghost" | "whatsapp";
};

const variants = {
  primary:
    "bg-medical-blue text-white shadow-soft hover:bg-medical-navy focus-visible:outline-medical-blue",
  secondary:
    "border border-medical-blue/20 bg-white text-medical-navy hover:border-medical-blue hover:bg-medical-sky focus-visible:outline-medical-blue",
  ghost:
    "text-medical-navy hover:bg-medical-sky focus-visible:outline-medical-blue",
  whatsapp:
    "bg-pharmacy-green text-white shadow-soft hover:bg-[#176f5a] focus-visible:outline-pharmacy-green"
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const classes = `inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`;

  if (href.startsWith("http")) {
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
