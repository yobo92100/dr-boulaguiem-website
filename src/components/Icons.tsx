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

export function FacebookIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.412c0-3.026 1.792-4.697 4.533-4.697 1.313 0 2.686.236 2.686.236v2.971H15.83c-1.491 0-1.956.93-1.956 1.886v2.265h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073Z" />
    </svg>
  );
}

export function InstagramIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
    </svg>
  );
}

export function LinkedInIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0Z" />
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

/**
 * Open palm, fingers up, thumb swinging out to the left — one continuous
 * outline, so it scales cleanly and follows the surrounding text colour.
 */
export function HandIcon({ className = "h-5 w-5" }: IconProps) {
  return base(
    <>
      {/* the three inner fingers */}
      <path d="M11.1 10.6V2.9a1.6 1.6 0 0 1 3.2 0v7.7" />
      <path d="M14.3 10.6V4a1.6 1.6 0 0 1 3.2 0v6.6" />
      {/* index down the left side, thumb, palm, and up the right side */}
      <path d="M7.9 13.6V4.4a1.6 1.6 0 0 1 3.2 0v6.2" />
      <path d="M7.9 13.6 6.2 11.3a1.7 1.7 0 0 0-2.8 1.9l3.3 5.7A7.3 7.3 0 0 0 13 22.5h1.3a6.3 6.3 0 0 0 6.3-6.3V6.1a1.6 1.6 0 0 0-3.2 0v4.5" />
    </>,
    className
  );
}

/**
 * Three acupuncture needles set into the skin, each with its looped handle —
 * splayed slightly apart, the way they actually sit.
 */
export function NeedleIcon({ className = "h-5 w-5" }: IconProps) {
  return base(
    <>
      {/* left needle, leaning out */}
      <circle cx="5.6" cy="4.2" r="1.5" />
      <path d="m5.9 5.7 1.5 11.5" />
      {/* centre needle, upright */}
      <circle cx="12" cy="3.6" r="1.5" />
      <path d="M12 5.1v12.2" />
      {/* right needle, leaning out */}
      <circle cx="18.4" cy="4.2" r="1.5" />
      <path d="m18.1 5.7-1.5 11.5" />
      {/* the skin they enter */}
      <path d="M3.2 19.8c2.9-1.5 5.8-2.2 8.8-2.2s5.9.7 8.8 2.2" />
    </>,
    className
  );
}

/**
 * Three seeds arranged in a triangle, each pointed at both ends with its own
 * inner vein — the shape used for the gentlest Sujok technique.
 */
export function SeedIcon({ className = "h-5 w-5" }: IconProps) {
  return base(
    <>
      {/* top-left seed, tilted up to the right */}
      <g transform="rotate(-42 8.4 7.4)">
        <path d="M8.4 1.9c2.7 2.1 2.7 8.9 0 11-2.7-2.1-2.7-8.9 0-11Z" />
        <path d="M8.4 4.2c-.9 1.9-.9 4.9 0 6.8" />
      </g>
      {/* right seed, tilted down to the right */}
      <g transform="rotate(38 16.4 14.2)">
        <path d="M16.4 8.7c2.7 2.1 2.7 8.9 0 11-2.7-2.1-2.7-8.9 0-11Z" />
        <path d="M16.4 11c-.9 1.9-.9 4.9 0 6.8" />
      </g>
      {/* bottom-left seed */}
      <g transform="rotate(-12 7.6 16.6)">
        <path d="M7.6 11.1c2.7 2.1 2.7 8.9 0 11-2.7-2.1-2.7-8.9 0-11Z" />
        <path d="M7.6 13.4c-.9 1.9-.9 4.9 0 6.8" />
      </g>
    </>,
    className
  );
}

export function DownloadIcon({ className = "h-4 w-4" }: IconProps) {
  return base(
    <>
      <path d="M12 3v12" />
      <path d="m7.5 10.5 4.5 4.5 4.5-4.5" />
      <path d="M4 20h16" />
    </>,
    className
  );
}

export function ChevronDownIcon({ className = "h-5 w-5" }: IconProps) {
  return base(<path d="m6 9 6 6 6-6" />, className);
}

/** Solid triangle — reads better than a stroked one at small sizes. */
export function PlayIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M8 5.14v13.72a1 1 0 0 0 1.52.85l11.14-6.86a1 1 0 0 0 0-1.7L9.52 4.29A1 1 0 0 0 8 5.14Z" />
    </svg>
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

export function PhoneIcon({ className = "h-4 w-4" }: IconProps) {
  return base(
    <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1.05-.24c1.15.38 2.4.59 3.65.59a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.4 21 3 13.6 3 4.5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.5.59 3.65a1 1 0 0 1-.25 1.05L6.6 10.8Z" />,
    className
  );
}

export function MailIcon({ className = "h-4 w-4" }: IconProps) {
  return base(
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 6.5 8 6.5 8-6.5" />
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
