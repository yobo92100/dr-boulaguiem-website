type LogoMarkProps = {
  className?: string;
  onDark?: boolean;
};

/**
 * Yin-yang leaf, tilted: a leaf split by a true yin-yang curve — the plant
 * world of homeopathy meeting the Eastern medicine of Sujok. On dark
 * backgrounds the dark half turns cream so the mark keeps its contrast.
 */
export function LogoMark({ className = "h-10 w-10", onDark = false }: LogoMarkProps) {
  const yin = onDark ? "fill-cream" : "fill-forest-700";
  const yinDot = onDark ? "fill-forest-700" : "fill-cream";
  const yangDot = onDark ? "fill-cream" : "fill-forest-700";
  const stem = onDark ? "stroke-forest-300" : "stroke-forest-700";

  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <g transform="rotate(28 50 52) translate(0 1)">
        <path
          d="M50 87C49 91 47.5 94.5 45 97.5"
          fill="none"
          strokeWidth="3"
          strokeLinecap="round"
          className={stem}
        />
        <path d="M50 6C76 22 82 60 50 87 18 60 24 22 50 6Z" className="fill-forest-300" />
        <path
          d="M50 6C24 22 18 60 50 87 33 75 34 57 50 47 66 37 64 18 50 6Z"
          className={yin}
        />
        <circle cx="42" cy="32" r="4.3" className={yinDot} />
        <circle cx="58" cy="62" r="4.3" className={yangDot} />
      </g>
    </svg>
  );
}
