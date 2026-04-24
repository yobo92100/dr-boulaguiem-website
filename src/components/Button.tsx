import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "bg-medical-blue text-white shadow-soft hover:bg-medical-navy focus-visible:outline-medical-blue",
  secondary:
    "border border-medical-blue/20 bg-white text-medical-navy hover:border-medical-blue hover:bg-medical-sky focus-visible:outline-medical-blue",
  ghost:
    "text-medical-navy hover:bg-medical-sky focus-visible:outline-medical-blue"
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const classes = `inline-flex min-h-11 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`;

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
