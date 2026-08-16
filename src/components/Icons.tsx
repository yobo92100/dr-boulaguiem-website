type IconProps = {
  className?: string;
};

export function WhatsAppIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export function PersonIcon({ className = "h-12 w-12" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 12.25a4.25 4.25 0 1 0 0-8.5 4.25 4.25 0 0 0 0 8.5ZM4.75 20.25c.8-3.25 3.35-5.25 7.25-5.25s6.45 2 7.25 5.25"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function base(children: React.ReactNode, className: string) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function ArrowRightIcon({ className = "h-4 w-4" }: IconProps) {
  return base(
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>,
    className
  );
}

export function LeafIcon({ className = "h-5 w-5" }: IconProps) {
  return base(
    <>
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6" />
    </>,
    className
  );
}

export function SparkIcon({ className = "h-5 w-5" }: IconProps) {
  return base(
    <path d="M12 3v4m0 10v4m9-9h-4M7 12H3m14.66-6.66-2.83 2.83M9.17 14.83l-2.83 2.83m11.32 0-2.83-2.83M9.17 9.17 6.34 6.34" />,
    className
  );
}

export function HandIcon({ className = "h-5 w-5" }: IconProps) {
  return base(
    <>
      <path d="M18 11V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2" />
      <path d="M14 10V4a2 2 0 0 0-2-2 2 2 0 0 0-2 2v2" />
      <path d="M10 10.5V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2v8" />
      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
    </>,
    className
  );
}

export function NeedleIcon({ className = "h-5 w-5" }: IconProps) {
  return base(
    <>
      <path d="m3 21 6-6" />
      <path d="M9 15 20 4" />
      <path d="M16.5 4.5 19.5 7.5" />
      <path d="M18.2 2.8a2.5 2.5 0 0 1 3 3l-1.5 1.7-3.2-3.2 1.7-1.5Z" />
    </>,
    className
  );
}

export function SeedIcon({ className = "h-5 w-5" }: IconProps) {
  return base(
    <>
      <ellipse cx="8" cy="8.5" rx="2.6" ry="3.6" transform="rotate(-38 8 8.5)" />
      <ellipse cx="16" cy="10" rx="2.6" ry="3.6" transform="rotate(38 16 10)" />
      <ellipse cx="12" cy="16.5" rx="2.6" ry="3.6" transform="rotate(-8 12 16.5)" />
    </>,
    className
  );
}

export function CertificateIcon({ className = "h-5 w-5" }: IconProps) {
  return base(
    <>
      <circle cx="12" cy="8" r="5" />
      <path d="M8.5 12.5 7 22l5-3 5 3-1.5-9.5" />
    </>,
    className
  );
}

export function MapPinIcon({ className = "h-4 w-4" }: IconProps) {
  return base(
    <>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </>,
    className
  );
}

export function CalendarIcon({ className = "h-4 w-4" }: IconProps) {
  return base(
    <>
      <rect x="3" y="4.5" width="18" height="17" rx="2.5" />
      <path d="M3 9.5h18M8 2.5v4M16 2.5v4" />
    </>,
    className
  );
}

export function ClockIcon({ className = "h-4 w-4" }: IconProps) {
  return base(
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5V12l3 2" />
    </>,
    className
  );
}

export function CheckIcon({ className = "h-4 w-4" }: IconProps) {
  return base(<path d="m5 13 4 4L19 7" />, className);
}

export function QuoteIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M9.5 5C6.46 5 4 7.46 4 10.5V19h7v-8H7.5c0-1.66 1.34-3 3-3V5H9.5Zm10 0C16.46 5 14 7.46 14 10.5V19h7v-8h-3.5c0-1.66 1.34-3 3-3V5h-1Z" opacity="0.9" />
    </svg>
  );
}

export function StarIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="m12 2.5 2.9 5.88 6.5.94-4.7 4.58 1.11 6.47L12 17.9l-5.81 3.06 1.11-6.47-4.7-4.58 6.5-.94L12 2.5Z" />
    </svg>
  );
}

export function MonitorIcon({ className = "h-5 w-5" }: IconProps) {
  return base(
    <>
      <rect x="3" y="4" width="18" height="12.5" rx="2" />
      <path d="M8 20.5h8M12 16.5v4" />
    </>,
    className
  );
}

export function UsersIcon({ className = "h-5 w-5" }: IconProps) {
  return base(
    <>
      <path d="M16 20v-1.5a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4V20" />
      <circle cx="9" cy="7" r="3.2" />
      <path d="M22 20v-1.5a4 4 0 0 0-3-3.87M16 3.6a4 4 0 0 1 0 7.75" />
    </>,
    className
  );
}

export function MenuIcon({ className = "h-6 w-6" }: IconProps) {
  return base(<path d="M4 7h16M4 12h16M4 17h16" />, className);
}

export function CloseIcon({ className = "h-6 w-6" }: IconProps) {
  return base(<path d="M6 6l12 12M18 6 6 18" />, className);
}
