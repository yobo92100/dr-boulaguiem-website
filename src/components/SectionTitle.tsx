type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "center" | "left";
  tone?: "dark" | "light";
};

export function SectionTitle({
  eyebrow,
  title,
  text,
  align = "center",
  tone = "dark"
}: SectionTitleProps) {
  const isCenter = align === "center";
  const isLight = tone === "light";

  return (
    <div className={isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className={`eyebrow ${isLight ? "!text-gold-light" : ""}`}>
          <span className="rule-gold" aria-hidden="true" />
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-4 font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl ${
          isLight ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {text ? (
        <p
          className={`mt-5 text-base leading-8 ${
            isLight ? "text-cream/70" : "text-muted"
          } ${isCenter ? "mx-auto max-w-xl" : ""}`}
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}
